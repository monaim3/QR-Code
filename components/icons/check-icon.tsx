import React from "react";

const CheckIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={props.width || 12}
      height={props.height || 9}
      viewBox="0 0 12 9"
      fill="none"
      {...props} // forwards any additional props like className, onClick, etc.
    >
      <path
        d="M11.3499 0.293447C11.7318 0.684905 11.7318 1.31946 11.3499 1.71072L4.79126 8.43383C4.40937 8.82509 3.79051 8.82509 3.40861 8.43383L0.286422 5.23326C-0.0954739 4.842 -0.0954739 4.20744 0.286422 3.81618C0.668127 3.42472 1.28718 3.42472 1.66888 3.81618L4.09984 6.30801L9.96729 0.293447C10.3492 -0.0978157 10.9682 -0.0978157 11.3499 0.293447Z"
        fill={props.fill || "#3F3E3E"}
      />
    </svg>
  );
};

export default CheckIcon;
