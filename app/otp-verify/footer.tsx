import Link from 'next/link';
import Container from "../../components/common/parent-container"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-gray-200 bg-white font-[var(--font-poppins)]">
        <Container>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between py-6 gap-[32px]">
          {/* Navigation Links */}
          <nav className="flex flex-col desktop:flex-row items-center gap-[16px] desktop:gap-[40px]">
            <Link 
              href="/about" 
              className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors"
            >
              About us
            </Link>
            <div className="hidden desktop:block w-px h-[30px] bg-[#CDD0DB]/50" />
            <Link 
              href="/terms" 
              className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors"
            >
              Terms and conditions
            </Link>
            <div className="hidden desktop:block w-px h-[30px] bg-[#CDD0DB]/50" />
            <Link 
              href="/privacy" 
              className="text-[14px] text-gray-600 hover:text-gray-900 transition-colors"
            >
              Privacy policy
            </Link>
          </nav>
          {/* Copyright */}
          <div className="text-[14px] text-gray-600">
            {currentYear} © SmartQR.com™ All rights reserved
          </div>
        </div>
      </div>
    </Container>
    </footer>
  );
}