"use client";

import { useState, useRef, useCallback, useId } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { addVideo } from "@/store/slices/video-slice";
import UploadIcon from "@/components/icons/upload-icon";
import FileVideo from "@/components/icons/file-video";

interface VideoUploadProps {
  onVideoUpload?: (video: string | null) => void;
  label?: string;
  editIndex?: number | null;
  onEditComplete?: (newVideo: string, index: number) => void;
}

export default function VideoUpload({
  onVideoUpload,
  label = "Video carousel",
  editIndex = null,
  onEditComplete,
}: VideoUploadProps) {
  const dispatch = useAppDispatch();
  const video = useAppSelector((state) => state.video);
  const [uploadError, setUploadError] = useState("");
  const [fileName, setFileName] = useState("MyVideo.mp4");
  const [videoSrc, setVideoSrc] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);
  const id = `video-upload-${useId().replace(/:/g, "-")}`;

  const validateAndProcessFile = useCallback((file: File) => {
    // Validate file type
    const validTypes = ["video/mp4", "video/webm", "video/ogg"];
    if (!validTypes.includes(file.type)) {
      setUploadError("Please upload a valid video file (mp4, webm, ogg)");
      return;
    }

    // Validate file size (50MB)
    const maxSize = 50 * 1024 * 1024; // 50MB
    if (file.size > maxSize) {
      setUploadError("Video size must be less than 50MB");
      return;
    }

    setFileName(file.name);
    setUploadError("");

    // Create a blob URL for preview
    const videoURL = URL.createObjectURL(file);
    setVideoSrc(videoURL);
    onVideoUpload?.(videoURL);

    // Add video to Redux carousel
    dispatch(addVideo({
        ...video.videos,
        url: videoURL,
        title: "",
        description: "",
    }));
  }, [dispatch, onVideoUpload]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndProcessFile(file);
    }
    // Reset input value to allow selecting the same file again
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleEdit = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleDelete = () => {
    setVideoSrc(null);
    setFileName("MyVideo.mp4");
    setUploadError("");
    onVideoUpload?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Drag and drop handlers
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragLeave = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);

  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();

      const files = e.dataTransfer.files;
      if (files && files.length > 0) {
        validateAndProcessFile(files[0]);
      }
    },
    [validateAndProcessFile],
  );

  return (
    <div className="flex flex-col gap-0">
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-[1.5px] border-dashed rounded-[var(--Corner-Radius-10)] p-4 lg:p-6 transition-color duration-300 bg-white hover:bg-[#F7F9FC] ${
          uploadError
            ? "border-[var(--error)]"
            : videoSrc || fileName !== "MyVideo.mp4"
            ? "border-[var(--Blue)]"
            : "border-[var(--Blue)]"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          id={id}
          accept="video/mp4,video/webm,video/ogg"
          onChange={handleFileUpload}
          className="hidden"
        />

        <label htmlFor={id} className="cursor-pointer flex gap-6 items-center">
          <div className="w-20 h-20 p-2 border border-[var(--boarder-grey-50)] flex justify-center items-center rounded-full bg-white">
            <div className="w-full h-full flex items-center justify-center rounded-full bg-[#F7F9FC] p-4">
              <FileVideo />
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-[16px] leading-[24px] font-medium text-[var(--Black)]">
              Upload videos from your device
            </p>
            <p className="text-[14px] leading-[22px] text-left text-[var(--Dark-gray)]">
             Maximum size: 100MB
            </p>
          </div>
        </label>
      </div>

      {uploadError && (
        <p className="text-[12px] leading-[20px] text-[var(--error)] mt-2">
          {uploadError}
        </p>
      )}
    </div>
  );
}
