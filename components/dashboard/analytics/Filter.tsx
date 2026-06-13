"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";
import {
  setQrCodeIds,
  setOs,
  setCountries,
  setCities,
  clearFilters,
} from "@/store/slices/analyticsSlice";
import { useGetAnalyticsFiltersBatchQuery } from "@/store/api/analyticsApi";
import ClearFilter from "../qr-codes/filters/ClearFilter";
import { DateRangePicker } from "./DateRangePicker";
import ExportData from "./ExportData";
import QrCodeSearchDropdown from "./QrCodeSearchDropdown";
import DropDownFilter from "./DropDownFilter";
import AdjustmentsHorizontal from "@/components/icons/adjustments-horizontal";
import Close from "@/components/icons/close";
import { useT } from "@/utils/t";

export default function AnalyticsFilter() {
  const t = useT();
  const dispatch = useDispatch();
  const { qrCodeIds, os, countries, cities } = useSelector(
    (state: RootState) => state.analytics
  );
  const language = useSelector((state: RootState) => state.i18n.language);

  const { data: filtersData } = useGetAnalyticsFiltersBatchQuery({ language });

  const [searchName, setSearchName] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClearFilter = () => {
    dispatch(clearFilters());
    setSearchName("");
  };

  const setOsWrapper: React.Dispatch<React.SetStateAction<string[]>> = (val) => {
    dispatch(setOs(typeof val === "function" ? val(os) : val));
  };

  const setCountriesWrapper: React.Dispatch<
    React.SetStateAction<string[]>
  > = (val) => {
    dispatch(setCountries(typeof val === "function" ? val(countries) : val));
  };

  const setCitiesWrapper: React.Dispatch<React.SetStateAction<string[]>> = (
    val
  ) => {
    dispatch(setCities(typeof val === "function" ? val(cities) : val));
  };

  const setQrCodeIdsWrapper: React.Dispatch<
    React.SetStateAction<string[]>
  > = (val) => {
    dispatch(
      setQrCodeIds(typeof val === "function" ? val(qrCodeIds) : val)
    );
  };

  return (
    <div className="flex flex-col items-start desktopDashboard:gap-4 gap-2 self-stretch w-full">
      <div className="flex items-center justify-between gap-2 self-stretch w-full bg-white desktopDashboard:bg-transparent p-4 desktopDashboard:p-0 rounded-[var(--Corner-Radius-10)] desktopDashboard:rounded-none">
        <DateRangePicker />

        <ExportData />

        <button
          onClick={() => setIsDrawerOpen(true)}
          className="desktopDashboard:hidden flex w-10 h-10 p-2 justify-center items-center gap-2 bg-white border border-[var(--Boarder-Grey)] rounded-[var(--Corner-Radius-8)] shrink-0 relative"
        >
          <AdjustmentsHorizontal />
        </button>
      </div>

      <div
        className={`flex-col desktopDashboard:flex-row items-center gap-4 justify-between w-full bg-white desktopDashboard:bg-transparent p-4 desktopDashboard:p-0 rounded-[var(--Corner-Radius-10)] desktopDashboard:rounded-none ${isDrawerOpen ? "flex" : "hidden desktopDashboard:flex"} animate-in fade-in zoom-in duration-150`}
      >
        <div className="flex flex-wrap flex-col desktopDashboard:flex-row items-center gap-4 desktopDashboard:w-auto w-full">
          <QrCodeSearchDropdown
            options={filtersData?.qrCodes ?? []}
            search={searchName}
            setSearch={setSearchName}
            selected={qrCodeIds}
            setSelected={setQrCodeIdsWrapper}
          />
          <DropDownFilter
            options={filtersData?.os ?? []}
            label={t("public__qr__statistics__filter__os__title")}
            selected={os}
            setSelected={setOsWrapper}
          />
          <DropDownFilter
            options={filtersData?.countries ?? []}
            label={t("public__qr__statistics__filter__countries__title")}
            selected={countries}
            setSelected={setCountriesWrapper}
          />
          <DropDownFilter
            options={filtersData?.cities ?? []}
            label={t("public__qr__statistics__filter__cities__title")}
            selected={cities}
            setSelected={setCitiesWrapper}
          />
        </div>

        <div className="flex justify-between items-center gap-4 w-full desktopDashboard:w-auto shrink-0">
          <ClearFilter
            disabled={
              !searchName &&
              !qrCodeIds.length &&
              !os.length &&
              !countries.length &&
              !cities.length
            }
            onClick={handleClearFilter}
            isHidden={false}
          />

          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-[var(--Dark-gray)] text-[14px] leading-[22px] flex items-center gap-2 desktopDashboard:hidden"
          >
            {t("public__dashboard__analytics__controls__close_filters")}{" "}
            <Close />
          </button>
        </div>
      </div>
    </div>
  );
}
