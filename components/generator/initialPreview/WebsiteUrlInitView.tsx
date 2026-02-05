import Globe from "@/components/icons/globe";

export default function WebsiteUrlInitView() {
  return (
    <div className="w-full h-full relative rounded-[32px] overflow-hidden bg-white">
      <div className="absolute top-0 left-0 w-full h-[45%] bg-[#A3C358]" />

      <div className="relative z-10 px-4 py-4">
        <div className="bg-white/80 rounded-full px-4 py-1.5 flex items-center justify-center gap-2 mt-6">
          <Globe />
          <span className="text-[10px] leading-[20px] text-gray-700 truncate text-center">
            www.mywebsite.com
          </span>
        </div>
      </div>

      <div className="relative z-10 flex-1 px-4 flex items-start justify-center -mt-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 248 428"
          width="248"
          height="428"
          fill="none"
          className=""
        >
          <defs>
            <g id="c">
              <rect x="14" width="220" height="56" rx="6" fill="#fff" />
              <circle cx="42" cy="28" r="20" fill="#CDD0DB" fillOpacity=".5" />
              <rect
                x="74"
                y="11"
                width="152"
                height="6"
                rx="3"
                fill="#CDD0DB"
                fillOpacity=".5"
              />
              <rect
                x="74"
                y="25"
                width="152"
                height="6"
                rx="3"
                fill="#CDD0DB"
                fillOpacity=".5"
              />
              <rect
                x="74"
                y="39"
                width="100"
                height="6"
                rx="3"
                fill="#CDD0DB"
                fillOpacity=".5"
              />
            </g>
          </defs>

          <rect x="14" y="10" width="220" height="218" rx="6" fill="#fff" />
          <rect
            x="22"
            y="18"
            width="204"
            height="150"
            rx="6"
            fill="#CDD0DB"
            fillOpacity=".5"
          />
          <path
            d="M151.6 68.9 148.1 65.4 124 89.5 99.9 65.4 96.4 68.9 120.5 93 96.4 117.1l3.5 3.5L124 96.5l24.1 24.1 3.5-3.5L127.5 93z"
            fill="#fff"
          />
          <rect
            x="22"
            y="180"
            width="204"
            height="8"
            rx="4"
            fill="#CDD0DB"
            fillOpacity=".5"
          />
          <rect
            x="22"
            y="196"
            width="204"
            height="8"
            rx="4"
            fill="#CDD0DB"
            fillOpacity=".5"
          />
          <rect
            x="74"
            y="212"
            width="100"
            height="8"
            rx="4"
            fill="#CDD0DB"
            fillOpacity=".5"
          />

          <use href="#c" y="244" />
          <use href="#c" y="316" />

          <rect x="14" y="388" width="220" height="40" rx="6" fill="#A3C358" />
          <rect
            x="84"
            y="405"
            width="80"
            height="6"
            rx="3"
            fill="#fff"
            opacity=".3"
          />
        </svg>
      </div>
    </div>
  );
}
