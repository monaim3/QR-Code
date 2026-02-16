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

const signUpSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(8, "Password must be at least 8 characters"),
  name: z.string().min(1, "Name is required"),
  surName: z.string().min(1, "Surename is required"),
  message:  z.string().min(1, "Message is required"),
});

type SignUpForm = z.infer<typeof signUpSchema>;

interface SignUpProps{
  socialRow?: boolean;
  withRightPannel?: boolean;
  paddingRight?: boolean;
}

export default function ContactUsInputForm ({socialRow = false, withRightPannel = true, paddingRight = true}: SignUpProps) {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { control, handleSubmit, formState } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      email: "",
      password: "",
      name:"",
      surName:"",
      message:"",
    },
  });

  const { errors, isSubmitting } = formState;
  const [isFocused, setIsFocused] = useState(false);

  const onSubmit = async (data: SignUpForm) => {
    try {
      console.log("Form Data:", data);
      /// signup logic
      //alert("Account created successfully!");
      router.push("/plan-and-pricing");
    } catch (error) {
      console.error(error);
    }
  };

    return (
        <div className={`flex flex-col w-full desktop:flex-3 max-h-full ${paddingRight ? "desktop:pr-8" : "desktop:pr-0"}`}>
          <h1 className="text-[24px] leading-[32px] desktop:text-[32px] desktop:leading-[40px] font-bold text-center desktop:text-start text-[#0A0909] tracking-[0%]">
          Contact Us
          </h1>

          <p className="mt-1 text-[16px] font-normal leading-[24px] text-center desktop:text-start text-[#3F3E3E] font-body_text">
          If you have any questions or concerns, please fill out the form below and our team will reach out to you within a few hours.
          </p>

          {/* Form */}
          <form 
          onSubmit={handleSubmit(onSubmit)}
          className="w-full mt-8 flex flex-col gap-4">
            <div className="flex flex-col desktop:flex-row gap-6">
            <div className="flex flex-col flex-1">
                <p className="text-[16px] leading-[24px] font-bold">
                    Name*
                </p>
                <div className="w-full flex flex-col mt-2">
                <Controller
                name="name"
                control={control}
                render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-1 w-full">
                    <SimpleInputField
                     className="w-full"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="e.g. John"
                        type="name"
                        error={!!fieldState.error}
                    />
                    {fieldState.error && (
                        <span className="text-[var(--error)] text-[12px] leading-[20px]">{fieldState.error.message}</span>
                    )}
                    </div>
                )}
                />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <p className="text-[16px] leading-[24px] font-bold">
                    Surname*
                </p>
                <div className="flex flex-col mt-2">
                <Controller
                name="surName"
                control={control}
                render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-1">
                    <SimpleInputField
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="e.g. John"
                        type="surName"
                        error={!!fieldState.error}
                    />
                    {fieldState.error && (
                        <span className="text-[var(--error)] text-[12px] leading-[20px]">{fieldState.error.message}</span>
                    )}
                    </div>
                )}
                />
                </div>
            </div>
            </div>
            <div className="flex flex-col desktop:flex-row gap-6">
            <div className="flex flex-col flex-1">
                <p className="text-[16px] leading-[24px] font-bold">
                    Email*
                </p>
                <div className="flex flex-col mt-2">
                <Controller
                name="email"
                control={control}
                render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-1">
                    <SimpleInputField
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="e.g. johndoe@mail.com"
                        type="email"
                        error={!!fieldState.error}
                    />
                    {fieldState.error && (
                        <span className="text-[var(--error)] text-[12px] leading-[20px]">{fieldState.error.message}</span>
                    )}
                    </div>
                )}
                />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <p className="text-[16px] leading-[24px] font-bold">
                    Subject*
                </p>
                <div className="flex flex-col mt-2">
                <Controller
                name="surName"
                control={control}
                render={({ field, fieldState }) => (
                    <div className="flex flex-col gap-1">
                    <SimpleInputField
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="e.g. John"
                        type="surName"
                        error={!!fieldState.error}
                    />
                    {fieldState.error && (
                        <span className="text-[var(--error)] text-[12px] leading-[20px]">{fieldState.error.message}</span>
                    )}
                    </div>
                )}
                />
                </div>
            </div>
            </div>
            <div className="w-full">
            <Controller
                name="message"
                control={control}
                render={({ field, fieldState }) => (
                 <div className="flex flex-col gap-1 w-full">
                    <SimpleInputField
                    className="w-full"
                        value={field.value}
                        onChange={field.onChange}
                        placeholder="Message"
                        type="message"
                        multiline={true}
                        error={!!fieldState.error}
                    />
                    {fieldState.error && (
                        <span className="text-[var(--error)] text-[12px] leading-[20px]">{fieldState.error.message}</span>
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