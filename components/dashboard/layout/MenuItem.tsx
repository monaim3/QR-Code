import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

interface Props {
  icon: React.ElementType;
  label: string;
  href: string;
  onClick?: () => void;
  collapsed: boolean;
  isLastItems?: boolean;
}

export default function MenuItem({
  icon: Icon,
  label,
  href,
  onClick,
  collapsed,
  isLastItems = false,
}: Props) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <li
      className={cn(
        "desktopDashboard:py-0 py-[20px] w-full",
        !isLastItems &&
          "border-b border-[var(--boarder-grey-50)] desktopDashboard:border-none",
      )}
    >
      <Link
        href={href}
        onClick={onClick}
        className={`
          p-2 flex items-center gap-x-4 
          rounded-[var(--Corner-Radius-10)]
          hover:bg-[var(--Light-blue)]
          transition-colors
          ${
            active
              ? "desktopDashboard:bg-[var(--Light-blue)] text-[var(--Blue)]"
              : "text-[var(--Dark-gray)]"
          }
        `}
      >
        <span className="flex-shrink-0">
          <Icon />
        </span>

        <span
          className={`font-rubik text-base font-normal leading-6 whitespace-nowrap duration-200 ${
            collapsed ? "opacity-0" : "opacity-100"
          }`}
        >
          {label}
        </span>
      </Link>
    </li>
  );
}
