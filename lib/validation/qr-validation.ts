import { RootState } from "@/store";

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
  qrType: string
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
  fieldErrors: { [key: string]: string }
) {
  const { websiteUrl } = state.preview;

  if (!websiteUrl || !websiteUrl.trim()) {
    const message = "This field is required and cannot be left blank.";
    errors.push({
      field: "Website URL",
      message,
    });
    fieldErrors["websiteUrl"] = message;
  } else {
    // Validate URL format
    try {
      new URL(
        websiteUrl.startsWith("http") ? websiteUrl : `https://${websiteUrl}`
      );
    } catch {
      const message = "Please enter a valid URL";
      errors.push({
        field: "Website URL",
        message,
      });
      fieldErrors["websiteUrl"] = message;
    }
  }
}

function validateVCard(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string }
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
  fieldErrors: { [key: string]: string }
) {
  const { pdfFile } = state.pdf;

  if (!pdfFile || !pdfFile.trim()) {
    const message = "Please upload a PDF file.";
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
  fieldErrors: { [key: string]: string }
) {
  const { images } = state.images;

  if (!images || images.length === 0) {
    const message = "Please upload at least one image.";
    errors.push({
      field: "Images",
      message,
    });
    fieldErrors["images"] = message;
  }
}

function validateSocialMedia(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string }
) {
  const { socialChannels } = state.social;

  if (!socialChannels || socialChannels.length === 0) {
    const message = "Please add at least one social media channel.";
    errors.push({
      field: "Social Channels",
      message,
    });
    fieldErrors["socialChannels"] = message;
  } else {
    // Validate that each channel has a URL
    const channelsWithoutUrl = socialChannels.filter(
      (channel) => !channel.url || !channel.url.trim()
    );
    if (channelsWithoutUrl.length > 0) {
      const message = "All social media channels must have a URL.";
      errors.push({
        field: "Social Channels",
        message,
      });
      fieldErrors["socialChannels"] = message;
    }
  }
}

function validateVideo(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string }
) {
  const { videos } = state.video;

  if (!videos || videos.length === 0) {
    const message = "Please add at least one video.";
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
  fieldErrors: { [key: string]: string }
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
  fieldErrors: { [key: string]: string }
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
  fieldErrors: { [key: string]: string }
) {
  const { FacebookUrl } = state.facebook;

  if (!FacebookUrl || !FacebookUrl.trim()) {
    const message = "This field is required and cannot be left blank.";
    errors.push({
      field: "Facebook URL",
      message,
    });
    fieldErrors["facebookUrl"] = message;
  }
}

function validateWifi(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string }
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
  fieldErrors: { [key: string]: string }
) {
  const { appStoreLinks } = state.app;

  if (!appStoreLinks || appStoreLinks.length === 0) {
    const message = "Please add at least one app store link.";
    errors.push({
      field: "App Store Links",
      message,
    });
    fieldErrors["appStoreLinks"] = message;
  } else {
    // Validate that each link has a URL
    const linksWithoutUrl = appStoreLinks.filter(
      (link) => !link.storeUrl || !link.storeUrl.trim()
    );
    if (linksWithoutUrl.length > 0) {
      const message = "All app store links must have a URL.";
      errors.push({
        field: "App Store Links",
        message,
      });
      fieldErrors["appStoreLinks"] = message;
    }
  }
}

function validateMenu(
  state: RootState,
  errors: ValidationError[],
  fieldErrors: { [key: string]: string }
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
    (section) => section.products && section.products.length > 0
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

