
"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import { setDocInfo } from "@/store/slices/pdf-slice";
import ImageUpload from "@/components/generator/vcard/ImageUpload";
import Input from "@/components/generator/vcard/Input";

export default function DocumentInfo() {
    const dispatch = useAppDispatch();
    const pdf = useAppSelector((state) => state.pdf);

    const handleInput = (value: string | null, lavel:string) => {
        if(value != null && lavel === "companyName"){
          dispatch(
          setDocInfo({
            ...pdf.documentInfo,
            companyName: value,
          }),
        );
        }else if(value != null && lavel === "title"){
          dispatch(
          setDocInfo({
            ...pdf.documentInfo,
            title: value,
          }),
        );
      }else if(value != null && lavel === "fileDescription"){
        dispatch(
          setDocInfo({
            ...pdf.documentInfo,
            fileDescription: value,
          }),
        );
      }else{
         dispatch(
          setDocInfo({
            ...pdf.documentInfo,
            website: value,
          }),
        );
      }
    };



  return (
    <div className="w-full">
      <Accordion
        title="Document information"
        description="Provide information about your PDF file"
        defaultOpen={true}
      >
        <div className="space-y-2">

        <div className="flex flex-col desktop:flex-row items-start gap-4 desktop:gap-[48px] flex-1 w-full pt-4 desktop:pt-0">
          <div className="w-[calc(100%-56px)]">
            <Input
              label="Company Name"
              placeholder="e.g. My Company"
              id="App Name"
              type="name"
              value={pdf.documentInfo.companyName ?? ''}
              onChange={(value) => handleInput(value,"companyName")}
            />
          </div>
           <div className="w-[calc(100%-56px)]">
            <Input
              label="Title"
              placeholder="e.g. Animation Studio"
              id="developer"
              type="dev"
              value={pdf.documentInfo.title ?? ''}
              onChange={(value) => handleInput(value,"title")}
            />
          </div>
        </div>
       <div className="flex flex-col desktop:flex-row items-start gap-4 desktop:gap-[48px] flex-1 w-full pt-4 desktop:pt-4">
          <div className="w-[calc(100%-56px)]">
            <Input
              label="File Description"
              placeholder="e.g. Annual Plan 2024"
              id="FileDes"
              type="filedes"
              value={pdf.documentInfo.fileDescription ?? ''}
              onChange={(value) => handleInput(value,"fileDescription")}
            />
          </div>
           <div className="w-[calc(100%-56px)]">
            <Input
              label="Website"
              placeholder="e.g. https://pauljones.com"
              id="website"
              type="web"
              value={pdf.documentInfo.website ?? ''}
              onChange={(value) => handleInput(value,"website")}
            />
          </div>
        </div>
        </div>
      </Accordion>
    </div>
  );
}
