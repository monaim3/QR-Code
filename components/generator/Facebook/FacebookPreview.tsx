// import { useAppSelector } from "@/store/hooks";
// import Women from "../../../public/images/generator_img/women.jpg";
// import FacebookIcon from "@/components/icons/facebook-icon";
// import { Globe } from "lucide-react";

// const FacebookPreview: React.FC = () => {
//   const name = useAppSelector((state) => state.facebook.Name);
//   const title = useAppSelector((state) => state.facebook.Title);
//   const buttons = useAppSelector((state) => state.facebook.buttons);
//   const images = useAppSelector((state) => state.facebook.images);

//   // First image or fallback
//   const displayImage = images.length > 0 ? images[0].url : Women.src;

//   return (
//     <div className="w-full h-full relative rounded-[32px] overflow-hidden bg-white">
//       {/* Top Color Section */}
//       <div className="absolute top-0 left-0 w-full h-[37%] bg-[#EB7986]" />

//       {/* Profile Card */}
//       <div className="relative z-10 mx-10 mt-12">
//         <div className="bg-white rounded-xl shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] overflow-hidden">
//           <div className="w-full px-1 pt-1 pb-1">
//             <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg">
//               <img
//                 src={displayImage}
//                 alt={name || "Profile"}
//                 className="w-full h-full object-cover"
//               />
//             </div>
//           </div>
//         </div>

//         <div className="px-6 pb-6 text-center mt-4">
//           <h2 className="text-lg font-bold leading-[26px]">
//             {name || "Lydia Harper"}
//           </h2>
//           <p className="text-[10px] font-normal leading-[16px] mt-0.5 uppercase tracking-wide">
//             {title || "PROJECT MANAGER"}
//           </p>
//         </div>
//         <div className="flex gap-2 px-6 mb-4">
//           <Globe size={16} />
//           <p className="text-[10px] font-normal leading-[16px]">
//             www.lydiaharper.com
//           </p>
//         </div>
//       </div>
//       <div className="px-5 mt-3 space-y-2">
//         {/* Primary Button */}
//         <button className="w-full py-2.5 rounded-lg  text-white text-xs font-normal leading-[20px] bg-black">
//           Learn more
//         </button>

//         {/* Dynamic Buttons */}
//         {buttons.map((button) => (
//           <button
//             key={button.id}
//             className="w-full py-2.5 rounded-lg bg-white text-gray-900 text-sm font-medium  transition-all duration-150 flex items-center justify-between px-4"
//           >
//             <div className="flex items-center gap-3">
//               <div className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center flex-shrink-0">
//                 <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
//                   <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
//                 </svg>
//               </div>
//               <span>{button.buttonText || "Facebook"}</span>
//             </div>
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 16 16"
//               fill="none"
//               className="text-gray-400 flex-shrink-0"
//             >
//               <path
//                 d="M6 12L10 8L6 4"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         ))}

//         {buttons.length === 0 && (
//           <button className="w-full py-2.5 rounded-lg bg-white  text-sm font-medium leading-[22px] hover:bg-gray-50 active:scale-[0.98] transition-all duration-150 flex items-center justify-between px-4">
//             <div className="flex items-center gap-3">
//               <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
//                 <FacebookIcon />
//               </div>
//               <span>Facebook</span>
//             </div>
//             <svg
//               width="16"
//               height="16"
//               viewBox="0 0 16 16"
//               fill="none"
//               className="text-gray-400 flex-shrink-0"
//             >
//               <path
//                 d="M6 12L10 8L6 4"
//                 stroke="currentColor"
//                 strokeWidth="2"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//               />
//             </svg>
//           </button>
//         )}
//       </div>
//     </div>
//   );
// };

// export default FacebookPreview;

import { useAppSelector } from "@/store/hooks";
import Women from "../../../public/images/generator_img/women.jpg";
import FacebookIcon from "@/components/icons/facebook-icon";
import { Globe } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";

