import { useState } from "react";
import Image from "next/image";
import { Button } from "../ui/button";
import { Dialog, DialogContent, DialogTitle } from "../ui/dialog";
import { helpSteps } from "@/lib/help";

interface Props {
  open: boolean;
  onClose: () => void;
}

export default function HelpPopUp({ open, onClose }: Props) {
  const [activeStep, setActiveStep] = useState(1);

  const handleClose = () => {
    setActiveStep(1);
    onClose();
  };

  const handleNextStep = () => {
    if (activeStep === 5) {
      handleClose();
    } else {
      setActiveStep(activeStep + 1);
    }
  };

  const handlePreviousStep = () => {
    if (activeStep === 1) {
      handleClose();
    } else {
      setActiveStep(activeStep - 1);
    }
  };

  // Calculate progress bar width based on active step
  const progressWidth = `${(activeStep / 5) * 100}%`;

  return (
    <Dialog open={open} onOpenChange={handleClose}>
      <DialogContent className="max-w-[500px] w-[calc(100%-40px)] p-0 gap-0">
        {/* Image */}
        <div className="w-full desktop:h-[300px] h-[210px] relative">
          {/* Desktop Image */}
          <Image
            src={helpSteps[activeStep - 1].image}
            alt={helpSteps[activeStep - 1].title}
            fill
            sizes="100vw"
            className="hidden desktop:block object-cover rounded-t-[var(--Corner-Radius-10)]"
          />

          {/* Mobile Image */}
          <Image
            src={helpSteps[activeStep - 1].mobileImage}
            alt={helpSteps[activeStep - 1].title}
            fill
            sizes="100vw"
            className="block desktop:hidden object-cover rounded-t-[var(--Corner-Radius-10)]"
          />
        </div>

        {/* Progress Bar */}
        <div className="w-full h-1 relative p-0">
          <div className="w-full h-full bg-[var(--Boarder-Grey)]"></div>
          <div
            className="absolute top-0 left-0 h-full rounded-r-[20px] rounded-l-none bg-[var(--Blue)] transition-all duration-300"
            style={{ width: progressWidth }}
          ></div>
        </div>

        {/* Content */}
        <div className="flex flex-col items-start gap-6 self-stretch desktop:p-8 p-6">
          <div className="flex flex-col items-start gap-2 self-stretch">
            <p
              className="text-[var(--Blue)] text-[16px] font-medium leading-[24px] self-stretch
"
            >
              Step {activeStep} / 5
            </p>

            <div className="flex flex-col items-start gap-1 self-stretch">
              <DialogTitle className="text-[var(--Black)] font-bold text-[18px] leading-[26px] self-stretch">
                {helpSteps[activeStep - 1].title}
              </DialogTitle>

              <p className="min-h-[75px] text-[var(--Dark-gray)] text-[16px] leading-[24px] self-stretch">
                {helpSteps[activeStep - 1].description}
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 self-stretch">
            <Button
              onClick={handlePreviousStep}
              className="rounded-[var(--Corner-Radius-10)] border border-[var(--Blue)] flex h-12 px-6 py-2 justify-center items-center gap-2 flex-1 text-[var(--Blue)] text-[18px] font-medium leading-[26px]"
            >
              {activeStep === 1 ? "Close" : "Back"}
            </Button>

            <Button
              onClick={handleNextStep}
              className="rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] flex h-12 px-6 py-2 justify-center items-center gap-2 flex-1 text-white text-[18px] font-medium leading-[26px]"
            >
              {activeStep === 5 ? "Finish" : "Next"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
