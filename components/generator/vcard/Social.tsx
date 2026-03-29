"use client";

import Accordion from "@/components/common/Accordion";
import { socialChannels } from "@/lib/socialChannels";
import SocialBtn from "./SocialBtn";
import SocialInputCard from "./SocialInputCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addSocialChannel,
  removeSocialChannel,
  updateSocialChannelUrl,
} from "@/store/slices/vCardSlice";
import Plus from "@/components/icons/plus";
import Input from "./Input";
import TrashAlt from "@/components/icons/trash-alt";
import ImageUpload from "./ImageUpload";
import { useState } from "react";

export default function Social() {
  const dispatch = useAppDispatch();
  const vCard = useAppSelector((state) => state.vCard);
  const [add, setAdd] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState<string | null>(null);

  const handleChannelToggle = (channelId: string) => {
    const channel = socialChannels.find((ch) => ch.id === channelId);
    if (!channel) return;

    const isActive = vCard.socialChannels.some((ch) => ch.id === channel.id);

    if (isActive) {
      dispatch(removeSocialChannel(channel.id));
    } else {
      dispatch(addSocialChannel({ id: channel.id, name: channel.name, url: "" }));
    }
  };

  const handleDelete = (channelId: string) => {
    dispatch(removeSocialChannel(channelId));
  };

  const activeChannels = socialChannels
    .filter((channel) =>
      vCard.socialChannels.some((ch) => ch.id === channel.id),
    )
    .map((channel) => channel.id);

  const resetForm = () => {
    setAdd(false);
    setName("");
    setUrl("");
    setDescription("");
    setLogo(null);
  };

  const handleAddCustom = () => {
    if (!name.trim()) return;
    dispatch(addSocialChannel({ id: `custom-${Date.now()}`, name, url }));
    resetForm();
  };

  return (
    <div className="w-full">
      <Accordion
        title="Social networks"
        description="Click on the icons below to add social media channels you'd like to display"
        defaultOpen={true}
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
            {vCard.socialChannels.map((socialChannel) => {
              const predefined = socialChannels.find((ch) => ch.id === socialChannel.id);
              if (predefined) {
                return (
                  <SocialInputCard
                    key={socialChannel.id}
                    channelId={socialChannel.id}
                    handleDelete={() => handleDelete(socialChannel.id)}
                  />
                );
              }
              // Custom channel
              return (
                <div
                  key={socialChannel.id}
                  className="flex desktop:flex-row flex-col p-4 desktop:items-center gap-4 self-stretch rounded-[var(--Corner-Radius-10)] bg-[var(--light-grey-70)]"
                >
                  <div className="flex items-center gap-2 w-[280px]">
                    <p className="text-[var(--Black)] font-medium text-[16px] leading-[24px]">
                      {socialChannel.name}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 flex-1 w-full desktop:w-auto">
                    <input
                      type="url"
                      placeholder="e.g. https://social-media.com"
                      value={socialChannel.url}
                      onChange={(e) =>
                        dispatch(updateSocialChannelUrl({ id: socialChannel.id, url: e.target.value }))
                      }
                      className="flex h-12 px-4 py-2 items-center gap-2 self-stretch rounded-[var(--Corner-Radius-10)] bg-white border border-[var(--Boarder-Grey)] placeholder:text-[var(--Grey)] placeholder:text-[16px] placeholder:leading-[24px] focus:outline-none text-[var(--Black)] text-[16px] leading-[24px] flex-1 w-[calc(100%-56px)]"
                    />
                    <button
                      onClick={() => handleDelete(socialChannel.id)}
                      className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
                    >
                      <TrashAlt className="text-[var(--Dark-gray)]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={() => setAdd(true)}
            className={`${add ? "hidden" : "flex"} h-10 px-4 py-2 justify-center items-center gap-2 rounded-[10px] border border-[var(--Boarder-Grey)] hover:ring-2 hover:ring-[var(--Boarder-Grey)] w-max cursor-pointer select-none`}
          >
            <Plus />
            <span className="text-[14px] leading-[22px] font-medium text-[var(--Dark-gray)]">
              Add more
            </span>
          </button>

          <div className={`${add ? "block" : "hidden"} space-y-2`}>
            <ImageUpload label="Add social logo" value={logo} onCustomLogoUpload={setLogo} />
            <div className="flex flex-col desktop:flex-row items-start gap-4 desktop:gap-[48px] flex-1 w-full pt-4 desktop:pt-8">
              <div className="w-[calc(100%-56px)]">
                <Input
                  label="Name*"
                  placeholder="e.g. My social media"
                  id="custom-social-name"
                  value={name}
                  onChange={(value) => setName(value)}
                />
              </div>
              <div className="w-[calc(100%-56px)]">
                <Input
                  label="URL*"
                  placeholder="e.g. https://pauljones.com"
                  id="custom-social-url"
                  value={url}
                  onChange={(value) => setUrl(value)}
                />
              </div>
            </div>

            <div className="flex flex-col desktop:flex-row items-start desktop:items-center justify-center gap-4">
              <div className="w-full pt-4 pb-4">
                <Input
                  label="Description"
                  placeholder="e.g. My profile"
                  id="custom-social-description"
                  value={description}
                  onChange={(value) => setDescription(value)}
                />
              </div>
              <div className="flex flex-row gap-4 items-start">
                <button
                  onClick={handleAddCustom}
                  className="flex h-[48px] px-4 py-2 desktop:mt-[30px] justify-center items-center gap-2 rounded-[10px] bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] w-max cursor-pointer select-none"
                >
                  <span className="text-[14px] leading-[22px] font-medium text-white px-8 py-2">
                    Add
                  </span>
                </button>
                <div
                  onClick={resetForm}
                  className="flex items-center justify-center h-[48px] desktop:mt-[30px] border rounded-[6px] px-4 cursor-pointer"
                >
                  <TrashAlt />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Accordion>
    </div>
  );
}
