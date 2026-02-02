"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setIsShare } from "@/store/slices/video-slice";

export default function CustomCheckbox({ label }: { label: string }) {
   const dispatch = useAppDispatch();
   const video = useAppSelector((state) => state.video);

  return (
    <label className="flex items-center cursor-pointer select-none">
      {/* Hidden native checkbox */}
      <input
        type="checkbox"
        checked={video.isShare}
        onChange={() => dispatch(setIsShare(!video.isShare))}
        className="sr-only"
      />

      {/* Custom checkbox */}
      <div
        className={`
          w-6 h-6 flex items-center justify-center rounded transition-all duration-150
          ${video.isShare ? "bg-[var(--Blue)] border-none" : "bg-white border border-gray-300"}
          ${!video.isShare ? "hover:border-gray-400" : "hover:bg-[var(--Blue)]"}
        `}
      >
        {video.isShare && (
          <svg
            className="w-4 h-4 text-white"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 00-1.414 0L8 12.586l-3.293-3.293a1 1 0 00-1.414 1.414l4 4a1 1 0 001.414 0l8-8a1 1 0 000-1.414z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {/* Label text */}
      <span className="ml-2 text-[14px] leading-[22px] text-[var(--Black)] font-regular">{label}</span>
    </label>
  );
}
