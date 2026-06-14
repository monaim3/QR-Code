import { Button } from "@/components/ui/button";

interface Props {
  onClick?: () => void;
  isLoading?: boolean;
  error?: string | null;
}

export default function SaveButton({ onClick, isLoading, error }: Props) {
  return (
    <div className="flex flex-col gap-1 w-full desktopDashboard:w-[120px] tablet:w-[120px]">
      <Button
        onClick={onClick}
        disabled={isLoading}
        className="w-full h-[38px] px-4 py-2 justify-center items-center gap-2 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px]"
      >
        {isLoading ? (
          <svg
            className="animate-spin h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        ) : (
          "Save"
        )}
      </Button>
      {error && (
        <span className="text-[var(--error)] text-[12px] leading-[20px]">
          {error}
        </span>
      )}
    </div>
  );
}