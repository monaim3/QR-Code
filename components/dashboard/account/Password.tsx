import FormInput from "./forms/FormInput";
import SaveButton from "./forms/SaveButton";

export default function Password() {
  return (
    <div className="flex flex-col items-start gap-6 p-6 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
        Enter a new password into both fields below.
      </p>

      <div className="flex flex-col items-start gap-4 desktopDashboard:w-[600px] w-full">
        <FormInput label="Password" />
        <FormInput label="Confirm password" />

        <SaveButton />
      </div>
    </div>
  );
}
