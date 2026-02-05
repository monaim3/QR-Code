import CreateFooterBreadcrumb from "@/components/dashboard/qr-codes/CreateFooterBreadcrumb";

export default function DashboardGeneratorLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="w-full">{children}</div>
      <CreateFooterBreadcrumb />
    </>
  );
}
