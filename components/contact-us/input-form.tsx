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

const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(1, "Name is required"),
  surName: z.string().min(1, "Surename is required"),
  message: z.string().min(1, "Message is required"),
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
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { control, handleSubmit, formState } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      surName: "",
      message: "",
    },
  });

  const { errors, isSubmitting } = formState;
  const [isFocused, setIsFocused] = useState(false);

  const onSubmit = async (data: SignUpForm) => {
    try {
      console.log("Form Data:", data);
      /// signup logic
      //alert("Account created successfully!");
      router.push("/prices");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={`flex flex-col w-full desktop:flex-3 max-h-full`}>
      <h1 className="text-[24px] leading-[32px] desktop:text-[32px] desktop:leading-[40px] font-bold text-start text-[var(--Black)] tracking-[0%]">
        Contact Us
      </h1>

      <p className="mt-1 text-[16px] font-normal leading-[24px] text-start text-[#3F3E3E] font-body_text">
        If you have any questions or concerns, please fill out the form below
        and our team will reach out to you within a few hours.
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="w-full mt-6 desktop:mt-8 flex flex-col gap-4"
      >
        <div className="flex flex-col desktop:flex-row gap-4 desktop:gap-6">
          <div className="flex flex-col flex-1 gap-2">
            <label
              htmlFor="name"
              className="text-[16px] leading-[24px] font-semibold"
            >
              Name*
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
                    placeholder="e.g. John"
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
              Surname*
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
                    placeholder="e.g. John"
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
        <div className="flex flex-col desktop:flex-row gap-4 desktop:gap-6">
          <div className="flex flex-col flex-1 gap-2">
            <label
              htmlFor="email"
              className="text-[16px] leading-[24px] font-semibold"
            >
              Email*
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
                    placeholder="e.g. johndoe@mail.com"
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
          <SimpleDropdown />
        </div>
        <div className="flex flex-col flex-1 gap-2">
          <label
            htmlFor="message"
            className="text-[16px] leading-[24px] font-semibold"
          >
            Message*
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
                  placeholder="Message"
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
          className="w-full max-w-[188px] h-12 bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white text-[18px] font-medium leading-[16px] rounded-[10px] transition-colors duration-300 mt-2"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
