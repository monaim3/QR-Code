import React from "react";

interface CircleArrowDownProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // optional color prop
}

const CircleArrowDown: React.FC<CircleArrowDownProps> = ({
  color = "#3F3E3E",
  ...props
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 10C0 4.485 4.485 0 10 0C15.515 0 20 4.485 20 10C20 15.515 15.515 20 10 20C4.485 20 0 15.515 0 10ZM1.5 10C1.5 14.685 5.315 18.5 10 18.5C14.685 18.5 18.5 14.685 18.5 10C18.5 5.315 14.685 1.5 10 1.5C5.315 1.5 1.5 5.315 1.5 10ZM10.75 5.5V12.19L12.97 9.97L14.03 11.03L10.885 14.175C10.64 14.42 10.32 14.54 9.99997 14.54C9.67997 14.54 9.35997 14.42 9.11497 14.175L5.96997 11.03L7.02997 9.97L9.24997 12.19V5.5H10.75Z"
        fill={color}
      />
    </svg>
  );
};

export default CircleArrowDown;
