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

const QrCodeFrame20 = ({
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
        fill={backgroundColor}
        d="M11 16h42v42H11z"
      ></path>
      <path
        id="frame"
        d="M51.541 16.932c.345 0 .65.285.65.65v39.819H11.81V17.562c0-.345.284-.65.65-.65h39.08m0-1.912H12.46a2.55 2.55 0 0 0-2.557 2.562v41.75h44.216v-41.75A2.58 2.58 0 0 0 51.541 15"
        fill={frameColor}
      ></path>
      <g id="ribbon">
        <path
          id="ribbon-left"
          d="M9.902 61.407H0l3.774-6.304L0 48.8h9.902z"
          fill={frameColor}
          fillOpacity="0.5"
        ></path>
        <path
          id="ribbon-right"
          d="M54.098 61.407H64l-3.774-6.304L64 48.8h-9.902z"
          fill={frameColor}
          fillOpacity="0.5"
        ></path>
        <path
          id="shadow-left"
          d="M9.903 57.95v-6.61s-3.41 1.343-3.41 3.112c0 3.498 3.41 3.498 3.41 3.498"
          fill={frameColor}
          fillOpacity="0.5"
        ></path>
        <path
          id="shadow-right"
          d="M54.098 57.95v-6.61s3.409 1.343 3.409 3.112c0 3.498-3.41 3.498-3.41 3.498"
          fill={frameColor}
          fillOpacity="0.5"
        ></path>
        <path
          id="ribbon-middle"
          d="M57.507 62.445v-7.972c-.101 3.416-6.412 2.928-9.882 2.928h-31.27c-3.47 0-9.76.488-9.882-2.928v12.303c0 1.77 1.44 3.213 3.206 3.213h44.642a3.216 3.216 0 0 0 3.207-3.213v-4.27c-.02-.02-.02-.041-.02-.061"
          fill={frameColor}
        ></path>
      </g>
      <rect
        id="qr-background"
        x="14"
        y="19"
        width="36"
        height="36"
        rx="2"
        fill={children ? "transparent" : "#E6E7ED"}
      ></rect>
      <g transform="translate(19.5, 24.5) scale(0.65)">
        {children || <QrFrame />}
      </g>
      <text
        x="32"
        y="64.345"
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

export default QrCodeFrame20;
