"use client";

import { useState, useEffect, useRef } from "react";

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
  const [videoSource, setVideoSource] = useState<VideoSource | null>(null);
  const [showPlayer, setShowPlayer] = useState(false);
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  // Generate thumbnail for remote/local video
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
      setThumbnail(dataUrl);
    });
  };

  // Determine video type
  useEffect(() => {
    if (!url) {
      setVideoSource(null);
      setThumbnail(null);
      setShowPlayer(false);
      return;
    }

    const trimmedUrl = url.trim();

    if (trimmedUrl.includes("youtube.com") || trimmedUrl.includes("youtu.be")) {
      setVideoSource({ type: "youtube", url: trimmedUrl });

      // YouTube thumbnail
      let videoId = "";
      if (trimmedUrl.includes("watch?v=")) {
        videoId = trimmedUrl.split("watch?v=")[1].split("&")[0];
      } else if (trimmedUrl.includes("youtu.be")) {
        videoId = trimmedUrl.split("youtu.be/")[1].split("?")[0];
      }

      setThumbnail(`https://img.youtube.com/vi/${videoId}/hqdefault.jpg`);
      setShowPlayer(false);
    } else if (trimmedUrl.startsWith("http")) {
      setVideoSource({ type: "remote", url: trimmedUrl });
      setShowPlayer(false);
      generateThumbnail(trimmedUrl);
    } else {
      setVideoSource({ type: "local", url: trimmedUrl });
      setShowPlayer(false);
      generateThumbnail(trimmedUrl);
    }
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
              {thumbnail && (
                <img
                  src={thumbnail}
                  alt="Video thumbnail"
                  className="w-full h-full object-cover"
                />
              )}
              {/* Simple white play icon */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`w-10 h-10 flex items-center justify-center ${
                    canPlay ? "" : "opacity-50"
                  }`}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-white"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
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
            {thumbnail ? (
              <img
                src={thumbnail}
                alt="Video thumbnail"
                className="w-full h-full object-cover"
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
