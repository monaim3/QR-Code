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
    title: "1M +",
    subTitle: "Active users",
  },
  {
    id: 2,
    title: "4M +",
    subTitle: "QR Codes generated",
  },
  {
    id: 3,
    title: "56",
    subTitle: "Countries",
  },
  {
    id: 4,
    title: "12",
    subTitle: "QR Code type",
  },
];

export default function OurMission() {
  return (
    <Container className="px-5">
      <div className="flex flex-col pt-[80px] desktop:pt-[160px]">
        <div className="flex flex-col desktop:flex-row items-center justify-center gap-[56px]">
          <div className="order-2 desktop:order-1 flex-1">
            <img src="/images/our-mission-banner.svg" alt="Our Mission" />
          </div>
          <div className="order-1 desktop:order-2 flex flex-col flex-1 max-w-full">
            <h2 className="text-[24px] desktop:text-[32px] font-bold leading-[32px] desktop:leading-[40px]">
              Our mission
            </h2>
            <p className="text-[18] leading-[26px] font-regular pt-[8px]">
              Our mission is to seamlessly connect the physical and digital
              realms through the power of QR codes. With our user-friendly
              platform, you can enhance customer experiences, optimize
              operations, and track the effectiveness of your marketing efforts.
            </p>
            <p className="text-[18] leading-[26px] font-regular pt-[16px]">
              Join the ever-growing community of millions of happy users who
              rely on QRCenter to unlock the potential of QR codes. Jump on
              board and let us show all the cool things QR tech can do!
            </p>
            <div className="pt-[24px]">
              <AvatarGroup className="">
                {userList.map((image, index) => {
                  return (
                    <Avatar key={index}>
                      <Avatar>
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
        <div className="w-full max-w-full flex flex-col desktop:flex-row justify-between pt-[56px] gap-8 border-b-[1px] border-[var(--Boarder-Grey)] pb-[80px] desktop:pb-[160px]">
          {footers.map((footer, index) => {
            return (
              <div
                key={index}
                className="bg-[var(--boarder-grey-50)] h-[102px] w-full max-w-full flex items-center justify-start p-6 rounded-[12px] gap-6"
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
                    {footer.title}
                  </p>
                  <p className="text-[14px] leading-[22px] font-regular">
                    {footer.subTitle}
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
