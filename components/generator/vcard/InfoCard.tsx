interface Props {
  title: string;
  description: string;
  icon?: React.ReactNode;
}

export default function InfoCard({ title, description, icon }: Props) {
  return (
    <div className="flex items-center gap-4 self-stretch min-w-0 w-full">
      <div
        className={`p-2 w-8 h-8 flex-shrink-0 ${icon && "bg-[var(--light-grey-70)] rounded"}`}
      >
        {icon}
      </div>

      <div
        className="flex items-center content-center flex-wrap gap-x-2 gap-y-0 flex-1 min-w-0 overflow-hidden"
        style={{ width: 0 }}
      >
        <p className="text-[var(--Black)] text-[10px] leading-[20px] w-full truncate">
          {title}
        </p>
        <p className="text-[var(--Dark-gray)] text-[12px] leading-[20px] w-full break-words">
          {description}
        </p>
      </div>
    </div>
  );
}
