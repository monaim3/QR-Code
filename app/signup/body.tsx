"use client";
import Container from "../../components/common/parent-container";
import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, Check } from "lucide-react"
import InputField from "../../components/common/input_filed";
import Link from "next/link";
import FourCorner from "../../components/icons/corner";

class AuthFeatures {
  id: number;
  label: string;
  constructor(id: number, label: string){
    this.id = id;
    this.label = label;
  }
}

const authFeatureList = [
  new AuthFeatures(1,'Unlimited QR codes'),
  new AuthFeatures(2,'Unlimited QR code scans'),
  new AuthFeatures(3,'Unrestricted customization options'),
  new AuthFeatures(4,'Unlimited access to analytics'),
  new AuthFeatures(5,'Unlimited downloads'),
  new AuthFeatures(6,'Full access to all download formats'),
  new AuthFeatures(7,'Create any type of QR code you need'),
]

export default function SignupBody() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = () => {
    alert(`Email: ${email}\nPassword: ${password}`);
  };

   return (
     <Container className="flex items-center justify-center min-h-screen">
      <div className="w-[350px] desktop:w-[976px] h-[814px] bg-white rounded-[12px] px-[16px] desktop:px-[32px] pb-[24px] deesktop:pb-[32px] desktop:pt-[32px] shadow-lg flex items-start justify-between">
          <div className="flex flex-col w-full item-start justify-start w-[456px] h-full bg-whit">
            <p className="text-[20px] desktop:text-[24px] font-bold leading-[28px] desktop:leading-[32px] text-center desktop:text-start var(--Black) tracking-[0%]">
            Create a FREE account to download, edit and manage your QR codes
           </p>
            <h3 className="mt-[8px] text-[16px] font-regular leading-[24px] text-center desktop:text-start text-[#3F3E3E]">
            Join millions of users already using the smartest QR Code Generator!
           </h3>
           {/* Form */}
           <div className="w-[318px] desktop:w-[424px] mt-[32px]">
              {/* Email Input */}
                <InputField
                value={email}
                onChange={setEmail}
                placeholder="Enter your email"
                type="email"
                leading={<Mail size={20} />}
                desktopWidth={424}
                />

              {/* Password Input */}
              <div className="mt-[16px]">
                <InputField
                value={password}
                onChange={setPassword}
                placeholder="Enter your password"
                type="password"
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
              </div>
              
              {/* Signup In Button */}
              <div className="mt-[24px]">
                <button
                onClick={handleSubmit}
                className="w-[318px] desktop:w-full h-[48px] bg-[#01A56D] hover:bg-emerald-700 text-white text-[18px] leading-[16px] font-medium rounded-[10px] transition-colors duration-200"
              >
              Create Account
              </button>
              </div>
              
           </div>
            {/* Divider */}
            <div className="w-[318px] desktop:w-[424px] flex items-center gap-[16px] mt-[44px]">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-gray-400 text-[16px] leading-[24px] font-regular">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>
             {/* Social Login Buttons */}
            <div className="flex flex-col gap-3 w-[318px] desktop:w-[424px] mt-[44px]">
              {/* Google */}
              <button
                onClick={() => alert("Google sign in clicked")}
                className="flex items-center justify-center w-full h-[48px] py-[12px] border border-gray-200 rounded-[10px] hover:shadow-lg transition-colors duration-200"
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
                <p className="text-[14px] leading-[22px] pl-[8px] font-medium">Continue with Google</p>
              </button>

              {/* Facebook */}
              <button
                onClick={() => alert("Facebook sign in clicked")}
                className="flex items-center justify-center w-full h-[48px] py-[12px] border border-gray-200 rounded-[10px] hover:shadow-lg transition-colors duration-200"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#1877F2">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
                <p className="text-[14px] leading-[22px] pl-[8px] font-medium">Continue with Facebook</p>
              </button>

              {/* Apple */}
              <button
                onClick={() => alert("Apple sign in clicked")}
                className="flex items-center justify-center w-full h-[48px] py-[12px] border border-gray-200 rounded-[10px] hover:shadow-lg transition-colors duration-200"
              >
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="#000000">
                  <path d="M17.05 20.28c-.98.95-2.05.88-3.08.4-1.09-.5-2.08-.48-3.24 0-1.44.62-2.2.44-3.06-.4C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09l.01-.01zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z" />
                </svg>
                <p className="text-[14px] leading-[22px] pl-[8px] font-medium">Continue with Apple</p>
              </button>
            </div>
              {/* Sign Up Link */}
            <div className="text-center desktop:text-start mt-[32px]">
              <span className="text-[14px] font-regular leading-[22px] text-gray-600">Don't have an account? </span>
              <Link href="/login"
                className="text-[14px] text-[#01A56D] leading-[22px] hover:text-[#01A56D] font-medium pl-[16px]"
              >
                Log In
              </Link>

            </div>
            <div className="text-center desktop:text-start mt-[32px]">
          <span className="text-[12px] font-regular leading-[20px] text-gray-400">
            By clicking "Create account", you confirm that you have read and consent to
          </span>
          <span className="pl-[4px] text-[12px] font-regular text-gray-400">
            our
          </span>
          <Link href="#"
            className="text-[12px] text-[#01A56D] hover:text-[#01A56D] font-regular pl-[5px] underline"
          >
            Terms and condition
         </Link>
         <span className="pl-[4px] text-[12px] font-regular text-gray-400">
            and
          </span>
           <Link href="#"
            className="text-[12px] text-[#01A56D] hover:text-[#01A56D] font-regular pl-[5px] underline"
          >
            Privacy policy
         </Link>
            </div>

          </div>
          <div className="w-[456px] desktop:flex desktop:flex-col items-center justify-start hidden desktop:block w-full bg-[#E7F4ED] desktop:pt-[32px] desktop:px-[56px] desktop:pb-[56px] rounded-[10px]">
            <div>
             <p className="text-[24px] font-bold leading-[32px] text-center var(--Black) tracking-[0%]">
              Your QR code is ready!
             </p>
            </div>
            <div className="relative w-[260px] h-[260px] bg-white rounded-[10px] mt-[32px] flex items-start justify-center">
            {/* Centered FourCorner */}
            <div className="relative w-[220px] h-[220px]">
              <FourCorner className="absolute inset-0" />

              {/* QR image centered inside FourCorner */}
              <img
                src="/images/scan-me.svg"
                alt="QR Code"
                className="absolute inset-0 m-auto w-[180px] h-[180px] object-contain"
              />
            </div>
          </div>
            <div className="mt-[64px] gap-[16px]">
              {authFeatureList.map((featre) => {
                return (<div key={featre.id} className="flex gap-[8px] mb-[16px]">
                  <Check className="w-5 h-5 text-gray" />
                  <p className="text-[14px] text-regular leading-[24px]">{featre.label}</p>
                </div>);
              })}
            </div>
          </div>
        </div>
      </Container> 
   );
}