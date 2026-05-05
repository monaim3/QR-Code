"use client";

import { useEffect } from "react";

interface ErrorToastProps {
  message: string;
  onClose: () => void;
}

export default function ErrorToast({ message, onClose }: ErrorToastProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-6 left-[calc(50%-250px)] -translate-x-1/2 z-[9999] w-[340px] bg-white rounded-r-lg shadow-[0_4px_24px_0_rgba(0,0,0,0.12)] flex border-l-4 border-[#FD4255] animate-slide-in-right">
      {/* Content */}
      <div className="flex items-center gap-3 px-4 py-4 flex-1 pr-8">
        {/* Red X circle icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          className="flex-shrink-0"
        >
          <path
            d="M12 2C6.485 2 2 6.485 2 12C2 17.515 6.485 22 12 22C17.515 22 22 17.515 22 12C22 6.485 17.515 2 12 2ZM16.28 15.22L15.22 16.28L12 13.06L8.78 16.28L7.72 15.22L10.94 12L7.72 8.78L8.78 7.72L12 10.94L15.22 7.72L16.28 8.78L13.06 12L16.28 15.22Z"
            fill="#FD4255"
          />
        </svg>

        <div className="flex flex-col gap-0.5">
          <p
            className="text-[14px] leading-[22px] font-semibold"
            style={{ color: "#FD4255" }}
          >
            Error
          </p>
          <p className="text-[13px] leading-[20px] text-[var(--Dark-gray)]">
            {message}
          </p>
        </div>
      </div>

      {/* Close button - vertically centered */}
      <button
        onClick={onClose}
        className="absolute top-3 right-3 p-1 hover:opacity-70 transition-opacity"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          viewBox="0 0 12 12"
          fill="none"
        >
          <path
            d="M10.1394 2.38986L9.60937 1.85986L5.99937 5.46986L2.38938 1.85986L1.85938 2.38986L5.46937 5.99986L1.85938 9.60986L2.38938 10.1399L5.99937 6.52986L9.60937 10.1399L10.1394 9.60986L6.52938 5.99986L10.1394 2.38986Z"
            fill="#0A0909"
          />
        </svg>
      </button>
    </div>
  );
}
