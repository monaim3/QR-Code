
export interface ColorPalette {
  primary: string;
  secondary: string;
}

export interface socialInfo{
 headLine: string,
 description: string,
}

export interface SocialChannel {
  id: string;
  name: string;
  isIcon: boolean, 
  url: string | null;
  icon:  string | null,
  description: string | null,
}

export interface SocialSlice {
  colorPalette: ColorPalette[];
  primaryColor: string;
  secondaryColor: string;
  activeColorIndex: number;
  socialInfo: socialInfo,
  carousels: string[],
  availableChannels: SocialChannel[],
  socialChannels: SocialChannel[];
  welcomeScreen: string;
  isDefault: boolean;
  qrCodeName: string;
  isPreviewWelcomeScreen: boolean,
  customFormOpen: boolean;
  customFormName: string;
  customFormUrl: string;
}