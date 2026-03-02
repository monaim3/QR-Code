import Link from "next/link";
import Container from "../../components/common/parent-container";
import Cloude from "../../components/icons/cloude";
import ReversCloude from "../../components/icons/revers-cloud";
import Rocket from "../../components/icons/rocket";


export default function GetInTouch() {
    return (
        <section className="relative bg-[var(--Blue)]">
        <Container>
          <div className="block desktop:relative py-[80px] desktop:py-[160px]">
      
            {/* Your clouds */}
            <div className="absolute w-full left-1/2 top-1/2 h-[210px] -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none">
              <div className="mobile:hidden desktop:absolute top-0 left-0">
                <Cloude width={73} height={23}/>
              </div>
              <div className="mobile:hidden desktop:absolute bottom-0 left-[91px]">
                <Cloude width={166} height={54}/>
              </div>
              <div className="mobile:hidden desktop:absolute top-0 right-0">
                <ReversCloude width={103} height={33}/>
              </div>
              <div className="mobile:hidden desktop:absolute bottom-[27px] right-[161px]">
                <Cloude width={73} height={23}/>
              </div>
            </div>
      
            {/* Centered text */}
            <div
              className="relative flex flex-col items-center justify-center w-full gap-8  max-w-[500px] mx-auto text-center"
            >
              <div className="flex-shrink-0">
                <Rocket/>
              </div>
              <div className="flex flex-col gap-1">
                <h2 className="text-[24px] desktop:text-[32px] leading-[32px] desktop:leading-[40px] font-bold text-white mb-1">Get in touch with us</h2>
                <p className="text-[16px] leading-[24px] font-regular text-white">
                  If you have any questions or concerns, please contact us and our team will reach out to you within a few hours.
                </p>
              </div>
            <Link
              href="/contact-us"
            className="border-2 border-white rounded-[12px] flex items-center justify-center hover:bg-white hover:text-[var(--Blue)] text-[18px] leading-[26px] font-semibold text-white px-6 py-2.5 transition-all duration-300">
              Contact us
            </Link>
            </div>
          </div>
        </Container>
      </section>
      
    );
}