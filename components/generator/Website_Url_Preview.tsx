import Image from "next/image";

interface WebsiteUrlPreviewProps {
  url: string;
  WebsiteUrlMobileFramBg: React.FC<React.SVGProps<SVGSVGElement>>;
}

export default function WebsiteUrlPreview({
  url,
  WebsiteUrlMobileFramBg,
}: WebsiteUrlPreviewProps) {
  const displayUrl = url || "www.mywebsite.com";

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-t-3xl overflow-hidden">
      <div className="w-full bg-[#C8E6C9] px-3 py-2 flex items-center gap-2 rounded-t-2xl">
        <div className="flex items-center gap-1">
          <div className="w-2 h-2 rounded-full bg-white/50" />
          <div className="w-2 h-2 rounded-full bg-white/50" />
          <div className="w-2 h-2 rounded-full bg-white/50" />
        </div>
        <div className="flex-1 bg-white rounded-full px-3 py-1 flex items-center gap-2">
          <span className="text-xs text-[var(--Dark-gray)] truncate font-roboto">
            {displayUrl}
          </span>
        </div>
      </div>
      <div className="flex-1 relative">
        <Image
          src="/website-preview-bg.png"
          alt="Website Preview"
          fill
          className="object-cover"
          unoptimized
        />
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center">
          <div className="w-16 h-16 relative opacity-20">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21 3H3C1.9 3 1 3.9 1 5V19C1 20.1 1.9 21 3 21H21C22.1 21 23 20.1 23 19V5C23 3.9 22.1 3 21 3ZM21 19H3V5H21V19Z"
                fill="currentColor"
              />
              <path d="M5 7H19V9H5V7Z" fill="currentColor" />
              <path d="M5 11H19V13H5V11Z" fill="currentColor" />
              <path d="M5 15H14V17H5V15Z" fill="currentColor" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
