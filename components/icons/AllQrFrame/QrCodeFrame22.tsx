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

const QrCodeFrame22: React.FC<Props> = ({
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
      <g id="frame-background" fill={backgroundColor}>
        <path d="M1 11h32v32H1z"></path>
      </g>
      <g id="wheel-right" fill={frameColor} fillOpacity="0.5">
        <path d="M53.77 57.687c-4.22 0-7.64 3.428-7.64 7.657S49.55 73 53.77 73s7.64-3.428 7.64-7.657-3.42-7.657-7.64-7.657m0 12.563a4.88 4.88 0 0 1-4.875-4.886c0-2.689 2.191-4.885 4.875-4.885 2.683 0 4.875 2.196 4.875 4.885 0 2.69-2.192 4.886-4.875 4.886"></path>
        <path d="M53.77 67.786a2.44 2.44 0 0 0 2.437-2.442 2.44 2.44 0 0 0-2.438-2.443 2.44 2.44 0 0 0-2.437 2.443 2.44 2.44 0 0 0 2.437 2.442"></path>
      </g>
      <g id="wheel-left" fill={frameColor} fillOpacity="0.5">
        <path d="M21.529 57.687c-4.22 0-7.64 3.428-7.64 7.657S17.309 73 21.529 73s7.64-3.428 7.64-7.657-3.42-7.657-7.64-7.657m0 12.563a4.88 4.88 0 0 1-4.875-4.886c0-2.689 2.192-4.885 4.875-4.885s4.875 2.196 4.875 4.885a4.88 4.88 0 0 1-4.875 4.886"></path>
        <path d="M21.528 67.786a2.44 2.44 0 0 0 2.438-2.442 2.44 2.44 0 0 0-2.438-2.443 2.44 2.44 0 0 0-2.437 2.443 2.44 2.44 0 0 0 2.437 2.442"></path>
      </g>
      <path
        id="frame"
        d="M63.54 63.208c0-5.419-4.383-9.791-9.77-9.791-5.388 0-9.771 4.393-9.771 9.791z"
        fill={frameColor}
      ></path>
      <path
        id="frame-background"
        d="M55.388 53.499 48.813 39.58l.799-.185-1.29-5.727a1.55 1.55 0 0 0-1.844-1.17l-6.657 1.498 1.208 5.337c.226 1.047 1.27 1.684 2.315 1.458l2.233 13.61a3.34 3.34 0 0 1-.943 2.935l-2.847 2.854a3.36 3.36 0 0 1-2.376.985h-4.67v-8.54h1.987c.43 0 .778-.349.778-.78V48.84a.78.78 0 0 0-.778-.78H17.35a.78.78 0 0 0-.779.78v1.765a13.29 13.29 0 0 0-8.296 12.337c0 .329.02.678.041 1.006a1.5 1.5 0 0 0 1.496 1.396h31.442a3.42 3.42 0 0 0 2.273-.883l11.82-10.92v-.02z"
        fill={frameColor}
        opacity="0.5"
      ></path>
      <path
        id="frame_2"
        d="m36.421 34.777 5.797-1.293a1.004 1.004 0 0 1 1.188.74l.061.287a1.007 1.007 0 0 1-.737 1.19l-5.797 1.314a1.004 1.004 0 0 1-1.188-.74l-.061-.286a1.02 1.02 0 0 1 .737-1.212"
        fill={frameColor}
      ></path>
      <path
        id="frame_3"
        d="M53.237 34.736a.683.683 0 0 0-.676-.677c-.532 0-1.208.02-1.331.02a3.43 3.43 0 0 0-3.42 3.428 3.43 3.43 0 0 0 3.42 3.428c.143 0 .799.021 1.331.021a.683.683 0 0 0 .676-.677z"
        fill={frameColor}
      ></path>
      <path
        id="frame_4"
        d="M31.668 65.343c0-5.624-4.527-10.16-10.14-10.16-5.612 0-10.138 4.536-10.138 10.16z"
        fill={frameColor}
      ></path>
      <path
        id="frame_5"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.543 10h28.914A2.53 2.53 0 0 1 34 12.543v36.06C34 49.919 32.872 51 31.457 51H2.543C1.128 51 0 49.918 0 48.604V12.543A2.54 2.54 0 0 1 2.543 10m30.063 2.543c0-.636-.513-1.148-1.149-1.148H2.563c-.635 0-1.148.512-1.148 1.148v30.063h31.19z"
        fill={frameColor}
      ></path>
      <rect
        id="qr-background"
        x="4"
        y="14"
        width="26"
        height="26"
        rx="2"
        fill={children ? "transparent" : "#E6E7ED"}
      ></rect>
      <g transform="translate(7.5, 17.5) scale(0.48)">
        {children || <QrFrame />}
      </g>
      <text
        x="17"
        y="47.24802775"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={getFontSize(label) - 2}
        fontWeight="700"
        fontFamily="var(--font-frame-default)"
        fill={children ? textColor : "#ffffff"}
      >
        {label}
      </text>
    </svg>
  );
};

export default QrCodeFrame22;
