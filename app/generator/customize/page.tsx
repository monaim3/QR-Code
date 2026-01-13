"use client";
import { useState, useRef } from "react";
import { Upload } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  QRState,
  selectQRState,
  setFrameStyle,
  setFrameText,
  setFrameColor,
  setFrameBgColor,
  setFrameTextColor,
  setFrameTransparent,
  setPatternStyle,
  setPatternDotColor,
  setPatternBgColor,
  setPatternTransparent,
  setCornerFrameStyle,
  setCornerDotType,
  setCornerFrameColor,
  setCornerDotColor,
  setLogoPreset,
  setLogoCustom,
  clearLogo,
} from "../../../store/slices/qrSlice";
import MobileFrame from "@/components/common/MobileFrame";
import { toast } from "react-toastify";
import ColorPicker from "@/components/common/ColorPicker";
import CollapsibleSection from "@/components/common/CollapsibleSection";
import QRPreview from "@/components/common/QRPreview";

// Preview/QR Toggle Buttons
function PreviewQRButtons({
  activeTab,
  onTabChange,
}: {
  activeTab: "preview" | "qrcode";
  onTabChange: (tab: "preview" | "qrcode") => void;
}) {
  return (
    <div className="flex items-center justify-center gap-2">
      <button
        onClick={() => onTabChange("preview")}
        className={`py-3 px-6 rounded-full font-medium transition-all duration-300 ${
          activeTab === "preview"
            ? "bg-teal-600 text-white hover:bg-teal-700"
            : "bg-white text-teal-600 border border-gray-300 hover:border-teal-600"
        }`}
      >
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
            <path
              d="M14.3633 7.3633C14.566 7.64752 14.6673 7.78962 14.6673 7.99998C14.6673 8.21034 14.566 8.35244 14.3633 8.63666C13.4526 9.91369 11.1268 12.6666 8.00065 12.6666C4.8745 12.6666 2.54872 9.91369 1.63801 8.63666C1.43533 8.35244 1.33398 8.21034 1.33398 7.99998C1.33398 7.78962 1.43533 7.64752 1.63801 7.3633C2.54871 6.08627 4.8745 3.33331 8.00065 3.33331C11.1268 3.33331 13.4526 6.08627 14.3633 7.3633Z"
              stroke={activeTab === "preview" ? "white" : "#14b8a6"}
              strokeWidth="1.2"
            />
            <path
              d="M10.0007 7.99998C10.0007 6.89541 9.10522 5.99998 8.00065 5.99998C6.89608 5.99998 6.00065 6.89541 6.00065 7.99998C6.00065 9.10455 6.89608 9.99998 8.00065 9.99998C9.10522 9.99998 10.0007 9.10455 10.0007 7.99998Z"
              stroke={activeTab === "preview" ? "white" : "#14b8a6"}
              strokeWidth="1.2"
            />
          </svg>
          <span className="text-sm">Preview</span>
        </div>
      </button>
      <button
        onClick={() => onTabChange("qrcode")}
        className={`py-3 px-6 rounded-full font-medium transition-all duration-300 ${
          activeTab === "qrcode"
            ? "bg-teal-600 text-white hover:bg-teal-700"
            : "bg-white text-teal-600 border border-gray-300 hover:border-teal-600"
        }`}
      >
        <div className="flex items-center gap-2">
          <svg width="20" height="20" viewBox="0 0 16 16" fill="none">
            <rect
              x="2"
              y="2"
              width="5"
              height="5"
              stroke={activeTab === "qrcode" ? "white" : "#14b8a6"}
              strokeWidth="1.2"
              fill="none"
            />
            <rect
              x="9"
              y="2"
              width="5"
              height="5"
              stroke={activeTab === "qrcode" ? "white" : "#14b8a6"}
              strokeWidth="1.2"
              fill="none"
            />
            <rect
              x="2"
              y="9"
              width="5"
              height="5"
              stroke={activeTab === "qrcode" ? "white" : "#14b8a6"}
              strokeWidth="1.2"
              fill="none"
            />
          </svg>
          <span className="text-sm">QR code</span>
        </div>
      </button>
    </div>
  );
}

// QR Code Preview Component

