import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
    {
        id: 1,
        title: "Email",
        subTitle: "contact@qrpath.com",
    },
    {
        id: 2,
        title: "Phone",
        subTitle: "+1 (415) 728-3492",
    },
    {
        id: 3,
        title: "Address",
        subTitle: "1287 Market Street, Suite 402, San Francisco, CA 94103, USA",
    }
];

export default function ContactInformation() {
    return (
        <div className={`flex desktop:flex-2 flex-col w-full max-w-[512px] items-center justify-center bg-[#E7F4ED] rounded-[10px] p-6 desktop:py-10 desktop:px-16`}>
            <div className="flex flex-col items-start justify-center">
                {contactInfo.map((info) => {
                    return (
                        <div className="py-6 flex gap-6 items-center justify-center">
                            {info.id == 1? <Mail className="h-[21px] w-[26px] text-[var(--Blue)] flex-shrink-0"/> : info.id == 2 ? <Phone className="h-[21px] w-[26px] text-[var(--Blue)] flex-shrink-0"/> : <MapPin className="h-[21px] w-[26px] text-[var(--Blue)] flex-shrink-0"/>}
                            <div className="h-[48px] w-[1px] bg-[var(--Boarder-Grey)]"/>
                            <div className="flex flex-col items-start justify-start">
                                <p className="w-full text-[18px] leading-[26px] font-bold text-[var(--Black)]">{info.title}</p>
                                <p className="w-full text-[14px] leading-[22px] font-regular text-[var(--Dark-gray)]">{info.subTitle}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}