import Menu from "@/components/dashboard/layout/Menu";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-[var(--Generator-Background)] h-screen flex">
      {/* Sidebar */}
      <aside className="hidden desktopDashboard:block">
        <Menu />
      </aside>

      {/* Page Content */}
      <main className="py-8 px-6 flex flex-col items-start gap-10 self-stretch flex-1 relative overflow-y-auto">
        {children}
      </main>
    </div>
  );
}
