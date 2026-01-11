"use client";
import * as React from "react";
import { Globe, ChevronUp } from "lucide-react";

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
  { value: "ar", label: "Arabic" },
];

interface LanguageSelectorProps {
  textClass?: string;
  iconClass?: string;
  globalIconColor?: string;
  arrowUp?: boolean;
  layout?: "start" | "gapBetween";
  mobileDrawer?: boolean;
}

export default function LanguageSelector({
  textClass = "text-black",
  iconClass = "text-black",
  globalIconColor = "#000000",
  arrowUp = false,
  layout = "start",
  mobileDrawer = false,
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
            <div className="flex items-center gap-2">
              <Globe className="w-6 h-6" style={{ color: globalIconColor }} />
              <span className={cn("font-regular", textClass)}>
                {languages.find((lang) => lang.value === value)?.value.toUpperCase()}
              </span>
            </div>

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
        className={cn(
          "p-2 rounded-2 shadow-[0_1px_16px_0_rgba(63,72,103,0.13)] bg-white z-9 transition-all",
           mobileDrawer ? "w-screen w-[280px] left-[10px] right-[20px]" : "w-[160px]"
        )}
        align="start"
        sideOffset={10}
      >
        <div className="h-[188px] overflow-y-scroll always-visible-scrollbar">
          <Command>
            <CommandList>
              <CommandGroup className="pr-2">
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
                    className="group px-4 py-1 text-[14px] leading-[22px] cursor-pointer
                              aria-selected:bg-[#9BA2FB]/10 rounded-[8px] mb-1"
                  >
                    <span
                      className={cn(
                        "transition-colors",
                        value === lang.value
                          ? "font-medium text-black"
                          : "font-normal text-gray-600",
                        "group-hover:text-[var(--Blue)]"
                      )}
                    >
                      {lang.label}
                    </span>
                  </CommandItem>
                  ))}
              </CommandGroup>
            </CommandList>
          </Command>
        </div>
      </PopoverContent>
    </Popover>
  );
}