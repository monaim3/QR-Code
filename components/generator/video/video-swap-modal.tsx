"use client";
import { useState } from 'react'
import { X } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { swapVideos } from "@/store/slices/video-slice";
import CircleArrowDown from '@/components/icons/circle-down-arrow';
import CircleArrowUp from '@/components/icons/circle-up-arrow';

interface ActionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onFirstAction: () => void;
  onSecondAction: () => void;
}

export default function SwapVideoModal({
  isOpen,
  onClose,
  onFirstAction,
  onSecondAction,
}: ActionModalProps) {
  if (!isOpen) return null;

   const dispatch = useAppDispatch();
   const video = useAppSelector((state) => state.video);
   const [swapping, setSwapping] = useState(new Set<number>());

    const moveUp = (id: number) => {
    const index = video.videos.findIndex(item => item.id === id);
    // FIX: Ensure we only exit if it's the first item or a swap is already in progress
    if (index <= 0 || swapping.size > 0) return; 

    const currentItem = video.videos[index];
    const aboveItem = video.videos[index - 1];

    if (!currentItem || !aboveItem) return;

    const newSwapping = new Set([currentItem.id, aboveItem.id]);
    setSwapping(newSwapping);

    setTimeout(() => {
        dispatch(swapVideos({ fromIndex: index, toIndex: index - 1 }));
        setSwapping(new Set());
    }, 500);
  };


  const moveDown = (id: number) => {
  const index = video.videos.findIndex(item => item.id === id);
  if (index === -1 || index >= video.videos.length - 1 || swapping.size > 0) return;

  const currentItem = video.videos[index];
  const belowItem = video.videos[index + 1];

  if (!currentItem || !belowItem) return;

  const newSwapping = new Set([currentItem.id, belowItem.id]);
  setSwapping(newSwapping);

  setTimeout(() => {
    dispatch(swapVideos({ fromIndex: index, toIndex: index + 1 }));
    setSwapping(new Set());
  }, 500);
};


 const getTransform = (itemId: number) => {
  if (swapping.size === 0 || !swapping.has(itemId)) return "";

  const swappingArray = Array.from(swapping);
  // Find current positions in the live array
  const index1 = video.videos.findIndex((v) => v.id === swappingArray[0]);
  const index2 = video.videos.findIndex((v) => v.id === swappingArray[1]);

  if (index1 === -1 || index2 === -1) return "";

  const currentIndex = video.videos.findIndex((v) => v.id === itemId);
  const isTopItem = currentIndex === Math.min(index1, index2);

  // If I am the top item in the pair, move DOWN. 
  // If I am the bottom item (like the last element), move UP.
  return isTopItem ? "translate-y-14" : "-translate-y-14";
};


  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="relative w-full max-w-md">
        {/* Close button (outside card) */}
        <button
          onClick={onClose}
          className="absolute -top-10 right-0 text-white flex items-center gap-2 hover:opacity-80"
        >
          <span className="text-sm font-medium">Close</span>
          <div className="w-6 h-6 rounded-full border-2 border-white flex items-center justify-center">
            <X size={14} />
          </div>
        </button>

        {/* Modal card */}
        <div
          className="bg-white rounded-lg p-6 flex flex-col gap-4"
          style={{ boxShadow: "0 4px 14px rgba(54, 66, 140, 0.16)" }}
        >
         {/* {video button swapping} */}
        <div className="w-full max-w-full mx-auto">
        <div className="flex flex-col gap-2">
         <p className='text-[24px] leading-[32px] text-[var(--Black)] font-bold mb-[24px]'>Reorder videos</p>
          {video.videos.map((item, index) => (
            <div
             key={`${item.id}-${index}`}
              className={`flex items-center gap-3 rounded-[8px] border border-[var(--Boarder-Grey)] p-4 h-12 transition-transform duration-500 ease-in-out ${getTransform(item.id)}`}
            >
              <div className="flex-1 text-[var(--Black)] font-medium text-[14px] leading-[22px]">
                {item.title || `Video ${item.id}`}
              </div>
              <div className='h-[30px] w-[1px] bg-[var(--Boarder-Grey)]'/>
              <div className="flex gap-2">
                <button
                    onClick={() => moveUp(item.id)}
                    disabled={swapping.size > 0 || index === 0}
                    className="px-2 py-1 bg-white text-slate-900 rounded font-medium hover:bg-slate-100 transition-colors duration-200 transform hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                <CircleArrowUp color={`${index === 0 ? "var(--Boarder-Grey)" : "var(--Black)"}`}/>
                 </button>
                <button
                    onClick={() => moveDown(item.id)}
                    disabled={swapping.size > 0 || index === video.videos.length - 1}
                    className="px-2 py-1 bg-white text-slate-900 rounded font-medium hover:bg-slate-100 transition-colors duration-200 transform hover:scale-105 transition-transform disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <CircleArrowDown color={`${index === video.videos.length - 1 ? "var(--Boarder-Grey)" : "var(--Black)"}`}/>
                 </button>
              </div>
            </div>
          ))}
           <div className="w-full max-w-full flex items-center justify-start gap-6 mt-6">
              <div 
               onClick={onClose}
             key={"cancel"}
             id='cancel'
              className="h-[48px] w-full flex flex-col items-center justify-center border border-[var(--Blue)] rounded-[10px]">
                <p className="text-[18px] leading-[26px] font-medium text-[var(--Blue)]">Cancel</p>
            </div>
             <div 
             onClick={onClose}
             key={"save"}
             id='save'
             className="h-[48px] w-full flex flex-col items-center justify-center bg-[var(--Blue)] rounded-[10px]">
                <p className="text-[18px] leading-[26px] font-medium text-white">Save</p>
            </div>
            </div>
        </div>
      </div>
        </div>
      </div>
    </div>
  );
}