"use client";
import { useState, useRef, useCallback } from "react";
import NextImage from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import UploadIcon from "@/components/icons/upload-icon";
import ImageCropper from "./ImageCropper";
import Eye from "@/components/icons/eye";

interface ImageUploadProps {
  onCustomLogoUpload?: (logo: string | null) => void;
  onLogoChange?: (logo: string | null) => void;
  onPreview?: () => void;
}

export default function ImageUpload({
  onCustomLogoUpload,
  onLogoChange,
  onPreview,
}: ImageUploadProps) {
  const [uploadError, setUploadError] = useState("");
  const [fileName, setFileName] = useState("MyLogo.svg");
  const [customLogo, setCustomLogo] = useState("");
  const [isCropping, setIsCropping] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateAndProcessFile = useCallback((file: File) => {
    // Validate file type
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/svg+xml",
    ];
    if (!validTypes.includes(file.type)) {
      setUploadError("Please upload a valid image file (jpg, png, svg)");
      return;
    }

    // Validate file size (5MB)
    const maxSize = 5 * 1024 * 1024; // 5MB in bytes
    if (file.size > maxSize) {
      setUploadError("Image size must be less than 5MB");
      return;
    }

    setFileName(file.name);
    setUploadError("");

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result;
      if (result && typeof result === "string") {
        // Check dimensions for non-SVG images
        if (!file.type.includes("svg")) {
          const img = new Image();
          img.onload = () => {
            if (img.width > 2048 || img.height > 2048) {
              setUploadError(
                "Image dimensions must be smaller than or equal to 2048 x 2048",
              );
              return;
            }
            // Open cropper with the image
            setImageToCrop(result);
            setIsCropping(true);
          };
          img.onerror = () => {
            setUploadError("Failed to load image");
          };
          img.src = result;
        } else {
          // For SVG, open cropper directly
          setImageToCrop(result);
          setIsCropping(true);
        }
      }
    };
    reader.onerror = () => {
      setUploadError("Failed to read file");
    };
    reader.readAsDataURL(file);
  }, []);

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
    setCustomLogo("");
    setFileName("MyLogo.svg");
    setUploadError("");
    setImageToCrop(null);
    onCustomLogoUpload?.(null);
    onLogoChange?.(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleClose = () => {
    setIsCropping(false);
    // Clean up the image source if user cancels (only blob URLs need cleanup)
    if (!customLogo && imageToCrop && imageToCrop.startsWith("blob:")) {
      URL.revokeObjectURL(imageToCrop);
    }
    setImageToCrop(null);
  };

  const handleCropComplete = (croppedImageUrl: string) => {
    setCustomLogo(croppedImageUrl);
    onCustomLogoUpload?.(croppedImageUrl);
    onLogoChange?.(null);
    setIsCropping(false);
    // Clean up the original image (only blob URLs need cleanup)
    if (imageToCrop && imageToCrop.startsWith("blob:")) {
      URL.revokeObjectURL(imageToCrop);
    }
    setImageToCrop(null);
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
        const file = files[0];
        validateAndProcessFile(file);
      }
    },
    [validateAndProcessFile],
  );

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[var(--Black)] text-[16px] leading-[24px] font-medium">
        Image
      </label>
      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-[1.5px] border-dashed rounded-[var(--Corner-Radius-10)] p-4 lg:p-6 transition-color duration-300 bg-white hover:bg-[#F7F9FC] ${
          uploadError
            ? "border-[var(--error)]"
            : customLogo || fileName !== "MyLogo.svg"
              ? "border-[var(--Blue)]"
              : "border-[var(--Blue)]"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          id="logo-upload"
          accept="image/jpeg,image/jpg,image/png,image/svg+xml"
          onChange={handleFileUpload}
          className="hidden"
        />

        {customLogo || uploadError ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              {customLogo && !uploadError && (
                <div className="w-20 h-20 p-2 border border-[var(--boarder-grey-50)] flex justify-center items-center rounded-full bg-white flex-shrink-0">
                  <NextImage
                    src={customLogo}
                    alt={fileName}
                    width={48}
                    height={48}
                    className="w-full h-full object-cover rounded-full object-center"
                    unoptimized
                  />
                </div>
              )}
              {uploadError && (
                <div className="w-20 h-20 p-2 border border-[var(--boarder-grey-50)] flex justify-center items-center rounded-full bg-white flex-shrink-0">
                  <UploadIcon />
                </div>
              )}
              <span className="text-[16px] leading-[24px] font-medium text-[var(--Black)] hidden desktop:block">
                {fileName}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {onPreview && (
                <button
                  onClick={onPreview}
                  className="px-2.5 py-2.5  text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300"
                  title="Edit"
                >
                  <Eye />
                </button>
              )}

              <button
                onClick={handleEdit}
                className="px-2.5 py-2.5  text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300"
                title="Edit"
              >
                <LuPencil />
              </button>
              <button
                onClick={handleDelete}
                className="px-4 py-2 flex items-center gap-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300"
              >
                <RiDeleteBinLine />
                <span className="text-sm leading-[22px] font-medium">
                  Delete
                </span>
              </button>
            </div>
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
                Upload image (jpg, png, svg) or drag and drop
              </p>
              <p className="text-[14px] leading-[22px] text-left text-[var(--Dark-gray)]">
                Maximum size: 5MB
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

      <ImageCropper
        open={isCropping}
        onClose={handleClose}
        imageSrc={imageToCrop}
        onCropComplete={handleCropComplete}
      />
    </div>
  );
}
