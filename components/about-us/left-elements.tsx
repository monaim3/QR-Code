import Link from 'next/link';

export default function AboutUsLeftelement(){
    return (
        <div className="order-2 desktop:order-1 desktop:flex-1 h-full flex flex-col items-center justify-center desktop:items-start">
            <h1 className="text-[32px] desktop:text-[40px] leading-[40px] leading-[32px] font-bold">Get to know us</h1>
            <p className="w-[350px] desktop:w-[488px] text-center desktop:text-start text-[18px] leadind-[26px] font-regular mt-2">Welcome to Smart QR Code, your go-to QR code generator for your business and personal needs.</p>
            <Link 
            href="#"
            className="h-[48px] w-[159px] bg-[var(--Blue)] flex items-center justify-center text-[18px] leading-[26px] text-white font-medium rounded-[10px] mt-[24px]"
            >
            Learn more
            </Link>
        </div>
    );
}