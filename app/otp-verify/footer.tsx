import Link from 'next/link';
import Container from "../../components/common/parent-container"

export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="w-full border-t border-[var(--Boarder-Grey)] bg-white font-[var(--font-poppins)]">
        <Container>
          <div className="flex flex-col sm:flex-row items-center justify-between py-8 gap-8">
            {/* Navigation Links */}
            <nav className="flex flex-col desktop:flex-row items-center gap-4 desktop:gap-10">
              <Link 
                href="/about-us" 
                className="text-[14px] leading-[22px] text-[var(--Dark-gray)] hover:text-[var(--Blue)] transition-all duration-300"
              >
                About us
              </Link>
              <div className="hidden desktop:block w-px h-[22px] bg-[var(--boarder-grey-50)]" />
              <Link 
                href="/terms-and-condition" 
                className="text-[14px] leading-[22px] text-[var(--Dark-gray)] hover:text-[var(--Blue)] transition-all duration-300"
              >
                Terms and conditions
              </Link>
              <div className="hidden desktop:block w-px h-[22px] bg-[var(--boarder-grey-50)]" />
              <Link 
                href="/terms-and-condition" 
                className="text-[14px] leading-[22px] text-[var(--Dark-gray)] hover:text-[var(--Blue)] transition-all duration-300"
              >
                Privacy policy
              </Link>
            </nav>
            {/* Copyright */}
            <div className="text-[14px] leading-[22px] text-[var(--Dark-gray)]">
              {currentYear} © SmartQR.com™ All rights reserved
            </div>
          </div>
    </Container>
    </footer>
  );
}