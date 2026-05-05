import TrashAlt from "@/components/icons/trash-alt";
import { socialChannels } from "@/lib/socialChannels";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateSocialChannel } from "@/store/slices/social-slice";
import {
 SocialChannel,
} from "@/types/social";
import { clearFieldError } from "@/store/slices/validationSlice";

interface Props {
  channel: SocialChannel;
  handleDelete: () => void;
}

export default function SocialInputCard({ channel, handleDelete }: Props) {
  const dispatch = useAppDispatch();
  const social = useAppSelector((state) => state.social);
  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);
  const urlError = showErrors ? validationErrors[`socialUrl_${channel.id}`] : undefined;

  let findChannel;
  let ChannelIcon: React.ComponentType | undefined;
  let imageUrl;
  let channels;

  if(channel.isIcon){
   findChannel = socialChannels.find((ch) => ch.id === channel.id);
   ChannelIcon = findChannel?.icon as React.ComponentType;
   channels = social.socialChannels.find(
      (ch) => ch.id === channel.id,
     );
  }else {
    channels = channel;
    imageUrl = channel.icon;
  }


 const url = channels?.url || "";
 const description = channels?.description || "";

  const handleUrlChange = (value: string) => {
    dispatch(updateSocialChannel({ id: channel.id, changes: { url: value } }));
    if (value.trim()) dispatch(clearFieldError(`socialUrl_${channel.id}`));
  };

  const handleDescriptionChange = (value: string) => {
    dispatch(updateSocialChannel({ id: channel.id, changes: { description: value } }));
  }

  return (
    <div
      key={channels?.id}
      className="flex desktop:flex-row flex-col p-4 desktop:items-center gap-4 self-stretch rounded-[var(--Corner-Radius-10)] bg-[var(--light-grey-70)]"
    >
      <div className="flex items-center gap-2 w-[280px]">
       {channels?.isIcon && ChannelIcon ? <ChannelIcon /> : 
       <img src={imageUrl ?? ""} alt={channels?.name} className="w-[40px] h-[40px] object-contain"/>}
        <p className="text-[var(--Black)] font-medium text-[16px] leading-[24px]">
          {channel.name}
        </p>
      </div>

      <div className="flex items-start gap-2 flex-1 w-full desktop:w-auto">
        <div className="flex flex-col flex-1 w-[calc(100%-56px)]">
          <input
            type="url"
            placeholder="URL"
            value={url}
            onChange={(e) => handleUrlChange(e.target.value)}
            aria-invalid={!!urlError}
            className={`flex h-12 px-4 py-2 items-center gap-2 self-stretch rounded-[var(--Corner-Radius-10)] bg-white border placeholder:text-[var(--Grey)] placeholder:text-[16px] placeholder:leading-[24px] focus:outline-none text-[var(--Black)] text-[16px] leading-[24px] w-full ${urlError ? "border-red-500" : "border-[var(--Boarder-Grey)]"}`}
          />
          {urlError && (
            <p className="text-sm text-red-500 mt-1">{urlError}</p>
          )}
        </div>

        <input
          type="des"
          placeholder="Description"
          value={description}
          onChange={(e) => handleDescriptionChange(e.target.value)}
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
