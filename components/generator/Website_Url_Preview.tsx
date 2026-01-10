import Globe from "../icons/globe";

interface WebsiteUrlPreviewProps {
  url: string;
}

export default function WebsiteUrlPreview({ url }: WebsiteUrlPreviewProps) {
  const displayUrl = url || "www.mywebsite.com";

  return (
    <div className="w-full h-full flex flex-col rounded-[32px] overflow-hidden">
      <div className="px-4 py-4 var(--bg-blue) bg-[#A3C358]">
        <div className="bg-white opacity-80 rounded-full px-4 py-2.5 flex items-center gap-2 mt-6 ">
          <Globe />
          <span className="text-sm text-gray-700 truncate">{displayUrl}</span>
        </div>
      </div>
      <div className="flex-1 px-4 bg-[#A3C358]">
        <div className="bg-gray-200 rounded-lg aspect-[4/3] flex items-center justify-center relative">
          <svg width="60" height="60" viewBox="0 0 60 60" fill="none">
            <path
              d="M15 15L45 45M45 15L15 45"
              stroke="white"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <div className="mt-4 space-y-2">
          <div className="h-3 bg-white/40 rounded"></div>
          <div className="h-3 bg-white/40 rounded"></div>
          <div className="h-3 bg-white/40 rounded w-3/5"></div>
        </div>
      </div>

      <div className="bg-white px-4 pb-4 pt-3 flex-1">
        <div className="flex gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
          <div className="flex-1 space-y-2 pt-1">
            <div className="h-2.5 bg-gray-200 rounded w-full"></div>
            <div className="h-2.5 bg-gray-200 rounded w-4/5"></div>
          </div>
        </div>

        <div className="flex gap-3 mb-4">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex-shrink-0"></div>
          <div className="flex-1 space-y-2 pt-1">
            <div className="h-2.5 bg-gray-200 rounded w-full"></div>
            <div className="h-2.5 bg-gray-200 rounded w-3/5"></div>
          </div>
        </div>

        {/* Bottom Button */}
        <div className="h-10 rounded-lg mt-4  bg-[#A3C358]"></div>
      </div>
    </div>
  );
}
