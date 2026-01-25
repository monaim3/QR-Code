import HelpCircle from "@/components/icons/help-circle";
import Tooltip from "../Tooltip";

interface Props {
  icon: React.ElementType;
  title: string;
  value: string;
  highlight?: string;
}

export default function KPICard({
  icon: Icon,
  title,
  value,
  highlight,
}: Props) {
  return (
    <div className="flex items-start gap-4 flex-1 p-6 rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)] bg-white w-full desktopDashboard:w-auto">
      {/* Icon */}
      <div className="flex items-center justify-center p-2 bg-[var(--Blue)] w-10 h-10 rounded-[var(--Corner-Radius-8)]">
        <Icon className="text-white" />
      </div>

      {/* Texts */}
      <div className="flex flex-col items-start">
        <div className="flex items-center self-stretch gap-1">
          <p className="text-[var(--Black)] text-[14px] leading-[22px]">
            {title}
          </p>

          {highlight && (
            <Tooltip text={highlight}>
              <HelpCircle className="text-[var(--Grey)] cursor-pointer" />
            </Tooltip>
          )}
        </div>

        <h2 className="text-[var(--Black)] text-[32px] font-bold leading-[var(--Typeface-Line-height-Heading-2)]">
          {value}
        </h2>
      </div>
    </div>
  );
}
