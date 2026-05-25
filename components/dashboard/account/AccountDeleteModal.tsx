"use client";

import { useState } from "react";
import { z } from "zod";
import TrashAlt from "@/components/icons/trash-alt";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useDeleteAccountMutation } from "@/store/api/accountApi";
import { storage } from "@/utils/storage";

interface Props {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

// ✅ Zod schema
const deleteSchema = z.object({
  confirmText: z.literal("DELETE"),
});

export default function AccountDeleteModal({
  open,
  onClose,
  onSuccess,
}: Props) {
  const [value, setValue] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const [deleteAccount] = useDeleteAccountMutation();

  const isValid = value === "DELETE";

  const handleDelete = async () => {
    try {
      setError(null);

      // ✅ validate using zod
      deleteSchema.parse({ confirmText: value });

      setIsLoading(true);

      await deleteAccount().unwrap();

      setIsLoading(false);

      onSuccess(); // ✅ success callback
      onClose();   // close modal
      setValue(""); // reset input
    } catch (err) {
      setError("Please type DELETE exactly");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent
        className="!max-w-[500px] w-[calc(100%-40px)] tablet:!w-full desktopDashboard:!w-full flex flex-col gap-6 desktopDashboard:p-8 p-6 font-roboto"
        onOpenAutoFocus={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <DialogHeader className="flex flex-col justify-start items-center gap-2 text-left">
          <p className="text-[var(--error)] text-[14px] leading-[22px] w-full">
            Danger zone
          </p>

          <DialogTitle className="text-[var(--Black)] text-left text-[24px] font-semibold desktopDashboard:leading-[var(--Typeface-Line-height-Heading-3)] leading-[28px] w-full">
            Deleting is permanent
          </DialogTitle>

          <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px] w-full">
            If you delete your account your subscription will be immediately
            cancelled. It will not be possible to restore the deleted QR codes.
          </p>

          <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px] w-full">
            If you are 100% sure, please type DELETE below to confirm.
          </p>
        </DialogHeader>

        <div className="flex items-start gap-2 self-stretch">
          <input
            type="text"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="flex items-center gap-2 px-4 py-2 grow shrink-0 basis-0 self-stretch rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)] bg-white text-[var(--Black)] text-[14px] leading-[22px]"
          />

          <button
            onClick={handleDelete}
            disabled={!isValid || isLoading}
            className="flex h-10 px-4 py-2 justify-center items-center gap-2 bg-[var(--error)] rounded-[var(--Corner-Radius-10)] text-white text-[14px] leading-[22px] disabled:opacity-50"
          >
            <TrashAlt />
            Delete account
          </button>
        </div>

        {error && (
          <p className="text-[var(--error)] text-[12px] mt-2">
            {error}
          </p>
        )}
      </DialogContent>
    </Dialog>
  );
}