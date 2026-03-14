"use client";
import PlayCircle from "@/components/icons/play-circle";
import Image from "next/image";
import { useState, useEffect, useRef, useMemo } from "react";

type VideoSource = {
  type: "youtube" | "remote" | "local";
  url: string;
};

interface Props {
  url?: string;
  width?: string | number;
  height?: string | number;
  canPlay?: boolean;
}

export default function UnifiedVideoPlayer({
  url,
  width = "100%",
  height = 360,
  canPlay = true,
}: Props) {
  const [showPlayer, setShowPlayer] = useState(false);
  const [asyncThumbnail, setAsyncThumbnail] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Derive video source from url during render (avoids setState in effect)
  const videoSource = useMemo<VideoSource | null>(() => {
    if (!url?.trim()) return null;
    const trimmedUrl = url.trim();
    if (trimmedUrl.includes("youtube.com") || trimmedUrl.includes("youtu.be")) {
      return { type: "youtube", url: trimmedUrl };
    }
    if (trimmedUrl.startsWith("http")) return { type: "remote", url: trimmedUrl };
    return { type: "local", url: trimmedUrl };
  }, [url]);

  // Derive YouTube thumbnail URL during render
  const youtubeThumbnailUrl = useMemo<string | null>(() => {
    if (videoSource?.type !== "youtube") return null;
    const u = videoSource.url;
    let videoId = "";
    if (u.includes("watch?v=")) videoId = u.split("watch?v=")[1].split("&")[0];
    else if (u.includes("youtu.be/")) videoId = u.split("youtu.be/")[1].split("?")[0];
    return videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : null;
  }, [videoSource]);

  const displayedThumbnail =
    videoSource?.type === "youtube" ? youtubeThumbnailUrl : asyncThumbnail;

  // Generate thumbnail for remote/local video (setState only in async callback)
  const generateThumbnail = (videoUrl: string) => {
    const videoEl = document.createElement("video");
    videoEl.src = videoUrl;
    videoEl.crossOrigin = "anonymous";
    videoEl.muted = true;
    videoEl.currentTime = 1;
    videoEl.addEventListener("loadeddata", () => {
      const canvas = document.createElement("canvas");
      canvas.width = videoEl.videoWidth;
      canvas.height = videoEl.videoHeight;
      const ctx = canvas.getContext("2d");
      if (ctx) ctx.drawImage(videoEl, 0, 0, canvas.width, canvas.height);
      const dataUrl = canvas.toDataURL("image/png");
      setAsyncThumbnail(dataUrl);
    });
  };

  // Sync with external system: clear UI state when url changes; generate thumbnail for remote/local
  useEffect(() => {
    queueMicrotask(() => setShowPlayer(false));
    if (!url?.trim()) {
      queueMicrotask(() => setAsyncThumbnail(null));
      return;
    }
    const trimmedUrl = url.trim();
    if (trimmedUrl.includes("youtube.com") || trimmedUrl.includes("youtu.be")) {
      queueMicrotask(() => setAsyncThumbnail(null));
      return;
    }
    queueMicrotask(() => setAsyncThumbnail(null));
    generateThumbnail(trimmedUrl);
  }, [url]);

  const handlePlayClick = () => {
    if (!canPlay) return;
    setShowPlayer(true);
    if (videoRef.current) videoRef.current.play().catch(() => {});
  };

  return (
    <div className="relative flex flex-col w-full" style={{ width }}>
      {videoSource ? (
        videoSource.type === "youtube" ? (
          showPlayer ? (
            <iframe
              width={width}
              height={height}
              className="rounded-md shadow-md"
              src={videoSource.url.replace("watch?v=", "embed/")}
              title="YouTube video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <div
              className="relative cursor-pointer rounded-md overflow-hidden"
              style={{ width, height }}
              onClick={handlePlayClick}
            >
              {displayedThumbnail && (
                <Image
                  src={displayedThumbnail}
                  alt="Video thumbnail"
                  fill
                  className="object-cover"
                  unoptimized={displayedThumbnail.startsWith("data:")}
                />
              )}
              {/* Simple white play icon */}
              <div
                className={`${canPlay && "inset-0 flex items-center justify-center"}`}
              >
                <PlayCircle className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
              </div>
            </div>
          )
        ) : showPlayer ? (
          <video
            ref={videoRef}
            src={videoSource.url}
            controls
            className="rounded-md shadow-md"
            style={{ width, height }}
          />
        ) : (
          <div
            className="relative cursor-pointer rounded-md overflow-hidden bg-gray-100 flex items-center justify-center"
            style={{ width, height }}
            onClick={handlePlayClick}
          >
            {displayedThumbnail ? (
              <Image
                src={displayedThumbnail}
                alt="Video thumbnail"
                fill
                className="object-cover"
                unoptimized={displayedThumbnail.startsWith("data:")}
              />
            ) : (
              <span className="text-gray-500">Click to play</span>
            )}
            <div className="absolute inset-0 flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className={`h-10 w-10 text-white ${!canPlay ? "opacity-50" : ""}`}
                viewBox="0 0 24 24"
                fill="currentColor"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )
      ) : (
        <p className="text-gray-400 text-center">No video URL provided</p>
      )}
    </div>
  );
}
