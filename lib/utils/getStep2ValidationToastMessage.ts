/** Toast copy for certain generator flows when step-2 validation fails. */
export function getStep2ValidationToastMessage(
  pathname: string,
  fieldErrors: Record<string, string>,
): string | undefined {
  if (pathname.includes("/social-media") && fieldErrors.socialChannels) {
    return fieldErrors.socialChannels;
  }
  if (pathname.includes("/video") && fieldErrors.videos) {
    return fieldErrors.videos;
  }
  if (pathname.includes("/menu") && fieldErrors.menuItems) {
    return fieldErrors.menuItems;
  }
  return undefined;
}
