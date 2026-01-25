import FormInput from "./FormInput";
import SaveButton from "./SaveButton";

export default function EmailAddress() {
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
