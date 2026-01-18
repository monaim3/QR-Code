import Logo from "./Logo";
import DashboardMenuIcon from "@/components/icons/menu";

export default function DashboardHeader() {
  return (
    <header className="w-full desktopDashboard:hidden py-2 px-5 tablet:px-8 !h-[64px] flex items-center justify-between border-b border-[rgba(205,208,219,0.5)] bg-white backdrop-blur-[20px]">
      <div>
        <Logo />
      </div>
      <button>
        <DashboardMenuIcon />
      </button>
    </header>
  );
}
