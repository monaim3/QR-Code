import { SocialChannel } from "@/lib/socialChannels";

interface Props {
  isActive: boolean;
  channel: SocialChannel;
  onClick: () => void;
}

export default function SocialBtn({ isActive, channel, onClick }: Props) {
  const Icon = channel.icon;

  return (
    <div
      onClick={onClick}
      className={`flex p-1 justify-center items-center gap-2.5 rounded-[var(--Corner-Radius-8)] cursor-pointer ${isActive ? "ring-2 ring-[var(--Blue)]" : "ring-1 ring-[var(--Boarder-Grey)]"}`}
    >
      <Icon />
    </div>
  );
}
