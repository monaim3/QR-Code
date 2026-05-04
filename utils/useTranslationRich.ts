import { useAppSelector } from "@/store/hooks";
import { renderTranslation } from "@/utils/textHelper";

export const useTranslationRich = () => {
  const { translations, language } = useAppSelector((s) => s.i18n);

  const t = (key: string) => translations[language]?.[key] || key;

  const tr = (
    key: string,
    components: Record<string, (children: React.ReactNode) => React.ReactNode>
  ) => {
    return renderTranslation(t(key), components);
  };

  return { t, tr };
};