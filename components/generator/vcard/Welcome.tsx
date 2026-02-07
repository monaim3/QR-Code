import Accordion from "@/components/common/Accordion";
import ImageUpload from "./ImageUpload";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setIsPreviewWelcomeScreen,
  setWelcomeScreen,
} from "@/store/slices/vCardSlice";

export default function Welcome() {
  const dispatch = useAppDispatch();
  const welcomeScreen = useAppSelector((state) => state.vCard.welcomeScreen);

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
