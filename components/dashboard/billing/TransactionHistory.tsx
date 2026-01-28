"use client";

import { useState } from "react";
import MethodDropdown from "./MethodDropdown";
import ClearFilter from "../qr-codes/filters/ClearFilter";
import TransactionTable from "./TransactionTable";

export default function TransactionHistory() {
  const [selectedMethod, setSelectedMethod] = useState<string[]>([]);

  return (
    <div className="flex flex-col items-start gap-4 self-stretch">
      <div className="flex items-center gap-6 self-stretch">
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
      </div>

      <TransactionTable />
    </div>
  );
}
