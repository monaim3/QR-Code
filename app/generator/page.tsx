import MobileFrame from "@/components/common/MobileFrame";
import Container from "@/components/common/parent-container";
import QRTypeCard from "@/components/generator/QRTypeCard";
import ImagesQr from "@/components/icons/Images-qr";
import PdfQr from "@/components/icons/pdf-qr";
import WebsiteUrl from "@/components/icons/website-url-qr";
const qrTypes = [
  {
    id: "website-url",
    title: "Website URL",
    description: "Link to a website of your choice",
    href: "/generator/website-url",
    icon: <WebsiteUrl />,
  },
  {
    id: "vcard",
    title: "vCard",
    description: "Share your electronic business card",
    href: "/generator/vcard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <circle
          cx="17.5"
          cy="17.5"
          r="12"
          stroke="#01A56D"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M20 11 L18 11 C16.5 11 16 12 16 13.5 L16 15 L14 15 L14 18 L16 18 L16 26 L19 26 L19 18 L21 18 L22 15 L19 15 L19 14 C19 13.5 19.2 13 20 13 L22 13 L22 11 Z"
          fill="#01A56D"
        />
      </svg>
    ),
  },
  {
    id: "pdf",
    title: "PDF",
    description: "Show a PDF",
    href: "/generator/pdf",
    icon: <PdfQr />,
  },
  {
    id: "images",
    title: "Images",
    description: "Display an image gallery",
    href: "/generator/images",
    icon: <ImagesQr />,
  },
  {
    id: "social-media",
    title: "Social Media",
    description: "Share your social media channels",
    href: "/generator/social-media",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <circle
          cx="17.5"
          cy="12"
          r="5"
          stroke="#01A56D"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="11"
          cy="23"
          r="4"
          stroke="#01A56D"
          strokeWidth="2"
          fill="none"
        />
        <circle
          cx="24"
          cy="23"
          r="4"
          stroke="#01A56D"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="15"
          y1="15"
          x2="12"
          y2="20"
          stroke="#01A56D"
          strokeWidth="2"
        />
        <line
          x1="20"
          y1="15"
          x2="23"
          y2="20"
          stroke="#01A56D"
          strokeWidth="2"
        />
      </svg>
    ),
  },
  {
    id: "video",
    title: "Video",
    description: "Share one or multiple videos",
    href: "/generator/video",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <rect
          x="5"
          y="10"
          width="20"
          height="15"
          rx="2"
          stroke="#01A56D"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M25 14 L30 11 L30 24 L25 21 Z"
          stroke="#01A56D"
          strokeWidth="2"
          fill="#01A56D"
          opacity="0.3"
        />
        <path d="M13 15 L13 20 L18 17.5 Z" fill="#01A56D" />
      </svg>
    ),
  },
  {
    id: "simple-text",
    title: "Simple Text",
    description: "Display a body of text",
    href: "/generator/simple-text",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="12"
        viewBox="0 0 35 12"
        fill="none"
      >
        <rect
          x="27.6328"
          y="0.5"
          width="6.33333"
          height="10.6667"
          rx="1.5"
          fill="#01A56D"
          stroke="#01A56D"
        />
        <rect
          x="18.0996"
          y="0.5"
          width="6.33333"
          height="10.6667"
          rx="1.5"
          fill="#01A56D"
          stroke="#01A56D"
        />
        <rect y="1.75" width="12.32" height="1.75" rx="0.875" fill="#01A56D" />
        <rect y="6.125" width="8.8" height="1.75" rx="0.875" fill="#01A56D" />
      </svg>
    ),
  },
  {
    id: "business-page",
    title: "Business Page",
    description: "Share your business information",
    href: "/generator/business-page",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <rect
          x="8"
          y="7"
          width="19"
          height="22"
          rx="2"
          stroke="#01A56D"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="12"
          y1="12"
          x2="23"
          y2="12"
          stroke="#01A56D"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="16"
          x2="23"
          y2="16"
          stroke="#01A56D"
          strokeWidth="1.5"
        />
        <line
          x1="12"
          y1="20"
          x2="19"
          y2="20"
          stroke="#01A56D"
          strokeWidth="1.5"
        />
        <circle cx="17.5" cy="24" r="1.5" fill="#01A56D" />
      </svg>
    ),
  },
  {
    id: "facebook",
    title: "Facebook",
    description: "Share your Facebook page",
    href: "/generator/facebook",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <circle
          cx="17.5"
          cy="17.5"
          r="12"
          stroke="#01A56D"
          strokeWidth="2"
          fill="none"
        />
        <path
          d="M20 11 L18 11 C16.5 11 16 12 16 13.5 L16 15 L14 15 L14 18 L16 18 L16 26 L19 26 L19 18 L21 18 L22 15 L19 15 L19 14 C19 13.5 19.2 13 20 13 L22 13 L22 11 Z"
          fill="#01A56D"
        />
      </svg>
    ),
  },
  {
    id: "wifi",
    title: "Wi-Fi",
    description: "Connect to a wireless network",
    href: "/generator/wifi",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <path
          d="M9 15 C12 12 15 11 17.5 11 C20 11 23 12 26 15"
          stroke="#01A56D"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M12 19 C14 17 15.5 16 17.5 16 C19.5 16 21 17 23 19"
          stroke="#01A56D"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <path
          d="M15 23 C16 22 16.5 21.5 17.5 21.5 C18.5 21.5 19 22 20 23"
          stroke="#01A56D"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
        />
        <circle cx="17.5" cy="26" r="1.5" fill="#01A56D" />
      </svg>
    ),
  },
  {
    id: "app",
    title: "App",
    description: "Link to the iOS App Store/Google Play",
    href: "/generator/app",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <rect
          x="8"
          y="7"
          width="19"
          height="22"
          rx="3"
          stroke="#01A56D"
          strokeWidth="2"
          fill="none"
        />
        <line x1="8" y1="24" x2="27" y2="24" stroke="#01A56D" strokeWidth="2" />
        <circle cx="17.5" cy="26" r="1" fill="#01A56D" />
        <rect x="12" y="11" width="4" height="4" rx="1" fill="#01A56D" />
        <rect x="19" y="11" width="4" height="4" rx="1" fill="#01A56D" />
        <rect x="12" y="17" width="4" height="4" rx="1" fill="#01A56D" />
        <rect x="19" y="17" width="4" height="4" rx="1" fill="#01A56D" />
      </svg>
    ),
  },
  {
    id: "menu",
    title: "Menu",
    description: "Create a digital restaurant menu",
    href: "/generator/menu",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
      >
        <rect
          x="7"
          y="6"
          width="21"
          height="24"
          rx="2"
          stroke="#01A56D"
          strokeWidth="2"
          fill="none"
        />
        <line
          x1="11"
          y1="11"
          x2="24"
          y2="11"
          stroke="#01A56D"
          strokeWidth="1.5"
        />
        <line
          x1="11"
          y1="15"
          x2="24"
          y2="15"
          stroke="#01A56D"
          strokeWidth="1.5"
        />
        <line
          x1="11"
          y1="19"
          x2="20"
          y2="19"
          stroke="#01A56D"
          strokeWidth="1.5"
        />
        <line
          x1="11"
          y1="23"
          x2="24"
          y2="23"
          stroke="#01A56D"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

export default function GeneratorPage() {
  return (
    <div className="bg-[var(--Generator-Background)] pb-24">
      <Container>
        <div className="py-12">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h1
                className="text-2xl font-bold text-[var(--Black)] mb-4"
                style={{ fontFamily: "var(--font-poppins)" }}
              >
                Choose QR code type
              </h1>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 desktopDashboard:gap-5">
                {qrTypes.map((type) => (
                  <QRTypeCard
                    key={type.id}
                    icon={type.icon}
                    title={type.title}
                    description={type.description}
                    href={type.href}
                  />
                ))}
              </div>
            </div>
            <div className="hidden lg:flex lg:items-center lg:justify-center lg:sticky lg:top-12">
              <MobileFrame />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
