"use client";

import { useState } from "react";
import Container from "@/components/common/parent-container";
import Breadcrumb from "@/components/generator/Breadcrumb";
import { setQrCodeName } from "@/store/slices/previewSlice";
import {
  setNetworkName,
  setPassword,
  setEncryptionType,
  setHiddenNetwork,
} from "@/store/slices/wifiSlice";
import MobileFrame from "@/components/common/MobileFrame";
import QRCodeNameAccordion from "@/components/generator/QRCode_Name_Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import { RequiredTextInput } from "@/components/common/RequiredInput";
import { TextInput } from "@/components/common/TextInput";
import SelectDropDown from "@/components/generator/Wifi/SelectDropDown";
import { CheckboxInput } from "@/components/common/CheckboxInput";
import WifiPreview from "@/components/generator/Wifi/WifiPreview";
import WifiQRCode from "@/components/generator/Wifi/WifiQRCode";
import { useT } from "@/utils/t";

export default function Wifi() {
  const t = useT();
  const dispatch = useAppDispatch();
  const [view, setView] = useState<"preview" | "qrCode">("preview");
  const [qrNameError, setQrNameError] = useState("");

  const qrCodeName = useAppSelector((state) => state.preview.qrCodeName);
  const wifi = useAppSelector((state) => state.wifi.NetworkName);
  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);
  const wifiPassword = useAppSelector((state) => state.wifi.Password);
  const wifiEncryption = useAppSelector((state) => state.wifi.EncryptionType);
  const wifiHidden = useAppSelector((state) => state.wifi.HiddenNetwork);

  const handleQrNameChange = (value: string) => {
    dispatch(setQrCodeName(value));
  };
  const handleChange = (value: string) => {
    dispatch(setNetworkName(value));
  };
  const handlePass = (value: string) => {
    dispatch(setPassword(value));
  };
  const handleEncryption = (value: string) => {
    dispatch(setEncryptionType(value));
  };

  return (
    <main className="bg-[var(--Generator-Background)] min-h-screen">
      <Container className="flex flex-col desktop:flex-row gap-8 lg:pb-32">
        {/* Content */}
        <div className="flex flex-col items-start gap-4 desktop:pt-[56px] desktop:pb-[160px] pb-[120px] px-0 flex-1">
          {/* Heading */}
          <h3 className="text-[var(--Black)] font-bold text-[24px] leading-[var(--Typeface-Line-height-Heading-3)] hidden desktop:block">
            {t("generator__content_form__title").replace("{type}", t("generator__step_1__qr_type_cards__wifi__title"))}
          </h3>
          <div className="w-full">
            {/* Mobile Breadcrumb */}
            <div className="block desktop:hidden space-y-0 desktop:space-y-4">
              {<Breadcrumb useMobileSteps={true} />}
            </div>
          </div>
          <div className="w-full ">
            <Accordion
              title={t("generator__step_1__qr_type_cards__wifi__title")}
              description={t("generator__step_1__qr_type_cards__wifi__subtitle")}
              defaultOpen={true}
              forceOpen={showErrors && !!validationErrors.networkName}
            >
              <div className="flex  flex-col lg:gap-6 gap-4">
                <div>
                  <RequiredTextInput
                    label={t("generator__step_1__qr_type__wifi_ssid__label")}
                    value={wifi}
                    onChange={handleChange}
                    placeholder={t("generator__step_1__qr_type__wifi_ssid__placeholder")}
                    maxLength={100}
                    validationKey="networkName"
                  />
                </div>
                <div className="flex  flex-col gap-4 lg:flex-row lg:gap-12 items-center justify-center">
                  <TextInput
                    label={t("generator__step_1__qr_type__wifi_password__label")}
                    value={wifiPassword}
                    onChange={handlePass}
                    placeholder={t("generator__step_1__qr_type__wifi_password__placeholder")}
                    maxLength={100}
                  />
                  <SelectDropDown
                    value={wifiEncryption}
                    onChange={handleEncryption}
                  />
                </div>
                <div className="">
                  <CheckboxInput
                    label={t("generator__step_1__qr_type__wifi_hidden__label")}
                    onChange={() => dispatch(setHiddenNetwork(!wifiHidden))}
                    id="hide-ssid"
                    checked={wifiHidden}
                    bgColor="#01A56D"
                  />
                </div>
              </div>
            </Accordion>
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
                    <WifiPreview />
                  </div>
                ) : (
                  <WifiQRCode width={200} height={200} />
                )}
              </MobileFrame>
            </div>
          </div>
        </div>
      </Container>
    </main>
  );
}
