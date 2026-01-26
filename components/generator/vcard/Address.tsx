"use client";

import { useState } from "react";
import AboutAccordion from "./AboutAccordion";
import Input from "./Input";

interface Props {
  onClick: () => void;
  isOpen: boolean;
}

export default function Address({ onClick, isOpen }: Props) {
  const [isManual, setIsManual] = useState(true);

  return (
    <AboutAccordion title="Address" isOpen={isOpen} onClick={onClick}>
      <div className="flex items-center gap-4 pb-2">
        <button
          onClick={() => setIsManual(true)}
          className={`flex h-10 justify-center items-center gap-2 px-6 py-1 rounded-[var(--Corner-Radius-10)] border border-[var(--Blue)] text-[16px] leading-[22px] transition-all duration-300 ease-linear ${isManual ? "bg-[var(--Blue)] text-white hover:bg-[var(--Blue-hover)]" : "bg-white text-[var(--Blue)]"} flex-1 desktop:flex-none`}
        >
          Manual
        </button>
        <button
          onClick={() => setIsManual(false)}
          className={`flex h-10 justify-center items-center gap-2 px-6 py-1 rounded-[var(--Corner-Radius-10)] border border-[var(--Blue)] text-[16px] leading-[22px] transition-all duration-300 ease-linear ${isManual ? "bg-white text-[var(--Blue)]" : "bg-[var(--Blue)] text-white hover:bg-[var(--Blue-hover)]"} flex-1 desktop:flex-none`}
        >
          URL
        </button>
      </div>

      {isManual ? (
        <>
          <div className="flex desktop:flex-row flex-col items-start gap-8 flex-1">
            <Input
              label="Street"
              placeholder="e.g. Spring Avenue, 9/18"
              id="street"
            />
            <Input
              label="Postal code"
              placeholder="e.g. 10005"
              id="postal-code"
            />
          </div>
          <div className="flex desktop:flex-row flex-col items-start gap-8 flex-1">
            <Input label="City" placeholder="e.g. New York City" id="city" />
            <Input label="State" placeholder="e.g. New York" id="state" />
          </div>

          <Input
            label="Country"
            placeholder="e.g. United States"
            id="country"
          />
        </>
      ) : (
        <>
          <Input
            label="URL"
            placeholder="e.g. www.google.com/maps/search"
            id="add-url"
            type="url"
          />
        </>
      )}
    </AboutAccordion>
  );
}
