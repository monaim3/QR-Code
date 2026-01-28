const UnfoldMore = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      {...props}
    >
      <path
        d="M11.6865 10.6865L8.58984 13.7832C8.42658 13.9465 8.21325 14.0273 8 14.0273C7.78667 14.0273 7.57349 13.9465 7.41016 13.7832L4.31348 10.6865L5.01953 9.98047L8 12.96L10.9795 9.98047L11.6865 10.6865ZM7.41016 2.2168C7.73351 1.89375 8.26327 1.89358 8.58984 2.2168L11.6865 5.31348L10.9795 6.02051L8 3.04004L5.01953 6.02051L4.31348 5.31348L7.41016 2.2168Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default UnfoldMore;
