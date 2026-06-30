import Circle from "@/components/icons/circle";
import Copy from "@/components/icons/copy";
import Edit from "@/components/icons/edit";
import Eye from "@/components/icons/eye";
import LinkAlt01 from "@/components/icons/link-alt-01";
import PauseCircle from "@/components/icons/pause-circle";
import { getStatusStyles, normalizeUrl } from "@/lib/utils";
import { QrCode as qrData } from "@/types/generatedQr";
import { useT } from "@/utils/t";

interface Props {
  item: qrData;
  onEditName: (item: qrData) => void;
  onEditUrl: (item: qrData) => void;
  onQrPreviewModal: (item: qrData) => void;
}

export default function QrInfo({
  item,
  onEditName,
  onEditUrl,
  onQrPreviewModal,
}: Props) {
  const t = useT();

  const handleCopy = async () => {
    await navigator.clipboard.writeText(item.content.url);
  };

  const statusLabel = item.disabled === false
    ? t("public__dashboard__qr_table__controls__status_active")
    : t("public__dashboard__qr_table__controls__status_paused");

  return (
    <div className="inline-flex flex-col items-start desktopDashboard:gap-1 gap-2">
      {/* Name */}
      <div className="flex items-center gap-2">
        <h4 className="text-[var(--Black)] text-[18px] font-bold leading-[var(--Typeface-Line-height-Heading-4)]">
          {item.name}
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
          {item.content.url}
        </p>
        <button onClick={handleCopy}>
          <Copy className="text-[var(--Grey)]" />
        </button>
      </div>

      <div className="flex items-center gap-4">
        {/* Type */}
        <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
          {t("public__dashboard__qr_table__controls__sort_type")}{" "}
          <span className="text-[var(--Black)]">{item.content.type}</span>
        </p>

        {/* Line */}
        <div className="w-[1px] h-4 bg-[var(--boarder-grey-50)] desktopDashboard:hidden" />

        {/* Scans */}
        <p className="text-[var(--Grey)] text-[14px] leading-[22px] desktopDashboard:hidden">
          <span className="text-[var(--Black)] font-semibold">
            {item.scansAmount}
          </span>{" "}
          {t("public__dashboard__qr_table__qr__card__scans").toLowerCase()}
        </p>

        {/* Line */}
        <div className="w-[1px] h-4 bg-[var(--boarder-grey-50)] desktopDashboard:hidden" />

        {/* Status */}
        <div className="desktopDashboard:hidden flex items-center justify-center gap-2 py-2 shrink-0">
          {item.disabled === true ? (
            <>
              <PauseCircle className="text-[var(--Grey)]" />
              <span className="text-[var(--Grey)] text-[14px] leading-[22px] font-medium">
                {t("public__dashboard__qr_table__controls__status_paused")}
              </span>
            </>
          ) : (
            <>
              <Circle className={getStatusStyles(item.disabled === false ? "Active" : "Paused")} />
              <span
                className={`text-[14px] leading-[22px] font-medium ${getStatusStyles(item.disabled === false ? "Active" : "Paused")}`}
              >
                {statusLabel}
              </span>
            </>
          )}
        </div>

        {/* Line */}
        <div className="w-[1px] h-4 bg-[var(--boarder-grey-50)] desktopDashboard:hidden" />

        {/* Info */}
        <p className="text-[var(--Black)] text-[14px] leading-[22px] desktopDashboard:hidden">
          {t("public__dashboard__qr_table__qr_card__creation_date").replace("{date}", item.createdAt)}
        </p>
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
            <p className="text-[var(--Dark-Grey)] font-roboto text-[14px] leading-[22px]">
              {item.content.url}
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
