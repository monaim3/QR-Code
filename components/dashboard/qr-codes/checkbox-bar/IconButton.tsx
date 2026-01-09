interface Props {
  icon: React.ReactNode;
  onClick?: () => void;
  text: string;
  variant?: "primary" | "error";
}

export default function IconButton({
  icon,
  onClick,
  text,
  variant = "primary",
}: Props) {
  return (
    <button
      onClick={onClick}
      className="flex justify-center items-center gap-2 py-2 px-4 h-10 rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] bg-white shadow-[0_1px_4px_0_rgba(63,72,103,0.16)"
    >
      {icon}
      <span
        className={`text-[14px] leading-[22px] ${
          variant === "error"
            ? "text-[var(--Error)]"
            : "text-[var(--Dark-gray)]"
        }`}
      >
        {text}
      </span>
    </button>
  );
}
