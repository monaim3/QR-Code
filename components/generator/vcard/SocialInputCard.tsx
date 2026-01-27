import TrashAlt from "@/components/icons/trash-alt";
import { socialChannels } from "@/lib/socialChannels";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateSocialChannelUrl } from "@/store/slices/vCardSlice";

interface Props {
  channelId: string;
  handleDelete: () => void;
}

export default function SocialInputCard({ channelId, handleDelete }: Props) {
  const dispatch = useAppDispatch();
  const vCard = useAppSelector((state) => state.vCard);
  const channel = socialChannels.find((channel) => channel.id === channelId);

  if (!channel) return null;

  const ChannelIcon = channel.icon;
  const socialChannel = vCard.socialChannels.find(
    (ch) => ch.id === channel.id,
  );
  const url = socialChannel?.url || "";

  const handleUrlChange = (value: string) => {
    dispatch(updateSocialChannelUrl({ id: channel.id, url: value }));
  };

  return (
    <div
      key={channelId}
      className="flex desktop:flex-row flex-col p-4 desktop:items-center gap-4 self-stretch rounded-[var(--Corner-Radius-10)] bg-[var(--light-grey-70)]"
    >
      <div className="flex items-center gap-2 w-[280px]">
        <ChannelIcon />
        <p className="text-[var(--Black)] font-medium text-[16px] leading-[24px]">
          {channel.name}
        </p>
      </div>

      <div className="flex items-start gap-2 flex-1 w-full desktop:w-auto">
        <input
          type="url"
          placeholder="e.g. https://social-media.com"
          value={url}
          onChange={(e) => handleUrlChange(e.target.value)}
          className="flex h-12 px-4 py-2 items-center gap-2 self-stretch rounded-[var(--Corner-Radius-10)] bg-white border border-[var(--Boarder-Grey)] placeholder:text-[var(--Grey)] placeholder:text-[16px] placeholder:leading-[24px] focus:outline-none text-[var(--Black)] text-[16px] leading-[24px] flex-1 w-[calc(100%-56px)]"
        />

        <button
          onClick={handleDelete}
          className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)] "
        >
          <TrashAlt className="text-[var(--Dark-gray)]" />
        </button>
      </div>
    </div>
  );
}
