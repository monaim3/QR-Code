const SecurityCheck = (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M14 6V8.605C15.15 8.935 16 9.995 16 11.25V17.25C16 18.765 14.765 20 13.25 20H2.75C1.235 20 0 18.765 0 17.25V11.25C0 9.99 0.85 8.935 2 8.605V6C2 2.69 4.69 0 8 0C11.31 0 14 2.69 14 6ZM12.5 6C12.5 3.52 10.48 1.5 8 1.5C5.52 1.5 3.5 3.52 3.5 6V8.5H12.5V6ZM13.25 18.5C13.94 18.5 14.5 17.94 14.5 17.25V11.25C14.5 10.56 13.94 10 13.25 10H2.75C2.06 10 1.5 10.56 1.5 11.25V17.25C1.5 17.94 2.06 18.5 2.75 18.5H13.25ZM8 12C8.83 12 9.5 12.67 9.5 13.5C9.5 14.05 9.195 14.53 8.75 14.79V16.5H7.25V14.79C6.805 14.53 6.5 14.055 6.5 13.5C6.5 12.67 7.17 12 8 12Z"
          fill="#3F3E3E"
        />
      </svg>
    );
  };
  
  export default SecurityCheck;
  