import FilterAlt from "@/components/icons/filter-alt";
import { useT } from "@/utils/t";

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
  const t = useT();

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
        <span className="leading-[22px] font-roboto">
          {t("public__dashboard__qr_table__controls__clear_filters")}
        </span>

        <div className="shrink-0">
          <FilterAlt />
        </div>
      </button>
    </div>
  );
}
