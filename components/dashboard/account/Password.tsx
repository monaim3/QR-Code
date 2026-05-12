"use client";

import { useState } from "react";
import FormInput from "./forms/FormInput";
import SaveButton from "./forms/SaveButton";
import { useUpdatePasswordMutation } from "@/store/api/accountApi";
import { toast } from "sonner";
import SuccessToast from "./SuccessToast";
import { getStrongPasswordError } from "@/lib/utils/getStrongPasswordError";

const REQUIRED_MSG = "This field is required and cannot be left blank.";

export default function Password() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [updatePassword] = useUpdatePasswordMutation();

  const passwordError =
    submitAttempted && !password.trim()
      ? REQUIRED_MSG
      : getStrongPasswordError(password);

  const passwordsMismatch =
    confirmPassword.length > 0 && password !== confirmPassword;

  const confirmError =
    submitAttempted && !confirmPassword.trim()
      ? REQUIRED_MSG
      : passwordsMismatch
        ? "Passwords do not match"
        : undefined;

  const handleSave = async () => {
    setSubmitAttempted(true);

    if (!password.trim() || !confirmPassword.trim()) {
      return;
    }
    const strengthError = getStrongPasswordError(password);
    if (strengthError) {
      return;
    }
    if (password !== confirmPassword) {
      return;
    }
    const result = await updatePassword({ password });

    if (!result.error) {
      toast.custom((t) => <SuccessToast t={t} />);
      setSubmitAttempted(false);
      setPassword("");
      setConfirmPassword("");
    }
  };

  return (
    <div className="flex flex-col items-start gap-6 p-6 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
        Enter a new password into both fields below.
      </p>

      <div className="flex flex-col items-start gap-4 desktopDashboard:w-[600px] w-full">
        <FormInput
          label="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          error={passwordError}
          required
          autoComplete="new-password"
        />
        <FormInput
          label="Confirm password"
          type="password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={confirmError}
          required
          autoComplete="new-password"
        />

        <SaveButton onClick={handleSave} />
      </div>
    </div>
  );
}
