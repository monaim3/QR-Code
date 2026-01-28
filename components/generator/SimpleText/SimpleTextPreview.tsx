import { useAppSelector } from "@/store/hooks";

export default function SimpleTextPreview() {
  const simpleText = useAppSelector((state) => state.simpleText.Text);

  return (
    <div className="w-full h-full relative rounded-[32px] overflow-hidden bg-[#EBE7D6]">
      <div className="relative z-10 px-4 py-4 top-16">
        <div className="bg-white rounded-lg px-4 py-8 flex items-center justify-center gap-2 mt-6 shadow-[0_4px_14px_0_rgba(54,66,140,0.16)] overflow-hidden">
          <span className="text-[10px] leading-[18px] text-left break-words whitespace-normal w-full">
            {simpleText.length > 0
              ? simpleText
              : "Meaningful experiences are shaped by a combination of careful planning, spontaneous moments, and the emotions shared throughout the day. Every detail plays a role in how an event unfolds, from the smallest interactions to the most memorable highlights. While each moment may seem independent, together they form a complete story that can be revisited over time. In this way, memories are not just created, but preserved, allowing the experience to live on and be shared again and again."}
          </span>
        </div>
      </div>
    </div>
  );
}
