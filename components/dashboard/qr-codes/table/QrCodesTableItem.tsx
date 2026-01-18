import Circle from "@/components/icons/circle";
import CheckBox from "../filters/CheckBox";
import Tooltip from "@/components/dashboard/Tooltip";
import QrCode from "./QrCode";
import QrInfo from "./QrInfo";
import PauseCircle from "@/components/icons/pause-circle";
import Actions from "./Actions";
import { QRCodeItem } from "@/types/qr-code";
import MoreAction from "./MoreAction";
import { getStatusStyles, normalizeUrl } from "@/lib/utils";
import Edit from "@/components/icons/edit";
import LinkAlt01 from "@/components/icons/link-alt-01";

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
  const handleCheckboxChange = () => {
    onToggleSelection(item.id);
  };

  return (
    <>
      {/* Desktop */}
      <div className="desktopDashboard:flex hidden items-center gap-[64px] p-4 rounded-[var(--Corner-Radius-10)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] w-full">
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
        <div className="flex flex-col items-start">
          <h3 className="text-[var(--Black)] text-[24px] font-bold leading-[var(--Typeface-Line-height-Heading-3)] text-center w-[64px]">
            {item.scans}
          </h3>
          <p className="text-[var(--Grey)] text-center text-[14px] leading-[22px] w-[64px]">
            Scans
          </p>
        </div>

        {/* Line */}
        <div className="w-[1px] h-[88px] bg-[var(--boarder-grey-50)]" />

        {/* Info */}
        <div className="flex flex-col justify-center items-start gap-1 shrink-0 w-[180px]">
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
        <div className="flex items-center justify-center gap-2 p-2 w-[100px] shrink-0">
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
        <div className="w-[1px] h-[88px] bg-[var(--boarder-grey-50)]" />

        {/* Actions */}
        <Actions
          item={item}
          onShareModal={onShareModal}
          onCustomDownloadModal={onCustomDownloadModal}
        />
      </div>

      {/* Tablet */}
      <div className="desktopDashboard:hidden tablet:flex hidden items-center gap-4 p-4 rounded-[var(--Corner-Radius-10)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] w-full">
        <div className="flex items-center gap-4 flex-1">
          <CheckBox checked={isSelected} onChange={handleCheckboxChange} />

          <QrCode thumbnail={item.thumbnail} />

          <QrInfo
            item={item}
            onEditName={onEditName}
            onEditUrl={onEditUrl}
            onQrPreviewModal={onQrPreviewModal}
          />
        </div>

        {/* More */}
        <MoreAction />
      </div>

      {/* Mobile */}
      <div className="p-4 desktopDashboard:hidden tablet:hidden flex flex-col items-start gap-4 rounded-[var(--Corner-Radius-10)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] w-full">
        <div className="flex items-center gap-4 self-stretch">
          <CheckBox checked={isSelected} onChange={handleCheckboxChange} />

          <div className="flex items-center gap-2 flex-1">
            <h4 className="text-[var(--Black)] text-[16px] font-semibold leading-[24px]">
              {item.title}
            </h4>
            <button onClick={() => onEditName(item)}>
              <Edit className="text-[var(--Grey)]" />
            </button>
          </div>

          {/* More */}
          <MoreAction />
        </div>

        <div className="flex items-center gap-4 self-stretch">
          <QrCode thumbnail={item.thumbnail} />

          <div className="flex flex-col items-start gap-1 flex-1">
            {/* Type */}
            <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
              Type <span className="text-[var(--Black)]">{item.type}</span>
            </p>

            <div className="flex items-center gap-4 self-stretch">
              {/* Scans */}
              <p className="text-[var(--Grey)] text-[14px] leading-[22px] desktopDashboard:hidden">
                <span className="text-[var(--Black)] font-semibold">
                  {item.scans}
                </span>{" "}
                scans
              </p>

              {/* Line */}
              <div className="w-[1px] h-[22px] bg-[var(--boarder-grey-50)] desktopDashboard:hidden" />

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
            </div>

            {/* Info */}
            <p className="text-[var(--Black)] text-[14px] leading-[22px]">
              Created: {item.createdAt}
            </p>
          </div>
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
              <p className="text-[var(--Dark-Grey)] text-[14px] leading-[22px]">
                {item.destinationUrl}
              </p>
              <button onClick={() => onEditUrl(item)}>
                <Edit className="text-[var(--Grey)]" />
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
