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

const QrCodeFrame23: React.FC<Props> = ({
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
        d="M14 13h39v39H14z"
        fill={backgroundColor}
      ></path>
      <rect
        id="qr-background"
        x="17"
        y="16"
        width="33"
        height="33"
        rx="2"
        fill={children ? "transparent" : "#E6E7ED"}
      ></rect>
      <path
        id="frame"
        d="M51.71 13.67c.329 0 .602.274.602.603v37.092H14.62v-37.11c0-.329.273-.603.602-.603zm0-1.806H15.22a2.4 2.4 0 0 0-2.39 2.39v38.899h41.29V14.255c-.019-1.314-1.095-2.39-2.409-2.39"
        fill={frameColor}
      ></path>
      <path
        id="shadow"
        d="M6.764 52.17h53.421c.463 0 .815.223.815.491 0 .28-.37.492-.815.492H6.764c-.463 0-.815-.224-.815-.492 0-.28.37-.492.815-.492"
        fill={frameColor}
        fillOpacity="0.5"
      ></path>
      <path
        id="frame_2"
        d="M52.417 59.05H14.532c-3.107 0-5.634-2.645-5.634-5.897h49.153c0 3.252-2.527 5.898-5.634 5.898"
        fill={frameColor}
      ></path>
      <path
        id="frame_3"
        d="M49.612 59.209c-.85-1.008-2.125-1.217-3.307-.57-.61-.61-1.719-.628-2.66-.267-.352.133-4.547 1.845-5.895 2.397-.5-.875-1.553-1.218-1.996-1.35-.684-.21-10.089-1.94-13.637-1.142-1.2.266-10.513 3.86-10.901 4.013a.57.57 0 0 0-.315.723c.111.285.425.437.703.323 2.679-1.027 9.811-3.747 10.754-3.956 3.122-.704 12.214.837 13.1 1.103 1.09.343 1.516.742 1.497 1.427-.037.78-.425 1.122-1.552 1.35-.776.152-7.299.666-9.738.875-.296.019-.517.285-.499.609a.55.55 0 0 0 .536.513h.037a430 430 0 0 1 3.88-.304 199 199 0 0 0 3.345 1.807c1.33.684 2.199.17 3.289-.457.13-.076.277-.152.425-.228.665-.38 8.906-5.554 9.904-6.257.314-.21 1.404-.856 2.254.152.204.247.296.551.278.894-.037.4-.24.76-.573 1.027-.407.342-10.348 8.387-11.586 9.262-2.125 1.483-4.675 1.902-7.631 1.236-.647-.152-8.334-2.377-12.306-3.537a.5.5 0 0 0-.333.019l-2.753 1.027a.57.57 0 0 0-.314.722c.11.286.425.438.702.324l2.55-.99c1.496.438 11.4 3.33 12.195 3.5q1.497.343 2.883.343c2.07 0 3.954-.57 5.598-1.731 1.294-.894 11.272-8.977 11.66-9.3a2.67 2.67 0 0 0 .98-1.807c.018-.666-.167-1.275-.574-1.75m-13.507 5.858c-.148.076-.295.171-.425.247-1.127.647-1.515.837-2.273.438-.425-.21-1.145-.609-1.829-.97 1.885-.172 3.566-.324 3.973-.4.646-.133 2.346-.456 2.439-2.396v-.114c2.106-.856 5.691-2.32 5.987-2.435.462-.17.942-.209 1.275-.114-2.2 1.427-8.556 5.42-9.147 5.744"
        fill={frameColor}
      ></path>
      <path
        id="frame-background"
        d="M3 79.695h1.035l10.762-6.91-4.18-11.768L3 63.22z"
        fill={frameColor}
        opacity="0.5"
      ></path>
      <g transform="translate(22, 21) scale(0.58)">{children || <QrFrame />}</g>
      <text
        x="33"
        y="7.68"
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

export default QrCodeFrame23;
