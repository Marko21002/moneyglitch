import Image from "next/image";
import Hero from "./components/hero";
import Feature from "./components/feature-creator";
import Space from "./components/space";
import Faq from "./components/faq";
import Cta from "./components/cta";
import FAQ from "./components/faq";
import MarqueeDemo from "./components/reviews";




export default function Home() {
  return (
    <main>
     <Hero></Hero>
     {/* <MarqueeDemo></MarqueeDemo>   */}
     <Space></Space>
      <Feature></Feature>
      <Cta></Cta>
      <FAQ></FAQ>
      
    </main>
  );
}
