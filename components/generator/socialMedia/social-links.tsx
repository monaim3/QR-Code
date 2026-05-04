"use client";

import Accordion from "@/components/common/Accordion";
import { socialChannels } from "@/lib/socialChannels";
import SocialBtn from "@/components/generator/vcard/SocialBtn";
import SocialInputCard from "./social-input-card";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Plus from "@/components/icons/plus";
import {
  addToSocialChannels,
  removeFromSocialChannels,
  addCustomSocialChannel,
  setCustomFormOpen,
  setCustomFormName,
  setCustomFormUrl,
} from "@/store/slices/social-slice";
import { clearFieldError } from "@/store/slices/validationSlice";
import { useState } from "react";
import ImageUpload from "@/components/generator/vcard/ImageUpload";
import Input from "@/components/generator/vcard/Input";
import TrashAlt from "@/components/icons/trash-alt";
import { SocialChannel } from "@/types/social";

export default function SocialLinks() {
  const dispatch = useAppDispatch();
  const social = useAppSelector((state) => state.social);
  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);
  const [description, setDescription] = useState('');
  const [logo, setLogo] = useState('');
  const [nameError, setNameError] = useState('');
  const [urlError, setUrlError] = useState('');

  const handleChannelToggle = (channelId: string) => {
    const channel = socialChannels.find((ch) => ch.id === channelId);
    if (!channel) return;

    const isActive = social.socialChannels.some((ch) => ch.id === channel.id);

    if (isActive) {
      dispatch(removeFromSocialChannels(channel.id));
    } else {
      dispatch(addToSocialChannels(channel.id));
      dispatch(clearFieldError("socialChannels"));
    }
  };

  const handleDelete = (channelId: string) => {
    dispatch(removeFromSocialChannels(channelId));
  };

  const activeChannels = socialChannels
    .filter((channel) =>
      social.socialChannels.some((ch) => ch.id === channel.id),
    )
    .map((channel) => channel.id);

  const handleImageChange = (value: string | null) => {
    setLogo(value ?? "");
  };

  const handleOpenForm = () => {
    dispatch(setCustomFormOpen(true));
  };

  const handleCloseForm = () => {
    dispatch(setCustomFormOpen(false));
    setDescription("");
    setLogo("");
    setNameError("");
    setUrlError("");
  };

  const handleAddButton = () => {
    const trimmedName = social.customFormName.trim();
    const trimmedUrl = social.customFormUrl.trim();
    let hasError = false;

    if (!trimmedName) {
      setNameError("This field is required and cannot be left blank.");
      hasError = true;
    }
    if (!trimmedUrl) {
      setUrlError("This field is required and cannot be left blank.");
      hasError = true;
    }
    if (hasError) return;

    const customLinks: SocialChannel = {
      id: social.customFormName,
      name: social.customFormName,
      isIcon: false,
      url: social.customFormUrl,
      icon: logo,
      description: description,
    };
    dispatch(addCustomSocialChannel(customLinks));
    dispatch(clearFieldError("socialChannels"));
    handleCloseForm();
  };
        
  return (
    <div className="w-full">
      <Accordion
        title="Social networks"
        description="Click on the icons below to add social media channels you’d like to display"
        defaultOpen={true}
        required={true}
        forceOpen={showErrors && !!(validationErrors.socialChannels || validationErrors.socialCustomName || validationErrors.socialCustomUrl)}
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[var(--Black)] font-medium text-[16px] leading-[24px]">
              Add social channels
            </p>

            <div className="flex desktop:flex-wrap items-center content-center gap-4 self-stretch overflow-x-auto desktop:overflow-x-visible pb-4 desktop:pb-0 pt-[2px] px-[2px] desktop:pt-0 desktop:px-0">
              {socialChannels.map((channel) => (
                <SocialBtn
                  key={channel.id}
                  channel={channel}
                  isActive={activeChannels.includes(channel.id)}
                  onClick={() => handleChannelToggle(channel.id)}
                />
              ))}
            </div>
          </div>

          <div className="space-y-2">
            {social.socialChannels.map((socialChannel) => {
              return (
                <SocialInputCard
                  key={socialChannel.id}
                  channel={socialChannel}
                  handleDelete={() => handleDelete(socialChannel.id)}
                />
              );
            })}
          </div>
           <button
            onClick={handleOpenForm}
            className={`
                ${social.customFormOpen ? "hidden" : "flex"}
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
                select-none`}
            >
            <Plus />
            <span className="text-[14px] leading-[22px] font-medium text-[var(--Dark-gray)]">
                Add more
            </span>
            </button>

          <div className={`${social.customFormOpen ? "block" : "hidden"} space-y-2`}>
           <ImageUpload label="Add social logo" value={logo || null} onCustomLogoUpload={handleImageChange} />
           <div className="flex flex-col desktop:flex-row items-start gap-4 desktop:gap-[48px] flex-1 w-full pt-4 desktop:pt-8">
            <div className="w-[calc(100%-56px)]">
            <Input
              label="Name*"
              placeholder="e.g. My social media"
              id="Name"
              type="name"
              value={social.customFormName}
              onChange={(value) => { dispatch(setCustomFormName(value)); if (value.trim()) setNameError(""); }}
              error={nameError}
              validationKey="socialCustomName"
            />
          </div>
           <div className="w-[calc(100%-56px)]">
            <Input
              label="URL*"
              placeholder="e.g. https://pauljones.com"
              id="Url"
              type="url"
              value={social.customFormUrl}
              onChange={(value) => { dispatch(setCustomFormUrl(value)); if (value.trim()) setUrlError(""); }}
              error={urlError}
              validationKey="socialCustomUrl"
            />
          </div>
        </div>
        <div className="flex flex-col desktop:flex-row items-start desktop:items-center justify-center gap-4">
         <div className="w-full pt-4 pb-4">
            <Input
              label="Description"
              placeholder="e.g. My profile"
              id="description"
              type="des"
              value={description}
              onChange={(value) => setDescription(value)}
            />
         </div>
         <div className="flex flex-row gap-4 items-start">
         <button
            onClick={handleAddButton}
            className={`
                flex
                h-[48px]
                px-4 py-2
                desktop:mt-[30px]
                justify-center
                items-center
                gap-2
                rounded-[10px]
                bg-[var(--Blue)]
                hover:bg-[var(--Blue-hover)]
                w-max
                cursor-pointer
                select-none`}
            >
            <span className="text-[14px] leading-[22px] font-medium text-white px-8 py-2">
                Add
            </span>
         </button>
          <div
          onClick={handleCloseForm}
          id="del"
          className={`flex items-center justify-center h-[48px] desktop:mt-[30px] border rounded-[6px] px-4`}>
            <TrashAlt/>
         </div>
         </div>
        </div>
        </div>
        </div>
      </Accordion>
    </div>
  );
}
