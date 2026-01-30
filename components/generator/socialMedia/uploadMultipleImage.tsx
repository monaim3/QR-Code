"use client";
import { useState, useRef, useCallback } from "react";
import NextImage from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import UploadIcon from "@/components/icons/upload-icon";
import Eye from "@/components/icons/eye";

interface ImageUploadProps {
  onCustomLogoUpload?: (logos: string[]) => void; // array now
  onLogoChange?: (logos: string[]) => void;      // array now
  onPreview?: () => void;
}

export default function ImageUpload({
  onCustomLogoUpload,
  onLogoChange,
  onPreview,
}: ImageUploadProps) {
  const [uploadError, setUploadError] = useState("");
  const [files, setFiles] = useState<{ name: string; url: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateAndProcessFile = useCallback(
    (file: File) => {
      const validTypes = ["image/jpeg", "image/jpg", "image/png", "image/svg+xml"];
      if (!validTypes.includes(file.type)) {
        setUploadError("Please upload a valid image file (jpg, png, svg)");
        return;
      }

      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        setUploadError("Image size must be less than 5MB");
        return;
      }

      setUploadError("");

      const reader = new FileReader();
      reader.onload = (event) => {
        const result = event.target?.result;
        if (result && typeof result === "string") {
          setFiles((prev) => {
            const updated = [...prev, { name: file.name, url: result }];
            onCustomLogoUpload?.(updated.map(f => f.url));
            onLogoChange?.(updated.map(f => f.url));
            return updated;
          });
        }
      };
      reader.onerror = () => setUploadError("Failed to read file");
      reader.readAsDataURL(file);
    },
    [onCustomLogoUpload, onLogoChange]
  );

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (uploadedFiles) {
      Array.from(uploadedFiles).forEach(validateAndProcessFile);
    }
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  const handleDelete = (index: number) => {
    setFiles((prev) => {
      const updated = prev.filter((_, i) => i !== index);
      onCustomLogoUpload?.(updated.map(f => f.url));
      onLogoChange?.(updated.map(f => f.url));
      return updated;
    });
  };

  // Drag & drop
  const handleDragEnter = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  }, []);
  const handleDragLeave = handleDragEnter;
  const handleDragOver = handleDragEnter;
  const handleDrop = useCallback(
    (e: React.DragEvent) => {
      e.preventDefault();
      e.stopPropagation();
      const droppedFiles = e.dataTransfer.files;
      if (droppedFiles) {
        Array.from(droppedFiles).forEach(validateAndProcessFile);
      }
    },
    [validateAndProcessFile]
  );

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[var(--Black)] text-[16px] leading-[24px] font-medium">
        Images
      </label>
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-[1.5px] border-dashed rounded-[var(--Corner-Radius-10)] p-4 lg:p-6 transition-color duration-300 bg-white hover:bg-[#F7F9FC] ${
          uploadError ? "border-[var(--error)]" : files.length ? "border-[var(--Blue)]" : "border-[var(--Blue)]"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          id="logo-upload"
          accept="image/jpeg,image/jpg,image/png,image/svg+xml"
          multiple
          onChange={handleFileUpload}
          className="hidden"
        />

        {files.length ? (
          <div className="flex flex-col gap-2">
            {files.map((file, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-20 h-20 p-2 border border-[var(--boarder-grey-50)] flex justify-center items-center rounded-full bg-white flex-shrink-0">
                    <NextImage
                      src={file.url}
                      alt={file.name}
                      width={48}
                      height={48}
                      className="w-full h-full object-cover rounded-full object-center"
                      unoptimized
                    />
                  </div>
                  <span className="text-[16px] leading-[24px] font-medium text-[var(--Black)] hidden desktop:block">
                    {file.name}
                  </span>
                </div>

                <div className="flex items-center gap-2">
                  {onPreview && (
                    <button
                      onClick={onPreview}
                      className="px-2.5 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300"
                      title="Preview"
                    >
                      <Eye />
                    </button>
                  )}
                  <button
                    onClick={() => handleDelete(index)}
                    className="px-4 py-2 flex items-center gap-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300"
                  >
                    <RiDeleteBinLine />
                    <span className="text-sm leading-[22px] font-medium">Delete</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <label
            htmlFor="logo-upload"
            className="cursor-pointer flex gap-6 items-center"
          >
            <div className="w-20 h-20 p-2 border border-[var(--boarder-grey-50)] flex justify-center items-center rounded-full bg-white">
              <div className="w-full h-full flex items-center justify-center rounded-full bg-[#F7F9FC] p-4">
                <UploadIcon />
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-[16px] leading-[24px] font-medium text-[var(--Black)]">
                Upload images (jpg, png, svg) or drag and drop
              </p>
              <p className="text-[14px] leading-[22px] text-left text-[var(--Dark-gray)]">
                Maximum size: 5MB each
              </p>
            </div>
          </label>
        )}
      </div>

      {uploadError && (
        <p className="text-[12px] leading-[20px] text-[var(--error)] mt-2">
          {uploadError}
        </p>
      )}
    </div>
  );
}
