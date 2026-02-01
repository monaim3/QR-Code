import Phone from "@/components/icons/phone";
import PreviewAccordion from "../PreviewAccordion";
import { useAppSelector } from "@/store/hooks";
import InfoCard from "../vcard/InfoCard";
import Mail from "@/components/icons/mail";
import LinkAlt01 from "@/components/icons/link-alt-01";
import User from "@/components/icons/user";

export default function ContactPreview() {
  const business = useAppSelector((state) => state.business);
  const { contactInfo } = business;

  // Filter out empty phone numbers
  const phoneNumbers = [
    contactInfo.phoneNumber,
    contactInfo.altPhoneNumber,
    ...contactInfo.altPhoneNumbers,
  ].filter((phone) => phone && phone.trim() !== "");

  // Filter out empty emails
  const emails = [
    contactInfo.email,
    ...contactInfo.altEmails,
  ].filter((email) => email && email.trim() !== "");

  // Check if website exists
  const hasWebsite = contactInfo.website && contactInfo.website.trim() !== "";

  // Check if full name exists
  const hasFullName = contactInfo.fullName && contactInfo.fullName.trim() !== "";

  // Check if any contact data exists
  const hasContactData =
    hasFullName ||
    phoneNumbers.length > 0 ||
    emails.length > 0 ||
    hasWebsite;

  if (!hasContactData) {
    return null;
  }

  return (
    <PreviewAccordion
      title="Contact"
      icon={<Phone className="text-[var(--Grey)]" />}
    >
      {/* Full Name */}
      {hasFullName && (
        <>
          <InfoCard
            title="Name"
            description={contactInfo.fullName}
            icon={<User className="text-[var(--Grey)] w-4 h-4" />}
          />
          {(phoneNumbers.length > 0 || emails.length > 0 || hasWebsite) && (
            <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />
          )}
        </>
      )}

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
          {(emails.length > 0 || hasWebsite) && (
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
          {hasWebsite && (
            <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />
          )}
        </>
      )}

      {/* Website */}
      {hasWebsite && (
        <InfoCard
          title="Website"
          description={contactInfo.website}
          icon={<LinkAlt01 className="text-[var(--Grey)]" />}
        />
      )}
    </PreviewAccordion>
  );
}
