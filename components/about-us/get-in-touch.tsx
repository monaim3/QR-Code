import Container from "../../components/common/parent-container";
import Cloude from "../../components/icons/cloude";
import ReversCloude from "../../components/icons/revers-cloud";
import Rocket from "../../components/icons/rocket";

export default function GetInTouch() {
    return (
        <div className="relative bg-[var(--Blue)]">
        <Container>
          <div className="block desktop:relative my-[80px] desktop:my-[160px] h-[214px]">
      
            {/* Your clouds */}
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
      
            {/* Centered text */}
            <div
              className="
                flex flex-col items-center justify-center
                h-full w-full
                absolute inset-0
              "
            >
             <Rocket/>
            <p className="text-[24px] desktop:tet-[32px] leading-[32px] desktop:leading-[40px] font-bold text-white mt-[32px]">Get in touch with us</p>
            <p className="text-[16px] leading-[24px] font-regular text-white mt-1 max-w-[500px] text-center mx-auto">
             If you have any questions or concerns, please contact us and our team will reach out to you within a few hours.
            </p>
            <div className="h-[48px] border border-white rounded-[12px] flex items-center justify-center mt-[32px] hover:border-white-500">
             <p className="text-[18px] leading-[26px] font-semibold text-white px-6  py-3">Contact us</p>
            </div>
            </div>
          </div>
        </Container>
      </div>
      
    );
}