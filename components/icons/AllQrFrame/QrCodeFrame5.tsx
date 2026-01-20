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

const QrCodeFrame5 = ({
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
          d="M4 1h56a3 3 0 0 1 3 3v59H1V4a3 3 0 0 1 3-3Z"
          fill={backgroundColor}
          stroke={frameColor}
          strokeWidth="2"
        ></path>
        <path
          id="qr-background"
          d="M6 10a4 4 0 0 1 4-4h44a4 4 0 0 1 4 4v44a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z"
          fill={children ? "transparent" : "#E6E7ED"}
        ></path>
        <g transform="translate(12, 12)">{children || <QrFrame />}</g>
      </g>
      <g id="text-container">
        <path
          d="M1 63h62v17a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3z"
          fill={frameColor}
        ></path>
        <path
          d="M1 63h62v17a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3z"
          stroke={frameColor}
          strokeWidth="2"
        ></path>
        <text
          x="32"
          y="73.765"
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

export default QrCodeFrame5;
