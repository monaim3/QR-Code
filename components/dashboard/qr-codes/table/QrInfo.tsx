import Copy from "@/components/icons/copy";
import Edit from "@/components/icons/edit";
import Eye from "@/components/icons/eye";
import LinkAlt01 from "@/components/icons/link-alt-01";
import { QRCodeItem } from "@/types/qr-code";

interface Props {
  item: QRCodeItem;
  onEditName: (item: QRCodeItem) => void;
  onEditUrl: (item: QRCodeItem) => void;
}

export default function QrInfo({ item, onEditName, onEditUrl }: Props) {
  return (
    <div className="inline-flex flex-col items-start gap-1">
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
      <div className="flex items-center gap-1">
        <Eye />
        <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
          {item.shortUrl}
        </p>
        <Copy className="cursor-pointer text-[var(--Grey)]" />
      </div>

      {/* Type */}
      <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
        Type <span className="text-[var(--Black)]">{item.type}</span>
      </p>

      {/* Website link */}
      {item.destinationUrl && (
        <div className="flex items-center gap-1">
          <LinkAlt01 />
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
  );
}
