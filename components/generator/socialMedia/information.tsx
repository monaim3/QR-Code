
"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import { setDocInfo } from "@/store/slices/pdf-slice";
import Input from "@/components/generator/vcard/Input";
import { setSocialInfo } from "@/store/slices/social-slice";

export default function Information() {
    const dispatch = useAppDispatch();
    const social = useAppSelector((state) => state.social);

    const handleInput = (value: string | null, lavel:string) => {
        if(value != null && lavel === "headline"){
          dispatch(
          setSocialInfo({
            ...social.socialInfo,
            headLine: value,
          }),
        );
        }else {
          dispatch(
          setSocialInfo({
             ...social.socialInfo,
            description: value || "",
          }),
        );
      }
    };



  return (
    <div className="w-full">
      <Accordion
        title="Information"
        description="Add a headline and short description to introduce your social channels"
        defaultOpen={true}
      >
        <div className="space-y-2">

        <div className="flex flex-col desktop:flex-row items-start gap-4 desktop:gap-[48px] flex-1 w-full pt-4 desktop:pt-0">
          <div className="w-[calc(100%-56px)]">
            <Input
              label="Headline*"
              placeholder="e.g. My social media channels"
              id="infohead"
              type="head"
              value={social.socialInfo.headLine ?? ''}
              onChange={(value) => handleInput(value,"headline")}
            />
          </div>
           <div className="w-[calc(100%-56px)]">
            <Input
              label="Description"
              placeholder="e.g. Find me on Facebook and Instagram"
              id="des"
              type="des"
              value={social.socialInfo.description ?? ''}
              onChange={(value) => handleInput(value,"des")}
            />
          </div>
        </div>
        </div>
      </Accordion>
    </div>
  );
}
