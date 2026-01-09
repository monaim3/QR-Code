"use client";

import SearchBar from "./SearchBar";
import QrCodeStatus from "./QrCodeStatus";
import QrCodeType from "./QrCodeType";
import SortBy from "./SortBy";
import CheckBox from "./CheckBox";
import ClearFilter from "./ClearFilter";

export default function Filters() {
  return (
    <div className="flex items-center gap-4 px-4 h-10 w-full">
      <CheckBox />

      <SearchBar />

      {/* Line */}
      <div className="w-[1px] h-6 bg-[var(--boarder-grey-50)]" />

      <QrCodeStatus />
      <QrCodeType />
      <SortBy />
      <ClearFilter disabled />
    </div>
  );
}
