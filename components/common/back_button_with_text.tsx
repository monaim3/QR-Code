import { Interface } from "readline";
import ArrowLeft from "../../components/icons/arrow-left";
import { useRouter } from "next/navigation";

interface LanguageSelectorProps {
  title?: string;
}

export default function BackButtonWithText({title = 'Go Back'}: LanguageSelectorProps) {
    const router = useRouter();
    
    return (
         <button
            onClick={() => router.back()}
            className="bg-transparent p-2 rounded-[10px] hover:bg-gray-100 flex items-center justify-center gap-[8px]"
            >
            <ArrowLeft className="w-[16px] h-[16px] text-gray-700" />
            <p className="text-[16px] text-regular leading-[24px]">{title}</p>
        </button>
    );
}