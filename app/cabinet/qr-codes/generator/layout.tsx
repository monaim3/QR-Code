import FooterBreadcrumbSwitcher from "@/components/dashboard/qr-codes/FooterBreadcrumbSwitcher";
import EditQrHydrator from "@/components/dashboard/qr-codes/EditQrHydrator";

export default function DashboardGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <EditQrHydrator />
      <div className="w-full">{children}</div>
      <FooterBreadcrumbSwitcher />
    </>
  );
}
