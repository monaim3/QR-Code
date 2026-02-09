import { Trash2 } from "lucide-react";
import InputUrl from "./InputUrl";
import { RequiredTextInput } from "./RequiredInput";

interface ButtonInputProps {
  id: string;
  buttonText: string;
  url: string;
  buttonTextError: string;
  urlError: string;
  onRemove: () => void;
  onButtonTextChange?: (value: string) => void;
  onUrlChange?: (value: string) => void;
  onButtonTextError?: (error: string) => void;
  onUrlError?: (error: string) => void;
}

export default function ButtonInput({
  id,
  buttonText,
  url,
  buttonTextError,
  urlError,
  onRemove,
  onButtonTextChange,
  onUrlChange,
  onButtonTextError,
  onUrlError,
}: ButtonInputProps) {
  return (
    <div className="flex gap-4 items-start w-full bg-[#F8F9F9] p-4 rounded-[var(--Corner-Radius-10)] ">
      <div className="flex flex-col gap-4 lg:flex-row  lg:gap-6 items-start flex-1">
        <RequiredTextInput
          label="Button text"
          value={buttonText}
          onChange={(value) => {
            if (onButtonTextChange) {
              onButtonTextChange(value);
            }
          }}
          placeholder="e.g. Click here"
          maxLength={100}
        />
        <InputUrl
          label="URL"
          placeholder="e.g. pauljones.com"
          id={`button-url-${id}`}
          value={url}
          onChange={(value) => {
            if (onUrlChange) {
              onUrlChange(value);
            }
          }}
          required={true}
          error={urlError}
          onError={(error: string) => {
            if (onUrlError) {
              onUrlError(error);
            }
          }}
        />
      </div>
      <button
        onClick={onRemove}
        className="mt-8 p-2 py-3 px-4 border border-[var(--Boarder-Grey)] rounded-[10px] transition-colors"
        aria-label="Delete button"
      >
        <Trash2 size={24} className="text-[var(--Black)]" />
      </button>
    </div>
  );
}
