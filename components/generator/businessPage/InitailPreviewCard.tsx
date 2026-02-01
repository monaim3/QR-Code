import ChevronDownSmall from "@/components/icons/chevron-down-small";

interface Props {
  label: string;
  icon: React.ReactNode;
}

export default function InitialPreviewCard({ label, icon }: Props) {
  return (
    <div className="flex p-2 items-center gap-2 self-stretch rounded-[var(--Corner-Radius-6)] bg-white shadow-[0_4px_14px_0_rgba(54,66,140,0.16)]">
      <div className="flex p-2 items-center gap-2 bg-[var(--light-grey-70)] rounded-[var(--Corner-Radius-4)]">
        {icon}
      </div>

      <p className="text-[var(--Black) text-[14px] leading-[22px] flex-1">
        {label}
      </p>

      <ChevronDownSmall className="text-[var(--Grey)]" />
    </div>
  );
}
