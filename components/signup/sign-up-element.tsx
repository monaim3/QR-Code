"use client";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import InputField from "../../components/common/input_filed";
import Link from "next/link";

interface SignUpProps{
  socialRow?: boolean
}

export default function SignUpElements ({socialRow = false}: SignUpProps) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = () => {
    alert(`Email: ${email}\nPassword: ${password}`);
  };

    return (
        <div className="flex flex-col w-full desktop:w-[456px] max-h-full">
          <p className="text-[24px] font-bold leading-[32px] text-center desktop:text-start text-[#0A0909] tracking-[0%]">
            Create a FREE account to download, edit and manage your QR codes
          </p>

          <h3 className="mt-[8px] text-[16px] font-normal leading-[24px] text-center desktop:text-start text-[#3F3E3E] font-body_text">
            Join millions of users already using the smartest QR Code Generator!
          </h3>

          {/* Form */}
          <div className="w-full desktop:w-[424px] mt-[32px] flex flex-col gap-[16px]">
            <InputField
              value={email}
              onChange={setEmail}
              placeholder="Enter your email"
              type="email"
              leading={<Mail size={20} />}
              desktopWidth={424}
            />

            <InputField
              value={password}
              onChange={setPassword}
              placeholder="Enter your password"
              type={showPassword ? "text" : "password"}
              leading={<Lock size={20} />}
              trailing={
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              }
              desktopWidth={424}
            />

            <button
              onClick={handleSubmit}
              className="w-full desktop:w-full h-[48px] bg-[#01A56D] hover:bg-emerald-700 text-white text-[18px] font-medium leading-[16px] rounded-[10px] transition-colors duration-200 mt-[24px]"
            >
              Create Account
            </button>
          </div>

          {/* Divider */}
          <div className="w-full desktop:w-[424px] flex items-center gap-[16px] mt-[32px]">
            <div className="flex-1 h-px bg-gray-200" />
            <span className="text-gray-400 text-[16px] leading-[24px] font-normal">OR</span>
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Social Buttons */}
         { !socialRow ?
          <div className="flex flex-col gap-3 w-full desktop:w-[424px] mt-[32px]">
            {/* Google */}
            <button
              onClick={() => alert("Google sign in clicked")}
              className="flex items-center justify-center w-full h-[48px] py-[12px] border border-gray-200 rounded-[10px] hover:shadow-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <p className="text-[14px] leading-[22px] pl-[8px] font-medium">Continue with Google</p>
            </button>

            {/* Facebook */}
            <button
              onClick={() => alert("Facebook sign in clicked")}
              className="flex items-center justify-center w-full h-[48px] py-[12px] border border-gray-200 rounded-[10px] hover:shadow-lg transition-colors duration-200"
            >
              <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
              <p className="text-[14px] leading-[22px] pl-[8px] font-medium">Continue with Facebook</p>
            </button>

            {/* Apple */}
            <button
              onClick={() => alert("Apple sign in clicked")}
              className="flex items-center justify-center w-full h-[48px] py-[12px] border border-gray-200 rounded-[10px] hover:shadow-lg transition-colors duration-200"
            >
            <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000">
                <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
              </svg>
              <p className="text-[14px] leading-[22px] pl-[8px] font-medium">Continue with Apple</p>
            </button>
          </div> : 
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
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="#1877F2"
              >
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
          }

          {/* Login Link */}
          <div className="text-center desktop:text-start mt-[32px]">
            <span className="text-[14px] font-normal leading-[22px] text-gray-600">
              Already have an account?
            </span>
            <Link href="/login" className="text-[14px] text-[#01A56D] leading-[22px] font-medium pl-[8px] hover:underline">
              Log In
            </Link>
          </div>

          <div className="w-full desktop:w-auto text-[12px] leading-[20px] font-normal text-[#3F3E3E] font-body_text flex flex-wrap gap-x-[4px] pt-[32px] text-center desktop:text-start justify-center desktop:justify-start">
          <span>By clicking "Create account", you confirm that you have read and consent to our</span>
          <Link href="#" className="text-[#01A56D] underline">
            Terms and conditions
          </Link>
          <span>and</span>
          <Link href="#" className="text-[#01A56D] underline">
            Privacy policy
          </Link>
        </div>
        </div>
    );
}