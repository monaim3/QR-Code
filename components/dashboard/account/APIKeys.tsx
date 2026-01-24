import { Button } from "@/components/ui/button";
import APIKey from "./APIKey";

export default function APIKeys() {
  return (
    <>
      <div className="flex flex-col desktopDashboard:flex-row tablet:flex-row items-center justify-between gap-6 p-6 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
        <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
          Generate multiple QR Codes easily with our API. Start by creating your
          first API key.{" "}
          <span className="text-[var(--Blue)] cursor-pointer">
            API documentation
          </span>
        </p>

        <Button className="flex h-10 px-4 py-2 justify-center items-center gap-2 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] w-full tablet:w-auto desktopDashboard:w-auto">
          Generate API key
        </Button>
      </div>

      <div className="flex flex-col items-start gap-2 self-stretch w-full">
        <div className="flex flex-col desktopDashboard:flex-row tablet:flex-row p-6 items-center desktopDashboard:gap-8 tablet:gap-8 gap-4 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
          <div className="flex flex-col desktopDashboard:flex-row tablet:flex-row items-center gap-2 w-full tablet:w-auto desktopDashboard:w-auto">
            <p className="text-[var(--Dark-gray)] font-semibold text-[16px] leading-[24px] w-full tablet:w-auto desktopDashboard:w-auto">
              Rate limit for each API key:
            </p>
            <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px] w-full tablet:w-auto desktopDashboard:w-auto">
              50 requests per minute
            </p>
          </div>

          <div className="flex flex-col desktopDashboard:flex-row tablet:flex-row items-center gap-2 w-full tablet:w-auto desktopDashboard:w-auto">
            <p className="text-[var(--Dark-gray)] font-semibold text-[16px] leading-[24px] w-full tablet:w-auto desktopDashboard:w-auto">
              QR code limit per user account:
            </p>
            <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px] w-full tablet:w-auto desktopDashboard:w-auto">
              5000
            </p>
          </div>
        </div>

        <APIKey />
      </div>
    </>
  );
}
