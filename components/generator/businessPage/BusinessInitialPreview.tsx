import Image from "next/image";
import InitialPreviewCard from "./InitailPreviewCard";
import Time from "@/components/icons/time";
import LocationPin from "@/components/icons/location-pin";
import StarAlt from "@/components/icons/star-alt";
import FileText from "@/components/icons/file-text";

export default function BusinessInitialPreview() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-6 pb-8 pt-[58px] px-5 relative">
      <div className="absolute left-0 top-0 h-[123px] w-full z-[1] bg-[#82D5D1]" />

      <div className="w-full relative z-[2] h-[100px] bg-white rounded-[var(--Corner-Radius-4)] p-[2px] shadow-[0_4px_14px_0_rgba(54,66,140,0.16)]">
        <Image
          src="/images/business.svg"
          alt="business"
          width={280}
          height={100}
        />
      </div>

      <div className="space-y-4">
        <div className="space-y-2">
          <div>
            <h4 className="text-[var(--Black)] font-bold text-[18px] leading-[26px] text-center">
              Digital Services
            </h4>
            <p className="text-[var(--Dark-gray)] text-[10px] leading-[16px] text-center">
              Cdf Limited
            </p>
          </div>

          <p className="text-[var(--Black)] text-[10px] leading-[16px] text-center w-[220px] mx-auto">
            Connecting ideas, technology, and trusted experiences.
          </p>
        </div>

        <button className="w-full bg-[#0A0909] rounded-[var(--Corner-Radius-6)] flex h-10 py-2 px-8 justify-center items-center gap-2 self-stretch text-white text-[12px] leading-[20px]">
          Learn more
        </button>

        <div className="w-full space-y-2">
          <InitialPreviewCard
            label="Open hours"
            icon={<Time className="text-[var(--Grey)]" />}
          />
          <InitialPreviewCard
            label="Location"
            icon={<LocationPin className="text-[var(--Grey)]" />}
          />
          <InitialPreviewCard
            label="Facilities"
            icon={<StarAlt className="text-[var(--Grey)]" />}
          />
          <InitialPreviewCard
            label="Summary"
            icon={<FileText className="text-[var(--Grey)]" />}
          />
        </div>
      </div>
    </div>
  );
}
