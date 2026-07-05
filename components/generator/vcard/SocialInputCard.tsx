import { useState } from "react";
import TrashAlt from "@/components/icons/trash-alt";
import { socialChannels } from "@/lib/socialChannels";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { updateSocialChannel } from "@/store/slices/vCardSlice";
import { useT } from "@/utils/t";
import { urlValidationSchema } from "@/lib/validators/validators";

interface Props {
  channelId: string;
  handleDelete: () => void;
}

export default function SocialInputCard({ channelId, handleDelete }: Props) {
  const dispatch = useAppDispatch();
  const vCard = useAppSelector((state) => state.vCard);
  const t = useT();
  const [urlError, setUrlError] = useState("");

  const channel = socialChannels.find((channel) => channel.id === channelId);
  if (!channel) return null;

  const ChannelIcon = channel.icon;
  const socialChannel = vCard.socialChannels.find((ch) => ch.id === channel.id);
  const url = socialChannel?.url || "";
  const description = socialChannel?.description || "";

  const handleUrlChange = (value: string) => {
    dispatch(updateSocialChannel({ id: channel.id, changes: { url: value } }));
    if (!value.trim()) {
      setUrlError("");
      return;
    }
    const result = urlValidationSchema.safeParse(value);
    setUrlError(result.success ? "" : t("ui__field_validation_errors__url__generic"));
  };

  return (
    <div
      key={channelId}
      className="flex desktop:flex-row flex-col p-4 desktop:items-start gap-4 self-stretch rounded-[var(--Corner-Radius-10)] bg-[var(--light-grey-70)]"
    >
      <div className="flex items-center gap-2 w-[280px] h-12">
        <ChannelIcon />
        <p className="text-[var(--Black)] font-medium text-[16px] leading-[24px]">
          {channel.name}
        </p>
      </div>

      <div className="flex items-start gap-2 flex-1 w-full desktop:w-auto">
        <div className="flex flex-col gap-1 flex-1">
          <input
            type="url"
            placeholder="e.g. https://social-media.com"
            value={url}
            onChange={(e) => handleUrlChange(e.target.value)}
            className={`flex h-12 px-4 py-2 items-center gap-2 self-stretch rounded-[var(--Corner-Radius-10)] bg-white border placeholder:text-[var(--Grey)] placeholder:text-[16px] placeholder:leading-[24px] focus:outline-none text-[var(--Black)] text-[16px] leading-[24px] w-full transition-colors ${
              urlError
                ? "border-red-500 ring-2 ring-red-500"
                : "border-[var(--Boarder-Grey)] focus:ring-2 focus:ring-[var(--Blue)] focus:border-[var(--Blue)]"
            }`}
          />
          {urlError && (
            <p className="text-sm text-red-500">{urlError}</p>
          )}
        </div>
        <input
          type="text"
          placeholder={t("generator__content_form_section__social__input__description_placeholder")}
          value={description}
          onChange={(e) =>
            dispatch(updateSocialChannel({ id: channel.id, changes: { description: e.target.value } }))
          }
          className="flex h-12 px-4 py-2 items-center gap-2 self-stretch rounded-[var(--Corner-Radius-10)] bg-white border border-[var(--Boarder-Grey)] placeholder:text-[var(--Grey)] placeholder:text-[16px] placeholder:leading-[24px] focus:outline-none focus:ring-2 focus:ring-[var(--Blue)] focus:border-[var(--Blue)] text-[var(--Black)] text-[16px] leading-[24px] flex-1"
        />
        <button
          onClick={handleDelete}
          className="flex w-12 h-12 flex-shrink-0 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
        >
          <TrashAlt className="text-[var(--Dark-gray)]" />
        </button>
      </div>
    </div>
  );
}
