import Circle from "@/components/icons/circle";
import CheckBox from "../filters/CheckBox";
import Tooltip from "../filters/Tooltip";
import QrCode from "./QrCode";
import QrInfo from "./QrInfo";
import PauseCircle from "@/components/icons/pause-circle";
import Actions from "./Actions";

interface Props {
  status?: string;
}

export default function QrCodesTableItem({ status = "Active" }: Props) {
  const getStatusStyles = () => {
    switch (status) {
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

  return (
    <div className="flex items-center gap-[64px] p-4 rounded-[var(--Corner-Radius-10)] bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] w-full">
      {/* Qr Code */}
      <div className="flex items-center gap-4 flex-1">
        <CheckBox />
        <Tooltip text="Click to scan">
          <QrCode />
        </Tooltip>
        <QrInfo />
      </div>

      {/* Line */}
      <div className="w-[1px] h-[88px] bg-[var(--boarder-grey-50)]" />

      {/* Scans */}
      <div className="flex flex-col items-center w-[64px] h-[54px]">
        <h3 className="text-[var(--Black)] text-[24px] font-bold leading-[var(--Typeface-Line-height-Heading-3)] text-center">
          256
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
          Created: Jun 27, 2023
        </p>
        <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
          Last modified: Feb 12, 2024
        </p>
        <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
          RECENTLY MODIFIED
        </p>
      </div>

      {/* Line */}
      <div className="w-[1px] h-[88px] bg-[var(--boarder-grey-50)]" />

      {/* Status */}
      <div className="flex items-center justify-center gap-2 p-2">
        {status === "Paused" ? (
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
              {status}
            </span>
          </>
        )}
      </div>

      {/* Line */}
      <div className="w-[1px] h-[88px] bg-[var(--boarder-grey-50)]" />

      {/* Actions */}
      <Actions />
    </div>
  );
}
