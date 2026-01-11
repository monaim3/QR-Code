// "use client";

// import { useState, ReactNode } from "react";
// import { X } from "lucide-react";
// import PreviewQRButtons from "./Preview_QR_Buttons";
// import MobileFrame from "../common/MobileFrame";

// interface MobilePreviewModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   children?: ReactNode;
// }

// export default function MobilePreviewModal({
//   isOpen,
//   onClose,
//   children,
// }: MobilePreviewModalProps) {
//   const [activeTab, setActiveTab] = useState<"preview" | "qrcode">("preview");

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
//       <div className="relative bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-y-auto">
//         <button
//           onClick={onClose}
//           className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
//           aria-label="Close"
//         >
//           <X className="w-5 h-5 text-[var(--Dark-gray)]" />
//         </button>
//         <div className="flex flex-col items-center gap-6 p-6 pt-16">
//           <PreviewQRButtons activeTab={activeTab} onTabChange={setActiveTab} />
//           <MobileFrame size="desktop">{children}</MobileFrame>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { useState, ReactNode } from "react";
import PreviewQRButtons from "./Preview_QR_Buttons";
import MobileFrame from "../common/MobileFrame";
import CloseCircle from "../icons/CloseCircle";

interface MobilePreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: ReactNode;
}

export default function MobilePreviewModal({
  isOpen,
  onClose,
  children,
}: MobilePreviewModalProps) {
  const [activeTab, setActiveTab] = useState<"preview" | "qrcode">("preview");

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div 
        className="absolute inset-0 bg-black/20"
        onClick={onClose}
      />
      
      <div className="relative w-full max-w-md mx-4">
        <button
          onClick={onClose}
          className="absolute -top-8 right-0 flex items-center gap-2 z-10"
        >
          <span className="text-white text-[16px] font-semibold leading-[24px]">
            Close
          </span>
          <CloseCircle className="text-white w-6 h-6" />
        </button>
        <div className="relative bg-white rounded-[var(--Corner-Radius-10)] max-h-[90vh] overflow-y-auto shadow-lg">
          <div className="flex flex-col items-center py-6  px-8">
            <PreviewQRButtons activeTab={activeTab} onTabChange={setActiveTab} />
            <MobileFrame size="desktop">{children}</MobileFrame>
          </div>
        </div>
      </div>
    </div>
  );
}