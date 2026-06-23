"use client";

import Container from "../common/parent-container";
import Link from "next/link";
import Message from "../icons/message";
import { useT } from "@/utils/t";

export default function MostCommonQuestion() {
    const t = useT();
    return (
        <div className="Flex flex-col bg-[var(--Blue)] items-center justify-center">
        <Container>
          <div className="block desktop:relative py-[80px] desktop:py-[120px]">
            {/* Centered text */}
            <div
              className="flex flex-col items-center justify-center h-full w-full text-center gap-8"
            >
              <div className="flex-shrink-0">
                <Message/>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[24px] desktop:text-[32px] leading-[32px] desktop:leading-[40px] font-bold text-white">{t("public__faq_cta__title")}</h2>
                <p className="text-[16px] leading-[24px] font-regular text-white">{t("public__qr__page__landing__general__faq__subTitle")}</p>
              </div>
              <Link
                href="faq"
                className="border-2 border-white rounded-[10px] hover:border-white-500 text-[18px] leading-[28px] font-semibold text-white px-6 py-2 transition-all duration-300 ease-linear hover:bg-white hover:text-[var(--Blue)]"
              >
                {t("ui__generic__see_more")}
              </Link>
            </div>
          </div>
        </Container>
      </div>

    );
}
