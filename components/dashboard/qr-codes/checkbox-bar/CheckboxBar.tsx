import Download from "@/components/icons/download";
import IconButton from "./IconButton";
import PauseCircle from "@/components/icons/pause-circle";
import RefreshCw from "@/components/icons/refresh-cw";
import TrashAlt from "@/components/icons/trash-alt";
import Close from "@/components/icons/close";

interface Props {
  selectedCount: number;
  onClose: () => void;
}

export default function CheckboxBar({ selectedCount, onClose }: Props) {
  return (
    <div className="sticky bottom-0 left-0 flex items-center justify-center gap-10 py-4 px-6 bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] w-full font-roboto">
      {/* Portfolio */}
      <p className="text-[var(--Grey)] text-[14px] leading-[22px]">
        <span className="text-[var(--Dark-gray)]">{selectedCount}</span> items
        selected
      </p>

      {/* Buttons */}
      <div className="flex items-center justify-center gap-2 flex-1">
        <IconButton
          icon={<Download className="text-[var(--Dark-gray)]" />}
          text="Download"
        />
        <IconButton icon={<PauseCircle />} text="Pause" />
        <IconButton icon={<RefreshCw />} text="Reset scans" />
        <IconButton icon={<TrashAlt />} text="Delete" variant="error" />
      </div>

      {/* Close */}
      <button onClick={onClose}>
        <Close />
      </button>
    </div>
  );
}
