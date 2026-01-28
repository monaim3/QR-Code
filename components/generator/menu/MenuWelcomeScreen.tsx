import Accordion from "@/components/common/Accordion";
import { useAppDispatch } from "@/store/hooks";
import ImageUpload from "../vcard/ImageUpload";
import {
  setIsPreviewWelcomeScreen,
  setWelcomeScreen,
} from "@/store/slices/menuSlice";

export default function MenuWelcomeScreen() {
  const dispatch = useAppDispatch();

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
          onCustomLogoUpload={handleImageChange}
          onPreview={handlePreview}
        />
      </Accordion>
    </div>
  );
}
