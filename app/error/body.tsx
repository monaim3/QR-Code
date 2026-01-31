
import Container from "@/components/common/parent-container";
import Image from "next/image";
import WebsiteUrl from "@/components/icons/website-url-qr";
import Vcard from "@/components/icons/vcard-qr";
import Pdf from "@/components/icons/pdf-qr";
import ImageIcon from "@/components/icons/Images-qr";

const QrType = [
    {
        id: 1,
        image: "",
        title: "Website URL",
        subTitle: "Link to a website of your choice",
    },
    {
        id: 2,
        image: "",
        title: "vCard",
        subTitle: "Share your electronic business card",
    },
    {
        id: 3,
        image: "",
        title: "PDF",
        subTitle: "Showcase info in a PDF",
    },
     {
        id: 4,
        image: "",
        title: "Images",
        subTitle: "Display an image gallery",
    },
];

export default function ErrorBody() {

    return (
        <div className="h-full w-full bg-[var(--Generator-Background)]">
         <Container>
            <div className="flex flex-col items-center justify-center">
                 <Image
                src="/images/error.svg"
                alt="Logo"
                width={300}
                height={191}
                className="pt-[80px] desktop:pt-[80px]"
                />
                <p className="text-[24px] leading-[32px] desktop:text-[32px] leading-[40px] text-[var(--Black)] font-bold pt-[40px]">
                    Page not found
                </p>
                <button className="h-[48px] max-w bg-[var(--Blue)] text-white rounded-[12px] py-2 px-8 mt-[24px]">
                 Go to Homepage
                </button>
                <div className="w-full h-[1px] bg-[var(--Boarder-Grey)] my-[80px] desktop:my-[96px]"/>
                <p className="text-[24px] leading-[32px] text-[var(--Black)] font-bold text-center">
                   AI-powered QR Codes, made simple
                </p>
                <div className="flex flex-col items-center justify-center gap-4 desktop:flex-row gap-6 mt-8 desktop:mt-12 mb-[80px] desktop:mb-[96px]">
                    {QrType.map((type)=> {
                        return <div className="bg-white h-[102px] w-full desktop:m-w-[286px] shadow-card rounded-[12px] flex items-center justify-start gap-2 p-4">
                            {type.id === 1 ? <WebsiteUrl/> : type.id === 2 ? <Vcard/> : type.id === 3 ? <Pdf/> : <ImageIcon/>}
                            <div className="flex flex-col items-start justify-center">
                               <p className="text-[18px] leading-[26px] font-bold text-[var(--Black)]">
                                 {type.title}
                               </p>
                                <p className="text-[14px] leading-[22px] font-regular text-[var(--Black)]">
                                 {type.subTitle}
                               </p>
                            </div>
                    </div>
                    })}
                </div>
            </div>
         </Container>
        </div>
    );
}