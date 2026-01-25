import Arrow from "@/components/icons/arrow";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
}

export default function AboutAccordion({
  title,
  isOpen,
  onClick,
  children,
}: Props) {
  return (
    <div>
      <div
        className={`flex items-center gap-2 self-stretch p-6 cursor-pointer rounded-[var(--Corner-Radius-10)] transition-all duration-300 ${
          isOpen ? "bg-white" : "bg-[var(--light-grey-70)]"
        }`}
        onClick={onClick}
      >
        <motion.div
          animate={{ rotate: isOpen ? 90 : 0 }}
          transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
        >
          <Arrow />
        </motion.div>

        <p className="text-[var(--Black)] text-[16px] leading-[24px] font-medium">
          {title}
        </p>
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
            className="overflow-hidden"
          >
            {isOpen && (
              <div className="p-6 space-y-4">
                {children}
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
