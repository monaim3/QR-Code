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

const signUpSchema = z.object({
  email: z.string().min(1, "This field is required and cannot be left blank.").email("You have entered an invalid email address. Please try again."),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type SignUpForm = z.infer<typeof signUpSchema>;

interface SignUpProps {
  socialRow?: boolean;
  withRightPannel?: boolean;
  paddingRight?: boolean;
  fromDirect?: boolean;
}

export default function SignUpElements({
  socialRow = false,
  withRightPannel = true,
  paddingRight = true,
  fromDirect = false,
}: SignUpProps) {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();

  const { control, handleSubmit, formState } = useForm<SignUpForm>({
    resolver: zodResolver(signUpSchema),
    mode: "onChange",
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { errors, isSubmitting } = formState;

  const onSubmit = async (data: SignUpForm) => {
    try {
      router.push("/pricing");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div
      className={`flex flex-col w-full ${withRightPannel ? "desktop:w-1/2" : "desktop:w-full"} max-h-full ${paddingRight ? "desktop:pr-8" : "desktop:pr-0"}`}
    >
      <h1 className="text-[20px] leading-[28px] desktop:text-[24px] desktop:leading-[32px] font-bold text-center desktop:text-start text-[#0A0909] tracking-[0%]">
        {fromDirect
          ? "Sign up"
          : "Create a FREE account to download, edit and manage your QR codes"}
      </h1>

      <p className="mt-2 text-[16px] font-normal leading-[24px] text-center desktop:text-start text-[#3F3E3E] font-body_text">
        {fromDirect
          ? "Create a FREE account to download, edit and manage your QR codes"
          : "Join millions of users already using the smartest QR Code Generator!"}
      </p>

      {/* Form */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        className="w-full mt-8 flex flex-col gap-4"
      >
        <Controller
          name="email"
          control={control}
          render={({ field, fieldState }) => (
            <div className="flex flex-col gap-1">
              <InputField
                value={field.value}
                onChange={field.onChange}
                placeholder="Enter your email"
                type="email"
                leading={<Mail size={20} />}
                error={!!fieldState.error}
                success={fieldState.isDirty && !fieldState.error}
              />
              {fieldState.error && (
                <span className="text-[var(--error)] text-[12px] leading-[20px]">
                  {fieldState.error.message}
                </span>
              )}
            </div>
          )}
        />

        <Controller
          name="password"
          control={control}
          render={({ field, fieldState }) => (
            <div className="flex flex-col gap-1">
              <InputField
                value={field.value}
                onChange={field.onChange}
                placeholder="Enter your password"
                type={showPassword ? "text" : "password"}
                leading={<Lock size={20} />}
                desktopWidth={424}
                trailing={
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <Eye size={20} /> : <EyeOff size={20} />}
                  </button>
                }
                error={!!fieldState.error}
                success={fieldState.isDirty && !fieldState.error}
              />
              {fieldState.error && (
                <span className="text-[var(--error)] text-[12px] leading-[20px]">
                  {fieldState.error.message}
                </span>
              )}
            </div>
          )}
        />

        <button
          type="submit"
          className="w-full h-12 bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white text-[18px] font-medium leading-[16px] rounded-[10px] transition-colors duration-300 mt-2"
        >
          Create Account
        </button>
      </form>

      {/* Divider */}
      <div className="w-full flex items-center gap-[16px] mt-[32px]">
        <div className="flex-1 h-px bg-[var(--boarder-grey-50)]" />
        <span className="text-[var(--Grey)] text-[16px] leading-[24px] font-normal">
          OR
        </span>
        <div className="flex-1 h-px bg-[var(--boarder-grey-50)]" />
      </div>

      {/* Social Buttons */}
      {!socialRow ? (
        <div className="flex flex-col gap-4 w-full mt-[32px]">
          {/* Google */}
          <button
            onClick={() => alert("Google sign in clicked")}
            className="flex items-center justify-center w-full h-[48px] py-[12px] border border-[var(--Boarder-Grey)] rounded-[10px] hover:shadow-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            <p className="text-[14px] leading-[22px] pl-[8px] font-medium">
              Continue with Google
            </p>
          </button>

          {/* Facebook */}
          <button
            onClick={() => alert("Facebook sign in clicked")}
            className="flex items-center justify-center w-full h-[48px] py-[12px] border border-[var(--Boarder-Grey)] rounded-[10px] hover:shadow-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            <p className="text-[14px] leading-[22px] pl-[8px] font-medium">
              Continue with Facebook
            </p>
          </button>

          {/* Apple */}
          <button
            onClick={() => alert("Apple sign in clicked")}
            className="flex items-center justify-center w-full h-[48px] py-[12px] border border-[var(--Boarder-Grey)] rounded-[10px] hover:shadow-lg transition-colors duration-200"
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
            <p className="text-[14px] leading-[22px] pl-[8px] font-medium">
              Continue with Apple
            </p>
          </button>
        </div>
      ) : (
        <div className="w-full grid grid-cols-3 gap-[16px] mt-[32px]">
          {/* Google */}
          <button
            className="
                h-[48px]
                rounded-[10px]
                border
                border-[#D3D8EB]
                flex
                items-center
                justify-center
                hover:shadow-md
                transition
              "
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
          </button>

          {/* Facebook */}
          <button
            className="
                h-[48px]
                rounded-[10px]
                border
                border-[#D3D8EB]
                flex
                items-center
                justify-center
                hover:shadow-md
                transition
              "
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
          </button>

          {/* Apple */}
          <button
            className="
                h-[48px]
                rounded-[10px]
                border
                border-[#D3D8EB]
                flex
                items-center
                justify-center
                hover:shadow-md
                transition
              "
          >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000">
              <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09z" />
              <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
            </svg>
          </button>
        </div>
      )}

      {/* Login Link */}
      <div className="text-center desktop:text-start mt-[32px]">
        <span className="text-[14px] font-normal leading-[22px] text-gray-600">
          Already have an account?
        </span>
        <Link
          href="/login"
          className="text-[14px] text-[#01A56D] leading-[22px] font-medium pl-[8px] hover:underline"
        >
          Log In
        </Link>
      </div>

      <div className="text-[12px] leading-[20px] font-normal text-[#3F3E3E] font-body_text pt-[32px] text-center desktop:text-start justify-center desktop:justify-start">
        By clicking "Create account", you confirm that you have read and consent
        to our{" "}
        <Link href="/terms-of-use" className="text-[#01A56D] underline">
          Terms and conditions
        </Link>{" "}
        and{" "}
        <Link href="/privacy-policy" className="text-[#01A56D] underline">
          Privacy policy
        </Link>
      </div>
    </div>
  );
}
