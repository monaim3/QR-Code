import { useAppSelector, useAppDispatch } from "@/store/hooks";

interface Props {
  label: string;
  placeholder?: string;
  id: string;
  type?: string;
  value?: string;
  onChange?: (value: string) => void;
  required?: boolean;
  errorKey: string;
  setErrorAction: any;
}

export default function InputUrl({
  label,
  placeholder,
  id,
  type = "text",
  value,
  onChange = () => {},
  required = false,
  errorKey,
  setErrorAction,
}: Props) {
  const dispatch = useAppDispatch();
  const error = useAppSelector(
    (state) => state.facebook[errorKey as keyof typeof state.facebook],
  );

  const isValidUrl = (url: string) => {
    if (!url) return true;

    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const handleChange = (inputValue: string) => {
    onChange(inputValue);

    if (inputValue && !isValidUrl(inputValue)) {
      dispatch(
        setErrorAction("You have entered an invalid link. Please try again."),
      );
    } else if (required && !inputValue) {
      dispatch(setErrorAction("This field is required."));
    } else {
      dispatch(setErrorAction(""));
    }
  };

  const handleBlur = () => {
    if (value && !isValidUrl(value)) {
      dispatch(
        setErrorAction("You have entered an invalid link. Please try again."),
      );
    } else if (required && !value) {
      dispatch(setErrorAction("This field is required."));
    } else {
      dispatch(setErrorAction(""));
    }
  };

  return (
    <div className="flex flex-col gap-2 w-full">
      <label
        htmlFor={id}
        className="text-[var(--Black)] text-[16px] leading-[24px] font-medium"
      >
        {label}
        {required && <span className="text-black ml-1">*</span>}
      </label>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        value={value}
        onChange={(e) => handleChange(e.target.value)}
        onBlur={handleBlur}
        required={required}
        className={`h-12 py-2 px-4 text-[var(--Black)] text-[16px] leading-[24px] placeholder:text-[var(--Grey)] rounded-[var(--Corner-Radius-10)] border focus:outline-none focus:ring-2 ${
          error
            ? "border-red-500 focus:border-red-500 focus:ring-red-500 hover:ring-red-500"
            : "border-[var(--Boarder-Grey)] focus:border-[var(--Blue)] focus:ring-[var(--Blue)] hover:ring-2 hover:ring-[var(--Boarder-Grey)]"
        }`}
      />
      <div className="h-5">
        {error && (
          <p className="text-red-500 text-[14px] leading-[20px]">
            {error as string}
          </p>
        )}
      </div>
    </div>
  );
}
