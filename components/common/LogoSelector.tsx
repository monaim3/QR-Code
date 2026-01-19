// import { useState } from "react";

// import UploadIcon from "../icons/upload-icon";
// import Twitter from "../icons/twitter";
// import X from "../icons/x";
// import Youtube from "../icons/youtube";
// import Instra from "../icons/Instra";
// import TikTok from "../icons/tiktok";
// import LinkedIn from "../icons/linkedin";
// import Pinterest from "../icons/pinter";
// import Microsoft from "../icons/outlook";
// import Apple from "../icons/apple";
// import Gmail from "../icons/gmail";
// import WhatsApp from "../icons/whatsapp";
// import Facebook from "../icons/facebook-icon";
// import Netlifix from "../icons/netlifix";
// import Tooltip from "./Tooltip";

// type LogoType = {
//   name: string;
//   Icon: React.ComponentType;
// };

// type LogoSelectorProps = {
//   selectedLogo: LogoType | null;
//   onLogoChange: (logo: LogoType | null) => void;
//   customLogo: string | null;
//   onCustomLogoUpload: (logo: string | null) => void;
// };

// const LogoSelector = ({
//   selectedLogo,
//   onLogoChange,
//   customLogo,
//   onCustomLogoUpload,
// }: LogoSelectorProps) => {
//   const [uploadError, setUploadError] = useState("");

//   const socialLogos: LogoType[] = [
//     { name: "Twitter", Icon: Twitter },
//     { name: "X", Icon: X },
//     { name: "YouTube", Icon: Youtube },
//     { name: "Instagram", Icon: Instra },
//     { name: "TikTok", Icon: TikTok },
//     { name: "LinkedIn", Icon: LinkedIn },
//     { name: "Pinterest", Icon: Pinterest },
//     { name: "Microsoft", Icon: Microsoft },
//     { name: "Apple", Icon: Apple },
//     { name: "Gmail", Icon: Gmail },
//     { name: "WhatsApp", Icon: WhatsApp },
//     { name: "Facebook", Icon: Facebook },
//     { name: "Netlifix", Icon: Netlifix },
//   ];

//   // Notun function add korlam
//   const handleLogoSelect = (logo: LogoType) => {
//     const isSelected = selectedLogo?.name === logo.name;
//     if (isSelected) {
//       onLogoChange(null);
//     } else {
//       onLogoChange(logo); // Pura logo object pass korchi
//     }
//     onCustomLogoUpload(null); // Custom logo remove korchi
//     setUploadError("");
//   };

//   const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const file = e.target.files?.[0];
//     if (file) {
//       setUploadError("");
//       const img = new Image();
//       const objectUrl = URL.createObjectURL(file);

//       img.onload = () => {
//         if (img.width > 2048 || img.height > 2048) {
//           setUploadError(
//             "Image dimensions must be smaller than or equal to 2048 x 2048",
//           );
//           URL.revokeObjectURL(objectUrl);
//           return;
//         }

//         const reader = new FileReader();
//         reader.onload = (event) => {
//           const result = event.target?.result;
//           if (result && typeof result === "string") {
//             onCustomLogoUpload(result);
//             onLogoChange(null); // Selected logo remove korchi
//           }
//         };
//         reader.readAsDataURL(file);
//         URL.revokeObjectURL(objectUrl);
//       };

//       img.onerror = () => {
//         setUploadError("Failed to load image");
//         URL.revokeObjectURL(objectUrl);
//       };

//       img.src = objectUrl;
//     }
//   };

//   return (
//     <div className="w-full space-y-4">
//       <label className="block text-base font-medium text-gray-900">
//         Select logo
//       </label>

//       <div className="flex gap-4 flex-wrap">
//         {socialLogos.map((logo) => {
//           const IconComponent = logo.Icon;
//           const isSelected = selectedLogo?.name === logo.name;
//           return (
//             <div key={logo.name} className="relative group">
//               <button
//                 onClick={() => handleLogoSelect(logo)}
//                 className={`w-10 h-10 rounded-md flex items-center justify-center transition-all p-1 ${
//                   isSelected
//                     ? "bg-white border-2 border-blue-500"
//                     : "bg-white border border-gray-300 hover:border-gray-400"
//                 }`}
//               >
//                 <IconComponent />
//               </button>
//               <div className="absolute  left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
//                 <Tooltip text={logo.name} />
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       <div>
//         <label className="block text-base font-medium text-gray-700 mb-3">
//           Upload your own logo
//         </label>
//         <div
//           className={`border-2 border-dashed border-[#01A56D] rounded-lg p-6 text-center transition-colors ${
//             uploadError
//               ? "border-red-500 bg-red-50"
//               : "border-gray-300 hover:border-gray-400"
//           }`}
//         >
//           <input
//             type="file"
//             id="logo-upload"
//             accept="image/jpeg,image/jpg,image/png,image/svg+xml"
//             onChange={handleFileUpload}
//             className="hidden"
//           />

