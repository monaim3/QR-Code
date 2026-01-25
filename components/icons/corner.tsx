const FourCorner = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="224"
      height="224"
      viewBox="0 0 224 224"
      fill="none"
      {...props}
    >
      <rect x="2" y="2" width="220" height="220" fill="white" />
      <path d="M2 26.0428V2" stroke="#0A0909" strokeWidth={4} strokeLinecap="round" />
      <path d="M2 2H26.3153" stroke="#0A0909" strokeWidth={4} strokeLinecap="round" />
      <path d="M2 197.957V222" stroke="#0A0909" strokeWidth={4} strokeLinecap="round" />
      <path d="M2 222H26.3153" stroke="#0A0909" strokeWidth={4} strokeLinecap="round" />
      <path d="M222 26.0428V2" stroke="#0A0909" strokeWidth={4} strokeLinecap="round" />
      <path d="M221.999 2H197.684" stroke="#0A0909" strokeWidth={4} strokeLinecap="round" />
      <path d="M222 197.957V222" stroke="#0A0909" strokeWidth={4} strokeLinecap="round" />
      <path d="M221.999 222H197.684" stroke="#0A0909" strokeWidth={4} strokeLinecap="round" />
    </svg>
  );
};

export default FourCorner;
