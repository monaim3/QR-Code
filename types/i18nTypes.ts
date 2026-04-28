
import { LanguageCode } from "@/constants/languages";

export interface Translations {
  [key: string]: string;
}

export interface I18nState {
  language: LanguageCode;
  translations: {
    [key in LanguageCode]?: Translations;
  };
}
