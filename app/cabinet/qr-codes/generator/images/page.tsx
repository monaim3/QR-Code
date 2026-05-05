"use client";

import { useEffect, useRef, useState } from "react";
import Container from "@/components/common/parent-container";
import Breadcrumb from "@/components/generator/Breadcrumb";
import {
  setWebsiteUrl,
  setQrCodeName,
  setActiveTab,
} from "@/store/slices/previewSlice";
import {
  setFacebookUrl,
  setName,
  setTitle,
  setWebsite,
  setError,
  setErrorWebsite,
  addButton,
  removeButton,
  updateButtonText,
  updateButtonUrl,
  setButtonTextError,
  setButtonUrlError,
  addImage,
  removeImage,
  updateImage,
  setPrimaryColor as setFacebookPrimaryColor,
  setSecondaryColor as setFacebookSecondaryColor,
} from "@/store/slices/imagesSlice";

import QRCodeStyling, { Options } from "qr-code-styling";
import MobileFrame from "@/components/common/MobileFrame";
import QRCodeNameAccordion from "@/components/generator/QRCode_Name_Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import { TextInput } from "@/components/common/TextInput";
import InputUrl from "@/components/common/InputUrl";
import { Plus } from "lucide-react";
import ButtonInput from "@/components/common/ButtonInput";
import {
  setColorPalette,
  setPrimaryColor,
  setSecondaryColor,
  setActiveColorIndex,
} from "@/store/slices/vCardSlice";

import SwapHorizontal from "@/components/icons/swap-horizontal";
import ColorInput from "@/components/generator/vcard/ColorInput";
import ColorBtn from "@/components/generator/vcard/ColorBtn";
import ImageCarousel from "@/components/generator/Facebook/ImageCarousel";
import Welcome from "@/components/generator/vcard/Welcome";
import { CheckboxInput } from "@/components/common/CheckboxInput";
import { setShare } from "@/store/slices/imagesSlice";
import ImagesPreview from "@/components/generator/Images/ImagesPreview";
import { useT } from "@/utils/t";

