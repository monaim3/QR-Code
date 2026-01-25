import FilterAlt from "@/components/icons/filter-alt";

interface Props {
  disabled?: boolean;
  onClick: () => void;
  isHidden?: boolean;
}

export default function ClearFilter({
  disabled = false,
  onClick,
  isHidden = true,
}: Props) {
  return (
    <div
      className={`flex-col items-end flex-1 ml-auto  ${isHidden && "desktopDashboard:flex hidden"}`}
    >
      <button
        className={`inline-flex justify-end items-center gap-2 ${
          disabled
            ? "text-[var(--Grey)] cursor-not-allowed"
            : "text-[var(--Dark-gray)]"
        }`}
        onClick={onClick}
      >
        <span className="leading-[22px] font-roboto">Clear filters</span>

        <div className="shrink-0">
          <FilterAlt />
        </div>
      </button>
    </div>
  );
}
