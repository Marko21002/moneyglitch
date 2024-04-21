import Image from "next/image";
import Hero from "./components/hero";
import Feature from "./components/feature-creator";
import Space from "./components/space";
import Faq from "./components/faq";
import { TestText } from "./components/TestText";


export default function Home() {
  return (
    <main>
     <Hero></Hero>
     <Space></Space>
      <Feature></Feature>
      
      <Faq></Faq>
    </main>
  );
}
