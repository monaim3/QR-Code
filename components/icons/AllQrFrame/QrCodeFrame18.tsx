import { SVGProps } from "react";
import { getFontSize } from "@/lib/utils";
import QrFrame from "./QrFrame";

interface Props extends SVGProps<SVGSVGElement> {
  label?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  frameColor?: string;
}

const QrCodeFrame18 = ({
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
      <path fill={backgroundColor} d="M6 15h51v52H6z"></path>
      <path
        d="M59.123 17.153c0-2.303-1.857-4.153-4.128-4.153H8.024c-2.29 0-4.129 1.869-4.129 4.153L2 75.847C2 78.15 3.858 80 6.129 80H56.87c2.292 0 4.13-1.869 4.13-4.153zm-52.788 0c0-.925.75-1.699 1.689-1.699h46.97a1.7 1.7 0 0 1 1.69 1.7v48.951H6.334z"
        fill={frameColor}
      ></path>
      <g fill={frameColor}>
        <path d="m22.81 3.02-4.69 4.663v9.93h4.69z"></path>
        <path d="m40.188 3.02 4.692 4.663v9.93h-4.692z"></path>
        <path
          d="M40.188 3H22.81v4.72h17.377z"
          fill={frameColor}
          fillOpacity="0.5"
        ></path>
      </g>
      <rect
        x="10"
        y="19.5"
        width="43"
        height="43"
        rx="2"
        fill={children ? "transparent" : "#E6E7ED"}
      ></rect>
      <g transform="translate(16.5, 26) scale(0.75)">
        {children || <QrFrame />}
      </g>
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
    </svg>
  );
};

export default QrCodeFrame18;
