import Plus from "@/components/icons/plus";
import AboutAccordion from "./AboutAccordion";
import Input from "./Input";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function ContactDetails({ onClick, isOpen }: Props) {
  return (
    <AboutAccordion title="Contact details" isOpen={isOpen} onClick={onClick}>
      <div className="desktop:flex desktop:items-start desktop:gap-8 space-y-4 desktop:space-y-0 desktop:flex-1 w-full">
        <Input label="Phone number" placeholder="e.g. +1809999999" id="phone" />
        <div className="flex items-end gap-2 flex-1 w-full">
          <div className="w-[calc(100%-56px)]">
            <Input
              label="Alternative phone number"
              placeholder="e.g. +1809999999"
              id="altPhone"
            />
          </div>

          <button className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]">
            <Plus />
          </button>
        </div>
      </div>

      <div className="desktop:flex desktop:items-start desktop:gap-8 space-y-4 desktop:space-y-0 desktop:flex-1 w-full">
        <Input
          label="Website"
          placeholder="e.g. www.pauljones.com"
          id="website"
          type="url"
        />
        <div className="flex items-end gap-2 flex-1 w-full">
          <div className="w-[calc(100%-56px)]">
            <Input
              label="Email"
              placeholder="e.g. name@email.com"
              id="email"
              type="email"
            />
          </div>

          <button className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]">
            <Plus />
          </button>
        </div>
      </div>
    </AboutAccordion>
  );
}
