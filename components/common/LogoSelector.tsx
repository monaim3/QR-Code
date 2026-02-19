import { useState } from "react";

import UploadIcon from "../icons/upload-icon";
import Twitter from "../icons/twitter";
import X from "../icons/x";
import Youtube from "../icons/youtube";
import Instra from "../icons/Instra";
import TikTok from "../icons/tiktok";
import LinkedIn from "../icons/linkedin";
import Pinterest from "../icons/pinter";
import Microsoft from "../icons/outlook";
import Apple from "../icons/apple";
import Gmail from "../icons/gmail";
import WhatsApp from "../icons/whatsapp";
import Facebook from "../icons/facebook-icon";
import Netlifix from "../icons/netlifix";
import Tooltip from "./Tooltip";
import { RiDeleteBinLine } from "react-icons/ri";
import { LuPencil } from "react-icons/lu";

type LogoType = {
  id: string;
  name: string;
  Icon: React.ComponentType;
};

type LogoSelectorProps = {
  selectedLogo: string | null; // Changed to string (logo ID)
  onLogoChange: (logoId: string | null) => void; // Changed to accept logo ID
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
  const [fileName, setFileName] = useState("MyLogo.svg");

  const socialLogos: LogoType[] = [
    { id: "twitter", name: "Twitter", Icon: Twitter },
    { id: "x", name: "X", Icon: X },
    { id: "youtube", name: "YouTube", Icon: Youtube },
    { id: "instagram", name: "Instagram", Icon: Instra },
    { id: "tiktok", name: "TikTok", Icon: TikTok },
    { id: "linkedin", name: "LinkedIn", Icon: LinkedIn },
    { id: "pinterest", name: "Pinterest", Icon: Pinterest },
    { id: "microsoft", name: "Microsoft", Icon: Microsoft },
    { id: "apple", name: "Apple", Icon: Apple },
    { id: "gmail", name: "Gmail", Icon: Gmail },
    { id: "whatsapp", name: "WhatsApp", Icon: WhatsApp },
    { id: "facebook", name: "Facebook", Icon: Facebook },
    { id: "netflix", name: "Netflix", Icon: Netlifix },
  ];

  const handleLogoSelect = (logo: LogoType) => {
    const isSelected = selectedLogo === logo.id;
    if (isSelected) {
      onLogoChange(null);
    } else {
      onLogoChange(logo.id); // Pass logo ID instead of entire object
    }
    onCustomLogoUpload(null);
    setUploadError("");
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setFileName(file.name);
      setUploadError("");
      const img = new Image();
      const objectUrl = URL.createObjectURL(file);

      img.onload = () => {
        if (img.width > 2048 || img.height > 2048) {
          setUploadError(
            "Image dimensions must be smaller than or equal to 2048 x 2048",
          );
          onCustomLogoUpload(null);
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
        onCustomLogoUpload(null);
        URL.revokeObjectURL(objectUrl);
      };

      img.src = objectUrl;
    }
  };

  const handleEdit = () => {
    document.getElementById("logo-upload")?.click();
  };

  const handleDelete = () => {
    onCustomLogoUpload(null);
    setUploadError("");
    setFileName("MyLogo.svg");
    const input = document.getElementById("logo-upload") as HTMLInputElement;
    if (input) input.value = "";
  };

  return (
    <div className="w-full space-y-4">
      <label className="block text-base font-medium text-gray-900">
        Select logo
      </label>

      <div
        className="flex gap-4 overflow-x-auto overflow-y-hidden flex-nowrap
    lg:flex-wrap lg:overflow-visible pb-3 lg:pb-0"
      >
        {socialLogos.map((logo) => {
          const IconComponent = logo.Icon;
          const isSelected = selectedLogo === logo.id;
          return (
            <div key={logo.id} className="relative group">
              <button
                onClick={() => handleLogoSelect(logo)}
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-all p-1 
                  hover:border-2 hover:border-[#D3D8EB] ${
                    isSelected
                      ? "bg-white border border-transparent ring-2 ring-[var(--Blue)]"
                      : "bg-white  border border-gray-300 hover:border-gray-400 transition-all ease-linear duration-300"
                  }`}
              >
                <IconComponent />
              </button>
              <div className="absolute  left-1/2 -translate-x-1/2 mt-[-2px] mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <Tooltip text={logo.name} />
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
          className={`border-2 border-dashed rounded-lg p-4 lg:p-6 transition-colors ${
            uploadError
              ? "border-red-500 bg-red-50"
              : customLogo || fileName !== "MyLogo.svg"
                ? "border-[#01A56D] bg-white"
                : "border-[#01A56D] hover:border-[#01A56D]"
          }`}
        >
          <input
            type="file"
            id="logo-upload"
            accept="image/jpeg,image/jpg,image/png,image/svg+xml"
            onChange={handleFileUpload}
            className="hidden"
          />

          {customLogo || uploadError ? (
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                {customLogo && !uploadError && (
                  <div className="w-20 h-20 p-4 rounded-full border-2 border-gray-200 flex items-center justify-center overflow-hidden bg-white flex-shrink-0">
                    <img
                      src={customLogo}
                      alt={fileName}
                      className="w-12 h-12 object-contain"
                    />
                  </div>
                )}
                {uploadError && (
                  <div className="w-20 h-20 p-4 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white flex-shrink-0">
                    <UploadIcon className="mt-2" />
                  </div>
                )}
                <span className="text-base font-medium text-gray-900">
                  {fileName}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleEdit}
                  className=" px-2.5 py-2.5  text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300"
                  title="Edit"
                >
                  <LuPencil />
                </button>
                <button
                  onClick={handleDelete}
                  className="px-4 py-2 flex items-center gap-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors border border-gray-300"
                >
                  <RiDeleteBinLine />
                  <span className="text-sm leading-[22px] font-medium">
                    Delete
                  </span>
                </button>
              </div>
            </div>
          ) : (
            <label
              htmlFor="logo-upload"
              className="cursor-pointer flex gap-6 items-center"
            >
              <div className="w-[72px] h-16 lg:w-20 lg:h-20 p-2 lg:p-4 border flex justify-center items-center rounded-full">
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
