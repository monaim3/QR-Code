type TextInputProps = {
  label: string;
  value: string;
  onChange?: (value: string) => void;
  placeholder?: string;
};

export const TextInput = ({
  label,
  value,
  onChange,
  placeholder,
}: TextInputProps) => {
  return (
    <div className="w-full">
      <label className="block text-sm font-medium text-gray-900 mb-2">
        {label}
      </label>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange?.(e.target.value)}
        placeholder={placeholder}
        className="w-full px-4 py-3 border border-gray-300 rounded-[10px] focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-700"
      />
    </div>
  );
};
