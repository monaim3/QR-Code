import React from "react";
import { getFontSize } from "@/lib/utils";
import QrFrame from "./QrFrame";

interface Props {
  label?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  frameColor?: string;
}

const QrCodeFrame28: React.FC<Props> = ({
  label = "Scan me!",
  children,
  backgroundColor = "#ffffff",
  textColor = "#000000",
  frameColor = "#000000",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 64 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="shadow"
        d="M32 13.053c2.744 0 4.969-2.053 4.969-4.585S34.744 3.883 32 3.883s-4.969 2.053-4.969 4.585 2.225 4.585 4.969 4.585"
        fill={frameColor}
        fillOpacity="0.5"
        opacity="1"
      ></path>
      <path
        id="frame"
        d="M60.238 69.068v-5.242L3.8 63.28s-.056 3.457-.056 5.787c0 6.408 12.637 11.594 28.237 11.594s28.256-5.186 28.256-11.594"
        fill={frameColor}
      ></path>
      <path
        id="frame"
        d="M11.525 35.026V21.659a2.367 2.367 0 0 1 2.362-2.367h36.244a2.367 2.367 0 0 1 2.363 2.367v13.35c3.111-2.837 4.95-6.342 4.95-10.137 0-9.443-11.392-17.1-25.444-17.1S6.556 15.43 6.556 24.873c0 3.802 1.846 7.314 4.969 10.154"
        fill={frameColor}
      ></path>
      <path
        id="frame"
        d="M11 39.388V23.022c-3.434 2.266-5.475 5.104-5.475 8.183 0 3.08 2.041 5.917 5.475 8.183M20.916 19h22.168c-3.372-.79-7.127-1.23-11.084-1.23s-7.712.44-11.084 1.23m37.559 12.205c0 3.367-2.441 6.446-6.475 8.804V22.4c4.034 2.358 6.475 5.436 6.475 8.804"
        fill={frameColor}
      ></path>
      <path
        id="shadow"
        d="M12 49.982c-5.827 2.733-9.475 6.644-9.475 10.987 0 8.261 13.196 14.958 29.475 14.958s29.475-6.697 29.475-14.958c0-4.343-3.648-8.254-9.475-10.987V61H12z"
        fill={frameColor}
        fillOpacity="0.5"
      ></path>
      <path
        id="frame-background"
        d="M12 19h40v42H12z"
        fill={backgroundColor}
      ></path>
      <path
        id="frame"
        d="M50.9 20.288c.319 0 .581.263.581.582v38.483H12.5V20.87c0-.32.262-.582.581-.582zm0-1.786H13.1a2.367 2.367 0 0 0-2.362 2.368v40.25h42.525V20.87a2.367 2.367 0 0 0-2.363-2.368"
        fill={frameColor}
      ></path>
      <path
        id="frame"
        d="M12.5 50.322c-4.331 2.392-6.975 5.583-6.975 9.088 0 7.42 11.853 13.435 26.475 13.435S58.475 66.83 58.475 59.41c0-3.51-2.652-6.705-6.994-9.098v9.042H12.5z"
        fill={frameColor}
      ></path>
      <path
        id="shadow"
        d="M32 14.688c-16.275 0-29.475 6.69-29.475 14.957 0 4.022 3.131 7.667 8.213 10.354v-.77c-3.282-2.236-5.232-5.017-5.232-8.024 0-7.422 11.85-13.454 26.475-13.454s26.475 6.032 26.475 13.454c0 3.007-1.931 5.769-5.212 8.024v.77c5.081-2.687 8.212-6.332 8.212-10.354.019-8.268-13.181-14.957-29.456-14.957"
        fill={frameColor}
        fillOpacity="0.5"
      ></path>
      <rect
        id="qr-background"
        x="15.5"
        y="23.5"
        width="33"
        height="33"
        rx="2"
        fill={children ? "#ffffff" : "#E6E7ED"}
      ></rect>
      <g transform="translate(20.5, 28.5) scale(0.6)">
        {children || <QrFrame />}
      </g>
      <text
        x="32"
        y="66.595"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={getFontSize(label)}
        fontWeight="700"
        fontFamily="var(--font-frame-default)"
        fill={children ? textColor : "#ffffff"}
      >
        {label}
      </text>
    </svg>
  );
};

export default QrCodeFrame28;
