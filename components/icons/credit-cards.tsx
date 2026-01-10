const CreditCards = (props: React.SVGProps<SVGSVGElement>) => {
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
        d="M6.75 4H20.25C21.215 4 22 4.785 22 5.75V15.25C22 16.215 21.215 17 20.25 17H6.75C5.785 17 5 16.215 5 15.25V5.75C5 4.785 5.785 4 6.75 4ZM20.25 5.5H6.75C6.61 5.5 6.5 5.61 6.5 5.75V7.995H20.5V5.75C20.5 5.61 20.39 5.5 20.25 5.5ZM6.75 15.5H20.25C20.39 15.5 20.5 15.39 20.5 15.25V9.5H6.5V15.25C6.5 15.39 6.61 15.5 6.75 15.5ZM3.5 7V17.25C3.5 17.94 4.06 18.5 4.75 18.5H19.5V20H4.75C3.235 20 2 18.765 2 17.25V7H3.5Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default CreditCards;
