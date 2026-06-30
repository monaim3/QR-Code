// "use client";

// import { QrCodePreviewHandle } from "@/components/dashboard/qr-codes/table/QrCodePreview";

// export type ExportFormat = "PNG" | "JPG" | "SVG" | "SVG Tiny (Illustrator)" | "PDF" | "EPS";

// export async function downloadQrCode(
//   ref: React.RefObject<QrCodePreviewHandle | null>,
//   format: ExportFormat,
//   width: number,
//   height: number
// ): Promise<void> {
//   const handle = ref.current;
//   if (!handle) throw new Error("QR preview ref not attached");

//   let blob: Blob;
//   let filename: string;

//   switch (format) {
//     case "PNG":
//       blob = await handle.exportAsPng(width, height);
//       filename = `qr-code-${width}x${height}.png`;
//       break;

//     case "JPG":
//       blob = await handle.exportAsJpg(width, height);
//       filename = `qr-code-${width}x${height}.jpg`;
//       break;

//     case "SVG":
//     case "SVG Tiny (Illustrator)":
//       blob = await handle.exportAsSvg();
//       filename = `qr-code.svg`;
//       break;

//     case "PDF":
//       blob = await exportAsPdf(handle, width, height);
//       filename = `qr-code-${width}x${height}.pdf`;
//       break;

//     case "EPS":
//       blob = await exportAsEps(handle, width, height);
//       filename = `qr-code-${width}x${height}.eps`;
//       break;

//     default:
//       throw new Error(`Unknown format: ${format}`);
//   }

//   triggerDownload(blob, filename);
// }

// // ── PDF ────────────────────────────────────────────────────────────────────

// async function exportAsPdf(
//   handle: QrCodePreviewHandle,
//   width: number,
//   height: number
// ): Promise<Blob> {
//   // 1. Get PNG blob from the existing export pipeline
//   const pngBlob = await handle.exportAsPng(width, height);

//   // 2. Convert PNG blob to base64 string
//   const base64 = await new Promise<string>((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => {
//       const result = reader.result as string;
//       // Strip data:image/png;base64, prefix
//       resolve(result.split(",")[1]);
//     };
//     reader.onerror = reject;
//     reader.readAsDataURL(pngBlob);
//   });

//   // 3. Build a minimal valid PDF manually
//   //    PDF uses points: 1 inch = 72pt, A4 = 595x842pt, or use pixel size directly
//   const ptWidth = width;
//   const ptHeight = height;
//   const pngBytes = atob(base64);
//   const pngLength = pngBytes.length;

//   // PDF object offsets for xref table
//   const offsets: number[] = [];
//   const parts: string[] = [];

//   const add = (s: string) => parts.push(s);

//   // Header
//   add("%PDF-1.4\n");

//   // Object 1: Catalog
//   offsets[1] = parts.join("").length;
//   add("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");

//   // Object 2: Pages
//   offsets[2] = parts.join("").length;
//   add(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`);

//   // Object 3: Page
//   offsets[3] = parts.join("").length;
//   add(
//     `3 0 obj\n<< /Type /Page /Parent 2 0 R ` +
//     `/MediaBox [0 0 ${ptWidth} ${ptHeight}] ` +
//     `/Contents 4 0 R /Resources << /XObject << /Im1 5 0 R >> >> >>\nendobj\n`
//   );

//   // Object 4: Page content stream (draw image)
//   const contentStream = `q ${ptWidth} 0 0 ${ptHeight} 0 0 cm /Im1 Do Q`;
//   offsets[4] = parts.join("").length;
//   add(
//     `4 0 obj\n<< /Length ${contentStream.length} >>\nstream\n${contentStream}\nendstream\nendobj\n`
//   );

//   // Object 5: PNG image XObject
//   // Build raw bytes for the image object header
//   const imgHeader =
//     `5 0 obj\n` +
//     `<< /Type /XObject /Subtype /Image ` +
//     `/Width ${width} /Height ${height} ` +
//     `/ColorSpace /DeviceRGB /BitsPerComponent 8 ` +
//     `/Filter /DCTDecode /Length ${pngLength} >>\n` +
//     `stream\n`;

