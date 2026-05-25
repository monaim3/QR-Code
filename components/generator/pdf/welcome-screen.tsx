import Accordion from "@/components/common/Accordion";
import ImageUpload from "@/components/generator/vcard/ImageUpload";
import { useUploadFileMutation } from "@/store/api/qrApi";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setIsPreviewWelcomeScreen,
  setWelcomeScreen,
  setUploadedWelcomeScreen,
} from "@/store/slices/pdf-slice";
import { useT } from "@/utils/t";
export default function Welcome() {
  const dispatch = useAppDispatch();
  const welcomeScreen = useAppSelector((state) => state.pdf.welcomeScreen);
  const [uploadFile] = useUploadFileMutation();

  const emptyUploadedImage = {
    publicId: "",
    resourceType: "",
    format: "",
    bytes: 0,
  };

  const handleImageChange = async (value: string | null) => {
    if (!value) {
      dispatch(setWelcomeScreen(""));
      dispatch(setUploadedWelcomeScreen(emptyUploadedImage));
      return;
    }

    dispatch(setWelcomeScreen(value));

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

    dispatch(setUploadedWelcomeScreen(uploadedImage));
  };

  const handlePreview = () => {
    dispatch(setIsPreviewWelcomeScreen(true));
  };
  const t = useT();
  return (
    <div className="w-full">
      <Accordion
        title={t("generator__content_form_section__welcome_screen__title")}
        description={t(
          "generator__content_form_section__welcome_screen__description",
        )}
        defaultOpen={true}
      >
        <ImageUpload
          value={welcomeScreen || null}
          onCustomLogoUpload={handleImageChange}
          onPreview={handlePreview}
        />
      </Accordion>
    </div>
  );
}
