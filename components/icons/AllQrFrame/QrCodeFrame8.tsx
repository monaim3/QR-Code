import { getFontSize } from "@/lib/utils";
import QrFrame from "./QrFrame";
import { SVGProps } from "react";

interface Props extends SVGProps<SVGSVGElement> {
  label?: string;
  children?: React.ReactNode;
  textColor?: string;
  frameColor?: string;
}

const QrCodeFrame8 = ({
  label = "Scan me!",
  children,
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
        id="frame"
        d="M64 3.815v76.27a1.3 1.3 0 0 1-.498.301c-1.572.382-2.568 1.345-2.926 2.911-.16.703-.677.683-1.234.683H40.61c-11.885 0-23.789 0-35.693.02-.816 0-1.254-.2-1.473-1.044a3.16 3.16 0 0 0-2.409-2.43C.2 80.307 0 79.865 0 79.042.02 54.327.02 29.633 0 4.92c0-.843.18-1.345 1.055-1.566 1.254-.321 2.03-1.185 2.389-2.45.06-.32.219-.642.418-.903h56.336c.04.06.1.1.12.16.378 1.968 1.552 3.153 3.503 3.534.08.02.14.08.179.12"
        fill={frameColor}
      ></path>
      <path
        d="M6 10a4 4 0 0 1 4-4h44a4 4 0 0 1 4 4v44a4 4 0 0 1-4 4H10a4 4 0 0 1-4-4z"
        fill={children ? "white" : "#E6E7ED"}
        id="qr-background"
      />
      <g transform="translate(12, 12)">{children || <QrFrame />}</g>
      <g id="text-container">
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

export default QrCodeFrame8;
