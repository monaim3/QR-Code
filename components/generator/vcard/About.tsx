"use client";

import Accordion from "@/components/common/Accordion";
import PersonalInfo from "./PersonalInfo";
import { useState } from "react";
import ContactDetails from "./ContactDetails";

export default function About() {
  const [activeSection, setActiveSection] = useState("personal");

  const handleClick = (section: string) =>
    setActiveSection(activeSection === section ? "" : section);

  return (
    <div className="w-full">
      <Accordion
        title="About you"
        description="Fill in the information you would like to showcase in your vCard"
        defaultOpen={true}
      >
        <div className="space-y-2">
          {/* Personal information */}
          <PersonalInfo
            onClick={() => handleClick("personal")}
            isOpen={activeSection === "personal"}
          />

          {/* Contact details */}
          <ContactDetails
            onClick={() => handleClick("contact")}
            isOpen={activeSection === "contact"}
          />
        </div>
      </Accordion>
    </div>
  );
}
