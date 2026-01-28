import Phone from "@/components/icons/phone";
import PreviewAccordion from "../PreviewAccordion";
import { useAppSelector } from "@/store/hooks";
import InfoCard from "./InfoCard";
import Mail from "@/components/icons/mail";
import LinkAlt01 from "@/components/icons/link-alt-01";
import LocationPin from "@/components/icons/location-pin";

export default function ContactView() {
  const vCard = useAppSelector((state) => state.vCard);
  const { contactDetails } = vCard;

  // Filter out empty phone numbers
  const phoneNumbers = [
    contactDetails.phoneNumber,
    contactDetails.altPhoneNumber,
    ...contactDetails.altPhoneNumbers,
  ].filter((phone) => phone && phone.trim() !== "");

  // Filter out empty emails
  const emails = [
    contactDetails.email,
    ...contactDetails.altEmails,
  ].filter((email) => email && email.trim() !== "");

  // Check if website exists
  const hasWebsite = contactDetails.website && contactDetails.website.trim() !== "";

  // Check if location exists
  const addressParts = [
    vCard.street,
    vCard.city,
    vCard.state,
    vCard.postalCode,
    vCard.country,
  ].filter((part) => part && part.trim() !== "");
  const hasAddressUrl = vCard.addressUrl && vCard.addressUrl.trim() !== "";
  const hasLocation = addressParts.length > 0 || hasAddressUrl;
  const locationString = addressParts.join(", ");
  const locationDescription = hasAddressUrl
    ? locationString
      ? `${locationString}\n${vCard.addressUrl}`
      : vCard.addressUrl
    : locationString;

  // Check if any contact data exists
  const hasContactData =
    phoneNumbers.length > 0 ||
    emails.length > 0 ||
    hasWebsite ||
    hasLocation;

  if (!hasContactData) {
    return null;
  }

  return (
    <PreviewAccordion
      title="Contact"
      icon={<Phone className="text-[var(--Grey)]" />}
    >
      {/* Phone Numbers */}
      {phoneNumbers.length > 0 && (
        <>
          {phoneNumbers.map((phone, index) => (
            <InfoCard
              key={`phone-${index}`}
              title="Phone"
              description={phone}
              icon={index === 0 ? <Phone className="text-[var(--Grey)]" /> : undefined}
            />
          ))}
          {(emails.length > 0 || hasWebsite || hasLocation) && (
            <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />
          )}
        </>
      )}

      {/* Emails */}
      {emails.length > 0 && (
        <>
          {emails.map((email, index) => (
            <InfoCard
              key={`email-${index}`}
              title="Email"
              description={email}
              icon={index === 0 ? <Mail className="text-[var(--Grey)]" /> : undefined}
            />
          ))}
          {(hasWebsite || hasLocation) && (
            <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />
          )}
        </>
      )}

      {/* Website */}
      {hasWebsite && (
        <>
          <InfoCard
            title="Website"
            description={contactDetails.website}
            icon={<LinkAlt01 className="text-[var(--Grey)]" />}
          />
          {hasLocation && (
            <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />
          )}
        </>
      )}

      {/* Location */}
      {hasLocation && (
        <InfoCard
          title="Location"
          description={locationDescription}
          icon={<LocationPin className="text-[var(--Grey)]" />}
        />
      )}
    </PreviewAccordion>
  );
}
