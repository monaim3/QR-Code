import { useState } from "react";
import CloseCircle from "@/components/icons/close-circle";
import Search from "@/components/icons/search";
import Tooltip from "@/components/dashboard/Tooltip";

interface Props {
  query: string;
  setQuery: (query: string) => void;
}

export default function SearchBar({ query, setQuery }: Props) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`
        flex items-center w-[240px] h-10 px-4 py-2 rounded-[var(--Corner-Radius-8)]
        bg-white border
        ${
          isFocused
            ? "ring-2 ring-[var(--Blue)] shadow-[0_0_8px_rgba(73,129,255,0.2)]"
            : "border-[var(--Boarder-Grey)] hover:ring-2 hover:ring-[var(--Boarder-Grey)]"
        }
      `}
    >
      <div className="flex items-center gap-2 flex-1">
        <Search />

        <input
          type="text"
          placeholder="Search by QR code name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className={`border-0 outline-0 text-[16px] leading-[24px] text-[var(--Black)] font-roboto focus:ring-0 focus:outline-0 placeholder:text-[var(--Grey)] ${
            query ? "w-[168px]" : "w-[184px]"
          }`}
        />

        {/* Show clear button only when typing */}
        {query && (
          <Tooltip text="Clear filter">
            <button
              onClick={() => setQuery("")}
              className="-ml-2 flex items-center justify-center"
            >
              <CloseCircle className="text-[var(--Grey)] hover:text-[var(--Black)]" />
            </button>
          </Tooltip>
        )}
      </div>
    </div>
  );
}
