import { useState } from 'react';
import { X, Eye, EyeOff, Lock } from 'lucide-react';
import { useModalQuery } from "./modal-hooks";

interface CheckInboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CheckInboxModal({ isOpen, onClose }: CheckInboxModalProps) {
  const { closeModal } = useModalQuery();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    console.log('Password created successfully');
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      {/* Container for modal and close button */}
      <div className="relative max-w-[400px]">
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
          className="w-full max-w-[400px] flex flex-col items-center p-6 desktop:p-8 bg-white rounded-[10px]"
          style={{
            boxShadow: '0 4px 14px 0 rgba(54, 66, 140, 0.16)'
          }}
        >
        {/* Header */}
        <div className="flex flex-col items-center text-center w-full">
          <h2 className="text-[20px] leading-[20px] desktop:text-[24px] leading-[32px] font-bold text-[var(--Black)]">
          Check your inbox
          </h2>
          <p className="text-[16px] leading-[24px] font-regular text-[var(--Dark-gray)] mt-2">
          If an account with that email address exists, we have sent an email with the instructions to recover your password.
          </p>
        </div>

        <button
         onClick={handleSubmit}
        className="mt-[24px] w-full h-[48px] bg-[var(--Blue)] hover:bg-emerald-700 text-white text-[18px] leading-[26px] font-medium rounded-[10px] transition-colors duration-200"
        >
        Log in
        </button>

        </div>
      </div>
    </div>
  );
}