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
}

export default function GeneratorHeader({ className, priceAndPlan = false}: Props) {
  const [helpPopUpOpen, setHelpPopUpOpen] = useState(false);

  const handleOpenHelpPopUp = () => {
    setHelpPopUpOpen(true);
  };

  const handleCloseHelpPopUp = () => {
    setHelpPopUpOpen(false);
  };

  return (
    <header className={`desktop:sticky top-0 z-50 w-full desktop:border-b border-[var(--Boarder-Grey)] bg-white/80 backdrop-blur-[20px] ${className}`}>
      <div className="border-b border-[var(--Boarder-Grey)] desktop:border-b-0">
        <Container>
          <div className="py-5">
            <div className="flex items-center justify-between">
              <Logo />
              <div className="hidden md:flex flex-1 justify-center">
                <Breadcrumb priceAndPlanSteps={priceAndPlan}/>
              </div>
              {priceAndPlan ?
               <div className="block md:hidden">
                <CurrencySelector/> 
               </div>
                :
                <HelpIcon onClick={handleOpenHelpPopUp} />
               }
            </div>
          </div>
        </Container>
      </div>
      {/* {<div className="bg-[var(--Generator-Background)]">
        <Container>
          <div className="md:hidden ">
            <Breadcrumb />
          </div>
        </Container>
      </div>} */}

      {/* Help Pop Up */}
      <HelpPopUp open={helpPopUpOpen} onClose={handleCloseHelpPopUp} />
    </header>
  );
}
