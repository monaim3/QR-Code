import FormInput from "./FormInput";
import SaveButton from "./SaveButton";

export default function PersonalForm() {
  return (
    <div className="flex flex-col items-start gap-4 w-[600px]">
      <div className="flex items-start gap-4 self-stretch">
        <FormInput label="Name" />
        <FormInput label="Last name" />
      </div>

      <FormInput label="Email address" />
      <FormInput label="Phone number" />
      <FormInput label="Street address" />
      <div className="flex items-start gap-4 self-stretch">
        <FormInput label="City" />
        <FormInput label="State" />
      </div>
      <div className="flex items-start gap-4 self-stretch">
        <FormInput label="Zip/Postal code" />
        <FormInput label="Country" />
      </div>

      <SaveButton />
    </div>
  );
}
