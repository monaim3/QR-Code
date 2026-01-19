import DashboardHeader from "@/components/dashboard/layout/Header";
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
      <div className="self-stretch flex-1 h-full relative overflow-y-auto">
        <DashboardHeader />

        <main className="desktopDashboard:py-8 desktopDashboard:px-6 tablet:px-8 px-[20px] py-6 flex flex-col items-start desktopDashboard:gap-0 gap-6 relative overflow-y-auto self-stretch flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
