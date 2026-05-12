import Accordion from "@/components/common/Accordion";
import PdfUpload from "@/components/generator/pdf/pdf-upload";
import { CheckboxInput } from "@/components/common/CheckboxInput";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setPdfFile, setShowPdfOnly } from "@/store/slices/pdf-slice";
import { clearFieldError } from "@/store/slices/validationSlice";
import { useT } from "@/utils/t";
export default function PdfUploadScreen() {
  const dispatch = useAppDispatch();
  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);
  const hasPdfError = showErrors && !!validationErrors.pdfFile;
  const showPdfOnly = useAppSelector((state) => state.pdf.showPdfOnly);

  const handleImageChange = (value: string | null) => {
    dispatch(setPdfFile(value || ""));
    if (value) dispatch(clearFieldError("pdfFile"));
  };

  //   const handlePreview = () => {
  //     dispatch(setIsPreviewWelcomeScreen(true));
  //   };
  const t = useT();
  return (
    <div className="w-full">
      <Accordion
        title={t("generator__content_form_section__pdf__file_title")}
        description={t(
          "generator__content_form_section__pdf__file_description",
        )}
        defaultOpen={true}
        forceOpen={hasPdfError}
      >
        <div className="flex flex-col gap-3">
          <PdfUpload
            onCustomLogoUpload={handleImageChange}
            hasError={hasPdfError}
            //onPreview={handlePreview}
          />
          {hasPdfError && (
            <p className="text-sm text-red-500" data-validation-error="true">
              {validationErrors.pdfFile}
            </p>
          )}
          <CheckboxInput
            id="show-pdf-only"
            label={t("generator__content_form_section__pdf__full_screen")}
            checked={showPdfOnly}
            onChange={(checked) => dispatch(setShowPdfOnly(checked))}
            bgColor="#01A56D"
          />
        </div>
      </Accordion>
    </div>
  );
}
