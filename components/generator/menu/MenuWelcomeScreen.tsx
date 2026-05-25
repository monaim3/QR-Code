import Accordion from "@/components/common/Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ImageUpload from "../vcard/ImageUpload";
import {
  setIsPreviewWelcomeScreen,
  setWelcomeScreen,
  setUploadedWelcomeScreen,
} from "@/store/slices/menuSlice";
import { useUploadFileMutation } from "@/store/api/qrApi";

export default function MenuWelcomeScreen() {
  const dispatch = useAppDispatch();
  const welcomeScreen = useAppSelector((state) => state.menu.welcomeScreen);
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

  return (
    <div className="w-full">
      <Accordion
        title="Welcome screen"
        description="Display a custom logo while your page is loading"
        defaultOpen={true}
      >
        <ImageUpload
          value={welcomeScreen || null}
          onCustomLogoUpload={handleImageChange}
          onPreview={handlePreview}
          aspectRatio={1}
        />
      </Accordion>
    </div>
  );
}
