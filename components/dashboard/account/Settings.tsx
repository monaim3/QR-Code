"use client";

import { useState } from "react";
import AccountDeleteModal from "./AccountDeleteModal";
import DeleteAccount from "./forms/DeleteAccount";
import EmailAddress from "./forms/EmailAddress";
import LanguageTimeZone from "./forms/LanguageTimeZone";
import SuccessDeleteModal from "./SuccessDeleteModal";

export default function Settings() {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  const handleCloseModal = () => {
    setIsDeleteModalOpen(false);
  };

  const handleCloseSuccessModal = () => {
    setIsSuccessModalOpen(false);
  };

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
