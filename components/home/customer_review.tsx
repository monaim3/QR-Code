import Image from "next/image";

class CustomerReviewProps {
    customerName: string;
    reviewDate: string;
    title: string;
    subTitle: string;

    constructor(customerName: string, reviewDate: string, title: string, subTitle: string) {
        this.customerName = customerName;
        this.reviewDate = reviewDate;
        this.title = title;
        this.subTitle = subTitle;
    }
}

const CustomerReviews: CustomerReviewProps[] = [
    new CustomerReviewProps("John Doe", "March 15, 2024", "Excellent QR Code Generator", "Using My QR Code has been a smooth experience. The whole process of converting and personalizing QR codes was quick and easy. I used them to get feedback at my event. It worked perfectly for what I wanted!"),
    new CustomerReviewProps("Jane Smith", "April 2, 2024", "Very Useful Tool", '“My QR Code definitely met my expectations. Ran into a few bumps customizing my code, but a quick call and they steered me right. Appreciated their prompt assistance!“'),
    new CustomerReviewProps("Mike Johnson", "May 10, 2024", "Great Features", '“After a long search for the perfect QR code converter, I landed on My QR Code. This platform totally met my expectations. Big shoutout to the team for their work.”'),
];


export default function CustomerReview() {
    return (
        <div className="flex flex-col items-center justify-center py-[160px] bg-white">
            <h1 className="text-4xl font-bold text-center">
            <span className="text-black pb-4">Customer reviews</span>
            </h1>
            <h3 className="text-1.5xl font-regular text-center px-3 pt-2 pb-8">
            <span className="text-black">See what others are saying about SmartQR</span>
           </h3>
           <div className="flex flex-row pt-[56px] gap-4 item-center justify-center">
            {CustomerReviews.map((review, index) => (
                <div key={index} className="h-auto w-[304px] bg-[#F5F6FA] rounded-lg p-[20px] flex flex-col justify-between pl-6 pr-6">
                    <div className="mt-2">
                        <RatingStar />
                    </div>
                    <div>
                        <h4 className="text-sm font-bold text-black mb-2">{review.title}</h4>
                        <p className="text-sm font-regular text-grey">{review.subTitle}</p>
                    </div>
                    <div className="flex flex-row item-center justify-start gap-[12px]">
                        <div className="w-[30px] h-[30px] my-[8px] bg-[#BFD166] rounded-full flex items-center justify-center">
                        <span className="text-white font-normal text-sm">
                            {review.customerName.charAt(0).toUpperCase()}
                        </span>
                        </div>
                        <div className="flex flex-col item-center justify-center">
                        <p className="text-sm font-medium text-black">{review.customerName}</p>
                        <p className="text-sm font-light text-grey">{review.reviewDate}</p>
                        </div>
                    </div>
                </div>
            ))}
           </div>
        </div>
    );
}

function RatingStar() {
  const stars = Array.from({ length: 5 });
  return (
    <div className="flex flex-row gap-[8px]">
        {stars.map((_, i) => (
            <Image
              key={i}
              src="/images/home/star.svg"
              alt="star"
              width={24}  // 4 * 4px = 16px
              height={24}
              className="mr-1"
            />
        ))}
    </div>
  );
}