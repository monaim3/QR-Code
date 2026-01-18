"use client";

import SearchBar from "./SearchBar";
import QrCodeStatus from "./QrCodeStatus";
import QrCodeType from "./QrCodeType";
import SortBy from "./SortBy";
import CheckBox from "./CheckBox";
import ClearFilter from "./ClearFilter";
import { useState } from "react";
import AdjustmentsHorizontal from "@/components/icons/adjustments-horizontal";

interface Props {
  allSelected: boolean;
  onSelectAll: () => void;
}

export default function Filters({ allSelected, onSelectAll }: Props) {
  const [query, setQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSortBy, setSelectedSortBy] = useState("");

  const handleClearFilter = () => {
    setQuery("");
    setSelectedStatus("");
    setSelectedTypes([]);
    setSelectedSortBy("");
  };

  return (
    <div className="flex items-center gap-4 px-4 py-4 desktopDashboard:py-0 desktopDashboard:h-10 h-[72px] w-full bg-white desktopDashboard:bg-transparent rounded-[var(--Corner-Radius-10)] desktopDashboard:rounded-none">
      <CheckBox checked={allSelected} onChange={onSelectAll} />

      <SearchBar query={query} setQuery={setQuery} />

      {/* Line */}
      <div className="w-[1px] h-6 bg-[var(--boarder-grey-50)] hidden desktopDashboard:block" />

      <QrCodeStatus selected={selectedStatus} setSelected={setSelectedStatus} />
      <QrCodeType selected={selectedTypes} setSelected={setSelectedTypes} />
      <SortBy selected={selectedSortBy} setSelected={setSelectedSortBy} />
      <ClearFilter
        disabled={
          !query &&
          !selectedStatus &&
          selectedTypes.length === 0 &&
          selectedSortBy === ""
        }
        onClick={handleClearFilter}
      />
      <button className="desktopDashboard:hidden flex w-10 h-10 p-2 justify-center items-center gap-2 bg-white border border-[var(--Boarder-Grey)] rounded-[var(--Corner-Radius-8)]">
        <AdjustmentsHorizontal />
      </button>
    </div>
  );
}
