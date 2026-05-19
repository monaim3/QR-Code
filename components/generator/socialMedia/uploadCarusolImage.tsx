"use client";

import { useState, useRef, useCallback, useId } from "react";
import UploadIcon from "@/components/icons/upload-icon";
import ImageCropper from "@/components/generator/vcard/ImageCropper";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addCarouselImage,
  setUploadedImages,
} from "@/store/slices/social-slice";
import { useT } from "@/utils/t";
import { useUploadFileMutation } from "@/store/api/qrApi";
import { UploadLogoResponse } from "@/store/slices/qrSlice";
interface ImageUploadProps {
  onCustomLogoUpload?: (logo: string | null) => void;
  onLogoChange?: (logo: string | null) => void;
  onPreview?: () => void;
  label?: string;
  aspectRatio?: number;
  editIndex?: number | null;
  onEditComplete?: (newImage: string, index: number) => void;
}

export default function ImageUpload({
  onCustomLogoUpload,
  onLogoChange,
  label = "Image carousel",
  aspectRatio = 1,
}: ImageUploadProps) {
  const dispatch = useAppDispatch();
  const [uploadError, setUploadError] = useState("");
  const [fileName, setFileName] = useState("MyLogo.svg");
  const [customLogo, setCustomLogo] = useState("");
  const [isCropping, setIsCropping] = useState(false);
  const [imageToCrop, setImageToCrop] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const id = `image-upload-${useId().replace(/:/g, "-")}`;
  const [uploadFile] = useUploadFileMutation();
  const social = useAppSelector((state) => state.social);

  const t = useT();
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

  const uploadImageFile = async (imageUrl: string) => {
    const blob = await fetch(imageUrl).then((res) => res.blob());
    const file = new File(
      [blob],
      `uploaded-image-${Date.now()}.${blob.type.split("/")[1]}`,
      { type: blob.type },
    );

    const result = await uploadFile(file);
    if (!("data" in result) || !result.data) {
      throw new Error("Image upload failed");
    }

    return {
      bucketRootUrl: result.data.location.split(`/${result.data.bucket}`)[0],
      bytes: result.data.bytes,
      format: result.data.format,
      key: result.data.key,
      publicId: result.data.publicId,
      resourceType: result.data.resourceType,
      storageProvider: result.data.storageProvider,
    } as UploadLogoResponse;
  };

  const handleClose = () => {
    setIsCropping(false);
    // Clean up the image source if user cancels (only blob URLs need cleanup)
    if (!customLogo && imageToCrop && imageToCrop.startsWith("blob:")) {
      URL.revokeObjectURL(imageToCrop);
    }
    setImageToCrop(null);
  };

  const handleCropComplete = async (croppedImageUrl: string) => {
    setCustomLogo(croppedImageUrl);
    onCustomLogoUpload?.(croppedImageUrl);
    onLogoChange?.(null);
    setIsCropping(false);
    // Add image to Redux carousel
    dispatch(addCarouselImage(croppedImageUrl));
    const uploadedImage = await uploadImageFile(croppedImageUrl);
    dispatch(
      setUploadedImages({
        ...uploadedImage,
        imageId: social.carousels.length,
      }),
    );
    // CLEAR ALL LOCAL STATES
    setCustomLogo("");
    setFileName("");
    setUploadError("");
    setIsCropping(false);
    setImageToCrop(null);
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
    <div className="flex flex-col gap-0">
      <label className="text-[var(--Black)] text-[16px] leading-[24px] font-medium">
        {label}
        <p className="text-[14px] leading-[22px] font-regular text-[var(--Dark-gray)] mb-[24px]">
          Upload up to 10 images
        </p>
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
          id={id}
          accept="image/jpeg,image/jpg,image/png,image/svg+xml"
          onChange={handleFileUpload}
          className="hidden"
        />
        <label htmlFor={id} className="cursor-pointer flex gap-6 items-center">
          <div className="w-20 h-20 p-2 border border-[var(--boarder-grey-50)] flex justify-center items-center rounded-full bg-white">
            <div className="w-full h-full flex items-center justify-center rounded-full bg-[#F7F9FC] p-4">
              <UploadIcon />
            </div>
          </div>

          <div className="space-y-1">
            <p className="text-[16px] leading-[24px] font-medium text-[var(--Black)]">
              {t(
                "generator__content_form_section__about__personal_section__upload_image",
              )}
            </p>
            <p className="text-[14px] leading-[22px] text-left text-[var(--Dark-gray)]">
              Maximum size: 5MB
            </p>
          </div>
        </label>
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
        aspectRatio={aspectRatio}
      />
    </div>
  );
}
