import ShareAndroid from "@/components/icons/share-android";
import DownloadAction from "./DownloadAction";
import MoreAction from "./MoreAction";
import { QRCodeItem } from "@/types/qr-code";

interface Props {
  item: QRCodeItem;
  onShareModal: (item: QRCodeItem) => void;
  onCustomDownloadModal: (item: QRCodeItem) => void;
}

export default function Actions({
  item,
  onShareModal,
  onCustomDownloadModal,
}: Props) {
  return (
    <div className="flex items-center gap-4">
      {/* Buttons */}
      <div className="flex items-start gap-2">
        {/* Share */}
        <button
          onClick={() => onShareModal(item)}
          className="flex items-center justify-center h-10 py-2 px-4 rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] bg-white shadow-[0_1px_4px_0_rgba(63,72,103,0.16)]"
        >
          <ShareAndroid className="text-[#3F3E3E]" />
        </button>

        {/* Download */}
        <DownloadAction
          onCustomDownloadModal={() => onCustomDownloadModal(item)}
        />
      </div>

      {/* More */}
      <MoreAction
        onCustomDownloadModal={() => onCustomDownloadModal(item)}
        onShareModal={() => onShareModal(item)}
      />
    </div>
  );
}
