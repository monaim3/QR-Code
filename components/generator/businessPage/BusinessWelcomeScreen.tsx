import Accordion from "@/components/common/Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import ImageUpload from "../vcard/ImageUpload";
import {
  setIsPreviewWelcomeScreen,
  setWelcomeScreen,
} from "@/store/slices/businessSlice";

import { useT } from "@/utils/t";
export default function BusinessWelcomeScreen() {
  const dispatch = useAppDispatch();
  const welcomeScreen = useAppSelector((state) => state.business.welcomeScreen);

  const handleImageChange = (value: string | null) => {
    dispatch(setWelcomeScreen(value || ""));
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
          aspectRatio={1}
        />
      </Accordion>
    </div>
  );
}
