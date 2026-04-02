"use client";

import Accordion from "@/components/common/Accordion";
import PersonalInfo from "./PersonalInfo";
import { useEffect, useState } from "react";
import ContactDetails from "./ContactDetails";
import CompanyDetails from "./CompanyDetails";
import Summary from "./Summary";
import Address from "./Address";
import { useAppSelector } from "@/store/hooks";

const SECTION_FIELD_MAP: Record<string, string[]> = {
  personal: ["fullName"],
  contact: ["email", "phoneNumber"],
  company: ["companyName", "companyTitle"],
  summary: ["summary"],
  address: ["address"],
};

export default function About() {
  const [activeSection, setActiveSection] = useState("personal");
  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);

  useEffect(() => {
    if (!showErrors) return;
    for (const [section, fields] of Object.entries(SECTION_FIELD_MAP)) {
      if (fields.some((f) => validationErrors[f])) {
        setActiveSection(section);
        break;
      }
    }
  }, [showErrors, validationErrors]);

  const handleClick = (section: string) =>
    setActiveSection(activeSection === section ? "" : section);

  const hasVCardError = Object.values(SECTION_FIELD_MAP)
    .flat()
    .some((f) => validationErrors[f]);

  return (
    <div className="w-full">
      <Accordion
        title="About you"
        description="Fill in the information you would like to showcase in your vCard"
        defaultOpen={true}
        forceOpen={showErrors && hasVCardError}
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

          {/* Company details */}
          <CompanyDetails
            onClick={() => handleClick("company")}
            isOpen={activeSection === "company"}
          />

          {/* Summary */}
          <Summary
            onClick={() => handleClick("summary")}
            isOpen={activeSection === "summary"}
          />

          {/* Address */}
          <Address
            onClick={() => handleClick("address")}
            isOpen={activeSection === "address"}
          />
        </div>
      </Accordion>
    </div>
  );
}
