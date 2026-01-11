import { Button } from "@/components/ui/button";

interface Props {
  label: string;
  selectedPeriod: string;
  value: string;
  onClick: (value: string) => void;
}

export default function Chip({ label, selectedPeriod, value, onClick }: Props) {
  const handleClick = () => {
    onClick(value);
  };

  return (
    <Button
      onClick={handleClick}
      className={`flex px-4 py-2 justify-center items-center gap-2.5 rounded-[var(--Corner-Radius-8)] text-[14px] leading-[22px] ${
        selectedPeriod === value
          ? "bg-[var(--Blue)] text-white"
          : "bg-[var(--Generator-Background)] text-[var(--Grey)]"
      }`}
    >
      {label}
    </Button>
  );
}
