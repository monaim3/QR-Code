import { usePathname } from "next/navigation";
import Link from "next/link";

interface Props {
  icon: React.ElementType;
  label: string;
  href: string;
  onClick?: () => void;
  collapsed: boolean;
}

export default function MenuItem({
  icon: Icon,
  label,
  href,
  onClick,
  collapsed,
}: Props) {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <li>
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
              ? "bg-[var(--Light-blue)] text-[var(--Blue)]"
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
