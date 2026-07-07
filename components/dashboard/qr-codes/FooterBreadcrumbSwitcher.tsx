"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import CreateFooterBreadcrumb from "./CreateFooterBreadcrumb";
import FooterBreadcrumb from "./FooterBreadcrumb";

/**
 * Renders the edit-mode footer (`FooterBreadcrumb`) when the generator is
 * opened with `?id=<qrId>`, otherwise the create-mode footer
 * (`CreateFooterBreadcrumb`).
 */
function FooterBreadcrumbSwitcherInner() {
  const searchParams = useSearchParams();
  const isEdit = Boolean(searchParams.get("id"));
  return isEdit ? <FooterBreadcrumb /> : <CreateFooterBreadcrumb />;
}

export default function FooterBreadcrumbSwitcher() {
  return (
    <Suspense fallback={null}>
      <FooterBreadcrumbSwitcherInner />
    </Suspense>
  );
}
