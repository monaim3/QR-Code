import Accordion from "@/components/common/Accordion";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Input from "../vcard/Input";
import {
  setBusinessInfo,
  addBusinessButton,
  removeBusinessButton,
  updateBusinessButton,
} from "@/store/slices/businessSlice";
import Plus from "@/components/icons/plus";
import TrashAlt from "@/components/icons/trash-alt";

import { useT } from "@/utils/t";
export default function BusinessInfo() {
  const dispatch = useAppDispatch();
  const business = useAppSelector((state) => state.business);
  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);

  const handleChange = (value: string, id: string) => {
    dispatch(
      setBusinessInfo({
        ...business.businessInfo,
        [id]: value,
      }),
    );
  };
  const t = useT();
  return (
    <div className="w-full">
      <Accordion
        title={t("generator__content_form_section__business_info__title")}
        description={t(
          "generator__content_form_section__business_info__description",
        )}
        defaultOpen={true}
        forceOpen={showErrors && !!validationErrors.companyName}
      >
        <div className="desktop:space-y-8 space-y-6">
          <div className="space-y-4">
            <div className="flex flex-col desktop:flex-row items-start desktop:gap-12 gap-4 self-stretch">
              <Input
                label={t(
                  "generator__content_form_section__business_info__input__company_name_label",
                )}
                placeholder={t(
                  "generator__content_form_section__business_info__input__company_name_description",
                )}
                id="business-company-name"
                value={business.businessInfo.companyName}
                onChange={(v) => handleChange(v, "companyName")}
                validationKey="companyName"
                required={true}
              />
              <Input
                label={t(
                  "generator__content_form_section__business_info__input__title_label",
                )}
                placeholder={t(
                  "generator__content_form_section__business_info__input__title_placeholder",
                )}
                id="business-title"
                value={business.businessInfo.title}
                onChange={(v) => handleChange(v, "title")}
              />
            </div>

            <Input
              label={t(
                "generator__content_form_section__business_info__input__subtitle_label",
              )}
              placeholder={t(
                "generator__content_form_section__business_info__input__subtitle_placeholder",
              )}
              id="business-subtitle"
              value={business.businessInfo.subTitle}
              onChange={(v) => handleChange(v, "subTitle")}
            />
          </div>

          {/* Buttons - only render if any button exists */}
          {business.businessInfo.buttons.length > 0 && (
            <div className="space-y-2">
              {business.businessInfo.buttons.map((btn) => (
                <div
                  key={btn.id}
                  className="flex flex-col desktop:flex-row desktop:p-6 p-4 justify-center items-end gap-4 self-stretch bg-[var(--light-grey-70)] rounded-[var(--Corner-Radius-10)]"
                >
                  <div className="flex-1 w-full">
                    <Input
                      label={t(
                        "generator__content_form_section__images_information__button_text__label",
                      )}
                      placeholder={t(
                        "generator__content_form_section__images_information__button_text__placeholder",
                      )}
                      id={`button-text-${btn.id}`}
                      value={btn.text}
                      onChange={(v) =>
                        dispatch(
                          updateBusinessButton({
                            id: btn.id,
                            updates: { text: v },
                          }),
                        )
                      }
                    />
                  </div>

                  <div className="flex-1 flex items-end desktop:gap-4 gap-2 w-full">
                    <div className="w-[calc(100%-56px)]">
                      <Input
                        label={t(
                          "generator__content_form_section__images_information__button_url__label",
                        )}
                        placeholder={t(
                          "generator__content_form_section__social__input__url_placeholder",
                        )}
                        id={`button-url-${btn.id}`}
                        type="url"
                        value={btn.url}
                        onChange={(v) =>
                          dispatch(
                            updateBusinessButton({
                              id: btn.id,
                              updates: { url: v },
                            }),
                          )
                        }
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => dispatch(removeBusinessButton(btn.id))}
                      className="flex w-12 h-12 p-2 justify-center items-center rounded-[var(--Corner-Radius-10)] border border-[var(--Border-color)]"
                    >
                      <TrashAlt className="text-[var(--Dark-gray)]" />
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Add Button */}
          <button
            type="button"
            onClick={() => dispatch(addBusinessButton())}
            className="flex h-10 px-4 py-2 justify-center items-center gap-2 border border-[var(--Boarder-Grey)] rounded-[var(--Corner-Radius-10)] text-[var(--Dark-gray)] font-medium text-[14px] leading-[22px]"
          >
            <Plus />
            <span>
              {t("generator__content_form_section__business_info__add_button")}
            </span>
          </button>
        </div>
      </Accordion>
    </div>
  );
}
