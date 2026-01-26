import Accordion from "@/components/common/Accordion";
import Input from "./Input";

export default function NameQrCode() {
  return (
    <div className="w-full">
      <Accordion
        title="Name of the QR code"
        description="Give a name to your QR code"
      >
        <Input
          label="Name your QR code"
          placeholder="e.g. My first QR code"
          id="qrName"
        />
      </Accordion>
    </div>
  );
}
