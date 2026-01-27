export interface ColorPalette {
  primary: string;
  secondary: string;
}

export interface PersonalInfo {
  fullName: string;
  image: string | null;
}

export interface ContactDetails {
  phoneNumber: string;
  altPhoneNumber: string;
  altPhoneNumbers: string[];
  website: string;
  email: string;
  altEmails: string[];
}

export interface SocialChannel {
  id: string;
  name: string;
  url: string;
}

export interface VCardSlice {
  colorPalette: ColorPalette[];
  primaryColor: string;
  secondaryColor: string;
  personalInfo: PersonalInfo;
  contactDetails: ContactDetails;
  companyName: string;
  companyTitle: string;
  summary: string;
  street: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  addressUrl: string;
  socialChannels: SocialChannel[];
  welcomeScreen: string;
  qrCodeName: string;
}
