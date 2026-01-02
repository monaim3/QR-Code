import Hero from "./hero";
import QrInstraction from "./qr_instraction";
import QrTypes from "./qr_types";
import Faq from "./faq";
import CustomerReview from "./customer_review";

export default function Body() {
  return (
   <>
   <Hero />
   <QrInstraction />
   <QrTypes/>
    <Faq/>
    <CustomerReview/>
   </>
  );
}