import React from "react";
import { getFontSize } from "@/lib/utils";
import QrFrame from "./QrFrame";

interface Props {
  label?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  frameColor?: string;
}

const QrCodeFrame29: React.FC<Props> = ({
  label = "Scan me!",
  children,
  backgroundColor = "#ffffff",
  textColor = "#000000",
  frameColor = "#000000",
  ...props
}) => {
  return (
    <svg
      viewBox="0 0 64 84"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        id="frame-background"
        d="M22.5 32v-9L19 21l-2.5-3.5.5-4 2-3L22.5 9l2.5.5h1l2.5-3 3.5-1 3 1L37.5 8l.5 2 2.5-.5 3.5.5 2 2 1 2 .5 2-.5 2-1.5 3-2 1-1.5 1v9h7a2 2 0 0 1 2 2v34c0 1.105-.395 3.5-1.5 3.5H14c-1.105 0-1-2.395-1-3.5V34a2 2 0 0 1 2-2z"
        fill={backgroundColor}
      ></path>
      <path
        id="frame"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.463 23.283a7.514 7.514 0 0 1-5.7-7.299c0-4.152 3.356-7.516 7.5-7.516.75 0 1.48.113 2.174.32A7.6 7.6 0 0 1 27.82 6.1a7.43 7.43 0 0 1 4.237-1.315 7.43 7.43 0 0 1 6.6 3.965 7.5 7.5 0 0 1 2.044-.282c4.144 0 7.5 3.383 7.5 7.516 0 3.472-2.353 6.426-5.55 7.284v8.069h6.431c1.65 0 3 1.352 3 3.006v42.73a3 3 0 0 1-3 3.007H14.938a3 3 0 0 1-3-3.007v-42.73a3 3 0 0 1 3-3.007h6.524zm15.693-.665a7.6 7.6 0 0 0 3.694.9v5.263h-3.975v-3.702a.537.537 0 0 0-.525-.526.525.525 0 0 0-.525.526v3.702h-3.3v-3.702a.525.525 0 1 0-1.05 0v3.702h-3.281v-3.702a.525.525 0 1 0-1.05 0v3.702h-3.881V23.5c1.256 0 2.493-.32 3.58-.902.395-.207.526-.695.32-1.09s-.694-.526-1.088-.32a5.9 5.9 0 0 1-3.318.693.9.9 0 0 0-.563-.076 5.896 5.896 0 0 1-4.819-5.803c0-3.27 2.644-5.919 5.906-5.863.75 0 1.482.132 2.175.414h.019l.112.037a.803.803 0 0 0 1.032-.45c.919-2.255 3.131-3.702 5.475-3.702a5.89 5.89 0 0 1 5.381 3.495c0 .044.012.077.026.117l.012.033a.81.81 0 0 0 1.05.451h.018a5.6 5.6 0 0 1 2.156-.413c3.244 0 5.888 2.65 5.888 5.9a5.91 5.91 0 0 1-4.714 5.782.9.9 0 0 0-.576.088 5.9 5.9 0 0 1-3.41-.684c-.394-.206-.881-.075-1.087.32-.207.394-.075.883.318 1.09m-13.893 7.215v1.504H40.85v-1.504zm25.818 3.289c.675 0 1.219.544 1.219 1.221v35.44H13.719v-35.44c0-.677.543-1.221 1.219-1.221z"
        fill={frameColor}
      ></path>
      <rect
        id="qr-background"
        x="16"
        y="35.5"
        width="32"
        height="32"
        rx="2"
        fill={children ? "transparent" : "#E6E7ED"}
      ></rect>
      <g transform="translate(20.5, 40) scale(0.58)">
        {children || <QrFrame />}
      </g>
      <text
        x="32"
        y="75.51"
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

export default QrCodeFrame29;
