"use client";

import Accordion from "@/components/common/Accordion";
import { socialChannels } from "@/lib/socialChannels";
import SocialBtn from "./SocialBtn";
import SocialInputCard from "./SocialInputCard";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  addSocialChannel,
  removeSocialChannel,
  updateSocialChannel,
} from "@/store/slices/vCardSlice";
import Plus from "@/components/icons/plus";
import Input from "./Input";
import TrashAlt from "@/components/icons/trash-alt";
import ImageUpload from "./ImageUpload";
import { UploadLogoResponse } from "@/store/slices/qrSlice";
import { useState } from "react";
import { urlValidationSchema } from "@/lib/validators/validators";
import { useT } from "@/utils/t";
import { useUploadFileMutation } from "@/store/api/qrApi";
import Image from "next/image";
export default function Social() {
  const dispatch = useAppDispatch();
  const vCard = useAppSelector((state) => state.vCard);
  const [add, setAdd] = useState(false);
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [description, setDescription] = useState("");
  const [logo, setLogo] = useState<string | null>(null);
  const [nameError, setNameError] = useState("");
  const [urlError, setUrlError] = useState("");
  const t = useT();
  const [uploadFile] = useUploadFileMutation();

  const handleChannelToggle = (channelId: string) => {
    const channel = socialChannels.find((ch) => ch.id === channelId);
    if (!channel) return;

    const isActive = vCard.socialChannels.some((ch) => ch.id === channel.id);

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
      vCard.socialChannels.some((ch) => ch.id === channel.id),
    )
    .map((channel) => channel.id);

  const resetForm = () => {
    setAdd(false);
    setName("");
    setUrl("");
    setDescription("");
    setLogo(null);
    setNameError("");
    setUrlError("");
  };

  const validateUrl = (value: string): string => {
    if (!value.trim())
      return t(
        "generator__content_form_section__social__input__url_error_required",
      );
    const result = urlValidationSchema.safeParse(value);
    return result.success ? "" : result.error.issues[0].message;
  };

  const handleAddCustom = async () => {
    const nErr = name.trim()
      ? ""
      : t(
          "generator__content_form_section__social__input__name_error_required",
        );
    const uErr = validateUrl(url);
    setNameError(nErr);
    setUrlError(uErr);
    if (nErr || uErr || !logo) return;

    const blob = await fetch(logo).then((res) => res.blob());
    const file = new File(
      [blob],
      `uploaded-image-${Date.now()}.${blob.type.split("/")[1]}`,
      { type: blob.type },
    );

    const result = await uploadFile(file);
    const uploadedImage: UploadLogoResponse | undefined =
      "data" in result
        ? {
            bucketRootUrl: result.data.location.split(
              `/${result.data.bucket}`,
            )[0],
            bytes: result.data.bytes,
            format: result.data.format,
            key: (result.data as { key?: string }).key ?? "",
            publicId: result.data.publicId,
            resourceType: result.data.resourceType,
            storageProvider: result.data.storageProvider,
          }
        : undefined;
    dispatch(
      addSocialChannel({
        id: `custom-${Date.now()}`,
        name,
        url,
        description,
        icon: logo,
        uploadedImage,
      }),
    );
    resetForm();
  };

  return (
    <div className="w-full">
      <Accordion
        title={t("generator__content_form_section__social__title_required")}
        description={t("generator__content_form_section__social__description")}
        defaultOpen={true}
      >
        <div className="space-y-6">
          <div className="space-y-2">
            <p className="text-[var(--Black)] font-medium text-[16px] leading-[24px]">
              {t("generator__content_form_section__social__label")}
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
              const predefined = socialChannels.find(
                (ch) => ch.id === socialChannel.id,
              );
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
                    {socialChannel.icon && (
                      <Image
                        src={socialChannel.icon}
                        alt={socialChannel.name}
                        width={40}
                        height={40}
                        className="object-contain"
                        loading="lazy"
                      />
                    )}
                    <p className="text-[var(--Black)] font-medium text-[16px] leading-[24px]">
                      {socialChannel.name}
                    </p>
                  </div>
                  <div className="flex items-start gap-2 flex-1 w-full desktop:w-auto">
                    <input
                      type="url"
                      placeholder="URL"
                      value={socialChannel.url}
                      onChange={(e) =>
                        dispatch(
                          updateSocialChannel({
                            id: socialChannel.id,
                            changes: { url: e.target.value },
                          }),
                        )
                      }
                      className="flex h-12 px-4 py-2 items-center gap-2 self-stretch rounded-[var(--Corner-Radius-10)] bg-white border border-[var(--Boarder-Grey)] placeholder:text-[var(--Grey)] placeholder:text-[16px] placeholder:leading-[24px] focus:outline-none text-[var(--Black)] text-[16px] leading-[24px] flex-1 w-[calc(100%-56px)]"
                    />
                    <input
                      type="text"
                      placeholder="Description"
                      value={socialChannel.description ?? ""}
                      onChange={(e) =>
                        dispatch(
                          updateSocialChannel({
                            id: socialChannel.id,
                            changes: { description: e.target.value },
                          }),
                        )
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
              {t("generator__content_form_section__social__add_button")}
            </span>
          </button>

          <div className={`${add ? "block" : "hidden"} space-y-2`}>
            <ImageUpload
              label={t(
                "generator__content_form_section__social__add_social__image",
              )}
              value={logo}
              onCustomLogoUpload={setLogo}
            />
            <div className="flex flex-col desktop:flex-row items-start gap-4 desktop:gap-[48px] flex-1 w-full pt-4 desktop:pt-8">
              <div className="w-[calc(100%-56px)]">
                <Input
                  label={t(
                    "generator__content_form_section__social__input__name_label",
                  )}
                  placeholder={t(
                    "generator__content_form_section__social__input__name_placeholder",
                  )}
                  id="custom-social-name"
                  value={name}
                  onChange={(value) => {
                    setName(value);
                    if (value.trim()) setNameError("");
                  }}
                  error={nameError}
                />
              </div>
              <div className="w-[calc(100%-56px)]">
                <Input
                  label={t(
                    "generator__content_form_section__social__input__url_label",
                  )}
                  placeholder={t(
                    "generator__content_form_section__social__input__url_placeholder",
                  )}
                  id="custom-social-url"
                  value={url}
                  onChange={(value) => {
                    setUrl(value);
                    if (urlError) {
                      const err = validateUrl(value);
                      if (!err) setUrlError("");
                    }
                  }}
                  onBlur={() => setUrlError(validateUrl(url))}
                  error={urlError}
                />
              </div>
            </div>

            <div className="flex flex-col desktop:flex-row items-start desktop:items-center justify-center gap-4">
              <div className="w-full pt-4 pb-4">
                <Input
                  label={t(
                    "generator__content_form_section__social__input__description_label",
                  )}
                  placeholder={t(
                    "generator__content_form_section__social__input__description_placeholder",
                  )}
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
                    {t("generator__content_form_section__social__add__button")}
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
