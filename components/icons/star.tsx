import React from "react";

interface StarProps extends React.SVGProps<SVGSVGElement> {
  fill?: string; // optional fill color
  width?: number;
  height?: number;
}

const Star: React.FC<StarProps> = ({ fill = "#FEBE4F", width = 21, height = 20, ...props }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 21 20"
      fill="none"
      {...props}
    >
      <path
        d="M4.6585 19.455C4.3985 19.455 4.1435 19.375 3.9235 19.215C3.5335 18.935 3.3435 18.465 3.4235 17.99L4.3635 12.5L0.3785 8.615C0.0334997 8.28 -0.0865004 7.79 0.0634996 7.335C0.2135 6.88 0.5985 6.555 1.0735 6.485L6.5835 5.685L9.0485 0.695C9.2585 0.265 9.6885 0 10.1685 0C10.6485 0 11.0785 0.265 11.2885 0.695L13.7535 5.685L19.2635 6.485C19.7385 6.555 20.1235 6.88 20.2735 7.335C20.4235 7.79 20.2985 8.28 19.9585 8.615L15.9735 12.5L16.9135 17.985C16.9935 18.46 16.8035 18.925 16.4135 19.21C16.0235 19.49 15.5235 19.525 15.0985 19.305L10.1685 16.715L5.2385 19.305C5.0535 19.4 4.8535 19.45 4.6535 19.45L4.6585 19.455Z"
        fill={fill} // use prop
      />
    </svg>
  );
};

export default Star;