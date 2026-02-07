"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useRef, useState } from "react";

interface Props {
  file: File | string;
}

export default function PdfViewer({ file }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState<number>(0);
  const [loading, setLoading] = useState(true);

  // Set PDF.js worker
  useEffect(() => {
    pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
  }, []);

  // Update width on mount and window resize
  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth);
      }
    }
    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  if (!file) return null;

  return (
    <div ref={containerRef} className="relative w-full h-full bg-gray-50">
      {/* Centered loading spinner */}
      {loading && (
        <div className="absolute inset-0 flex items-center justify-center z-10">
         <p className="text-[12px] leading-[22px] text-[var(--Black)] font-regular">Loading...</p>
        </div>
      )}

      <Document
        file={file}
        onLoadSuccess={() => setLoading(false)}
        onLoadError={(error) => {
          console.error(error);
          setLoading(false);
        }}
        loading={null} // disable default loading message
      >
        <Page
          pageNumber={1}
          width={width} // auto-scale to parent width
          renderTextLayer={false}
          renderAnnotationLayer={false}
        />
      </Document>
    </div>
  );
}
