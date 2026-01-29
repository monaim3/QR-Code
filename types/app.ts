export interface ColorPalette {
  primary: string;
  secondary: string;
}

export interface Button{
  text: string,
  url: string,
}

export interface AppInfo{
  image: string | null,
  appName: string,
  developer: string,
  description: string,
  buttons: Button[],
}

export interface AppSlice {
  colorPalette: ColorPalette[];
  primaryColor: string;
  secondaryColor: string;
  appInfo: AppInfo;
  qrCodeName: string;
}