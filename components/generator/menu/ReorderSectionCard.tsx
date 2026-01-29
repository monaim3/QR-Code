import ArrowCircleDown from "@/components/icons/arrow-circle-down";
import ArrowCircleUp from "@/components/icons/arrow-circle-up";

interface Props {
  title: string;
}

export default function ReorderSectionCard({ title }: Props) {
  return (
    <div className="flex p-4 items-center gap-4 self-stretch border border-[var(--boarder-grey-50)] rounded-[var(--Corner-Radius-8)] bg-white">
      <p className="text-[var(--Black)] font-medium text-[14px] leading-[22px] flex-1">
        {title}
      </p>

      <div className="flex items-center gap-4">
        <div className="w-[1px] h-6 bg-[var(--boarder-grey-50)]" />

        <div className="flex items-center gap-2">
          <ArrowCircleUp className="text-[var(--Boarder-Grey)] cursor-pointer" />
          <ArrowCircleDown className="text-[var(--Dark-gray)] cursor-pointer" />
        </div>
      </div>
    </div>
  );
}
