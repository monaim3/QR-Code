import Accordion from "@/components/common/Accordion";
import PdfUpload from "@/components/generator/pdf/pdf-upload";
import { CheckboxInput } from "@/components/common/CheckboxInput";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import {
  setPdfFile,
  setShowPdfOnly,
  setUploadedPdfFile,
} from "@/store/slices/pdf-slice";
import { clearFieldError } from "@/store/slices/validationSlice";
import { useT } from "@/utils/t";
import { useUploadFileMutation } from "@/store/api/qrApi";

export default function PdfUploadScreen() {
  const dispatch = useAppDispatch();
  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);
  const hasPdfError = showErrors && !!validationErrors.pdfFile;
  const showPdfOnly = useAppSelector((state) => state.pdf.showPdfOnly);
  const [uploadFile] = useUploadFileMutation();

  const handleImageChange = async (value: string | null) => {
    if (!value) {
      dispatch(setPdfFile(""));
      dispatch(setUploadedPdfFile(null));
      return;
    }

    dispatch(setPdfFile(value));
    dispatch(clearFieldError("pdfFile"));

    const blob = await fetch(value).then((res) => res.blob());
    const file = new File(
      [blob],
      `uploaded-file-${Date.now()}.${blob.type.split("/")[1]}`,
      { type: blob.type },
    );

    const result = await uploadFile(file);
    const uploadedPDF =
      "data" in result
        ? {
            bucketRootUrl: result.data.location.split(
              `/${result.data.bucket}`,
            )[0],
            bytes: result.data.bytes,
            format: result.data.format,
            key: result.data.key,
            publicId: result.data.publicId,
            resourceType: result.data.resourceType,
            storageProvider: result.data.storageProvider,
          }
        : null;

    dispatch(setUploadedPdfFile(uploadedPDF));
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
