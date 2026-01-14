"use client";

import React, { useState, useEffect, useRef } from "react";
import QRCodeStyling from "qr-code-styling";
import { ChromePicker } from "react-color";
import { Upload, X } from "lucide-react";

import MobileFrame from "@/components/common/MobileFrame";
import QRPreview from "@/components/common/QRPreview";
import ColorInput from "@/components/common/ColorInput";
import Accordion from "@/components/common/Accordion";
import Container from "@/components/common/parent-container";
import LogoSelector from "@/components/common/LogoSelector";
import PatternPreview from "@/components/common/PatternPreview";
import CornerStylePreview from "@/components/common/CornerStylePreview";

export default function QRCodeCustomizer() {
  const [view, setView] = useState("preview");
  const qrRef = useRef(null);
  const mobileQrRef = useRef(null);
  const qrCodeRef = useRef(null);
  const mobileQrCodeRef = useRef(null);

  const [dotColor, setDotColor] = useState("#000000");
  const [backgroundColor, setBackgroundColor] = useState("#FFFFFF");
  const [transparentBg, setTransparentBg] = useState(false);
  const [cornerFrameColor, setCornerFrameColor] = useState("#000000");
  const [cornerDotColor, setCornerDotColor] = useState("#000000");
  const [patternStyle, setPatternStyle] = useState("rounded");
  const [cornerFrameStyle, setCornerFrameStyle] = useState("extra-rounded");
  const [cornerDotType, setCornerDotType] = useState("dot");
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [customLogo, setCustomLogo] = useState(null);

  const patternOptions = [
    "rounded",
    "dots",
    "classy",
    "classy-rounded",
    "square",
    "extra-rounded",
  ];
  const cornerFrameOptions = ["none", "square", "dot", "extra-rounded"];
  const cornerDotOptions = ["none", "dot", "square"];

  // Helper function to create icon image for QR code
  const createIconImage = async (logoName) => {
    const socialLogos = {
      Facebook: { Icon: FaFacebook, color: "#1877F2" },
      Instagram: { Icon: FaInstagram, color: "#E4405F" },
      Twitter: { Icon: FaTwitter, color: "#1DA1F2" },
      LinkedIn: { Icon: FaLinkedin, color: "#0A66C2" },
      YouTube: { Icon: FaYoutube, color: "#FF0000" },
      TikTok: { Icon: FaTiktok, color: "#000000" },
      WhatsApp: { Icon: FaWhatsapp, color: "#25D366" },
      Telegram: { Icon: FaTelegram, color: "#0088CC" },
    };

    if (!socialLogos[logoName]) return null;

    const { color } = socialLogos[logoName];

    // Create a simple colored circle with first letter as fallback
    const canvas = document.createElement("canvas");
    canvas.width = 100;
    canvas.height = 100;
    const ctx = canvas.getContext("2d");

    // White background with rounded corners
    ctx.fillStyle = "white";
    ctx.beginPath();
    ctx.roundRect(0, 0, 100, 100, 15);
    ctx.fill();

    // Colored circle
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.arc(50, 50, 35, 0, Math.PI * 2);
    ctx.fill();

    // White icon letter
    ctx.fillStyle = "white";
    ctx.font = "bold 40px Arial";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(logoName[0], 50, 50);

    return canvas.toDataURL();
  };

  // Update QR codes when any option changes
  useEffect(() => {
    if (!mobileQrRef.current) return;

    const updateQRCode = async () => {
      const qrOptions = {
        data: "https://www.linkedin.com/mynetwork/grow/",
        width: 250,
        height: 250,
        margin: 10,
        dotsOptions: {
          color: dotColor,
          type: patternStyle,
        },
        backgroundOptions: {
          color: transparentBg ? "transparent" : backgroundColor,
        },
        cornersSquareOptions:
          cornerFrameStyle === "none"
            ? undefined
            : {
                color: cornerFrameColor,
                type: cornerFrameStyle,
              },
        cornersDotOptions:
          cornerDotType === "none"
            ? undefined
            : {
                color: cornerDotColor,
                type: cornerDotType,
              },
      };

      // Priority: Social media icon > Custom upload
      if (selectedLogo) {
        // Use social media icon (first priority)
        const iconDataUrl = await createIconImage(selectedLogo);
        if (iconDataUrl) {
          qrOptions.image = iconDataUrl;
          qrOptions.imageOptions = {
            hideBackgroundDots: true,
            imageSize: 0.3,
            margin: 8,
          };
        }
      } else if (customLogo) {
        qrOptions.image = customLogo;
        qrOptions.imageOptions = {
          hideBackgroundDots: true,
          imageSize: 0.3,
          margin: 8,
        };
      }

      mobileQrRef.current.innerHTML = "";

      if (mobileQrCodeRef.current) {
        mobileQrCodeRef.current.update(qrOptions);
      } else {
        mobileQrCodeRef.current = new QRCodeStyling(qrOptions);
      }

      mobileQrCodeRef.current.append(mobileQrRef.current);
    };

    updateQRCode();
  }, [
    dotColor,
    backgroundColor,
    transparentBg,
    cornerFrameColor,
    cornerDotColor,
    patternStyle,
    cornerFrameStyle,
    cornerDotType,
    selectedLogo,
    customLogo,
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Container>
        <div className="flex flex-col desktop:flex-row gap-8">
          <div className="flex-1 flex flex-col gap-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">
              QR Code Customizer
            </h1>

            <Accordion
              title="QR code pattern"
              description="Select a pattern for your QR code and choose colors"
              defaultOpen={true}
            >
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Pattern style
                </label>
                <div className="grid grid-cols-6 gap-3">
                  {patternOptions.map((pattern) => (
                    <PatternPreview
                      key={pattern}
                      type={pattern}
                      isSelected={patternStyle === pattern}
                      onClick={() => setPatternStyle(pattern)}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <ColorInput
                  label="Dot color"
                  value={dotColor}
                  onChange={setDotColor}
                  showColorIndicator={true}
                  id="dot-color"
                />
                <ColorInput
                  label="Background color"
                  value={backgroundColor}
                  onChange={setBackgroundColor}
                  showColorIndicator={true}
                  id="bg-color"
                />
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="transparent-bg"
                  checked={transparentBg}
                  onChange={(e) => setTransparentBg(e.target.checked)}
                  className="w-4 h-4 text-blue-600 rounded focus:ring-blue-500"
                />
                <label
                  htmlFor="transparent-bg"
                  className="text-sm text-gray-700"
                >
                  Transparent background
                </label>
              </div>
            </Accordion>

            <Accordion
              title="QR code corners"
              description="Choose your QR code corner style"
              defaultOpen={true}
            >
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Corner frames style
                </label>
                <div className="grid grid-cols-6 gap-3">
                  {cornerFrameOptions.map((style) => (
                    <CornerStylePreview
                      key={style}
                      type={style}
                      isSelected={cornerFrameStyle === style}
                      onClick={() => setCornerFrameStyle(style)}
                      isFrame={true}
                    />
                  ))}
                </div>
              </div>

              <div className="w-full">
                <label className="block text-sm font-medium text-gray-900 mb-3">
                  Corner dots type
                </label>
                <div className="grid grid-cols-6 gap-3">
                  {cornerDotOptions.map((style) => (
                    <CornerStylePreview
                      key={style}
                      type={style}
                      isSelected={cornerDotType === style}
                      onClick={() => setCornerDotType(style)}
                      isFrame={false}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <ColorInput
                  label="Corner frames color"
                  value={cornerFrameColor}
                  onChange={setCornerFrameColor}
                  showColorIndicator={true}
                  id="corner-frame-color"
                />
                <ColorInput
                  label="Corner dots color"
                  value={cornerDotColor}
                  onChange={setCornerDotColor}
                  showColorIndicator={true}
                  id="corner-dot-color"
                />
              </div>
            </Accordion>

            <Accordion
              title="Logo"
              description="Add a logo to your QR code"
              defaultOpen={true}
            >
              <LogoSelector
                selectedLogo={selectedLogo}
                onLogoChange={setSelectedLogo}
                customLogo={customLogo}
                onCustomLogoUpload={setCustomLogo}
              />
            </Accordion>
          </div>

          <div className="flex flex-col items-center justify-start space-y-6 sticky top-8">
            <div className="flex gap-4">
              <button
                onClick={() => setView("preview")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  view === "preview"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
                }`}
              >
                Preview
              </button>
              <button
                onClick={() => setView("qrcode")}
                className={`px-6 py-3 rounded-lg font-medium transition-all ${
                  view === "qrcode"
                    ? "bg-blue-600 text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-300 hover:border-gray-400"
                }`}
              >
                QR code
              </button>
            </div>

            <div className="hidden desktop:flex desktop:flex-col desktop:gap-4 desktop:sticky h-[752px] ">
              <MobileFrame>
                {view === "preview" ? (
                  <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg overflow-hidden">
                    <img
                      src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=800&fit=crop"
                      alt="Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                ) : (
                  <QRPreview mobileQrRef={mobileQrRef} />
                )}
              </MobileFrame>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
