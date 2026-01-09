export default function QrCodeLoader() {
  return (
    <div className="flex items-center justify-center">
      <div
        className="relative w-[30px] h-[30px] animate-spin"
        style={{
          background:
            "conic-gradient(from 180deg at 50% 50%, #CDD0DB 0deg, rgba(205, 208, 219, 0) 360deg)",
          WebkitMaskImage: "radial-gradient(transparent 55%, black 56%)",
          maskImage: "radial-gradient(transparent 55%, black 56%)",
          borderRadius: "50%",
        }}
      >
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-[var(--Boarder-Grey)]" />
      </div>
    </div>
  );
}
