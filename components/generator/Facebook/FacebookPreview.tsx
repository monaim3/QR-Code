import { useAppSelector } from "@/store/hooks";
import Women from "../../../public/images/generator_img/women.jpg";
import FacebookIcon from "@/components/icons/facebook-icon";
import { Globe } from "lucide-react";

const FacebookPreview: React.FC = () => {
  const name = useAppSelector((state) => state.facebook.Name);
  const title = useAppSelector((state) => state.facebook.Title);
  const buttons = useAppSelector((state) => state.facebook.buttons);
  const images = useAppSelector((state) => state.facebook.images);

  // First image or fallback
  const displayImage = images.length > 0 ? images[0].url : Women.src;

  return (
    <div className="w-full h-full relative rounded-[32px] overflow-hidden bg-white">
      {/* Top Color Section */}
      <div className="absolute top-0 left-0 w-full h-[37%] bg-[#EB7986]" />

      {/* Profile Card */}
      <div className="relative z-10 mx-10 mt-12">
        <div className="bg-white rounded-xl shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] overflow-hidden">
          <div className="w-full px-1 pt-1 pb-1">
            <div className="w-full aspect-[3/4] bg-gray-100 flex items-center justify-center overflow-hidden rounded-lg">
              <img
                src={displayImage}
                alt={name || "Profile"}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        <div className="px-6 pb-6 text-center mt-4">
          <h2 className="text-lg font-bold leading-[26px]">
            {name || "Lydia Harper"}
          </h2>
          <p className="text-[10px] font-normal leading-[16px] mt-0.5 uppercase tracking-wide">
            {title || "PROJECT MANAGER"}
          </p>
        </div>
        <div className="flex gap-2 px-6 mb-4">
          <Globe size={16} />
          <p className="text-[10px] font-normal leading-[16px]">
            www.lydiaharper.com
          </p>
        </div>
        <div className="mt-3 space-y-2">
          {/* Primary Button */}
          <button className="w-full py-2.5 rounded-lg  text-white text-xs font-normal leading-[20px] bg-black">
            Learn more
          </button>

          {/* Dynamic Buttons */}
          {buttons.map((button) => (
            <button
              key={button.id}
              className="w-full py-2.5 rounded-lg bg-white text-gray-900 text-sm font-medium  transition-all duration-150 flex items-center justify-between px-4"
            >
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-[#1877F2] flex items-center justify-center flex-shrink-0">
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="white">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                  </svg>
                </div>
                <span>{button.buttonText || "Facebook"}</span>
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
          ))}

          {buttons.length === 0 && (
            <button className="w-full py-2.5 rounded-lg bg-white  text-sm font-medium leading-[22px] hover:bg-gray-50 active:scale-[0.98] transition-all duration-150 flex items-center justify-between px-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                  <FacebookIcon />
                </div>
                <span>Facebook</span>
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
    </div>
  );
};

export default FacebookPreview;
