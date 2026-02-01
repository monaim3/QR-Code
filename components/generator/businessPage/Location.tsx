import Accordion from "@/components/common/Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Input from "../vcard/Input";
import { setAddress, setAddressUrl } from "@/store/slices/businessSlice";
import InputResetModal from "../vcard/InputResetModal";
import { useState } from "react";

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

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setPendingIsManual(null);
  };

  return (
    <div className="w-full">
      <Accordion
        title="Location"
        description="Provide your business address if you have one"
        defaultOpen={true}
      >
        <div className="desktop:space-y-8 space-y-6">
          <div className="flex items-center gap-4 pb-2">
            <button
              onClick={() => handleModeChange(true)}
              className={`flex h-10 justify-center items-center gap-2 px-6 py-1 rounded-[var(--Corner-Radius-10)] border border-[var(--Blue)] text-[16px] leading-[22px] transition-all duration-300 ease-linear ${isManual ? "bg-[var(--Blue)] text-white hover:bg-[var(--Blue-hover)]" : "bg-white text-[var(--Blue)]"} flex-1 desktop:flex-none`}
            >
              Manual
            </button>
            <button
              onClick={() => handleModeChange(false)}
              className={`flex h-10 justify-center items-center gap-2 px-6 py-1 rounded-[var(--Corner-Radius-10)] border border-[var(--Blue)] text-[16px] leading-[22px] transition-all duration-300 ease-linear ${isManual ? "bg-white text-[var(--Blue)]" : "bg-[var(--Blue)] text-white hover:bg-[var(--Blue-hover)]"} flex-1 desktop:flex-none`}
            >
              URL
            </button>
          </div>

          {isManual ? (
            <>
              <div className="flex desktop:flex-row flex-col items-start desktop:gap-12 gap-4 flex-1">
                <Input
                  label="Street"
                  placeholder="e.g. Spring Avenue, 9/18"
                  id="street"
                  value={business.street}
                  onChange={(value) => handleAddressChange(value, "street")}
                />
                <Input
                  label="Postal code"
                  placeholder="e.g. 10005"
                  id="postal-code"
                  value={business.postalCode}
                  onChange={(value) => handleAddressChange(value, "postalCode")}
                />
              </div>
              <div className="flex desktop:flex-row flex-col items-start desktop:gap-12 gap-4 flex-1">
                <Input
                  label="City"
                  placeholder="e.g. New York City"
                  id="city"
                  value={business.city}
                  onChange={(value) => handleAddressChange(value, "city")}
                />
                <Input
                  label="State"
                  placeholder="e.g. New York"
                  id="state"
                  value={business.state}
                  onChange={(value) => handleAddressChange(value, "state")}
                />
              </div>

              <Input
                label="Country"
                placeholder="e.g. United States"
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
