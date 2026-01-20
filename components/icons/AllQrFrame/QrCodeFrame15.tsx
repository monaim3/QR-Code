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

const QrCodeFrame15 = ({
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
      <path
        id="frame-background"
        d="M6 2h52v80H6z"
        fill={backgroundColor}
      ></path>
      <path
        id="frame"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8 0a4 4 0 0 0-4 4v76a4 4 0 0 0 4 4h48a4 4 0 0 0 4-4V4a4 4 0 0 0-4-4zm15 4a1 1 0 1 0 0 2h2a1 1 0 1 0 0-2zm6 0a1 1 0 1 0 0 2h11a1 1 0 1 0 0-2zm6 72a3 3 0 1 1-6 0 3 3 0 0 1 6 0M7 11a2 2 0 0 1 2-2h46a2 2 0 0 1 2 2v56a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2z"
        fill={frameColor}
      ></path>
      <path
        d="M10 14a2 2 0 0 1 2-2h40a2 2 0 0 1 2 2v40a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2z"
        fill={children ? "transparent" : "#E6E7ED"}
        id="qr-background"
      ></path>
      <g transform="translate(15, 17) scale(0.85)">{children || <QrFrame />}</g>
      <text
        x="32"
        y="63.18"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={getFontSize(label)}
        fontWeight="700"
        fontFamily="var(--font-frame-default)"
        fill={textColor}
      >
        {label}
      </text>
    </svg>
  );
};

export default QrCodeFrame15;
