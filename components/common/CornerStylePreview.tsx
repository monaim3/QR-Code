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
  const size = 28;
  const cornerSize = 20;
  const dotSize = 20;
  const strokeWidth = 2.5;

  const baseClass =
    "w-[60px] h-[60px] flex items-center justify-center rounded-[10px] border transition-all p-4 border-2";

  const stateClass = isSelected
    ? "border-[var(--Blue)] bg-[#F3FBF8]"
    : "border-[#D6DDF0] hover:border-[#BFC8E8]";

  if (type === "none") {
    return (
      <button onClick={onClick} className={`${baseClass} ${stateClass}`}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx="14"
            cy="14"
            r="10"
            fill="none"
            stroke="#000"
            strokeWidth={strokeWidth}
          />
          <line
            x1="6"
            y1="22"
            x2="22"
            y2="6"
            stroke="#000"
            strokeWidth={strokeWidth}
          />
        </svg>
      </button>
    );
  }

  return (
    <button onClick={onClick} className={`${baseClass} ${stateClass}`}>
      <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        {isFrame ? (
          <>
            {type === "square" && (
              <rect
                x="2"
                y="2"
                width={size - 4}
                height={size - 4}
                fill="none"
                stroke="#000"
                strokeWidth={strokeWidth}
              />
            )}

            {type === "dot" && (
              <circle
                cx={size / 2}
                cy={size / 2}
                r={(size - 4) / 2}
                fill="none"
                stroke="#000"
                strokeWidth={strokeWidth}
              />
            )}
            {type === "extra-rounded" && (
              <rect
                x="2"
                y="2"
                width={size - 4}
                height={size - 4}
                rx="6"
                fill="none"
                stroke="#000"
                strokeWidth={strokeWidth}
              />
            )}
          </>
        ) : (
          <>
            {type === "square" && (
              <rect
                x={(size - dotSize) / 2}
                y={(size - dotSize) / 2}
                width={dotSize}
                height={dotSize}
                fill="#000"
              />
            )}

            {type === "dot" && (
              <circle cx={size / 2} cy={size / 2} r={dotSize / 2} fill="#000" />
            )}
          </>
        )}
      </svg>
    </button>
  );
};

export default CornerStylePreview;
