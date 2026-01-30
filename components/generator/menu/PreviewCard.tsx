import ChevronRightSmall from "@/components/icons/chevron-right-small";

interface Props {
  title: string;
  borderColor: string;
  onClick?: () => void;
}

export default function PreviewCard({ title, borderColor, onClick }: Props) {
  return (
    <div
      onClick={onClick}
      className="flex h-12 p-2 items-center gap-2 self-stretch bg-white rounded-[var(--Corner-Radius-6)] shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] border-b-2 w-[220px]"
      style={{
        borderColor,
      }}
    >
      <p className="text-[var(--Black)] text-[14px] leading-[22px] font-semibold flex-1 truncate">
        {title}
      </p>

      <ChevronRightSmall />
    </div>
  );
}
