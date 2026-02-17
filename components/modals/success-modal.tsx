import { useState } from 'react';
import { X, Eye, EyeOff, Lock } from 'lucide-react';
import { useModalQuery } from "./modal-hooks";

interface CreatePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function SuccessModal({ isOpen, onClose }: CreatePasswordModalProps) {
  const { closeModal } = useModalQuery();


  const handleSubmit = () => {
    
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 p-4">
      {/* Container for modal and close button */}
      <div className="relative">
        {/* Close Button - Outside the modal container */}
        <button
          onClick={closeModal}
          className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors flex items-center gap-2"
          aria-label="Close"
        >
          <span className="text-sm font-medium">Close</span>
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            <X size={14} />
          </div>
        </button>

        {/* Modal Container - Following Figma specs */}
        <div 
          className="w-[400px] flex flex-col items-center p-6 desktop:p-8 bg-white rounded-[10px]"
          style={{
            boxShadow: '0 4px 14px 0 rgba(54, 66, 140, 0.16)'
          }}
        >
        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center w-full">
          <h2 className="text-[20px] leading-[28px] desktop:text-[24px] leading-[32px] font-bold text-[var(--Black)]">
            Success
          </h2>
          <p className="mt-2 text-[16px] leading-[24px] text-[var(--Dark-gray)]">
            Your subscription has been successfully canceled
          </p>
        </div>

        <button
            onClick={closeModal}
            className="w-full h-[48px] px-6 bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white font-medium rounded-[10px] transition-colors duration-300 mt-6"
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  );
}