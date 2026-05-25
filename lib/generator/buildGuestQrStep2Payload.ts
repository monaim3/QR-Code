import { facebookState } from "@/store/slices/facebookSlice";
import { imageState } from "@/store/slices/imagesSlice";
import { wifiState } from "@/store/slices/wifiSlice";
import { AppSlice } from "@/types/app";
import { BusinessSlice } from "@/types/business";
import { MenuSlice } from "@/types/menu";
import { PdfSlice } from "@/types/pdf";
import { SocialSlice } from "@/types/social";
import { VCardSlice } from "@/types/vCard";
import { VideoSlice } from "@/types/video";

export type GuestQrCreatePayload = {
  name: string;
  content: Record<string, unknown>;
};

type Step2Input = {
  qrName: string;
  websiteUrl: string;
  simpleText: string;
  vCard: VCardSlice;
  pdf: PdfSlice;
  images: imageState;
  wifi: wifiState;
  social: SocialSlice;
  facebook: facebookState;
  video: VideoSlice;
  app: AppSlice;
  business: BusinessSlice;
  menu: MenuSlice;
};

/** Build POST /qr-codes/guest body for step 2 when the flow creates a guest code. */
export function buildGuestQrStep2Payload(
  qrType: string,
  input: Step2Input,
): GuestQrCreatePayload | null {
  const {
    qrName,
    websiteUrl,
    simpleText,
    vCard,
    pdf,
    images,
    wifi,
    social,
    facebook,
    video,
    app,
    business,
    menu,
  } = input;

  switch (qrType) {
    case "website-url":
      return {
        name: qrName,
        content: { type: "url", url: websiteUrl },
      };
    case "simple-text":
      return {
        name: qrName,
        content: { type: "plainText", text: simpleText },
      };
    case "vcard":
      return {
        name: vCard.qrCodeName,
        content: {
          type: "vCard" as const,
          colors: {
            primary: vCard.primaryColor,
            secondary: vCard.secondaryColor,
          },
          profile: {
            name: vCard.personalInfo.fullName,
            surname: "",
            image: vCard.personalInfo.uploadedImage,
          },
          contacts: {
            phoneNumber: [
              vCard.contactDetails.phoneNumber,
              vCard.contactDetails.altPhoneNumber,
              ...vCard.contactDetails.altPhoneNumbers,
            ].filter(Boolean) as string[],

            alternativePhoneNumber: "",

            website: vCard.contactDetails.website,

            email: [
              vCard.contactDetails.email,
              ...vCard.contactDetails.altEmails,
            ].filter(Boolean) as string[],
          },
          company: {
            name: vCard.companyName,
            position: vCard.companyTitle,
          },
          summary: vCard.summary,
          address: {
            ...(vCard.addressUrl
              ? { url: vCard.addressUrl }
              : {
                  street: vCard.street,
                  postalCode: vCard.postalCode,
                  city: vCard.city,
                  state: vCard.state,
                  country: vCard.country,
                }),
          },
          links: vCard.socialChannels.map((channel) => ({
            name: channel.name,
            url: channel.url,
            description: channel.description || "",

            logo:
              "uploadedImage" in channel && channel.uploadedImage
                ? {
                    bucketRootUrl: channel.uploadedImage.bucketRootUrl,
                    bytes: channel.uploadedImage.bytes,
                    format: channel.uploadedImage.format,
                    provider: channel.uploadedImage.storageProvider,
                    publicId: channel.uploadedImage.publicId,
                    resourceType: channel.uploadedImage.resourceType,
                  }
                : {
                    provider: "none",
                    src: `/qr-code-generator/social-networks/${channel.id}.svg`,
                  },
          })),
          loaderImage: vCard.uploadedWelcomeScreen,
        },
      };
    case "pdf":
      return {
        name: pdf.qrCodeName,
        content: {
          type: "pdf",
          colors: {
            primary: pdf.primaryColor,
            secondary: pdf.secondaryColor,
          },
          file: pdf.uploadedPdfFile,
          company: {
            name: pdf.documentInfo.companyName,
            title: pdf.documentInfo.title,
            website: pdf.documentInfo.website,
            description: pdf.documentInfo.fileDescription,
          },
          isDirect: pdf.showPdfOnly,
          loaderImage: pdf.uploadedWelcomeScreen,
        },
      };
    case "images":
      return {
        name: qrName,
        content: {
          type: "images",
          buttons:
            images.buttons.length > 0
              ? images.buttons.map((button) => ({
                  title: button.buttonText,
                  url: button.url,
                }))
              : [],
          colors: {
            primary: images.primaryColor,
            secondary: images.secondaryColor,
          },
          gallery:
            images.uploadedImages?.map(({ imageId: _, ...image }) => image) ||
            [],
          info: {
            headline: images.Name,
            website: images.Website,
            description: images.Title,
          },
          isShareable: images.Share,
          loaderImage: vCard.uploadedWelcomeScreen,
        },
      };
    case "wifi":
      return {
        name: qrName,
        content: {
          type: "wifi",
          encryption: wifi.EncryptionType,
          hidden: wifi.HiddenNetwork,
          password: wifi.Password,
          ssid: wifi.NetworkName,
        },
      };
    case "social-media":
      return {
        name: pdf.qrCodeName,
        content: {
          type: "socialMedia",
          colors: {
            primary: social.primaryColor,
            secondary: social.secondaryColor,
          },
          gallery:
            images.uploadedImages?.map(({ imageId: _, ...image }) => image) ||
            [],
          info: {
            headline: social.socialInfo.headLine,
            description: social.socialInfo.description,
          },
          loaderImage: social.uploadedWelcomeScreen,
          socials: social.socialChannels.map((channel) => ({
            name: channel.name,
            url: channel.url,
            description: channel.description || "",

            logo:
              "uploadedImage" in channel && channel.uploadedImage
                ? {
                    bucketRootUrl: channel.uploadedImage.bucketRootUrl,
                    bytes: channel.uploadedImage.bytes,
                    format: channel.uploadedImage.format,
                    provider: channel.uploadedImage.storageProvider,
                    publicId: channel.uploadedImage.publicId,
                    resourceType: channel.uploadedImage.resourceType,
                  }
                : {
                    provider: "none",
                    src: `/qr-code-generator/social-networks/${channel.id}.svg`,
                  },
          })),
        },
      };
    case "facebook":
      return {
        name: qrName,
        content: {
          type: "facebook",
          buttons:
            facebook.buttons.length > 0
              ? facebook.buttons.map((button) => ({
                  title: button.buttonText,
                  url: button.url,
                }))
              : [],
          colors: {
            primary: facebook.primaryColor,
            secondary: facebook.secondaryColor,
          },
          gallery:
            facebook.uploadedImages?.map(({ imageId: _, ...image }) => image) ||
            [],
          info: {
            name: facebook.Name,
            title: facebook.Title,
            url: facebook.FacebookUrl,
            website: facebook.Website,
          },
          loaderImage: vCard.uploadedWelcomeScreen,
        },
      };

    case "video":
      return {
        name: video.qrCodeName,
        content: {
          type: "video",
          colors: {
            primary: video.primaryColor,
            secondary: video.secondaryColor,
          },
          info: {
            buttons:
              video.videoInfo.buttons?.map((button) => ({
                title: button.text,
                url: button.url,
              })) || [],
            description: video.videoInfo.description,
            title: video.videoInfo.title,
          },
          isShareable: video.isShare,
          loaderImage: video.uploadedWelcomeScreen,
          videos:
            video.videos?.map((vid) => ({
              name: vid.title,
              description: vid.description,
              source: vid.uploaded
                ? { uploaded: vid.uploaded, url: null }
                : { uploaded: null, url: vid.url },
            })) || [],
        },
      };
    case "app":
      return {
        name: app.qrCodeName,
        content: {
          type: "app",
          appInfo: {
            buttons:
              app.appInfo.buttons?.map((button) => ({
                title: button.text,
                url: button.url,
              })) || [],
            description: app.appInfo.description,
            developer: app.appInfo.developer,
            name: app.appInfo.appName,
            logo: app.appInfo.uploadedImage,
          },
          colors: {
            primary: app.primaryColor,
            secondary: app.secondaryColor,
          },
          platformLinks: app.appStoreLinks.map((link) => ({
            name: link.storeName,
            url: link.storeUrl,
          })),
          loaderImage: app.uploadedWelcomeScreen,
        },
      };
    case "business-page":
      return {
        name: business.qrCodeName,
        content: {
          type: "businessPage",
          address: business.addressUrl
            ? { url: business.addressUrl }
            : {
                street: business.street,
                postalCode: business.postalCode,
                city: business.city,
                state: business.state,
                country: business.country,
              },
          buttons:
            business.businessInfo.buttons?.map((button) => ({
              title: button.text,
              url: button.url,
            })) || [],
          colors: {
            primary: business.primaryColor,
            secondary: business.secondaryColor,
          },
          company: {
            name: business.businessInfo.companyName,
            summary: business.businessInfo.subTitle,
            tagline: business.businessInfo.title,
          },
          contactDetails: {
            name: business.contactInfo.fullName,
            surname: "",
          },
          contacts: {
            phoneNumber: [
              business.contactInfo.phoneNumber,
              business.contactInfo.altPhoneNumber,
              ...business.contactInfo.altPhoneNumbers,
            ].filter(Boolean) as string[],
            alternativePhoneNumber: "",
            website: business.contactInfo.website,
            email: [
              business.contactInfo.email,
              ...business.contactInfo.altEmails,
            ].filter(Boolean) as string[],
          },
          facilities: business.facilities,
          image: business.uploadedBusinessImage,
          links:
            business.socialChannels?.map((channel) => ({
              name: channel.name,
              url: channel.url,
            })) ?? [],
          loaderImage: business.uploadedWelcomeScreen,
          schedule: {
            // isAm: business.timeFormat === "AM/PM",
            // isOpen247: business.timeFormat === "24/7",
            isAm: false,
            isOpen247: true,
            friday: null,
            monday: null,
            saturday: null,
            sunday: null,
            thursday: null,
            tuesday: null,
            wednesday: null,
          },
          summary: business.summary,
        },
      };
    case "menu":
      return {
        name: menu.qrCodeName,
        content: {
          type: "menu",
          colors: {
            primary: menu.primaryColor,
            secondary: menu.secondaryColor,
          },
          info: {
            name: menu.restaurantInfo.name,
            description: menu.restaurantInfo.description,
            image: menu.uploadedRestaurantImage,
          },
          loaderImage: menu.uploadedWelcomeScreen,
          sections:
            menu.sections.map((section) => ({
              name: section.name,
              nameTranslation: section.nameTranslation,
              description: section.description,
              descriptionTranslation: section.descriptionTranslation,
              visible: section.isVisible,
              products:
                section.products?.map((product) => ({
                  image: product.uploadedProductImage,
                  name: product.name,
                  nameTranslation: product.nameTranslation,
                  description: product.description,
                  descriptionTranslation: product.descriptionTranslation,
                  price: product.price,
                  allergens: product.allergens,
                  visible: product.isVisible,
                })) ?? [],
            })) ?? [],
        },
      };
    default:
      return null;
  }
}
