import Circle from "@/components/icons/circle";
import CheckBox from "../filters/CheckBox";
import Tooltip from "@/components/dashboard/Tooltip";
import QrCode from "./QrCode";
import QrInfo from "./QrInfo";
import PauseCircle from "@/components/icons/pause-circle";
import Actions from "./Actions";
import { QrCode as qrData } from "@/types/generatedQr";
import MoreAction from "./MoreAction";
import { getStatusStyles, normalizeUrl } from "@/lib/utils";
import Edit from "@/components/icons/edit";
import LinkAlt01 from "@/components/icons/link-alt-01";

interface Props {
  item: qrData;
  isSelected: boolean;
  onToggleSelection: (id: string) => void;
  onEditName: (item: qrData) => void;
  onEditUrl: (item: qrData) => void;
  onShareModal: (item: qrData) => void;
  onCustomDownloadModal: (item: qrData) => void;
  onQrPreviewModal: (item: qrData) => void;
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

  const formattedDate = (date: string) => {
    return new Date(date).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <>
      {/* Desktop */}
      <div className="desktopDashboard:flex hidden items-center desktopXl:gap-[64px] desktopLg:gap-6 desktopMd:gap-4 justify-between p-4 rounded-[var(--Corner-Radius-10)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] w-full">
        {/* Qr Code */}
        <div className="flex items-center gap-4 flex-1">
          <div className="shrink-0">
            <CheckBox checked={isSelected} onChange={handleCheckboxChange} />
          </div>
          <Tooltip text="Click to scan">
            <QrCode
              thumbnail={""}
              qrCodeData={item}
              onQrPreviewModal={() => onQrPreviewModal(item)}
            />
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
            {item.scansAmount}
          </h3>
          <p className="text-[var(--Grey)] text-center text-[14px] leading-[22px] w-[64px]">
            Scans
          </p>
        </div>

        {/* Line */}
        <div className="w-[1px] h-[88px] bg-[var(--boarder-grey-50)]" />

        {/* Info */}
        <div className="flex flex-col justify-center items-start font-roboto gap-1 shrink-0 w-[180px]">
          <p className="text-[var(--Black)] text-[14px] leading-[22px]">
            Created: {formattedDate(item.createdAt)}
          </p>
          {item.updatedAt && (
            <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
              Last modified: {formattedDate(item.updatedAt)}
            </p>
          )}
          {item.updatedAt && (
            <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
              RECENTLY MODIFIED
            </p>
          )}
        </div>

        {/* Line */}
        <div className="w-[1px] h-[88px] bg-[var(--boarder-grey-50)]" />

        {/* Status */}
        <div className="flex items-center justify-center gap-2 w-[80px] shrink-0">
          {item.disabled === true ? (
            <>
              <PauseCircle className="text-[var(--Grey)]" />
              <span className="text-[var(--Grey)] text-[14px] leading-[22px] font-medium">
                Paused
              </span>
            </>
          ) : (
            <>
              <Circle
                className={getStatusStyles(
                  item.disabled === false ? "Active" : "Paused",
                )}
              />
              <span
                className={`text-[14px] leading-[22px] font-medium ${getStatusStyles(item.disabled === false ? "Active" : "Paused")}`}
              >
                {item.disabled === false ? "Active" : "Paused"}
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

          <QrCode
            thumbnail={""}
            qrCodeData={item}
            onQrPreviewModal={() => onQrPreviewModal(item)}
          />

          <QrInfo
            item={item}
            onEditName={onEditName}
            onEditUrl={onEditUrl}
            onQrPreviewModal={onQrPreviewModal}
          />
        </div>

        {/* More */}
        <MoreAction
          key={item.id}
          id={item.id}
          onCustomDownloadModal={() => onCustomDownloadModal(item)}
          onShareModal={() => onShareModal(item)}
        />
      </div>

      {/* Mobile */}
      <div className="p-4 desktopDashboard:hidden tablet:hidden flex flex-col items-start gap-4 rounded-[var(--Corner-Radius-10)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] w-full">
        <div className="flex items-center gap-4 self-stretch">
          <CheckBox checked={isSelected} onChange={handleCheckboxChange} />

          <div className="flex items-center gap-2 flex-1">
            <h4 className="text-[var(--Black)] text-[16px] font-semibold leading-[24px]">
              {item.name}
            </h4>
            <button onClick={() => onEditName(item)}>
              <Edit className="text-[var(--Grey)]" />
            </button>
          </div>

          {/* More */}
          <MoreAction
            key={item.id}
            id={item.id}
            onCustomDownloadModal={() => onCustomDownloadModal(item)}
            onShareModal={() => onShareModal(item)}
          />
        </div>

        <div className="flex items-center gap-4 self-stretch">
          <QrCode
            thumbnail={""}
            qrCodeData={item}
            onQrPreviewModal={() => onQrPreviewModal(item)}
          />

          <div className="flex flex-col items-start gap-1 flex-1">
            {/* Type */}
            <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
              Type{" "}
              <span className="text-[var(--Black)]">{item.content.type}</span>
            </p>

            <div className="flex items-center gap-4 self-stretch">
              {/* Scans */}
              <p className="text-[var(--Grey)] text-[14px] leading-[22px] desktopDashboard:hidden">
                <span className="text-[var(--Black)] font-semibold">
                  {item.scansAmount}
                </span>{" "}
                scans
              </p>

              {/* Line */}
              <div className="w-[1px] h-[22px] bg-[var(--boarder-grey-50)] desktopDashboard:hidden" />

              {/* Status */}
              <div className="desktopDashboard:hidden flex items-center justify-center gap-2 py-2 shrink-0">
                {item.disabled === true ? (
                  <>
                    <PauseCircle className="text-[var(--Grey)]" />
                    <span className="text-[var(--Grey)] text-[14px] leading-[22px] font-medium">
                      Paused
                    </span>
                  </>
                ) : (
                  <>
                    <Circle
                      className={getStatusStyles(
                        item.disabled === false ? "Active" : "Paused",
                      )}
                    />
                    <span
                      className={`text-[14px] leading-[22px] font-medium ${getStatusStyles(item.disabled === false ? "Active" : "Paused")}`}
                    >
                      {item.disabled === false ? "Active" : "Paused"}
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
        {item.content.url && (
          <div className="flex items-center gap-1">
            <a
              href={normalizeUrl(item.content.url)}
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkAlt01 className="text-[#3F3E3E] cursor-pointer" />
            </a>
            <div className="flex items-center gap-2">
              <p className="text-[var(--Dark-Grey)] text-[14px] leading-[22px]">
                {item.content.url}
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
