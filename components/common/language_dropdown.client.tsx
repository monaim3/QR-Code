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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { RootState } from "@/store";
import { setLanguage, fetchTranslations } from "@/store/slices/i18nSlice";
import { LanguageCode, languages } from "@/constants/languages";
import { t } from "@/utils/t";


interface LanguageSelectorProps {
  textClass?: string;
  iconClass?: string;
  globalIconColor?: string;
  arrowUp?: boolean;
  layout?: "start" | "gapBetween";
  mobileDrawer?: boolean;
  fromHeader?: boolean;
}

export default function LanguageSelector({
  textClass = "text-black",
  iconClass = "text-black",
  globalIconColor = "#000000",
  arrowUp = false,
  layout = "start",
  mobileDrawer = false,
  fromHeader = true,
}: LanguageSelectorProps): React.JSX.Element {
  const dispatch = useAppDispatch();
  const [open, setOpen] = React.useState(false);
  const value = useAppSelector((state) => state.i18n.language);
  const [search, setSearch] = React.useState("");
  const [isExpanded, setIsExpanded] = React.useState(false);

  const { language, translations } = useAppSelector(
  (state) => state.i18n
);


  const changeLanguage = (lang: LanguageCode) => {
  // 1. update UI instantly
  dispatch(setLanguage(lang));

   localStorage.setItem("lang", lang);

  // 2. check cache
  const alreadyLoaded = translations?.[lang];

  // 3. fetch only if not available
  if (!alreadyLoaded) {
    dispatch(fetchTranslations(lang));
  }
  console.log("LANG:", value);
console.log("TRANSLATIONS:", translations);
};

  return (
    <>
      {!mobileDrawer ? (
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
                  layout === "gapBetween" ? "mx-[-6px]" : "",
                )}
              >
                <div className="flex items-center gap-2">
                  <Globe
                    className="w-6 h-6"
                    style={{ color: globalIconColor }}
                  />
                  <span
                    className={cn(
                      "font-regular",
                      textClass,
                      fromHeader && "uppercase",
                    )}
                  >
                    {(() => {
                      const label =
                        languages.find((lang) => lang.value === value)?.label ??
                        "";

                      return fromHeader ? label.slice(0, 2) : label;
                    })()}
                  </span>
                </div>

                <ChevronUp
                  className={cn(
                    "w-5 h-5 transition-transform",
                    arrowUp
                      ? open
                        ? "rotate-180"
                        : ""
                      : open
                        ? ""
                        : "rotate-180",
                  )}
                  style={{ color: globalIconColor }}
                />
              </Button>
            </div>
          </PopoverTrigger>
          <PopoverContent
            className={cn(
              "p-2 rounded-2 shadow-[0_1px_16px_0_rgba(63,72,103,0.13)] bg-white z-[99] transition-all",
              mobileDrawer ? "w-[280px] left-[10px] right-[20px]" : "w-[160px]",
            )}
            align="start"
            sideOffset={10}
          >
            <div className="h-[188px]">
              <Command>
                <div className="max-h-[188px] overflow-y-auto custom-scrollbar pr-1">
                  <CommandList className="overflow-hidden max-h-none">
                    <CommandGroup className="pr-1">
                      {languages
                        .filter((lang) =>
                          lang.label
                            .toLowerCase()
                            .includes(search.toLowerCase()),
                        )
                        .map((lang) => (
                          <CommandItem
                            key={lang.value}
                            value={lang.value}
                            onSelect={(currentValue) => {
                              changeLanguage(currentValue as LanguageCode);
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
                                "group-hover:text-[var(--Blue)]",
                              )}
                            >
                              {lang.label}
                            </span>
                          </CommandItem>
                        ))}
                    </CommandGroup>
                  </CommandList>
                </div>
              </Command>
            </div>
          </PopoverContent>
        </Popover>
      ) : (
        <div className="w-full max-w-md">
          <div>
            {/* Selected Language Button */}
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="w-full bg-white flex items-center justify-between transition-all duration-300 py-[20px]"
            >
              <div className="flex items-center gap-2">
                <Globe className="w-6 h-6" style={{ color: globalIconColor }} />
                <span className={cn("font-medium", textClass)}>
                  {languages.find((lang) => lang.value === value)?.label}
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
              className={`overflow-hidden transition-all duration-300
                ${isExpanded ? "max-h-[220px] opacity-100" : "max-h-0 opacity-0"}
              `}
            >
              <div className="bg-white rounded-xl border border-[var(--Boarder-Grey)] p-2">
                {/* Scrollable list with custom scrollbar */}
                <div className="overflow-y-auto overflow-x-hidden max-h-[174px] custom-scrollbar flex flex-col gap-1 pr-1">
                  {languages.map((language, index) => {
                    const isSelected = value === language.value;

                    return (
                      <button
                        key={language.value}
                        onClick={() => {
                          changeLanguage(language.value as LanguageCode);
                          setIsExpanded(false);
                        }}
                        className={cn(
                          "w-full py-[5px] px-4 flex items-center justify-between rounded-[8px] transform transition-all duration-200 group",
                          isSelected ? "bg-[#9BA2FB]/10" : "",
                          !isSelected
                            ? "hover:bg-[#9BA2FB]/10 hover:scale-[1.02]"
                            : "",
                        )}
                        style={{
                          transitionDelay: isExpanded
                            ? `${index * 30}ms`
                            : "0ms",
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
          </div>
          {/* Divider */}
          <div
            className={`border-b border-[#cdd0db80] ${isExpanded ? "pt-[16px]" : ""}`}
          />
        </div>
      )}

      {/* Custom Scrollbar Styles */}
      <style jsx>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f5f6fa;
          border-radius: 9px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #01a56d;
          border-radius: 9px;
        }
      `}</style>
    </>
  );
}
