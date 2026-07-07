import type { AppDispatch } from "@/store";
import type { UploadLogoResponse } from "@/store/slices/qrSlice";
import type { VCardSlice, SocialChannel as VCardChannel } from "@/types/vCard";
import type { PdfSlice } from "@/types/pdf";
import type { imageState } from "@/store/slices/imagesSlice";
import type { SocialSlice, SocialChannel as SocialChan } from "@/types/social";
import type { facebookState } from "@/store/slices/facebookSlice";
import type { VideoSlice } from "@/types/video";
import type { AppSlice, AppLinks } from "@/types/app";
import type { BusinessSlice } from "@/types/business";
import type { MenuSlice } from "@/types/menu";

import { setWebsiteUrl, setQrCodeName } from "@/store/slices/previewSlice";
import { hydrateSimpleText } from "@/store/slices/simpleTextSlice";
import { hydrateWifi } from "@/store/slices/wifiSlice";
import { hydrateVCard } from "@/store/slices/vCardSlice";
import { hydratePdf } from "@/store/slices/pdf-slice";
import { hydrateImages } from "@/store/slices/imagesSlice";
import { hydrateSocial } from "@/store/slices/social-slice";
import { hydrateFacebook } from "@/store/slices/facebookSlice";
import { hydrateVideo } from "@/store/slices/video-slice";
import { hydrateApp } from "@/store/slices/app-slice";
import { hydrateBusiness } from "@/store/slices/businessSlice";
import { hydrateMenu } from "@/store/slices/menuSlice";
import { hydrateQrDesign } from "@/store/slices/qrSlice";

/* eslint-disable @typescript-eslint/no-explicit-any */

const emptyUploadedImage = {
  publicId: "",
  resourceType: "",
  format: "",
  bytes: 0,
};

/** Reverse of the `logo` object produced in buildGuestQrStep2Payload for a channel. */
function logoToUploaded(logo: any): UploadLogoResponse | undefined {
  if (!logo || logo.provider === "none") return undefined;
  return {
    bucketRootUrl: logo.bucketRootUrl ?? "",
    bytes: logo.bytes ?? 0,
    format: logo.format ?? "",
    key: logo.key ?? "",
    publicId: logo.publicId ?? "",
    resourceType: logo.resourceType ?? "",
    storageProvider: logo.provider ?? "",
  };
}

/** Derive a channel id from its logo `src` path, else slugify its name. */
function channelId(logo: any, name: string): string {
  if (logo?.src) {
    const base = String(logo.src).split("/").pop() ?? "";
    return base.replace(/\.svg$/i, "");
  }
  return (name ?? "").toLowerCase().replace(/\s+/g, "-");
}

/** Reverse of getSocialIconPath: `/icons/socials/Twitter.svg` -> `twitter`. */
function iconPathToLogoId(path: string | null | undefined): string | null {
  if (!path) return null;
  const base = String(path).split("/").pop() ?? "";
  return base.replace(/\.svg$/i, "").toLowerCase();
}

/** Split a phone list back into primary / alt / rest. */
function splitPhones(phones: any): {
  phoneNumber: string;
  altPhoneNumber: string;
  altPhoneNumbers: string[];
} {
  const list: string[] = Array.isArray(phones) ? phones.filter(Boolean) : [];
  return {
    phoneNumber: list[0] ?? "",
    altPhoneNumber: list[1] ?? "",
    altPhoneNumbers: list.slice(2),
  };
}

/** Split an email list back into primary / rest. */
function splitEmails(emails: any): { email: string; altEmails: string[] } {
  const list: string[] = Array.isArray(emails) ? emails.filter(Boolean) : [];
  return { email: list[0] ?? "", altEmails: list.slice(1) };
}

/**
 * Populate the Redux slices from a fetched QR code so the generator forms show
 * the existing values for editing. Inverse of buildGuestQrStep2Payload /
 * buildGuestQrDesign.
 */
