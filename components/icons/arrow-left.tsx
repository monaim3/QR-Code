const ArrowLeft = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="13"
      height="9"
      viewBox="0 0 13 9"
      fill="none"
      {...props} // allows passing additional props like className
    >
      <path
        d="M1.2786 4.08341L11.2786 4.08325M3.94526 0.75L1.08333 3.61193C0.861111 3.83415 0.75 3.94526 0.75 4.08333C0.75 4.2214 0.861111 4.33252 1.08333 4.55474L3.94526 7.41667"
        stroke="currentColor"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeft;