// Main Component
export default function QRCustomization() {
  const [activeTab, setActiveTab] = useState<"preview" | "qrcode">("preview");
  const dispatch = useDispatch();
  const state = useSelector(selectQRState);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    const validTypes = ["image/jpeg", "image/png", "image/svg+xml"];
    if (!validTypes.includes(file.type)) {
      toast.success("Only JPG, PNG, and SVG files are allowed", {
        autoClose: 2000,
      });
      return;
    }

    if (file.size > 5 * 1024 * 1024) {
      toast.success("File size must be less than 5MB", {
        autoClose: 2000,
      });
      return;
    }

    // Read file and set as logo
    const reader = new FileReader();
    reader.onload = (e) => {
      const result = e.target?.result as string;
      dispatch(setLogoCustom(result));
      toast.success("Logo uploaded successfully!", { autoClose: 2000 });
    };
    reader.readAsDataURL(file);
  };

  const frames = [
    { id: "none", label: "None" },
    { id: "basic", label: "Basic" },
    { id: "round", label: "Round" },
    { id: "card", label: "Card" },
    { id: "minimal", label: "Minimal" },
    { id: "modern", label: "Modern" },
    { id: "classic", label: "Classic" },
    { id: "badge", label: "Badge" },
  ];

  const patterns = [
    { id: "square", label: "Square" },
    { id: "dots", label: "Dots" },
    { id: "rounded", label: "Rounded" },
    { id: "extra-rounded", label: "Extra" },
    { id: "classy", label: "Classy" },
    { id: "classy-rounded", label: "Classy R" },
  ];

  const logos = [
    { id: "twitter", name: "Twitter", icon: "𝕏" },
    { id: "tiktok", name: "TikTok", icon: "♪" },
    { id: "youtube", name: "YouTube", icon: "▶" },
    { id: "instagram", name: "Instagram", icon: "📷" },
    { id: "snapchat", name: "Snapchat", icon: "👻" },
    { id: "linkedin", name: "LinkedIn", icon: "in" },
    { id: "pinterest", name: "Pinterest", icon: "P" },
    { id: "discord", name: "Discord", icon: "💬" },
    { id: "apple", name: "Apple", icon: "" },
    { id: "gmail", name: "Gmail", icon: "📧" },
    { id: "whatsapp", name: "WhatsApp", icon: "📱" },
    { id: "facebook", name: "Facebook", icon: "f" },
    { id: "spotify", name: "Spotify", icon: "🎵" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
            Customize design for the Website URL QR code
          </h1>
          <PreviewQRButtons activeTab={activeTab} onTabChange={setActiveTab} />
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Left Side - Customization Options */}
          <div className="space-y-4">
            {/* QR Code Frame */}
            <CollapsibleSection
              title="QR code frame"
              description="Frames improve your QR code visibility, leading to more scans"
            >
              <div className="grid grid-cols-4 gap-3 mb-6">
                {frames.map((frame) => (
                  <button
                    key={frame.id}
                    onClick={() => dispatch(setFrameStyle(frame.id))}
                    className={`p-3 border-2 rounded-lg transition-all ${
                      state.frame.style === frame.id
                        ? "border-teal-600 bg-teal-50"
                        : "border-gray-200 hover:border-teal-300"
                    }`}
                  >
                    <div className="aspect-square bg-gray-800 rounded mb-2" />
                    <p className="text-xs text-center truncate">
                      {frame.label}
                    </p>
                  </button>
                ))}
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Frame text
                  </label>
                  <input
                    type="text"
                    value={state.frame.text}
                    onChange={(e) => dispatch(setFrameText(e.target.value))}
                    placeholder="Scan me!"
                    className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-teal-600"
                  />
                </div>
                <ColorPicker
                  value={state.frame.color}
                  onChange={(color) => dispatch(setFrameColor(color))}
                  label="Frame color"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <ColorPicker
                  value={state.frame.bgColor}
                  onChange={(color) => dispatch(setFrameBgColor(color))}
                  label="Background color"
                />
                <ColorPicker
                  value={state.frame.textColor}
                  onChange={(color) => dispatch(setFrameTextColor(color))}
                  label="Text color"
                />
              </div>

              <label className="flex items-center gap-2 mt-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={state.frame.transparent}
                  onChange={(e) =>
                    dispatch(setFrameTransparent(e.target.checked))
                  }
                  className="w-4 h-4 text-teal-600 rounded focus:ring-teal-600"
                />
                <span className="text-sm text-gray-700">
                  Transparent background
                </span>
              </label>
            </CollapsibleSection>

            {/* QR Code Pattern */}
            <CollapsibleSection
              title="QR code pattern"
              description="Select a pattern for your QR code and choose colors"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Pattern style
                </label>
                <div className="grid grid-cols-6 gap-3 mb-6">
                  {patterns.map((pattern) => (
                    <button
                      key={pattern.id}
                      onClick={() => dispatch(setPatternStyle(pattern.id))}
                      className={`p-3 border-2 rounded-lg transition-all ${
                        state.pattern.style === pattern.id
                          ? "border-teal-600 bg-teal-50"
                          : "border-gray-200 hover:border-teal-300"
                      }`}
                    >
                      <div className="aspect-square bg-gray-800 rounded" />
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <ColorPicker
                  value={state.pattern.dotColor}
                  onChange={(color) => dispatch(setPatternDotColor(color))}
                  label="Dot color"
                />
                <ColorPicker
                  value={state.pattern.bgColor}
                  onChange={(color) => dispatch(setPatternBgColor(color))}
                  label="Background color"
                />
              </div>

              <label className="flex items-center gap-2 mt-4 cursor-pointer">
                <input
                  type="checkbox"
                  checked={state.pattern.transparent}
                  onChange={(e) =>
                    dispatch(setPatternTransparent(e.target.checked))
                  }
                  className="w-4 h-4 text-teal-600 rounded focus:ring-teal-600"
                />
                <span className="text-sm text-gray-700">
                  Transparent background
                </span>
              </label>
            </CollapsibleSection>

            {/* QR Code Corners */}
            <CollapsibleSection
              title="QR code corners"
              description="Choose your QR code corner style"
            >
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Corner frames style
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    {["none", "circle", "square", "rounded"].map((style) => (
                      <button
                        key={style}
                        onClick={() => dispatch(setCornerFrameStyle(style))}
                        className={`p-3 border-2 rounded-lg transition-all ${
                          state.corners.frameStyle === style
                            ? "border-teal-600 bg-teal-50"
                            : "border-gray-200 hover:border-teal-300"
                        }`}
                      >
                        <div
                          className="w-6 h-6 mx-auto border-2 border-gray-800"
                          style={{
                            borderRadius:
                              style === "circle"
                                ? "50%"
                                : style === "rounded"
                                ? "4px"
                                : "0",
                          }}
                        />
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Corner dots type
                  </label>
                  <div className="grid grid-cols-3 gap-2">
                    {["none", "dot", "square"].map((type) => (
                      <button
                        key={type}
                        onClick={() => dispatch(setCornerDotType(type))}
                        className={`p-3 border-2 rounded-lg transition-all ${
                          state.corners.dotType === type
                            ? "border-teal-600 bg-teal-50"
                            : "border-gray-200 hover:border-teal-300"
                        }`}
                      >
                        {type !== "none" && (
                          <div
                            className="w-4 h-4 mx-auto bg-gray-800"
                            style={{
                              borderRadius: type === "dot" ? "50%" : "0",
                            }}
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <ColorPicker
                  value={state.corners.frameColor}
                  onChange={(color) => dispatch(setCornerFrameColor(color))}
                  label="Corner frame color"
                />
                <ColorPicker
                  value={state.corners.dotColor}
                  onChange={(color) => dispatch(setCornerDotColor(color))}
                  label="Corner dots color"
                />
              </div>
            </CollapsibleSection>

            {/* Add Logo */}
            <CollapsibleSection
              title="Add logo"
              description="Personalise your QR code by adding a logo or image"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-3">
                  Select logo
                </label>
                <div className="flex flex-wrap gap-3 mb-6">
                  {logos.map((logo) => (
                    <button
                      key={logo.id}
                      onClick={() => dispatch(setLogoPreset(logo.id))}
                      title={logo.name}
                      className="w-12 h-12 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 hover:from-teal-50 hover:to-teal-100 transition-all flex items-center justify-center text-xl group relative border-2 border-transparent hover:border-teal-600"
                    >
                      {logo.icon}
                    </button>
                  ))}
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Upload your own logo
                  </label>
                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/jpeg,image/png,image/svg+xml"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDragOver={(e) => {
                      e.preventDefault();
                      e.currentTarget.classList.add(
                        "border-teal-600",
                        "bg-teal-50"
                      );
                    }}
                    onDragLeave={(e) => {
                      e.currentTarget.classList.remove(
                        "border-teal-600",
                        "bg-teal-50"
                      );
                    }}
                    onDrop={(e) => {
                      e.preventDefault();
                      e.currentTarget.classList.remove(
                        "border-teal-600",
                        "bg-teal-50"
                      );
                      const file = e.dataTransfer.files[0];
                      if (file) {
                        const input = fileInputRef.current;
                        if (input) {
                          const dataTransfer = new DataTransfer();
                          dataTransfer.items.add(file);
                          input.files = dataTransfer.files;
                          handleFileUpload({ target: input } as any);
                        }
                      }
                    }}
                    className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-teal-600 hover:bg-teal-50 transition-all cursor-pointer"
                  >
                    <div className="flex flex-col items-center gap-3">
                      <Upload className="w-12 h-12 text-gray-400" />
                      <p className="text-sm text-gray-600 font-medium">
                        Upload image (jpg, png, svg)
                      </p>
                      <p className="text-xs text-gray-400">Maximum size: 5MB</p>
                    </div>
                  </div>
                </div>
              </div>
            </CollapsibleSection>
          </div>

          {/* Right Side - Preview */}
          <div className="lg:sticky lg:top-8 h-fit">
            <MobileFrame>
              <QRPreview state={state} />
            </MobileFrame>
          </div>
        </div>
      </div>
    </div>
  );
}
