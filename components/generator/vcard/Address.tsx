"use client";

import { useState } from "react";
import AboutAccordion from "./AboutAccordion";
import Input from "./Input";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setAddress, setAddressUrl } from "@/store/slices/vCardSlice";
import InputResetModal from "./InputResetModal";
import { useT } from "@/utils/t";
interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function Address({ onClick, isOpen }: Props) {
  const [isManual, setIsManual] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingIsManual, setPendingIsManual] = useState<boolean | null>(null);
  const dispatch = useAppDispatch();
  const vCard = useAppSelector((state) => state.vCard);
  const t = useT();
  const handleAddressChange = (value: string, id: string) => {
    dispatch(
      setAddress({
        ...vCard,
        [id]: value,
      }),
    );
  };

  const handleUrlChange = (value: string) => {
    dispatch(setAddressUrl(value));
  };

  const hasAddressValues = () => {
    return !!(
      vCard.street ||
      vCard.postalCode ||
      vCard.city ||
      vCard.state ||
      vCard.country ||
      vCard.addressUrl
    );
  };

  const handleModeChange = (newIsManual: boolean) => {
    // If switching to the same mode, do nothing
    if (isManual === newIsManual) return;

    // Check if any address-related values exist
    if (hasAddressValues()) {
      // Store the intended mode and show modal
      setPendingIsManual(newIsManual);
      setIsModalOpen(true);
    } else {
      // No values exist, directly switch mode
      setIsManual(newIsManual);
    }
  };

  const handleReset = () => {
    dispatch(
      setAddress({
        ...vCard,
        street: "",
        postalCode: "",
        city: "",
        state: "",
        country: "",
      }),
    );

    dispatch(setAddressUrl(""));

    // Set the pending mode after reset
    if (pendingIsManual !== null) {
      setIsManual(pendingIsManual);
      setPendingIsManual(null);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPendingIsManual(null);
  };

  return (
    <>
      <AboutAccordion
        title={t("public__contact_us__info__address_label")}
        isOpen={isOpen}
        onClick={onClick}
      >
        <div className="flex items-center gap-4 pb-2">
          <button
            onClick={() => handleModeChange(true)}
            className={`flex h-10 justify-center items-center gap-2 px-6 py-1 rounded-[var(--Corner-Radius-10)] border border-[var(--Blue)] text-[16px] leading-[22px] transition-all duration-300 ease-linear ${isManual ? "bg-[var(--Blue)] text-white hover:bg-[var(--Blue-hover)]" : "bg-white text-[var(--Blue)]"} flex-1 desktop:flex-none`}
          >
            {t(
              "generator__content_form_section__about__address_section__manual_button",
            )}
          </button>
          <button
            onClick={() => handleModeChange(false)}
            className={`flex h-10 justify-center items-center gap-2 px-6 py-1 rounded-[var(--Corner-Radius-10)] border border-[var(--Blue)] text-[16px] leading-[22px] transition-all duration-300 ease-linear ${isManual ? "bg-white text-[var(--Blue)]" : "bg-[var(--Blue)] text-white hover:bg-[var(--Blue-hover)]"} flex-1 desktop:flex-none`}
          >
            {t("generator__content_form_section__about__address_section__url")}
          </button>
        </div>

        {isManual ? (
          <>
            <div className="flex desktop:flex-row flex-col items-start desktop:gap-8 gap-4 flex-1">
              <Input
                label={t(
                  "generator__content_form_section__about__address_section__street",
                )}
                placeholder="e.g. Spring Avenue, 9/18"
                id="street"
                value={vCard.street}
                onChange={(value) => handleAddressChange(value, "street")}
              />
              <Input
                label={t(
                  "generator__content_form_section__about__address_section__postal_code",
                )}
                placeholder="e.g. 10005"
                id="postal-code"
                value={vCard.postalCode}
                onChange={(value) => handleAddressChange(value, "postalCode")}
              />
            </div>
            <div className="flex desktop:flex-row flex-col items-start desktop:gap-8 gap-4 flex-1">
              <Input
                label={t("public__dashboard__account__billing_info__city")}
                placeholder={t(
                  "generator__content_form_section__about__address_section__city__placeholder",
                )}
                id="city"
                value={vCard.city}
                onChange={(value) => handleAddressChange(value, "city")}
              />
              <Input
                label={t(
                  "generator__content_form_section__about__address_section__state",
                )}
                placeholder={t(
                  "generator__content_form_section__about__address_section__state__placeholder",
                )}
                id="state"
                value={vCard.state}
                onChange={(value) => handleAddressChange(value, "state")}
              />
            </div>

            <Input
              label={t(
                "generator__content_form_section__about__address_section__country",
              )}
              placeholder={t(
                "generator__content_form_section__about__address_section__country__placeholder",
              )}
              id="country"
              value={vCard.country}
              onChange={(value) => handleAddressChange(value, "country")}
            />
          </>
        ) : (
          <>
            <Input
              label={t(
                "generator__content_form_section__about__address_section__url",
              )}
              placeholder={t(
                "generator__content_form_section__about__address_section__url__placeholder",
              )}
              id="add-url"
              type="url"
              value={vCard.addressUrl}
              onChange={handleUrlChange}
            />
          </>
        )}
      </AboutAccordion>

      {/* Modal */}
      <InputResetModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onReset={handleReset}
      />
    </>
  );
}
