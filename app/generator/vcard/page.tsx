import Container from "@/components/common/parent-container";
import About from "@/components/generator/vcard/About";
import DesignCustomize from "@/components/generator/vcard/DesignCustomize";

export default function GeneratorVCard() {
  return (
    <main className="bg-[var(--Generator-Background)] h-screen">
      <Container className="flex gap-8">
        {/* Content */}
        <div className="flex flex-col items-start gap-4 pt-[120px] pb-[160px] px-0 flex-1">
          {/* Heading */}
          <h3 className="text-[var(--Black)] font-bold text-[24px] leading-[var(--Typeface-Line-height-Heading-3)]">
            Add content to the vCard QR code
          </h3>

          {/* Design & Customize */}
          <DesignCustomize />

          {/* About */}
          <About />
        </div>

        {/* Preview */}
        <div className="w-[280px]">Preview</div>
      </Container>
    </main>
  );
}
