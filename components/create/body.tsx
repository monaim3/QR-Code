import QrInstraction from "../../components/home/qr_instraction";
import QrTypes from "../../components/home/qr_types";
import Faq from "../../components/home/faq";
import CustomerReview from "../../components/home/customer_review";
import GeneratorPage from "../../app/generator/page"

export default function Body() {
  return (
   <main>
   {/* {<Hero />} */}
   <section className="generator-create-page">
   <GeneratorPage showArrow={true} />
   </section>
   <QrInstraction />
   <QrTypes/>
   <Faq/>
   <CustomerReview/>
   </main>
  );
}