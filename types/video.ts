
export interface ColorPalette {
  primary: string;
  secondary: string;
}

export interface Button{
    text: string,
    url: string,
}

export interface VideoInfo{
 title: string,
 description: string,
 buttons: Button[],
}

export interface video{
  title: string,
  url: string,
}

export interface VideoSlice {
  colorPalette: ColorPalette[];
  primaryColor: string;
  secondaryColor: string;
  videoInfo: VideoInfo,
  videos: video[],
  welcomeScreen: string;
  isShare: boolean;
  isDefault: boolean
  qrCodeName: string;
  isPreviewWelcomeScreen: boolean,
}