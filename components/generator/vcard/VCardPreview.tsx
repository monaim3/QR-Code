import PlusCircle from "@/components/icons/plus-circle";
import User from "@/components/icons/user";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";

export default function VCardPreview() {
  const vCard = useAppSelector((state) => state.vCard);

  return (
    <div className="w-full h-full flex flex-col items-center gap-6 pb-8 pt-[66.46px] px-5 relative overflow-hidden">
      <div
        className="absolute left-0 top-0 h-[296px] w-full z-[1]"
        style={{ backgroundColor: vCard.primaryColor }}
      />

      <div className="flex flex-col items-center gap-2 stretch relative z-[2]">
        {/* Image */}
        <div className="flex w-[108px] h-[108px] p-2 justify-center items-center gap-2 aspect-square rounded-full bg-[var(--Generator-Background)] border-4 border-white mx-auto">
          {vCard.personalInfo.image ? (
            <Image
              src={vCard.personalInfo.image}
              alt="User"
              width={100}
              height={100}
              className="object-contain"
            />
          ) : (
            <User />
          )}
        </div>

        {/* Name */}
        <h4 className="text-[18px] text-white leading-[26px] font-bold">
          {vCard.personalInfo.fullName || "Jane Cooper"}
        </h4>

        {/* Button */}
        <button
          className="flex h-10 px-6 py-2 justify-center items-center gap-2 self-stretch rounded-full w-auto "
          style={{ backgroundColor: vCard.secondaryColor }}
        >
          <PlusCircle
            className={`${vCard.secondaryColor === "#FFFFFF" ? "text-black" : "text-white"}`}
          />
          <span
            className={`text-[12px] leading-[20px] ${vCard.secondaryColor === "#FFFFFF" ? "text-black" : "text-white"}`}
          >
            Add contact
          </span>
        </button>
      </div>
      <div className="relative z-[2]"></div>
    </div>
  );
}
