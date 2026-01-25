"use client";

import { toast } from "sonner";
import Close from "@/components/icons/close";
import CheckCircleAlt02 from "@/components/icons/check-circle-alt-02";

interface Props {
  t: string | number;
}

export default function SuccessToast({ t }: Props) {
  return (
    <div className="relative flex w-[376px] items-center gap-4 border border-slate-200 bg-white p-4 shadow-lg transition-all border-l-[4px] border-l-[var(--Green)]">
      {/* Success Icon */}
      <CheckCircleAlt02 />

      {/* Text Content */}
      <div className="flex flex-col">
        <h3 className="font-semibold leading-[24px] text-[var(--Green)] text-[16px]">
          Success
        </h3>
        <p className="text-[14px] leading-[22px] text-[var(--Dark-gray)]">
          Your information has been saved
        </p>
      </div>

      {/* Close Button */}
      <button
        onClick={() => toast.dismiss(t)}
        className="absolute right-2 top-2 text-[var(--Black)]"
      >
        <Close />
      </button>
    </div>
  );
}
