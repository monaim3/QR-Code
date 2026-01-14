"use client";

import ClearFilter from "../qr-codes/filters/ClearFilter";
import { DateRangePicker } from "./DateRangePicker";
import ExportData from "./ExportData";
import QrCodeSearchDropdown from "./QrCodeSearchDropdown";
import DropDownFilter from "./DropDownFilter";

export default function AnalyticsFilter() {
  return (
    <div className="flex flex-col items-start gap-4 self-stretch font-roboto w-full">
      <div className="flex items-center justify-between self-stretch">
        <DateRangePicker />

        <ExportData />
      </div>

      <div className="flex items-center gap-4 justify-between w-full">
        <div className="flex items-center gap-4">
          <QrCodeSearchDropdown />
          <DropDownFilter
            options={["Windows", "Mac", "Linux", "Android", "iOS"]}
            label="Operating systems"
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
          />
          <DropDownFilter
            options={["New York", "Los Angeles", "Chicago", "Houston", "Miami"]}
            label="Cities"
          />
        </div>

        <ClearFilter />
      </div>
    </div>
  );
}
