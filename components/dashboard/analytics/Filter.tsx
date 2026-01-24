"use client";

import ClearFilter from "../qr-codes/filters/ClearFilter";
import { DateRangePicker } from "./DateRangePicker";
import ExportData from "./ExportData";
import QrCodeSearchDropdown from "./QrCodeSearchDropdown";
import DropDownFilter from "./DropDownFilter";
import { useState } from "react";
import AdjustmentsHorizontal from "@/components/icons/adjustments-horizontal";
import Close from "@/components/icons/close";

export default function AnalyticsFilter() {
  const [searchName, setSearchName] = useState("");
  const [selectedName, setSelectedName] = useState<string[]>([]);
  const [selectedOs, setSelectedOs] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string[]>([]);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClearFilter = () => {
    setSearchName("");
    setSelectedName([]);
    setSelectedOs([]);
    setSelectedCountry([]);
    setSelectedCity([]);
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

          {/* <div
          className={`text-[10px] leading-[10px] text-white bg-[var(--Blue)] w-4 h-4 p-[2px] rounded-full flex items-center justify-center absolute -top-2 -right-2 ${totalFilter > 0 ? "block" : "hidden"}`}
        >
          {totalFilter}
        </div> */}
        </button>
      </div>

      <div
        className={`flex-col desktopDashboard:flex-row items-center gap-4 justify-between w-full bg-white desktopDashboard:bg-transparent p-4 desktopDashboard:p-0 rounded-[var(--Corner-Radius-10)] desktopDashboard:rounded-none ${isDrawerOpen ? "flex" : "hidden desktopDashboard:flex"} animate-in fade-in zoom-in duration-150`}
      >
        <div className="flex flex-col desktopDashboard:flex-row items-center gap-4 desktopDashboard:w-auto w-full">
          <QrCodeSearchDropdown
            search={searchName}
            setSearch={setSearchName}
            selected={selectedName}
            setSelected={setSelectedName}
          />
          <DropDownFilter
            options={["Windows", "Mac", "Linux", "Android", "iOS"]}
            label="Operating systems"
            selected={selectedOs}
            setSelected={setSelectedOs}
          />
          <DropDownFilter
            options={[
              "United States",
              "Canada",
              "United Kingdom",
              "Australia",
              "New Zealand",
            ]}
            label="Countries"
            selected={selectedCountry}
            setSelected={setSelectedCountry}
          />
          <DropDownFilter
            options={["New York", "Los Angeles", "Chicago", "Houston", "Miami"]}
            label="Cities"
            selected={selectedCity}
            setSelected={setSelectedCity}
          />
        </div>

        <div className="flex justify-between items-center gap-4 w-full desktopDashboard:w-auto">
          <ClearFilter
            disabled={
              !searchName &&
              !selectedName.length &&
              !selectedOs.length &&
              !selectedCountry.length &&
              !selectedCity.length
            }
            onClick={handleClearFilter}
            isHidden={false}
          />

          <button
            onClick={() => setIsDrawerOpen(false)}
            className="text-[var(--Dark-gray)] text-[14px] leading-[22px] flex items-center gap-2 desktopDashboard:hidden"
          >
            Close filters <Close />
          </button>
        </div>
      </div>
    </div>
  );
}
