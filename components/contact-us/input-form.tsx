"use client";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import InputField from "../../components/common/input_filed";
import Link from "next/link";
import { useRouter } from "next/navigation";
// {for validation}
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Input } from "../ui/input";
import SimpleInputField from "../../components/contact-us/input-field";
import SimpleDropdown from "./subject-selection";
import { useContactUsMutation } from "@/store/api/supportApi";
import { SubmitHandler } from "react-hook-form";
import { useT } from "@/utils/t";

const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  name: z.string().min(1, "Name is required"),
  surName: z.string().min(1, "Surename is required"),
  message: z.string().min(1, "Message is required"),
  subject: z.string().min(1, "Subject is required"),
});

type SignUpForm = z.infer<typeof signUpSchema>;

interface SignUpProps {
  socialRow?: boolean;
  withRightPannel?: boolean;
  paddingRight?: boolean;
}

export default function ContactUsInputForm({
  socialRow = false,
  withRightPannel = true,
  paddingRight = true,
}: SignUpProps) {
  const t = useT();
  const [contactUs, { isLoading }] = useContactUsMutation();
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { control, handleSubmit, formState, reset } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      name: "",
      surName: "",
      message: "",
      subject: "",
    },
  });

  const { errors, isSubmitting } = formState;
  const [isFocused, setIsFocused] = useState(false);

  const onSubmit: SubmitHandler<SignUpForm> = async (data) => {
    try {
      await contactUs({
        name: data.name,
        surname: data.surName,
        email: data.email,
        message: data.message,
        subject: data.subject as
          | "GENERAL"
          | "TECHNICAL_SUPPORT"
          | "BILLING"
          | "SALES",
      }).unwrap();
      reset();
      alert("Your message has been sent successfully!");
    } catch (error) {
      console.error(error);
      alert(
        "An error occurred while sending your message. Please try again later.",
      );
    }
  };

  return (
    <div className={`flex flex-col w-full desktop:flex-3 max-h-full`}>
      <h1 className="text-[24px] leading-[32px] desktop:text-[32px] desktop:leading-[40px] font-bold text-start text-[var(--Black)] tracking-[0%]">
        {t("public__get_in_touch__button_title")}
      </h1>

      <p className="mt-1 text-[16px] font-normal leading-[24px] text-start text-[#3F3E3E] font-body_text">
        {t("public__contact_us__description")}
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full mt-6 desktop:mt-8 flex flex-col gap-4"
      >
        <div className="flex flex-col desktop:flex-row gap-4 desktop:gap-6">
          <div className="flex flex-col flex-1 gap-2">
            <label
              htmlFor="name"
              className="text-[16px] leading-[24px] font-semibold"
            >
              {t("generator__content_form_section__social__input__name_label")}
            </label>
            <Controller
              name="name"
              control={control}
              render={({ field, fieldState }) => (
                <div className="flex flex-col gap-1 w-full">
                  <SimpleInputField
                    className="w-full"
                    id="name"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={t(
                      "public__dashboard__account__billing_info__name_placeholder",
                    )}
                    type="name"
                    error={!!fieldState.error}
                  />
                  {fieldState.error && (
                    <span className="text-[var(--error)] text-[12px] leading-[20px]">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>
          <div className="flex flex-col flex-1 gap-2">
            <label
              htmlFor="surName"
              className="text-[16px] leading-[24px] font-semibold"
            >
              {t("public__contact_us__fields__surname__label")}*
            </label>
            <Controller
              name="surName"
              control={control}
              render={({ field, fieldState }) => (
                <div className="flex flex-col gap-1">
                  <SimpleInputField
                    id="surName"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={t(
                      "public__dashboard__account__billing_info__name_placeholder",
                    )}
                    type="surName"
                    error={!!fieldState.error}
                  />
                  {fieldState.error && (
                    <span className="text-[var(--error)] text-[12px] leading-[20px]">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>
        </div>
        <div className="flex flex-col desktop:flex-row gap-4 desktop:gap-6 relative z-10">
          <div className="flex flex-col flex-1 gap-2">
            <label
              htmlFor="email"
              className="text-[16px] leading-[24px] font-semibold"
            >
              {t("public__dashboard__account__settings__email__label")}*
            </label>
            <Controller
              name="email"
              control={control}
              render={({ field, fieldState }) => (
                <div className="flex flex-col gap-1">
                  <SimpleInputField
                    id="email"
                    value={field.value}
                    onChange={field.onChange}
                    placeholder={t(
                      "public__contact_us__fields__email__placeholder",
                    )}
                    type="email"
                    error={!!fieldState.error}
                  />
                  {fieldState.error && (
                    <span className="text-[var(--error)] text-[12px] leading-[20px]">
                      {fieldState.error.message}
                    </span>
                  )}
                </div>
              )}
            />
          </div>
          <Controller
            name="subject"
            control={control}
            render={({ field }) => (
              <SimpleDropdown value={field.value} onChange={field.onChange} />
            )}
          />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <label
            htmlFor="message"
            className="text-[16px] leading-[24px] font-semibold"
          >
            {t("public__contact_us__fields__message__label")}*
          </label>
          <Controller
            name="message"
            control={control}
            render={({ field, fieldState }) => (
              <div className="flex flex-col gap-1 w-full">
                <SimpleInputField
                  id="message"
                  className="w-full"
                  value={field.value}
                  onChange={field.onChange}
                  placeholder={t("public__contact_us__fields__message__label")}
                  type="message"
                  multiline={true}
                  error={!!fieldState.error}
                />
                {fieldState.error && (
                  <span className="text-[var(--error)] text-[12px] leading-[20px]">
                    {fieldState.error.message}
                  </span>
                )}
              </div>
            )}
          />
        </div>

        <button
          type="submit"
          disabled={isLoading}
          className="w-full max-w-[188px] h-12 bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white text-[18px] font-medium leading-[16px] rounded-[10px] transition-colors duration-300 mt-2"
        >
          {isLoading ? "Sending..." : t("public__contact_us__submit_button")}
        </button>
      </form>
    </div>
  );
}