//   // For PDF we need JPEG not PNG (DCTDecode = JPEG)
//   // Re-export as JPEG for PDF embedding
//   const jpgBlob = await handle.exportAsJpg(width, height);
//   const jpgBase64 = await new Promise<string>((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => resolve((reader.result as string).split(",")[1]);
//     reader.onerror = reject;
//     reader.readAsDataURL(jpgBlob);
//   });

//   const jpgBytes = atob(jpgBase64);
//   const jpgLength = jpgBytes.length;

//   const imgHeaderFinal =
//     `5 0 obj\n` +
//     `<< /Type /XObject /Subtype /Image ` +
//     `/Width ${width} /Height ${height} ` +
//     `/ColorSpace /DeviceRGB /BitsPerComponent 8 ` +
//     `/Filter /DCTDecode /Length ${jpgLength} >>\n` +
//     `stream\n`;

//   offsets[5] = parts.join("").length;

//   // Build final PDF as Uint8Array (binary safe for image stream)
//   const headerBytes = new TextEncoder().encode(parts.join("") + imgHeaderFinal);
//   const jpgRaw = new Uint8Array(jpgLength);
//   for (let i = 0; i < jpgLength; i++) jpgRaw[i] = jpgBytes.charCodeAt(i);
//   const footerStr = "\nendstream\nendobj\n";
//   const footerBytes = new TextEncoder().encode(footerStr);

//   // xref + trailer
//   const xrefOffset = headerBytes.length + jpgRaw.length + footerBytes.length;
//   const xrefStr =
//     `xref\n0 6\n` +
//     `0000000000 65535 f \n` +
//     offsets.slice(1).map((o) => String(o).padStart(10, "0") + " 00000 n \n").join("") +
//     `trailer\n<< /Size 6 /Root 1 0 R >>\n` +
//     `startxref\n${xrefOffset}\n%%EOF`;
//   const xrefBytes = new TextEncoder().encode(xrefStr);

//   // Combine all parts into one Uint8Array
//   const total = headerBytes.length + jpgRaw.length + footerBytes.length + xrefBytes.length;
//   const result = new Uint8Array(total);
//   let offset = 0;
//   result.set(headerBytes, offset); offset += headerBytes.length;
//   result.set(jpgRaw, offset); offset += jpgRaw.length;
//   result.set(footerBytes, offset); offset += footerBytes.length;
//   result.set(xrefBytes, offset);

//   return new Blob([result], { type: "application/pdf" });
// }

// // ── EPS ────────────────────────────────────────────────────────────────────

// async function exportAsEps(
//   handle: QrCodePreviewHandle,
//   width: number,
//   height: number
// ): Promise<Blob> {
//   // Get PNG blob, draw to canvas, sample pixels to build EPS
//   const pngBlob = await handle.exportAsPng(width, height);
//   const dataUrl = await blobToDataUrl(pngBlob);

//   // Rasterize to canvas to get pixel data
//   const canvas = await dataUrlToCanvas(dataUrl, width, height);
//   const ctx = canvas.getContext("2d")!;
//   const imageData = ctx.getImageData(0, 0, width, height);
//   const pixels = imageData.data;

//   // Build EPS with RGB image data
//   const lines: string[] = [];
//   lines.push("%!PS-Adobe-3.0 EPSF-3.0");
//   lines.push(`%%BoundingBox: 0 0 ${width} ${height}`);
//   lines.push("%%EndComments");
//   lines.push(`/picstr ${width * 3} string def`);
//   lines.push(`${width} ${height} 8`);
//   lines.push(`[${width} 0 0 -${height} 0 ${height}]`);
//   lines.push("{currentfile picstr readhexstring pop}");
//   lines.push("false 3 colorimage");

