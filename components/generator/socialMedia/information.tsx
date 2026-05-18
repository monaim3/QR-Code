"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import Input from "@/components/generator/vcard/Input";
import { setSocialInfo } from "@/store/slices/social-slice";

import { useT } from "@/utils/t";
export default function Information() {
  const dispatch = useAppDispatch();
  const social = useAppSelector((state) => state.social);
  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);

  const handleInput = (value: string | null, lavel: string) => {
    if (value != null && lavel === "headline") {
      dispatch(
        setSocialInfo({
          ...social.socialInfo,
          headLine: value,
        }),
      );
    } else {
      dispatch(
        setSocialInfo({
          ...social.socialInfo,
          description: value || "",
        }),
      );
    }
  };
  const t = useT();
  return (
    <div className="w-full">
      <Accordion
        title={t("generator__content_form_section__social_information__title")}
        description={t(
          "generator__content_form_section__social_information__description",
        )}
        defaultOpen={true}
        forceOpen={showErrors && !!validationErrors.socialHeadline}
      >
        <div className="space-y-2">
          <div className="flex flex-col desktop:flex-row items-start gap-4 desktop:gap-[48px] flex-1 w-full pt-4 desktop:pt-0">
            <div className="w-[calc(100%-56px)]">
              <Input
                label={t(
                  "generator__content_form_section__images_information__headline__label",
                )}
                placeholder={t(
                  "generator__content_form_section__social_information__headline__placeholder",
                )}
                id="infohead"
                type="head"
                value={social.socialInfo.headLine ?? ""}
                onChange={(value) => handleInput(value, "headline")}
                validationKey="socialHeadline"
                required={true}
              />
            </div>
            <div className="w-[calc(100%-56px)]">
              <Input
                label={t(
                  "generator__content_form_section__videos_information__description__label",
                )}
                placeholder={t(
                  "generator__content_form_section__social_information__description__placeholder",
                )}
                id="des"
                type="des"
                value={social.socialInfo.description ?? ""}
                onChange={(value) => handleInput(value, "des")}
              />
            </div>
          </div>
        </div>
      </Accordion>
    </div>
  );
}
