"use client";
import { useState } from "react";
import Container from "./parent-container";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type AccordionProps = {
  children: React.ReactNode;
  title: string;
  description?: string;
  defaultOpen?: boolean;
};
export default function Accordion({
  children,
  title,
  description,
  defaultOpen = false,
}: AccordionProps) {
  const [isUrlAccordionOpen, setIsUrlAccordionOpen] = useState(true);
  const [isOpen, setIsOpen] = useState(defaultOpen);
  return (
    <>
      <div className="bg-[var(--Generator-Background)] ">
        <div className="">
          <div className="flex flex-col desktop:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-4">
              <div className="w-full bg-white rounded-xl shadow-[0_4px_14px_0_rgba(54,66,140,0.16)]">
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="w-full flex items-start justify-between px-4 md:px-8 py-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="flex flex-col items-start gap-1">
                    <h3 className="text-lg leading-[26px] font-bold var(--font-poppins) text-[var(--Black)]">
                      {title}
                    </h3>
                    <p className="text-sm leading-[22px] font-roboto text-[var(--Dark-gray)] text-left">
                      {description}
                    </p>
                  </div>
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
                  >
                    <ChevronDown
                      size={32}
                      color="black"
                      className="w-6 h-6lg:w-8 lg:h-8 font-bold"
                    />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key="url-accordion-content"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: {
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1],
                          },
                          opacity: {
                            duration: 0.3,
                            ease: "easeOut",
                            delay: 0.1,
                          },
                        },
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: {
                            duration: 0.4,
                            ease: [0.4, 0, 0.2, 1],
                          },
                          opacity: {
                            duration: 0.2,
                            ease: "easeIn",
                          },
                        },
                      }}
                      className=""
                    >
                      <hr className="ml-4 mr-4 md:ml-8 md:mr-8 border-t-[0.5px] border-[var(--Boarder-Grey)]" />
                      {isOpen && (
                        <div className="p-6 md:px-8 space-y-8 ">{children}</div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
