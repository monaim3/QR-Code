import Accordion from "@/components/common/Accordion";
import ImageUpload from "@/components/generator/vcard/ImageUpload";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setIsPreviewWelcomeScreen,
  setWelcomeScreen,
} from "@/store/slices/app-slice";

export default function Welcome() {
  const dispatch = useAppDispatch();
  const welcomeScreen = useAppSelector((state) => state.app.welcomeScreen);

  const handleImageChange = (value: string | null) => {
    dispatch(setWelcomeScreen(value || ""));
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
        />
      </Accordion>
    </div>
  );
}
