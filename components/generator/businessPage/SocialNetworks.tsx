"use client";

import Accordion from "@/components/common/Accordion";
import { socialChannels } from "@/lib/socialChannels";
import SocialBtn from "../vcard/SocialBtn";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addSocialChannel,
  removeSocialChannel,
} from "@/store/slices/businessSlice";
import SocialInputCard from "./SocialInputCard";

export default function SocialNetworks() {
  const dispatch = useAppDispatch();
  const business = useAppSelector((state) => state.business);

  const handleChannelToggle = (channelId: string) => {
    const channel = socialChannels.find((ch) => ch.id === channelId);
    if (!channel) return;

    const isActive = business.socialChannels.some((ch) => ch.id === channel.id);

    if (isActive) {
      dispatch(removeSocialChannel(channel.id));
    } else {
      dispatch(
        addSocialChannel({ id: channel.id, name: channel.name, url: "" }),
      );
    }
  };

  const handleDelete = (channelId: string) => {
    dispatch(removeSocialChannel(channelId));
  };

  const activeChannels = socialChannels
    .filter((channel) =>
      business.socialChannels.some((ch) => ch.id === channel.id),
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
            {business.socialChannels.map((socialChannel) => {
              const channel = socialChannels.find(
                (ch) => ch.id === socialChannel.id,
              );
              if (!channel) return null;
              return (
                <SocialInputCard
                  key={socialChannel.id}
                  channelId={socialChannel.id}
                  handleDelete={() => handleDelete(socialChannel.id)}
                />
              );
            })}
          </div>
        </div>
      </Accordion>
    </div>
  );
}
