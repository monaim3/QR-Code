'use client';
import { X} from 'lucide-react';
import { useModalQuery } from "./modal-hooks";


export default function TransactionFailed(){
   const { closeModal } = useModalQuery();

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
        <div className="w-full max-w-[400px] flex flex-col items-center p-8 bg-white rounded-[10px] shadow-card">
         
         {/* Header */}
        <h1 className="text-[20px] leading-[28px] desktop:text-[24px] desktop:leading-[32px] font-bold text-center text-[var(--Black)]">
         Transaction failed
        </h1>
        <p className='text-[16px] leading-[24px] font-regular text-[var(--Dark-grey)] text-center mt-2'>
         Something went wrong, and the transaction was canceled. Please try subscribing and submitting payment again.
        </p>

        <div className="h-[48px] w-full flex items-center justify-center bg-[var(--Blue)] hover:bg-[var( --Blue-hover)] rounded-[10px] mt-6 transition duration-300">
            <p className='text-[18px] leading-[26px] text-white font-semibold'>ok</p>
        </div>

        </div>
      </div>
    </div>
    );
}