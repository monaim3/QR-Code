import { Button } from "@/components/ui/button";

interface Props {
  onClick?: () => void;
}

export default function SaveButton({ onClick }: Props) {
  return (
    <Button
      onClick={onClick}
      className="flex w-[120px] h-[38px] px-4 py-2 justify-center items-center gap-2 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px]"
    >
      Save
    </Button>
  );
}
