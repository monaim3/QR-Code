"use client";

import { use, useEffect, useState } from "react";
import AccountDeleteModal from "./AccountDeleteModal";
import DeleteAccount from "./forms/DeleteAccount";
import EmailAddress from "./forms/EmailAddress";
import LanguageTimeZone from "./forms/LanguageTimeZone";
import SuccessDeleteModal from "./SuccessDeleteModal";
import { useSearchParams } from "next/navigation";

export default function Settings() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
  const searchParams = useSearchParams();
  const deleteAccount = searchParams.get("delete");

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

  useEffect(() => {
    if (deleteAccount === "confirm") {
      setTimeout(() => {
        setIsDeleteModalOpen(true);
      }, 0);
    } else if (deleteAccount === "success") {
      setTimeout(() => {
        setIsSuccessModalOpen(true);
      }, 0);
    }
  }, [deleteAccount, setIsDeleteModalOpen, setIsSuccessModalOpen]);

  return (
    <>
      <LanguageTimeZone />
      <EmailAddress />
      <DeleteAccount />

      {/* Modal */}
      <AccountDeleteModal open={isDeleteModalOpen} onClose={handleCloseModal} />
      <SuccessDeleteModal
        open={isSuccessModalOpen}
        onClose={handleCloseSuccessModal}
      />
    </>
  );
}
