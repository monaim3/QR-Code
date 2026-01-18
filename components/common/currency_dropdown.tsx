"use client";

import dynamic from "next/dynamic";

const CurrencySelector = dynamic(
  () => import("./currency_dropdown.client"),
  { ssr: false }
);

export default CurrencySelector;
