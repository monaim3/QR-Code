"use client";

import { useState } from "react";
import AccountDeleteModal from "./AccountDeleteModal";
import DeleteAccount from "./forms/DeleteAccount";
import EmailAddress from "./forms/EmailAddress";
import LanguageTimeZone from "./forms/LanguageTimeZone";
import SuccessDeleteModal from "./SuccessDeleteModal";
import { useRouter } from "next/navigation";
import { storage } from "@/utils/storage";

export default function Settings() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const router = useRouter();

  return (
    <>
      <LanguageTimeZone />
      <EmailAddress />

      <DeleteAccount onDeleteClick={() => setIsDeleteModalOpen(true)} />

      <AccountDeleteModal
        open={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onSuccess={() => {
          setIsDeleteModalOpen(false);
          setIsSuccessModalOpen(true);
        }}
      />

      <SuccessDeleteModal
        open={isSuccessModalOpen}
        onClose={() => {
          setIsSuccessModalOpen(false);
          storage.clear();
          document.cookie ="token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT";
          router.push("/");
        }}
      />
    </>
  );
}