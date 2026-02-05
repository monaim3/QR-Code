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
          className="w-full max-w-md flex flex-col items-center gap-8 p-8 bg-white rounded-lg"
          style={{
            boxShadow: '0 4px 14px 0 rgba(54, 66, 140, 0.16)'
          }}
        >
        {/* Header */}
        <div className="flex flex-col items-center gap-2 text-center w-full">
          <h2 className="text-2xl font-semibold text-gray-900">
            Create new password
          </h2>
          <p className="text-sm text-gray-600">
            Enter a new password into both fields below
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-4 w-full">
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
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Password Input */}
          <div className="relative">
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
              {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </div>

          {/* Confirm Button */}
          <button
            onClick={handleSubmit}
            className="w-full py-3 px-6 bg-emerald-500 hover:bg-emerald-600 text-white font-medium rounded-lg transition-colors mt-4"
          >
            Confirm
          </button>
        </div>
        </div>
      </div>
    </div>
  );
}