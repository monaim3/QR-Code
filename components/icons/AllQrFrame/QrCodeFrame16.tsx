import { getFontSize } from "@/lib/utils";
import QrFrame from "./QrFrame";
import { SVGProps } from "react";
import localFont from "next/font/local";
const allison = localFont({
  src: "../../../public/fonts/Allison-Regular.ttf",
  display: "swap",
  variable: "--font-allison",
});
interface Props extends SVGProps<SVGSVGElement> {
  label?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  frameColor?: string;
}

const QrCodeFrame16 = ({
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
      className={allison.variable}
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
      <path
        id="arrow"
        d="M6.096 77.37s-3.764-5.443-1.203-11.627C6.01 63.022 7.539 61.8 7.539 61.8l-1.478.361-.24-.878s2.939-.379 3.643-.258c-.584 1.292-.859 3.324-.859 3.324l-.842-.086.447-1.809s-2.458 2.326-3.077 5.581c-1.048 5.495 1.255 9.198 1.255 9.198z"
        fill={textColor}
        transform="translate(10, 20) scale(0.6)"
      ></path>
      <text
        x="33"
        y="65.7"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={getFontSize(label)}
        fontWeight="400"
        fontFamily="var(--font-allison)"
        fill={textColor}
        transform="rotate(-8.34 16.5 75.7)"
      >
        {label}
      </text>
    </svg>
  );
};

export default QrCodeFrame16;
