"use client";
import { useState, useRef, useCallback } from "react";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";
import UploadIcon from "@/components/icons/upload-icon";
import Eye from "@/components/icons/eye";

interface PdfUploadProps {
  onCustomLogoUpload?: (fileUrl: string | null) => void;
  onLogoChange?: (fileUrl: string | null) => void;
  onPreview?: () => void;
}

export default function PdfUpload({
  onCustomLogoUpload,
  onLogoChange,
  onPreview,
}: PdfUploadProps) {
  const [uploadError, setUploadError] = useState("");
  const [fileName, setFileName] = useState("MyFile.pdf");
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const validateAndProcessFile = useCallback((file: File) => {
    // ✅ Validate PDF
    if (file.type !== "application/pdf") {
      setUploadError("Please upload a valid PDF file");
      return;
    }

    // ✅ Validate file size (20MB)
    const maxSize = 20 * 1024 * 1024;
    if (file.size > maxSize) {
      setUploadError("PDF size must be less than 20MB");
      return;
    }

    setUploadError("");
    setFileName(file.name);

    const fileUrl = URL.createObjectURL(file);
    setPdfUrl(fileUrl);
    onCustomLogoUpload?.(fileUrl);
    onLogoChange?.(fileUrl);
  }, [onCustomLogoUpload, onLogoChange]);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      validateAndProcessFile(file);
    }
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const handleEdit = () => {
    fileInputRef.current?.click();
  };

  const handleDelete = () => {
    if (pdfUrl) URL.revokeObjectURL(pdfUrl);
    setPdfUrl(null);
    setFileName("MyFile.pdf");
    setUploadError("");
    onCustomLogoUpload?.(null);
    onLogoChange?.(null);
  };

  // Drag & drop handlers
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
      const file = e.dataTransfer.files?.[0];
      if (file) validateAndProcessFile(file);
    },
    [validateAndProcessFile]
  );

  return (
    <div className="flex flex-col gap-2">
      <label className="text-[var(--Black)] text-[16px] leading-[24px] font-medium">
        Upload your file
      </label>

      <div
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`border-[1.5px] border-dashed rounded-[var(--Corner-Radius-10)] p-4 lg:p-6 transition-color duration-300 bg-white hover:bg-[#F7F9FC] ${
          uploadError
            ? "border-[var(--error)]"
            : pdfUrl
              ? "border-[var(--Blue)]"
              : "border-[var(--Blue)]"
        }`}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept="application/pdf"
          onChange={handleFileUpload}
          className="hidden"
        />

        {pdfUrl || uploadError ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-20 h-20 p-2 border border-[var(--boarder-grey-50)] flex justify-center items-center rounded-full bg-white">
                <UploadIcon />
              </div>
              <span className="text-[16px] leading-[24px] font-medium text-[var(--Black)] hidden desktop:block">
                {fileName}
              </span>
            </div>

            <div className="flex items-center gap-2">
              {pdfUrl && (
                <button
                  onClick={() => window.open(pdfUrl, "_blank")}
                  className="px-2.5 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300"
                  title="Preview"
                >
                  <Eye />
                </button>
              )}

              <button
                onClick={handleEdit}
                className="px-2.5 py-2.5 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300"
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
            onClick={() => fileInputRef.current?.click()}
          >
            <div className="w-20 h-20 p-2 border border-[var(--boarder-grey-50)] flex justify-center items-center rounded-full bg-white">
              <div className="w-full h-full flex items-center justify-center rounded-full bg-[#F7F9FC] p-4">
                <UploadIcon />
              </div>
            </div>

            <div className="space-y-1">
              <p className="text-[16px] leading-[24px] font-medium text-[var(--Black)]">
               Upload your PDF file
              </p>
              <p className="text-[14px] leading-[22px] text-left text-[var(--Dark-gray)]">
                Maximum size: 20MB
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