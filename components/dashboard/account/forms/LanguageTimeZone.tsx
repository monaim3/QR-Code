import FormSelect from "./FormSelect";
import SaveButton from "./SaveButton";

export default function LanguageTimeZone() {
  return (
    <div className="flex flex-col items-start gap-6 p-6 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <div className="flex flex-col gap-2">
        <h4 className="text-[var(--Black)] text-[18px] leading-[26px] font-bold">
          Language and time zone
        </h4>
        <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
          Enter a new password into both fields below.
        </p>
      </div>

      <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />

      <div className="flex flex-col items-start gap-4 desktopDashboard:w-[600px] w-full">
        <FormSelect
          label="Language"
          options={["English", "Español", "Français"]}
        />
        <FormSelect
          label="Time zone"
          options={["America/New York", "Europe/Paris", "Asia/Tokyo"]}
        />

        <SaveButton />
      </div>
    </div>
  );
}