const FacebookPreview: React.FC = () => {
  const name = useAppSelector((state) => state.facebook.Name);
  const title = useAppSelector((state) => state.facebook.Title);
  const website = useAppSelector((state) => state.facebook.Website);
  const facebookUrl = useAppSelector((state) => state.facebook.FacebookUrl);
  const buttons = useAppSelector((state) => state.facebook.buttons);
  const images = useAppSelector((state) => state.facebook.images);
  const primaryColor = useAppSelector((state) => state.vCard.primaryColor);
  const secondaryColor = useAppSelector((state) => state.vCard.secondaryColor);

  // Check if user has taken any action
  const hasUserAction =
    name ||
    title ||
    website ||
    facebookUrl ||
    buttons.length > 0 ||
    images.length > 0;

  // Show default design or user content
  const displayImage =
    images.length > 0 ? images[0].url : hasUserAction ? null : Women.src;
  const showName = hasUserAction ? name : "Lydia Harper";
  const showTitle = hasUserAction ? title : "PROJECT MANAGER";
  const showWebsite = hasUserAction ? website : "www.lydiaharper.com";

  // Facebook button: Show if facebookUrl exists OR initial state (no user action)
  const showFacebookButton = facebookUrl || !hasUserAction;

  // Get first 3 images for stack effect
  const stackImages = images.slice(0, 3);

  return (
    <ScrollArea className="w-full h-full">
      <div className="w-full h-full relative rounded-[32px] overflow-hidden bg-white">
        {/* Top Color Section - Always show */}
        <div
          className="absolute top-0 left-0 w-full h-[37%]"
          style={{ backgroundColor: primaryColor }}
        />

        {/* Profile Card - Always show (Frame always visible) */}
        <div className="relative z-10 mx-10 mt-12">
          <div className="bg-white rounded-xl shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] overflow-hidden">
            {/* Image Frame with Stack Effect */}
            <div className="w-full px-1 pt-1 pb-1 relative">
              {stackImages.length > 0 ? (
                <>
                  {/* Main Image (First) - Highest z-index */}
                  <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg relative z-30">
                    <img
                      src={stackImages[0].url}
                      alt={stackImages[0].name}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  {/* Second Image - Left side, behind main */}
                  {stackImages[1] && (
                    <div
                      className="absolute top-2 left-0 w-full aspect-[3/4] bg-gray-100 overflow-hidden rounded-lg z-20"
                      style={{ transform: "translateY(8px)" }}
                    >
                      <img
                        src={stackImages[1].url}
                        alt={stackImages[1].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}

                  {/* Third Image - Right side, behind main */}
                  {stackImages[2] && (
                    <div
                      className="absolute top-2 right-20 w-[50%] aspect-[3/4] bg-gray-100 overflow-hidden rounded-lg z-20"
                      style={{ transform: "translateY(8px)" }}
                    >
                      <img
                        src={stackImages[2].url}
                        alt={stackImages[2].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                  )}
                </>
              ) : displayImage ? (
                // Single default image
                <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg">
                  <img
                    src={displayImage}
                    alt={showName || "Profile"}
                    className="w-full h-full object-cover"
                  />
                </div>
              ) : (
                // Empty frame
                <div className="w-full aspect-[3/4] bg-gray-100 rounded-lg" />
              )}
            </div>
          </div>

          {/* Profile Info - Show if: no user action (default) OR user added name/title */}
          {(showName || showTitle) && (
            <div className="px-6 pb-4 text-center mt-4">
              {showName && (
                <h2 className="text-lg font-bold leading-[26px] break-words">
                  {showName}
                </h2>
              )}
              {showTitle && (
                <p className="text-[10px] font-normal leading-[16px] mt-0.5 uppercase tracking-wide break-words">
                  {showTitle}
                </p>
              )}
            </div>
          )}

          {/* Website - Show if: no user action (default) OR user added website */}
          {showWebsite && (
            <div className="flex gap-2 px-6 mb-4 items-center">
              <Globe size={16} className="text-gray-600 flex-shrink-0" />
              <p className="text-[10px] font-normal leading-[16px] truncate">
                {showWebsite.replace(/^https?:\/\//, "")}
              </p>
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="px-5 mt-3 space-y-2 mb-4">
          {/* Learn More Button - Only show in initial state (no user action) */}
          {!hasUserAction && (
            <button className="w-full py-2.5 rounded-lg text-white text-xs font-normal leading-[20px] bg-black">
              Learn more
            </button>
          )}

          {/* Custom Buttons - Plain border style, no icons */}
          {buttons.map((button) => (
            <button
              key={button.id}
              className={`w-full py-2.5 min-h-10 rounded-lg  text-xs font-normal leading-[20px] border border-black hover:bg-gray-50 transition-all duration-150`}
              style={{
                backgroundColor: primaryColor,
                color: secondaryColor,
                borderColor:
                  primaryColor === "#FFFFFF"
                    ? "var(--Boarder-Grey)"
                    : primaryColor,
              }}
            >
              {button.buttonText || ""}
            </button>
          ))}

          {/* Facebook Button - With Facebook icon (only for Facebook URL) */}
          {showFacebookButton && (
            <button className="w-full py-2.5 rounded-lg bg-white text-gray-900 text-sm font-medium transition-all duration-150 flex items-center justify-between px-4 border border-gray-200 ">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <FacebookIcon />
                </div>
                <span className="text-xs font-normal leading-[20px]">
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

export default FacebookPreview;
