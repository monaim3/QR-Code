import FourCorner from "../../components/icons/corner";
import QuoatIcon from "../../components/icons/quoat";
import { useState } from 'react';

class AuthFeatures {
  id: number;
  label: string;
  constructor(id: number, label: string) {
    this.id = id;
    this.label = label;
  }
}

const authFeatureList = [
  new AuthFeatures(1, 'Unlimited QR codes'),
  new AuthFeatures(2, 'Unlimited QR code scans'),
  new AuthFeatures(3, 'Unrestricted customization options'),
  new AuthFeatures(4, 'Unlimited access to analytics'),
  new AuthFeatures(5, 'Unlimited downloads'),
  new AuthFeatures(6, 'Full access to all download formats'),
  new AuthFeatures(7, 'Create any type of QR code you need'),
];

const testimonials = [
    {
      text: "My QR Code definitely met my expectations. Ran into a few bumps customizing my code, but a quick call and they steered me right. Appreciated their prompt assistance!",
      author: "James Lawson",
      role: "Sales Director"
    },
    {
      text: "SmartQR has transformed how we share information with our customers. The analytics feature is incredibly powerful and helps us track engagement effortlessly.",
      author: "Sarah Mitchell",
      role: "Marketing Manager"
    },
    {
      text: "The customization options are endless! I created beautiful branded QR codes for our restaurant menu in minutes. Our customers love the seamless experience.",
      author: "Michael Chen",
      role: "Restaurant Owner"
    },
    {
      text: "Outstanding service and incredible value. The unlimited scans feature means we never have to worry about hitting limits during our busy season.",
      author: "Emily Rodriguez",
      role: "Event Coordinator"
    }
  ];

export default function PlanAndPricingRightPannelp() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
    
    return (
        <div className="hidden desktop:flex flex-col w-[456px] h-full max-h-[814px] items-center justify-start bg-[#E7F4ED] rounded-[10px] pt-[32px] px-[56px] pb-[56px] flex-shrink-0 overflow-hidden gap-[32px]">

        {/* Heading */}
        <p className="text-[24px] font-bold leading-[32px] text-center text-[#0A0909] tracking-[0%]">
          Your QR code is ready!
        </p>

        {/* QR Code Box */}
        <div className="relative w-[260px] h-[260px] bg-white rounded-[10px] flex items-center justify-center">
          <div className="relative w-[220px] h-[220px]">
            <FourCorner className="absolute inset-0" />
            <img
              src="/images/scan-me.svg"
              alt="QR Code"
              className="absolute inset-0 m-auto w-[180px] h-[180px] object-contain"
            />
          </div>
        </div>

      <div className="w-full px-[0px]">
        <div className="w-full h-[1px] bg-[#CDD0DB80]"></div>
      </div>
      <div>
         <QuoatIcon/>
      </div>
     {/* Testimonial */}
      <div className="relative flex flex-col items-center justify-center text-center">
        <div className="relative w-full">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`transition-all duration-500 ease-in-out w-full ${
                index === currentTestimonial
                  ? 'opacity-100 translate-x-0 relative'
                  : index < currentTestimonial
                  ? 'opacity-0 -translate-x-full absolute top-0 left-0 right-0'
                  : 'opacity-0 translate-x-full absolute top-0 left-0 right-0'
              } flex flex-col items-center`}
            >
              {/* Testimonial text */}
              <p className="text-[var(--Black)] text-[16px] leading-[24px] font-regular mb-[24px] leading-relaxed max-w-[320px]">
                "{testimonial.text}"
              </p>

              {/* Author */}
              <div>
                <div className="font-medium text-[var(--Black)] text-[16px] leading-[24px]">
                  {testimonial.author}
                </div>
                <div className="text-[14px] text-[var(--Black)] leading-[22px] mt-1">
                  {testimonial.role}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonial Dots */}
        <div className="flex justify-center space-x-2 mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? 'bg-emerald-500 w-8'
                  : 'bg-gray-300 w-2 hover:bg-gray-400'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
      <div className="border-2 border-gray-400 border-dotted px-[37px] py-[24px] rounded-[10px] text-[16px] font-bold leading-[24px]">
        30-day money-back guarantee
      </div>
    </div>
    );
}