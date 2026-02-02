import React from "react";

interface CircleArrowUpProps extends React.SVGProps<SVGSVGElement> {
  color?: string; // optional color prop
}

const CircleArrowUp: React.FC<CircleArrowUpProps> = ({ color = "#3F3E3E", ...props }) => {
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
        d="M0 10C0 4.485 4.485 0 10 0C15.515 0 20 4.485 20 10C20 15.515 15.515 20 10 20C4.485 20 0 15.515 0 10ZM1.5 10C1.5 14.685 5.315 18.5 10 18.5C14.685 18.5 18.5 14.685 18.5 10C18.5 5.315 14.685 1.5 10 1.5C5.315 1.5 1.5 5.315 1.5 10ZM5.96997 8.96999L9.11497 5.82499C9.60497 5.33999 10.4 5.33999 10.885 5.82499L14.03 8.96999L12.97 10.03L10.75 7.80999V14.5H9.24997V7.80999L7.02997 10.03L5.96997 8.96999Z"
        fill={color}
      />
    </svg>
  );
};

export default CircleArrowUp;
