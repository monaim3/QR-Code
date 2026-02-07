import { Mail, Phone, MapPin } from "lucide-react";

const contactInfo = [
    {
        id: 1,
        title: "Email",
        subTitle: "support@smartqrcode.com",
    },
    {
        id: 2,
        title: "Phone",
        subTitle: "+1-631-892-9925",
    },
    {
        id: 3,
        title: "Address",
        subTitle: "46, Akademik Stefan Mladenov Str.,Office 5, 1700 Sofia, Bulgaria",
    }
];

export default function ContactInformation() {
    return (
        <div className={`flex desktop:flex-2 flex-col w-full items-center justify-start bg-[#E7F4ED] rounded-[10px] p-6 desktop:p-10`}>
            <div className="flex flex-col items-start justify-start">
                <p className="text-[32px] leading-[40px] desktop:text-[40px] desktop:leading-[48px] font-bold text-[var(--Blue)] mb-6 desktop:mb-8">Contact Information</p>
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