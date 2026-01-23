import FourCorner from "../../components/icons/corner";
import CheckIcon from "../../components/icons/check-icon";

class AuthFeatures {
  id: number;
  label: string;
  constructor(id: number, label: string) {
    this.id = id;
    this.label = label;
  }
}

const authFeatureList = [
  new AuthFeatures(1, 'Unlimited QR codes'),
  new AuthFeatures(2, 'Unlimited QR code scans'),
  new AuthFeatures(3, 'Unrestricted customization options'),
  new AuthFeatures(4, 'Unlimited access to analytics'),
  new AuthFeatures(5, 'Unlimited downloads'),
  new AuthFeatures(6, 'Full access to all download formats'),
  new AuthFeatures(7, 'Create any type of QR code you need'),
];

interface QrReadyProps{
  viewOnMobile?: boolean;
}

export default function SignUpReadyQr({ viewOnMobile = false} : QrReadyProps) {
    
    return (
        <div className={`${viewOnMobile ? "bock" : "hidden"} flex flex-col w-full desktop:w-[456px] h-full max-h-full desktop:max-h-[814px] items-center justify-start bg-[#E7F4ED] rounded-[10px] p-[24px] desktop:pt-[32px] desktop:px-[56px] desktop:pb-[56px] flex-shrink-0 overflow-hidden gap-[24px] gap-[32px]`}>

        {/* Heading */}
        <p className="text-[20px] desktop:text-[24px] font-bold leading-[28px] desktop:leading-[32px] text-center text-[#0A0909] tracking-[0%]">
          Your QR code is ready!
        </p>

        {/* QR Code Box */}
        <div className="relative w-full desktop:w-[260px] h-[260px] bg-white rounded-[10px] flex items-center justify-center">
          <div className="relative w-[220px] h-[220px]">
            <FourCorner className="absolute inset-0" />
            <img
              src="/images/scan-me.svg"
              alt="QR Code"
              className="absolute inset-0 m-auto w-full h-full object-contain"
            />
          </div>
        </div>

      <div className="w-full px-[0px]">
        <div className="w-full h-[1px] bg-[#CDD0DB80]"></div>
      </div>

        {/* Features List */}
        <div className="flex flex-col w-full gap-[16px] overflow-auto">
          {authFeatureList.map((feature) => (
            <div key={feature.id} className="flex items-center gap-[8px]">
              <CheckIcon/>
              <p className="text-[16px] leading-[24px] font-regular text-[var(--Dark-gray)]">{feature.label}</p>
            </div>
          ))}
        </div>
      </div>
    );
}