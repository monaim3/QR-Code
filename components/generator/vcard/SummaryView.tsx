import PreviewAccordion from "../PreviewAccordion";
import { useAppSelector } from "@/store/hooks";
import FileText from "@/components/icons/file-text";

export default function SummaryView() {
  const vCard = useAppSelector((state) => state.vCard);

  if (!vCard.summary) {
    return null;
  }

  return (
    <PreviewAccordion
      title="Summary"
      icon={<FileText className="text-[var(--Grey)]" />}
    >
      <p className="text-[var(--Black)] text-[12px] leading-[20px] break-words w-[188px]">
        {vCard.summary}
      </p>
    </PreviewAccordion>
  );
}
