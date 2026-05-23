import Accordion from "@/components/common/Accordion";
import ImageUpload from "@/components/generator/vcard/ImageUpload";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setIsPreviewWelcomeScreen,
  setWelcomeScreen,
} from "@/store/slices/app-slice";
import { useT } from "@/utils/t";
export default function Welcome() {
  const dispatch = useAppDispatch();
  const welcomeScreen = useAppSelector((state) => state.app.welcomeScreen);

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
        />
      </Accordion>
    </div>
  );
}
