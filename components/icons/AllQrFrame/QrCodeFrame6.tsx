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

const QrCodeFrame6 = ({
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
        fill={backgroundColor}
        stroke="transparent"
        strokeWidth="2"
      />
      <g id="frame">
        <path
          d="M6 10a4 4 0 0 1 4-4h44a4 4 0 0 1 4 4v44a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z"
          fill={children ? "transparent" : "#E6E7ED"}
          id="qr-background"
        />
        <g transform="translate(12, 12)">{children || <QrFrame />}</g>
      </g>
      <g id="text-container">
        <path
          d="M8 63h48a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V64a1 1 0 0 1 1-1"
          fill={frameColor}
        />
        <path
          d="M8 63h48a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1V64a1 1 0 0 1 1-1Z"
          stroke={frameColor}
          strokeWidth="2"
        />
        <text
          x="32"
          y="71.765"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize={getFontSize(label)}
          fontWeight="700"
          fontFamily="var(--font-frame-default)"
          fill={children ? textColor : "#ffffff"}
        >
          {label}
        </text>
      </g>
    </svg>
  );
};

export default QrCodeFrame6;
