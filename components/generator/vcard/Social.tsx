"use client";

import Accordion from "@/components/common/Accordion";
import { socialChannels } from "@/lib/socialChannels";
import SocialBtn from "./SocialBtn";
import { useState } from "react";
import SocialInputCard from "./SocialInputCard";

export default function Social() {
  const [activeChannels, setActiveChannels] = useState<string[]>(["facebook"]);

  const handleChannelToggle = (channelId: string) => {
    if (activeChannels.includes(channelId)) {
      setActiveChannels(activeChannels.filter((id) => id !== channelId));
    } else {
      setActiveChannels([...activeChannels, channelId]);
    }
  };

  const handleDelete = (channelId: string) => {
    setActiveChannels(activeChannels.filter((id) => id !== channelId));
  };

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

            <div className="flex flex-wrap items-center content-center gap-4 self-stretch">
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
            {activeChannels.length > 0 &&
              activeChannels.map((channelId) => (
                <SocialInputCard
                  key={channelId}
                  channelId={channelId}
                  handleDelete={() => handleDelete(channelId)}
                />
              ))}
          </div>
        </div>
      </Accordion>
    </div>
  );
}
