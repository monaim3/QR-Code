import LoadingSpinner from "../icons/loading-spinner";

interface LoadingOverlayProps {
  title: string;
  isLoading?: boolean;
}

export default function LoadingOverlay({ title, isLoading = true }: LoadingOverlayProps){
    if (!isLoading) return null;
    return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop with blur */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm" />
      {/* Loading content */}
      <div className="relative z-10 flex flex-col items-center gap-4">
        {/* Circular loading spinner */}
        <div className="rotate-[-90deg]">
          <LoadingSpinner />
        </div>
        {/* Loading text */}
        <p className="text-gray-700 text-base font-medium">{title}</p>
      </div>
    </div>
  );
}