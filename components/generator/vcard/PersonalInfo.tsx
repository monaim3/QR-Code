import { useAppDispatch, useAppSelector } from "@/store/hooks";
import AboutAccordion from "./AboutAccordion";
import ImageUpload from "./ImageUpload";
import Input from "./Input";
import { setPersonalInfo } from "@/store/slices/vCardSlice";
import { useT } from "@/utils/t";
import { useUploadFileMutation } from "@/store/api/qrApi";
interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function PersonalInfo({ onClick, isOpen }: Props) {
  const dispatch = useAppDispatch();
  const vCard = useAppSelector((state) => state.vCard);
  const [uploadFile] = useUploadFileMutation();

  const t = useT();
  const emptyUploadedImage = {
    publicId: "",
    resourceType: "",
    format: "",
    bytes: 0,
  };

  const handleFullNameChange = (value: string) => {
    dispatch(
      setPersonalInfo({
        ...vCard.personalInfo,
        fullName: value,
      }),
    );
  };

  const handleImageChange = async (value: string | null) => {
    if (!value) {
      dispatch(
        setPersonalInfo({
          ...vCard.personalInfo,
          image: null,
          uploadedImage: emptyUploadedImage,
        }),
      );
      return;
    }

    const blob = await fetch(value).then((res) => res.blob());
    const file = new File(
      [blob],
      `uploaded-image-${Date.now()}.${blob.type.split("/")[1]}`,
      { type: blob.type },
    );

    const result = await uploadFile(file);
    const uploadedImage =
      "data" in result
        ? {
            bucketRootUrl: result.data.location.split(
              `/${result.data.bucket}`,
            )[0],
            bytes: result.data.bytes,
            format: result.data.format,
            key: result.data.key,
            publicId: result.data.publicId,
            resourceType: result.data.resourceType,
            storageProvider: result.data.storageProvider,
          }
        : emptyUploadedImage;

    dispatch(
      setPersonalInfo({ ...vCard.personalInfo, image: value, uploadedImage }),
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
        label={t(
          "generator__content_form_section__about__personal_section__image",
        )}
      />
    </AboutAccordion>
  );
}
