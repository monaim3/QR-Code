interface Props {
  variant?: "outline" | "primary";
  onClick?: () => void;
  text: string;
}

export default function EditButton({ variant, onClick, text }: Props) {
  return (
    <button
      onClick={onClick}
      className={`flex items-center justify-center py-1 px-2 rounded-[var(--Corner-Radius-4)] text-[14px] leading-[22px] transition-all duration-300 ease-linear ${
        variant === "outline"
          ? "border border-[var(--Blue)] text-[var(--Blue)] hover:border-[var(--Blue-hover)] hover:text-[var(--Blue-hover)]"
          : "bg-[var(--Blue)] text-white hover:bg-[var(--Blue-hover)] "
      }`}
    >
      {text}
    </button>
  );
}
