"use client";

import SearchBar from "./SearchBar";
import QrCodeStatus from "./QrCodeStatus";
import QrCodeType from "./QrCodeType";
import SortBy from "./SortBy";
import CheckBox from "./CheckBox";
import ClearFilter from "./ClearFilter";
import { useState } from "react";
import AdjustmentsHorizontal from "@/components/icons/adjustments-horizontal";
import MobileFilter from "./MobileFilter";

interface Props {
  allSelected: boolean;
  onSelectAll: () => void;
}

export default function Filters({ allSelected, onSelectAll }: Props) {
  const [query, setQuery] = useState("");
  const [selectedStatus, setSelectedStatus] = useState("");
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedSortBy, setSelectedSortBy] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleClearFilter = () => {
    setQuery("");
    setSelectedStatus("");
    setSelectedTypes([]);
    setSelectedSortBy("");
  };

  const totalFilter = Number(Boolean(selectedStatus)) + selectedTypes.length;

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
      <button
        onClick={() => setIsDrawerOpen(true)}
        className="desktopDashboard:hidden flex w-10 h-10 p-2 justify-center items-center gap-2 bg-white border border-[var(--Boarder-Grey)] rounded-[var(--Corner-Radius-8)] relative"
      >
        <AdjustmentsHorizontal />

        <div
          className={`text-[10px] leading-[10px] text-white bg-[var(--Blue)] w-4 h-4 p-[2px] rounded-full flex items-center justify-center absolute -top-2 -right-2 ${totalFilter > 0 ? "block" : "hidden"}`}
        >
          {totalFilter}
        </div>
      </button>

      <MobileFilter
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        selectedSortBy={selectedSortBy}
        setSelectedSortBy={setSelectedSortBy}
        selectedStatus={selectedStatus}
        setSelectedStatus={setSelectedStatus}
        selectedTypes={selectedTypes}
        setSelectedTypes={setSelectedTypes}
        handleClearFilter={handleClearFilter}
      />
    </div>
  );
}
