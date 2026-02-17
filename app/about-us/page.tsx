import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import AboutUsBody from "./body";
import { Suspense } from "react";

export default function AboutUsPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header showOptions={true} className="desktop:bg-white" />
      <AboutUsBody />
      <Footer />
    </Suspense>
  );
}
