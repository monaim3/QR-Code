import { Suspense } from "react";
import Header from "../../components/home/Header";
import Footer from "../../components/home/Footer";
import ErrorBody from "./body";

export default function Error() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header showOptions={true} />
      <ErrorBody />
      <Footer />
    </Suspense>
  );
}
