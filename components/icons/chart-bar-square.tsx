const ChartBarSquare = (props: React.SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M5.75 21H18.25C19.765 21 21 19.765 21 18.25V5.75C21 4.235 19.765 3 18.25 3H5.75C4.235 3 3 4.235 3 5.75V18.25C3 19.765 4.235 21 5.75 21ZM4.5 5.75C4.5 5.06 5.06 4.5 5.75 4.5H18.25C18.94 4.5 19.5 5.06 19.5 5.75V18.25C19.5 18.94 18.94 19.5 18.25 19.5H5.75C5.06 19.5 4.5 18.94 4.5 18.25V5.75ZM11.25 6.5H12.75V17.5H11.25V6.5ZM7 13H8.5V17.5H7V13ZM17 10H15.5V17.5H17V10Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default ChartBarSquare;
