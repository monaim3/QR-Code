import Accordion from "@/components/common/Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSummary } from "@/store/slices/businessSlice";
import { useEffect, useRef } from "react";
import { useT } from "@/utils/t";
export default function AboutCompany() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const dispatch = useAppDispatch();
  const business = useAppSelector((state) => state.business);
  const t = useT();
  const handleSummaryChange = (value: string) => {
    dispatch(setSummary(value));
  };
  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [business.summary]);
  return (
    <div className="w-full">
      <Accordion
        title={t("generator__content_form_section__about_company__title")}
        description={t(
          "generator__content_form_section__about_company__description",
        )}
        defaultOpen={true}
      >
        <div className="flex flex-col gap-2 flex-1">
          <label
            htmlFor="summary"
            className="text-[var(--Black)] text-[16px] leading-[24px] font-medium"
          >
            {t("generator__content_form_section__summary__title")}
          </label>
          <textarea
            ref={textareaRef}
            id="summary"
            value={business.summary}
            onChange={(e) => handleSummaryChange(e.target.value)}
            placeholder={t(
              "generator__content_form_section__business_page__summary_section__text__placeholder",
            )}
            className="min-h-[96px] py-2 px-4 text-[var(--Black)] text-[16px] leading-[24px] placeholder:text-[var(--Grey)] rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] focus:outline-none resize-none focus:border-[var(--Blue)] focus:ring-2 focus:ring-[var(--Blue)] hover:ring-2 hover:ring-[var(--Boarder-Grey)] overflow-hidden"
          ></textarea>
        </div>
      </Accordion>
    </div>
  );
}
