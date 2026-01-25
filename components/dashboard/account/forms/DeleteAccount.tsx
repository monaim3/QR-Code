import { Button } from "@/components/ui/button";
import FormSelect from "./FormSelect";
import SaveButton from "./SaveButton";
import TrashAlt from "@/components/icons/trash-alt";

export default function DeleteAccount() {
  return (
    <div className="flex flex-col items-start gap-6 p-6 self-stretch bg-white rounded-[var(--Corner-Radius-10)] shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]">
      <div className="flex flex-col gap-2">
        <h4 className="text-[var(--Black)] text-[18px] leading-[26px] font-bold">
          Delete account
        </h4>
        <p className="text-[var(--Dark-gray)] text-[16px] leading-[24px]">
          If you proceed, all your created QR codes will become inactive and
          will be deleted! Anyone who scans them will not see the content. Your
          subscription will be immediately cancelled. It will not be possible to
          restore the deleted QR codes.
        </p>
      </div>

      <div className="w-full h-[1px] bg-[var(--boarder-grey-50)]" />

      <div className="flex flex-col items-start gap-4 desktopDashboard:w-[600px] w-full">
        <FormSelect
          label="Reason for account deletion"
          options={[
            "My QR campaign is over",
            "I don't want to use QR codes",
            "Other",
          ]}
        />

        <Button className="flex w-full h-[38px] px-4 py-2 justify-center items-center gap-2 rounded-[var(--Corner-Radius-10)] bg-[var(--error)] text-white text-[14px] leading-[22px] desktopDashboard:w-[120px] tablet:w-[120px]">
          <TrashAlt />
          Delete
        </Button>
      </div>
    </div>
  );
}
