import Menu from "@/components/dashboard/layout/Menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--Generator-Background)] min-h-screen flex">
      {/* Sidebar */}
      <aside className="hidden desktopDashboard:block">
        <Menu />
      </aside>

      {/* Page Content */}
      <main className="py-8 px-6">{children}</main>
    </div>
  );
}
