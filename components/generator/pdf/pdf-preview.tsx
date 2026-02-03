import { ScrollArea } from "@/components/ui/scroll-area";
import { useAppSelector } from "@/store/hooks";
import Image from "next/image";
import { Globe } from "lucide-react";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setIsPreviewWelcomeScreen } from "@/store/slices/pdf-slice";
import dynamic from "next/dynamic";

const PdfViewer = dynamic(
  () => import("@/components/generator/pdf/pdf-renderer"),
  { ssr: false }
);

export default function PdfPreView(){
  const pdf = useAppSelector((state) => state.pdf);
  const dispatch = useDispatch();

  const textColor = () => {
    switch (pdf.primaryColor) {
      case "#ECEDF1":
        return "text-[var(--Black)]";
      case "#ECECF0":
        return "text-[var(--Black)]";
      case "#DAEBF6":
        return "text-[var(--Black)]";
      case "#FFFFFF":
        return "text-[var(--Black)]";
      default:
        return "text-white";
    }
  };

  const buttonTextColor = () => {
     switch (pdf.secondaryColor) {
      case "#232321":
        return "text-[White]";
      case "#ECECF0":
        return "text-[var(--Black)]";
      case "#DAEBF6":
        return "text-[var(--Black)]";
      case "#FFFFFF":
        return "text-[var(--Black)]";
      default:
        return "text-white";
    }
  }

   useEffect(() => {
      setTimeout(() => {
        dispatch(setIsPreviewWelcomeScreen(false));
      }, 1000);
    }, [pdf.isPreviewWelcomeScreen, dispatch]);

    return (
        <ScrollArea className="w-full h-full relative">
            <div
              className={`w-full h-full bottom-0 left-0 flex justify-center items-center bg-white z-[3] absolute transition-transform duration-500 ease-in-out ${pdf.isPreviewWelcomeScreen ? "translate-y-0" : "translate-y-full"}`}
              >
              {pdf.welcomeScreen && (
                <Image
                  src={pdf.welcomeScreen}
                  alt="Background"
                  width={200}
                  height={200}
                  className="object-contain"
                />
              )}
            </div>
            <div className="absolute inset-0 w-full h-1/2"
             style={{ backgroundColor: pdf.primaryColor }}
            />
            <div className="absolute flex flex-col items-center justify-center w-full max-h top-[66px] px-[20px]">
                <p className={`text-[10px] leading-[16px] font-regular ${textColor()}`}>
                    {pdf.defaultState ? "Top offers" : pdf.documentInfo.companyName}
                </p>
                <p className={`text-[18px] leading-[26px] font-bold ${textColor()}`}>
                    {pdf.defaultState ? "Fresh Corner" : pdf.documentInfo.title}
                </p>
                <p className={`text-[10px] leading-[16px] font-regular ${textColor()} text-center`}>
                  {pdf.defaultState ? "Browse our top offers and handpicked highlights in this PDF." : pdf.documentInfo.fileDescription}
                </p>
                <div className="w-full h-[314px] flex flex-col rounded-[6px] p-2 shadow-card bg-white mt-[24px]">
                   <div className="flex items-start h-full justify-start overflow-hidden">
                     {pdf.defaultState ? 
                   (<Image 
                    src="/images/sample-pdf.png" 
                    alt="My Photo" 
                    width={300} 
                    height={200} 
                    />) : 
                    (pdf.pdfFile && <PdfViewer file={pdf.pdfFile} />)}
                   </div>
                    <div className={`w-full h-[40px] flex items-center justify-center rounded-[6px] mt-2 ${
                        pdf.secondaryColor === "#FFFFFF" ? "border border-gray-400" : ""
                    } flex-shrink-0`}
                    style={{ backgroundColor: pdf.secondaryColor }}
                    >
                    <p className={`text-[12px] leading-[20px] font-regular ${buttonTextColor()}`}>
                        See PDF
                    </p>
                    </div>
                </div>
                <div className="w-full flex items-center justify-center max-h gap-2 mt-[24px] mb-[29px]">
                   {(pdf.defaultState || pdf.documentInfo.website) && <Globe className="h-4 w-4"/>}
                    <p className="text-[10px] leading-[16px] font-regular text-[var(--Black)]">
                       {pdf.defaultState ? "www.fashionista.com" : pdf.documentInfo.website}
                    </p>
                </div>
            </div>
             <div>
            </div>
        </ScrollArea>
    );
}