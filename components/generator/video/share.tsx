"use client";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import Accordion from "@/components/common/Accordion";
import CustomCheckbox from "@/components/generator/video/chekbox";

import { useT } from "@/utils/t";
export default function Share() {
  const dispatch = useAppDispatch();
  const video = useAppSelector((state) => state.video);
  const t = useT();
  return (
    <div className="w-full">
      <Accordion
        title={t("generator__content_form_section__share_images__title")}
        description={t(
          "generator__content_form_section__share_video__description",
        )}
        defaultOpen={true}
      >
        <div className="space-y-2">
          <CustomCheckbox label="Add “Share” button to landing page" />
        </div>
      </Accordion>
    </div>
  );
}
