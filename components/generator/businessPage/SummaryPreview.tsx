import { useAppSelector } from "@/store/hooks";
import PreviewAccordion from "../PreviewAccordion";
import LocationPin from "@/components/icons/location-pin";

export default function SummaryPreview() {
  const business = useAppSelector((state) => state.business);

  if (!business.summary) return null;

  return (
    <PreviewAccordion
      title="Summary"
      icon={<LocationPin className="text-[var(--Grey)]" />}
    >
      <p className="text-[var(--Black)] text-[12px] leading-[20px]">
        {business.summary}
      </p>
    </PreviewAccordion>
  );
}
