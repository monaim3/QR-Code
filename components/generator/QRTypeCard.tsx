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
        className="rounded-xl gap-4 py-0 bg-white border-2 border-transparent 
        hover:border-[var(--Blue)] transition-all duration-200 cursor-pointer group
        shadow-[0_4px_14px_0_rgba(54,66,140,0.16)]"
      >
        <div className="flex items-start gap-2 p-3.5">
          <div
            className="flex-shrink-0 flex items-center justify-center 
          w-[58px] h-12 rounded-lg"
          >
            {icon}
          </div>
          <div className="flex-1">
            <h3 className="text-lg font-bold text-[var(--Black)] var(--font-poppins) leading-[26px]">
              {title}
            </h3>
            <p className="text-sm leading-[22px] text-[var(--Dark-gray)]  font-roboto">
              {description}
            </p>
          </div>
        </div>
      </Card>
    </Link>
  );
}
