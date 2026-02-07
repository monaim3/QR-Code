"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
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
    <div className="w-full flex flex-col p-2 items-start self-stretch bg-white rounded-[var(--Corner-Radius-6)] shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] transition-all duration-300 ease-in-out">
      <div
        className={`flex items-center gap-2 self-stretch cursor-pointer`}
        onClick={handleToggle}
      >
        <div className="p-2 bg-[var(--light-grey-70)] rounded">{icon}</div>

        <p className="text-[var(--Black)] text-[14px] leading-[22px] flex-1">
          {title}
        </p>

        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        >
          <ChevronDownSmall className="text-[var(--Grey)]" />
        </motion.div>
      </div>

      <motion.div
        initial={false}
        animate={{
          gridTemplateRows: isOpen ? "1fr" : "0fr",
          opacity: isOpen ? 1 : 0,
        }}
        transition={{
          gridTemplateRows: {
            duration: 0.35,
            ease: [0.4, 0, 0.2, 1],
          },
          opacity: {
            duration: 0.25,
            ease: "easeInOut",
          },
          marginTop: {
            duration: 0.35,
            ease: [0.4, 0, 0.2, 1],
          },
        }}
        className="grid w-full"
      >
        <div className="min-h-0 overflow-hidden space-y-2 w-full">
          <div className="w-full h-[1px] bg-[var(--boarder-grey-50)] mt-2" />
          <div className="space-y-4">{children}</div>
        </div>
      </motion.div>
    </div>
  );
}
