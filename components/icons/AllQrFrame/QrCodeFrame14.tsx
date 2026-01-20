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

const QrCodeFrame14 = ({
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
          d="M4 1h56a3 3 0 0 1 3 3v56a3 3 0 0 1-3 3H4a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
          fill={backgroundColor}
          stroke={frameColor}
          strokeWidth="2"
        ></path>
        <path
          d="M6 10a4 4 0 0 1 4-4h44a4 4 0 0 1 4 4v44a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z"
          fill={children ? "transparent" : "#E6E7ED"}
          id="qr-background"
        ></path>
        <g transform="translate(12, 12)">{children || <QrFrame />}</g>
      </g>
      <g id="text-container">
        <path
          d="M2 67h60a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V68a1 1 0 0 1 1-1"
          fill={frameColor}
        ></path>
        <path
          d="M2 67h60a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V68a1 1 0 0 1 1-1Z"
          stroke={frameColor}
          strokeWidth="2"
        ></path>
        <path
          id="youtube"
          d="M13.9917 72.9938C13.8958 72.6354 13.6146 72.3542 13.2563 72.2583C12.6083 72.0833 10 72.0833 10 72.0833C10 72.0833 7.39375 72.0833 6.74375 72.2583C6.38542 72.3542 6.10417 72.6354 6.00834 72.9938C5.8875 73.6563 5.82917 74.3271 5.83334 75C5.82917 75.6729 5.8875 76.3438 6.00834 77.0063C6.10417 77.3646 6.38542 77.6458 6.74375 77.7417C7.39167 77.9167 10 77.9167 10 77.9167C10 77.9167 12.6063 77.9167 13.2563 77.7417C13.6146 77.6458 13.8958 77.3646 13.9917 77.0063C14.1125 76.3438 14.1708 75.6729 14.1667 75C14.1708 74.3271 14.1125 73.6563 13.9917 72.9938ZM9.16667 76.25V73.75L11.3313 75L9.16667 76.25Z"
          fill={children ? frameColor : "#ffffff"}
        ></path>
        <text
          x="39"
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

export default QrCodeFrame14;
