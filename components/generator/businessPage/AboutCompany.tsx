import Accordion from "@/components/common/Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setSummary } from "@/store/slices/businessSlice";

export default function AboutCompany() {
  const dispatch = useAppDispatch();
  const business = useAppSelector((state) => state.business);

  const handleSummaryChange = (value: string) => {
    dispatch(setSummary(value));
  };

  return (
    <div className="w-full">
      <Accordion
        title="About the company"
        description="Provide a summary about your company"
        defaultOpen={true}
      >
        <div className="flex flex-col gap-2 flex-1">
          <label
            htmlFor="summary"
            className="text-[var(--Black)] text-[16px] leading-[24px] font-medium"
          >
            Summary
          </label>
          <textarea
            id="summary"
            value={business.summary}
            onChange={(e) => handleSummaryChange(e.target.value)}
            placeholder="e.g. Our company provides a wide variety of services"
            className="min-h-[96px] py-2 px-4 text-[var(--Black)] text-[16px] leading-[24px] placeholder:text-[var(--Grey)] rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] focus:outline-none resize-none focus:border-[var(--Blue)] focus:ring-2 focus:ring-[var(--Blue)] hover:ring-2 hover:ring-[var(--Boarder-Grey)]"
          ></textarea>
        </div>
      </Accordion>
    </div>
  );
}
