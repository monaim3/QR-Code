import React from "react";
import { SVGProps } from "react";
import { getFontSize } from "@/lib/utils";
import QrFrame from "./QrFrame";

interface QrCodeFrame21Props extends SVGProps<SVGSVGElement> {
  label?: string;
  children?: React.ReactNode;
  backgroundColor?: string;
  textColor?: string;
  frameColor?: string;
}

const QrCodeFrame21: React.FC<QrCodeFrame21Props> = ({
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
        d="M10.5 45.5v-39h43l.5 39L40.5 56 32 50l-8.5 6z"
        fill={backgroundColor}
      ></path>
      <path
        id="frame"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M54.96 7.636v25.508l7.227 5.594v36.166A4.104 4.104 0 0 1 58.09 79H6.096A4.104 4.104 0 0 1 2 74.904V38.738l7.246-5.594V7.636A2.63 2.63 0 0 1 11.883 5h40.44a2.63 2.63 0 0 1 2.637 2.636m5.064 62.223V42.21L42.156 56.034zm-7.7-62.887H11.882a.65.65 0 0 0-.664.664v37.266l12.576 9.766 5.71-4.418a4.24 4.24 0 0 1 5.177 0l5.71 4.418 12.595-9.747V7.636a.67.67 0 0 0-.664-.664M4.161 69.86 22.03 56.035 4.162 42.209zm1.935 6.979H58.09a1.93 1.93 0 0 0 1.934-1.934V72.57l-26.67-20.652a2.08 2.08 0 0 0-2.522 0L4.162 72.57v2.333c0 1.062.873 1.934 1.935 1.934"
        fill={frameColor}
      ></path>
      <rect
        id="qr-background"
        x="14"
        y="9.5"
        width="36"
        height="36"
        rx="2"
        fill={children ? "transparent" : "#E6E7ED"}
      ></rect>
      <g transform="translate(19.5, 15) scale(0.62)">
        {children || <QrFrame />}
      </g>
      <text
        x="32"
        y="70.68"
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

export default QrCodeFrame21;
