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

const QrCodeFrame7 = ({
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
          d="M4 1h56a3 3 0 0 1 3 3v63H1V4a3 3 0 0 1 3-3Z"
          fill={backgroundColor}
          stroke={frameColor}
          strokeWidth="2"
        />
        <path id="arrow" d="m32.5 61 3.031 5.25H29.47z" fill={frameColor} />
        <path
          d="M6 10a4 4 0 0 1 4-4h44a4 4 0 0 1 4 4v44a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z"
          fill={children ? "transparent" : "#E6E7ED"}
          id="qr-background"
        />
        <g transform="translate(12, 12)">{children || <QrFrame />}</g>
      </g>
      <g id="text-container">
        <path
          d="M1 67h62v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"
          fill={frameColor}
        />
        <path
          d="M1 67h62v15a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1z"
          stroke={frameColor}
          strokeWidth="2"
        />
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

export default QrCodeFrame7;
