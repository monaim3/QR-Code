import PreviewAccordion from "../PreviewAccordion";
import { useAppSelector } from "@/store/hooks";
import InfoCard from "./InfoCard";
import Briefcase from "@/components/icons/briefcase";
import Enterprise from "@/components/icons/enterprise";
import User from "@/components/icons/user";

export default function CompanyView() {
  const vCard = useAppSelector((state) => state.vCard);

  // Check if company data exists
  const hasCompanyName = vCard.companyName && vCard.companyName.trim() !== "";
  const hasCompanyTitle = vCard.companyTitle && vCard.companyTitle.trim() !== "";
  const hasCompanyData = hasCompanyName || hasCompanyTitle;

  if (!hasCompanyData) {
    return null;
  }

  return (
    <PreviewAccordion
      title="Company"
      icon={<Briefcase className="text-[var(--Grey)]" />}
    >
      {/* Company Name */}
      {hasCompanyName && (
        <>
          <InfoCard
            title="Company"
            description={vCard.companyName}
            icon={<Enterprise className="text-[var(--Grey)]" />}
          />
          {hasCompanyTitle && (
            <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />
          )}
        </>
      )}

      {/* Company Title */}
      {hasCompanyTitle && (
        <InfoCard
          title="Title"
          description={vCard.companyTitle}
          icon={<User className="text-[var(--Grey)] w-4 h-4" />}
        />
      )}
    </PreviewAccordion>
  );
}
