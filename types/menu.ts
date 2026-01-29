export interface ColorPalette {
  primary: string;
  secondary: string;
}

export interface RestaurantInfo {
  name: string;
  description: string;
  image: string | null;
}

export interface MenuSlice {
  colorPalette: ColorPalette[];
  primaryColor: string;
  secondaryColor: string;
  restaurantInfo: RestaurantInfo;
  welcomeScreen: string;
  qrCodeName: string;
  isPreviewWelcomeScreen: boolean;
}
