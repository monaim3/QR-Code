const LoadingSpinner = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="50"
      height="50"
      viewBox="0 0 50 50"
      fill="none"
      {...props}
    >
      <g
        clipPath="url(#paint0_angular_37520_121950_clip_path)"
        data-figma-skip-parse="true"
      >
        <g transform="matrix(0 0.025 -0.025 0 25 25)">
          <foreignObject x="-1040" y="-1040" width="2080" height="2080">
            <div
              style={{
                background:
                  "conic-gradient(from 90deg, rgba(1, 165, 109, 1) 0deg, rgba(1, 165, 109, 0) 360deg)",
                height: "100%",
                width: "100%",
                opacity: 1,
              }}
            />
          </foreignObject>
        </g>
      </g>

      <path
        d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25ZM8.30797 25C8.30797 34.2188 15.7812 41.692 25 41.692C34.2188 41.692 41.692 34.2188 41.692 25C41.692 15.7812 34.2188 8.30797 25 8.30797C15.7812 8.30797 8.30797 15.7812 8.30797 25Z"
        data-figma-gradient-fill="{&quot;type&quot;:&quot;GRADIENT_ANGULAR&quot;}"
      />

      <circle cx="24.9987" cy="45.8327" r="4.16667" fill="#01A56D" />

      <defs>
        <clipPath id="paint0_angular_37520_121950_clip_path">
          <path d="M50 25C50 38.8071 38.8071 50 25 50C11.1929 50 0 38.8071 0 25C0 11.1929 11.1929 0 25 0C38.8071 0 50 11.1929 50 25ZM8.30797 25C8.30797 34.2188 15.7812 41.692 25 41.692C34.2188 41.692 41.692 34.2188 41.692 25C41.692 15.7812 34.2188 8.30797 25 8.30797C15.7812 8.30797 8.30797 15.7812 8.30797 25Z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default LoadingSpinner;
