import Circle from "@/components/icons/circle";
import CheckBox from "../filters/CheckBox";
import Tooltip from "../filters/Tooltip";
import QrCode from "./QrCode";
import QrInfo from "./QrInfo";
import PauseCircle from "@/components/icons/pause-circle";
import Actions from "./Actions";
import { QRCodeItem } from "@/types/qr-code";

interface Props {
  item: QRCodeItem;
  isSelected: boolean;
  onToggleSelection: (id: string) => void;
  onEditName: (item: QRCodeItem) => void;
  onEditUrl: (item: QRCodeItem) => void;
  onShareModal: (item: QRCodeItem) => void;
  onCustomDownloadModal: (item: QRCodeItem) => void;
  onQrPreviewModal: (item: QRCodeItem) => void;
}

export default function QrCodesTableItem({
  item,
  isSelected,
  onToggleSelection,
  onEditName,
  onEditUrl,
  onShareModal,
  onCustomDownloadModal,
  onQrPreviewModal,
}: Props) {
  const getStatusStyles = () => {
    switch (item.status) {
      case "Active":
        return "text-[var(--Green)]";
      case "Paused":
        return "text-[var(--Grey)]";
      case "Paid":
        return "text-[var(--Green)]";
      case "Failed":
        return "text-[var(--error)]";
      case "Cancelled":
        return "text-[var(--Orange)]";
      case "Expired":
        return "text-[var(--error)]";
      default:
        return "";
    }
  };

  const handleCheckboxChange = () => {
    onToggleSelection(item.id);
  };

  return (
    <div className="flex items-center gap-[64px] p-4 rounded-[var(--Corner-Radius-10)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] w-full">
      {/* Qr Code */}
      <div className="flex items-center gap-4 flex-1">
        <CheckBox checked={isSelected} onChange={handleCheckboxChange} />
        <Tooltip text="Click to scan">
          <QrCode thumbnail={item.thumbnail} />
        </Tooltip>
        <QrInfo
          item={item}
          onEditName={onEditName}
          onEditUrl={onEditUrl}
          onQrPreviewModal={onQrPreviewModal}
        />
      </div>

      {/* Line */}
      <div className="w-[1px] h-[88px] bg-[var(--boarder-grey-50)]" />

      {/* Scans */}
      <div className="flex flex-col items-center w-[64px] h-[54px]">
        <h3 className="text-[var(--Black)] text-[24px] font-bold leading-[var(--Typeface-Line-height-Heading-3)] text-center">
          {item.scans}
        </h3>
        <p className="text-[var(--Grey)] text-center text-[14px] leading-[22px]">
          Scans
        </p>
      </div>

      {/* Line */}
      <div className="w-[1px] h-[88px] bg-[var(--boarder-grey-50)]" />

      {/* Info */}
      <div className="flex flex-col justify-center items-start gap-1 h-[72px]">
        <p className="text-[var(--Black)] text-[14px] leading-[22px]">
          Created: {item.createdAt}
        </p>
        {item.lastModified && (
          <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
            Last modified: {item.lastModified}
          </p>
        )}
        {item.lastModified && (
          <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
            RECENTLY MODIFIED
          </p>
        )}
      </div>

      {/* Line */}
      <div className="w-[1px] h-[88px] bg-[var(--boarder-grey-50)]" />

      {/* Status */}
      <div className="flex items-center justify-center gap-2 p-2">
        {item.status === "Paused" ? (
          <>
            <PauseCircle className="text-[var(--Grey)]" />
            <span className="text-[var(--Grey)] text-[14px] leading-[22px] font-medium">
              Paused
            </span>
          </>
        ) : (
          <>
            <Circle className={getStatusStyles()} />
            <span
              className={`text-[14px] leading-[22px] font-medium ${getStatusStyles()}`}
            >
              {item.status}
            </span>
          </>
        )}
      </div>

      {/* Line */}
      <div className="w-[1px] h-[88px] bg-[var(--boarder-grey-50)]" />

      {/* Actions */}
      <Actions
        item={item}
        onShareModal={onShareModal}
        onCustomDownloadModal={onCustomDownloadModal}
      />
    </div>
  );
}
