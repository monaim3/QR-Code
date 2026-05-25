import { Trash2 } from "lucide-react";
import InputUrl from "./InputUrl";
import { RequiredTextInput } from "./RequiredInput";
import { useT } from "@/utils/t";
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
  buttonTextValidationKey?: string;
  urlValidationKey?: string;
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
  buttonTextValidationKey,
  urlValidationKey,
}: ButtonInputProps) {
  const t = useT();
  return (
    <div className="flex gap-4 items-start w-full bg-[#F8F9F9] p-4 rounded-[var(--Corner-Radius-10)] ">
      <div className="flex flex-col gap-4 lg:flex-row  lg:gap-6 items-start flex-1">
        <RequiredTextInput
          label={t(
            "generator__content_form_section__images_information__button_text__label",
          )}
          value={buttonText}
          onChange={(value) => {
            if (onButtonTextChange) {
              onButtonTextChange(value);
            }
          }}
          placeholder={t(
            "generator__content_form_section__images_information__button_text__placeholder",
          )}
          maxLength={100}
          validationKey={buttonTextValidationKey}
        />
        <InputUrl
          label={t(
            "generator__content_form_section__images_information__button_url__label",
          )}
          placeholder={t("ui__input_placeholders__url")}
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
          validationKey={urlValidationKey}
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
