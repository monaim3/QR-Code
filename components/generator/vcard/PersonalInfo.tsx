import AboutAccordion from "./AboutAccordion";
import ImageUpload from "./ImageUpload";
import Input from "./Input";

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
      <Input label="Full name*" placeholder="e.g. Jane Cooper" id="fullName" />

      <ImageUpload />
    </AboutAccordion>
  );
}
