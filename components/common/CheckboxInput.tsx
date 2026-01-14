type CheckboxInputProps = {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
};

export const CheckboxInput = ({
  label,
  checked,
  onChange,
}: CheckboxInputProps) => {
  return (
    <div className="flex items-center gap-2">
      <input
        type="checkbox"
        id="transparent-bg"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
        className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
      />
      <label
        htmlFor="transparent-bg"
        className="text-sm text-gray-600 cursor-pointer select-none"
      >
        {label}
      </label>
    </div>
  );
};
