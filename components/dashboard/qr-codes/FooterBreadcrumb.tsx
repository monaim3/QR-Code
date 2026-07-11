"use client";

import { useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { ArrowLeft, ArrowRight, Eye } from "lucide-react";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setActiveTab } from "@/store/slices/previewSlice";
import { validateQRData } from "@/lib/validation/qr-validation";
import { setErrors, setShowErrors, clearAllErrors } from "@/store/slices/validationSlice";

import MobilePreviewModal from "@/components/generator/Mobile_Preview_Modal";
import Container from "@/components/common/parent-container";
import WebsiteUrlPreview from "@/components/generator/Website_Url_Preview";
import QRCodeDisplay from "@/components/generator/QR_Code_Display";
import CustomizeQRDisplay from "@/components/common/CustomizeQRDisplay";
import VCardPreview from "@/components/generator/vcard/VCardPreview";
import MenuPreview from "@/components/generator/menu/MenuPreview";
import BusinessPreview from "@/components/generator/businessPage/BusinessPreview";
import Breadcrumb from "@/components/generator/Breadcrumb";
import Save from "@/components/icons/save";
import Close from "@/components/icons/close";
import AppPreView from "@/components/generator/app/app-preview";
import FacebookPreview from "@/components/generator/Facebook/FacebookPreview";
import ImagesPreview from "@/components/generator/Images/ImagesPreview";
import PdfPreView from "@/components/generator/pdf/pdf-preview";
import SimpleTextPreview from "@/components/generator/SimpleText/SimpleTextPreview";
import SocialPreView from "@/components/generator/socialMedia/social-preview";
import VideoPreView from "@/components/generator/video/video-preview";
import WifiPreview from "@/components/generator/Wifi/WifiPreview";
import {
  usePublishGuestQrCodeMutation,
  useUpdateQrCodeMutation,
} from "@/store/api/qrApi";
import { buildGuestQrStep2Payload } from "@/lib/generator/buildGuestQrStep2Payload";
import { buildGuestQrDesign } from "@/lib/generator/buildGuestQrDesign";
import { setHydratedEditId } from "@/store/slices/qrSlice";
import { getStep2ValidationToastMessage } from "@/lib/utils/getStep2ValidationToastMessage";
import { scheduleScrollToFirstValidationError } from "@/lib/utils/scheduleScrollToFirstValidationError";
import ErrorToast from "@/components/common/ErrorToast";
import { useT } from "@/utils/t";

