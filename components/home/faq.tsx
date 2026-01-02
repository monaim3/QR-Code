"use client";
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

class FaqTabItem {
    id: number;
    tabName: string;
    item: FaqItem[];

    constructor(id: number, tabName: string, item: FaqItem[]) {
        this.id = id;
        this.tabName = tabName;
        this.item = item;
    }
}

class FaqItem {
    question: string;
    answer: string;

    constructor(question: string, answer: string) {
        this.question = question;
        this.answer = answer;
    }
}

const FaqData: FaqTabItem[] = [
    new FaqTabItem(1, "Basics",[
        new FaqItem("What is a QR code?","A QR code (Quick Response code) is a type of matrix barcode that can store various types of information, such as URLs, text, or contact details. It can be scanned using a smartphone or QR code reader to quickly access the encoded information."),
        new FaqItem("How do I create a QR code?","To create a QR code, you can use online QR code generators or software applications. Simply input the desired information, customize the design if needed, and generate the QR code. You can then download or print it for use."),
        new FaqItem("Are QR codes free to use?","Yes, generating and using QR codes is generally free. Many online QR code generators offer free services, although some may have premium features or paid options for advanced customization or tracking."),
    ]),
    new FaqTabItem(2, "Generating",[
        new FaqItem("Can I customize the design of my QR code?","Yes, many QR code generators allow you to customize the design of your QR code. You can change colors, add logos or images, and modify the shape of the code to match your branding or personal preferences."),
        new FaqItem("What types of information can I encode in a QR code?","You can encode various types of information in a QR code, including URLs, text, contact details (vCard), email addresses, phone numbers, Wi-Fi credentials, event details, and more. The type of information you choose will depend on your intended use."),
        new FaqItem("How do I test if my QR code works?","To test if your QR code works, simply use a smartphone or QR code reader app to scan the code. Ensure that the encoded information is correctly displayed or that the intended action (e.g., opening a URL) is performed."),
    ]),
    new FaqTabItem(3, "Printing",[
        new FaqItem("What is the best size for printing a QR code?","The optimal size for printing a QR code depends on the scanning distance. As a general guideline, a QR code should be at least 2 x 2 cm (0.8 x 0.8 inches) for close-range scanning. For larger distances, increase the size accordingly to ensure readability."),
        new FaqItem("What file format should I use for printing QR codes?","For printing QR codes, it is recommended to use vector file formats such as SVG or EPS. These formats allow for scalability without loss of quality, ensuring that the QR code remains sharp and clear when printed at different sizes."),
        new FaqItem("How do I ensure my printed QR code is scannable?","To ensure your printed QR code is scannable, make sure to use high contrast colors (e.g., black on white), maintain a quiet zone (margin) around the code, and avoid distortion or damage to the code. Test the printed code with multiple devices to confirm its readability."),
    ]),
];


export default function Faq() {

    const [activeTab, setActiveTab] = React.useState(FaqData[0].id);
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    return (
     <div className="flex flex-col items-center justify-center py-[160px] bg-[#F5F6FA]">
         <h1 className="text-4xl font-bold text-center">
         <span className="text-black pb-4">Frequently asked questions</span>
         </h1>
         <h3 className="text-1xl font-regular text-center px-3 pt-2 pb-8">
         <span className="text-grey">Looking for answers? Check if you can find them here or </span>
         <span className="text-[#01A56D] underline">contact us</span>
      </h3>
      <div 
        ref={scrollContainerRef}
        className="flex gap-3 mb-8 overflow-x-auto pb-2 scrollbar-hide cursor-grab active:cursor-grabbing" 
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        onMouseDown={(e: React.MouseEvent<HTMLDivElement>) => {
        const container = scrollContainerRef.current;
            if (!container) return;
                  
            const startX = e.pageX - container.offsetLeft;
            const scrollLeft = container.scrollLeft;
                  
            const onMouseMove = (moveEvent: MouseEvent) => {
            const x = moveEvent.pageX - container.offsetLeft;
            const walk = (x - startX) * 2;
            container.scrollLeft = scrollLeft - walk;
        };
                  
        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
                  
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);
        }}
        >
        {FaqData.map((faq) => {
        const isActive = activeTab === faq.id;
        return (
                <button
                  key={faq.id}
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => setActiveTab(faq.id)}
                  className={`
                      flex items-center gap-2 px-5 py-3 rounded-lg font-medium
                      transition-all duration-200
                      whitespace-nowrap
                      ${isActive 
                      ? 'bg-[#01A56D] text-white shadow-lg' 
                      : 'bg-white text-slate-200'
                      }
                  `}
                  >
                  <span className={`${isActive ? 'text-white' : 'text-[#79809A]  hover:text-[#01A56D]'} font-sans font-normal`}>{faq.tabName}</span>
                  </button>
        );
     })}
      </div>
      <Accordion
  type="single"
  collapsible
  defaultValue={`item-${FaqData[activeTab - 1].item[0].id}`} // opens first item
>
  {FaqData[activeTab - 1].item.map((item) => (
    <AccordionItem
      key={item.question} // unique key for React
      value={`item-${item.question}`} // unique value for Accordion
      className="bg-white mb-4 rounded-lg w-[752px]"
    >
      <AccordionTrigger className="p-4 text-black font-sans font-bold">
        {item.question}
      </AccordionTrigger>
      <AccordionContent className="p-4 text-gray-600 font-sans font-normal">
        {item.answer}
      </AccordionContent>
    </AccordionItem>
  ))}
</Accordion>

  </div>
);
}