export default function Images() {
  const dispatch = useAppDispatch();
  const t = useT();
  const [view, setView] = useState<"preview" | "qrCode">("preview");
  const qrRef = useRef<HTMLDivElement>(null);
  const qrCodeRef = useRef<QRCodeStyling | null>(null);
  const qrCodeName = useAppSelector((state) => state.preview.qrCodeName);
  const activeTab = useAppSelector((state) => state.preview.activeTab);
  const [qrNameError, setQrNameError] = useState("");
  const facebookUrl = useAppSelector((state) => state.images.FacebookUrl);
  const Name = useAppSelector((state) => state.images.Name);
  const error = useAppSelector((state) => state.images.Error);
  const title = useAppSelector((state) => state.images.Title);
  const website = useAppSelector((state) => state.images.Website);
  const errorWebsite = useAppSelector((state) => state.images.ErrorWebsite);
  const buttons = useAppSelector((state) => state.images.buttons);
  const images = useAppSelector((state) => state.images.images);
  const share = useAppSelector((state) => state.images.Share);
  const lastButton = useAppSelector(
    (state) => state.images.buttons[state.images.buttons.length - 1],
  );
  const buttonTextError = lastButton?.buttonTextError || "";
  const buttonUrlError = lastButton?.urlError || "";

  const handleAddButton = () => {
    dispatch(addButton());
  };

  const handleRemoveButton = (id: string) => {
    dispatch(removeButton(id));
  };

  const handleQrNameChange = (value: string) => {
    dispatch(setQrCodeName(value));
  };

  const handleFacebookUrl = (value: string) => {
    dispatch(setFacebookUrl(value));
  };

  // Button handlers - এগুলো add করতে হবে
  const handleButtonTextChange = (id: string, value: string) => {
    dispatch(updateButtonText({ id, value }));
  };

  const handleButtonUrlChange = (id: string, value: string) => {
    dispatch(updateButtonUrl({ id, value }));
  };

  const handleButtonTextError = (id: string, error: string) => {
    dispatch(setButtonTextError({ id, error }));
  };

  const handleButtonUrlError = (id: string, error: string) => {
    dispatch(setButtonUrlError({ id, error }));
  };

  // color-customize

  const vCard = useAppSelector((state) => state.vCard);
  const isActive = vCard.activeColorIndex;

  const handleSwap = () => {
    const temp = vCard.primaryColor;

    dispatch(setPrimaryColor(vCard.secondaryColor));
    dispatch(setSecondaryColor(temp));

    dispatch(setFacebookPrimaryColor(vCard.secondaryColor));
    dispatch(setFacebookSecondaryColor(temp));

    dispatch(
      setColorPalette({
        index: isActive,
        color: {
          primary: vCard.secondaryColor,
          secondary: temp,
        },
      }),
    );
  };

  const handleColorSwitch = (
    primaryColor: string,
    secondaryColor: string,
    index: number,
  ) => {
    // vCard এ update
    dispatch(setPrimaryColor(primaryColor));
    dispatch(setSecondaryColor(secondaryColor));

    // Facebook slice এও update করুন
    dispatch(setFacebookPrimaryColor(primaryColor));
    dispatch(setFacebookSecondaryColor(secondaryColor));

    dispatch(setActiveColorIndex(index));
  };

  const handleColorChange = (primaryColor: string, secondaryColor: string) => {
    const upperPrimary = primaryColor.toUpperCase();
    const upperSecondary = secondaryColor.toUpperCase();

    dispatch(setPrimaryColor(upperPrimary));
    dispatch(setSecondaryColor(upperSecondary));

    dispatch(setFacebookPrimaryColor(upperPrimary));
    dispatch(setFacebookSecondaryColor(upperSecondary));

    dispatch(
      setColorPalette({
        index: isActive,
        color: {
          primary: upperPrimary,
          secondary: upperSecondary,
        },
      }),
    );
  };

  useEffect(() => {
    if (view !== "qrCode" || !qrRef.current) return;

    const qrOptions: Options = {
      type: "svg",
      data: "https://www.example.com/",
      margin: 0,
      width: 300,
      height: 300,
      dotsOptions: {
        color: "#000000",
        type: "rounded",
      },
      backgroundOptions: {
        color: "#FFFFFF",
      },
    };

    if (qrRef.current) {
      qrRef.current.innerHTML = "";

      if (qrCodeRef.current) {
        qrCodeRef.current.update(qrOptions);
        qrCodeRef.current.append(qrRef.current);
      } else {
        qrCodeRef.current = new QRCodeStyling(qrOptions);
        qrCodeRef.current.append(qrRef.current);
      }
    }
  }, [view]);

  return (
    <main className="bg-[var(--Generator-Background)] min-h-screen">
      <Container className="flex flex-col desktop:flex-row gap-8 lg:pb-32">
        {/* Content */}
        <div className="flex flex-col items-start gap-4 desktop:pt-[56px] desktop:pb-[160px] pb-[120px] px-0 flex-1">
          {/* Heading */}
          <h3 className="text-[var(--Black)] font-bold text-[24px] leading-[var(--Typeface-Line-height-Heading-3)] hidden desktop:block">
            {t("generator__content_form__title").replace("{type}", t("generator__step_1__qr_type_cards__images__title"))}
          </h3>
          <div className="w-full">
            {/* Mobile Breadcrumb */}
            <div className="block desktop:hidden space-y-0 desktop:space-y-4">
              {<Breadcrumb useMobileSteps={true} />}
            </div>
          </div>
          <div className="w-full">
            <Accordion
              title={t("generator__content_form_section__design__title")}
              description={t("generator__content_form_section__design__description")}
              defaultOpen={true}
            >
              <div className="space-y-8">
                {/* Color palette */}
                <div className="flex items-center gap-4 self-stretch w-full overflow-x-auto desktop:overflow-x-visible pb-4 desktop:pb-0 pt-[2px] px-[2px] desktop:pt-0 desktop:px-0 desktop:flex-wrap">
                  {vCard.colorPalette.map((item, index) => (
                    <ColorBtn
                      key={index}
                      primaryColor={item.primary}
                      secondaryColor={item.secondary}
                      onClick={() =>
                        handleColorSwitch(item.primary, item.secondary, index)
                      }
                      isActive={isActive === index}
                    />
                  ))}
                </div>

                {/* Color Picker */}
                <div className="desktop:p-6 p-4 bg-[var(--light-grey-70)] rounded-[var(--Corner-Radius-10)] flex flex-col desktop:flex-row desktop:items-end items-center gap-4 w-full">
                  <ColorInput
                    label={t("generator__content_form_section__design__primary_color")}
                    color={vCard.primaryColor}
                    onChange={(v) => handleColorChange(v, vCard.secondaryColor)}
                  />

                  <div className="flex desktop:w-10 desktop:h-12 items-center gap-2 py-2 desktop:py-0 ">
                    <button
                      onClick={handleSwap}
                      className="flex items-center gap-2 p-2 flex-1"
                    >
                      <span className="text-[var(--Grey)] text-[14px] leading-[22px] desktop:hidden">
                        {t("generator__content_form_section__design__swap_button")}
                      </span>

                      <div className="rotate-90 desktop:rotate-0">
                        <SwapHorizontal className="text-[#79809A]" />
                      </div>
                    </button>
                  </div>

                  <ColorInput
                    label={t("generator__content_form_section__design__secondary_color")}
                    color={vCard.secondaryColor}
                    onChange={(v) => handleColorChange(vCard.primaryColor, v)}
                  />
                </div>
                <ImageCarousel
                  maxImages={10}
                  maxSizeMB={5}
                  images={images}
                  onAddImage={(image) => dispatch(addImage(image))}
                  onRemoveImage={(id) => dispatch(removeImage(id))}
                  onUpdateImage={(id, image) =>
                    dispatch(updateImage({ id, image }))
                  }
                />
              </div>
            </Accordion>
          </div>
          <div className="w-full ">
            <Accordion
              title={t("generator__content_form_section__images_information__title")}
              description={t("generator__content_form_section__images_information__description")}
              defaultOpen={true}
            >
              <div>
                <div className="flex gap-12 items-start justify-center ">
                  <TextInput
                    label={t("generator__content_form_section__images_information__headline__label")}
                    value={Name}
                    onChange={(value) => dispatch(setName(value))}
                    placeholder={t("generator__content_form_section__images_information__headline__placeholder")}
                    maxLength={100}
                  />

                  <InputUrl
                    label={t("generator__content_form_section__images_information__website__label")}
                    placeholder={t("generator__content_form_section__images_information__website__placeholder")}
                    id="website"
                    value={website}
                    onChange={(value) => dispatch(setWebsite(value))}
                    required={false}
                    error={error}
                    onError={(errorMsg) => dispatch(setError(errorMsg))}
                  />
                </div>

                <div>
                  <div
                    className={`flex gap-12 items-start justify-center ${error ? "mt-6" : ""} `}
                  >
                    <TextInput
                      label={t("generator__content_form_section__images_information__description__label")}
                      value={title}
                      onChange={(value) => dispatch(setTitle(value))}
                      placeholder={t("generator__content_form_section__images_information__description__placeholder")}
                      maxLength={100}
                    />
                  </div>

                  <div className="space-y-4 mt-6">
                    {buttons.map((button) => (
                      <ButtonInput
                        key={button.id}
                        id={button.id}
                        buttonText={button.buttonText}
                        url={button.url}
                        buttonTextError={button.buttonTextError}
                        urlError={button.urlError}
                        onRemove={() => handleRemoveButton(button.id)}
                        onButtonTextChange={(value) =>
                          handleButtonTextChange(button.id, value)
                        }
                        onUrlChange={(value) =>
                          handleButtonUrlChange(button.id, value)
                        }
                        onButtonTextError={(error) =>
                          handleButtonTextError(button.id, error)
                        }
                        onUrlError={(error) =>
                          handleButtonUrlError(button.id, error)
                        }
                      />
                    ))}
                  </div>

                  <div
                    className={`
                      ${buttonTextError || buttonUrlError ? "mt-6" : ""}
                      ${buttons.length > 0 ? "mt-4" : ""}
                    `}
                  >
                    <button
                      onClick={handleAddButton}
                      className="flex px-4 py-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)] text-[var(--Dark-grey)] font-medium text-[14px] leading-[22px]"
                    >
                      <Plus size={16} />
                      <span className="ml-2">{t("generator__content_form_section__images_information__add_button")}</span>
                    </button>
                  </div>
                </div>
              </div>
            </Accordion>
          </div>
          <div className="w-full">
            <Accordion
              title={t("generator__content_form_section__share_images__title")}
              description={t("generator__content_form_section__share_images__description")}
              defaultOpen={true}
            >
              <CheckboxInput
                label={t("generator__content_form_section__share_images__checkbox_label")}
                onChange={() => dispatch(setShare(!share))}
                id="share-id"
                checked={share}
                bgColor="#01A56D"
              />
            </Accordion>
          </div>
          <div className="w-full">
            {/* Welcome Screen */}
            <Welcome />
          </div>
          <QRCodeNameAccordion
            title={t("generator__content_form_section__qr_name__title")}
            description={t("generator__content_form_section__qr_name__description")}
            value={qrCodeName}
            onChange={handleQrNameChange}
            error={qrNameError}
          />
        </div>

        {/* Preview */}
        <div className="w-[280px] hidden desktop:block desktop:sticky desktop:top-20 desktop:self-start desktop:h-fit desktop:pt-[56px] desktop:pb-[160px] pb-[120px]">
          <div className="flex flex-col items-center justify-start">
            <div className="flex gap-2 mb-4">
              <button
                onClick={() => setView("preview")}
                className={`py-2 px-6 rounded-full font-medium  transition-all duration-300 ease-in-out ${
                  view === "preview"
                    ? "border border-transparent bg-[var(--Blue)] text-white hover:bg-[var(--Blue-hover)]"
                    : "bg-white text-[var(--Blue)] border border-[var(--Boarder-Grey)] hover:border-[var(--Blue)]"
                }`}
              >
                <span className="text-sm leading-[22px] font-medium ">
                  {t("generator__preview_switch__preview")}
                </span>
              </button>
              <button
                onClick={() => setView("qrCode")}
                className={`py-2 px-6 rounded-full font-medium transition-all duration-300 ease-in-out ${
                  view === "qrCode"
                    ? "border border-transparent text-white bg-[var(--Blue)] hover:bg-[var(--Blue-hover)]"
                    : "bg-white text-[var(--Blue)] border border-[var(--Boarder-Grey)] hover:border-[var(--Blue)]"
                }`}
              >
                <span className="text-sm leading-[22px] font-medium ">
                  {t("generator__preview_switch__qr")}
                </span>
              </button>
            </div>
            <div className="hidden desktop:flex desktop:flex-col desktop:gap-4">
              <MobileFrame>
                {view === "preview" ? (
                  <div className="w-full h-full flex items-center justify-center rounded-[32px] overflow-hidden">
                    <ImagesPreview />
                  </div>
                ) : (
                  <div className="w-full h-full flex items-center justify-center rounded-[32px]">
                    <div
                      ref={qrRef}
                      className="w-[154px] h-[154px] flex items-center justify-center"
                    />
                  </div>
                )}
              </MobileFrame>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
