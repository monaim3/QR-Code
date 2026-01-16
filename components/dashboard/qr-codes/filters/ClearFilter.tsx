import FilterAlt from "@/components/icons/filter-alt";

interface Props {
  disabled?: boolean;
  onClick: () => void;
}

export default function ClearFilter({ disabled = false, onClick }: Props) {
  return (
    <div className="flex flex-col items-end flex-1 ml-auto">
      <button
        className={`inline-flex justify-end items-center gap-2 ${
          disabled
            ? "text-[var(--Grey)] cursor-not-allowed"
            : "text-[var(--Dark-gray)]"
        }`}
        onClick={onClick}
      >
        <span className="leading-[22px]">Clear filters</span>

        <FilterAlt />
      </button>
    </div>
  );
}
