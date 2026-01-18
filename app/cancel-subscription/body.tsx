"use client";
import React, { useState } from 'react';
import { Mail, ArrowLeft, Loader2, CheckCircle2, XCircle } from 'lucide-react';

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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Header Navigation - Fixed to left */}
      <div className="px-4 pt-6 md:px-8 md:pt-8">
        <div className="flex items-center gap-3 text-sm">
          <button
            onClick={handleGoBack}
            className="text-gray-600 hover:text-gray-900 transition-colors flex items-center gap-1"
            aria-label="Go back"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>My QR Code</span>
          </button>
          <span className="text-gray-400">/</span>
          <span className="text-teal-600 font-medium">Cancel subscription</span>
        </div>
      </div>

      {/* Main Card - Centered */}
      <div className="flex items-center justify-center px-4 py-8 md:py-12">
        <div className="w-full max-w-2xl">

        {/* Main Card */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8 md:p-12">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-3">
                Cancel Your Subscription!
              </h1>
              <p className="text-gray-600 text-lg">
                Easily cancel your subscription by entering the email used to create your account.
              </p>
            </div>

            {/* Info Section */}
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 mb-8">
              <p className="text-gray-700 leading-relaxed">
                You may cancel your subscription at any time. Just provide the email address you
                used when registering and click on the "Cancel Subscription" button below. It's that
                easy!
              </p>
            </div>

            {/* Input Section */}
            <div className="space-y-6">
              {/* Email Input */}
              <div>
                <label htmlFor="email" className="sr-only">
                  Email address
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-4 flex items-center pointer-events-none">
                    <Mail className="w-5 h-5 text-gray-400" />
                  </div>
                  <input
                    id="email"
                    type="email"
                    value={formState.email}
                    onChange={handleEmailChange}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your email used for registration"
                    disabled={formState.isSubmitting || formState.status === 'success'}
                    className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg text-gray-900 placeholder-gray-500 focus:ring-2 focus:ring-teal-500 focus:border-transparent transition-all disabled:bg-gray-100 disabled:cursor-not-allowed"
                    autoComplete="email"
                  />
                </div>
              </div>

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

          {/* Footer Note */}
          <p className="text-center text-gray-500 text-sm mt-6">
            Need help? Contact us at{' '}
            <a href="mailto:support@example.com" className="text-teal-600 hover:underline">
              support@example.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}