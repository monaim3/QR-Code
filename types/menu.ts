export interface ColorPalette {
  primary: string;
  secondary: string;
}

export interface RestaurantInfo {
  name: string;
  description: string;
  image: string | null;
}

export interface MenuProduct {
  id: string;
  name: string;
  nameTranslation: string;
  description: string;
  descriptionTranslation: string;
  price: string;
  image: string | null;
  allergens: string[];
  isVisible: boolean;
}

export interface MenuSection {
  id: string;
  name: string;
  nameTranslation: string;
  description: string;
  descriptionTranslation: string;
  isVisible: boolean;
  products: MenuProduct[];
}

export interface MenuSlice {
  colorPalette: ColorPalette[];
  primaryColor: string;
  secondaryColor: string;
  restaurantInfo: RestaurantInfo;
  welcomeScreen: string;
  qrCodeName: string;
  isPreviewWelcomeScreen: boolean;
  sections: MenuSection[];
}
