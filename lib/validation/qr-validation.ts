import { RootState } from "@/store";
import { urlValidationSchema } from "@/lib/validators/validators";

export interface ValidationError {
  field: string;
  message: string;
}

export interface ValidationResult {
  isValid: boolean;
  errors: ValidationError[];
  fieldErrors: { [key: string]: string };
}

/**
 * Validates QR code data based on the current QR type
 * @param state Redux state
 * @param qrType The type of QR code being validated
 * @returns Validation result with any errors
 */
export function validateQRData(
  state: RootState,
  qrType: string,
): ValidationResult {
  const errors: ValidationError[] = [];
  const fieldErrors: { [key: string]: string } = {};

  switch (qrType) {
    case "website-url":
      validateWebsiteUrl(state, errors, fieldErrors);
      break;
    case "vcard":
      validateVCard(state, errors, fieldErrors);
      break;
    case "pdf":
      validatePdf(state, errors, fieldErrors);
      break;
    case "images":
      validateImages(state, errors, fieldErrors);
      break;
    case "social-media":
      validateSocialMedia(state, errors, fieldErrors);
      break;
    case "video":
      validateVideo(state, errors, fieldErrors);
      break;
    case "simple-text":
      validateSimpleText(state, errors, fieldErrors);
      break;
    case "business-page":
      validateBusinessPage(state, errors, fieldErrors);
      break;
    case "facebook":
      validateFacebook(state, errors, fieldErrors);
      break;
    case "wifi":
      validateWifi(state, errors, fieldErrors);
      break;
    case "app":
      validateApp(state, errors, fieldErrors);
      break;
    case "menu":
      validateMenu(state, errors, fieldErrors);
      break;
    default:
      break;
  }

  return {
    isValid: errors.length === 0,
    errors,
    fieldErrors,
  };
}

function validateWebsiteUrl(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string },
) {
  const { websiteUrl } = state.preview;

  const result = urlValidationSchema.safeParse(websiteUrl ?? "");
  if (!result.success) {
    const message = result.error.issues[0].message;
    errors.push({ field: "Website URL", message });
    fieldErrors["websiteUrl"] = message;
  }
}

function validateVCard(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string },
) {
  const { personalInfo } = state.vCard;

  if (!personalInfo.fullName || !personalInfo.fullName.trim()) {
    const message = "This field is required and cannot be left blank.";
    errors.push({
      field: "Full Name",
      message,
    });
    fieldErrors["fullName"] = message;
  }
}

function validatePdf(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string },
) {
  const { pdfFile } = state.pdf;

  if (!pdfFile || !pdfFile.trim()) {
    const message = "This field is required and cannot be left blank.";
    errors.push({
      field: "PDF File",
      message,
    });
    fieldErrors["pdfFile"] = message;
  }
}

function validateImages(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string },
) {
  const { images, Name } = state.images;

  if (!images || images.length === 0) {
    const message = "This field is required and cannot be left blank.";
    errors.push({
      field: "Images",
      message,
    });
    fieldErrors["images"] = message;
  }

  if (!Name || !Name.trim()) {
    const message = "This field is required and cannot be left blank.";
    errors.push({ field: "Headline", message });
    fieldErrors["imagesHeadline"] = message;
  }
}

function validateSocialMedia(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string },
) {
  const { socialInfo, socialChannels } = state.social;

  if (!socialInfo.headLine || !socialInfo.headLine.trim()) {
    const message = "This field is required and cannot be left blank.";
    errors.push({ field: "Headline", message });
    fieldErrors["socialHeadline"] = message;
  }

  if (!socialChannels || socialChannels.length === 0) {
    const message = "Please add at least one social network.";
    errors.push({ field: "Social Networks", message });
    fieldErrors["socialChannels"] = message;
  }

  if (state.social.customFormOpen) {
    if (!state.social.customFormName.trim()) {
      const message = "This field is required and cannot be left blank.";
      errors.push({ field: "Custom Link Name", message });
      fieldErrors["socialCustomName"] = message;
    }
    if (!state.social.customFormUrl.trim()) {
      const message = "This field is required and cannot be left blank.";
      errors.push({ field: "Custom Link URL", message });
      fieldErrors["socialCustomUrl"] = message;
    }
  }
}

