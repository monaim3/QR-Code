"use client";
import Container from "@/components/common/parent-container";
import Link from "next/link";
import Image from "next/image";
import LanguageSelector from "../common/language_dropdown";
import { usePathname } from "next/navigation";
import { useT } from "@/utils/t";

export default function Footer() {
  const t = useT();
  const pathname = usePathname();

  return (
    <footer className="w-full pt-5 desktop:pt-16 pb-5 desktop:pb-0 bg-[radial-gradient(circle,#334A56,#2F3E46)]">
      <Container>
        <div className="flex flex-col gap-8 desktop:gap-16">
          {/* Top Section: Logo + Button */}
          <div className="bg-white/10 rounded-xl p-6 px-4 md:p-10">
            <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-6 desktop:gap-10 items-center text-center lg:text-left">
              {/* Left: Logo + Text */}
              <div className="flex flex-col items-center lg:items-start gap-4">
                <Link
                  href="/"
                  onClick={() => {
                    window.location.href = "/";
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                >
                  <div className="flex items-center justify-center lg:justify-start gap-3">
                    <Image
                      src="/images/qr.svg"
                      alt="Logo"
                      width={44}
                      height={44}
                      className="w-11 h-11"
                    />
                    <span className="text-2xl md:text-[34px] font-bold text-white">
                      QR Center
                    </span>
                  </div>
                </Link>
                <p className="text-white/60 text-1">
                  {t("public__landing__bottom_banner__description")}
                </p>
              </div>

              {/* Right: Button */}
              <div className="flex justify-center lg:justify-end">
                <Link
                  href="/generator"
                  onClick={() => {
                    if (pathname === "/create") {
                      window.scrollTo({ top: 0, behavior: "smooth" });
                    }
                  }}
                  className=" bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] rounded-[10px] text-white text-[18px] leading-[26px] font-medium py-[11px] px-8 inline-block transition-all duration-300 ease-linear
                 "
                >
                  {t("public__dashboard__shared__cta_button")}
                </Link>
              </div>
            </div>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-1 desktop:grid-cols-2 gap-8 desktop:gap-20 text-center desktop:text-left">
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-lg font-bold leading-[26px]">
                {t("public__dashboard__sidebar__link_groups__help")}
              </h3>
              <div className="grid grid-cols-1 desktop:grid-cols-2 gap-4">
                <ul className="grid grid-cols-1 gap-4">
                  <li>
                    <Link
                      href="/contact-us"
                      className="text-white/60 text-sm hover:text-white transition-colors leading-[22px]"
                    >
                      {t("public__contact_us__title")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/cancel-subscription"
                      className="text-white/60 text-sm hover:text-white transition-colors leading-[22px]"
                    >
                      {t("public__dashboard__billing__cancel_subscription__button")}
                    </Link>
                  </li>
                </ul>

                <ul className="grid grid-cols-1 gap-4">
                  <li>
                    <Link
                      href="/generator"
                      className="text-white/60 text-sm hover:text-white transition-colors leading-[22px]"
                    >
                      {t("public__dashboard__shared__cta_button")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/faq"
                      className="text-white/60 text-sm hover:text-white transition-colors leading-[22px]"
                    >
                      {t("public__footer__link_groups__help__faq")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <h3 className="text-white text-lg font-bold leading-[26px]">
                {t("public__dashboard__account__billing_info__section_company")}
              </h3>
              <div className="grid grid-cols-1 desktop:grid-cols-2 gap-4">
                <ul className="grid grid-cols-1 gap-4">
                  <li>
                    <Link
                      href="/prices"
                      className="text-white/60 text-sm hover:text-white transition-colors leading-[22px]"
                    >
                      {t("public__qr__breadcrumbs__prices")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/about-us"
                      className="text-white/60 text-sm hover:text-white transition-colors leading-[22px]"
                    >
                      {t("public__breadcrumbs__about_us")}
                    </Link>
                  </li>
                </ul>
                <ul className="grid grid-cols-1 gap-4">
                  <li>
                    <Link
                      href="/terms-of-use"
                      className="text-white/60 text-sm hover:text-white transition-colors leading-[22px]"
                    >
                      {t("auth__signup__terms")}
                    </Link>
                  </li>
                  <li>
                    <Link
                      href="/privacy-policy"
                      className="text-white/60 text-sm hover:text-white transition-colors leading-[22px]"
                    >
                      {t("auth__signup__privacy_policy")}
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bottom Section: Language + Copyright */}
          <div className="flex flex-col desktop:flex-row items-center justify-between text-center desktop:text-left border-t border-white/20 py-4">
            {/* {<div className="relative flex justify-center desktop:justify-start">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm font-medium text-white leading-[22px]"
                aria-label="Select language">
                <Globe className="size-6" />
                <span className="text-sm">English</span>
                <ChevronDown className="size-5" />
              </button>

              {isLangOpen && (
                <>
                  <div
                    className="fixed inset-0 z-10"
                    onClick={() => setIsLangOpen(false)}
                  />
                  <div className="absolute bottom-full left-1/2 desktop:left-0 -translate-x-1/2 desktop:translate-x-0 mb-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 py-1 z-20">
                    <button
                      onClick={() => setIsLangOpen(false)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                      English
                    </button>
                    <button
                      onClick={() => setIsLangOpen(false)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                      Español
                    </button>
                    <button
                      onClick={() => setIsLangOpen(false)}
                      className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-50">
                      Français
                    </button>
                  </div>
                </>
              )}
            </div>} */}
            <LanguageSelector
              textClass="text-white"
              iconClass="#FFFFFF"
              globalIconColor="#ffffff"
              arrowUp={true}
              fromHeader={false}
            />
            <div className="desktop:text-right">
              <span className="text-white text-sm leading-[22px]">
                © {new Date().getFullYear()} QRcenter.com™. All rights reserved
              </span>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
