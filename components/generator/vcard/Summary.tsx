import { useAppDispatch, useAppSelector } from "@/store/hooks";
import AboutAccordion from "./AboutAccordion";
import { setSummary } from "@/store/slices/vCardSlice";
import { useEffect, useRef } from "react";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function Summary({ onClick, isOpen }: Props) {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const dispatch = useAppDispatch();
  const vCard = useAppSelector((state) => state.vCard);

  const handleSummaryChange = (value: string) => {
    dispatch(setSummary(value));
  };

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [vCard.summary]);

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
          ref={textareaRef}
          id="summary"
          value={vCard.summary}
          onChange={(e) => handleSummaryChange(e.target.value)}
          placeholder="e.g. About my company"
          className="min-h-[96px] py-2 px-4 text-[var(--Black)] text-[16px] leading-[24px] placeholder:text-[var(--Grey)] rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] focus:outline-none focus:border-[var(--Blue)] focus:ring-2 focus:ring-[var(--Blue)] hover:ring-2 hover:ring-[var(--Boarder-Grey)] resize-none overflow-hidden"
        ></textarea>
      </div>
    </AboutAccordion>
  );
}
