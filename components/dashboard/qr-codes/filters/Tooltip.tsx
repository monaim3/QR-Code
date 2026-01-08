interface Props {
  text: string;
  children: React.ReactNode;
}

export default function Tooltip({ text, children }: Props) {
  return (
    <div className="relative inline-flex group">
      {children}

      <span className="pointer-events-none absolute bottom-full left-1/2 mb-2 -translate-x-1/2 whitespace-nowrap rounded-[var(--Corner-Radius-4)] bg-[var(--Dark-gray)] px-2 py-1 text-white font-roboto text-[12px] leading-5 opacity-0 scale-95 transition-all duration-200 group-hover:opacity-100 group-hover:scale-100">
        {text}
      </span>
    </div>
  );
}
