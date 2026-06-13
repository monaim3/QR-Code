import { useSelector } from "react-redux";
import { RootState } from "@/store";
import type { BatchQueryParams } from "@/store/api/analyticsApi";

export const useAnalyticsParams = (): BatchQueryParams => {
  const { from, to, scanGroupBy, timezone, qrCodeIds, os, countries, cities } =
    useSelector((state: RootState) => state.analytics);
  const language = useSelector((state: RootState) => state.i18n.language);

  return { from, to, scanGroupBy, timezone, language, qrCodeIds, os, countries, cities };
};
