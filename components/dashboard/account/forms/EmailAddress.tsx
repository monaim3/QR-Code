"use client";
import FormInput from "./FormInput";
import SaveButton from "./SaveButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";

const emailSchema = z.object({
  email: z.string().min(1, "This field is required and cannot be left blank.").email("You have entered an invalid email address. Please try again."),
});

type emailForm = z.infer<typeof emailSchema>;

export default function EmailAddress() {

const { control, handleSubmit, formState } = useForm<emailForm>({
    resolver: zodResolver(emailSchema),
        defaultValues: {
          email: "",
        },
  });

  return (
    <div className="flex flex-col items-start gap-6 p-6 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <div className="flex flex-col gap-2">
        <h4 className="text-[var(--Black)] text-[18px] leading-[26px] font-bold">
          Email address
        </h4>
        <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
          To change your email, enter your new address below.
        </p>
      </div>

      <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />

      <div className="flex flex-col items-start gap-4 desktopDashboard:w-[600px] w-full">
        <FormInput label="Email" />

        <SaveButton />
      </div>
    </div>
  );
}
