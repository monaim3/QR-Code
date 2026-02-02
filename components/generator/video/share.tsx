"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import CustomCheckbox from "@/components/generator/video/chekbox";

export default function Share() {
    const dispatch = useAppDispatch();
    const video = useAppSelector((state) => state.video);

    return (
     <div className="w-full">
      <Accordion
        title="Share"
        description="Add the ability to share your video"
        defaultOpen={true}
      >
        <div className="space-y-2">
        <CustomCheckbox label="Add “Share” button to landing page" />
        </div>
      </Accordion>
    </div>
   ); 
}