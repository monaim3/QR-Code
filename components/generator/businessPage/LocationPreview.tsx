import { useAppSelector } from "@/store/hooks";
import PreviewAccordion from "../PreviewAccordion";
import LocationPin from "@/components/icons/location-pin";

export default function LocationPreview() {
  const business = useAppSelector((state) => state.business);

  const addressParts = [
    business.street,
    business.city,
    business.state,
    business.postalCode,
    business.country,
  ].filter((part) => part && part.trim() !== "");
  const hasAddressUrl = !!business.addressUrl?.trim();
  const hasLocation = addressParts.length > 0 || hasAddressUrl;

  if (!hasLocation) return null;

  const locationString = addressParts.join(", ");
  const mapHref = business.addressUrl?.startsWith("http")
    ? business.addressUrl
    : business.addressUrl
      ? `https://${business.addressUrl}`
      : "";

  return (
    <PreviewAccordion
      title="Location"
      icon={<LocationPin className="text-[var(--Grey)]" />}
    >
      <div className="flex flex-col gap-1">
        {locationString && (
          <p className="text-[var(--Black)] text-[12px] leading-[20px] whitespace-pre-line">
            {locationString}
          </p>
        )}
        {hasAddressUrl && (
          <a
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--Blue)] text-[12px] leading-[20px] w-fit"
          >
            Show on map
          </a>
        )}
      </div>
    </PreviewAccordion>
  );
}