//   // Write pixel hex data (RGB, skip alpha)
//   let hexRow = "";
//   for (let y = 0; y < height; y++) {
//     for (let x = 0; x < width; x++) {
//       const idx = (y * width + x) * 4;
//       const r = pixels[idx].toString(16).padStart(2, "0");
//       const g = pixels[idx + 1].toString(16).padStart(2, "0");
//       const b = pixels[idx + 2].toString(16).padStart(2, "0");
//       hexRow += r + g + b;

//       // Wrap at 72 chars per line (EPS convention)
//       if (hexRow.length >= 72) {
//         lines.push(hexRow);
//         hexRow = "";
//       }
//     }
//   }
//   if (hexRow.length > 0) lines.push(hexRow);

//   lines.push("%%EOF");

//   return new Blob([lines.join("\n")], { type: "application/postscript" });
// }

// // ── utils ──────────────────────────────────────────────────────────────────

// function blobToDataUrl(blob: Blob): Promise<string> {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.onload = () => resolve(reader.result as string);
//     reader.onerror = reject;
//     reader.readAsDataURL(blob);
//   });
// }

// function dataUrlToCanvas(
//   dataUrl: string,
//   width: number,
//   height: number
// ): Promise<HTMLCanvasElement> {
//   return new Promise((resolve, reject) => {
//     const img = new Image();
//     img.onload = () => {
//       const canvas = document.createElement("canvas");
//       canvas.width = width;
//       canvas.height = height;
//       const ctx = canvas.getContext("2d")!;
//       ctx.fillStyle = "#ffffff";
//       ctx.fillRect(0, 0, width, height);
//       ctx.drawImage(img, 0, 0, width, height);
//       resolve(canvas);
//     };
//     img.onerror = reject;
//     img.src = dataUrl;
//   });
// }

// function triggerDownload(blob: Blob, filename: string): void {
//   const url = URL.createObjectURL(blob);
//   const link = document.createElement("a");
//   link.href = url;
//   link.download = filename;
//   link.click();
//   URL.revokeObjectURL(url);
// }

/// ***** this is new export service *****

"use client";

import { QrCodePreviewHandle } from "@/components/dashboard/qr-codes/table/QrCodePreview";
import { captureQrAsBlob } from "@/lib/qr/qrCapture"; // adjust path to wherever you put it

export type ExportFormat = "PNG" | "JPG" | "SVG" | "SVG Tiny (Illustrator)" | "PDF" | "EPS";

/* ───────────────────────── existing handle-based path (unchanged) ───────────────────────── */

export async function downloadQrCode(
  ref: React.RefObject<QrCodePreviewHandle | null>,
  format: ExportFormat,
  width: number,
  height: number
): Promise<void> {
  const handle = ref.current;
  if (!handle) throw new Error("QR preview ref not attached");

  let blob: Blob;
  let filename: string;

  switch (format) {
    case "PNG":
      blob = await handle.exportAsPng(width, height);
      filename = `qr-code-${width}x${height}.png`;
      break;
    case "JPG":
      blob = await handle.exportAsJpg(width, height);
      filename = `qr-code-${width}x${height}.jpg`;
      break;
    case "SVG":
    case "SVG Tiny (Illustrator)":
      blob = await handle.exportAsSvg();
      filename = `qr-code.svg`;
      break;
    case "PDF":
      blob = await exportAsPdfFromHandle(handle, width, height);
      filename = `qr-code-${width}x${height}.pdf`;
      break;
    case "EPS":
      blob = await exportAsEpsFromHandle(handle, width, height);
      filename = `qr-code-${width}x${height}.eps`;
      break;
    default:
      throw new Error(`Unknown format: ${format}`);
  }

  triggerDownload(blob, filename);
}

/* ───────────────────────── new container-based path (used by DownloadAction) ───────────────────────── */

