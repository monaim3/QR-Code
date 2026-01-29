import ChevronRightSmall from "@/components/icons/chevron-right-small";

interface Props {
  title: string;
}

export default function PreviewCard({ title }: Props) {
  return (
    <div className="flex h-12 p-2 items-center gap-2 self-stretch bg-white rounded-[var(--Corner-Radius-6)] shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] border-b-2 border-[#F4C47B]">
      <p className="text-[var(--Black)] text-[14px] leading-[22px] font-semibold flex-1">
        {title}
      </p>

      <ChevronRightSmall />
    </div>
  );
}
