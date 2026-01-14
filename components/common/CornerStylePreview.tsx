type CornerStylePreviewProps = {
  type: string;
  isSelected: boolean;
  onClick: () => void;
  isFrame?: boolean;
};
const CornerStylePreview = ({
  type,
  isSelected,
  onClick,
  isFrame = true,
}: CornerStylePreviewProps) => {
  const size = 60;
  const cornerSize = 20;
  const dotSize = 8;

  if (type === "none") {
    return (
      <button
        onClick={onClick}
        className={`w-full aspect-square border-2 rounded-lg flex items-center justify-center transition-all ${
          isSelected
            ? "border-blue-500 bg-blue-50"
            : "border-gray-300 hover:border-gray-400"
        }`}
      >
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <line x1="10" y1="10" x2="50" y2="50" stroke="#ccc" strokeWidth="2" />
          <line x1="50" y1="10" x2="10" y2="50" stroke="#ccc" strokeWidth="2" />
        </svg>
      </button>
    );
  }

  return (
    <button
      onClick={onClick}
      className={`w-full aspect-square border-2 rounded-lg flex items-center justify-center transition-all ${
        isSelected
          ? "border-blue-500 bg-blue-50"
          : "border-gray-300 hover:border-gray-400"
      }`}
    >
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {isFrame ? (
          // Corner Frame
          <>
            {type === "square" && (
              <rect
                x="5"
                y="5"
                width={cornerSize}
                height={cornerSize}
                fill="black"
              />
            )}
            {type === "dot" && (
              <circle cx="15" cy="15" r={cornerSize / 2} fill="black" />
            )}
            {type === "extra-rounded" && (
              <rect
                x="5"
                y="5"
                width={cornerSize}
                height={cornerSize}
                rx="5"
                fill="black"
              />
            )}
          </>
        ) : (
          // Corner Dot
          <>
            {type === "square" && (
              <rect
                x="11"
                y="11"
                width={dotSize}
                height={dotSize}
                fill="black"
              />
            )}
            {type === "dot" && (
              <circle cx="15" cy="15" r={dotSize / 2} fill="black" />
            )}
          </>
        )}
      </svg>
    </button>
  );
};

export default CornerStylePreview;
