interface Props {
  onClick?: () => void;
  isActive?: boolean;
  primaryColor: string;
  secondaryColor: string;
}

export default function ColorBtn({
  primaryColor,
  secondaryColor,
  onClick,
  isActive,
}: Props) {
  return (
    <button
      onClick={onClick}
      className={`w-[104px] p-2 flex items-center gap-1 rounded-[var(--Corner-Radius-10)] shrink-0 ${isActive ? "ring-2 ring-[var(--Blue)]" : "ring-1 ring-[var(--Boarder-Grey)]"}`}
    >
      <div
        className="h-8 flex-1 rounded-[var(--Corner-Radius-8)] border"
        style={{
          backgroundColor: primaryColor,
          borderColor:
            primaryColor === "#FFFFFF" ? "var(--Boarder-Grey)" : primaryColor,
        }}
      />
      <div
        className="h-8 flex-1 rounded-[var(--Corner-Radius-8)] border"
        style={{
          backgroundColor: secondaryColor,
          borderColor:
            secondaryColor === "#FFFFFF"
              ? "var(--Boarder-Grey)"
              : secondaryColor,
        }}
      />
    </button>
  );
}
