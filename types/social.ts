
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
  icon:  React.ComponentType | null,
  description: string | null,
}

export interface SocialSlice {
  colorPalette: ColorPalette[];
  primaryColor: string;
  secondaryColor: string;
  socialInfo: socialInfo,
  carousel: string[],
  availableChannels: SocialChannel[],
  socialChannels: SocialChannel[];
  welcomeScreen: string;
  qrCodeName: string;
  isPreviewWelcomeScreen: boolean,
}