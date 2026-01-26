import Container from "@/components/common/parent-container";
import Breadcrumb from "@/components/generator/Breadcrumb";
import About from "@/components/generator/vcard/About";
import DesignCustomize from "@/components/generator/vcard/DesignCustomize";
import NameQrCode from "@/components/generator/vcard/NameQrCode";
import Social from "@/components/generator/vcard/Social";
import Welcome from "@/components/generator/vcard/Welcome";

export default function GeneratorVCard() {
  return (
    <main className="bg-[var(--Generator-Background)] min-h-screen">
      <Container className="flex flex-col desktop:flex-row gap-8 lg:pb-32">
        {/* Content */}
        <div className="flex flex-col items-start gap-4 pt-[120px] pb-[160px] px-0 flex-1">
          {/* Mobile Breadcrumb */}
          <div className="block desktop:hidden space-y-0 desktop:space-y-4">
            {<Breadcrumb useMobileSteps={true} />}
          </div>

          {/* Heading */}
          <h3 className="text-[var(--Black)] font-bold text-[24px] leading-[var(--Typeface-Line-height-Heading-3)]">
            Add content to the vCard QR code
          </h3>

          {/* Design & Customize */}
          <DesignCustomize />

          {/* About */}
          <About />

          {/* Social */}
          <Social />

          {/* Welcome Screen */}
          <Welcome />

          {/* Name */}
          <NameQrCode />
        </div>

        {/* Preview */}
        <div className="w-[280px]">Preview</div>
      </Container>
    </main>
  );
}
