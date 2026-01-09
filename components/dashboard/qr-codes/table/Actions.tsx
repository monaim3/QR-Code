import Download from "@/components/icons/download";
import MoreHorizontal from "@/components/icons/more-horizontal";
import ShareAndroid from "@/components/icons/share-android";

export default function Actions() {
  return (
    <div className="flex items-center gap-4">
      {/* Buttons */}
      <div className="flex items-start gap-2">
        {/* Share */}
        <button className="flex items-center justify-center h-10 py-2 px-4 rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] bg-white shadow-[0_1px_4px_0_rgba(63,72,103,0.16)]">
          <ShareAndroid />
        </button>

        {/* Download */}
        <button className="flex items-center justify-center h-10 py-2 px-4 rounded-[var(--Corner-Radius-10)] border border-[var(--Boarder-Grey)] bg-white shadow-[0_1px_4px_0_rgba(63,72,103,0.16)]">
          <Download />
        </button>
      </div>

      {/* More */}
      <button className="w-6 h-4 flex items-center justify-center">
        <MoreHorizontal />
      </button>
    </div>
  );
}
