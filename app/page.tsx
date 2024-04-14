import Image from "next/image";
import Hero from "./components/hero";
import Feature from "./components/feature-creator";
import Space from "./components/space";


export default function Home() {
  return (
    <main>
     <Hero></Hero>
     <Space></Space>
      <Feature></Feature>
    </main>
  );
}
