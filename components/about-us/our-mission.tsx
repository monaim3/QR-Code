"use client";

import Container from "@/components/common/parent-container";
import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@/components/ui/avatar";

import Users from "../../components/icons/users";
import AiGenerated from "../../components/icons/ai-generated";
import Location from "../../components/icons/location";
import AboutQR from "../../components/icons/about-qr";
import { useT } from "@/utils/t";

const userList = [
  "/images/users/user1.svg",
  "/images/users/user2.svg",
  "/images/users/user3.svg",
  "/images/users/user4.svg",
  "/images/users/user5.svg",
  "/images/users/add-user.svg",
];

const footers = [
  {
    id: 1,
    titleKey: "public__about_us__stat_users_number",
    subTitleKey: "public__about_us__stat_users_label",
  },
  {
    id: 2,
    titleKey: "public__about_us__stat_qr_codes_number",
    subTitleKey: "public__about_us__stat_qr_codes_label",
  },
  {
    id: 3,
    titleKey: "public__about_us__stat_countries_number",
    subTitleKey: "public__about_us__stat_countries_label",
  },
  {
    id: 4,
    titleKey: "public__about_us__stat_qr_types_number",
    subTitleKey: "public__about_us__stat_qr_types_label",
  },
];

export default function OurMission() {
  const t = useT();

  return (
    <Container className="px-5">
      <div className="flex flex-col pt-[80px] desktop:pt-[160px]">
        <div className="flex flex-col desktop:flex-row items-center justify-center gap-12 desktop:gap-[56px]">
          <div className="hidden desktop:block order-2 desktop:order-1 flex-1">
            <img src="/images/generator_img/mission.svg" alt="Our Mission" />
          </div>
          <div className="order-1 desktop:order-2 flex flex-col flex-1 max-w-full">
            <h2 className="text-[24px] desktop:text-[32px] font-bold leading-[32px] desktop:leading-[40px]">
              {t("public__about_us__mission_title")}
            </h2>
            <p className="text-[18] leading-[26px] font-regular pt-[8px]">
              {t("public__about_us__mission_description")}
            </p>
            <p className="text-[18] leading-[26px] font-regular pt-[16px]">
              {t("public__about_us__mission_description_2")}
            </p>
            <div className="pt-[24px] ">
              <AvatarGroup className="">
                {userList.map((image, index) => {
                  return (
                    <Avatar
                      key={index}
                      className="!size-14"
                      style={{ zIndex: userList.length - index }}
                    >
                      <Avatar className="!size-14">
                        <AvatarImage src={image} alt="User avatar" />
                        <AvatarFallback>CN</AvatarFallback>
                      </Avatar>
                      <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                  );
                })}
              </AvatarGroup>
            </div>
          </div>
        </div>
        <div className="pt-12 desktop:hidden">
          <img
            src="/images/generator_img/about-women.png"
            alt="Our Mission Banner"
            className="w-full rounded-[12px]"
          />
        </div>
        <div className="w-full max-w-full flex flex-col desktop:flex-row justify-between pt-[56px] gap-4 desktop:gap-8 border-b-[1px] border-[var(--Boarder-Grey)] pb-[80px] desktop:pb-[160px]">
          {footers.map((footer, index) => {
            return (
              <div
                key={index}
                className="bg-[#F7F9FC] desktop:bg-[var(--boarder-grey-50)] h-[102px] w-full max-w-full flex items-center justify-start p-6 rounded-[12px] gap-6"
              >
                {footer.id == 1 ? (
                  <Users />
                ) : footer.id == 2 ? (
                  <AiGenerated />
                ) : footer.id == 3 ? (
                  <Location />
                ) : (
                  <AboutQR />
                )}
                <div className="h-[48px] w-[1px] bg-[var(--Boarder-Grey)]" />
                <div className="flex flex-col">
                  <p className="text-[24px] leading-[32px] font-bold">
                    {t(footer.titleKey)}
                  </p>
                  <p className="text-[14px] leading-[22px] font-regular">
                    {t(footer.subTitleKey)}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  );
}
