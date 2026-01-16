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

const QrCodeFrame9 = ({
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
        id="qr-background"
        x="1"
        y="1"
        width="62"
        height="78"
        rx="3"
        fill={backgroundColor}
        stroke={frameColor}
        strokeWidth="2"
      ></rect>
      <path
        id="rip-bkp"
        d="M63 73H1v4.434L1.767 77l2.574 4.66 2.132-3.86c.546-.989 2.105-.989 2.65 0l2.133 3.86 2.132-3.86c.546-.989 2.104-.989 2.65 0l2.133 3.86 2.131-3.86c.547-.989 2.105-.989 2.651 0l2.132 3.86 2.132-3.86c.546-.989 2.105-.989 2.65 0L32 81.66l2.132-3.86c.546-.989 2.105-.989 2.65 0l2.133 3.86 2.132-3.86c.546-.989 2.104-.989 2.65 0l2.133 3.86 2.132-3.86c.546-.989 2.104-.989 2.65 0l2.132 3.86 2.132-3.86c.546-.989 2.105-.989 2.651 0l2.132 3.86L62.233 77l.767.434z"
        fill={backgroundColor}
      ></path>
      <g id="frame">
        <mask id="frame9-mask" fill="white">
          <path d="M0 4a4 4 0 0 1 4-4h56a4 4 0 0 1 4 4v74H0z"></path>
        </mask>
        <path
          d="M-2 4a6 6 0 0 1 6-6h56a6 6 0 0 1 6 6h-4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2zm66 74H0zm-66 0V4a6 6 0 0 1 6-6v4a2 2 0 0 0-2 2v74zM60-2a6 6 0 0 1 6 6v74h-4V4a2 2 0 0 0-2-2z"
          fill={frameColor}
          mask="url(#frame9-mask)"
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
          fillRule="evenodd"
          clipRule="evenodd"
          d="M3.016 83.259 0 78l1.767-1 2.574 4.66 2.132-3.86c.546-.989 2.105-.989 2.65 0l2.133 3.86 2.132-3.86c.546-.989 2.104-.989 2.65 0l2.133 3.86 2.131-3.86c.547-.989 2.105-.989 2.651 0l2.132 3.86 2.132-3.86c.546-.989 2.105-.989 2.65 0L32 81.66l2.132-3.86c.546-.989 2.105-.989 2.65 0l2.133 3.86 2.132-3.86c.546-.989 2.104-.989 2.65 0l2.133 3.86 2.132-3.86c.546-.989 2.104-.989 2.65 0l2.132 3.86 2.132-3.86c.546-.989 2.105-.989 2.651 0l2.132 3.86L62.233 77 64 78l-3.016 5.259c-.546.988-2.104.988-2.65 0l-2.132-3.86-2.132 3.86c-.546.988-2.105.988-2.651 0l-2.132-3.86-2.132 3.86c-.546.988-2.105.988-2.65 0l-2.133-3.86-2.132 3.86c-.546.988-2.105.988-2.65 0l-2.133-3.86-2.132 3.86c-.546.988-2.104.988-2.65 0l-2.132-3.86-2.133 3.86c-.546.988-2.104.988-2.65 0l-2.132-3.86-2.132 3.86c-.546.988-2.105.988-2.65 0l-2.133-3.86-2.132 3.86c-.546.988-2.105.988-2.65 0l-2.133-3.86-2.132 3.86c-.546.988-2.104.988-2.65 0"
          fill={frameColor}
        ></path>
        <text
          x="32"
          y="68.765"
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

export default QrCodeFrame9;
