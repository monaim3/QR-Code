"use client";

import { useState } from "react";
import Container from "../common/parent-container";
import Logo from "../dashboard/layout/Logo";
import Breadcrumb from "./Breadcrumb";
import HelpIcon from "./HelpIcon";
import HelpPopUp from "./HelpPopUp";
import CurrencySelector from "../common/currency_dropdown";

interface Props {
  className?: string;
  priceAndPlan?: boolean;
  hideInfo?: boolean;
}

export default function GeneratorHeader({
  className,
  priceAndPlan = false,
  hideInfo = false,
}: Props) {
  const [helpPopUpOpen, setHelpPopUpOpen] = useState(false);

  const handleOpenHelpPopUp = () => {
    setHelpPopUpOpen(true);
  };

  const handleCloseHelpPopUp = () => {
    setHelpPopUpOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 w-full desktop:border-b border-[var(--Boarder-Grey)] bg-white/80 backdrop-blur-[20px] ${className}`}
    >
      <div className="border-b border-[var(--Boarder-Grey)] desktop:border-b-0">
        <Container>
          <div className="py-5">
            <div className="flex items-center justify-between">
              <Logo />
              <div className="hidden desktop:flex flex-1 justify-end">
                <Breadcrumb priceAndPlanSteps={priceAndPlan} />
              </div>
              <div className={`${priceAndPlan ? "block desktop:hidden" : "hidden"}`}>
                <CurrencySelector/> 
              </div>
              <div className={`${!hideInfo ? "block" : "hidden"}`}>
              <HelpIcon onClick={handleOpenHelpPopUp} />
              </div>
            </div>
          </div>
        </Container>
      </div>

      {/* Help Pop Up */}
      <HelpPopUp open={helpPopUpOpen} onClose={handleCloseHelpPopUp} />
    </header>
  );
}
