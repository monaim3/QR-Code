"use client";

import Accordion from "@/components/common/Accordion";
import { socialChannels } from "@/lib/socialChannels";
import SocialBtn from "./SocialBtn";
import SocialInputCard from "./SocialInputCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addSocialChannel,
  removeSocialChannel,
} from "@/store/slices/vCardSlice";

export default function Social() {
  const dispatch = useAppDispatch();
  const vCard = useAppSelector((state) => state.vCard);

  const handleChannelToggle = (channelId: string) => {
    const channel = socialChannels.find((ch) => ch.id === channelId);
    if (!channel) return;

    const isActive = vCard.socialChannels.some(
      (ch) => ch.name === channel.name,
    );

    if (isActive) {
      dispatch(removeSocialChannel(channel.name));
    } else {
      dispatch(addSocialChannel({ name: channel.name, url: "" }));
    }
  };

  const handleDelete = (channelId: string) => {
    const channel = socialChannels.find((ch) => ch.id === channelId);
    if (channel) {
      dispatch(removeSocialChannel(channel.name));
    }
  };

  const activeChannels = socialChannels
    .filter((channel) =>
      vCard.socialChannels.some((ch) => ch.name === channel.name),
    )
    .map((channel) => channel.id);

  return (
    <div className="w-full">
      <Accordion
        title="Social networks"
        description="Click on the icons below to add social media channels you’d like to display"
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
              const channel = socialChannels.find(
                (ch) => ch.name === socialChannel.name,
              );
              if (!channel) return null;
              return (
                <SocialInputCard
                  key={channel.id}
                  channelId={channel.id}
                  handleDelete={() => handleDelete(channel.id)}
                />
              );
            })}
          </div>
        </div>
      </Accordion>
    </div>
  );
}
