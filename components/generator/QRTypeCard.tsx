import Link from "next/link";
import { Card } from "@/components/ui/card";

interface QRTypeCardProps {
  icon: React.ReactElement;
  title: string;
  description: string;
  href: string;
}

export default function QRTypeCard({
  icon,
  title,
  description,
  href,
}: QRTypeCardProps) {
  return (
    <Link href={href}>
      <Card
        className="rounded-xl gap-4 py-0 bg-white border border-transparent 
        hover:border-[var(--Blue)] transition-all duration-200 cursor-pointer group
        shadow-[0_4px_14px_0_rgba(54,66,140,0.16)]"
      >
        <div className="flex items-start gap-2 p-4">
          <div
            className="flex-shrink-0 flex items-center justify-center 
          w-[58px] h-12 rounded-lg 
          group-hover:bg-[var(--Blue)] transition-colors
          [&_svg_path]:group-hover:fill-white [&_svg_rect]:group-hover:stroke-white
          [&_svg_path]:transition-colors [&_svg_rect]:transition-colors"
          >
            {icon}
          </div>
          <div className="flex-1">
            <h3
              className="text-lg font-bold text-[var(--Black)] leading-normal"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {title}
            </h3>
            <p
              className="text-sm font-normal text-[var(--Dark-gray)] leading-[22px]"
              style={{ fontFamily: "var(--font-roboto)" }}
            >
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
