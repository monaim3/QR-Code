import { getFontSize } from "@/lib/utils";
import QrFrame from "./QrFrame";
import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  label?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  frameColor?: string;
}

const QrCodeFrame2 = ({
  label = "Scan me!",
  children,
  backgroundColor = "#ffffff",
  textColor = "#000000",
  frameColor = "#000000",
  ...props
}: Props) => {
  return (
    <svg
      viewBox="0 0 64 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect
        id="frame"
        x="1"
        y="1"
        width="62"
        height="82"
        rx="3"
        stroke={frameColor}
        strokeWidth="2"
        fill={backgroundColor}
      ></rect>
      <g id="frame">
        <path
          id="qr-background"
          d="M6 10a4 4 0 0 1 4-4h44a4 4 0 0 1 4 4v44a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z"
          fill={children ? "transparent" : "#E6E7ED"}
        ></path>
        <g transform="translate(12, 12)">{children || <QrFrame />}</g>
      </g>
      <path d="M1 62h62v2H1z" fill={frameColor}></path>
      <g id="text-container">
        <text
          x="32"
          y="73.765"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={getFontSize(label)}
          fontWeight="700"
          fontFamily="var(--font-frame-default)"
          fill={textColor}
        >
          {label}
        </text>
      </g>
    </svg>
  );
};

export default QrCodeFrame2;
