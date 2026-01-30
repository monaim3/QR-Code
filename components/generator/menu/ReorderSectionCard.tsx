import ArrowCircleDown from "@/components/icons/arrow-circle-down";
import ArrowCircleUp from "@/components/icons/arrow-circle-up";

interface Props {
  title: string;
  onMoveUp?: () => void;
  onMoveDown?: () => void;
  isFirst?: boolean;
  isLast?: boolean;
}

export default function ReorderSectionCard({
  title,
  onMoveUp,
  onMoveDown,
  isFirst = false,
  isLast = false,
}: Props) {
  return (
    <div className="flex p-4 items-center gap-4 self-stretch border border-[var(--boarder-grey-50)] rounded-[var(--Corner-Radius-8)] bg-white">
      <p className="text-[var(--Black)] font-medium text-[14px] leading-[22px] flex-1">
        {title}
      </p>

      <div className="flex items-center gap-4">
        <div className="w-[1px] h-6 bg-[var(--boarder-grey-50)]" />

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onMoveUp}
            disabled={isFirst}
            aria-label="Move up"
            className={`p-0 border-0 bg-transparent ${isFirst ? "cursor-not-allowed opacity-40" : "cursor-pointer hover:opacity-80"}`}
          >
            <ArrowCircleUp
              className={isFirst ? "text-[var(--Boarder-Grey)]" : "text-[var(--Dark-gray)]"}
            />
          </button>
          <button
            type="button"
            onClick={onMoveDown}
            disabled={isLast}
            aria-label="Move down"
            className={`p-0 border-0 bg-transparent ${isLast ? "cursor-not-allowed opacity-40" : "cursor-pointer hover:opacity-80"}`}
          >
            <ArrowCircleDown
              className={isLast ? "text-[var(--Boarder-Grey)]" : "text-[var(--Dark-gray)]"}
            />
          </button>
        </div>
      </div>
    </div>
  );
}