export function hydrateQrForEdit(dispatch: AppDispatch, qr: any) {
  if (!qr) return;

  const content = qr.content ?? {};
  const name: string = qr.name ?? "";

  // The QR name field (some forms read it from the preview slice).
  dispatch(setQrCodeName(name));

  // ---- QR design (customize step) ----
  const d = qr.qrDesign;
  if (d) {
    const cornerFrameType: string | undefined = d.cornersSquareOptions?.type;
    const cornerDotType: string | undefined = d.cornersDotOptions?.type;
    dispatch(
      hydrateQrDesign({
        selectedFrameIndex:
          !d.frame || d.frame.type === "default"
            ? 0
            : Number(d.frame.type) || 0,
        frameText: d.frame?.text ?? "SCAN ME",
        frameColor: d.frame?.color ?? "#000000",
        frameTextColor: d.frame?.textColor ?? "",
        frameBackgroundColor: d.frame?.background ?? "#FFFFFF",
        patternStyle: d.dotsOptions?.type ?? "square",
        dotColor: d.dotsOptions?.color ?? "#000000",
        backgroundColor: d.backgroundOptions?.color ?? "#FFFFFF",
        cornerFrameColor: d.cornersSquareOptions?.color ?? "#000000",
        cornerFrameStyleUI: cornerFrameType ?? "none",
        cornerFrameStyle:
          !cornerFrameType || cornerFrameType === "square"
            ? "square"
            : cornerFrameType,
        cornerDotColor: d.cornersDotOptions?.color ?? "#000000",
        cornerDotTypeUI: cornerDotType ?? "none",
        cornerDotType:
          !cornerDotType || cornerDotType === "square"
            ? "square"
            : cornerDotType,
        uploadedLogo: (d.image?.uploaded as UploadLogoResponse) ?? null,
        selectedLogo: d.image?.uploaded
          ? null
          : iconPathToLogoId(d.image?.selected),
      }),
    );
  }

  // ---- Content (form step) ----
  switch (content.type) {
    case "url":
      dispatch(setWebsiteUrl(content.url ?? ""));
      break;

    case "plainText":
      dispatch(hydrateSimpleText({ Text: content.text ?? "" }));
      break;

    case "wifi":
      dispatch(
        hydrateWifi({
          NetworkName: content.ssid ?? "",
          Password: content.password ?? "",
          EncryptionType: content.encryption ?? "WPA",
          HiddenNetwork: Boolean(content.hidden),
        }),
      );
      break;

    case "vCard": {
      const phones = splitPhones(content.contacts?.phoneNumber);
      const emails = splitEmails(content.contacts?.email);
      const addr = content.address ?? {};
      const payload: Partial<VCardSlice> = {
        qrCodeName: name,
        primaryColor: content.colors?.primary ?? "#6594FF",
        secondaryColor: content.colors?.secondary ?? "#FFFFFF",
        personalInfo: {
          fullName: content.profile?.name ?? "",
          image: null,
          uploadedImage: content.profile?.image ?? emptyUploadedImage,
        },
        contactDetails: {
          phoneNumber: phones.phoneNumber,
          altPhoneNumber: phones.altPhoneNumber,
          altPhoneNumbers: phones.altPhoneNumbers,
          website: content.contacts?.website ?? "",
          email: emails.email,
          altEmails: emails.altEmails,
        },
        companyName: content.company?.name ?? "",
        companyTitle: content.company?.position ?? "",
        summary: content.summary ?? "",
        street: addr.street ?? "",
        postalCode: addr.postalCode ?? "",
        city: addr.city ?? "",
        state: addr.state ?? "",
        country: addr.country ?? "",
        addressUrl: addr.url ?? "",
        socialChannels: (content.links ?? []).map((l: any): VCardChannel => {
          const id = channelId(l.logo, l.name);
          const uploadedImage = logoToUploaded(l.logo);
          return {
            id,
            name: l.name ?? "",
            url: l.url ?? "",
            description: l.description ?? "",
            icon: id,
            ...(uploadedImage ? { uploadedImage } : {}),
          };
        }),
        uploadedWelcomeScreen: content.loaderImage ?? emptyUploadedImage,
      };
      dispatch(hydrateVCard(payload));
      break;
    }

    case "pdf": {
      const payload: Partial<PdfSlice> = {
        qrCodeName: name,
        primaryColor: content.colors?.primary ?? "#6594FF",
        secondaryColor: content.colors?.secondary ?? "#FFFFFF",
        uploadedPdfFile: content.file ?? null,
        documentInfo: {
          companyName: content.company?.name ?? "",
          title: content.company?.title ?? "",
          website: content.company?.website ?? "",
          fileDescription: content.company?.description ?? "",
        },
        showPdfOnly: Boolean(content.isDirect),
        uploadedWelcomeScreen: content.loaderImage ?? emptyUploadedImage,
      };
      dispatch(hydratePdf(payload));
      break;
    }

    case "images": {
      const payload: Partial<imageState> = {
        Name: content.info?.headline ?? "",
        Website: content.info?.website ?? "",
        Title: content.info?.description ?? "",
        primaryColor: content.colors?.primary ?? "#68C2D9",
        secondaryColor: content.colors?.secondary ?? "#FFFFFF",
        Share: Boolean(content.isShareable),
        buttons: (content.buttons ?? []).map((b: any, i: number) => ({
          id: `btn-${i}`,
          buttonText: b.title ?? "",
          url: b.url ?? "",
          buttonTextError: "",
          urlError: "",
        })),
        uploadedImages: (content.gallery ?? []).map((g: any, i: number) => ({
          ...g,
          imageId: `img-${i}`,
        })),
      };
      dispatch(hydrateImages(payload));
      break;
    }

    case "socialMedia": {
      const payload: Partial<SocialSlice> = {
        qrCodeName: name,
        primaryColor: content.colors?.primary ?? "#6594FF",
        secondaryColor: content.colors?.secondary ?? "#FFFFFF",
        socialInfo: {
          headLine: content.info?.headline ?? "",
          description: content.info?.description ?? "",
        },
        socialChannels: (content.socials ?? []).map((s: any): SocialChan => {
          const id = channelId(s.logo, s.name);
          const uploadedImage = logoToUploaded(s.logo);
          return {
            id,
            name: s.name ?? "",
            isIcon: true,
            url: s.url ?? "",
            icon: id,
            description: s.description ?? "",
            ...(uploadedImage ? { uploadedImage } : {}),
          };
        }),
        uploadedImages: (content.gallery ?? []).map((g: any, i: number) => ({
          ...g,
          imageId: i,
        })),
        uploadedWelcomeScreen: content.loaderImage ?? emptyUploadedImage,
      };
      dispatch(hydrateSocial(payload));
      // buildGuestQrStep2Payload reads the name from pdf.qrCodeName and the
      // gallery from images.uploadedImages for socialMedia, so keep both in
      // sync for a faithful re-submit.
      dispatch(hydratePdf({ qrCodeName: name }));
      dispatch(
        hydrateImages({
          uploadedImages: (content.gallery ?? []).map(
            (g: any, i: number) => ({ ...g, imageId: `img-${i}` }),
          ),
        }),
      );
      break;
    }

    case "facebook": {
      const payload: Partial<facebookState> = {
        Name: content.info?.name ?? "",
        Title: content.info?.title ?? "",
        FacebookUrl: content.info?.url ?? "",
        Website: content.info?.website ?? "",
        primaryColor: content.colors?.primary ?? "#EB7986",
        secondaryColor: content.colors?.secondary ?? "#FFFFFF",
        buttons: (content.buttons ?? []).map((b: any, i: number) => ({
          id: `btn-${i}`,
          buttonText: b.title ?? "",
          url: b.url ?? "",
          buttonTextError: "",
          urlError: "",
        })),
        uploadedImages: (content.gallery ?? []).map((g: any, i: number) => ({
          ...g,
          imageId: `img-${i}`,
        })),
      };
      dispatch(hydrateFacebook(payload));
      break;
    }

    case "video": {
      const payload: Partial<VideoSlice> = {
        qrCodeName: name,
        primaryColor: content.colors?.primary ?? "#6594FF",
        secondaryColor: content.colors?.secondary ?? "#FFFFFF",
        videoInfo: {
          title: content.info?.title ?? "",
          description: content.info?.description ?? "",
          buttons: (content.info?.buttons ?? []).map((b: any) => ({
            text: b.title ?? "",
            url: b.url ?? "",
          })),
        },
        isShare: Boolean(content.isShareable),
        videos: (content.videos ?? []).map((v: any, i: number) => ({
          id: i,
          title: v.name ?? "",
          description: v.description ?? "",
          url: v.source?.url ?? "",
          uploaded: v.source?.uploaded ?? null,
        })),
        uploadedWelcomeScreen: content.loaderImage ?? emptyUploadedImage,
      };
      dispatch(hydrateVideo(payload));
      break;
    }

    case "app": {
      const links = content.platformLinks ?? [];
      const storeTitles: Record<string, string> = {
        apple: "App Store",
        google: "Google Play",
        amazon: "Amazon",
        xiaomi: "Xiaomi",
      };
      const payload: Partial<AppSlice> = {
        qrCodeName: name,
        primaryColor: content.colors?.primary ?? "#6594FF",
        secondaryColor: content.colors?.secondary ?? "#FFFFFF",
        appInfo: {
          image: null,
          appName: content.appInfo?.name ?? "",
          developer: content.appInfo?.developer ?? "",
          description: content.appInfo?.description ?? "",
          buttons: (content.appInfo?.buttons ?? []).map((b: any) => ({
            text: b.title ?? "",
            url: b.url ?? "",
          })),
          uploadedImage: content.appInfo?.logo ?? emptyUploadedImage,
        },
        appStoreLinks: links.map(
          (l: any, i: number): AppLinks => ({
            id: i,
            storeName: l.name ?? "",
            title: storeTitles[l.name] ?? l.name ?? "",
            storeUrl: l.url ?? "",
          }),
        ),
        uploadedWelcomeScreen: content.loaderImage ?? emptyUploadedImage,
      };
      dispatch(hydrateApp(payload));
      break;
    }

    case "businessPage": {
      const phones = splitPhones(content.contacts?.phoneNumber);
      const emails = splitEmails(content.contacts?.email);
      const addr = content.address ?? {};
      const payload: Partial<BusinessSlice> = {
        qrCodeName: name,
        primaryColor: content.colors?.primary ?? "#6594FF",
        secondaryColor: content.colors?.secondary ?? "#FFFFFF",
        businessInfo: {
          companyName: content.company?.name ?? "",
          title: content.company?.tagline ?? "",
          subTitle: content.company?.summary ?? "",
          buttons: (content.buttons ?? []).map((b: any, i: number) => ({
            id: `button-${i}`,
            text: b.title ?? "",
            url: b.url ?? "",
          })),
        },
        contactInfo: {
          fullName: content.contactDetails?.name ?? "",
          phoneNumber: phones.phoneNumber,
          altPhoneNumber: phones.altPhoneNumber,
          altPhoneNumbers: phones.altPhoneNumbers,
          website: content.contacts?.website ?? "",
          email: emails.email,
          altEmails: emails.altEmails,
        },
        summary: content.summary ?? "",
        street: addr.street ?? "",
        postalCode: addr.postalCode ?? "",
        city: addr.city ?? "",
        state: addr.state ?? "",
        country: addr.country ?? "",
        addressUrl: addr.url ?? "",
        facilities: content.facilities ?? [],
        socialChannels: (content.links ?? []).map(
          (l: any): VCardChannel => ({
            id: channelId(l.logo, l.name),
            name: l.name ?? "",
            url: l.url ?? "",
          }),
        ),
        uploadedBusinessImage: content.image ?? emptyUploadedImage,
        uploadedWelcomeScreen: content.loaderImage ?? emptyUploadedImage,
      };
      dispatch(hydrateBusiness(payload));
      break;
    }

    case "menu": {
      const payload: Partial<MenuSlice> = {
        qrCodeName: name,
        primaryColor: content.colors?.primary ?? "#6594FF",
        secondaryColor: content.colors?.secondary ?? "#FFFFFF",
        restaurantInfo: {
          name: content.info?.name ?? "",
          description: content.info?.description ?? "",
          image: null,
        },
        uploadedRestaurantImage: content.info?.image ?? emptyUploadedImage,
        uploadedWelcomeScreen: content.loaderImage ?? emptyUploadedImage,
        sections: (content.sections ?? []).map((s: any, si: number) => ({
          id: `section-${si}`,
          name: s.name ?? "",
          nameTranslation: s.nameTranslation ?? "",
          description: s.description ?? "",
          descriptionTranslation: s.descriptionTranslation ?? "",
          isVisible: s.visible ?? true,
          products: (s.products ?? []).map((p: any, pi: number) => ({
            id: `product-${si}-${pi}`,
            name: p.name ?? "",
            nameTranslation: p.nameTranslation ?? "",
            description: p.description ?? "",
            descriptionTranslation: p.descriptionTranslation ?? "",
            price: p.price ?? "",
            image: null,
            allergens: p.allergens ?? [],
            isVisible: p.visible ?? true,
            uploadedProductImage: p.image ?? emptyUploadedImage,
          })),
        })),
      };
      dispatch(hydrateMenu(payload));
      break;
    }

    default:
      break;
  }
}
