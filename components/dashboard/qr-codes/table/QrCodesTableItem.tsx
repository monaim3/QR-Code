import CheckBox from "../filters/CheckBox";
import Tooltip from "../filters/Tooltip";
import QrCode from "./QrCode";
import QrInfo from "./QrInfo";

export default function QrCodesTableItem() {
  return (
    <div className="flex items-start gap-[64px] p-4 rounded-[var(--Corner-Radius-10)] bg-white shadow-[var(--Generator-Shadow)] w-full">
      <div className="flex items-center gap-4 flex-1">
        <CheckBox />
        <Tooltip text="Click to scan">
          <QrCode />
        </Tooltip>
        <QrInfo />
      </div>
    </div>
  );
}
