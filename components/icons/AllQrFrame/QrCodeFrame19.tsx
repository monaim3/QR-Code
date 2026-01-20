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

const QrCodeFrame19 = ({
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
      <defs>
        <path
          id="path-bow-shadow"
          d="M62.094 18.333v.921l-12.619-.094c.112.77.075 1.635-.375 2.48-.506.94-1.613 2.067-3.994 2.067-3.15 0-7.443-2.048-9.956-4.171a2.9 2.9 0 0 1-1.612.507h-2.25a2.77 2.77 0 0 1-1.594-.507c-2.494 2.104-6.806 4.171-9.956 4.171-2.382 0-3.488-1.127-3.994-2.067-.45-.845-.488-1.71-.375-2.48l-13.481.113.077-.94 30.258-2.482z"
        ></path>
        <path
          id="path-left-ribbon"
          d="M20.9 8.205s-13.875-.507-18-.113c2.175 1.973 4.144 4.623 4.144 4.623l-5.081 5.618 22.275-.15c-.507-2.01-3.338-9.978-3.338-9.978"
        ></path>
        <path
          id="path-right-ribbon"
          d="M43.156 8.205s13.875-.507 18-.113c-2.175 1.973-4.143 4.623-4.143 4.623l5.08 5.618-22.274-.15c.525-2.01 3.337-9.978 3.337-9.978"
        ></path>
        <path
          id="path-solid-left"
          d="M30.594 8.487s-6.225-5.374-10.95-5.337c-4.725.038-4.444 3.007-4.238 3.852.356 1.504 2.175 5.187 2.175 7.216s-2.137 4.735-1.031 6.915c2.25 4.397 12.188-.958 14.044-4.153 1.837-3.194 0-8.493 0-8.493"
        ></path>
        <path
          id="path-solid-right"
          d="M34.269 8.487s6.225-5.374 10.95-5.337c4.725.038 4.444 2.988 4.237 3.834-.356 1.503-2.175 5.186-2.175 7.215s2.157 4.754 1.032 6.934c-2.25 4.397-12.188-.958-14.044-4.153s0-8.493 0-8.493"
        ></path>
        <path
          id="path-shadow-left"
          d="M28.006 8.618S20 2.85 17.675 5.255c-2.569 2.687 10.331 3.363 10.331 3.363"
        ></path>
        <path
          id="path-shadow-right"
          d="M36.838 8.618s8.006-5.768 10.33-3.363c2.588 2.687-10.33 3.363-10.33 3.363"
        ></path>
        <path
          id="path-knot"
          d="M31.306 7.867h2.25a1.93 1.93 0 0 1 1.931 1.935v7.235a1.93 1.93 0 0 1-1.93 1.935h-2.25a1.93 1.93 0 0 1-1.932-1.935V9.783c0-1.052.863-1.916 1.931-1.916"
        ></path>
      </defs>
      <path
        id="frame"
        d="M56.525 20.57v49.175H7.475V20.569zm0-2.425H7.475a2.395 2.395 0 0 0-2.4 2.406v49.175a2.395 2.395 0 0 0 2.4 2.405h49.069c1.331 0 2.4-1.07 2.4-2.405V20.569a2.427 2.427 0 0 0-2.419-2.424"
        fill={frameColor}
      ></path>
      <path
        id="frame-background"
        fill={backgroundColor}
        d="M7 20h50v51H7z"
      ></path>
      <path
        id="text-container"
        d="M56.525 81.546H7.475a2.395 2.395 0 0 1-2.4-2.406v-9.094h53.887v9.094a2.44 2.44 0 0 1-2.437 2.406"
        fill={frameColor}
      ></path>
      <rect
        id="qr-background"
        x="11"
        y="24"
        width="42"
        height="42"
        rx="2"
        fill={children ? "transparent" : "#E6E7ED"}
      ></rect>
      <g transform="translate(17, 30) scale(0.75)">{children || <QrFrame />}</g>
      <text
        x="32"
        y="76.345"
        textAnchor="middle"
        dominantBaseline="middle"
        fontSize={getFontSize(label)}
        fontWeight="700"
        fontFamily="var(--font-frame-default)"
        fill={children ? textColor : "#ffffff"}
      >
        {label}
      </text>
      <g id="bow">
        <use href="#path-bow-shadow" fill={frameColor} fillOpacity="0.5"></use>
        <use href="#path-left-ribbon" fill={frameColor} fillOpacity="0.5"></use>
        <use
          href="#path-right-ribbon"
          fill={frameColor}
          fillOpacity="0.5"
        ></use>
        <use href="#path-solid-left" fill={frameColor}></use>
        <use href="#path-solid-right" fill={frameColor}></use>
        <use href="#path-shadow-left" fill={frameColor} fillOpacity="0.5"></use>
        <use
          href="#path-shadow-right"
          fill={frameColor}
          fillOpacity="0.5"
        ></use>
        <use href="#path-knot" fill={frameColor} fillOpacity="0.5"></use>
      </g>
    </svg>
  );
};

export default QrCodeFrame19;
