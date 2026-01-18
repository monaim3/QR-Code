import React from "react";

const EmailIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 32"
      fill="none"
      {...props}   // ✅ allow size, className, onClick, etc.
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M34.5 32H9V29H34.5C35.88 29 37 27.88 37 26.5V10.92L20 20.74L0 9.19V5.5C0 2.47 2.47 0 5.5 0H34.5C37.53 0 40 2.47 40 5.5V26.5C40 29.53 37.53 32 34.5 32ZM3 7.45L20 17.26L37 7.45V5.5C37 4.12 35.88 3 34.5 3H5.5C4.12 3 3 4.12 3 5.5V7.45ZM14 22H3V25H14V22ZM0 16H5V19H0V16Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default EmailIcon;
