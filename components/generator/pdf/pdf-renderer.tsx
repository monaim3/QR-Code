"use client";

import { Document, Page, pdfjs } from "react-pdf";
import { useEffect } from "react";

interface Props {
  file: File | string;
}

export default function PdfViewer({ file }: Props) {
 useEffect(() => {
  pdfjs.GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";
}, []);

  if (!file) return null;

  return (
    <Document file={file} onLoadError={console.error}>
      <Page
        pageNumber={1}
        height={250}
        renderTextLayer={false}
        renderAnnotationLayer={false}
        className="max-w-full h-full"
      />
    </Document>
  );
}