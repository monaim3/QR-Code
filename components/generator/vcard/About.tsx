import Accordion from "@/components/common/Accordion";

export default function About() {
  return (
    <div className="w-full">
      <Accordion
        title="About you"
        description="Fill in the information you would like to showcase in your vCard"
        defaultOpen={true}
      >
        <div>hello</div>
      </Accordion>
    </div>
  );
}
