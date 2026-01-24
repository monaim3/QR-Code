"use client";
import { useState } from "react";
import QuoatIcon from "../../components/icons/quoat";
import CheckIcon from '@/components/icons/check-icon';
import Star from "../../components/icons/star"

const testimonials = [
  {
    text: "My QR Code definitely met my expectations. Ran into a few bumps customizing my code, but a quick call and they steered me right. Appreciated their prompt assistance!",
    author: "James Lawson",
    role: "Sales Director",
  },
  {
    text: "SmartQR has transformed how we share information with our customers. The analytics feature is incredibly powerful and helps us track engagement effortlessly assistance.",
    author: "Sarah Mitchell",
    role: "Marketing Manager",
  },
  {
    text: "The customization options are endless! I created beautiful branded QR codes for our restaurant menu in minutes. Our customers love the seamless experience assistance.",
    author: "Michael Chen",
    role: "Restaurant Owner",
  },
  {
    text: "Outstanding service and incredible value. The unlimited scans feature means we never have to worry about hitting limits during our busy season assistance do it now at all.",
    author: "Emily Rodriguez",
    role: "Event Coordinator",
  },
];

const features = [
    'Unlimited QR codes',
    'Unlimited QR code scans',
    'Unrestricted customization options',
    'Unlimited access to analytics',
    'Unlimited downloads',
    'Full access to all download formats',
    'Create any type of QR code you need'
];

const reviews = [
  {
    title: "Quick support!",
    text: '“ I owe a thanks to the My QR Code support team. Had a slight hiccup when trying to process a payment, but they were quick to grasp my issue and straighten things out. “',
    user: "Amanda Jones",
    rating: 5,
  },
  {
    title: "Quick support!",
    text: '“ I owe a thanks to the My QR Code support team. Had a slight hiccup when trying to process a payment, but they were quick to grasp my issue and straighten things out. “',
    user: "Amanda Jones",
    rating: 5,
  },
  {
    title: "Quick support!",
    text: '“ I owe a thanks to the My QR Code support team. Had a slight hiccup when trying to process a payment, but they were quick to grasp my issue and straighten things out. “',
    user: "Amanda Jones",
    rating: 5,
  },
 {
    title: "Quick support!",
    text: '“ I owe a thanks to the My QR Code support team. Had a slight hiccup when trying to process a payment, but they were quick to grasp my issue and straighten things out. “',
    user: "Amanda Jones",
    rating: 5,
  },
];

export default function PlanAndPricingRightPannelp() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  return (
    <div className="w-full desktop:w-[456px] flex-shrink-0 flex flex-col items-center justify-start
      bg-[#E7F4ED] rounded-[10px] px-6 desktop:px-14 py-8 desktop:py-8 gap-6 desktop:gap-8">
      
      {/* Heading */}
      <p className="text-[20px] desktop:text-[24px] font-bold text-center text-[var(--Black)] leading-[28px] desktop:leading-[32px]">
        Your QR code is ready!
      </p>

      {/* QR Code Box */}
      <div className="relative w-[254px] h-[270px] desktop:w-[260px] desktop:h-[260px] bg-white rounded-[10px] flex items-center justify-center">
       <img
          src="/images/scan-me.png"
            alt="QR Code"
            className="absolute inset-0 m-auto w-[270px] h-[255px] desktop:w-[260px] desktop:h-[260px] object-cover"
          />
      </div>

      {/* Divider */}
      <div className="w-full">
        <div className="w-full h-[1px] bg-[var(--Boarder-Grey)]"></div>
      </div>

      {/* Quote Icon */}
      <QuoatIcon className="hidden md:block w-8 h-8 desktop:w-10 desktop:h-10" />

       {/* Features for mobile view */}
        <div className="block md:hidden flex flex-col overflow-auto w-full">
          {features.map((feature, index) => (
            <div key={index} className={`flex items-center gap-[16px] h-[24px] ${index === features.length - 1 ? "mb-[0px]" : "mb-[12px]"}`}>
            <CheckIcon fill="var(--Blue)"/>
            <span className="text-gray-700 text-[16px] leading-[24px]">{feature}</span>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="block md:hidden w-full">
          <div className="w-full h-[1px] bg-[var(--Boarder-Grey)]"></div>
        </div>

      {/* Testimonials */}
      <div className="hidden md:block relative flex flex-col items-center justify-center text-center w-full">
        <div className="relative w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out w-full ${
                index === currentTestimonial
                  ? "opacity-100 translate-x-0 relative"
                  : index < currentTestimonial
                  ? "opacity-0 -translate-x-full absolute top-0 left-0 right-0"
                  : "opacity-0 translate-x-full absolute top-0 left-0 right-0"
              } flex flex-col items-center`}
            >
              <p className="text-[var(--Black)] text-[16px] font-regular leading-[24px]font-regular mb-[16px] desktop:mb-[24px] ">
                "{testimonial.text}"
              </p>
              <div>
                <div className="font-medium text-[var(--Black)] text-[14px] desktop:text-[16px] leading-[24px]">
                  {testimonial.author}
                </div>
                <div className="text-[12px] font-regular desktop:text-[14px] text-[var(--Black)] leading-[18px] desktop:leading-[22px] mt-1">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-2 mt-4 desktop:mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-emerald-500 w-6 desktop:w-8"
                  : "bg-gray-300 w-2 desktop:w-2 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>

       {/* Reviews for mobile views */}
      <div className="block md:hidden relative flex flex-col items-center justify-center text-center w-full">
        <div className="relative w-full">
          {reviews.map((review, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out w-full ${
                index === currentTestimonial
                  ? "opacity-100 translate-x-0 relative"
                  : index < currentTestimonial
                  ? "opacity-0 -translate-x-full absolute top-0 left-0 right-0"
                  : "opacity-0 translate-x-full absolute top-0 left-0 right-0"
              } flex flex-col items-center`}
            >
              <h3 className="text-[18px] leading-[24px] font-bold">{review.title}</h3>
              <p className="text-[var(--Black)] text-[16px] font-regular leading-[24px]font-regular mb-[16px] desktop:mb-[24px] pt-[4px]">
                "{review.text}"
              </p>
              <div>
                <div className="font-medium text-[var(--Black)] text-[14px] desktop:text-[16px] leading-[24px]">
                  {review.user}
                </div>
                 <div className="pt-[16px] flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, index) => (
                    <Star key={index} width={24} height={24} />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-2 mt-[32px] desktop:mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "bg-emerald-500 w-6 desktop:w-8"
                  : "bg-gray-300 w-2 desktop:w-2 hover:bg-gray-400"
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>


      {/* Money-back Guarantee */}
      <div className="w-full border-2 border-[var(--Boarder-Grey)] border-dotted p-[24px] rounded-[10px] text-[16px] leading-[24px] text-center item-center justify-center">
        <p className="w-[270px] font-medium mx-auto"> 30-day money-back guarantee</p>
      </div>
    </div>
  );
}
