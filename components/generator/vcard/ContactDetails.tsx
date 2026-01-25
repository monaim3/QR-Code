import AboutAccordion from "./AboutAccordion";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function ContactDetails({ onClick, isOpen }: Props) {
  return (
    <AboutAccordion title="Contact details" isOpen={isOpen} onClick={onClick}>
      <div>test</div>
    </AboutAccordion>
  );
}