export async function downloadQrCodeFromContainer(
  containerEl: HTMLElement,
  format: ExportFormat,
  width: number,
  height: number
): Promise<void> {
  let blob: Blob;
  let filename: string;

  switch (format) {
    case "PNG":
      blob = await captureQrAsBlob(containerEl, width, height, "image/png");
      filename = `qr-code-${width}x${height}.png`;
      break;

    case "JPG":
      blob = await captureQrAsBlob(containerEl, width, height, "image/jpeg", 0.92);
      filename = `qr-code-${width}x${height}.jpg`;
      break;

    case "SVG":
    case "SVG Tiny (Illustrator)":
      blob = await captureQrAsBlob(containerEl, width, height, "image/svg+xml");
      filename = `qr-code.svg`;
      break;

    case "PDF":
      blob = await exportAsPdfFromContainer(containerEl, width, height);
      filename = `qr-code-${width}x${height}.pdf`;
      break;

    case "EPS":
      blob = await exportAsEpsFromContainer(containerEl, width, height);
      filename = `qr-code-${width}x${height}.eps`;
      break;

    default:
      throw new Error(`Unknown format: ${format}`);
  }

  triggerDownload(blob, filename);
}

/* ───────────────────────── PDF (handle-based, original) ───────────────────────── */

async function exportAsPdfFromHandle(
  handle: QrCodePreviewHandle,
  width: number,
  height: number
): Promise<Blob> {
  const jpgBlob = await handle.exportAsJpg(width, height);
  return buildPdfFromJpgBlob(jpgBlob, width, height);
}

/* ───────────────────────── PDF (container-based, new) ───────────────────────── */

async function exportAsPdfFromContainer(
  containerEl: HTMLElement,
  width: number,
  height: number
): Promise<Blob> {
  const jpgBlob = await captureQrAsBlob(containerEl, width, height, "image/jpeg", 0.92);
  return buildPdfFromJpgBlob(jpgBlob, width, height);
}

async function buildPdfFromJpgBlob(jpgBlob: Blob, width: number, height: number): Promise<Blob> {
  const ptWidth = width;
  const ptHeight = height;

  const jpgBase64 = await new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve((reader.result as string).split(",")[1]);
    reader.onerror = reject;
    reader.readAsDataURL(jpgBlob);
  });
  const jpgBytes = atob(jpgBase64);
  const jpgLength = jpgBytes.length;

  const offsets: number[] = [];
  const parts: string[] = [];
  const add = (s: string) => parts.push(s);

  add("%PDF-1.4\n");

  offsets[1] = parts.join("").length;
  add("1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n");

  offsets[2] = parts.join("").length;
  add(`2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n`);

  offsets[3] = parts.join("").length;
  add(
    `3 0 obj\n<< /Type /Page /Parent 2 0 R ` +
    `/MediaBox [0 0 ${ptWidth} ${ptHeight}] ` +
    `/Contents 4 0 R /Resources << /XObject << /Im1 5 0 R >> >> >>\nendobj\n`
  );

  const contentStream = `q ${ptWidth} 0 0 ${ptHeight} 0 0 cm /Im1 Do Q`;
  offsets[4] = parts.join("").length;
  add(
    `4 0 obj\n<< /Length ${contentStream.length} >>\nstream\n${contentStream}\nendstream\nendobj\n`
  );

  const imgHeaderFinal =
    `5 0 obj\n` +
    `<< /Type /XObject /Subtype /Image ` +
    `/Width ${width} /Height ${height} ` +
    `/ColorSpace /DeviceRGB /BitsPerComponent 8 ` +
    `/Filter /DCTDecode /Length ${jpgLength} >>\n` +
    `stream\n`;

  offsets[5] = parts.join("").length;

  const headerBytes = new TextEncoder().encode(parts.join("") + imgHeaderFinal);
  const jpgRaw = new Uint8Array(jpgLength);
  for (let i = 0; i < jpgLength; i++) jpgRaw[i] = jpgBytes.charCodeAt(i);
  const footerBytes = new TextEncoder().encode("\nendstream\nendobj\n");

  const xrefOffset = headerBytes.length + jpgRaw.length + footerBytes.length;
  const xrefStr =
    `xref\n0 6\n` +
    `0000000000 65535 f \n` +
    offsets.slice(1).map((o) => String(o).padStart(10, "0") + " 00000 n \n").join("") +
    `trailer\n<< /Size 6 /Root 1 0 R >>\n` +
    `startxref\n${xrefOffset}\n%%EOF`;
  const xrefBytes = new TextEncoder().encode(xrefStr);

  const total = headerBytes.length + jpgRaw.length + footerBytes.length + xrefBytes.length;
  const result = new Uint8Array(total);
  let offset = 0;
  result.set(headerBytes, offset); offset += headerBytes.length;
  result.set(jpgRaw, offset); offset += jpgRaw.length;
  result.set(footerBytes, offset); offset += footerBytes.length;
  result.set(xrefBytes, offset);

  return new Blob([result], { type: "application/pdf" });
}

