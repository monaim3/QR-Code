"use client";
import { cn } from "@/lib/utils";
import Link from 'next/link';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";
import React, { useState } from "react";
import Container from "../common/parent-container";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";

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
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Can anyone generate a QR code?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Is QRCenter QR code generator free?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Can I use QRCenter QR code generator for commercial purposes?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "How do I get a QR code for my business?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
  ]),
  new FaqTabItem(2, "Generating", [
    new FaqItem(
      "Can anyone generate a QR code?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Is QRCenter QR code generator free?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Can I use QRCenter QR code generator for commercial purposes?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "How do I get a QR code for my business?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "What is a QR code generator?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
  ]),
  new FaqTabItem(3, "Printing", [
    new FaqItem(
      "How do I get a QR code for my business?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "What is a QR code generator?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Can anyone generate a QR code?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Is QRCenter QR code generator free?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
    new FaqItem(
      "Can I use QRCenter QR code generator for commercial purposes?",
      "A QR code generator is software which can be used to create customized QR codes that store data which can be read by QR code scanners. QRCenter’s QR Code Generator allows you to generate QR codes for vCards, links, mobile apps, PDF files, and more. QR codes are a crucial way to communicate with clients and individuals, especially when you consider 89 million device users engaged with QR codes in 2022 alone."
    ),
  ]),
];

export default function Faq() {
  const [activeTab, setActiveTab] = useState(FaqData[0].id);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const activeTabItem = FaqData.find(tab => tab.id === activeTab);

  const [openItem, setOpenItem] = useState<string | undefined>(
    activeTab === 1 ? "item-0" : undefined
  );

// Tab change handler
const handleTabChange = (tabId: number) => {
  setActiveTab(tabId);
  setOpenItem("item-0");// collapses all FAQs in new tab
};

const handleItemClick = (index: number) => {
  setOpenItem(openItem === `item-${index}` ? undefined : `item-${index}`);
};


  return (
    <section className="bg-[#F5F6FA] desktop:py-40 py-16 ">
      <Container>
        <div className="flex flex-col items-center justify-center max-w-[800] m-auto">
          <div className="flex flex-col items-center justify-center gap-2 mb-10">
            <h2 className="font-bold text-center text-[24px] leading-8 desktop:text-[32px] desktop:leading-10 text-[var(--Black)]">Frequently asked questions</h2>
            <p className="text-[16px] leading-[24px] font-regular text-center text-grey">Looking for answers? Check if you can find them here or <Link href="/contact-us" className="text-[var(--Blue)] underline">contact us</Link>
            </p>
          </div>

        <div className="relative w-full desktop:w-[350px]">
      {/* Dropdown button */}
      <button
        onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        className="w-full flex items-center justify-between px-4 py-2 h-[48px] border border-[var(--Boarder-Grey)] rounded-lg text-[var(--Dark-gray)] font-medium"
      >
        <span>
          {activeTab
            ? FaqData.find((tab) => tab.id === activeTab)?.tabName
            : "Select Tab"}
        </span>
        <ChevronDown
          className={cn(
            "size-5 stroke-[var(--Dark-gray)] transition-transform",
            isDropdownOpen ? "rotate-180" : ""
          )}
        />
      </button>

      {/* Dropdown list */}
      {isDropdownOpen && (
        <>
          {/* Click outside overlay */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsDropdownOpen(false)}
          />

          {/* Dropdown items */}
          <div className="absolute top-full left-0 right-0 mt-1 bg-white border border-gray-200 rounded-lg shadow-lg z-20 p-4 flex flex-col gap-2">
            {FaqData.map((tab) => {
              const isActive = activeTab === tab.id;

              return (
                <button
                  key={tab.id}
                  onClick={() => {
                    handleTabChange(tab.id);
                    setIsDropdownOpen(false);
                  }}
                  className="w-full flex justify-center"
                >
                  {/* Item wrapper with left/right padding and hover/selected background */}
                  <div
                    className={cn(
                      "flex items-center justify-between w-full px-4 h-[40px] rounded-md transition-colors",
                      isActive
                        ? "bg-[#9BA2FB]/10 text-[var(--Dark-gray)]"
                        : "text-[var(--Dark-gray)] hover:bg-[#9BA2FB]/10"
                    )}
                  >
                    <span>{tab.tabName}</span>
                    {isActive && <Check className="size-4 text-[var(--Blue)]" />}
                  </div>
                </button>
              );
            })}
          </div>
        </>
      )}
        </div>
          {/* Desktop Tabs */}
          <div
            ref={scrollContainerRef}
            className="hidden gap-4 mb-14 overflow-x-auto scrollbar-hide w-full justify-center"
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
                onClick={() => handleTabChange(faq.id)}
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
          
          <div className="w-full flex flex-col items-center pt-[40px] desktop:pt-[56px] gap-4">
            <Accordion
            type="single"
            collapsible
            value={openItem}
            onValueChange={(val) => setOpenItem(val)}
            className="w-full flex flex-col gap-4"
          >
            {activeTabItem?.item.map((item, index) => {
            const isOpen = openItem === `item-${index}`;
            return (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg w-full">
                <AccordionTrigger
                onClick={() => handleItemClick(index)}
                className="p-6 text-[var(--Black)] text-[18px] leading-[26px] font-sans font-bold items-center rounded-[12px]"
                >
                  {item.question}
                </AccordionTrigger>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={`faq-${activeTab}-${index}`} // unique key per tab + item
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-[var(--Dark-gray)] text-[16px] leading-[24px]">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </AccordionItem>
            );
          })}
          </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
