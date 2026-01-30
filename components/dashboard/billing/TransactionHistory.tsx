"use client";

import { useState } from "react";
import MethodDropdown from "./MethodDropdown";
import ClearFilter from "../qr-codes/filters/ClearFilter";
import TransactionTable from "./TransactionTable";
import AdjustmentsHorizontal from "@/components/icons/adjustments-horizontal";
import MobileTransactionHistory from "./MobileTransactionHistory";
import MobileBillingFilter from "./MobileBillingFilter";

export default function TransactionHistory() {
  const [selectedMethod, setSelectedMethod] = useState<string[]>([]);
  const [selectedSortBy, setSelectedSortBy] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const totalFilter = selectedMethod.length;

  const handleClearFilter = () => {
    setSelectedMethod([]);
    setSelectedSortBy("");
  };

  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      <div className="flex items-center desktopDashboard:gap-6 gap-4 self-stretch p-4 desktopDashboard:p-0 bg-white desktopDashboard:bg-transparent rounded-[var(--Corner-Radius-10)]">
        <p className="text-[var(--Black)] text-[18px] leading-[26px] font-bold flex-1">
          Transaction History
        </p>

        <div className="flex items-center gap-4">
          <MethodDropdown
            selected={selectedMethod}
            setSelected={setSelectedMethod}
          />

          <ClearFilter
            onClick={() => setSelectedMethod([])}
            disabled={selectedMethod.length === 0}
          />
        </div>
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
      </div>

      <TransactionTable />
      <MobileTransactionHistory />
      <MobileBillingFilter
        isDrawerOpen={isDrawerOpen}
        setIsDrawerOpen={setIsDrawerOpen}
        selectedMethod={selectedMethod}
        setSelectedMethod={setSelectedMethod}
        selectedSortBy={selectedSortBy}
        setSelectedSortBy={setSelectedSortBy}
        handleClearFilter={handleClearFilter}
      />
    </div>
  );
}
