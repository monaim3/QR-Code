import Body from "../../components/create/body";
import Footer from "../../components/home/Footer";
import GeneratorHeader from "@/components/generator/Generator_Header";
import Header from "../../components/home/Header"

export default function Home() {
  return (
    <div>
      {/* Desktop header */}
        <GeneratorHeader className="hidden desktop:block"/>
       {/* Mobile header */}
      <div className="block desktop:hidden">
        <Header />
      </div>
      <Body />
      <Footer />
    </div>
  );
}