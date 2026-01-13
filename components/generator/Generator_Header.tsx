"use client";

import { useState } from "react";
import Container from "../common/parent-container";
import Logo from "../dashboard/layout/Logo";
import Breadcrumb from "./Breadcrumb";
import HelpIcon from "./HelpIcon";
import HelpPopUp from "./HelpPopUp";

export default function GeneratorHeader() {
  const [helpPopUpOpen, setHelpPopUpOpen] = useState(false);

  const handleOpenHelpPopUp = () => {
    setHelpPopUpOpen(true);
  };

  const handleCloseHelpPopUp = () => {
    setHelpPopUpOpen(false);
  };

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
              <HelpIcon onClick={handleOpenHelpPopUp} />
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

      {/* Help Pop Up */}
      <HelpPopUp open={helpPopUpOpen} onClose={handleCloseHelpPopUp} />
    </header>
  );
}
