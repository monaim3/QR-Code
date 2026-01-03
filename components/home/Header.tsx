'use client';
import { useState } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import Link from 'next/link';

export default function Header() {
  const [isLangOpen, setIsLangOpen] = useState(false);

  return (
    <header className="w-full bg-[#F5F6FA]" style={{ fontFamily: 'var(--font-poppins)' }}>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <img src="/images/Logo.svg" alt="Logo" className="w-32 h-8" />
          {/* Right side actions */}
          <div className="flex items-center gap-4">
            {/* Language Selector */}
            <div className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
                aria-label="Select language"
              >
                <Globe className="w-4 h-4" />
                <span>EN</span>
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {isLangOpen && (
                <>
                  <div 
                    className="fixed inset-0 z-10" 
                    onClick={() => setIsLangOpen(false)}
                  />
                  <div className="absolute right-0 mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                    <button 
                      onClick={() => setIsLangOpen(false)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                    >
                      English
                    </button>
                    <button 
                      onClick={() => setIsLangOpen(false)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Español
                    </button>
                    <button 
                      onClick={() => setIsLangOpen(false)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Français
                    </button>
                  </div>
                </>
              )}
            </div>

            {/* Log in Button */}
            <Link href="/login"
            className="px-4 py-2 text-sm font-semibold text-gray-700 hover:text-gray-900 hover:bg-gray-100 rounded-lg border border-gray-300 transition-colors font-poppins">
            Log in
          </Link>
          </div>
        </div>
      </div>
    </header>
  );
}