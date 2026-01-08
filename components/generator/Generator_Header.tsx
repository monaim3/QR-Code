import Container from "../common/parent-container";
import Logo from "../dashboard/layout/Logo";
import Breadcrumb from "./Breadcrumb";
import HelpIcon from "./HelpIcon";

export default function GeneratorHeader() {
  return (
    <header className="w-full border-b border-[var(--Boarder-Grey)] bg-white">
      <Container>
        <div className="py-4">
          <div className="flex items-center justify-between">
            <Logo />
            <div className="hidden md:flex flex-1 justify-center">
              <Breadcrumb />
            </div>
            <HelpIcon />
          </div>
          <div className="md:hidden mt-4">
            <Breadcrumb />
          </div>
        </div>
      </Container>
    </header>
  );
}
