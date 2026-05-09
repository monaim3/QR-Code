import { useAppDispatch, useAppSelector } from "@/store/hooks";
import AboutAccordion from "./AboutAccordion";
import Input from "./Input";
import { setCompanyName, setCompanyTitle } from "@/store/slices/vCardSlice";
import { useT } from "@/utils/t";
interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function CompanyDetails({ onClick, isOpen }: Props) {
  const dispatch = useAppDispatch();
  const vCard = useAppSelector((state) => state.vCard);
  const t = useT();

  const handleNameChange = (value: string) => {
    dispatch(setCompanyName(value));
  };

  const handleTitleChange = (value: string) => {
    dispatch(setCompanyTitle(value));
  };

  return (
    <AboutAccordion
      title={t(
        "generator__content_form_section__about__company_section__title",
      )}
      isOpen={isOpen}
      onClick={onClick}
    >
      <div className="flex desktop:flex-row flex-col items-start desktop:gap-8 gap-4 flex-1">
        <Input
          label={t(
            "generator__content_form_section__about__company_section__name",
          )}
          placeholder={t(
            "generator__content_form_section__business_info__input__company_name_description",
          )}
          id="company"
          value={vCard.companyName}
          onChange={handleNameChange}
        />
        <Input
          label={t(
            "generator__content_form_section__about__company_section__title",
          )}
          placeholder={t(
            "generator__content_form_section__about__company_section__profession__placeholder",
          )}
          id="title"
          value={vCard.companyTitle}
          onChange={handleTitleChange}
        />
      </div>
    </AboutAccordion>
  );
}
