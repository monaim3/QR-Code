import { useState, useRef } from "react";
import Image from "next/image";
import { FaArrowLeftLong } from "react-icons/fa6";

interface ImageCarouselProps {
  images: { url: string; name: string }[];
  initialIndex?: number;
  onClose: () => void;
}

const ImageCarouselViewer: React.FC<ImageCarouselProps> = ({
  images,
  initialIndex = 0,
  onClose,
}) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const pointerStartXRef = useRef(0);
  const activePointerIdRef = useRef<number | null>(null);

  const minSwipeDistance = 50;

  const endDrag = (
    e: React.PointerEvent<HTMLDivElement>,
    endClientX: number
  ) => {
    if (e.pointerId !== activePointerIdRef.current) return;

    const distance = pointerStartXRef.current - endClientX;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    setCurrentIndex((idx) => {
      if (isLeftSwipe && idx < images.length - 1) return idx + 1;
      if (isRightSwipe && idx > 0) return idx - 1;
      return idx;
    });

    activePointerIdRef.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* capture may already be released */
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType === "mouse" && e.button !== 0) return;
    activePointerIdRef.current = e.pointerId;
    pointerStartXRef.current = e.clientX;
    e.currentTarget.setPointerCapture(e.pointerId);
    setIsDragging(true);
    setDragOffset(0);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerId !== activePointerIdRef.current) return;
    setDragOffset(e.clientX - pointerStartXRef.current);
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    endDrag(e, e.clientX);
  };

  const handlePointerCancel = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerId !== activePointerIdRef.current) return;
    activePointerIdRef.current = null;
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      /* ignore */
    }
    setIsDragging(false);
    setDragOffset(0);
  };

  const handleLostPointerCapture = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerId !== activePointerIdRef.current) return;
    activePointerIdRef.current = null;
    setIsDragging(false);
    setDragOffset(0);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <div className="w-full h-full bg-white flex flex-col rounded-[32px] overflow-hidden">
      {/* Header with Back button */}
      <div className="mt-10 px-6 py-8 flex-shrink-0">
        <button
          onClick={onClose}
          className="flex items-center gap-3 text-gray-700 hover:text-gray-900"
        >
          <FaArrowLeftLong size={18} />
          <span className="text-sm font-normal">Back</span>
        </button>
      </div>

      {/* Image Container */}
      <div className=" flex items-center justify-center px-6">
        <div
          className="w-full relative cursor-grab active:cursor-grabbing touch-pan-y select-none"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerCancel={handlePointerCancel}
          onLostPointerCapture={handleLostPointerCapture}
        >
          <div
            className="relative w-full aspect-[3/4] transition-transform duration-300 ease-out"
            style={{
              transform: isDragging ? `translateX(${dragOffset}px)` : "none",
            }}
          >
            <div className="absolute inset-0 rounded-2xl overflow-hidden shadow-lg border-2 border-white">
              <Image
                src={images[currentIndex].url}
                alt={images[currentIndex].name}
                fill
                className="object-cover pointer-events-none"
                draggable={false}
                unoptimized
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Dots Navigation */}
      <div className="mt-6 pb-6 flex items-center justify-center gap-2 flex-shrink-0">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "w-8 h-2 bg-[var(--Blue)]"
                : "w-2 h-2 bg-[var(--Boarder-Grey)] hover:bg-[var(--Blue)]"
            }`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarouselViewer;
