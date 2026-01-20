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

const QrCodeFrame25: React.FC<Props> = ({
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
        d="M3 13h57v56H3z"
        fill={backgroundColor}
      ></path>
      <path
        id="frame"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M62 78.561C62.02 79.9 60.936 81 59.62 81H4.4C3.063 81 2 79.899 2 78.561V13.4A2.4 2.4 0 0 1 4.4 11h55.22c1.316 0 2.4 1.084 2.38 2.4zM59.62 68V13.4H4.4V68z"
        fill={frameColor}
      ></path>
      <path
        id="shadow"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.458 6.955h4.644A3.97 3.97 0 0 1 32.068 3a3.97 3.97 0 0 1 3.967 3.955h4.644a4.11 4.11 0 0 1 4.101 4.111v2.948a.785.785 0 0 1-.793.795H20.15a.785.785 0 0 1-.794-.795v-2.948a4.11 4.11 0 0 1 4.102-4.11m10.178.02c0 .867-.702 1.57-1.567 1.57a1.57 1.57 0 0 1-1.567-1.57 1.568 1.568 0 1 1 3.134 0"
        fill={frameColor}
        fillOpacity="0.5"
      ></path>
      <rect
        id="qr-background"
        x="8"
        y="17"
        width="48"
        height="48"
        rx="2"
        fill={children ? "transparent" : "#E6E7ED"}
      ></rect>
      <g transform="translate(15, 24) scale(0.85)">{children || <QrFrame />}</g>
      <text
        x="32"
        y="75.18"
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

export default QrCodeFrame25;
