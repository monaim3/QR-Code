const CreditCard = (props: React.SVGProps<SVGSVGElement>) => {
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
          d="M4.75 4H19.25C20.765 4 22 5.235 22 6.75V13H20.5V10.5H3.5V17.25C3.5 17.94 4.06 18.5 4.75 18.5H11.5V20H4.75C3.235 20 2 18.765 2 17.25V6.75C2 5.235 3.235 4 4.75 4ZM3.5 8.5H20.5V6.75C20.5 6.06 19.94 5.5 19.25 5.5H4.75C4.06 5.5 3.5 6.06 3.5 6.75V8.5ZM14.2802 17.72L16.2502 19.69L20.7202 15.22L21.7802 16.28L17.1352 20.925C16.8902 21.17 16.5702 21.29 16.2502 21.29C15.9302 21.29 15.6102 21.17 15.3652 20.925L13.2202 18.78L14.2802 17.72Z"
          fill="#0A0909"
        />
      </svg>
    );
  };
  
  export default CreditCard;
  