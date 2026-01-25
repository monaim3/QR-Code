"use client";
import Image from "next/image";
import React from "react";
import { SlArrowLeft, SlArrowRight } from "react-icons/sl";
import Container from "../common/parent-container";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

class QrType {
  id: number;
  title: string;
  tabImagePath: string;
  contentDescription?: string;
  contentImagePath?: string;
  contentUrlPath?: string;

  constructor(
    id: number,
    title: string,
    tabImagePath: string,
    contentDescription?: string,
    contentImagePath?: string,
    contentUrlPath?: string,
  ) {
    this.id = id;
    this.title = title;
    this.tabImagePath = tabImagePath;
    this.contentDescription = contentDescription;
    this.contentImagePath = contentImagePath;
    this.contentUrlPath = contentUrlPath;
  }
}

const QrTypeData = [
  new QrType(
    1,
    "Website Url",
    "/images/qr_types/website_url.svg",
    "Your QR code will open any URL, website or webpage you link it to. By simply scanning your unique QR code with a smartphone, users will conveniently open the webpage you chose. Easy, fast, professional!",
    "/images/qr_types/half_device_website.webp",
    "/generator/website-url"
  ),
  new QrType(
    2,
    "Vcard",
    "/images/qr_types/vcard.svg",
    "Enhance the value of your electronic business card by adding a QR code. This gives viewers an easy way to access more information about you or your company. An added bonus: you can edit the QR content whenever you like.",
    "/images/qr_types/half_device_vcard.webp",
    "#"
  ),
  new QrType(
    3,
    "PDF",
    "/images/qr_types/pdf.svg",
    "Put all the information that matters at your clients' and customers' fingertips. With a customizable QR code, they can access PDF files rich with content. And after a quick download, they can easily share or save.",
    "/images/qr_types/half_device_pdf.webp",
    "#"
  ),
  new QrType(
    4,
    "Images",
    "/images/qr_types/Images.svg",
    "If you're in an industry that relies heavily on images to promote your brand, why not use a QR code to link to an image gallery in a snap? Showcase real estate, consumer goods, food and furniture with ease.",
    "/images/qr_types/half_device_image.webp",
    "#"
  ),
  new QrType(
    5,
    "Social Media",
    "/images/qr_types/social_media.svg",
    "One QR code can open the door to all of your social media channels. Make it simple for users to follow you on Facebook, Instagram, Twitter or wherever they like to hang out online.",
    "/images/qr_types/half_device_socialmedia.webp",
    "#"
  ),
  new QrType(
    6,
    "Video",
    "/images/qr_types/video.svg",
    "Add a QR code to a brochure, poster, mailer or any other platform to unlock instant access to video content. Make your print media more dynamic, capture attention and boost your brand appeal.",
    "/images/qr_types/half_device_video.webp",
    "#"
  ),
  new QrType(
    7,
    "Simple Text",
    "/images/qr_types/simple_text.svg",
    "From product descriptions to serial numbers to information cards, any text can be accessed immediately with a custom QR code. Make your product more engaging and change the content in real time.",
    "/images/qr_types/half_device_text.webp",
    "#"
  ),
  new QrType(
    8,
    "Business Pages",
    "/images/qr_types/business_page.svg",
    "Showcase your company information with a business page QR code. This simple, streamlined landing page can include your business details, opening hours and any other key info. Add a button to make booking an appointment effortless.",
    "/images/qr_types/half_device_business.webp",
    "#"
  ),
  new QrType(
    9,
    "Facebook",
    "/images/qr_types/facebook.svg",
    "Want more likes and shares? Boost the impact of your print media by adding a QR code that links to your Facebook page. It's all about new ways to build your audience.",
    "/images/qr_types/half_device_facebook.webp",
    "#"
  ),
  new QrType(
    10,
    "WiFi",
    "/images/qr_types/wi_fi.svg",
    "Avoid password problems by using a QR code to unlock Wi-Fi access. With a quick scan, customers can easily get on to your network. Fewer interruptions and super-fast connections will keep everyone happy.",
    "/images/qr_types/half_device_wifi.webp",
    "#"
  ),
  new QrType(
    11,
    "App",
    "/images/qr_types/app.svg",
    "By scanning a single QR code, anyone can install your app instantly from the App Store or Google Play. Full customization lets you match your code's appearance to your brand so you stand out from the competition.",
    "/images/qr_types/half_device_app.webp",
    "#"
  ),
  new QrType(
    12,
    "Menu",
    "/images/qr_types/menu.svg",
    "Own a restaurant or bar? Use a QR code to link to a digital menu and make it easy to access your food and drink offering. You can make menu changes at any time, so it's always up to date.",
    "/images/qr_types/half_device_menue.webp",
    "#"
  ),
];

