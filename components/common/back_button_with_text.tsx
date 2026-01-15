import ArrowLeft from "../../components/icons/arrow-left";
import { useRouter } from "next/navigation";

export default function BackButtonWithText() {
    const router = useRouter();
    
    return (
         <button
            onClick={() => router.back()}
            className="bg-transparent p-2 rounded-[10px] hover:bg-gray-100 flex items-center justify-center gap-[8px]"
            >
            <ArrowLeft className="w-6 h-6 text-gray-700" />
            <p className="text-[16px] text-regular leading-[24px]">Go Back</p>
        </button>
    );
}