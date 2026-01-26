import Accordion from "@/components/common/Accordion";
import ImageUpload from "./ImageUpload";

export default function Welcome() {
  return (
    <div className="w-full">
      <Accordion
        title="Welcome screen"
        description="Display a custom logo while your page is loading"
        defaultOpen={true}
      >
        <ImageUpload />
      </Accordion>
    </div>
  );
}
