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

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function DisableTwoFactorModal({ open, onClose }: Props) {
  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[500px] w-[calc(100%-40px)] tablet:!w-full desktopDashboard:!w-full flex flex-col desktopDashboard:gap-6 tablet:gap-6 gap-4 desktopDashboard:p-8 p-6 font-roboto"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col justify-start items-center gap-6 text-left">
          <DialogTitle className="text-[var(--Black)] text-left text-[24px] font-semibold desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px] w-full">
            Disable two-factor authentication
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center gap-4 self-stretch w-full">
          <p className="text-[var(--Dark-gray)] text-[14px] leading-[22px] w-full">
            Enter the two-factor authentication code from the App
          </p>

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
            Cancel
          </Button>
          <Button className="h-10 flex items-center justify-center gap-2 py-2 px-4 flex-1 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear">
            Disable 2FA
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
