"use client";

import { useT } from "@/utils/t";

export default function AboutUsLeftElement() {
  const t = useT();

  const handleScrollToMission = () => {
    const missionSection = document.getElementById("mission-section");
    if (missionSection) {
      missionSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="order-2 desktop:order-1 desktop:flex-1 flex flex-col items-center justify-center desktop:items-start w-full">
      <h1 className="text-[32px] desktop:text-[40px] desktop:leading-[40px] leading-[32px] font-bold mb-2">
        {t("public__about_us__hero_title")}
      </h1>
      <p className="desktop:w-[488px] text-center desktop:text-start text-[18px] leading-[26px] font-regular mb-6">
        {t("public__about_us__hero_description")}
      </p>
      <button
        type="button"
        onClick={handleScrollToMission}
        className="bg-[var(--Blue)] text-[18px] leading-[26px] text-white font-medium rounded-[10px] px-8 py-3 hover:bg-[var(--Blue-hover)] transition-all duration-300"
      >
        {t("public__about_us__hero_button")}
      </button>
    </div>
  );
}
