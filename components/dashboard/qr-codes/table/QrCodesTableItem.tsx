import Circle from "@/components/icons/circle";
import CheckBox from "../filters/CheckBox";
import Tooltip from "../filters/Tooltip";
import QrCode from "./QrCode";
import QrInfo from "./QrInfo";
import PauseCircle from "@/components/icons/pause-circle";
import Actions from "./Actions";

export default function QrCodesTableItem() {
  const status = "Active"; // test purpose

  return (
    <div className="flex items-center gap-[64px] p-4 rounded-[var(--Corner-Radius-10)] bg-white shadow-[var(--Generator-Shadow)] w-full">
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

      {/* Total Scans */}
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
        {status === "Active" ? (
          <>
            <Circle />
            <span className="text-[var(--Green)] text-[14px] leading-[22px] font-medium">
              Active
            </span>
          </>
        ) : (
          <>
            <PauseCircle />
            <span className="text-[var(--Grey)] text-[14px] leading-[22px] font-medium">
              Paused
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
