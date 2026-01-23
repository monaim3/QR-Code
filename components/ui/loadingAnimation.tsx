import React from 'react';

const LoadingAnimation = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes drawCircle {
          0% {
            stroke-dashoffset: 283;
          }
          100% {
            stroke-dashoffset: 0;
          }
        }

        @keyframes drawCheckmark {
          0%, 79.9% {
            stroke-dashoffset: 60;
            opacity: 0;
            visibility: hidden;
          }
          80% {
            stroke-dashoffset: 60;
            opacity: 1;
            visibility: visible;
          }
          100% {
            stroke-dashoffset: 0;
            opacity: 1;
            visibility: visible;
          }
        }

        .circle-progress {
          animation: drawCircle 2s ease-in-out forwards;
        }

        .checkmark-path {
          animation: drawCheckmark 2s ease-in-out forwards;
        }
      `}} />
      
      <div className="relative w-16 h-16">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 100 100"
        >
          {/* Animated progress circle */}
          <circle
            className="circle-progress"
            cx="50"
            cy="50"
            r="45"
            fill="none"
            stroke="#10b981"
            strokeWidth="8"
            strokeLinecap="round"
            strokeDasharray="283"
            strokeDashoffset="283"
            transform="rotate(-90 50 50)"
          />
          
          {/* Checkmark that draws simultaneously */}
          <path
            className="checkmark-path"
            d="M30 50 L45 65 L70 35"
            fill="none"
            stroke="#10b981"
            strokeWidth="8"
            strokeLinecap="butt"
            strokeLinejoin="round"
            strokeDasharray="60"
            strokeDashoffset="60"
          />
        </svg>
      </div>
    </div>
  );
};

export default LoadingAnimation;