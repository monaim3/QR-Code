import Header from "../components/home/Header";
import Body from "../components/home/Body";
import Footer from "../components/home/Footer";
import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
      <Header />
      <Body />
      <Footer />
    </Fragment>
  );
}