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
          p-2 flex items-center gap-4 
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
        <Icon />
        {!collapsed && (
          <span className="font-rubik text-base font-normal leading-6 overflow-hidden transition-all duration-300">
            {label}
          </span>
        )}
      </Link>
    </li>
  );
}
