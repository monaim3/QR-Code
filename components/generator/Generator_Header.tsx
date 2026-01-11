import Container from "../common/parent-container";
import Logo from "../dashboard/layout/Logo";
import Breadcrumb from "./Breadcrumb";
import HelpIcon from "./HelpIcon";

export default function GeneratorHeader() {
  return (
    <header className="sticky top-0 z-50">
      <div className="w-full border-b border-[var(--Boarder-Grey)] bg-white  ">
        <Container>
          <div className="py-5">
            <div className="flex items-center justify-between">
              <Logo />
              <div className="hidden md:flex flex-1 justify-center">
                <Breadcrumb />
              </div>
              <HelpIcon />
            </div>
          </div>
        </Container>
      </div>
      <div className="bg-[var(--Generator-Background)]">
        <Container>
          <div className="md:hidden ">
            <Breadcrumb />
          </div>
        </Container>
      </div>
    </header>
  );
}
