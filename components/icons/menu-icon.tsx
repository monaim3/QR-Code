import { SVGProps } from "react";
const MenuIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    {...props}>
    <path
      stroke="#0A0909"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M20 12H10m10-7H4m16 14H4"
    />
  </svg>
);
export default MenuIcon;
