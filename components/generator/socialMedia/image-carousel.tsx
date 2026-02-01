'use client';

import { useState, useRef } from 'react';
import Image from 'next/image';
import { useAppSelector } from "@/store/hooks";

interface CarouselProps {
  images: string[];
  initialIndex?: number;
}

export default function Carousel({ images, initialIndex = 0 }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const isScrolling = useRef(false);
  const social = useAppSelector((state) => state.social);

  const next = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

//   images = [
//     '/images/social-user.png',
//     '/images/social-user.png',
//     '/images/social-user.png',
// ];

  const getImageStyle = (index: number) => {
    const diff = index - currentIndex;

    if (diff === 0) {
      return {
        width: '130px',
        height: '130px',
        transform: 'translateX(0px)',
        zIndex: 30,
        opacity: 1,
      };
    } else if (diff === -1 || (currentIndex === 0 && index === images.length - 1)) {
      return {
        width: '100px',
        height: '100px',
        transform: 'translateX(-66.67px)',
        zIndex: 20,
        opacity: 1,
      };
    } else if (diff === 1 || (currentIndex === images.length - 1 && index === 0)) {
      return {
        width: '100px',
        height: '100px',
        transform: 'translateX(66.67px)',
        zIndex: 20,
        opacity: 1,
      };
    } else {
      return {
        width: '100px',
        height: '100px',
        transform: 'translateX(0px)',
        zIndex: 10,
        opacity: 0,
      };
    }
  };

  return (
    <div
      className="w-full h-[200px] flex items-center justify-center overflow-hidden">
      {social?.carousels?.map((image, index) => {
        const style = getImageStyle(index);
        return (
          <div
            key={`carousel-${index}`}
            className="absolute transition-all duration-700 ease-in-out cursor-pointer"
            style={style}
            onClick={() => setCurrentIndex(index)}
          >
            <div className="w-full h-full rounded-[4px] overflow-hidden bg-white p-[1px] shadow-card">
              <div className="w-full h-full bg-black rounded-[4px] overflow-hidden relative">
                <Image
                  src={image}
                  alt={`Slide ${index + 1}`}
                  fill
                  className="object-cover"
                  priority={index === currentIndex}
                />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
