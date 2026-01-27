const Cloude = (props: React.SVGProps<SVGSVGElement>) => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="74"
        height="24"
        viewBox="0 0 74 24"
        fill="none"
        {...props}
      >
        <path
          d="M73.512 23.9566H0C0 23.9566 10.067 1.48164 20.836 0.0776357C31.605 -1.32636 36.756 16.7776 36.756 16.7776C36.756 16.7776 43.701 10.3776 49.165 10.3776C54.629 10.3776 58.841 18.8056 58.841 18.8056C58.841 18.8056 69.767 13.0316 73.512 23.9566Z"
          fill="white"
          fillOpacity={0.05}   // 👈 opacity here (0–1)
        />
      </svg>
    );
  };
  
  export default Cloude;
  