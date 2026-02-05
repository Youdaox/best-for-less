import About from "@/components/homepage/sections/about";
import Faq from "@/components/homepage/sections/faq";
import Hero from "@/components/homepage/sections/hero";
import Process from "@/components/homepage/sections/process";
import Services from "@/components/homepage/sections/services";
import Subheading from "@/components/homepage/sections/subheading";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto flex justify-center px-12 flex-col flex-1">
        <About />
      </div>
      <Process />
      <Subheading />
      <div className="container mx-auto flex justify-center px-12 flex-col flex-1">
        <Services />
        <Faq />
      </div>
    </div>
  );
}
