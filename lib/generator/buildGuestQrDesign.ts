import type { RootState } from "@/store";
import { getSocialIconPath } from "@/lib/utils/getSocialIconPath";

type QrSliceState = RootState["qr"];

export function buildGuestQrDesign(qr: QrSliceState) {
  return {
    frame: {
      type: qr.selectedFrameIndex === 0 ? "default" : qr.selectedFrameIndex.toString(),
      text: qr.frameText,
      color: qr.frameColor,
      textColor: qr.frameTextColor,
      background: qr.frameBackgroundColor.toLowerCase(),
    },
    width: 210,
    height: 210,
    type: "svg" as const,
    data: "",
    image: {
      selected: getSocialIconPath(qr.selectedLogo),
      uploaded: null,
    },
    margin: 0,
    qrOptions: {
      mode: "Byte",
      typeNumber: 0,
      errorCorrectionLevel: "Q",
      byteModeStringEncoding: "UTF-8",
    },
    imageOptions: {
      margin: 0,
      imageSize: 0.5,
      hideBackgroundDots: true,
    },
    dotsOptions: {
      type: qr.patternStyle,
      color: qr.dotColor,
    },
    cornersSquareOptions: {
      color: qr.cornerFrameColor,
      ...(qr.cornerFrameStyleUI !== "none" && {
        type: qr.cornerFrameStyleUI,
      }),
    },
    cornersDotOptions: {
      color: qr.cornerDotColor,
      ...(qr.cornerDotTypeUI !== "none" && {
        type: qr.cornerDotTypeUI,
      }),
    },
    backgroundOptions: {
      color: qr.backgroundColor,
    },
  };
}