export default function FooterBreadcrumb() {
  const t = useT();
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const dispatch = useAppDispatch();
  const activeTab = useAppSelector((state) => state.preview.activeTab);
  const websiteUrl = useAppSelector((state) => state.preview.websiteUrl);
  const collapsed = useAppSelector((state) => state.sidebar.collapsed);
  const reduxState = useAppSelector((state) => state);
  const qrName = useAppSelector((state) => state.preview.qrCodeName);
  const qrCode = useAppSelector((state) => state.qr);
  const simpleText = useAppSelector((state) => state.simpleText.Text);
  const vCard = useAppSelector((state) => state.vCard);
  const pdf = useAppSelector((state) => state.pdf);
  const images = useAppSelector((state) => state.images);
  const wifi = useAppSelector((state) => state.wifi);
  const social = useAppSelector((state) => state.social);
  const facebook = useAppSelector((state) => state.facebook);
  const video = useAppSelector((state) => state.video);
  const app = useAppSelector((state) => state.app);
  const business = useAppSelector((state) => state.business);
  const menu = useAppSelector((state) => state.menu);

  const editId = searchParams.get("id") ?? qrCode.qrId ?? "";

  const [updateQrCode] = useUpdateQrCodeMutation();
  const [publishGuestQrCode] = usePublishGuestQrCodeMutation();

  const desktopPositionClasses = collapsed
    ? "desktopDashboard:left-[72px] left-0 desktopDashboard:max-w-[calc(100vw-72px)] max-w-full"
    : "desktopDashboard:left-[214px] left-0 desktopDashboard:max-w-[calc(100vw-214px)] max-w-full";

  const getCurrentStep = (): number => {
    // Check most specific paths first
    if (pathname.includes("/customize")) return 2;
    return 1;
  };

  const currentStep = getCurrentStep();
  const showNavigation = currentStep > 0;

  const withEditId = (path: string) =>
    editId ? `${path}?id=${editId}` : path;

  // Persist the edited content + design, publish, then return to the list.
  const persistQr = async (qrType: string) => {
    const contentPayload = buildGuestQrStep2Payload(qrType, {
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
    });

    if (editId && contentPayload) {
      const qrDesign = buildGuestQrDesign(qrCode);

      await updateQrCode({
        id: editId,
        payload: {
          qrDesign,
          name: contentPayload.name,
          content: contentPayload.content,
        },
      });

      await publishGuestQrCode(editId);
    }

    // Reset so re-editing this QR later re-hydrates fresh server data.
    dispatch(setHydratedEditId(null));
    router.push("/cabinet/qr-codes");
  };

  // Save icon (step 1): validate, then save the current values and exit.
  const handleSave = async () => {
    const pathParts = pathname.split("/");
    const qrType = pathParts[pathParts.length - 1];

    const validationResult = validateQRData(reduxState, qrType);
    if (!validationResult.isValid) {
      dispatch(setErrors(validationResult.fieldErrors));
      dispatch(setShowErrors(true));

      const toast = getStep2ValidationToastMessage(
        pathname,
        validationResult.fieldErrors,
      );
      if (toast) setToastMessage(toast);

      scheduleScrollToFirstValidationError();
      return;
    }

    dispatch(clearAllErrors());
    localStorage.setItem("qrType", qrType);
    await persistQr(qrType);
  };

  const handleBack = () => {
    if (currentStep === 2) {
      const qrType =
        (typeof window !== "undefined" && localStorage.getItem("qrType")) || "";
      router.push(withEditId(`/cabinet/qr-codes/generator/${qrType}`));
    }
  };

  const handleNext = async () => {
    if (currentStep === 1) {
      // Get QR type from the content page pathname (/generator/{type})
      const pathParts = pathname.split("/");
      const qrType = pathParts[pathParts.length - 1];

      // Validate the form data
      const validationResult = validateQRData(reduxState, qrType);

      if (!validationResult.isValid) {
        // Dispatch errors to Redux
        dispatch(setErrors(validationResult.fieldErrors));
        dispatch(setShowErrors(true));

        // Show a toast for collection-level errors (social-media/video/menu)
        const toast = getStep2ValidationToastMessage(
          pathname,
          validationResult.fieldErrors,
        );
        if (toast) setToastMessage(toast);

        // Scroll to the first invalid field
        scheduleScrollToFirstValidationError();
        return;
      }

      // Clear any previous errors
      dispatch(clearAllErrors());
      localStorage.setItem("qrType", qrType);
      router.push(withEditId("/cabinet/qr-codes/generator/customize"));
    } else if (currentStep === 2) {
      // Complete: persist the edited content + design, then publish.
      const qrType =
        (typeof window !== "undefined" && localStorage.getItem("qrType")) || "";
      await persistQr(qrType);
    }
  };

  const handleExits = () => {
    dispatch(setHydratedEditId(null));
    router.push("/cabinet/qr-codes");
  };

  const handleTabChange = (tab: "preview" | "qrcode") => {
    dispatch(setActiveTab(tab));
  };

  const getPreviewContent = () => {
    if (activeTab === "preview") {
      switch (true) {
        case pathname.includes("/app"):
          return <AppPreView />;
        case pathname.includes("/business-page"):
          return <BusinessPreview />;
        case pathname.includes("/facebook"):
          return <FacebookPreview />;
        case pathname.includes("/images"):
          return <ImagesPreview />;
        case pathname.includes("/menu"):
          return <MenuPreview />;
        case pathname.includes("/pdf"):
          return <PdfPreView />;
        case pathname.includes("/simple-text"):
          return <SimpleTextPreview />;
        case pathname.includes("/social-media"):
          return <SocialPreView />;
        case pathname.includes("/vcard"):
          return <VCardPreview />;
        case pathname.includes("/video"):
          return <VideoPreView />;
        case pathname.includes("/website-url"):
          return <WebsiteUrlPreview url={websiteUrl} />;
        case pathname.includes("/wifi"):
          return <WifiPreview />;
        default:
          return;
      }
    }

    if (pathname.includes("/customize")) {
      return <CustomizeQRDisplay />;
    }

    return <QRCodeDisplay />;
  };

  if (!showNavigation) return null;

  return (
    <>
      {toastMessage && (
        <ErrorToast
          message={toastMessage}
          onClose={() => setToastMessage(null)}
        />
      )}
      <footer
        className={`
        fixed bottom-0 w-full flex items-center justify-center gap-10 py-4 px-5
        desktopDashboard:px-6 bg-white shadow-[0_1px_8px_0_rgba(63,72,103,0.16)]
        transition-all duration-300
        ${desktopPositionClasses}
      `}
      >
        <Container>
          <div className="flex items-center gap-4 desktop:gap-8 desktop:justify-between">
            <div className="flex items-center desktop:gap-6 gap-4 flex-1 justify-between">
              <button
                onClick={handleExits}
                className="flex h-12 py-0 px-4 justify-center items-center gap-1 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)]"
              >
                <span className="hidden desktop:inline">{t("generator__footer__edit_mode__exit_button")}</span>
                <span className="desktop:hidden">
                  <Close className="w-4 h-4 text-[var(--Grey)]" />
                </span>
              </button>
              <div className="hidden desktop:block">
                <Breadcrumb dashboardSteps={true} />
              </div>
              <button
                onClick={() => setIsModalOpen(true)}
                className="desktop:hidden flex items-center justify-center w-12 h-12 rounded-lg bg-[#f7f8ff] text-[var(--Blue)] transition-colors shrink-0"
                aria-label="Preview"
              >
                <Eye className="size-5" />
              </button>
            </div>

            <div className="flex items-center gap-4">
              {currentStep === 1 && (
                <button
                  onClick={handleSave}
                  className="flex w-12 h-12 p-2 justify-center items-center flex-shrink-0 rounded-[var(--Corner-Radius-8)] border border-[var(--Boarder-Grey)]"
                >
                  <Save className="text-[var(--Dark-gray)]" />
                </button>
              )}

              {currentStep === 2 && (
                <button
                  onClick={handleBack}
                  className="flex items-center gap-2 px-3 md:px-6 py-3 font-roboto text-[var(--Blue)] hover:text-[var(--Blue-hover)] font-medium transition-colors border border-[var(--Blue)] rounded-lg"
                >
                  <ArrowLeft className="size-5 text-[var(--Blue)]" />
                  <span className="hidden md:block text-[var(--Blue)]">
                    {t("auth__common__back")}
                  </span>
                </button>
              )}
              {currentStep === 1 && (
                <button
                  onClick={handleNext}
                  className="text-center w-full desktop:w-[222px] flex-1 desktop:flex-none flex items-center justify-center gap-2 px-6 py-2.5 font-roboto bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white rounded-lg text-[18px] leading-[28px] font-medium transition-all duration-300"
                >
                  <span>{t("generator__footer__next_button")}</span>
                  <ArrowRight className="size-5" />
                </button>
              )}
              {currentStep === 2 && (
                <button
                  onClick={handleNext}
                  className="text-center w-full desktop:w-[222px] flex-1 desktop:flex-none flex items-center justify-center gap-2 px-6 py-2.5 font-roboto bg-[var(--Blue)] hover:bg-[var(--Blue-hover)] text-white rounded-lg text-[18px] leading-[28px] font-medium transition-all duration-300"
                >
                  Complete
                </button>
              )}
            </div>
          </div>
        </Container>
      </footer>
      <MobilePreviewModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        activeTab={activeTab}
        onTabChange={handleTabChange}
      >
        {getPreviewContent()}
      </MobilePreviewModal>
    </>
  );
}
