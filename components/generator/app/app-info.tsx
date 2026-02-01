
"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import { setAppInfo } from "@/store/slices/app-slice";
import ImageUpload from "@/components/generator/vcard/ImageUpload";
import Input from "@/components/generator/vcard/Input";
import Plus from "@/components/icons/plus";
import TrashAlt from "@/components/icons/trash-alt";

export default function AppInfo() {
    const dispatch = useAppDispatch();
    const app = useAppSelector((state) => state.app);

    const handleImageChange = (value: string | null) => {
         dispatch(
          setAppInfo({
            ...app.appInfo,
            image: value,
          }),
    )};

    const handleInput = (value: string | null, lavel:string) => {
        if(value != null && lavel === "name"){
          dispatch(
          setAppInfo({
            ...app.appInfo,
            appName: value,
          }),
        );
        }else if(value != null && lavel === "dev"){
          dispatch(
          setAppInfo({
            ...app.appInfo,
            developer: value,
          }),
        );
      }else if(value != null && lavel === "des"){
        dispatch(
          setAppInfo({
            ...app.appInfo,
            description: value,
          }),
        );
      }
    };

    const addButton = () =>{
      dispatch(
          setAppInfo({
            ...app.appInfo,
            buttons: [
            ...app.appInfo.buttons,
            { text: '', url: '' },
            ],
          }),
        );
    }

    const removeButton = (index: number) => {
      dispatch(
    setAppInfo({
      ...app.appInfo,
      buttons: app.appInfo.buttons.filter((_, i) => i !== index),
    })
  );
    }

    const setButtonInfo = (index: number, field: 'text' | 'url', value: string) => {
      dispatch(
        setAppInfo({
          ...app.appInfo,
          buttons: app.appInfo.buttons.map((button, i) =>
            i === index ? { ...button, [field]: value } : button
          ),
        })
      );
  };



  return (
    <div className="w-full">
      <Accordion
        title="App information"
        description="Provide details about your app"
        defaultOpen={true}
      >
        <div className="space-y-2">
        <ImageUpload onCustomLogoUpload={handleImageChange} />
        <div className="flex flex-col desktop:flex-row items-start gap-4 desktop:gap-[48px] flex-1 w-full pt-4 desktop:pt-8">
          <div className="w-[calc(100%-56px)]">
            <Input
              label="AppName*"
              placeholder="e.g. My App"
              id="App Name"
              type="name"
              value={app.appInfo.appName}
              onChange={(value) => handleInput(value,"name")}
            />
          </div>
           <div className="w-[calc(100%-56px)]">
            <Input
              label="Developer"
              placeholder="e.g. Jones & John"
              id="developer"
              type="dev"
              value={app.appInfo.developer}
              onChange={(value) => handleInput(value,"dev")}
            />
          </div>
        </div>
        <div className="w-full pt-4 pb-4">
            <Input
              label="Description"
              placeholder="e.g. Financial app"
              id="description"
              type="des"
              value={app.appInfo.description}
              onChange={(value) => handleInput(value,"des")}
            />
        </div>
        <div className="flex flex-col h-max w-full">
          {app.appInfo.buttons.map((button, index)=>{
            return <div className="flex flex-col desktop:flex-row bg-[var(--Generator-Background)] rounded-[10px] px-4 max-w gap-6 mb-2">
          <div className="w-full pt-4 pb-4">
            <Input
              label="Button Text*"
              placeholder="e.g. Click here"
              id="bt"
              type="btch"
              value={app.appInfo.buttons[index].text}
              onChange={(value) => setButtonInfo(index, 'text', value)}
            />
        </div>
         <div className="w-full pt-4 pb-4 flex items-end justify-end gap-6">
            <Input
              label="URL*"
              placeholder="e.g. pauljhon.com"
              id="url"
              type="url"
              value={app.appInfo.buttons[index].url}
              onChange={(value) =>  setButtonInfo(index, 'url', value)}
            />
            <button
            onClick={() => removeButton(index)}
            className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
          >
            <TrashAlt className="text-[var(--Dark-gray)]" />
          </button>
        </div>
            </div>
          })}
        </div>
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
            "
            >
            <Plus />
            <span className="text-[14px] leading-[22px] font-medium text-[var(--Dark-gray)]">
                Add Button
            </span>
        </button>
        </div>
      </Accordion>
    </div>
  );
}
