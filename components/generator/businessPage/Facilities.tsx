import Accordion from "@/components/common/Accordion";
import { facilities } from "@/lib/business";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setFacilities } from "@/store/slices/businessSlice";

export default function Facilities() {
  const dispatch = useAppDispatch();
  const business = useAppSelector((state) => state.business);

  const handleSelectOption = (option: string) => {
    const newFacilities = business.facilities.includes(option)
      ? business.facilities.filter((a) => a !== option)
      : [...business.facilities, option];

    dispatch(setFacilities(newFacilities));
  };

  return (
    <div className="w-full">
      <Accordion
        title="Facilities"
        description="Select relevant icons below to showcase business facilities"
        defaultOpen={true}
      >
        <div className="flex items-center content-center gap-4 self-stretch flex-wrap">
          {facilities.map((facility) => {
            const Icon = facility.icon;

            return (
              <button
                key={facility.id}
                type="button"
                onClick={() => handleSelectOption(facility.id)}
                className={`flex p-2 items-center gap-2 rounded-[var(--Corner-Radius-8)] border ${business.facilities.includes(facility.id) ? "border-[var(--Blue)]" : "border-[var(--Boarder-Grey)]"}`}
              >
                <Icon />
                <span className="text-[var(--Dark-gray)] text-[14px] leading-[22px]"></span>
                {facility.name}
              </button>
            );
          })}
        </div>
      </Accordion>
    </div>
  );
}
