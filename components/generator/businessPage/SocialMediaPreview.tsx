import PreviewAccordion from "../PreviewAccordion";
import { useAppSelector } from "@/store/hooks";
import ThumbsUp from "@/components/icons/thumbs-up";
import ChevronRightSmall from "@/components/icons/chevron-right-small";
import { socialChannels } from "@/lib/socialChannels";

export default function SocialMediaPreview() {
  const business = useAppSelector((state) => state.business);

  const handleRedirect = (url: string) => {
    if (!url) return;

    // Ensure URL is properly formatted for external navigation
    let formattedUrl = url.trim();

    // Add protocol if missing (assume https for external URLs)
    if (
      !formattedUrl.startsWith("http://") &&
      !formattedUrl.startsWith("https://")
    ) {
      formattedUrl = `https://${formattedUrl}`;
    }

    const link = document.createElement("a");
    link.href = formattedUrl;
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const getIconForChannel = (channelId: string) => {
    const channelData = socialChannels.find((ch) => ch.id === channelId);
    return channelData?.icon || null;
  };

  if (!business.socialChannels.length) {
    return null;
  }

  return (
    <PreviewAccordion
      title="Social media"
      icon={<ThumbsUp className="text-[var(--Grey)]" />}
    >
      {business.socialChannels.map((channel, index) => {
        const IconComponent = getIconForChannel(channel.id);

        return (
          <div
            key={channel.id || index}
            onClick={() => handleRedirect(channel.url)}
            className="-m-2 flex p-2 items-center gap-2 self-stretch rounded-[var(--Corner-Radius-6)] bg-[var(--light-grey-70)] cursor-pointer"
          >
            {IconComponent && (
              <div className="flex-shrink-0 w-8 h-8 flex items-center justify-center overflow-hidden">
                <div className="scale-[0.8] origin-center">
                  <IconComponent />
                </div>
              </div>
            )}
            <p className="text-[var(--Black)] text-[12px] leading-[20px] flex-1">
              {channel.name}
            </p>

            <ChevronRightSmall />
          </div>
        );
      })}
    </PreviewAccordion>
  );
}
