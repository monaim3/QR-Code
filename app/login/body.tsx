"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import Container from "../../components/common/parent-container";
import InputField from "../../components/common/input_filed";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { loginUser, googleLogin, facebookLogin, appleLogin } from '@/store/slices/auth-slice';
import { useAppDispatch } from "@/store/hooks";
import { useRouter } from "next/navigation";
import { useT } from "@/utils/t";
import { useEffect, useRef } from "react";
import { useAppSelector } from "@/store/hooks";

const loginSchema = z.object({
  email: z.string().min(1, "This field is required and cannot be left blank.").email("You have entered an invalid email address. Please try again."),
  password: z.string().min(8, "Password must be at least 8 characters"),
});

type LoginForm = z.infer<typeof loginSchema>;

export default function LoginBody() {
  const t = useT();
  const dispatch = useAppDispatch();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const googleInitialized = useRef(false);
  const facebookInitialized = useRef(false);
  const appleInitialized = useRef(false);

  const { error, loading } = useAppSelector((state) => state.auth);

  const { control, handleSubmit, formState } = useForm<LoginForm>({
      resolver: zodResolver(loginSchema),
      defaultValues: {
        email: "",
        password: "",
      },
    });
  
  const { errors, isSubmitting } = formState;

  const onSubmit = async (data: LoginForm) => {
      try {
      const payload = {
        email: data.email,
        password: data.password,
      };
      
     const resultAction = await dispatch(loginUser(payload));

     if (loginUser.fulfilled.match(resultAction)) {
           console.log("Login successful:", resultAction.payload);
           window.location.href = "/cabinet/qr-codes";;
         }
     
         if (loginUser.rejected.match(resultAction)) {
           console.log("Login failed:", resultAction.payload);
         }
    
      } catch (error) {
        console.error(error);
      }
    };

useEffect(() => {
  // Google init
  if (!googleInitialized.current) {
    googleInitialized.current = true;
    // @ts-ignore
    window.google?.accounts.id.initialize({
      client_id: process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!,
      callback: async (response: { credential: string }) => {
        const resultAction = await dispatch(googleLogin({ token: response.credential }));
        if (googleLogin.fulfilled.match(resultAction)) {
          window.location.href = "/cabinet/qr-codes";;
        }
      },
    });
  }

  // Facebook init
if (!facebookInitialized.current) {
  facebookInitialized.current = true;

  // @ts-ignore
  window.fbAsyncInit = function () {
    // @ts-ignore
    FB.init({
      appId: process.env.NEXT_PUBLIC_FACEBOOK_APP_ID!,
      cookie: true,
      xfbml: true,
      version: "v19.0",
    });
    // @ts-ignore
    window.fbReady = true; // ← mark as ready after init
  };

  const script = document.createElement("script");
  script.src = "https://connect.facebook.net/en_US/sdk.js";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);
 }

 // Apple init
if (!appleInitialized.current) {
  appleInitialized.current = true;

  // @ts-ignore
  window.AppleID?.auth.init({
    clientId: process.env.NEXT_PUBLIC_APPLE_CLIENT_ID!,
    scope: "name email",
    redirectURI: process.env.NEXT_PUBLIC_APPLE_REDIRECT_URI!,
    usePopup: true, // ← popup mode, no redirect needed
  });
 }
}, []);

const handleGoogleClick = () => {
  // @ts-ignore
  window.google?.accounts.id.prompt();
};

const handleFacebookClick = () => {
  // @ts-ignore
  if (!window.fbReady) {
    console.warn("Facebook SDK not ready yet, please try again.");
    return;
  }

  // @ts-ignore
  FB.login(
    (response: { authResponse?: { accessToken: string }; status: string }) => {
      if (response.authResponse?.accessToken) {
        handleFacebookToken(response.authResponse.accessToken);
      }
    },
    { scope: "public_profile,email" }
  );
};

const handleFacebookToken = async (accessToken: string) => {
  const resultAction = await dispatch(facebookLogin({ token: accessToken }));
  if (facebookLogin.fulfilled.match(resultAction)) {
    window.location.href = "/cabinet/qr-codes";;
  }
};

