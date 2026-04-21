import { Suspense } from "react";
import QRCodesClient from "./QRCodesClient";

// Development purposes only
export default function Page() {
  return (
    <Suspense fallback={<div>Loading QR codes...</div>}>
      <QRCodesClient />
    </Suspense>
  );
}
