import StarAlt from "@/components/icons/star-alt";
import PreviewAccordion from "../PreviewAccordion";
import { useAppSelector } from "@/store/hooks";
import { facilities } from "@/lib/business";

export default function FacilitiesPreview() {
  const business = useAppSelector((state) => state.business);

  const selectedFacilities = facilities.filter((f) =>
    business.facilities.includes(f.id),
  );

  if (selectedFacilities.length === 0) return null;

  return (
    <PreviewAccordion
      title="Facilities"
      icon={<StarAlt className="text-[var(--Grey)]" />}
    >
      <div className="flex items-center content-center gap-4 self-stretch flex-wrap">
        {selectedFacilities.map((facility) => {
          const Icon = facility.icon;
          return (
            <div
              key={facility.id}
              className="flex p-2 items-center gap-2 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)]"
            >
              <Icon />
              <span className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
                {facility.name}
              </span>
            </div>
          );
        })}
      </div>
    </PreviewAccordion>
  );
}