const handleAppleClick = async () => {
  try {
    // @ts-ignore
    const response = await window.AppleID.auth.signIn();

    // response.authorization.id_token is the token to send to backend
    if (response.authorization?.id_token) {
      const resultAction = await dispatch(
        appleLogin({ token: response.authorization.id_token })
      );

      if (appleLogin.fulfilled.match(resultAction)) {
        window.location.href = "/cabinet/qr-codes";;
      }
    }
  } catch (err) {
    console.error("Apple sign in failed:", err);
  }
};

  return (
    <Container>
      {/* Page Wrapper */}
      <div className="min-h-[calc(100vh-72px)] flex items-center justify-center">
        {/* Login Card */}
        <div
          className="
            w-[400px]
            bg-white
            rounded-xl
            p-6
            desktop:p-8
            flex
            flex-col
            items-center
            gap-8
            shadow-card
          "
        >
          <div className="w-full flex flex-col gap-6">
            {/* Title */}
            <h1 className="text-[24px] font-bold leading-[32px] text-center text-[var(--Black)]">
              {t("auth__login__title")}
            </h1>

            {/* Form */}
                <form
                   onSubmit={handleSubmit(onSubmit)}
                   noValidate
                   className="w-full flex flex-col gap-4"
                 >
                   <Controller
                     name="email"
                     control={control}
                     render={({ field, fieldState }) => (
                       <div className="flex flex-col gap-1">
                         <InputField
                           value={field.value}
                           onChange={field.onChange}
                           placeholder={t("auth__common__input_login_placeholder")}
                           type="email"
                           leading={<Mail size={20} />}
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
           
                   <Controller
                     name="password"
                     control={control}
                     render={({ field, fieldState }) => (
                       <div className="flex flex-col gap-1">
                         <InputField
                           value={field.value}
                           onChange={field.onChange}
                           placeholder={t("auth__common__input_password_placeholder")}
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
                     className="w-full h-12 bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white text-[18px] font-medium leading-[16px] rounded-[10px] transition-colors duration-300 mt-2 flex items-center justify-center"
                   >
                    {loading ? (
                       <svg
                          className="animate-spin h-8 w-8 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                    ) : (
                      t("auth__common__login_submit")
                    )}
                   </button>

                  {error && (
                    <span className="text-[var(--error)] text-[12px] leading-[20px] text-start">
                      Email or password is incorrect.
                    </span>
                  )}
                </form>

            {/* Forgot Password */}
            <div className="flex gap-4 text-center text-[14px] leading-[22px]">
              <span className="text-[#3F3E3E]">{t("auth__login__cta_forgot")} </span>
              <Link
                href="/forget-password"
                className="text-[#01A56D] font-medium hover:underline"
              >
                {t("auth__login__cta_forgot_action")}
              </Link>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full flex items-center gap-[16px]">
            <div className="flex-1 h-px bg-[#D3D8EB]" />
            <span className="text-[16px] leading-[24px] text-[var(--Grey)]">
              {t("auth__common__separator_title")}
            </span>
            <div className="flex-1 h-px bg-[#D3D8EB]" />
          </div>

          {/* Social Buttons */}
          <div className="w-full grid grid-cols-3 gap-[16px]">
            {/* Google */}
            <button
             onClick={handleGoogleClick}
              className="
                h-12
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
              <svg className="size-6" viewBox="0 0 24 24">
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
             onClick={handleFacebookClick}
              className="
                h-12
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
              <svg className="size-6" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </button>

            {/* Apple */}
            <button
              onClick={handleAppleClick}
              className="
                h-12
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
              <svg className="size-6" viewBox="0 0 24 24" fill="#000">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09z" />
                <path d="M12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
              </svg>
            </button>
          </div>

          {/* Sign Up */}
          <div className="flex gap-4 text-center text-[14px] leading-[22px]">
            <span className="text-[#3F3E3E]">{t("auth__login__cta_signup")}</span>
            <Link
              href="/sign-up?from=login"
              className="text-[#01A56D] font-medium hover:underline"
            >
              {t("auth__login__cta_signup_action")}
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
}
