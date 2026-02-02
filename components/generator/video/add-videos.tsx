"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import Input from "@/components/generator/vcard/Input";
import VideoUpload from "@/components/generator/video/upload-video";
import UnifiedVideoPlayer from "@/components/generator/video/video-player";
import TrashAlt from "@/components/icons/trash-alt";
import HamburgerIcon from "@/components/icons/hamburger-icon";
import { useState } from "react";
import SwapVideoModal from "@/components/generator/video/video-swap-modal";
import { addVideo,
    setVideoTitleByIndex,
    setVideoDescriptionByIndex,
    removeVideo,
    swapVideos,
 } from "@/store/slices/video-slice";

export default function Addvideos() {
    const [videoUrl, setVideoUrl] = useState("");
    const [openSwap, setOpenSwap] = useState(false);
    const dispatch = useAppDispatch();
    const video = useAppSelector((state) => state.video);

    const handleAddVideo = () => {
        const id = video.videos.length > 0 ? video.videos.length + 1 : 1;
       dispatch(addVideo({
        ...video.videos,
        url: videoUrl,
        title: "",
        description: "",
        id: id,
       }
       ));
       setVideoUrl("");
    }

    const handleDeleteVideo = (index: number) => {
      dispatch(removeVideo(index));
    }

    const handleOpenSwapModal = () => {
      setOpenSwap(true);
    }

    return (
     <div className="w-full">
      <Accordion
        title="Add videos*"
        description="Upload or provide links to your videos - you can add up to 10 videos"
        defaultOpen={true}
      >
        <div className="space-y-2">
        <div className="flex flex-col items-start justify-center gap-8 w-full">
            <div className="flex w-full max-w-full gap-4 items-end">
            <Input
            label="Video URL"
                placeholder="e.g. https://youtube.com"
                id="video-title"
                type="video-title"
                value={videoUrl}
                onChange={(value) =>setVideoUrl(value)}
            />
            <button 
            onClick={handleAddVideo}
            className="px-4 py-3 h-[48px] bg-[var(--Blue)] text-white rounded-[12px] hover:bg-[var(--Blue-hover)]">
            Add
            </button>
            </div>
            <div className="w-full">
             <VideoUpload/>
            </div>
            <div className="w-full max-w-full">
            {video.videos.map((vid, index) => {
                return (
                <div 
                key={index}
                className="w-full flex flex-col bg-[var(--Generator-Background)] desktop:flex-row gap-4 items-center desktop:items-end justify-center rounded-[12px] p-4 mb-2">
                    <div className="flex flex-row items-center justify-between w-full">
                     <UnifiedVideoPlayer url={vid.url} height={80} width={120} canPlay={false}/>
                     {/* {Mobile View icon buttons} */}
                    <div className="flex gap-2 items-center desktop:hidden">
                    <div
                     key={index}
                     id={index.toString()} 
                     onClick={() => handleDeleteVideo(index)}
                     className="flex items-center justify-center h-[48px] w-[48px] border border-[var(--Boarder-Grey)] bg-[var(--Light-Grey)] rounded-[6px] hover:bg-[var(--Boarder-Grey)] cursor-move flex-shrink-0" aria-label="Drag to reorder">
                        <TrashAlt/>
                    </div>
                     <div 
                     key={index}
                     id={index.toString()} 
                     onClick={() => handleOpenSwapModal()}
                     className="flex items-center justify-center h-[48px] w-[48px] border border-[var(--Boarder-Grey)] bg-[var(--Light-Grey)] rounded-[6px] hover:bg-[var(--Boarder-Grey)] cursor-move p-2 flex-shrink-0" aria-label="Drag to reorder">
                        <HamburgerIcon/>
                    </div>
                    </div>
                    {/* {} */}
                    </div>
                     <div className="w-full">
                     <Input
                        key={`title-${index}`}
                        label="Title*"
                        placeholder="e.g. Birthday Video"
                        id={`title-${index}`}
                        type="title"
                        value={vid.title}
                        onChange={(value) =>dispatch(setVideoTitleByIndex({index, title: value}))}
                    />
                    </div>
                    <div className="w-full">
                     <Input
                        key={`description-${index}`}
                        label="Description"
                        placeholder="e.g. A look at my 21st birthd..."
                        id={`des-${index}`}
                        type="description"
                        value={vid.description}
                        onChange={(value) =>dispatch(setVideoDescriptionByIndex({index, description: value}))}
                    />
                    </div>
                    <div className="flex gap-2 items-center mobile:hidden">
                    <div
                     key={index}
                     id={index.toString()} 
                     onClick={() => handleDeleteVideo(index)}
                     className="flex items-center justify-center h-[48px] w-[48px] border border-[var(--Boarder-Grey)] bg-[var(--Light-Grey)] rounded-[6px] hover:bg-[var(--Boarder-Grey)] cursor-move flex-shrink-0" aria-label="Drag to reorder">
                        <TrashAlt/>
                    </div>
                     <div
                    key={index}
                     id={index.toString()} 
                     onClick={() => handleOpenSwapModal()}
                     className="flex items-center justify-center h-[48px] w-[48px] border border-[var(--Boarder-Grey)] bg-[var(--Light-Grey)] rounded-[6px] hover:bg-[var(--Boarder-Grey)] cursor-move p-2 flex-shrink-0" aria-label="Drag to reorder">
                        <HamburgerIcon/>
                    </div>
                    </div>
                </div>
                );
            })}
            </div>
       </div>
        <SwapVideoModal
            isOpen={openSwap}
            onClose={() => setOpenSwap(false)}
            onFirstAction={() => {
            console.log("First action");
            setOpenSwap(false);
            }}
            onSecondAction={() => {
            console.log("Second action");
            setOpenSwap(false);
            }}
        />
        </div>
      </Accordion>
    </div>
   ); 
}