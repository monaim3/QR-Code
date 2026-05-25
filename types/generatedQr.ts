export interface QrFrame {
  text: string;
  type: string;
  color: string;
  textColor: string;
  background: string;
}
 
export interface QrImage {
  selected: string | null;
  uploaded: string | null;
}
 
export interface QrOptions {
  mode: string;
  typeNumber: number;
  errorCorrectionLevel: string;
  byteModeStringEncoding: string;
}
 
export interface DotsOptions {
  type: string;
  color: string;
}
 
export interface ImageOptions {
  margin: number;
  imageSize: number;
  hideBackgroundDots: boolean;
}
 
export interface BackgroundOptions {
  color: string;
}
 
export interface CornersDotOptions {
  type: string;
  color: string;
}
 
export interface CornersSquareOptions {
  type: string;
  color: string;
}
 
export interface QrDesign {
  data: string;
  type: string;
  frame: QrFrame;
  image: QrImage;
  width: number;
  height: number;
  margin: number;
  qrOptions: QrOptions;
  dotsOptions: DotsOptions;
  imageOptions: ImageOptions;
  backgroundOptions: BackgroundOptions;
  cornersDotOptions: CornersDotOptions;
  cornersSquareOptions: CornersSquareOptions;
}
 
export interface QrContent {
  url: string;
  type: string;
}
 
export interface UserSettingsJson {
  hideFooter: boolean;
}
 
export interface QrCode {
  id: string;
  createdAt: string;
  updatedAt: string;
  name: string;
  uri: string;
  content: QrContent;
  qrDesign: QrDesign;
  disabled: boolean;
  autoDisabled: boolean;
  isPreview: boolean;
  containsMalwareMedia: boolean;
  isApiGenerated: boolean;
  scansAmount: string;
  categoryType: string;
  userSettingsJson: UserSettingsJson;
}