export interface ColorPalette {
  primary: string;
  secondary: string;
}

export interface DocumentInfo{
  companyName: string | null,
  title: string | null,
  fileDescription: string | null,
  website: string | null,
}

export interface PdfSlice {
  colorPalette: ColorPalette[];
  primaryColor: string;
  secondaryColor: string;
  pdfFile: string,
  documentInfo: DocumentInfo,
  welcomeScreen: string;
  qrCodeName: string;
  isPreviewWelcomeScreen: boolean,
}