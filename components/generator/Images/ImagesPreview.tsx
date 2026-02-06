import { useAppSelector } from "@/store/hooks";
import forest from "../../../public/images/generator_img/forest-nature.png";
import FacebookIcon from "@/components/icons/facebook-icon";
import { Globe } from "lucide-react";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useEffect } from "react";
import { setIsPreviewWelcomeScreen } from "@/store/slices/vCardSlice";
import { useDispatch } from "react-redux";
import { IoShareSocialOutline } from "react-icons/io5";

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
  const share = useAppSelector((state) => state.images.Share);
  const vCard = useAppSelector((state) => state.vCard);

  const hasUserAction =
    name ||
    title ||
    website ||
    facebookUrl ||
    buttons.length > 0 ||
    images.length > 0;

  const hasTextContent = name || title || website;

  const displayImage =
    images.length > 0 ? images[0].url : hasUserAction ? null : forest.src;

  const showName = hasTextContent
    ? name
    : hasUserAction
      ? "My Images"
      : "Vision Hub";
  const showTitle = hasTextContent
    ? title
    : hasUserAction
      ? ""
      : "Every image tells a story, inviting you to look closer and feel more.";
  const showWebsite = hasTextContent
    ? website
    : hasUserAction
      ? ""
      : "www.visionhub.com";

  const showFacebookButton = facebookUrl || !hasUserAction;

  const stackImages = images.slice(0, 3);

  const getButtonFontColor = (bgColor: string) => {
    const color = bgColor.toUpperCase();

    // Specific colors that need black text
    const lightColors = ["#FFFFFF", "#FFF", "#ECEDF1", "#DAEBF6", "#ECECF0"];

    if (lightColors.includes(color)) {
      return "#000000";
    } else if (color === "#000000" || color === "#000") {
      return "#FFFFFF";
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
        className={`w-full h-full bottom-0 left-0 flex justify-center items-center bg-white z-[3] absolute transition-transform duration-500 ease-in-out ${vCard.isPreviewWelcomeScreen ? "translate-y-0" : "translate-y-full"}`}
      >
        {vCard.welcomeScreen && (
          <Image
            src={vCard.welcomeScreen}
            alt="Background"
            width={200}
            height={200}
            className="object-contain"
          />
        )}
      </div>
      <div className="w-full h-full relative rounded-[32px] overflow-hidden bg-white pb-4">
        <div
          className="absolute top-0 left-0 right-0 h-[300px]"
          style={{ backgroundColor: primaryColor }}
        />

        <div className="relative z-3 mx-2 pt-12">
          {(showName || showTitle) && (
            <div className="px-4 pb-4 text-center mt-4 w-full overflow-hidden">
              {showName && (
                <h2
                  className="text-lg font-bold leading-[26px] break-words"
                  style={{
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                    color: hasUserAction
                      ? getButtonFontColor(primaryColor)
                      : "#FFFFFF",
                  }}
                >
                  {showName}
                </h2>
              )}
              {showTitle && (
                <p
                  className="text-[10px] font-normal leading-[16px] mt-0.5 tracking-wide break-words"
                  style={{
                    wordBreak: "break-word",
                    overflowWrap: "anywhere",
                    color: hasUserAction
                      ? getButtonFontColor(primaryColor)
                      : "#FFFFFF",
                  }}
                >
                  {showTitle}
                </p>
              )}
            </div>
          )}

          {showWebsite && (
            <div className="flex gap-2 px-4 mx-auto items-center justify-center mb-4">
              <Globe
                size={16}
                className="flex-shrink-0"
                style={{
                  color: hasUserAction
                    ? getButtonFontColor(primaryColor)
                    : "#FFFFFF",
                }}
              />
              <p
                className="text-[10px] font-normal leading-[16px] break-all"
                style={{
                  color: hasUserAction
                    ? getButtonFontColor(primaryColor)
                    : "#FFFFFF",
                }}
              >
                {showWebsite.replace(/^https?:\/\//, "")}
              </p>
            </div>
          )}

          <div className="rounded-lg px-4 overflow-hidden">
            <div className="w-full px-1 pt-1 pb-1">
              {stackImages.length > 0 ? (
                <div
                  className="w-full relative"
                  style={{ aspectRatio: "207/240" }}
                >
                  {/* Second Image - Left side */}
                  {stackImages[1] && (
                    <div className="absolute -left-2 w-[40%] bg-white overflow-hidden rounded-lg shadow-md z-3 top-[20px] bottom-[20px]">
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
                    <div className="absolute -right-2 w-[40%] bg-white overflow-hidden rounded-lg shadow-md z-3 top-[20px] bottom-[20px]">
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
                <div
                  className="w-full flex items-center justify-center overflow-hidden rounded-lg relative"
                  style={{ aspectRatio: "207/240" }}
                >
                  <Image
                    src={displayImage}
                    alt={showName || "Profile"}
                    className="object-cover"
                    fill
                    unoptimized
                  />
                </div>
              ) : (
                <div
                  className="w-full bg-gray-100 rounded-lg"
                  style={{ aspectRatio: "207/240" }}
                />
              )}
            </div>
          </div>
        </div>

        <div className="px-5 space-y-2 py-4 w-full">
          {!hasUserAction && (
            <div className="flex gap-2">
              <button className="w-full py-2 px-8 max-h-[40px]  rounded-lg text-white text-xs font-normal leading-[20px] bg-black">
                View more
              </button>
              {/* Share button always shows initially */}
              <button className="max-w-10 flex items-center justify-center w-full py-2.5 rounded-lg text-black text-xs font-normal leading-[20px] bg-white border border-black">
                <IoShareSocialOutline size={16} />
              </button>
            </div>
          )}

          {hasUserAction && buttons.length > 0 && (
            <>
              <div className={share ? "flex gap-2 mt-4" : "mt-4"}>
                {/* First button */}
                {buttons[0] && (
                  <button
                    className="w-full py-2.5 min-h-10 rounded-lg text-xs font-normal leading-[20px] border hover:opacity-90 transition-all duration-150 overflow-hidden"
                    style={{
                      backgroundColor: secondaryColor,
                      color: getButtonFontColor(secondaryColor),
                      borderColor:
                        secondaryColor === "#FFFFFF"
                          ? "#000000"
                          : secondaryColor,
                      wordBreak: "break-word",
                      overflowWrap: "anywhere",
                    }}
                  >
                    <span className="block px-2 truncate">
                      {buttons[0].buttonText || "e.g. Click here"}
                    </span>
                  </button>
                )}

                {/* Share icon - only show if checkbox is checked */}
                {share && (
                  <button
                    className="max-w-10 flex items-center justify-center w-full py-2.5 rounded-lg text-xs font-normal leading-[20px] border hover:opacity-90 transition-all duration-150"
                    style={{
                      backgroundColor: secondaryColor,
                      color: getButtonFontColor(secondaryColor),
                      borderColor:
                        secondaryColor === "#FFFFFF"
                          ? "#000000"
                          : secondaryColor,
                    }}
                  >
                    <IoShareSocialOutline size={16} />
                  </button>
                )}
              </div>

              {buttons.slice(1).map((button) => (
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
                    {button.buttonText || "e.g. Click here"}
                  </span>
                </button>
              ))}
            </>
          )}

          {hasUserAction && buttons.length === 0 && share && (
            <button
              className="w-full py-2.5 rounded-lg text-xs font-normal leading-[20px] border hover:opacity-90 transition-all duration-150 flex items-center justify-center mt-4"
              style={{
                backgroundColor: secondaryColor,
                color: getButtonFontColor(secondaryColor),
                borderColor:
                  secondaryColor === "#FFFFFF" ? "#000000" : secondaryColor,
              }}
            >
              <IoShareSocialOutline size={16} />
            </button>
          )}
        </div>
      </div>
    </ScrollArea>
  );
};

export default ImagesPreview;
