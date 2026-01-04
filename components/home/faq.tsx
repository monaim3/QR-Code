"use client";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Container from "../common/parent-container";

class FaqTabItem {
  id: number;
  tabName: string;
  item: FaqItem[];

  constructor(id: number, tabName: string, item: FaqItem[]) {
    this.id = id;
    this.tabName = tabName;
    this.item = item;
  }
}

class FaqItem {
  question: string;
  answer: string;

  constructor(question: string, answer: string) {
    this.question = question;
    this.answer = answer;
  }
}

const FaqData: FaqTabItem[] = [
  new FaqTabItem(1, "Basics", [
    new FaqItem(
      "What is a QR code generator?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Can anyone generate a QR code?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Is My QR Code QR code generator free?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Can I use My QR Code QR code generator for commercial purposes?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "How do I get a QR code for my business?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
  ]),
  new FaqTabItem(2, "Generating", [
    new FaqItem(
      "Can anyone generate a QR code?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Is My QR Code QR code generator free?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Can I use My QR Code QR code generator for commercial purposes?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "How do I get a QR code for my business?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "What is a QR code generator?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
  ]),
  new FaqTabItem(3, "Printing", [
    new FaqItem(
      "How do I get a QR code for my business?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "What is a QR code generator?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Can anyone generate a QR code?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Is My QR Code QR code generator free?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Can I use My QR Code QR code generator for commercial purposes?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. My QR Code’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
  ]),
];

export default function Faq() {
  const [activeTab, setActiveTab] = useState(FaqData[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  const activeTabItem = FaqData.find((tab) => tab.id === activeTab);

  return (
    <section className="bg-[#F5F6FA] desktop:py-40 py-16 ">
      <Container>
        <div className="flex flex-col items-center justify-center max-w-[800] m-auto">
          <div className="flex flex-col items-center justify-center gap-2 mb-10">
            <h2 className="font-bold text-center text-[32px] leading-8 desktop:leading-10 text-black">Frequently asked questions</h2>
            <p className="text-[16px] leading-[24px] font-regular text-center text-grey">Looking for answers? Check if you can find them here or{" "}
              <span className="text-[var(--Blue)] underline">contact us</span>
            </p>
          </div>
          {/* Mobile Dropdown */}
          <div className="relative w-full max-w-[752px] mb-8 desktop:hidden">
            <button
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-200 rounded-lg text-gray-700 font-medium shadow-sm">
              <span>{activeTabItem?.tabName}</span>
              <ChevronDown
                className={`w-5 h-5 transition-transform ${
                  isDropdownOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isDropdownOpen && (
              <>
                <div
                  className="fixed inset-0 z-10"
                  onClick={() => setIsDropdownOpen(false)}
                />
                <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg z-20 py-1">
                  {FaqData.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => {
                        setActiveTab(tab.id);
                        setIsDropdownOpen(false);
                      }}
                      className={`w-full px-4 py-3 text-left text-sm font-medium transition-colors ${
                        activeTab === tab.id
                          ? "bg-[var(--Blue)] text-white"
                          : "text-gray-700 hover:bg-gray-50"
                      }`}>
                      {tab.tabName}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Desktop Tabs */}
          <div
            ref={scrollContainerRef}
            className="hidden desktop:flex gap-4 mb-14 overflow-x-auto scrollbar-hide w-full justify-center"
            style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
              const container = scrollContainerRef.current;
              if (!container) return;

              const startX = e.pageX - container.offsetLeft;
              const scrollLeft = container.scrollLeft;

              const onMouseMove = (moveEvent: MouseEvent) => {
                const x = moveEvent.pageX - container.offsetLeft;
                const walk = (x - startX) * 2;
                container.scrollLeft = scrollLeft - walk;
              };

              const onMouseUp = () => {
                document.removeEventListener("mousemove", onMouseMove);
                document.removeEventListener("mouseup", onMouseUp);
              };

              document.addEventListener("mousemove", onMouseMove);
              document.addEventListener("mouseup", onMouseUp);
            }}>
            {FaqData.map((faq) => {
              const isActive = activeTab === faq.id;
              return (
              <button
                key={faq.id}
                onMouseDown={(e) => e.preventDefault()}
                onClick={() => setActiveTab(faq.id)}
                className={`
                  flex items-center px-6 py-2 rounded-[10px]
                  font-medium whitespace-nowrap
                  transition-colors duration-300 ease-linear
                  ${
                    isActive
                      ? "bg-[var(--Blue)] text-white"
                      : "bg-white text-slate-300 hover:bg-[var(--Blue)]/10"
                  }
                `}
              >
                <span
                  className={`
                    font-sans font-normal
                    transition-colors duration-300 ease-linear
                    ${
                      isActive
                        ? "text-white"
                        : "text-[#79809A] hover:text-[var(--Blue)]"
                    }
                  `}
                >
                  {faq.tabName}
                </span>
              </button>

              );
            })}
          </div>
          <div className="w-full flex flex-col items-center gap-4">
            <Accordion
              type="single"
              collapsible
              className="w-full flex flex-col gap-4"
            >
              {FaqData[activeTab - 1].item.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="bg-white rounded-lg w-full"
                >
                  <AccordionTrigger className="p-6 text-[#0A0909] text-[18px] leading-[26px] font-sans font-bold items-center rounded-[12px]">
                    {item.question}
                  </AccordionTrigger>

                  <AccordionContent className="px-6 pt-0 text-gray-600 text-[16px] leading-[24px]">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>

        </div>
      </Container>
    </section>
  );
}
