interface Props {
  onClick: () => void;
}

export default function HelpIcon({ onClick }: Props) {
  return (
    <div className="flex items-center gap-10 ml-10">
      <button className="hidden md:block">
        <svg width="1" height="19" viewBox="0 0 1 19" fill="none">
          <path
            d="M0.5 0.5L0.499999 18.5"
            stroke="#D3D8EB"
            strokeLinecap="round"
          />
        </svg>
      </button>
      <button
        onClick={onClick}
        className="flex items-center justify-center w-6 h-6 rounded-full  border-[var(--Boarder-Grey)]  transition-colors"
        aria-label="Help"
      >
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M10 9C10 7.89543 10.8954 7 12 7C13.1046 7 14 7.89543 14 9C14 9.39815 13.8837 9.76913 13.6831 10.0808C13.0854 11.0097 12 11.8954 12 13V13.5M11.992 17H12.001M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
            stroke="#79809A"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>
    </div>
  );
}
