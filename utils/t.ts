import { useSelector } from "react-redux";
import { RootState } from "@/store";

export const useT = () => {
  const { language, translations } = useSelector(
    (state: RootState) => state.i18n
  );

  return (key: string) => {
    const dict = translations?.[language];

    return dict?.[key] ?? translations?.en?.[key] ?? key;
  };
};