export default function QrTypes() {
  const [activeTab, setActiveTab] = React.useState(QrTypeData[0].id);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);
  const router = useRouter();

  ///change tab using arrows
  const changeTab = (direction: "left" | "right") => {
    const currentIndex = QrTypeData.findIndex((tab) => tab.id === activeTab);

    let newIndex = currentIndex;
    if (direction === "left") {
      newIndex = currentIndex > 0 ? currentIndex - 1 : 0;
    } else if (direction === "right") {
      newIndex =
        currentIndex < QrTypeData.length - 1
          ? currentIndex + 1
          : QrTypeData.length - 1;
    }

    const newTabId = QrTypeData[newIndex].id;
    setActiveTab(newTabId);

    // Scroll the new tab into view smoothly
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const activeButton = container.querySelector(
        `button[data-id="${newTabId}"]`,
      ) as HTMLElement;
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          inline: "center", // horizontally center the tab
          block: "nearest", // don't scroll vertically
        });
      }
    }
  };

  return (
    <section className="bg-[radial-gradient(circle,#334A56,#2F3E46)] desktop:py-40 py-16">
      <Container>
        <div className="flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-2 mb-8">
            <h2 className="text-[24px] leading-[32px] font-bold text-center desktop:text-[32px] desktop:leading-[40px] text-white">
              QR codes for every use
            </h2>
            <p className="text-[14px] leading-[22px] font-regular text-center text-white/60">
              Whatever content you want to share, there’s a QR code for it.
              Click the icons below to explore options and see examples.
            </p>
          </div>
          <div className="w-full">
            <div
                ref={scrollContainerRef}
                className="flex gap-2 overflow-x-auto scrollbar-hide scroll-smooth"
                style={{ scrollSnapType: "x mandatory" }}
                onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
                  const container = scrollContainerRef.current;
                  if (!container) return;

                const startX = e.pageX - container.offsetLeft;
                const scrollLeft = container.scrollLeft;

                let isDragging = false;

                const onMouseMove = (moveEvent: MouseEvent) => {
                  isDragging = true;
                  const x = moveEvent.pageX - container.offsetLeft;
                  const walk = (x - startX) * 2;
                  container.scrollLeft = scrollLeft - walk;
                };

                const onMouseUp = () => {
                  document.removeEventListener("mousemove", onMouseMove);
                  document.removeEventListener("mouseup", onMouseUp);
                  setTimeout(() => (isDragging = false), 0);
                };

                document.addEventListener("mousemove", onMouseMove);
                document.addEventListener("mouseup", onMouseUp);
              }}
            >
              {QrTypeData.map((qr) => {
                const isActive = activeTab === qr.id;
                const tabRefs = React.useRef<
                  Record<number, HTMLButtonElement | null>
                >({});
                // Use ref map instead of createRef each render
                if (!tabRefs.current[qr.id]) tabRefs.current[qr.id] = null;

                const handleClick = () => {
                  if (tabRefs.current[qr.id]) {
                    setActiveTab(qr.id);

                    // Smooth scroll active tab into view
                    tabRefs.current[qr.id]?.scrollIntoView({
                      behavior: "smooth",
                      inline: "center",
                      block: "nearest",
                    });
                  }
                };

                return (
                  <button
                    key={qr.id}
                    data-id={qr.id}
                    ref={(el) => {
                      tabRefs.current[qr.id] = el; // assign only
                    }}
                    onMouseDown={(e) => e.preventDefault()}
                    onClick={handleClick}
                    className={`
                        flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all duration-300 ease-linear
                        flex-shrink-0 snap-center
                        ${
                          isActive
                            ? "bg-[var(--Blue)] text-white"
                            : "bg-white/10 text-white hover:bg-[var(--Blue)]"
                        }
                      `}
                    // style={{ scrollSnapAlign: "center" }}
                  >
                    {/* Fixed-size icon wrapper */}
                    <div
                      className="flex-shrink-0 w-9 h-7 flex items-center justify-center min-w-[36px] min-h-[26px]"
                      // style={{ minWidth: 36, minHeight: 26 }}
                    >
                      <Image
                        src={qr.tabImagePath}
                        alt={qr.title}
                        width={36}
                        height={26}
                      />
                    </div>

                    {/* Full text */}
                    <span className="text-[14px] leading-[22px] font-sans font-normal flex-shrink-0">
                      {qr.title}
                    </span>
                  </button>
                );
              })}
            </div>
            <div className="flex flex-col items-center justify-center pt-6 max-w-[1100px] mx-auto desktop:flex-row desktop:pt-[96px] gap-10 desktop:gap-0">
              {/* Left: Image */}
             <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 1 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative overflow-hidden rounded-lg bg-white/10 px-[25px] pt-[56px] desktop:pt-[100px] w-full desktop:w-1/2 flex justify-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{
                    duration: 0.3,
                    ease: "linear"
                  }}
                  className="flex justify-center"
                >
                  <div className="w-[300px] desktop:w-[350px] relative">
                  <img
                    src={
                      QrTypeData.find((qr) => qr.id === activeTab)?.contentImagePath ||
                      "/images/qr_types/website_url_example.png"
                    }
                    alt={
                      QrTypeData.find((qr) => qr.id === activeTab)?.title ||
                      "QR Code Example"
                    }
                    className=""             // optional if using container div
                  />
                  </div>
                </motion.div>
              </motion.div>
             </AnimatePresence>
              {/* Right: Text */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeTab}
                  initial={{ opacity: 0, y: 2 }}
                  animate={{ opacity: 1, y: 2 }}
                  exit={{ opacity: 0, y: 2 }}
                  transition={{ duration: 0.3, ease: "linear" }}
                  className="flex flex-col justify-center items-center desktop:items-start w-full max-w-1/2 desktop:w-1/2 px-0 desktop:px-12"
                >
                  <motion.h3
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.4, ease: "linear" }}
                    className="text-[20px] leading-[28px] font-bold text-center desktop:text-left text-white pb-2 desktop:text-[24px] desktop:leading-[32px]"
                  >
                    {QrTypeData.find((qr) => qr.id === activeTab)?.title}
                  </motion.h3>

                  <motion.p
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -5 }}
                    transition={{ duration: 0.4, ease: "linear" }}
                    className="text-[14px] leading-[22px] font-normal text-center desktop:text-start text-white pb-4"
                  >
                    {
                      QrTypeData.find((qr) => qr.id === activeTab)
                        ?.contentDescription
                    }
                  </motion.p>

                  <motion.button
                  type="button"
                  onClick={() => {
                    const path = QrTypeData[activeTab - 1]?.contentUrlPath;
                    console.log("My path",activeTab);
                    if (path) router.push(path);
                  }}
                  initial={{ opacity: 1, y: 2 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 1, y: 2 }}
                  transition={{ duration: 0.3, ease: "linear" }}
                  className="bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] rounded-[10px] text-white text-[18px] leading-[26px] font-medium py-3 px-8 w-full text-center desktop:w-auto inline-block transition-all duration-300 ease-linear"
                >
                  Create QR code
                </motion.button>


                  {/* Arrow buttons */}
                  <div className="flex flex-row justify-center desktop:justify-start items-center pt-8 gap-4">
                    <div
                      className="size-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[var(--Black)] transition-all cursor-pointer duration-300 ease-linear"
                      onClick={() => changeTab("left")}
                    >
                      <SlArrowLeft className="text-white w-4 h-4" />
                    </div>
                    <div
                      className="size-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-[var(--Black)] transition-all cursor-pointer duration-300 ease-linear"
                      onClick={() => changeTab("right")}
                    >
                      <SlArrowRight className="text-white w-4 h-4" />
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

//const tabRef = React.createRef<HTMLButtonElement>();
