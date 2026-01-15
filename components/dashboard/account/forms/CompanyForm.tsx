import FormInput from "./FormInput";
import SaveButton from "./SaveButton";

export default function CompanyForm() {
  return (
    <div className="flex flex-col items-start gap-4 w-[600px]">
      <div className="flex items-start gap-4 self-stretch">
        <FormInput label="Company name" />
        <FormInput label="Tax ID" />
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
