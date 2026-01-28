const FileText = (props: React.SVGProps<SVGSVGElement>) => {
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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.04008 1.33301H2.66675V14.6663H13.3334V5.62634L9.04008 1.33301ZM9.33342 3.03967L11.6267 5.33301H9.33342V3.03967ZM3.66675 13.6663V2.33301H8.33342V5.49967C8.33342 5.95967 8.70675 6.33301 9.16675 6.33301H12.3334V13.6663H3.66675ZM8.66675 10.6663H5.00008V11.6663H8.66675V10.6663ZM5.00008 8.33301H11.0001V9.33301H5.00008V8.33301Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default FileText;
