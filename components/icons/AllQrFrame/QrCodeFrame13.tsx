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

const QrCodeFrame13 = ({
  label = "Scan me!",
  children,
  backgroundColor = "#ffffff",
  textColor = "#000000",
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
        x="0"
        y="0"
        width="64"
        height="84"
        rx="4"
        fill={backgroundColor}
      ></rect>
      <path
        d="M6 10a4 4 0 0 1 4-4h44a4 4 0 0 1 4 4v44a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z"
        fill={children ? "transparent" : "#E6E7ED"}
        id="qr-background"
      ></path>
      <g transform="translate(12, 12)">{children || <QrFrame />}</g>
      <text
        x="32"
        y="72.7"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={getFontSize(label)}
        fontWeight="400"
        fontFamily="var(--font-frame-default)"
        fill={textColor}
      >
        {label}
      </text>
    </svg>
  );
};

export default QrCodeFrame13;
