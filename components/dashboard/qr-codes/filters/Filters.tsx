"use client";

import SearchBar from "./SearchBar";
import QrCodeStatus from "./QrCodeStatus";
import QrCodeType from "./QrCodeType";
import SortBy from "./SortBy";
import CheckBox from "./CheckBox";
import ClearFilter from "./ClearFilter";
import { useState } from "react";

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
    <div className="flex items-center gap-4 px-4 h-10 w-full">
      <CheckBox checked={allSelected} onChange={onSelectAll} />

      <SearchBar query={query} setQuery={setQuery} />

      {/* Line */}
      <div className="w-[1px] h-6 bg-[var(--boarder-grey-50)]" />

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
    </div>
  );
}
