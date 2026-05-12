"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import { setDocInfo } from "@/store/slices/pdf-slice";
import ImageUpload from "@/components/generator/vcard/ImageUpload";
import Input from "@/components/generator/vcard/Input";
import { useT } from "@/utils/t";
export default function DocumentInfo() {
  const dispatch = useAppDispatch();
  const pdf = useAppSelector((state) => state.pdf);
  const showPdfOnly = pdf.showPdfOnly;
  const t = useT();
  const handleInput = (value: string | null, lavel: string) => {
    if (value != null && lavel === "companyName") {
      dispatch(
        setDocInfo({
          ...pdf.documentInfo,
          companyName: value,
        }),
      );
    } else if (value != null && lavel === "title") {
      dispatch(
        setDocInfo({
          ...pdf.documentInfo,
          title: value,
        }),
      );
    } else if (value != null && lavel === "fileDescription") {
      dispatch(
        setDocInfo({
          ...pdf.documentInfo,
          fileDescription: value,
        }),
      );
    } else {
      dispatch(
        setDocInfo({
          ...pdf.documentInfo,
          website: value,
        }),
      );
    }
  };

  return (
    <div className="w-full">
      <Accordion
        title={t("generator__content_form_section__pdf__document_title")}
        description={t(
          "generator__content_form_section__pdf__document_description",
        )}
        defaultOpen={true}
        disabled={showPdfOnly}
      >
        <div className="space-y-2">
          <div className="flex flex-col desktop:flex-row items-start gap-4 desktop:gap-[48px] flex-1 w-full pt-4 desktop:pt-0">
            <div className="w-[calc(100%-56px)]">
              <Input
                label={t(
                  "generator__content_form_section__pdf__company_name_label",
                )}
                placeholder={t(
                  "generator__content_form_section__pdf__company_name_placeholder",
                )}
                id="App Name"
                type="name"
                value={pdf.documentInfo.companyName ?? ""}
                onChange={(value) => handleInput(value, "companyName")}
              />
            </div>
            <div className="w-[calc(100%-56px)]">
              <Input
                label={t("generator__content_form_section__pdf__title_label")}
                placeholder={t(
                  "generator__content_form_section__pdf__title_placeholder",
                )}
                id="developer"
                type="dev"
                value={pdf.documentInfo.title ?? ""}
                onChange={(value) => handleInput(value, "title")}
              />
            </div>
          </div>
          <div className="flex flex-col desktop:flex-row items-start gap-4 desktop:gap-[48px] flex-1 w-full pt-4 desktop:pt-4">
            <div className="w-[calc(100%-56px)]">
              <Input
                label={t(
                  "generator__content_form_section__pdf__file_description_label",
                )}
                placeholder={t(
                  "generator__content_form_section__pdf__file_description_placeholder",
                )}
                id="FileDes"
                type="filedes"
                value={pdf.documentInfo.fileDescription ?? ""}
                onChange={(value) => handleInput(value, "fileDescription")}
              />
            </div>
            <div className="w-[calc(100%-56px)]">
              <Input
                label={t("generator__content_form_section__pdf__website_label")}
                placeholder={t(
                  "generator__content_form_section__pdf__website_placeholder",
                )}
                id="website"
                type="web"
                value={pdf.documentInfo.website ?? ""}
                onChange={(value) => handleInput(value, "website")}
              />
            </div>
          </div>
        </div>
      </Accordion>
    </div>
  );
}
