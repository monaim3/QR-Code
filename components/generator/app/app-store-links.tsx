"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import Input from "@/components/generator/vcard/Input";
import TrashAlt from "@/components/icons/trash-alt";
import AppStoreIcon from "@/components/icons/app-store";
import PlayStoreIcon from "@/components/icons/play-store";
import AmazonStore from "@/components/icons/amazon-store";
import MiLogo from "@/components/icons/mi-logo";

import { moveLinkToAppStore, moveLinkToAppLinks, setStoreLinks } from "@/store/slices/app-slice";

export default function AppStoreLink() {
    const dispatch = useAppDispatch();
    const app = useAppSelector((state) => state.app);

    return (
     <div className="w-full">
      <Accordion
        title="App store platform links*"
        description="Choose at least one store below and add a link to your app"
        defaultOpen={true}
      >
        <div className="space-y-2">
            <div className="flex items-start justify-start gap-4">
                {app.appLinks.map((appLink,index)=> {
                    return <button 
                    key={appLink.id}
                    onClick={() => dispatch(moveLinkToAppStore(appLink.id))}>
                        {appLink.storeName === "appStore" ?
                         <div className="w-[60px] h-[60px] rounded-[10px] bg-gradient-to-b from-[#18BFFB] to-[#2072F3] flex items-center justify-center">
                            <AppStoreIcon/>
                         </div> 
                         : appLink.storeName === "goolgePlay" ?
                          <div className="w-[60px] h-[60px] rounded-[10px] bg-white border border-[var(--Boarder-Grey)] flex items-center justify-center">
                            <PlayStoreIcon/>
                          </div> 
                          :  appLink.storeName === "amazon" ?
                           <div className="w-[60px] h-[60px] rounded-[10px] bg-[#FD9900] flex items-center justify-center">
                            <AmazonStore/>
                           </div> :
                            <div className="w-[60px] h-[60px] rounded-[10px] bg-[#FF7043] flex items-center justify-center">
                              <MiLogo/>
                           </div>}
                     </button>
                })}
            </div>
            <div className="flex flex-col h-max w-full pt-6 desktop:pt-8">
            {app.appStoreLinks.map((button, index)=>{
                return <div 
                key={button.id}
                className="flex flex-col desktop:flex-row bg-[var(--Generator-Background)] rounded-[10px] px-4 max-w gap-6 mb-2">
                <div className="flex gap-2 w-full max-w items-center justify-start">
                    {button.storeName === "appStore" ?
                    <div className="w-[60px] h-[60px] rounded-[10px] bg-gradient-to-b from-[#18BFFB] to-[#2072F3] flex items-center justify-center">
                     <AppStoreIcon/>
                    </div> : 
                    button.storeName === "goolgePlay" ?
                     <div className="w-[60px] h-[60px] rounded-[10px] bg-white border border-[var(--Boarder-Grey)] flex items-center justify-center">
                        <PlayStoreIcon/>
                    </div> :  
                    button.storeName === "amazon" ?
                    <div className="w-[60px] h-[60px] rounded-[10px] bg-[#FD9900] flex items-center justify-center">
                       <AmazonStore/>
                    </div> :
                      <div className="w-[60px] h-[60px] rounded-[10px] bg-[#FF7043] flex items-center justify-center">
                         <MiLogo/>
                    </div>}
                 <p className="text-[16px] leading-[22px] text-[var(--Black)]">
                    {button.title}
                 </p>
                </div>
            <div className="w-full pt-4 pb-4 flex items-end justify-end gap-6">
              <Input
                label="URL*"
                placeholder={button.storeName === "appStore"? "e.g. https://apps.apple.com/my-app" : button.storeName === "goolgePlay"? "e.g. https://play.google.com/my-app" : button.storeName === "amazon"? "e.g. https://amazon.com/my-app" : "e.g. https://mi.com/my-app"}
                type="url"
                id={`url-${button.id}`}
                value={button.storeUrl}
                onChange={(v) => dispatch(setStoreLinks({link: v,index: index}))}
               />
                <button
                onClick={() => dispatch(moveLinkToAppLinks(button.id))}
                className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
            >
                <TrashAlt className="text-[var(--Dark-gray)]" />
            </button>
            </div>
             </div>
            })}
            </div>
        </div>
      </Accordion>
    </div>
   ); 
}