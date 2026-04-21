import { useEffect, useState } from "react";
import ShareFacebook from "../icons/share-facebook";
import ShareLinkedin from "../icons/share-linkedin";
import ShareTwitter from "../icons/share-twitter";
import { Button } from "../ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import CloseCircle from "../icons/close-circle";
import Copy from "../icons/copy";

interface Props {
  open: boolean;
  onClose: () => void;
  /** Mount the dialog inside this element so it only covers the preview (not the full page). */
  portalContainer?: HTMLElement | null;
}

export default function ShareModal({
  open,
  onClose,
  portalContainer,
}: Props) {
  const [message, setMessage] = useState<string>("");

  const handleCopy = async () => {
    await navigator.clipboard.writeText("https://www.google.com");
    setMessage("The link has been copied!");
  };

  useEffect(() => {
    if (!message) return;

    const timer = setTimeout(() => {
      setMessage("");
    }, 3000);

    return () => clearTimeout(timer);
  }, [message]);

  const contained = portalContainer != null;

  return (
    <Dialog
      open={open}
      onOpenChange={(nextOpen) => {
        if (!nextOpen) onClose();
      }}
    >
      <DialogContent
        portalContainer={portalContainer}
        showCloseButton={!contained}
        className="!max-w-[226px] w-[calc(100%-34px)] flex flex-col gap-4 p-4 font-roboto"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="relative flex flex-col gap-0">
          {contained && (
            <DialogClose
              className="absolute -right-1 -top-1 flex h-8 w-8 items-center justify-center rounded-full opacity-80 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              aria-label="Close"
            >
              <CloseCircle className="h-6 w-6 text-[var(--Black)]" />
            </DialogClose>
          )}
          <DialogTitle className="text-[var(--Black)] text-center text-[18px] font-bold leading-[26px] w-full">
            Share
          </DialogTitle>
          <p className="text-[var(--Dark-gray)] text-[12px] leading-[20px] text-center">
            Share this link via
          </p>
        </DialogHeader>

        <div className="flex justify-center items-center gap-4">
          <button className="cursor-pointer">
            <ShareFacebook />
          </button>
          <button className="cursor-pointer">
            <ShareLinkedin />
          </button>
          <button className="cursor-pointer">
            <ShareTwitter />
          </button>
        </div>

        <p className="text-[var(--Dark-gray)] text-[12px] leading-[20px] text-center">
          or copy link to clipboard
        </p>

        <div className="flex flex-col gap-2">
          <div className="py-2 px-4 h-10 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] flex items-center justify-center gap-4">
            <div className="text-[var(--Grey)]">
              <Copy />
            </div>

            <div className="w-[1px] h-[21px] bg-[var(--boarder-grey-50)]" />

            <input
              readOnly
              value={"https://www.google.com"}
              className="text-[var(--Black)] !text-[14px] !leading-[22px] outline-none border-none focus:ring-0 focus:outline-0 focus-visible:outline-none focus-visible:ring-0 focus:outline-none truncate w-full"
            />
          </div>

          <Button
            onClick={handleCopy}
            className="h-10 flex items-center justify-center gap-2 py-2 px-8 rounded-[var(--Corner-Radius-10)] bg-[var(--Blue)] text-white text-[14px] leading-[22px] hover:bg-[var(--Blue-hover)] transition-all duration-300 ease-linear"
          >
            Copy
          </Button>
          {message && (
            <p className="text-[var(--Green)] text-[14px] leading-[22px] text-center">
              {message}
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
}
