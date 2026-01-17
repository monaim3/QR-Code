// "use client";

// import { QRFrameArray } from "@/components/common/QRFrameArray";
// import { useDragScroll } from "./useDragScroll";

// export default function QRFrameGallery({
//   setSelectedFrameIndex,
// }: {
//   setSelectedFrameIndex: (index: number) => void;
// }) {
//   const { ref, handlers } = useDragScroll();

//   const topRowFrames = QRFrameArray.slice(0, 16);
//   const bottomRowFrames = QRFrameArray.slice(16, 32);

//   return (
//     <div className="w-full">
//       <div
//         ref={ref}
//         {...handlers}
//         className="overflow-x-scroll overflow-y-hidden pb-2"
//         style={{
//           cursor: "grab",
//           userSelect: "none",
//           scrollbarWidth: "thin",
//           scrollbarColor: "#CBD5E0 #F7FAFC",
//           overflowX: "scroll",
//           WebkitOverflowScrolling: "touch",
//         }}
//       >
//         <div className="space-y-4 w-[300px]">
//           <div className="flex gap-4">
//             {topRowFrames.map((Frame, index) => (
//               <div
//                 key={`top-${index}`}
//                 className="
//                   min-w-[88px]
//                   min-h-[116px]
//                   shrink-0
//                   flex items-center justify-center
//                   border-2 border-gray-200 rounded-lg
//                   bg-white
//                   hover:border-blue-500
//                   transition-colors
//                   cursor-pointer
//                 "
//                 onClick={() => setSelectedFrameIndex(index)}
//               >
//                 <Frame width={64} height={84} />
//               </div>
//             ))}
//           </div>

//           <div className="flex gap-4">
//             {bottomRowFrames.map((Frame, index) => (
//               <div
//                 key={`bottom-${index}`}
//                 style={{
//                   width: "88px",
//                   height: "116px",
//                   flexShrink: 0,
//                 }}
//                 className="
//                   flex items-center justify-center
//                   border-2 border-gray-200 rounded-lg
//                   bg-white
//                   hover:border-blue-500
//                   transition-colors
//                   cursor-pointer
//                 "
//                 onClick={(e) => {
//                   e.stopPropagation();
//                   console.log("Frame selected:", index + 16);
//                 }}
//               >
//                 <Frame width={64} height={84} />
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
import { QRFrameArray } from "@/components/common/QRFrameArray";
import { useDragScroll } from "./useDragScroll";
export default function QRFrameGallery({
  setSelectedFrameIndex,
}: {
  setSelectedFrameIndex: (index: number) => void;
}) {
  const { ref, handlers } = useDragScroll();

  const topRowFrames = QRFrameArray.slice(0, 16);
  const bottomRowFrames = QRFrameArray.slice(16, 32);

  return (
    <div className="w-full">
      <div
        ref={ref}
        {...handlers}
        className="overflow-x-scroll overflow-y-hidden pb-4"
        style={{
          cursor: "grab",
          userSelect: "none",
          scrollbarWidth: "thin",
          scrollbarColor: "#CBD5E0 #F7FAFC",
          overflowX: "scroll",
          WebkitOverflowScrolling: "touch",
        }}
      >
        <div className="space-y-4 w-[300px]">
          <div className="flex gap-2">
            {topRowFrames.map((Frame, index) => (
              <div
                key={`top-${index}`}
                className="
                 w-[80px]
                  h-[100px]
                  shrink-0
                  flex items-center justify-center
                  border-2 border-gray-200 rounded-lg
                  bg-white
                  hover:border-blue-500
                  transition-colors
                  cursor-pointer
                  p-2
                "
                onClick={() => setSelectedFrameIndex(index)}
              >
                <Frame></Frame>
              </div>
            ))}
          </div>

          <div className="flex gap-2">
            {bottomRowFrames.map((Frame, index) => (
              <div
                key={`bottom-${index}`}
                className="
                  w-[80px]
                  h-[100px]
                  shrink-0
                  flex items-center justify-center
                  border-2 border-gray-200 rounded-lg
                  bg-white
                  hover:border-blue-500
                  transition-colors
                  cursor-pointer
                  p-2
                "
                onClick={() => setSelectedFrameIndex(index + 16)}
              >
                <Frame />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
