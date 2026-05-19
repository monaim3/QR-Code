import { facebookState } from "@/store/slices/facebookSlice";
import { imageState } from "@/store/slices/imagesSlice";
import { wifiState } from "@/store/slices/wifiSlice";
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
    default:
      return null;
  }
}