//           {customLogo && !selectedLogo ? (
//             <div className="flex flex-col items-center">
//               <div className="relative mb-2">
//                 <img
//                   src={customLogo}
//                   alt="MyLogo.svg"
//                   className="w-16 h-16 object-contain"
//                 />
//               </div>
//               <div className="flex items-center gap-2 text-sm">
//                 <span className="text-gray-700">MyLogo.svg</span>
//                 <button
//                   onClick={(e) => {
//                     e.preventDefault();
//                     onCustomLogoUpload(null);
//                     setUploadError("");
//                   }}
//                   className="text-gray-500 hover:text-gray-700"
//                 >
//                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                     <path
//                       d="M12 4L4 12M4 4L12 12"
//                       stroke="currentColor"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                     />
//                   </svg>
//                 </button>
//                 <button className="text-gray-400 hover:text-gray-600">
//                   <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
//                     <rect
//                       x="3"
//                       y="2"
//                       width="10"
//                       height="12"
//                       rx="1"
//                       stroke="currentColor"
//                       strokeWidth="1.5"
//                     />
//                   </svg>
//                 </button>
//               </div>
//             </div>
//           ) : (
//             <label
//               htmlFor="logo-upload"
//               className="cursor-pointer flex gap-6 items-center"
//             >
//               <div className="w-16 h-16 p-4 border flex justify-center items-center rounded-full ">
//                 <UploadIcon />
//               </div>

//               <div>
//                 <p className="text-base font-medium text-gray-600">
//                   Upload image (jpg, png, svg)
//                 </p>
//                 <p className="text-sm text-left text-gray-500 mt-1">
//                   Maximum size: 5MB
//                 </p>
//               </div>
//             </label>
//           )}
//         </div>
//         {uploadError && (
//           <p className="text-sm text-red-600 mt-2">{uploadError}</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default LogoSelector;

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
  name: string;
  Icon: React.ComponentType;
};

type LogoSelectorProps = {
  selectedLogo: LogoType | null;
  onLogoChange: (logo: LogoType | null) => void;
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
    { name: "Twitter", Icon: Twitter },
    { name: "X", Icon: X },
    { name: "YouTube", Icon: Youtube },
    { name: "Instagram", Icon: Instra },
    { name: "TikTok", Icon: TikTok },
    { name: "LinkedIn", Icon: LinkedIn },
    { name: "Pinterest", Icon: Pinterest },
    { name: "Microsoft", Icon: Microsoft },
    { name: "Apple", Icon: Apple },
    { name: "Gmail", Icon: Gmail },
    { name: "WhatsApp", Icon: WhatsApp },
    { name: "Facebook", Icon: Facebook },
    { name: "Netlifix", Icon: Netlifix },
  ];

  const handleLogoSelect = (logo: LogoType) => {
    const isSelected = selectedLogo?.name === logo.name;
    if (isSelected) {
      onLogoChange(null);
    } else {
      onLogoChange(logo);
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

      <div className="flex gap-4 flex-wrap">
        {socialLogos.map((logo) => {
          const IconComponent = logo.Icon;
          const isSelected = selectedLogo?.name === logo.name;
          return (
            <div key={logo.name} className="relative group">
              <button
                onClick={() => handleLogoSelect(logo)}
                className={`w-10 h-10 rounded-md flex items-center justify-center transition-all p-1 ${
                  isSelected
                    ? "bg-white border-2 border-blue-500"
                    : "bg-white border border-gray-300 hover:border-gray-400"
                }`}
              >
                <IconComponent />
              </button>
              <div className="absolute  left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
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
          className={`border-2 border-dashed rounded-lg p-6 transition-colors ${
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
              <div className="w-20 h-20 p-4 border flex justify-center items-center rounded-full">
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
