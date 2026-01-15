"use client";
import * as React from "react";
import { Globe, ChevronUp, ChevronDown } from "lucide-react";
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
  const [isExpanded, setIsExpanded] = React.useState(false);

  return (
    !mobileDrawer ?
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
    :
   <div className="w-full max-w-md">
      <div>
        {/* Selected Language Button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="w-full bg-white flex items-center justify-between transition-all duration-300 py-[20px]"
        >
          <div className="flex items-center gap-2">
            <Globe className="w-6 h-6" style={{ color: globalIconColor }} />
            <span className={cn("font-medium pl-[8px]", textClass)}>
              {languages.find((lang) => lang.value === value)?.label.toUpperCase()}
            </span>
          </div>

          <ChevronDown
            className={`text-black transition-transform duration-300 ${
              isExpanded ? "rotate-180" : "rotate-0"
            }`}
            size={24}
          />
        </button>
        {/* Expandable Language List */}
        <div
          className={`bg-white border border-gray-200 rounded-xl overflow-hidden transition-all duration-300 shadow-[0_1px_16px_0_rgba(63,72,103,0.13)]
            ${isExpanded ? "max-h-[220px] opacity-100" : "max-h-0 opacity-0"}
          `}
        >
          {/* Scrollable list with green scrollbar */}
          <div className="overflow-y-auto max-h-[196px] always-visible-scrollbar p-[8px] gap-[4px]">
         {languages.map((language, index) => {
            const isSelected = value === language.value;

            return (
                <button
                  key={language.value}
                  onClick={() => {
                    setValue(language.value);
                    setIsExpanded(false);
                  }}
                  className={cn(
                    "w-full py-[8px] px-[16px] flex items-center justify-between rounded-[8px] mb-1 transform transition-all duration-200 group",
                    isSelected ? "bg-[#9BA2FB]/10" : "",
                    !isSelected ? "hover:bg-[#9BA2FB]/10 hover:scale-[1.02]" : ""
                  )}
                  style={{
                    transitionDelay: isExpanded ? `${index * 30}ms` : "0ms",
                  }}
                >
                  <span
                    className={`transition-colors leading-[22px] duration-200 font-regular ${
                      isSelected
                        ? "text-[var(--black)]"
                        : "text-black group-hover:text-[var(--Blue)]"
                    }`}
                  >
                    {language.label}
                    </span>
                    </button>

        );
      })}
      </div>
       </div>
      </div>
  {/* Divider */}
  <div className={`border-b border-[#cdd0db80] ${isExpanded ? 'pt-[16px]' : ''}`} />
  </div>
  );
}