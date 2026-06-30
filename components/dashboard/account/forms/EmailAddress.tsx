"use client";
import FormInput from "./FormInput";
import SaveButton from "./SaveButton";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useForm, Controller } from "react-hook-form";
import { useChangeEmailMutation } from "@/store/api/accountApi";
import { useT } from "@/utils/t";

const emailSchema = z.object({
  email: z.string().min(1, "This field is required and cannot be left blank.").email("You have entered an invalid email address. Please try again."),
});

type emailForm = z.infer<typeof emailSchema>;

export default function EmailAddress() {

const t = useT();
const [changeEmail, { isLoading }] = useChangeEmailMutation();

const { control, handleSubmit, reset, formState } = useForm<emailForm>({
  resolver: zodResolver(emailSchema),
  defaultValues: {
    email: "",
  },
});

  const onSubmit = async (data: emailForm) => {
    try {
      const response = await changeEmail({
        email: data.email,
      }).unwrap();
      console.log(response.message);
      alert(response.message);
      reset();
    } catch (err) {
      console.error("Failed to change email:", err);
    }
};

  return (
    <div className="flex flex-col items-start gap-6 p-6 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <div className="flex flex-col gap-2">
        <h4 className="text-[var(--Black)] text-[18px] leading-[26px] font-bold">
          {t("public__dashboard__account__settings__email__title")}
        </h4>
        <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
          {t("public__dashboard__account__settings__email__description")}
        </p>
      </div>

      <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />

      <div className="flex flex-col items-start gap-4 desktopDashboard:w-[600px] w-full">
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-start gap-4 w-full">
          <Controller
            name="email"
            control={control}
            render={({ field }) => (
              <FormInput
                label={t("public__dashboard__account__settings__email__label")}
                type="email"
                error={formState.errors.email?.message}
                {...field}
              />
            )}
          />
          <SaveButton />
        </form>
      </div>
    </div>
  );
}
