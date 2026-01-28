import Container from "../common/parent-container";
import Message from "../icons/message";

export default function MostCommonQuestion() {
    return (
        <div className="Flex flex-col bg-[var(--Blue)] items-center justify-center">
        <Container>
          <div className="block desktop:relative my-[80px] desktop:my-[160px] h-[214px]">
    
      
            {/* Centered text */}
            <div
              className="
                flex flex-col items-center justify-center
                h-full w-full
              "
            >
             <Message className="flex-shrink-0"/>
            <p className="text-[24px] desktop:tet-[32px] leading-[32px] desktop:leading-[40px] font-bold text-white mt-[32px]">Most common questions about our services</p>
            <p className="text-[16px] leading-[24px] font-regular text-white max-w-[500px] text-center mx-auto">
            Get answers to your questions about QR codes
            </p>
            <div className="h-[48px] border border-white rounded-[12px] flex items-center justify-center mt-[32px] hover:border-white-500">
             <p className="text-[18px] leading-[26px] font-semibold text-white px-6  py-3">See more</p>
            </div>
            </div>
          </div>
        </Container>
      </div>
      
    );
}