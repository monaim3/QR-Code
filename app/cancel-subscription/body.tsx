"use client";
import React, { useState } from 'react';
import { Mail, ChevronRight, Loader2, CheckCircle2, XCircle } from 'lucide-react';
import Container from '@/components/common/parent-container';
import InputField from "../../components/common/input_filed";

// Types
interface FormState {
  email: string;
  isSubmitting: boolean;
  status: 'idle' | 'success' | 'error';
  message: string;
}

// Main Component
export default function CancelSubscriptionPage() {

  const [formState, setFormState] = useState<FormState>({
    email: '',
    isSubmitting: false,
    status: 'idle',
    message: ''
  });

  const [email, setEmail] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormState(prev => ({
      ...prev,
      email: e.target.value,
      status: 'idle',
      message: ''
    }));
  };

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!formState.email) {
      setFormState(prev => ({
        ...prev,
        status: 'error',
        message: 'Please enter your email address'
      }));
      return;
    }

    if (!validateEmail(formState.email)) {
      setFormState(prev => ({
        ...prev,
        status: 'error',
        message: 'Please enter a valid email address'
      }));
      return;
    }

    setFormState(prev => ({ ...prev, isSubmitting: true }));

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Replace with actual API endpoint
      // const response = await fetch('/api/cancel-subscription', {
      //   method: 'POST',
      //   headers: { 'Content-Type': 'application/json' },
      //   body: JSON.stringify({ email: formState.email })
      // });

      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        status: 'success',
        message: 'Subscription cancelled successfully. You will receive a confirmation email shortly.'
      }));
    } catch (error) {
      setFormState(prev => ({
        ...prev,
        isSubmitting: false,
        status: 'error',
        message: 'Something went wrong. Please try again or contact support.'
      }));
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  const handleGoBack = () => {
    window.history.back();
  };

  return (
    <div className='bg-[#F5F6FA] font-[var(--font-poppins)]'>
      <div className="bg-white h-[54px] flex items-center gap-3 text-[14px] leading-[22px] font-regular">
        <Container className='flex flex-row gap-[8px]'>
           <button
            onClick={handleGoBack}
            className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
            aria-label="Go back"
          >
          <span className='text-[var(--Black)]'>My QR Code</span>
          </button>
          <ChevronRight size={20} className="text-gray-500" />
          <span className="text-[var(--Blue)]">Cancel subscription</span>
        </Container>
        </div>
      <Container>
       <div className="min-h-screen">
      {/* Main Card - Centered */}
      <div className="flex items-center justify-center pt-[120px] pb-[192px]">
        <div className="bg-white rounded-[10px] shadow-xl w-full max-w-[350px] desktop:max-w-[600px] p-[24px] desktop:p-[32px]">
        {/* Main Card */}
        {/* Header */}
            <div>
              <h3 className="text-[20px] desktop:text-[24px] leading-[28px] desktop:leading-[32px] font-bold text-[var(--Black)]">
                Cancel Your Subscription!
              </h3>
              <p className="text-[var(--Black)] font-regular text-[16px] leading-[24px] pt-[8px]">
                Easily cancel your subscription by entering the email used to create your account.
              </p>
            </div>
            <div className="h-px w-full bg-[#CDD0DB80] my-[24px] desktop:my-[32px]" />
            {/* Info Section */}
             <p className="text-[var(--Black)] text-[14px] leading-[22px]">
                You may cancel your subscription at any time. Just provide the email address you used when registering and click on the "Cancel Subscription" button below. It's that easy!
              </p>

            {/* Input Section */}
            <div className="pt-[24px] desktop:pt-[32px]">
              {/* Email Input */}
              <InputField
                value={email}
                onChange={setEmail}
                placeholder="Enter your email used for registration"
                type="email"
                desktopWidth={536}
                leading={<Mail size={20}/>}
              />

              {/* Status Messages */}
              {formState.status === 'success' && (
                <div className="flex items-start gap-3 p-4 bg-green-50 border border-green-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                  <p className="text-green-800 text-sm">{formState.message}</p>
                </div>
              )}

              {formState.status === 'error' && (
                <div className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                  <XCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                  <p className="text-red-800 text-sm">{formState.message}</p>
                </div>
              )}

              {/* Submit Button */}
              <button
                onClick={handleSubmit}
                disabled={formState.isSubmitting || formState.status === 'success'}
                className="w-full bg-teal-600 hover:bg-teal-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 disabled:bg-gray-400 disabled:cursor-not-allowed flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
              >
                {formState.isSubmitting ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    <span>Processing...</span>
                  </>
                ) : formState.status === 'success' ? (
                  <>
                    <CheckCircle2 className="w-5 h-5" />
                    <span>Cancelled</span>
                  </>
                ) : (
                  <span>Cancel subscription</span>
                )}
              </button>
            </div>

            {/* Help Text */}
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-gray-600 text-sm leading-relaxed">
                If you don't remember which email you used to register, check your inbox for our
                welcome mailer. Otherwise, contact our friendly customer support team{' '}
                <a
                  href="#"
                  className="text-teal-600 hover:text-teal-700 font-medium underline"
                  onClick={(e) => e.preventDefault()}
                >
                  here
                </a>
                .
              </p>
              <p className="text-gray-600 text-sm leading-relaxed mt-3">
                You can also cancel your subscription by logging into your account, going to the
                "Billing" tab and clicking "Cancel Subscription".
              </p>
            </div>
        </div>
      </div>
     </div>
    </Container>
    </div>
  );
}