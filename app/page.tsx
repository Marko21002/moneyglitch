import Image from "next/image";
import Hero from "./components/hero";
import Feature from "./components/feature-creator";


export default function Home() {
  return (
    <main>
     <Hero></Hero>
      <Feature></Feature>
    </main>
  );
}
