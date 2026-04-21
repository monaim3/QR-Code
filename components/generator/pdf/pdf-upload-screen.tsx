import Accordion from "@/components/common/Accordion";
import PdfUpload from "@/components/generator/pdf/pdf-upload";
import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { setPdfFile } from "@/store/slices/pdf-slice";

export default function PdfUploadScreen() {
  const dispatch = useAppDispatch();
  const validationErrors = useAppSelector((state) => state.validation.errors);
  const showErrors = useAppSelector((state) => state.validation.showErrors);
  const hasPdfError = showErrors && !!validationErrors.pdfFile;

  const handleImageChange = (value: string | null) => {
    dispatch(setPdfFile(value || ""));
  };

//   const handlePreview = () => {
//     dispatch(setIsPreviewWelcomeScreen(true));
//   };

  return (
    <div className="w-full">
      <Accordion
        title="PDF file*"
        description="Upload your PDF file"
        defaultOpen={true}
        forceOpen={hasPdfError}
      >
        <div className="flex flex-col gap-1">
          <PdfUpload
            onCustomLogoUpload={handleImageChange}
            //onPreview={handlePreview}
          />
          {hasPdfError && (
            <p
              className="text-sm text-red-500"
              data-validation-error="true"
            >
              {validationErrors.pdfFile}
            </p>
          )}
        </div>
      </Accordion>
    </div>
  );
}
