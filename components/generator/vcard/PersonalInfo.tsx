import { useAppDispatch, useAppSelector } from "@/store/hooks";
import AboutAccordion from "./AboutAccordion";
import ImageUpload from "./ImageUpload";
import Input from "./Input";
import { setPersonalInfo } from "@/store/slices/vCardSlice";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function PersonalInfo({ onClick, isOpen }: Props) {
  const dispatch = useAppDispatch();
  const vCard = useAppSelector((state) => state.vCard);

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
      title="Personal information"
      isOpen={isOpen}
      onClick={onClick}
    >
      <Input
        label="Full name*"
        placeholder="e.g. Jane Cooper"
        id="fullName"
        value={vCard.personalInfo.fullName}
        onChange={handleFullNameChange}
        validationKey="fullName"
        required={true}
      />

      <ImageUpload value={vCard.personalInfo.image} onCustomLogoUpload={handleImageChange} />
    </AboutAccordion>
  );
}
