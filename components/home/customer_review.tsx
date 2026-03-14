import Container from "@/components/common/parent-container";
import Image from "next/image";

class CustomerReviewProps {
  customerName: string;
  reviewDate: string;
  title: string;
  subTitle: string;

  constructor(
    customerName: string,
    reviewDate: string,
    title: string,
    subTitle: string,
  ) {
    this.customerName = customerName;
    this.reviewDate = reviewDate;
    this.title = title;
    this.subTitle = subTitle;
  }
}

const CustomerReviews: CustomerReviewProps[] = [
  new CustomerReviewProps(
    "James Lawson",
    "23/12/25",
    "Perfect QR code converter!",
    "“Using Smart QR Code has been a smooth experience. The whole process of converting and personalizing QR codes was quick and easy. I used them to get feedback at my event. It worked perfectly for what I wanted!“",
  ),
  new CustomerReviewProps(
    "Emma Thompson",
    "23/12/25",
    "Perfect QR code converter!",
    "“Smart QR Code definitely met my expectations. Ran into a few bumps customizing my code, but a quick call and they steered me right. Appreciated their prompt assistance!“",
  ),
  new CustomerReviewProps(
    "Lily Brown",
    "23/12/25",
    "Perfect QR code converter!",
    "“After a long search for the perfect QR code converter, I landed on Smart QR Code. This platform totally met my expectations. Big shoutout to the team for their work.”",
  ),
];

export default function CustomerReview() {
  return (
    <section className="bg-white desktop:py-40 py-16">
      <Container>
        <div className="flex flex-col items-center justify-center gap-1 default:gap-2 mb-10 desktop:mb-14">
          <h2 className="font-bold text-center text-[24px] leading-8 desktop:text-[32px] desktop:leading-10 text-[var(--Black)]">
            Customer reviews
          </h2>
          <p className="text-[16px] leading-[24px] font-regular text-center text-[var(--Dark-gray)]">
            See what others are saying about QRCenter
          </p>
        </div>
        <div className="grid grid-cols-1 desktop:grid-cols-3 gap-8">
          {CustomerReviews.map((review, index) => (
            <div
              key={index}
              className="bg-[#F5F6FA] rounded-[12px] p-6 desktop:p-10 flex flex-col justify-between gap-6 desktop:gap-8"
            >
              <div className="flex flex-col gap-4 desktop:gap-6">
                <RatingStar />
                <p className="text-[16px] leading-[24px] font-regular text-[var(--Dark-gray)]">
                  <span className="text-[18px] leading-[26px] font-bold text-[var(--Black)] block mb-2">
                    {review.title}
                  </span>
                  {review.subTitle}
                </p>
              </div>
              <div className="flex flex-row justify-start items-center gap-3">
                <div className="w-[46px] h-[46px] rounded-full bg-[#BFD166] flex items-center justify-center">
                  <span className="text-white font-bold text-[16px] leading-[24px]">
                    {review.customerName.charAt(0)}
                  </span>
                </div>

                <div className="flex flex-col justify-center items-start">
                  <div className="text-[16px] leading-[24px] font-medium text-[var(--Black)]">
                    {review.customerName}
                  </div>
                  <div className="text-[14px] leading-[22px] font-light text-[var(--Dark-gray)]">
                    {review.reviewDate}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}

function RatingStar() {
  const stars = Array.from({ length: 5 });
  return (
    <div className="flex flex-row gap-[9px]">
      {stars.map((_, i) => (
        <svg key={i} width="21" height="20" viewBox="0 0 21 20" fill="none">
          <path
            d="M4.6585 19.455C4.3985 19.455 4.1435 19.375 3.9235 19.215C3.5335 18.935 3.3435 18.465 3.4235 17.99L4.3635 12.5L0.3785 8.615C0.0334997 8.28 -0.0865004 7.79 0.0634996 7.335C0.2135 6.88 0.5985 6.555 1.0735 6.485L6.5835 5.685L9.0485 0.695C9.2585 0.265 9.6885 0 10.1685 0C10.6485 0 11.0785 0.265 11.2885 0.695L13.7535 5.685L19.2635 6.485C19.7385 6.555 20.1235 6.88 20.2735 7.335C20.4235 7.79 20.2985 8.28 19.9585 8.615L15.9735 12.5L16.9135 17.985C16.9935 18.46 16.8035 18.925 16.4135 19.21C16.0235 19.49 15.5235 19.525 15.0985 19.305L10.1685 16.715L5.2385 19.305C5.0535 19.4 4.8535 19.45 4.6535 19.45L4.6585 19.455Z"
            fill="#FEBE4F"
          />
        </svg>
      ))}
    </div>
  );
}
