import Accordion from "@/components/common/Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Input from "../vcard/Input";
import { setAddress, setAddressUrl } from "@/store/slices/businessSlice";
import InputResetModal from "../vcard/InputResetModal";
import { useState } from "react";
import { useT } from "@/utils/t";
export default function Location() {
  const [isManual, setIsManual] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [pendingIsManual, setPendingIsManual] = useState<boolean | null>(null);
  const dispatch = useAppDispatch();
  const business = useAppSelector((state) => state.business);

  const handleAddressChange = (value: string, id: string) => {
    dispatch(
      setAddress({
        ...business,
        [id]: value,
      }),
    );
  };

  const handleUrlChange = (value: string) => {
    dispatch(setAddressUrl(value));
  };

  const hasAddressValues = () => {
    return !!(
      business.street ||
      business.postalCode ||
      business.city ||
      business.state ||
      business.country ||
      business.addressUrl
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
        ...business,
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
  const t = useT();
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPendingIsManual(null);
  };

  return (
    <div className="w-full">
      <Accordion
        title={t(
          "generator__qr_content_screen__business_page_type__sections__location__title",
        )}
        description={t(
          "generator__content_form_section__location__description",
        )}
        defaultOpen={true}
      >
        <div className="desktop:space-y-8 space-y-6">
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
              {t(
                "generator__content_form_section__about__address_section__url",
              )}
            </button>
          </div>

          {isManual ? (
            <>
              <div className="flex desktop:flex-row flex-col items-start desktop:gap-12 gap-4 flex-1">
                <Input
                  label={t(
                    "generator__content_form_section__about__address_section__street",
                  )}
                  placeholder={t(
                    "generator__content_form_section__about__address_section__street__placeholder",
                  )}
                  id="street"
                  value={business.street}
                  onChange={(value) => handleAddressChange(value, "street")}
                />
                <Input
                  label={t(
                    "generator__content_form_section__about__address_section__postal_code",
                  )}
                  placeholder={t(
                    "generator__content_form_section__about__address_section__postal_code__placeholder",
                  )}
                  id="postal-code"
                  value={business.postalCode}
                  onChange={(value) => handleAddressChange(value, "postalCode")}
                />
              </div>
              <div className="flex desktop:flex-row flex-col items-start desktop:gap-12 gap-4 flex-1">
                <Input
                  label={t(
                    "generator__content_form_section__about__address_section__city",
                  )}
                  placeholder={t(
                    "generator__content_form_section__about__address_section__city__placeholder",
                  )}
                  id="city"
                  value={business.city}
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
                  value={business.state}
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
                value={business.country}
                onChange={(value) => handleAddressChange(value, "country")}
              />
            </>
          ) : (
            <>
              <Input
                label="URL"
                placeholder="e.g. www.google.com/maps/search"
                id="add-url"
                type="url"
                value={business.addressUrl}
                onChange={handleUrlChange}
              />
            </>
          )}
        </div>
      </Accordion>

      {/* Modal */}
      <InputResetModal
        open={isModalOpen}
        onClose={handleCloseModal}
        onReset={handleReset}
      />
    </div>
  );
}
