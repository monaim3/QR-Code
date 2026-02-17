import { ScrollArea } from "@/components/ui/scroll-area";
import { useDispatch } from "react-redux";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { useEffect } from "react";
import { setIsPreviewWelcomeScreen } from "@/store/slices/video-slice";
import ShareAndroid from "@/components/icons/share-android";
import UnifiedVideoPlayer from "@/components/generator/video/video-player";

export default function VideoPreView() {
  const dispatch = useDispatch();
  const video = useAppSelector((state) => state.video);

  const textColor = () => {
    switch (video.primaryColor) {
      case "#6594FF":
        return "text-white";
      case "#ECEDF1":
        return "text-[var(--Black)]";
      case "#ECECF0":
        return "text-[var(--Black)]";
      case "#FFFFFF":
        return "text-[var(--Black)]";
      case "#DAEBF6":
      default:
        return "text-white";
    }
  };

  const buttonTextColor = () => {
    switch (video.primaryColor) {
      case "#6594FF":
        return "text-[var(--Black)]";
      case "#B69EDE":
        return "text-[var(--Black)]";
      case "#FACB67":
        return "text-[var(--Black)]";
      case "#FFFFFF":
        return "text-[var(--Black)]";
      default:
        return "text-white";
    }
  };

  const defaultbutton = [
    { text: "Click here", link: "https://www.example.com/" },
  ];

  const defaultVideo = [
    {
      title: "So much joy!",
      description: "A truly unforgettable moment!",
      url: "",
    },
    {
      title: "The highlight of the day!",
      description: "Discover more amazing content!",
      url: "",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      dispatch(setIsPreviewWelcomeScreen(false));
    }, 1000);
  }, [video.isPreviewWelcomeScreen, dispatch]);

  return (
    <ScrollArea className="w-full h-full rounded-[32px]">
      <div
        className={`w-full h-full bottom-0 left-0 flex justify-center items-center bg-white z-[3] absolute transition-transform duration-500 ease-in-out ${video.isPreviewWelcomeScreen ? "translate-y-0" : "translate-y-full"}`}
      >
        {video.welcomeScreen && (
          <Image
            src={video.welcomeScreen}
            alt="Background"
            width={200}
            height={200}
            className="object-contain"
          />
        )}
      </div>
      <div className="w-full h-full flex flex-col items-center gap-6 pb-8 pt-[66.46px] px-5 relative rounded-[32px]">
        <div
          className="absolute left-0 top-0 w-full h-[300px] z-[1] rounded-[32px]"
          style={{ backgroundColor: video.primaryColor }}
        />
        <div className="absolute left-0 right-0 top-[32px] flex flex-col items-center justify-center px-[22px] z-[2]">
          <p className={`text-[18px] leading-[26px] font-bold ${textColor()}`}>
            {video.isDefault ? "A Day to Remember" : video.videoInfo.title}
          </p>
          <p
            className={`text-[10px] leading-[16px] font-regular text-center ${textColor()}`}
          >
            {video.isDefault
              ? "Full of smiles, emotions, and beautiful memories!"
              : video.videoInfo.description}
          </p>
          <div className="w-full max-w-full pt-4">
            {(video.isDefault ? defaultbutton : video.videoInfo.buttons).map(
              (button, index) => {
                return (
                  <div
                    key={index + 1}
                    className="flex items-center justify-center gap-2 w-full mb-2"
                  >
                    <button
                      key={index}
                      className={`py-2 px-4 w-full h-[40px] rounded-[32px] border border-transparent ${buttonTextColor()} text-sm font-medium`}
                      style={{ backgroundColor: video.secondaryColor }}
                    >
                      {video.isDefault ? "Click here" : `${button.text}`}
                    </button>
                    {index === 0 && video.isShare && (
                      <div
                        key={index + 2}
                        className={`py-2 px-4 w-[40px] h-[40px] flex items-center justify-center rounded-md border border-transparent ${buttonTextColor()}`}
                        style={{ backgroundColor: video.secondaryColor }}
                      >
                        <ShareAndroid className="flex-shrink-0" />
                      </div>
                    )}
                    {index !== 0 && video.isShare && (
                      <div
                        key={index + 3}
                        className={`h-[40px] w-[40px] py-2 px-4`}
                      />
                    )}
                  </div>
                );
              },
            )}
          </div>
          <div className="w-full max-w-full pt-[26px]">
            {(video.isDefault ? defaultVideo : video.videos).map(
              (item, index) => {
                return (
                  <div
                    key={index}
                    className="flex flex-col items-start justify-center bg-white border border-white rounded-[6px] shadow-card mb-[10px]"
                  >
                    {video.isDefault ? (
                      <div className="relative w-full h-[130px] p-[1px]">
                        <Image
                          src="/images/vieo-sample.png"
                          alt="My Photo"
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      video.videos && (
                        <div className="flex w-full flex-1 flex-col items-center justify-center">
                          <UnifiedVideoPlayer
                            url={item.url}
                            height={130}
                            canPlay={true}
                          />
                        </div>
                      )
                    )}
                    <p className="text-[14px] leading-[22px] font-medium text-[var(--Black)] px-2 pt-2">
                      {video.isDefault ? "So much joy!" : item.title}
                    </p>
                    <p className="text-[12px] leading-[20px] font-regular text-[var(--Black)] px-2 pb-2">
                      {video.isDefault ? "So much joy!" : item.description}
                    </p>
                  </div>
                );
              },
            )}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
}