/* ───────────────────────── EPS (handle-based, original) ───────────────────────── */

async function exportAsEpsFromHandle(
  handle: QrCodePreviewHandle,
  width: number,
  height: number
): Promise<Blob> {
  const pngBlob = await handle.exportAsPng(width, height);
  const dataUrl = await blobToDataUrl(pngBlob);
  const canvas = await dataUrlToCanvas(dataUrl, width, height);
  return buildEpsFromCanvas(canvas, width, height);
}

/* ───────────────────────── EPS (container-based, new) ───────────────────────── */

async function exportAsEpsFromContainer(
  containerEl: HTMLElement,
  width: number,
  height: number
): Promise<Blob> {
  const pngBlob = await captureQrAsBlob(containerEl, width, height, "image/png");
  const dataUrl = await blobToDataUrl(pngBlob);
  const canvas = await dataUrlToCanvas(dataUrl, width, height);
  return buildEpsFromCanvas(canvas, width, height);
}

function buildEpsFromCanvas(canvas: HTMLCanvasElement, width: number, height: number): Blob {
  const ctx = canvas.getContext("2d")!;
  const imageData = ctx.getImageData(0, 0, width, height);
  const pixels = imageData.data;

  const lines: string[] = [];
  lines.push("%!PS-Adobe-3.0 EPSF-3.0");
  lines.push(`%%BoundingBox: 0 0 ${width} ${height}`);
  lines.push("%%EndComments");
  lines.push(`/picstr ${width * 3} string def`);
  lines.push(`${width} ${height} 8`);
  lines.push(`[${width} 0 0 -${height} 0 ${height}]`);
  lines.push("{currentfile picstr readhexstring pop}");
  lines.push("false 3 colorimage");

  let hexRow = "";
  for (let y = 0; y < height; y++) {
    for (let x = 0; x < width; x++) {
      const idx = (y * width + x) * 4;
      const r = pixels[idx].toString(16).padStart(2, "0");
      const g = pixels[idx + 1].toString(16).padStart(2, "0");
      const b = pixels[idx + 2].toString(16).padStart(2, "0");
      hexRow += r + g + b;
      if (hexRow.length >= 72) {
        lines.push(hexRow);
        hexRow = "";
      }
    }
  }
  if (hexRow.length > 0) lines.push(hexRow);
  lines.push("%%EOF");

  return new Blob([lines.join("\n")], { type: "application/postscript" });
}

/* ───────────────────────── shared utils ───────────────────────── */

function blobToDataUrl(blob: Blob): Promise<string> {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result as string);
    reader.onerror = reject;
    reader.readAsDataURL(blob);
  });
}

function dataUrlToCanvas(dataUrl: string, width: number, height: number): Promise<HTMLCanvasElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d")!;
      ctx.fillStyle = "#ffffff";
      ctx.fillRect(0, 0, width, height);
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas);
    };
    img.onerror = reject;
    img.src = dataUrl;
  });
}

function triggerDownload(blob: Blob, filename: string): void {
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}