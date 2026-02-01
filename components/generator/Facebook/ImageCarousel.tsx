"use client";

import { useState } from "react";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addImage,
  removeImage,
  updateImage,
} from "@/store/slices/facebookSlice";
import UploadIcon from "@/components/icons/upload-icon";

interface ImageCarouselProps {
  maxImages?: number;
  maxSizeMB?: number;
}

export default function ImageCarousel({
  maxImages = 10,
  maxSizeMB = 5,
}: ImageCarouselProps) {
  const dispatch = useAppDispatch();
  const images = useAppSelector((state) => state.facebook.images);
  const [uploadError, setUploadError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const validateFile = (file: File): string | null => {
    const validTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/svg+xml",
    ];
    if (!validTypes.includes(file.type)) {
      return "Please upload a valid image file (JPG, PNG, or SVG)";
    }

    const maxSize = maxSizeMB * 1024 * 1024;
    if (file.size > maxSize) {
      return `File size must be less than ${maxSizeMB}MB`;
    }

    return null;
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const error = validateFile(file);
    if (error) {
      setUploadError(error);
      return;
    }

    if (images.length >= maxImages && !editingId) {
      setUploadError(`Maximum ${maxImages} images allowed`);
      return;
    }

    const reader = new FileReader();
    reader.onload = (event) => {
      const imageData = {
        id: editingId || Date.now().toString(),
        url: event.target?.result as string,
        name: file.name,
      };

      if (editingId) {
        dispatch(updateImage({ id: editingId, image: imageData }));
        setEditingId(null);
      } else {
        dispatch(addImage(imageData));
      }
      setUploadError("");
    };
    reader.readAsDataURL(file);
    e.target.value = "";
  };

  const handleEdit = (id: string) => {
    setEditingId(id);
    document.getElementById("image-carousel-upload")?.click();
  };

  const handleDelete = (id: string) => {
    dispatch(removeImage(id));
    setUploadError("");
  };

  const canUploadMore = images.length < maxImages;

  return (
    <div className="w-full">
      <label className="block text-lg leading-[26px] font-bold text-[var(--Black)] ">
        Image carousel
      </label>
      <p className="text-sm leading-[22px] text-[var(--breadcrumb)] font-normal mb-6">
        Upload up to {maxImages} images
      </p>

      {/* Upload Area */}
      <div
        className={`border-2 border-dashed rounded-lg p-4 lg:p-6 transition-colors ${
          uploadError
            ? "border-red-500 bg-red-50"
            : images.length > 0
              ? "border-[#01A56D] bg-white"
              : "border-[#01A56D] hover:border-[#01A56D]"
        }`}
      >
        <input
          type="file"
          id="image-carousel-upload"
          accept="image/jpeg,image/jpg,image/png,image/svg+xml"
          onChange={handleFileUpload}
          className="hidden"
          disabled={!canUploadMore && !editingId}
        />

        <label
          htmlFor="image-carousel-upload"
          className={`cursor-pointer flex gap-6 items-center ${!canUploadMore && !editingId ? "opacity-50 cursor-not-allowed" : ""}`}
        >
          <div className="w-[72px] h-16 lg:w-20 lg:h-20 p-2 lg:p-4 border flex justify-center items-center rounded-full">
            <UploadIcon />
          </div>

          <div>
            <p className="text-base font-medium text-gray-600">
              Upload images (jpg, png, svg)
            </p>
            <p className="text-sm text-left text-gray-500 mt-1">
              Maximum size per image: {maxSizeMB}MB
            </p>
          </div>
        </label>
      </div>

      {uploadError && (
        <p className="text-sm text-red-600 mt-2">{uploadError}</p>
      )}

      {/* Image Grid */}
      {images.length > 0 && (
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {images.map((image) => (
            <div
              key={image.id}
              className="flex flex-col gap-2 relative group rounded-lg overflow-hidden  bg-white"
            >
              {/* Image */}
              <div className="aspect-square border-2  rounded-lg border-gray-200 flex items-center justify-center p-4 bg-gray-50">
                <img
                  src={image.url}
                  alt={image.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              {/* Action Buttons */}
              <div className="flex gap-2   bg-white">
                <button
                  onClick={() => handleEdit(image.id)}
                  className="flex-1 p-2  rounded-lg transition-colors border border-gray-300"
                  title="Edit"
                >
                  <LuPencil className="w-4 h-4 mx-auto" />
                </button>
                <button
                  onClick={() => handleDelete(image.id)}
                  className="flex-1 p-2 rounded-lg transition-colors border border-gray-300"
                  title="Delete"
                >
                  <RiDeleteBinLine className="w-4 h-4 mx-auto" />
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
