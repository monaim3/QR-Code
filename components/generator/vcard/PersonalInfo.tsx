import { useAppDispatch, useAppSelector } from "@/store/hooks";
import AboutAccordion from "./AboutAccordion";
import ImageUpload from "./ImageUpload";
import Input from "./Input";
import { setPersonalInfo } from "@/store/slices/vCardSlice";
import { useT } from "@/utils/t";
interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function PersonalInfo({ onClick, isOpen }: Props) {
  const dispatch = useAppDispatch();
  const vCard = useAppSelector((state) => state.vCard);

  const t = useT();
  const handleFullNameChange = (value: string) => {
    dispatch(
      setPersonalInfo({
        ...vCard.personalInfo,
        fullName: value,
      }),
    );
  };

  const handleImageChange = (value: string | null) => {
    dispatch(
      setPersonalInfo({
        ...vCard.personalInfo,
        image: value,
      }),
    );
  };

  return (
    <AboutAccordion
      title={t(
        "generator__content_form_section__about__personal_section__title",
      )}
      isOpen={isOpen}
      onClick={onClick}
    >
      <Input
        label={t(
          "generator__content_form_section__about__personal_section__full_name",
        )}
        placeholder="e.g. Jane Cooper"
        id="fullName"
        value={vCard.personalInfo.fullName}
        onChange={handleFullNameChange}
        validationKey="fullName"
        required={true}
      />

      <ImageUpload
        value={vCard.personalInfo.image}
        onCustomLogoUpload={handleImageChange}
        label={t("generator__content_form_section__about__personal_section__image")}
      />
    </AboutAccordion>
  );
}
