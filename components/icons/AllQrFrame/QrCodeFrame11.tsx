import React from "react";
import QrFrame from "./QrFrame";
import { SVGProps } from "react";
import { getFontSize } from "@/lib/utils";

interface QrCodeFrame11Props extends SVGProps<SVGSVGElement> {
  label?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  frameColor?: string;
}

const QrCodeFrame11: React.FC<QrCodeFrame11Props> = ({
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
      <g id="text-container">
        <path
          d="M4 1h56a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1"
          fill={frameColor}
        />
        <path
          d="M4 1h56a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1Z"
          stroke={frameColor}
          strokeWidth="2"
        />
        <text
          x="32"
          y="9.765"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={getFontSize(label)}
          fontWeight="700"
          fontFamily="var(--font-frame-default)"
          fill={children ? textColor : "#ffffff"}
        >
          {label}
        </text>
        <path id="arrow" d="m32.5 23-3.031-5.25h6.062z" fill={frameColor} />
      </g>
      <path
        d="M6 25h52a3 3 0 0 1 3 3v52a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V28a3 3 0 0 1 3-3Z"
        fill={backgroundColor}
        stroke={frameColor}
        strokeWidth="2"
        id="frame"
      />
      <path
        d="M7 33a4 4 0 0 1 4-4h42a4 4 0 0 1 4 4v42a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4z"
        fill={children ? "transparent" : "#E6E7ED"}
        id="qr-frame"
      />
      <g transform="translate(12, 34)">{children || <QrFrame />}</g>
    </svg>
  );
};

export default QrCodeFrame11;
