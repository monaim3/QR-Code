
"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import { setAppInfo } from "@/store/slices/app-slice";
import ImageUpload from "@/components/generator/vcard/ImageUpload";
import Input from "@/components/generator/vcard/Input";
import Plus from "@/components/icons/plus";
import TrashAlt from "@/components/icons/trash-alt";
import {
    setVideoInfo, 
    setVideoInfoButtonTitle,
    setVideoInfoButtonUrl,
} from "@/store/slices/video-slice";

export default function VideoInfo() {
    const dispatch = useAppDispatch();
    const video = useAppSelector((state) => state.video);

    const handleInput = (value: string | null, lavel:string) => {
        if(value != null && lavel === "title"){
          dispatch(
          setVideoInfo({
            ...video.videoInfo,
            title: value,
          }),
        );
        }else if(value != null && lavel === "des"){
          dispatch(
          setVideoInfo({
            ...video.videoInfo,
            description: value,
          }),
        );
      }
    };

    const addButton = () =>{
      dispatch(
          setVideoInfo({
            ...video.videoInfo,
            buttons: [
            ...video.videoInfo.buttons,
            { text: '', url: '' },
            ],
          }),
        );
    }

    const removeButton = (index: number) => {
        dispatch(
        setVideoInfo({
        ...video.videoInfo,
        buttons: video.videoInfo.buttons.filter((_, i) => i !== index),
        })
    );
 }


  return (
    <div className="w-full">
      <Accordion
        title="Video information"
        description="Provide details about your video(s)"
        defaultOpen={true}
      >
        <div className="space-y-2">
        <div className="flex flex-col desktop:flex-row items-start gap-4 desktop:gap-[48px] flex-1 w-full">
          <div className="w-[calc(100%-56px)]">
            <Input
              label="Title"
              placeholder="e.g. Birthday Video"
              id="video-title"
              type="video-title"
              value={video.videoInfo.title}
              onChange={(value) => handleInput(value,"title")}
            />
          </div>
           <div className="w-[calc(100%-56px)]">
            <Input
              label="Description"
              placeholder="e.g. A look at my 21st birthday celebration"
              id="description"
              type="description"
              value={video.videoInfo.description}
              onChange={(value) => handleInput(value,"des")}
            />
          </div>
        </div>
        <div className="pt-6">
          {video.videoInfo.buttons.map((button, index) => {
            return (
               <div className="flex flex-col desktop:flex-row bg-[var(--Generator-Background)] items-start gap-4 desktop:gap-[48px] p-6 rounded-[12px] mb-4">
                <div className="w-[calc(100%-56px)]">
                <Input
                label="Button text*"
                key={"text-" + index}
                placeholder="e.g. Clik Here"
                id={"text-" + index}
                type="description"
                value={video.videoInfo.buttons[index].text}
                onChange={(value) => dispatch(setVideoInfoButtonTitle({index: index, title: value || ''}))}
                />
          </div>
           <div className="w-[calc(100%-56px)]">
                <Input
                label="URL*"
                key={"url-" + index}
                placeholder="e.g. https://pauljohnes.com"
                id={"text-" + index}
                type="description"
                value={video.videoInfo.buttons[index].url}
                onChange={(value) => dispatch(setVideoInfoButtonUrl({index: index, url: value || ''}))}
                />
          </div>
               </div>
            );
        })}
        </div>
        <div className="pt-6">
             <button
        onClick={addButton}
            className="
                flex 
                h-10
                px-4 py-2
                justify-center 
                items-center 
                gap-2
                rounded-[10px] 
                border 
                border-[var(--Boarder-Grey)]
                hover:ring-2 hover:ring-[var(--Boarder-Grey)]
                w-max
                cursor-pointer
                select-none
            ">
            <Plus />
            <span className="text-[14px] leading-[22px] font-medium text-[var(--Dark-gray)]">
                Add Button
            </span>
        </button>
        </div>
        </div>
      </Accordion>
    </div>
  );
}
