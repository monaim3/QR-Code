import { useState } from "react";
import Plus from "@/components/icons/plus";
import AboutAccordion from "./AboutAccordion";
import Input from "./Input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setContactDetails,
  addAltPhoneNumber,
  removeAltPhoneNumber,
  updateAltPhoneNumber,
  addAltEmail,
  removeAltEmail,
  updateAltEmail,
} from "@/store/slices/vCardSlice";
import TrashAlt from "@/components/icons/trash-alt";
import { useT } from "@/utils/t";
import { urlValidationSchema } from "@/lib/validators/validators";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

const isValidEmail = (email: string): boolean =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

const filterPhone = (value: string): string =>
  value.replace(/[^\d\s\+\-\(\)\.]/g, "");

export default function ContactDetails({ onClick, isOpen }: Props) {
  const dispatch = useAppDispatch();
  const vCard = useAppSelector((state) => state.vCard);
  const t = useT();

  const [websiteError, setWebsiteError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [altEmailErrors, setAltEmailErrors] = useState<Record<number, string>>({});

  const handleChange = (value: string, id: string) => {
    dispatch(setContactDetails({ ...vCard.contactDetails, [id]: value }));
  };

  const handlePhoneChange = (value: string) => {
    handleChange(filterPhone(value), "phoneNumber");
  };

  const handleAltPhoneChange = (value: string) => {
    handleChange(filterPhone(value), "altPhoneNumber");
  };

  const handleWebsiteChange = (value: string) => {
    dispatch(setContactDetails({ ...vCard.contactDetails, website: value }));
    if (!value.trim()) {
      setWebsiteError("");
      return;
    }
    const result = urlValidationSchema.safeParse(value);
    setWebsiteError(result.success ? "" : t("ui__field_validation_errors__url__generic"));
  };

  const handleEmailChange = (value: string) => {
    dispatch(setContactDetails({ ...vCard.contactDetails, email: value }));
    if (!value.trim()) {
      setEmailError("");
      return;
    }
    setEmailError(isValidEmail(value) ? "" : t("ui__field_validation_errors__email__generic"));
  };

  const handleAltPhoneNumberChange = (index: number, value: string) => {
    dispatch(updateAltPhoneNumber({ index, value: filterPhone(value) }));
  };

  const handleAltEmailChange = (index: number, value: string) => {
    dispatch(updateAltEmail({ index, value }));
    if (!value.trim()) {
      setAltEmailErrors((prev) => { const next = { ...prev }; delete next[index]; return next; });
      return;
    }
    setAltEmailErrors((prev) => ({
      ...prev,
      [index]: isValidEmail(value) ? "" : t("ui__field_validation_errors__email__generic"),
    }));
  };

  const handleAddAltPhoneNumber = () => dispatch(addAltPhoneNumber());
  const handleRemoveAltPhoneNumber = (index: number) => dispatch(removeAltPhoneNumber(index));
  const handleAddAltEmail = () => dispatch(addAltEmail());
  const handleRemoveAltEmail = (index: number) => {
    dispatch(removeAltEmail(index));
    setAltEmailErrors((prev) => { const next = { ...prev }; delete next[index]; return next; });
  };

  return (
    <AboutAccordion
      title={t("generator__content_form_section__about__contact_section__title")}
      isOpen={isOpen}
      onClick={onClick}
    >
      <div className="flex desktop:flex-row flex-col items-start desktop:gap-8 gap-4 flex-1">
        <div className="flex-1 w-full">
          <Input
            label={t("generator__content_form_section__about__contact_section__phone")}
            placeholder={t("generator__content_form_section__about__contact_section__phone_placeholder")}
            id="phoneNumber"
            type="tel"
            value={vCard.contactDetails.phoneNumber}
            onChange={handlePhoneChange}
            validationKey="contactPhoneNumber"
          />
        </div>
        <div className="flex items-start gap-2 flex-1 w-full">
          <div className="flex-1 min-w-0">
            <Input
              label={t("generator__content_form_section__about__contact_section__alt_phone")}
              placeholder={t("generator__content_form_section__about__contact_section__phone_placeholder")}
              id="altPhoneNumber"
              type="tel"
              value={vCard.contactDetails.altPhoneNumber}
              onChange={handleAltPhoneChange}
              validationKey="contactAltPhoneNumber"
            />
          </div>
          <button
            onClick={handleAddAltPhoneNumber}
            className="flex w-12 h-12 flex-shrink-0 mt-8 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
          >
            <Plus className="text-[var(--Dark-gray)]" />
          </button>
        </div>
      </div>

      {vCard.contactDetails.altPhoneNumbers.map((phoneNumber, index) => (
        <div key={index} className="flex items-start gap-2 w-full">
          <div className="flex-1 min-w-0">
            <Input
              label={t("generator__content_form_section__about__contact_section__phone")}
              placeholder="e.g. +1809999999"
              id={`altPhoneNumber-${index}`}
              type="tel"
              value={phoneNumber}
              onChange={(value) => handleAltPhoneNumberChange(index, value)}
              validationKey={`contactAltPhoneNumber_${index}`}
            />
          </div>
          <button
            onClick={() => handleRemoveAltPhoneNumber(index)}
            className="flex w-12 h-12 flex-shrink-0 mt-8 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
          >
            <TrashAlt className="text-[var(--Dark-gray)]" />
          </button>
        </div>
      ))}

      <div className="flex desktop:flex-row flex-col items-start desktop:gap-8 gap-4 flex-1">
        <div className="flex-1 w-full">
          <Input
            label={t("generator__content_form_section__about__contact_section__website")}
            placeholder={t("generator__content_form_section__pdf__website_placeholder")}
            id="website"
            type="url"
            value={vCard.contactDetails.website}
            onChange={handleWebsiteChange}
            validationKey="contactWebsite"
            error={websiteError}
          />
        </div>
        <div className="flex items-start gap-2 flex-1 w-full">
          <div className="flex-1 min-w-0">
            <Input
              label={t("generator__qr_content_screen__vcard_type__sections__contact__email")}
              placeholder={t("generator__content_form_section__about__contact_section__email__placeholder")}
              id="email"
              type="email"
              value={vCard.contactDetails.email}
              onChange={handleEmailChange}
              validationKey="contactEmail"
              error={emailError}
            />
          </div>
          <button
            onClick={handleAddAltEmail}
            className="flex w-12 h-12 flex-shrink-0 mt-8 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
          >
            <Plus className="text-[var(--Dark-gray)]" />
          </button>
        </div>
      </div>

      {vCard.contactDetails.altEmails.map((email, index) => (
        <div key={index} className="flex items-start gap-2 w-full">
          <div className="flex-1 min-w-0">
            <Input
              label={t("generator__qr_content_screen__vcard_type__sections__contact__email")}
              placeholder="e.g. name@email.com"
              id={`altEmail-${index}`}
              type="email"
              value={email}
              onChange={(value) => handleAltEmailChange(index, value)}
              validationKey={`contactAltEmail_${index}`}
              error={altEmailErrors[index] || ""}
            />
          </div>
          <button
            onClick={() => handleRemoveAltEmail(index)}
            className="flex w-12 h-12 flex-shrink-0 mt-8 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
          >
            <TrashAlt className="text-[var(--Dark-gray)]" />
          </button>
        </div>
      ))}
    </AboutAccordion>
  );
}
