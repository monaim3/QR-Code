import Circle from "@/components/icons/circle";
import Copy from "@/components/icons/copy";
import Edit from "@/components/icons/edit";
import Eye from "@/components/icons/eye";
import LinkAlt01 from "@/components/icons/link-alt-01";
import PauseCircle from "@/components/icons/pause-circle";
import { getStatusStyles, normalizeUrl } from "@/lib/utils";
import { QRCodeItem } from "@/types/qr-code";

interface Props {
  item: QRCodeItem;
  onEditName: (item: QRCodeItem) => void;
  onEditUrl: (item: QRCodeItem) => void;
  onQrPreviewModal: (item: QRCodeItem) => void;
}

export default function QrInfo({
  item,
  onEditName,
  onEditUrl,
  onQrPreviewModal,
}: Props) {
  const handleCopy = async () => {
    await navigator.clipboard.writeText(item.shortUrl);
  };

  return (
    <div className="inline-flex flex-col items-start desktopDashboard:gap-1 gap-2">
      {/* Name */}
      <div className="flex items-center gap-2">
        <h4 className="text-[var(--Black)] text-[18px] font-bold leading-[var(--Typeface-Line-height-Heading-4)]">
          {item.title}
        </h4>
        <button onClick={() => onEditName(item)}>
          <Edit className="text-[var(--Grey)]" />
        </button>
      </div>

      {/* Preview link */}
      <div className="desktopDashboard:flex hidden items-center gap-1">
        <button onClick={() => onQrPreviewModal(item)}>
          <Eye className="text-[var(--Dark-gray)] cursor-pointer" />
        </button>
        <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
          {item.shortUrl}
        </p>
        <button onClick={handleCopy}>
          <Copy className="text-[var(--Grey)]" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* Type */}
        <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
          Type <span className="text-[var(--Black)]">{item.type}</span>
        </p>

        {/* Line */}
        <div className="w-[1px] h-4 bg-[var(--boarder-grey-50)] desktopDashboard:hidden" />

        {/* Scans */}
        <p className="text-[var(--Grey)] text-[14px] leading-[22px] desktopDashboard:hidden">
          <span className="text-[var(--Black)] font-semibold">
            {item.scans}
          </span>{" "}
          scans
        </p>

        {/* Line */}
        <div className="w-[1px] h-4 bg-[var(--boarder-grey-50)] desktopDashboard:hidden" />

        {/* Status */}
        <div className="desktopDashboard:hidden flex items-center justify-center gap-2 py-2 shrink-0">
          {item.status === "Paused" ? (
            <>
              <PauseCircle className="text-[var(--Grey)]" />
              <span className="text-[var(--Grey)] text-[14px] leading-[22px] font-medium">
                Paused
              </span>
            </>
          ) : (
            <>
              <Circle className={getStatusStyles(item.status)} />
              <span
                className={`text-[14px] leading-[22px] font-medium ${getStatusStyles(item.status)}`}
              >
                {item.status}
              </span>
            </>
          )}
        </div>

        {/* Line */}
        <div className="w-[1px] h-4 bg-[var(--boarder-grey-50)] desktopDashboard:hidden" />

        {/* Info */}
        <p className="text-[var(--Black)] text-[14px] leading-[22px] desktopDashboard:hidden">
          Created: {item.createdAt}
        </p>
      </div>

      {/* Website link */}
      {item.destinationUrl && (
        <div className="flex items-center gap-1">
          <a
            href={normalizeUrl(item.destinationUrl)}
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkAlt01 />
          </a>
          <div className="flex items-center gap-2">
            <p className="text-[var(--Dark-Grey)] font-roboto text-[14px] leading-[22px]">
              {item.destinationUrl}
            </p>
            <button onClick={() => onEditUrl(item)}>
              <Edit className="text-[var(--Grey)]" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