function validateVideo(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string },
) {
  const { videos } = state.video;

  if (!videos || videos.length === 0) {
    const message = "This field is required and cannot be left blank.";
    errors.push({
      field: "Videos",
      message,
    });
    fieldErrors["videos"] = message;
  }
}

function validateSimpleText(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string },
) {
  const { Text } = state.simpleText;

  if (!Text || !Text.trim()) {
    const message = "This field is required and cannot be left blank.";
    errors.push({
      field: "Text",
      message,
    });
    fieldErrors["simpleText"] = message;
  }
}

function validateBusinessPage(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string },
) {
  const { businessInfo } = state.business;

  if (!businessInfo.companyName || !businessInfo.companyName.trim()) {
    const message = "This field is required and cannot be left blank.";
    errors.push({
      field: "Company Name",
      message,
    });
    fieldErrors["companyName"] = message;
  }
}

function validateFacebook(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string },
) {
  const { FacebookUrl, Title, images, buttons } = state.facebook;

  if (!Title || !Title.trim()) {
    const message = "This field is required and cannot be left blank.";
    errors.push({ field: "Title", message });
    fieldErrors["facebookTitle"] = message;
  }

  if (!FacebookUrl || !FacebookUrl.trim()) {
    const message = "This field is required and cannot be left blank.";
    errors.push({
      field: "Facebook URL",
      message,
    });
    fieldErrors["facebookUrl"] = message;
  }

  if (!images || images.length === 0) {
    const message = "This field is required and cannot be left blank.";
    errors.push({ field: "Facebook Images", message });
    fieldErrors["facebookImages"] = message;
  }

  buttons.forEach((button, index) => {
    if (!button.buttonText || !button.buttonText.trim()) {
      const message = "This field is required and cannot be left blank.";
      errors.push({ field: `Button Text ${index}`, message });
      fieldErrors[`facebookButtonText_${index}`] = message;
    }
    const urlResult = urlValidationSchema.safeParse(button.url ?? "");
    if (!urlResult.success) {
      const message = urlResult.error.issues[0].message;
      errors.push({ field: `Button URL ${index}`, message });
      fieldErrors[`facebookButtonUrl_${index}`] = message;
    }
  });
}

function validateWifi(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string },
) {
  const { NetworkName } = state.wifi;

  if (!NetworkName || !NetworkName.trim()) {
    const message = "This field is required and cannot be left blank.";
    errors.push({
      field: "Network Name",
      message,
    });
    fieldErrors["networkName"] = message;
  }
}

function validateApp(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string },
) {
  const { appInfo, appStoreLinks } = state.app;

  if (!appInfo.appName || !appInfo.appName.trim()) {
    const message = "This field is required and cannot be left blank.";
    errors.push({
      field: "App Name",
      message,
    });
    fieldErrors["appName"] = message;
  }

  if (!appStoreLinks || appStoreLinks.length === 0) {
    const message = "This field is required and cannot be left blank.";
    errors.push({
      field: "App Store Links",
      message,
    });
    fieldErrors["appStoreLinks"] = message;
  } else {
    appStoreLinks.forEach((link, index) => {
      const result = urlValidationSchema.safeParse(link.storeUrl ?? "");
      if (!result.success) {
        const message = result.error.issues[0].message;
        errors.push({ field: `Store URL ${index}`, message });
        fieldErrors[`appStoreUrl_${index}`] = message;
      }
    });
  }
}

function validateMenu(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string },
) {
  const { restaurantInfo, sections } = state.menu;

  if (!restaurantInfo.name || !restaurantInfo.name.trim()) {
    const message = "This field is required and cannot be left blank.";
    errors.push({
      field: "Restaurant Name",
      message,
    });
    fieldErrors["restaurantName"] = message;
  }

  // Check if there's at least one section with products
  const hasProducts = sections.some(
    (section) => section.products && section.products.length > 0,
  );

  if (!hasProducts) {
    const message = "Please add at least one menu item.";
    errors.push({
      field: "Menu Items",
      message,
    });
    fieldErrors["menuItems"] = message;
  }
}
