const FIRST_ERROR_SELECTOR =
  '[aria-invalid="true"], [data-validation-error="true"]';

/** Scrolls to the first invalid field after a short delay so errors can render. */
export function scheduleScrollToFirstValidationError(delayMs = 600): void {
  if (typeof document === "undefined") return;

  setTimeout(() => {
    const firstError =
      document.querySelector<HTMLElement>(FIRST_ERROR_SELECTOR);
    firstError?.scrollIntoView({ behavior: "smooth", block: "center" });
  }, delayMs);
}
