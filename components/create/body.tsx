import QrInstraction from "../../components/home/qr_instraction";
import QrTypes from "../../components/home/qr_types";
import Faq from "../../components/home/faq";
import CustomerReview from "../../components/home/customer_review";
import GeneratorPage from "../../app/generator/page"

export default function Body() {
  return (
   <main>
   {/* {<Hero />} */}
   <GeneratorPage/>
   <QrInstraction />
   <QrTypes/>
   <Faq/>
   <CustomerReview/>
   </main>
  );
}