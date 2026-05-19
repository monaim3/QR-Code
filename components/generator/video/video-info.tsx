"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import Input from "@/components/generator/vcard/Input";
import Plus from "@/components/icons/plus";
import TrashAlt from "@/components/icons/trash-alt";
import {
  setVideoInfo,
  setVideoInfoButtonTitle,
  setVideoInfoButtonUrl,
} from "@/store/slices/video-slice";
import { useT } from "@/utils/t";

export default function VideoInfo() {
  const dispatch = useAppDispatch();
  const video = useAppSelector((state) => state.video);
  const t = useT();
  const handleInput = (value: string | null, lavel: string) => {
    if (value != null && lavel === "title") {
      dispatch(
        setVideoInfo({
          ...video.videoInfo,
          title: value,
        }),
      );
    } else if (value != null && lavel === "des") {
      dispatch(
        setVideoInfo({
          ...video.videoInfo,
          description: value,
        }),
      );
    }
  };

  const addButton = () => {
    dispatch(
      setVideoInfo({
        ...video.videoInfo,
        buttons: [...video.videoInfo.buttons, { text: "", url: "" }],
      }),
    );
  };

  const removeButton = (index: number) => {
    dispatch(
      setVideoInfo({
        ...video.videoInfo,
        buttons: video.videoInfo.buttons.filter((_, i) => i !== index),
      }),
    );
  };

  return (
    <div className="w-full">
      <Accordion
        title={t("generator__content_form_section__videos_information__title")}
        description={t(
          "generator__content_form_section__videos_information__description",
        )}
        defaultOpen={true}
      >
        <div className="space-y-2">
          <div className="flex flex-col desktop:flex-row items-start gap-4 desktop:gap-[48px] flex-1 w-full">
            <div className="w-[calc(100%-56px)]">
              <Input
                label={t(
                  "generator__content_form_section__videos_information__headline__label",
                )}
                placeholder={t(
                  "generator__content_form_section__videos_information__headline__placeholder",
                )}
                id="video-title"
                type="video-title"
                value={video.videoInfo.title}
                onChange={(value) => handleInput(value, "title")}
              />
            </div>
            <div className="w-[calc(100%-56px)]">
              <Input
                label={t(
                  "generator__content_form_section__videos_information__description__label",
                )}
                placeholder={t(
                  "generator__content_form_section__videos_information__description__placeholder",
                )}
                id="description"
                type="description"
                value={video.videoInfo.description}
                onChange={(value) => handleInput(value, "des")}
              />
            </div>
          </div>
          <div className="pt-6 flex flex-col h-max w-full">
            {video.videoInfo.buttons.map((button, index) => {
              return (
                <div className="flex flex-col desktop:flex-row bg-[var(--Generator-Background)] rounded-[10px] px-4 max-w gap-6 mb-2">
                  <div className="w-full pt-4 pb-4">
                    <Input
                      label={t(
                        "generator__content_form_section__videos_information__button_text__label",
                      )}
                      key={"text-" + index}
                      placeholder={t(
                        "generator__content_form_section__images_information__button_text__placeholder",
                      )}
                      id={"text-" + index}
                      type="description"
                      value={video.videoInfo.buttons[index].text}
                      onChange={(value) =>
                        dispatch(
                          setVideoInfoButtonTitle({
                            index: index,
                            title: value || "",
                          }),
                        )
                      }
                    />
                  </div>
                  <div className="w-full pt-4 pb-4 flex items-end justify-end gap-6">
                    <Input
                      label={t(
                        "generator__content_form_section__social__input__url_label",
                      )}
                      key={"url-" + index}
                      placeholder={t(
                        "generator__content_form_section__videos_information__button_url__placeholder",
                      )}
                      id={"url-" + index}
                      type="description"
                      value={video.videoInfo.buttons[index].url}
                      onChange={(value) =>
                        dispatch(
                          setVideoInfoButtonUrl({
                            index: index,
                            url: value || "",
                          }),
                        )
                      }
                    />
                    <button
                      onClick={() => removeButton(index)}
                      className="p-2 rounded-[6px] border border-[var(--Boarder-Grey)] bg-[var(--Light-Grey)] hover:bg-[var(--Boarder-Grey)]"
                      aria-label="Remove Button"
                    >
                      <TrashAlt className="w-5 h-5 text-[var(--Dark-gray)]" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
          <button
            onClick={addButton}
            className="
                flex 
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
                select-none
            "
          >
            <Plus />
            <span className="text-[14px] leading-[22px] font-medium text-[var(--Dark-gray)]">
              {t(
                "generator__content_form_section__videos_information__add_button",
              )}
            </span>
          </button>
        </div>
      </Accordion>
    </div>
  );
}
