import Image from "next/image";
import Hero from "./components/hero";
import Space from "./components/space";
import Feature from "./components/feature-creator";


export default function Home() {
  return (
    <main>
     <Hero></Hero>
     <Space></Space>
      <Feature></Feature>
    </main>
  );
}
