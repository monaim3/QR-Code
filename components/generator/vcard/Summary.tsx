import AboutAccordion from "./AboutAccordion";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function Summary({ onClick, isOpen }: Props) {
  return (
    <AboutAccordion title="Summary" isOpen={isOpen} onClick={onClick}>
      <div className="flex flex-col gap-2 flex-1">
        <label
          htmlFor="summary"
          className="text-[var(--Black)] text-[16px] leading-[24px] font-medium"
        >
          Text
        </label>
        <textarea
          id="summary"
          placeholder="e.g. About my company"
          className="min-h-[96px] py-2 px-4 text-[var(--Black)] text-[16px] leading-[24px] placeholder:text-[var(--Grey)] rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] focus:outline-none resize-none"
        ></textarea>
      </div>
    </AboutAccordion>
  );
}
