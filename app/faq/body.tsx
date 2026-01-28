import Container from "../../components/common/parent-container";
import Link from 'next/link';
import { ChevronRight } from "lucide-react";
import Faq from "../../components/home/faq";
import GetInTouch from "../../components/about-us/get-in-touch";


export default function FaqBody() {
    return (
        <div className="flex flex-col">
        {/* Breadcrumb */}
        <div className="bg-white">
        <Container>
        <div className="flex h-[54px] w-full items-center justify-start gap-2">
            <Link
            href="/#"
            className="text-[14px] font-regular leading-[22px] text-[var(--Black)]"
          >
            My QR Code
          </Link>
          <ChevronRight className="w-4 h-4 text-[#79809A]" />
          <Link
            href="/#"
            className="text-[14px] font-regular leading-[22px] text-[var(--Blue)]"
          >
            FAQ
          </Link>
        </div>
        </Container>
        </div> 
        <Faq/>
        <GetInTouch/>
    </div>
    );
}