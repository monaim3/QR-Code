"use client";

import ClearFilter from "../qr-codes/filters/ClearFilter";
import { DateRangePicker } from "./DateRangePicker";
import ExportData from "./ExportData";
import QrCodeSearchDropdown from "./QrCodeSearchDropdown";
import DropDownFilter from "./DropDownFilter";
import { useState } from "react";

export default function AnalyticsFilter() {
  const [searchName, setSearchName] = useState("");
  const [selectedName, setSelectedName] = useState<string[]>([]);
  const [selectedOs, setSelectedOs] = useState<string[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<string[]>([]);
  const [selectedCity, setSelectedCity] = useState<string[]>([]);

  const handleClearFilter = () => {
    setSearchName("");
    setSelectedName([]);
    setSelectedOs([]);
    setSelectedCountry([]);
    setSelectedCity([]);
  };

  return (
    <div className="flex flex-col items-start gap-4 self-stretch w-full">
      <div className="flex items-center justify-between self-stretch">
        <DateRangePicker />

        <ExportData />
      </div>

      <div className="flex items-center gap-4 justify-between w-full">
        <div className="flex items-center gap-4">
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

        <ClearFilter
          disabled={
            !searchName &&
            !selectedName.length &&
            !selectedOs.length &&
            !selectedCountry.length &&
            !selectedCity.length
          }
          onClick={handleClearFilter}
        />
      </div>
    </div>
  );
}
