import AboutAccordion from "./AboutAccordion";
import Input from "./Input";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function CompanyDetails({ onClick, isOpen }: Props) {
  return (
    <AboutAccordion title="Company details" isOpen={isOpen} onClick={onClick}>
      <div className="flex desktop:flex-row flex-col items-start gap-8 flex-1">
        <Input
          label="Company name"
          placeholder="e.g. My company"
          id="company"
        />
        <Input label="Title" placeholder="e.g. Film editor" id="title" />
      </div>
    </AboutAccordion>
  );
}
