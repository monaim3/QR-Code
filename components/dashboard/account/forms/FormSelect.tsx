import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface Props {
  label: string;
  options?: string[];
}

export default function FormSelect({ label, options }: Props) {
  return (
    <div className="flex flex-col items-start gap-2 p-0 flex-1 w-full">
      <label className="text-[var(--Black)] font-semibold text-[16px] leading-[24px]">
        {label}
      </label>
      <Select>
        <SelectTrigger className="flex !h-12 px-4 py-2 items-center gap-2 self-stretch rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] bg-white focus:ring-0 focus:outline-0 text-[var(--Black)] text-[16px] leading-[24px] w-full">
          <SelectValue placeholder={label} />
        </SelectTrigger>
        <SelectContent className="bg-white">
          {options?.map((option, index) => (
            <SelectItem
              key={index}
              value={option}
              className="text-[var(--Dark-Grey)] text-[14px] leading-[22px]"
            >
              {option}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}
