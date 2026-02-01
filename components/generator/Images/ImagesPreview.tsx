import { useAppSelector } from "@/store/hooks";
import Women from "../../../public/images/generator_img/women.jpg";
import FacebookIcon from "@/components/icons/facebook-icon";
import { Globe } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import { setIsPreviewWelcomeScreen } from "@/store/slices/vCardSlice";
import { useDispatch } from "react-redux";

const ImagesPreview: React.FC = () => {
  const dispatch = useDispatch();
  const name = useAppSelector((state) => state.images.Name);
  const title = useAppSelector((state) => state.images.Title);
  const website = useAppSelector((state) => state.images.Website);
  const facebookUrl = useAppSelector((state) => state.images.FacebookUrl);
  const buttons = useAppSelector((state) => state.images.buttons);
  const images = useAppSelector((state) => state.images.images);
  const primaryColor = useAppSelector((state) => state.images.primaryColor);
  const secondaryColor = useAppSelector((state) => state.images.secondaryColor);

  const vCard = useAppSelector((state) => state.vCard);

  const hasUserAction =
    name ||
    title ||
    website ||
    facebookUrl ||
    buttons.length > 0 ||
    images.length > 0;

  const displayImage =
    images.length > 0 ? images[0].url : hasUserAction ? null : Women.src;
  const showName = hasUserAction ? name : "Lydia Harper";
  const showTitle = hasUserAction ? title : "PROJECT MANAGER";
  const showWebsite = hasUserAction ? website : "www.lydiaharper.com";

  const showFacebookButton = facebookUrl || !hasUserAction;

  const stackImages = images.slice(0, 3);

  const getButtonFontColor = (bgColor: string) => {
    const color = bgColor.toUpperCase();
    if (color === "#000000" || color === "#000") {
      return "#FFFFFF";
    } else if (color === "#FFFFFF" || color === "#FFF") {
      return "#000000";
    } else {
      return "#FFFFFF";
    }
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsPreviewWelcomeScreen(false));
    }, 1000);
  }, [vCard.isPreviewWelcomeScreen, dispatch]);

  return (
    <ScrollArea className="w-full h-full">
      <div
        className={`w-full h-full bottom-0 left-0 flex justify-center items-center bg-white z-[8] absolute transition-transform duration-500 ease-in-out ${vCard.isPreviewWelcomeScreen ? "translate-y-0" : "translate-y-full"}`}
      >
        {vCard.welcomeScreen && (
          <Image src={vCard.welcomeScreen} alt="Background" fill />
        )}
      </div>
      <div className="w-full h-full relative rounded-[32px] overflow-hidden bg-white pb-4">
        <div
          className="absolute top-0 left-0 right-0 h-[300px]"
          style={{ backgroundColor: primaryColor }}
        />

        <div className="relative z-3 mx-10 pt-12">
          <div className="bg-white rounded-lg shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] overflow-hidden">
            <div className="w-full px-1 pt-1 pb-1">
              {stackImages.length > 0 ? (
                <div className="w-full relative pb-[133%]">
                  {/* Second Image - Left side */}
                  {stackImages[1] && (
                    <div className="absolute -left-10 w-[48%] bg-white overflow-hidden rounded-lg shadow-md z-3 top-[20px] h-[calc(100%-28px)]">
                      <Image
                        src={stackImages[1].url}
                        alt={stackImages[1].name}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>
                  )}

                  {/* Third Image - Right side */}
                  {stackImages[2] && (
                    <div className="absolute -right-16 w-[40%] bg-white overflow-hidden rounded-lg shadow-md z-3 top-[20px] h-[calc(100%-28px)]">
                      <Image
                        src={stackImages[2].url}
                        alt={stackImages[2].name}
                        className="object-cover"
                        fill
                        unoptimized
                      />
                    </div>
                  )}

                  <div className="absolute bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg z-4 shadow-lg left-[5%] right-[5%] inset-y-0">
                    <Image
                      src={stackImages[0].url}
                      alt={stackImages[0].name}
                      className="object-cover"
                      fill
                      unoptimized
                    />
                  </div>
                </div>
              ) : displayImage ? (
                <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg relative">
                  <Image
                    src={displayImage}
                    alt={showName || "Profile"}
                    className="object-cover"
                    fill
                    unoptimized
                  />
                </div>
              ) : (
                <div className="w-full aspect-[3/4] bg-gray-100 rounded-lg" />
              )}
            </div>
          </div>

          {(showName || showTitle) && (
            <div className="px-4 pb-4 text-center mt-4 w-full overflow-hidden">
              {showName && (
                <h2
                  className="text-lg font-bold leading-[26px] break-words "
                  style={{
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                  }}
                >
                  {showName}
                </h2>
              )}
              {showTitle && (
                <p
                  className="text-[10px] font-normal leading-[16px] mt-0.5 uppercase tracking-wide break-words "
                  style={{
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                  }}
                >
                  {showTitle}
                </p>
              )}
            </div>
          )}

          {showWebsite && (
            <div className="flex gap-2 px-4 mb-4 items-center w-full overflow-hidden">
              <Globe size={16} className="text-gray-600 flex-shrink-0" />
              <p className="text-[10px] font-normal leading-[16px] truncate flex-1 min-w-0">
                {showWebsite.replace(/^https?:\/\//, "")}
              </p>
            </div>
          )}
        </div>

        <div className="px-5 mt-8 space-y-2 pb-4 w-full">
          {!hasUserAction && (
            <button className="w-full py-2.5 rounded-lg text-white text-xs font-normal leading-[20px] bg-black">
              Learn more
            </button>
          )}

          {buttons.map((button) => (
            <button
              key={button.id}
              className="w-full py-2.5 min-h-10 rounded-lg text-xs font-normal leading-[20px] border hover:opacity-90 transition-all duration-150 overflow-hidden"
              style={{
                backgroundColor: secondaryColor,
                color: getButtonFontColor(secondaryColor),
                borderColor:
                  secondaryColor === "#FFFFFF" ? "#000000" : secondaryColor,
                wordBreak: "break-word",
                overflowWrap: "anywhere",
              }}
            >
              <span className="block px-2 truncate">
                {button.buttonText || ""}
              </span>
            </button>
          ))}

          {showFacebookButton && (
            <button className="w-full py-2.5 rounded-lg bg-white text-gray-900 text-sm font-medium transition-all duration-150 flex items-center justify-between px-4">
              <div className="flex items-center gap-3 min-w-0 flex-1">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <FacebookIcon />
                </div>
                <span className="text-xs font-normal leading-[20px] truncate">
                  Facebook
                </span>
              </div>
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="text-gray-400 flex-shrink-0"
              >
                <path
                  d="M6 12L10 8L6 4"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          )}
        </div>
      </div>
    </ScrollArea>
  );
};

export default ImagesPreview;
