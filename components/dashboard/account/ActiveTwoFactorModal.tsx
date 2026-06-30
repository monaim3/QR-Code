import TwoFactorQr from "@/components/icons/two-factor-qr";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { useT } from "@/utils/t";

interface Props {
  open: boolean;
  onClose: () => void;
}

const SECRET_KEY = "1927GHSR3846VFG";

const parseBold = (str: string) => {
  const match = str.match(/^(.*?)<strong>(.*?)<\/strong>(.*)$/);
  if (!match) return <>{str}</>;
  return (
    <>
      {match[1]}
      <span className="font-semibold">{match[2]}</span>
      {match[3]}
    </>
  );
};

const parseAuthLink = (str: string) => {
  const match = str.match(/^(.*?)<authAppLink>(.*?)<\/authAppLink>(.*)$/);
  if (!match) return <>{str}</>;
  return (
    <>
      {match[1]}
      <span className="text-[var(--Blue)]">{match[2]}</span>
      {match[3]}
    </>
  );
};

export default function ActiveTwoFactorModal({ open, onClose }: Props) {
  const t = useT();

  const secretText = t("public__dashboard__account__2fa__enable_dialog__step_2__secret")
    .replace("<secret></secret>", SECRET_KEY);

  const secretParts = secretText.split(SECRET_KEY);

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[500px] w-[calc(100%-40px)] tablet:!w-full desktopDashboard:!w-full flex flex-col desktopDashboard:gap-6 tablet:gap-6 gap-3 desktopDashboard:p-8 tablet:p-8 p-6 font-roboto"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col justify-start items-center gap-6 text-left">
          <DialogTitle className="text-[var(--Black)] text-left text-[24px] font-semibold desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px] w-full">
            {t("public__dashboard__account__2fa__enable_dialog__title")}
          </DialogTitle>

          <div className="flex flex-col items-start desktopDashboard:gap-2 tablet:gap-2 gap-1 self-stretch">
            <p className="text-[var(--Black)] text-[16px] leading-[24px]">
              {parseBold(t("public__dashboard__account__2fa__enable_dialog__step_1__title"))}
            </p>
            <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
              {parseAuthLink(t("public__dashboard__account__2fa__enable_dialog__step_1__description"))}
            </p>
          </div>
        </DialogHeader>

        {/* Line */}
        <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />

        <div className="flex justify-between items-center gap-6 self-stretch w-full">
          <div className="flex flex-col items-center desktopDashboard:gap-2 tablet:gap-2 gap-1 grow shrink-0 basis-0 text-left">
            <p className="text-[var(--Black)] text-[16px] leading-[24px] w-full">
              {parseBold(t("public__dashboard__account__2fa__enable_dialog__step_2__title"))}
            </p>
            <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px] w-full">
              {t("public__dashboard__account__2fa__enable_dialog__step_2__description")}
            </p>
          </div>
          <div className="flex p-3 items-center gap-2 rounded-[var(--Corner-Radius-8)] border border-[--Boarder-Grey]">
            <TwoFactorQr />
          </div>
        </div>

        <div className="flex px-4 py-2 justify-center items-center desktopDashboard:gap-2 tablet:gap-2 gap-1 self-stretch w-full bg-[var(--Generator-Background)] rounded-[var(--Corner-Radius-8)]">
          <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
            {secretParts[0]}
            <span className="font-semibold">{SECRET_KEY}</span>
            {secretParts[1]}
          </p>
        </div>

        {/* Line */}
        <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />

        <div className="flex flex-col items-center desktopDashboard:gap-4 tablet:gap-4 gap-2 self-stretch w-full">
          <div className="flex flex-col items-start desktopDashboard:gap-2 tablet:gap-2 gap-1 self-stretch">
            <p className="text-[var(--Black)] text-[16px] leading-[24px]">
              {parseBold(t("public__dashboard__account__2fa__enable_dialog__step_3__title"))}
            </p>
            <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px]">
              {t("public__dashboard__account__2fa__enable_dialog__step_3__description")}
            </p>
          </div>
          <div className="w-full">
            <InputOTP maxLength={6} defaultValue={"000000"}>
              <InputOTPGroup className="desktopDashboard:gap-4 tablet:gap-4 gap-2">
                <InputOTPSlot
                  index={0}
                  className="w-10 h-12 rounded-[var(--Corner-Radius-6)] border border-[var(--Boarder-Grey)] text-[18px] leading-[26px] font-bold text-[var(--Grey)] focus:ring-0 focus:outline-none"
                />
                <InputOTPSlot
                  index={1}
                  className="w-10 h-12 rounded-[var(--Corner-Radius-6)] border border-[var(--Boarder-Grey)] text-[18px] leading-[26px] font-bold text-[var(--Grey)] focus:ring-0 focus:outline-none"
                />
                <InputOTPSlot
                  index={2}
                  className="w-10 h-12 rounded-[var(--Corner-Radius-6)] border border-[var(--Boarder-Grey)] text-[18px] leading-[26px] font-bold text-[var(--Grey)] focus:ring-0 focus:outline-none"
                />
                <InputOTPSlot
                  index={3}
                  className="w-10 h-12 rounded-[var(--Corner-Radius-6)] border border-[var(--Boarder-Grey)] text-[18px] leading-[26px] font-bold text-[var(--Grey)] focus:ring-0 focus:outline-none"
                />
                <InputOTPSlot
                  index={4}
                  className="w-10 h-12 rounded-[var(--Corner-Radius-6)] border border-[var(--Boarder-Grey)] text-[18px] leading-[26px] font-bold text-[var(--Grey)] focus:ring-0 focus:outline-none"
                />
                <InputOTPSlot
                  index={5}
                  className="w-10 h-12 rounded-[var(--Corner-Radius-6)] border border-[var(--Boarder-Grey)] text-[18px] leading-[26px] font-bold text-[var(--Grey)] focus:ring-0 focus:outline-none"
                />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>

        {/* Line */}
        <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />

        <div className="flex items-center justify-center gap-4 self-stretch">
          <Button
            onClick={onClose}
            variant="outline"
            className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] border-[var(--Blue)] text-[var(--Blue)] text-[14px] leading-[22px] bg-white hover:bg-[var(--Blue)] hover:text-white transition-all duration-300 ease-linear"
          >
            {t("public__dashboard__account__2fa__disable_dialog__cancel_button")}
          </Button>
          <Button className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear">
            {t("public__dashboard__billing__subscription_status_active")}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
