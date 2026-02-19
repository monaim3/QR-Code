import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";
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
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);

  const minSwipeDistance = 50;

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const currentTouch = e.targetTouches[0].clientX;
    setTouchEnd(currentTouch);
    setDragOffset(currentTouch - touchStart);
  };

  const handleTouchEnd = () => {
    if (!isDragging) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

    setIsDragging(false);
    setDragOffset(0);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    setTouchStart(e.clientX);
    setIsDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    const currentMouse = e.clientX;
    setTouchEnd(currentMouse);
    setDragOffset(currentMouse - touchStart);
  };

  const handleMouseUp = () => {
    if (!isDragging) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && currentIndex < images.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }

    if (isRightSwipe && currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }

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
          className="w-full relative cursor-grab active:cursor-grabbing"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={() => {
            if (isDragging) {
              handleMouseUp();
            }
          }}
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
                className="object-cover"
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
