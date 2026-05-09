import { useAppSelector } from "@/store/hooks";
import { renderTranslation } from "@/utils/textHelper";

export const useTranslationRich = () => {
  const { translations, language } = useAppSelector((s) => s.i18n);

  const t = (key: string) => translations[language]?.[key] || key;

   // ✅ ADD HERE (inside hook)
  const resolveKeys = (text: string) => {
    return text.replace(/\{([^}]+)\}/g, (_, key) => {
      return translations[language]?.[key] || key;
    });
  };

  const tr = (
    key: string,
    components: Record<
      string,
      (children: React.ReactNode) => React.ReactNode
    >
  ) => {
    const raw = t(key);
    const resolved = resolveKeys(raw);

    return renderTranslation(resolved, components);
  };

  return { t, tr };
};