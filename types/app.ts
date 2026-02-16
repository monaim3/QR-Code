export interface ColorPalette {
  primary: string;
  secondary: string;
}

export default interface Button{
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

export interface AppLinks{
  id: number,
  storeName: string,
  title: string,
  storeUrl: string,
}

export interface AppSlice {
  colorPalette: ColorPalette[];
  primaryColor: string;
  secondaryColor: string;
  activeColorIndex: number;
  appInfo: AppInfo;
  welcomeScreen: string;
  qrCodeName: string;
  appLinks: AppLinks[],
  appStoreLinks: AppLinks[];
  appDefaultState: boolean;
  isPreviewWelcomeScreen: boolean,
}