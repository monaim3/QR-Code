import { ColorPalette, SocialChannel } from "./vCard";

export interface BusinessButton {
  id: string;
  text: string;
  url: string;
}

export interface BusinessInfo {
  companyName: string;
  title: string;
  subTitle: string;
  buttons: BusinessButton[];
}

export interface ContactInfo {
  fullName: string;
  phoneNumber: string;
  altPhoneNumber: string;
  altPhoneNumbers: string[];
  website: string;
  email: string;
  altEmails: string[];
}

export interface Time {
  hour: string;
  minute: string;
  amPm: string | null;
}

export interface TimeSlot {
  open: Time;
  close: Time;
}

export interface OpeningTime {
  day: string;
  times: [TimeSlot, TimeSlot?];
}

export type TimeFormat = "AM/PM" | "24-hour" | "24/7";

export interface BusinessSlice {
  colorPalette: ColorPalette[];
  primaryColor: string;
  secondaryColor: string;
  activeColorIndex: number;
  businessImage: string | null;
  businessInfo: BusinessInfo;
  timeFormat: TimeFormat;
  weeklyOpeningHours: [TimeSlot, TimeSlot?];
  useWeekdaysTemplate: boolean;
  openingHours: OpeningTime[];
  contactInfo: ContactInfo;
  summary: string;
  street: string;
  postalCode: string;
  city: string;
  state: string;
  country: string;
  addressUrl: string;
  socialChannels: SocialChannel[];
  facilities: string[];
  welcomeScreen: string;
  qrCodeName: string;
  isPreviewWelcomeScreen: boolean;
}
