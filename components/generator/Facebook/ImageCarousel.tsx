"use client";

import { useState, useRef, useEffect } from "react";
import { LuPencil } from "react-icons/lu";
import { RiDeleteBinLine } from "react-icons/ri";
import UploadIcon from "@/components/icons/upload-icon";

interface ImageItem {
  id: string;
  url: string;
  name: string;
}

interface ImageCarouselProps {
  maxImages?: number;
  maxSizeMB?: number;
  images: ImageItem[]; // Prop থেকে receive করবে
  onAddImage: (image: ImageItem) => void; // Callback
  onRemoveImage: (id: string) => void; // Callback
  onUpdateImage: (id: string, image: ImageItem) => void; // Callback
}

export default function ImageCarousel({
  maxImages = 10,
  maxSizeMB = 5,
  images,
  onAddImage,
  onRemoveImage,
  onUpdateImage,
}: ImageCarouselProps) {
  const [uploadError, setUploadError] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragCounter = useRef(0);

  // Prevent browser from opening dropped files in a new tab when dropped outside the zone
  useEffect(() => {
    const preventDefault = (e: DragEvent) => e.preventDefault();
    document.addEventListener("dragover", preventDefault);
    document.addEventListener("drop", preventDefault);
    return () => {
      document.removeEventListener("dragover", preventDefault);
      document.removeEventListener("drop", preventDefault);
    };
  }, []);

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
        onUpdateImage(editingId, imageData);
        setEditingId(null);
      } else {
        onAddImage(imageData);
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
    onRemoveImage(id);
    setUploadError("");
  };

  const canUploadMore = images.length < maxImages;

  const handleDragEnter = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current++;
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    dragCounter.current--;
    if (dragCounter.current === 0) setIsDragging(false);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
    dragCounter.current = 0;

    if (!canUploadMore && !editingId) return;

    const droppedFiles = Array.from(e.dataTransfer.files);
    if (!droppedFiles.length) return;

    // When editing, only replace one image; otherwise upload up to remaining slots
    const remainingSlots = maxImages - images.length;
    const filesToProcess = editingId
      ? droppedFiles.slice(0, 1)
      : droppedFiles.slice(0, remainingSlots);

    filesToProcess.forEach((file, index) => {
      const error = validateFile(file);
      if (error) {
        setUploadError(error);
        return;
      }

      const reader = new FileReader();
      reader.onload = (event) => {
        const imageData = {
          id: editingId || `${Date.now()}-${index}`,
          url: event.target?.result as string,
          name: file.name,
        };
        if (editingId) {
          onUpdateImage(editingId, imageData);
          setEditingId(null);
        } else {
          onAddImage(imageData);
        }
        setUploadError("");
      };
      reader.readAsDataURL(file);
    });
  };

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
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
        className={`border-2 border-dashed rounded-lg p-4 lg:p-6 transition-colors ${
          uploadError
            ? "border-red-500 bg-red-50"
            : isDragging
              ? "border-[var(--Blue)] bg-blue-50"
              : images.length > 0
                ? "border-[var(--Blue)] bg-white"
                : "border-[var(--Blue)] hover:border-[var(--Blue)]"
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
              <div className="aspect-square border-2  rounded-lg border-[var(--Boarder-Grey)] flex items-center justify-center p-4 bg-gray-50 min-h-[100px]">
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
