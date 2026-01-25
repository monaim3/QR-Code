const AlertCircleBg = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        d="M12 2C6.485 2 2 6.485 2 12C2 17.515 6.485 22 12 22C17.515 22 22 17.515 22 12C22 6.485 17.515 2 12 2ZM11.25 7.5H12.75V13.5H11.25V7.5ZM12 17C11.45 17 11 16.55 11 16C11 15.45 11.45 15 12 15C12.55 15 13 15.45 13 16C13 16.55 12.55 17 12 17Z"
        fill="white"
      />
    </svg>
  );
};

export default AlertCircleBg;
