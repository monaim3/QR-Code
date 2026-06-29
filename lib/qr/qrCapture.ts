import { QrCode as qr } from "@/types/generatedQr";

export type CaptureMimeType = "image/png" | "image/jpeg" | "image/svg+xml";

export async function captureQrAsBlob(
  containerEl: HTMLElement,  // pass containerRef.current directly
  width: number,
  height: number,
  mimeType: CaptureMimeType,
  quality?: number
): Promise<Blob> {
  const padding = Math.round(width * 0.04);
  const innerSize = width - padding * 2;

  // 1. Get the actual rendered size of the container
  const rect = containerEl.getBoundingClientRect();
  const scale = innerSize / Math.max(rect.width, rect.height);

  // 2. Collect ALL svg elements inside (frame svg + qr svg)
  const svgElements = Array.from(containerEl.querySelectorAll("svg"));
  if (svgElements.length === 0) throw new Error("No SVG found in container");

  // 3. Find the outermost/largest SVG — that's the one to capture
  //    For no-frame: one svg (190x190 viewBox 300 300)
  //    For frame: frame svg wraps qr svg
  const outerSvg = svgElements.reduce((largest, svg) => {
    const a = svg.getBoundingClientRect();
    const b = largest.getBoundingClientRect();
    return a.width * a.height > b.width * b.height ? svg : largest;
  });

  // 4. Deep clone it — clone captures current DOM state including QRCodeStyling's <g> content
  const clone = outerSvg.cloneNode(true) as SVGSVGElement;

  // 5. Set explicit pixel dimensions (required for canvas rendering)
  const svgRect = outerSvg.getBoundingClientRect();
  clone.setAttribute("width", String(Math.round(svgRect.width)));
  clone.setAttribute("height", String(Math.round(svgRect.height)));

  // 6. Serialize
  const serialized = new XMLSerializer().serializeToString(clone);

  if (mimeType === "image/svg+xml") {
    return new Blob([serialized], { type: "image/svg+xml" });
  }

  // 7. Rasterize via Image → Canvas (native browser SVG renderer)
  const svgBlob = new Blob([serialized], { type: "image/svg+xml;charset=utf-8" });
  const svgUrl = URL.createObjectURL(svgBlob);

  const img = await new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.onload = () => { URL.revokeObjectURL(svgUrl); resolve(image); };
    image.onerror = () => { URL.revokeObjectURL(svgUrl); reject(new Error("SVG raster failed")); };
    image.src = svgUrl;
  });

  const canvas = document.createElement("canvas");
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext("2d")!;
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(0, 0, width, height);
  ctx.drawImage(img, padding, padding, innerSize, innerSize);

  return new Promise((resolve, reject) => {
    canvas.toBlob(
      (b) => b ? resolve(b) : reject(new Error("toBlob failed")),
      mimeType,
      quality
    );
  });
}