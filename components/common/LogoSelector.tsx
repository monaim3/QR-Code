import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaLinkedin,
  FaYoutube,
  FaTiktok,
  FaWhatsapp,
  FaTelegram,
} from "react-icons/fa";
import { SlCloudUpload } from "react-icons/sl";
import { BsTwitterX } from "react-icons/bs";
type LogoSelectorProps = {
  selectedLogo: string;
  onLogoChange: (logo: string) => void;
  customLogo: string;
  onCustomLogoUpload: (logo: string) => void;
};
const LogoSelector = ({
  selectedLogo,
  onLogoChange,
  customLogo,
  onCustomLogoUpload,
}: LogoSelectorProps) => {
  const socialLogos = [
    { name: "Facebook", Icon: FaFacebook, color: "#1877F2" },
    { name: "Instagram", Icon: FaInstagram, color: "#E4405F" },
    { name: "Twitter", Icon: FaTwitter, color: "#1DA1F2" },
    { name: "LinkedIn", Icon: FaLinkedin, color: "#0A66C2" },
    { name: "YouTube", Icon: FaYoutube, color: "#FF0000" },
    { name: "TikTok", Icon: FaTiktok, color: "#000000" },
    { name: "WhatsApp", Icon: FaWhatsapp, color: "#25D366" },
    { name: "Telegram", Icon: FaTelegram, color: "#0088CC" },
  ];

  const handleFileUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        onCustomLogoUpload(event.target.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="w-full space-y-4">
      <label className="block text-sm font-medium text-gray-900">Logo</label>
      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center hover:border-gray-400 transition-colors">
        <input
          type="file"
          id="logo-upload"
          accept="image/*"
          onChange={handleFileUpload}
          className="hidden"
        />
        <label
          htmlFor="logo-upload"
          className="cursor-pointer flex flex-col items-center"
        >
          {customLogo && !selectedLogo ? (
            <div className="relative">
              <img
                src={customLogo}
                alt="Custom logo"
                className="w-16 h-16 object-contain"
              />
              <button
                onClick={(e) => {
                  e.preventDefault();
                  onCustomLogoUpload(null);
                }}
                className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 hover:bg-red-600"
              >
                <BsTwitterX size={12} />
              </button>
            </div>
          ) : (
            <>
              <SlCloudUpload className="w-8 h-8 text-gray-400 mb-2" />
              <span className="text-sm text-gray-600">Upload custom logo</span>
              {selectedLogo && (
                <span className="text-xs text-gray-500 mt-1">
                  (Social icon selected - will be used instead)
                </span>
              )}
            </>
          )}
        </label>
      </div>

      <div className="grid grid-cols-4 gap-3">
        {socialLogos.map((logo) => {
          const IconComponent = logo.Icon;
          return (
            <button
              key={logo.name}
              onClick={() =>
                onLogoChange(logo.name === selectedLogo ? null : logo.name)
              }
              className={`aspect-square border-2 rounded-lg flex flex-col items-center justify-center transition-all ${
                selectedLogo === logo.name
                  ? "border-blue-500 bg-blue-50"
                  : "border-gray-300 hover:border-gray-400"
              }`}
              title={logo.name}
            >
              <IconComponent size={32} style={{ color: logo.color }} />
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LogoSelector;
