import { useState } from 'react';
import { X, Eye, EyeOff, Lock } from 'lucide-react';
import { useModalQuery } from "./modal-hooks";

interface CreatePasswordModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreatePasswordModal({ isOpen, onClose }: CreatePasswordModalProps) {
  const { closeModal } = useModalQuery();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSubmit = () => {
    if (password === confirmPassword && password.length > 0) {
      console.log('Password created successfully');
      // Reset fields
      setPassword('');
      setConfirmPassword('');
      onClose(); // Use onClose prop instead of setIsOpen
    } else {
      alert('Passwords do not match or are empty');
    }
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
            Create new password
          </h2>
          <p className="mt-2 text-[16px] leading-[24px] text-[var(--Dark-gray)]">
            Enter a new password into both fields below
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col w-full mt-6">
          {/* Password Input */}
          <div className="relative">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock size={18} />
            </div>
            <input
              type={showPassword ? 'text' : 'password'}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative mt-4">
            <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">
              <Lock size={18} />
            </div>
            <input
              type={showConfirmPassword ? 'text' : 'password'}
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="w-full pl-12 pr-12 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent text-sm"
            />
            <button
              type="button"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
            >
              {showConfirmPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleSubmit}
            className="w-full h-[48px] px-6 bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white font-medium rounded-[10px] transition-colors duration-300 mt-6"
          >
            Confirm
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}