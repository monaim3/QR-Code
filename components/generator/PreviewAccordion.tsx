"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ChevronDownSmall from "../icons/chevron-down-small";

interface Props {
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}

export default function PreviewAccordion({ title, icon, children }: Props) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsOpen(true);
    });
  }, []);

  return (
    <div className="w-full flex flex-col p-2 items-start gap-2 self-stretch bg-white rounded-[var(--Corner-Radius-6)] shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] transition-all duration-300 ease-in-out">
      <div
        className={`flex items-center gap-2 self-stretch cursor-pointer`}
        onClick={handleToggle}
      >
        <div className="p-2 bg-[var(--light-grey-70)] rounded">{icon}</div>

        <p className="text-[var(--Black)] text-[14px] leading-[22px] flex-1">
          {title}
        </p>

        <ChevronDownSmall className="text-[var(--Grey)]" />
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            key="about-accordion-content"
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
            className="overflow-hidden space-y-2 w-full"
          >
            {isOpen && (
              <>
                <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />
                <div className="p-2 space-y-4">{children}</div>
              </>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
