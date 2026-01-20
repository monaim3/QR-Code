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

const QrCodeFrame26: React.FC<Props> = ({
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
        id="frame-background"
        d="M8 14h51v52H8z"
        fill={backgroundColor}
      ></path>
      <path
        id="shadow"
        d="m6.238 14.453-.02-2.23 49.22-8.278c1.293-.113 2.325.85 2.343 2.136l.019 8.353z"
        fill={frameColor}
        fillOpacity="0.5"
      ></path>
      <path
        id="frame"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M60.913 77.785a2.334 2.334 0 0 1-2.325 2.344H6.218V12.223h52.37a2.334 2.334 0 0 1 2.325 2.343zm-2.325-12.89V14.568H8.544v50.329z"
        fill={frameColor}
      ></path>
      <path
        id="shadow_2"
        d="M10.663 20.463h-6.45c-.807 0-1.444.662-1.444 1.436v.133c0 .813.637 1.474 1.444 1.474h6.45a1.45 1.45 0 0 0 1.443-1.455v-.133a1.45 1.45 0 0 0-1.444-1.455m.001 16.121h-6.45a1.45 1.45 0 0 0-1.444 1.456v.132a1.45 1.45 0 0 0 1.444 1.455h6.45a1.45 1.45 0 0 0 1.443-1.455v-.132a1.45 1.45 0 0 0-1.444-1.456M4.213 52.706h6.45a1.45 1.45 0 0 1 1.443 1.455v.132a1.45 1.45 0 0 1-1.444 1.456h-6.45c-.806 0-1.443-.662-1.443-1.475v-.132c0-.775.637-1.436 1.444-1.436m6.45 16.121h-6.45a1.45 1.45 0 0 0-1.444 1.455v.133a1.45 1.45 0 0 0 1.444 1.455h6.45a1.45 1.45 0 0 0 1.443-1.455v-.133a1.45 1.45 0 0 0-1.444-1.455"
        fill={frameColor}
        fillOpacity="0.5"
      ></path>
      <rect
        id="qr-background"
        x="13.5"
        y="18.5"
        width="42"
        height="42"
        rx="2"
        fill={children ? "transparent" : "#E6E7ED"}
      ></rect>
      <g transform="translate(19.5, 24.5) scale(0.75)">
        {children || <QrFrame />}
      </g>
      <text
        x="34"
        y="73.18"
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

export default QrCodeFrame26;
