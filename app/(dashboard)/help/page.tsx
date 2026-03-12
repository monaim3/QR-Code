import ContactInformation from "@/components/contact-us/contact-information";
import ContactUsInputForm from "@/components/contact-us/input-form";

export default function Help() {
  return (
    <div className="w-full max-w-[1216px] mx-auto desktopDashboard:mt-[120px]">
      <div
        className="
        w-full
        bg-white
        rounded-[12px]
        px-[16px] desktopDashboard:p-10
        pt-[32px] pb-[24px]
        shadow-card
        flex flex-col desktopDashboard:flex-row
        items-stratch justify-between
        gap-6
        desktopDashboard:gap-10
      "
      >
        {/* Left Panel */}
        <ContactUsInputForm />
        {/* Right Panel */}
        <ContactInformation />
      </div>
    </div>
  );
}
