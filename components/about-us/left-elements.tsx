import Link from "next/link";

export default function AboutUsLeftelement() {
  return (
    <div className="order-2 desktop:order-1 desktop:flex-1 flex flex-col items-center justify-center desktop:items-start w-full">
      <h1 className="text-[32px] desktop:text-[40px] leading-[40px] leading-[32px] font-bold mb-2">
        Get to know us
      </h1>
      <p className="desktop:w-[488px] text-center desktop:text-start text-[18px] leading-[26px] font-regular mb-6">
        Welcome to QRCenter, your go-to QR code generator for your business and
        personal needs.
      </p>
      <Link
        href="#more_about"
        className="bg-[var(--Blue)] text-[18px] leading-[26px] text-white font-medium rounded-[10px] px-8 py-3 hover:bg-[var(--Blue-hover)] transition-all duration-300"
      >
        Learn more
      </Link>
    </div>
  );
}
