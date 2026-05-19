import { UploadLogoResponse } from "@/store/slices/qrSlice";
import { ProfileImage } from "./vCard";

export interface ColorPalette {
  primary: string;
  secondary: string;
}

export interface DocumentInfo {
  companyName: string | null;
  title: string | null;
  fileDescription: string | null;
  website: string | null;
}

export interface PdfSlice {
  colorPalette: ColorPalette[];
  primaryColor: string;
  secondaryColor: string;
  activeColorIndex: number;
  pdfFile: string;
  documentInfo: DocumentInfo;
  welcomeScreen: string;
  qrCodeName: string;
  defaultState: boolean;
  isPreviewWelcomeScreen: boolean;
  showPdfOnly: boolean;
  uploadedWelcomeScreen: ProfileImage | UploadLogoResponse;
  uploadedPdfFile: UploadLogoResponse | null;
}
