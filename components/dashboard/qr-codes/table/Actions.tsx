import ShareAndroid from "@/components/icons/share-android";
import DownloadAction from "./DownloadAction";
import MoreAction from "./MoreAction";
import { useState } from "react";
import ShareQRModal from "./ShareQRModal";

export default function Actions() {
  const [isShareModalOpen, setIsShareModalOpen] = useState(false);

  return (
    <div className="flex items-center gap-4">
      {/* Buttons */}
      <div className="flex items-start gap-2">
        {/* Share */}
        <button
          onClick={() => setIsShareModalOpen(true)}
          className="flex items-center justify-center h-10 py-2 px-4 rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] bg-white shadow-[0_1px_4px_0_rgba(63,72,103,0.16)]"
        >
          <ShareAndroid />
        </button>

        {/* Download */}
        <DownloadAction />
      </div>

      {/* More */}
      <MoreAction />

      {/* Modal */}
      <ShareQRModal
        open={isShareModalOpen}
        onClose={() => setIsShareModalOpen(false)}
      />
    </div>
  );
}
