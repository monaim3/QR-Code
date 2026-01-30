import Accordion from "@/components/common/Accordion";
import PdfUpload from "@/components/generator/pdf/pdf-upload";
import { useAppDispatch } from "@/store/hooks";
import { setPdfFile } from "@/store/slices/pdf-slice";

export default function PdfUploadScreen() {
  const dispatch = useAppDispatch();

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
      >
        <PdfUpload
          onCustomLogoUpload={handleImageChange}
          //onPreview={handlePreview}
        />
      </Accordion>
    </div>
  );
}
