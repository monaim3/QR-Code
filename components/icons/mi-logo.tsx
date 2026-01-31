import React from "react";

const MiLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      {...props} // ✅ spread props for className, style, etc.
    >
      <g clipPath="url(#clip0_37088_206186)">
        <path
          d="M0 6C0 2.68629 2.68629 0 6 0H54C57.3137 0 60 2.68629 60 6V54C60 57.3137 57.3137 60 54 60H6C2.68629 60 0 57.3137 0 54V6Z"
          fill="#FF7043"
        />
        <path d="M40 21H44V39H40V21ZM24 28H28V39H24V28Z" fill="#FAFAFA" />
        <path d="M36 27V39H32V28C32 26.34 30.66 25 29 25H20V39H16V21H30C33.31 21 36 23.69 36 27Z" fill="#FAFAFA" />
      </g>
      <defs>
        <clipPath id="clip0_37088_206186">
          <rect width="60" height="60" rx="10" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default MiLogo;
