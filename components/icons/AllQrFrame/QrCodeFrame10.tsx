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

const QrCodeFrame10 = ({
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
      <g id="frame">
        <path
          d="M6 1h52a3 3 0 0 1 3 3v52a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
          fill={backgroundColor}
          stroke={frameColor}
          strokeWidth="2"
        ></path>
        <path
          d="M7 9a4 4 0 0 1 4-4h42a4 4 0 0 1 4 4v42a4 4 0 0 1-4 4H11a4 4 0 0 1-4-4z"
          fill={children ? "transparent" : "#E6E7ED"}
          id="qr-background"
        ></path>
        <path
          id="arrow"
          d="m32.5 61 3.031 5.25H29.47z"
          fill={frameColor}
        ></path>
        <g transform="translate(12, 12)">{children || <QrFrame />}</g>
      </g>
      <g id="text-container">
        <path
          d="M4 67h56a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V68a1 1 0 0 1 1-1"
          fill={frameColor}
        ></path>
        <path
          d="M4 67h56a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V68a1 1 0 0 1 1-1Z"
          stroke={frameColor}
          strokeWidth="2"
        ></path>
        <text
          x="32"
          y="75.765"
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

export default QrCodeFrame10;
