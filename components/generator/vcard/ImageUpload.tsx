"use client";

import { useState } from "react";
import NextImage from "next/image";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import UploadIcon from "@/components/icons/upload-icon";
import ImageCropper from "./ImageCropper";

interface ImageUploadProps {
  onCustomLogoUpload?: (logo: string | null) => void;
  onLogoChange?: (logo: string | null) => void;
}

export default function ImageUpload({
  onCustomLogoUpload,
  onLogoChange,
}: ImageUploadProps) {
  const [uploadError, setUploadError] = useState("");
  const [fileName, setFileName] = useState("MyLogo.svg");
  const [customLogo, setCustomLogo] = useState("");
  const [isCropping, setIsCropping] = useState(true);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setUploadError("");
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width > 2048 || img.height > 2048) {
          setUploadError(
            "Image dimensions must be smaller than or equal to 2048 x 2048",
          );
          setCustomLogo("");
          onCustomLogoUpload?.(null);
          URL.revokeObjectURL(objectUrl);
          return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result;
          if (result && typeof result === "string") {
            setCustomLogo(result);
            onCustomLogoUpload?.(result);
            onLogoChange?.(null);
          }
        };
        reader.readAsDataURL(file);
        URL.revokeObjectURL(objectUrl);
      };

      img.onerror = () => {
        setUploadError("Failed to load image");
        setCustomLogo("");
        onCustomLogoUpload?.(null);
        URL.revokeObjectURL(objectUrl);
      };

      img.src = objectUrl;
    }
  };

  const handleEdit = () => {
    const input = document.getElementById("logo-upload") as HTMLInputElement;
    if (input) {
      input.click();
    }
  };

  const handleDelete = () => {
    setCustomLogo("");
    setFileName("MyLogo.svg");
    setUploadError("");
    onCustomLogoUpload?.(null);
    onLogoChange?.(null);
    const input = document.getElementById("logo-upload") as HTMLInputElement;
    if (input) {
      input.value = "";
    }
  };

  const handleClose = () => {
    setIsCropping(false);
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[var(--Black)] text-[16px] leading-[24px] font-medium">
        Image
      </label>
      <div
        className={`border-[1.5px] border-dashed rounded-[var(--Corner-Radius-10)] p-4 lg:p-6 transition-color duration-300 bg-white hover:bg-[#F7F9FC] ${
          uploadError
            ? "border-[var(--error)]"
            : customLogo || fileName !== "MyLogo.svg"
              ? "border-[var(--Blue)]"
              : "border-[var(--Blue)]"
        }`}
      >
        <input
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
                Upload image (jpg, png, svg)
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
        onCropComplete={() => {}}
      />
    </div>
  );
}
