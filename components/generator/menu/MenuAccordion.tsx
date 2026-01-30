import Arrow from "@/components/icons/arrow";
import Eye from "@/components/icons/eye";
import EyeOff from "@/components/icons/eye-off";
import DashboardMenuIcon from "@/components/icons/menu";
import TrashAlt from "@/components/icons/trash-alt";
import { motion, AnimatePresence } from "framer-motion";

interface Props {
  title: string;
  isVisible: boolean;
  isOpen: boolean;
  onClick: () => void;
  children: React.ReactNode;
  showReorder?: boolean;
  onReorderClick?: () => void;
  onDelete?: () => void;
  onPreview?: () => void;
  hideBtnText: string;
}

export default function MenuAccordion({
  title,
  isVisible,
  isOpen,
  onClick,
  children,
  showReorder = true,
  onReorderClick,
  onDelete,
  onPreview,
  hideBtnText,
}: Props) {
  return (
    <div className="w-full space-y-8">
      <div
        className={`flex items-center gap-2 ${isVisible && "cursor-pointer"}`}
      >
        <div
          className={`flex items-center gap-2 self-stretch flex-1 ${!isVisible && "opacity-50"}`}
          onClick={isVisible ? onClick : undefined}
        >
          <motion.div
            animate={{ rotate: isOpen ? 90 : 0 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
          >
            <Arrow />
          </motion.div>

          <p className="text-[var(--Black)] text-[18px] leading-[26px] font-bold">
            {title}
          </p>
        </div>

        <div className="flex justify-end items-center gap-2">
          {!isVisible && (
            <div className="flex flex-col justify-center items-center gap-2 px-4 py-2 self-stretch rounded-full border border-dashed border-[var(--Boarder-Grey)] text-[var(--Dark-gray)] text-[12px] leading-[20px]">
              {hideBtnText}
            </div>
          )}

          <button
            type="button"
            onClick={(e) => {
              e.stopPropagation();
              onPreview?.();
            }}
            className="flex w-10 h-10 p-2 justify-center items-center gap-2 rounded-full border border-[var(--Boarder-Grey)]"
          >
            {isVisible ? (
              <Eye className="text-[var(--Dark-gray)] w-4 h-4" />
            ) : (
              <EyeOff className="text-[var(--Dark-gray)] w-4 h-4" />
            )}
          </button>
          {onDelete && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onDelete();
              }}
              className="flex w-10 h-10 p-2 justify-center items-center gap-2 rounded-full border border-[var(--Boarder-Grey)]"
            >
              <TrashAlt className="text-[var(--Dark-gray)] w-4 h-4" />
            </button>
          )}
          {showReorder && (
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onReorderClick?.();
              }}
              className="flex w-10 h-10 p-2 justify-center items-center gap-2 rounded-full border border-[var(--Boarder-Grey)]"
            >
              <DashboardMenuIcon className="text-[var(--Dark-gray)] w-4 h-4" />
            </button>
          )}
        </div>
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
            {isOpen && <div className="space-y-8 px-[2px]">{children}</div>}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
