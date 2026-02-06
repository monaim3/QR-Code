import PlusCircle from "@/components/icons/plus-circle";
import User from "@/components/icons/user";
import InitialPreviewCard from "../businessPage/InitailPreviewCard";
import Phone from "@/components/icons/phone";
import Briefcase from "@/components/icons/briefcase";
import FileText from "@/components/icons/file-text";
import ThumbsUp from "@/components/icons/thumbs-up";

export default function VCardInitialPreview() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-6 pb-8 pt-[66.46px] px-5 relative">
      <div className="absolute left-0 top-0 h-[296px] w-full z-[1] bg-[#7BA2EF]" />

      <div className="flex flex-col items-center gap-2 stretch relative z-[2]">
        {/* Image */}
        <div className="flex w-[108px] h-[108px] justify-center items-center gap-2 aspect-square rounded-full bg-[var(--Generator-Background)] border-4 border-white mx-auto">
          <User />
        </div>

        {/* Name */}
        <h4 className={`text-[18px] leading-[26px] font-bold text-white`}>
          Jane Cooper
        </h4>

        {/* Button */}
        <button className="flex h-10 px-6 py-2 justify-center items-center gap-2 self-stretch rounded-full w-auto bg-[var(--Black)]">
          <PlusCircle className={`text-white w-4 h-4`} />
          <span className={`text-[12px] leading-[20px] text-white`}>
            Add contact
          </span>
        </button>
      </div>
      <div className="relative z-[2] flex flex-col items-start gap-2 self-stretch">
        <InitialPreviewCard
          label="Contact"
          icon={<Phone className="text-[var(--Grey)]" />}
        />
        <InitialPreviewCard
          label="Company"
          icon={<Briefcase className="text-[var(--Grey)]" />}
        />
        <InitialPreviewCard
          label="Summary"
          icon={<FileText className="text-[var(--Grey)]" />}
        />
        <InitialPreviewCard
          label="Social media"
          icon={<ThumbsUp className="text-[var(--Grey)]" />}
        />
      </div>
    </div>
  );
}
