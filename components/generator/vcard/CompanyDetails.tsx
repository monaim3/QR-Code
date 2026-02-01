import { useAppDispatch, useAppSelector } from "@/store/hooks";
import AboutAccordion from "./AboutAccordion";
import Input from "./Input";
import { setCompanyName, setCompanyTitle } from "@/store/slices/vCardSlice";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function CompanyDetails({ onClick, isOpen }: Props) {
  const dispatch = useAppDispatch();
  const vCard = useAppSelector((state) => state.vCard);

  const handleNameChange = (value: string) => {
    dispatch(setCompanyName(value));
  };

  const handleTitleChange = (value: string) => {
    dispatch(setCompanyTitle(value));
  };

  return (
    <AboutAccordion title="Company details" isOpen={isOpen} onClick={onClick}>
      <div className="flex desktop:flex-row flex-col items-start desktop:gap-8 gap-4 flex-1">
        <Input
          label="Company name"
          placeholder="e.g. My company"
          id="company"
          value={vCard.companyName}
          onChange={handleNameChange}
        />
        <Input
          label="Title"
          placeholder="e.g. Film editor"
          id="title"
          value={vCard.companyTitle}
          onChange={handleTitleChange}
        />
      </div>
    </AboutAccordion>
  );
}
