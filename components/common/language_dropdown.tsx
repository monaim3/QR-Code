"use client";
import * as React from "react";
import { Globe, ChevronUp, Search } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandGroup,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const languages = [
  { value: "en", label: "English" },
  { value: "da", label: "Dansk" },
  { value: "et", label: "Eesti" },
  { value: "fil", label: "Filipino" },
  { value: "it", label: "Italiano" },
  { value: "es", label: "Español" },
];

interface LanguageSelectorProps {
  textClass?: string;
  iconClass?: string;
  globalIconColor?: string;
  arrowUp?: boolean;
  layout?: "start" | "gapBetween"; // NEW prop for controlling gap
}

export default function LanguageSelector({
  textClass = "text-black",
  iconClass = "text-black",
  globalIconColor = "#000000",
  arrowUp = false,
  layout = "start", // default stick together
}: LanguageSelectorProps): React.JSX.Element {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("en");
  const [search, setSearch] = React.useState("");

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <div className="relative">
         <Button
          variant="ghost"
          role="combobox"
          aria-expanded={open}
          className={cn(
            "flex items-center text-base font-normal hover:bg-transparent px-2 w-full",
            layout === "gapBetween" ? "justify-between" : "justify-start",
            "gap-2",
            layout === "gapBetween" ? "mx-[-6px]" : ""
          )}
        >
          {/* Left side: Globe + Text */}
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6" style={{ color: globalIconColor }} />
            <span className={cn("font-regular", textClass)}>
              {languages.find((lang) => lang.value === value)?.value.toUpperCase()}
            </span>
          </div>

          {/* Arrow on right */}
          <ChevronUp
            className={cn(
              "w-5 h-5 transition-transform",
              arrowUp ? (open ? "rotate-180" : "") : open ? "" : "rotate-180"
            )}
            style={{ color: globalIconColor }}
          />
        </Button>
        </div>
      </PopoverTrigger>

      <PopoverContent
        className="w-[144px] h-[180px] p-2 rounded-xl shadow-sm
           border-[0.5px] border-black/5 bg-white z-50
           overflow-y-scroll always-visible-scrollbar"
        align="start"
        sideOffset={10}
      >
        <Command>
          <CommandList className="overflow-y-scroll scrollbar-green always-visible-scrollbar">
            <CommandGroup className="py-1">
              {languages
                .filter((lang) =>
                  lang.label.toLowerCase().includes(search.toLowerCase())
                )
                .map((lang) => (
                  <CommandItem
                    key={lang.value}
                    value={lang.value}
                    onSelect={(currentValue) => {
                      setValue(currentValue);
                      setOpen(false);
                    }}
                    className="px-3 py-2 text-[14px] cursor-pointer aria-selected:bg-[#9BA2FB]/10 rounded-[8px]"
                  >
                    <span
                      className={cn(
                        "leading-[22px]",
                        value === lang.value
                          ? "font-medium text-black"
                          : "font-normal text-gray-600 hover:text-[var(--Blue)]"
                      )}
                    >
                      {lang.label}
                    </span>
                  </CommandItem>
                ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
