import Restaurant from "@/components/icons/menu/restaurant";
import PreviewCard from "./PreviewCard";

export default function MenuInitialPreview() {
  return (
    <div className="w-full h-full flex flex-col items-center gap-6 pb-8 pt-[58px] px-5 relative">
      <div className="absolute left-0 top-0 h-[249px] w-full z-[1] bg-[#C3944D]" />

      <div className="flex flex-col items-center gap-4 stretch relative z-[2]">
        <Restaurant />

        <div className="flex flex-col items-center">
          <h4 className="text-white text-[18px] leading-[26px] font-bold">
            Olive & Oak
          </h4>

          <p className="text-white text-[10px] leading-[16px] text-center">
            Experience carefully prepared meals that celebrate fresh
            ingredients.
          </p>
        </div>
      </div>

      <div className="space-y-2 relative z-[2] w-full">
        <PreviewCard title="Starters" borderColor="#F4C47B" />
        <PreviewCard title="Soups & Salad" borderColor="#F4C47B" />
        <PreviewCard title="Pizza" borderColor="#F4C47B" />
        <PreviewCard title="Desserts" borderColor="#F4C47B" />
        <PreviewCard title="Drinks" borderColor="#F4C47B" />
      </div>
    </div>
  );
}
