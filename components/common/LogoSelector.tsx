import { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaTelegram,
  FaPinterest,
} from "react-icons/fa";
import { PiMicrosoftOutlookLogoDuotone } from "react-icons/pi";
import { BsApple } from "react-icons/bs";
import { BiLogoGmail } from "react-icons/bi";
import { BsTwitterX } from "react-icons/bs";
import UploadIcon from "../icons/upload-icon";

type LogoSelectorProps = {
  selectedLogo: string | null;
  onLogoChange: (logo: string | null) => void;
  customLogo: string | null;
  onCustomLogoUpload: (logo: string | null) => void;
};

const LogoSelector = ({
  selectedLogo,
  onLogoChange,
  customLogo,
  onCustomLogoUpload,
}: LogoSelectorProps) => {
  const [uploadError, setUploadError] = useState("");

  const socialLogos = [
    { name: "Twitter", Icon: FaTwitter, color: "#1DA1F2" },
    { name: "X", Icon: BsTwitterX, color: "#1DA1F2" },
    { name: "YouTube", Icon: FaYoutube, color: "#FF0000" },
    { name: "Instagram", Icon: FaInstagram, color: "#E4405F" },
    { name: "TikTok", Icon: FaTiktok, color: "#000000" },
    { name: "LinkedIn", Icon: FaLinkedin, color: "#0A66C2" },
    { name: "Pinterest", Icon: FaPinterest, color: "#EB2239" },
    {
      name: "Microsoft",
      Icon: PiMicrosoftOutlookLogoDuotone,
      color: "#0078D4",
    },
    { name: "Apple", Icon: BsApple, color: "#000000" },
    { name: "Gmail", Icon: BiLogoGmail, color: "#EA4335" },
    { name: "WhatsApp", Icon: FaWhatsapp, color: "#25D366" },
    { name: "Facebook", Icon: FaFacebook, color: "#1877F2" },
    { name: "Telegram", Icon: FaTelegram, color: "#0088CC" },
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadError("");
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width > 2048 || img.height > 2048) {
          setUploadError(
            "Image dimensions must be smaller than or equal to 2048 x 2048"
          );
          URL.revokeObjectURL(objectUrl);
          return;
        }

        const reader = new FileReader();
        reader.onload = (event) => {
          const result = event.target?.result;
          if (result && typeof result === "string") {
            onCustomLogoUpload(result);
            onLogoChange(null);
          }
        };
        reader.readAsDataURL(file);
        URL.revokeObjectURL(objectUrl);
      };

      img.onerror = () => {
        setUploadError("Failed to load image");
        URL.revokeObjectURL(objectUrl);
      };

      img.src = objectUrl;
    }
  };

  return (
    <div className="w-full space-y-4">
      <label className="block text-sm font-medium text-gray-900">
        Select logo
      </label>

      <div className="flex gap-4 flex-wrap">
        {socialLogos.map((logo) => {
          const IconComponent = logo.Icon;
          const isSelected = selectedLogo === logo.name;
          return (
            <div key={logo.name} className="relative group">
              <button
                onClick={() => {
                  onLogoChange(isSelected ? null : logo.name);
                  setUploadError("");
                }}
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-all ${
                  isSelected
                    ? "bg-white border-2 border-blue-500"
                    : "bg-white border border-gray-300 hover:border-gray-400"
                }`}
              >
                <IconComponent size={20} style={{ color: logo.color }} />
              </button>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
                {logo.name}
              </div>
            </div>
          );
        })}
      </div>

      <div>
        <label className="block text-base font-medium text-gray-700 mb-3">
          Upload your own logo
        </label>
        <div
          className={`border-2 border-dashed border-[#01A56D] rounded-lg p-6 text-center transition-colors ${
            uploadError
              ? "border-red-500 bg-red-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
        >
          <input
            type="file"
            id="logo-upload"
            accept="image/jpeg,image/jpg,image/png,image/svg+xml"
            onChange={handleFileUpload}
            className="hidden"
          />

          {customLogo && !selectedLogo ? (
            <div className="flex flex-col items-center">
              <div className="relative mb-2">
                <img
                  src={customLogo}
                  alt="MyLogo.svg"
                  className="w-16 h-16 object-contain"
                />
              </div>
              <div className="flex items-center gap-2 text-sm">
                <span className="text-gray-700">MyLogo.svg</span>
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    onCustomLogoUpload(null);
                    setUploadError("");
                  }}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path
                      d="M12 4L4 12M4 4L12 12"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </button>
                <button className="text-gray-400 hover:text-gray-600">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <rect
                      x="3"
                      y="2"
                      width="10"
                      height="12"
                      rx="1"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ) : (
            <label
              htmlFor="logo-upload"
              className="cursor-pointer flex gap-6 items-center"
            >
              <div className="w-16 h-16 p-4 border flex justify-center items-center rounded-full ">
                <UploadIcon />
              </div>

              <div>
                <p className="text-base font-medium text-gray-600">
                  Upload image (jpg, png, svg)
                </p>
                <p className="text-sm text-left text-gray-500 mt-1">
                  Maximum size: 5MB
                </p>
              </div>
            </label>
          )}
        </div>
        {uploadError && (
          <p className="text-sm text-red-600 mt-2">{uploadError}</p>
        )}
      </div>
    </div>
  );
};

export default LogoSelector;
