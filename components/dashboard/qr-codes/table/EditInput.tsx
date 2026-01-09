interface Props {
  error?: string;
}

export default function EditInput({ error }: Props) {
  return (
    <div>
      <input
        type="text"
        className={`py-1 px-2 border rounded-[var(--Corner-Radius-4)] w-[220px]  focus:outline-0 text-[14px] leading-[22px] ${
          error
            ? "border-[var(--error)]"
            : "border-[var(--Boarder-Grey)] focus:ring-2 focus:ring-[var(--Blue)] focus:border-[var(--Blue)] "
        }`}
      />
      {error && (
        <p className="text-[var(--Error)] text-[12px] leading-[20px] mt-[2px]">
          {error}
        </p>
      )}
    </div>
  );
}
