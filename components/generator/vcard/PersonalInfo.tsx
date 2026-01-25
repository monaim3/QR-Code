import AboutAccordion from "./AboutAccordion";
import ImageUpload from "./ImageUpload";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function PersonalInfo({ onClick, isOpen }: Props) {
  return (
    <AboutAccordion
      title="Personal information"
      isOpen={isOpen}
      onClick={onClick}
    >
      <div className="flex flex-col gap-2">
        <label
          htmlFor="fullName"
          className="text-[var(--Black)] text-[16px] leading-[24px] font-medium"
        >
          Full name*
        </label>
        <input
          type="text"
          id="fullName"
          placeholder="e.g. Jane Cooper"
          className="h-12 py-2 px-4 text-[var(--Black)] text-[16px] leading-[24px] placeholder:text-[var(--Grey)] rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] focus:outline-none"
        />
      </div>

      <ImageUpload />
    </AboutAccordion>
  );
}
