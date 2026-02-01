import Accordion from "@/components/common/Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Input from "../vcard/Input";
import Plus from "@/components/icons/plus";
import {
  addAltEmail,
  addAltPhoneNumber,
  removeAltEmail,
  removeAltPhoneNumber,
  setContactInfo,
  updateAltEmail,
  updateAltPhoneNumber,
} from "@/store/slices/businessSlice";
import TrashAlt from "@/components/icons/trash-alt";

export default function ContactInfo() {
  const dispatch = useAppDispatch();
  const business = useAppSelector((state) => state.business);

  const handleChange = (value: string, id: string) => {
    dispatch(
      setContactInfo({
        ...business.contactInfo,
        [id]: value,
      }),
    );
  };

  const handleAddAltPhoneNumber = () => {
    dispatch(addAltPhoneNumber());
  };

  const handleRemoveAltPhoneNumber = (index: number) => {
    dispatch(removeAltPhoneNumber(index));
  };

  const handleUpdateAltPhoneNumber = (index: number, value: string) => {
    dispatch(updateAltPhoneNumber({ index, value }));
  };

  const handleAddAltEmail = () => {
    dispatch(addAltEmail());
  };

  const handleRemoveAltEmail = (index: number) => {
    dispatch(removeAltEmail(index));
  };

  const handleUpdateAltEmail = (index: number, value: string) => {
    dispatch(updateAltEmail({ index, value }));
  };

  return (
    <div className="w-full">
      <Accordion
        title="Contact information"
        description="Provide contact details"
        defaultOpen={true}
      >
        <div className="desktop:space-y-8 space-y-6">
          <Input
            label="Full name"
            placeholder="e.g. Mike Smith"
            id="full-name"
            value={business.contactInfo.fullName}
            onChange={(value) => handleChange(value, "fullName")}
          />

          <div className="desktop:flex desktop:items-start desktop:gap-12 space-y-4 desktop:space-y-0 desktop:flex-1 w-full">
            <Input
              label="Phone number"
              placeholder="e.g. +1809999999"
              id="phoneNumber"
              type="tel"
              value={business.contactInfo.phoneNumber}
              onChange={(value) => handleChange(value, "phoneNumber")}
            />
            <div className="flex items-end gap-2 flex-1 w-full">
              <div className="w-[calc(100%-56px)]">
                <Input
                  label="Alternative phone number"
                  placeholder="e.g. +1809999999"
                  id="altPhoneNumber"
                  type="tel"
                  value={business.contactInfo.altPhoneNumber}
                  onChange={(value) => handleChange(value, "altPhoneNumber")}
                />
              </div>

              <button
                onClick={handleAddAltPhoneNumber}
                className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
              >
                <Plus className="text-[var(--Dark-gray)]" />
              </button>
            </div>
          </div>

          {business.contactInfo.altPhoneNumbers.map((phoneNumber, index) => (
            <div key={index} className="flex items-end gap-2 flex-1 w-full">
              <div className="w-[calc(100%-56px)]">
                <Input
                  label="Phone number"
                  placeholder="e.g. +1809999999"
                  id={`altPhoneNumber-${index}`}
                  type="tel"
                  value={phoneNumber}
                  onChange={(value) => handleUpdateAltPhoneNumber(index, value)}
                />
              </div>

              <button
                onClick={() => handleRemoveAltPhoneNumber(index)}
                className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
              >
                <TrashAlt className="text-[var(--Dark-gray)]" />
              </button>
            </div>
          ))}

          <div className="desktop:flex desktop:items-start desktop:gap-12 space-y-4 desktop:space-y-0 desktop:flex-1 w-full">
            <Input
              label="Website"
              placeholder="e.g. www.pauljones.com"
              id="website"
              type="url"
              value={business.contactInfo.website}
              onChange={(value) => handleChange(value, "website")}
            />
            <div className="flex items-end gap-2 flex-1 w-full">
              <div className="w-[calc(100%-56px)]">
                <Input
                  label="Email"
                  placeholder="e.g. name@email.com"
                  id="email"
                  type="email"
                  value={business.contactInfo.email}
                  onChange={(value) => handleChange(value, "email")}
                />
              </div>

              <button
                onClick={handleAddAltEmail}
                className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
              >
                <Plus className="text-[var(--Dark-gray)]" />
              </button>
            </div>
          </div>

          {business.contactInfo.altEmails.map((email, index) => (
            <div key={index} className="flex items-end gap-2 flex-1 w-full">
              <div className="w-[calc(100%-56px)]">
                <Input
                  label="Email"
                  placeholder="e.g. name@email.com"
                  id={`altEmail-${index}`}
                  type="email"
                  value={email}
                  onChange={(value) => handleUpdateAltEmail(index, value)}
                />
              </div>

              <button
                onClick={() => handleRemoveAltEmail(index)}
                className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
              >
                <TrashAlt className="text-[var(--Dark-gray)]" />
              </button>
            </div>
          ))}
        </div>
      </Accordion>
    </div>
  );
}
