import About from "@/components/homepage/sections/about";
import Hero from "@/components/homepage/sections/hero";
import Process from "@/components/homepage/sections/process";
import Services from "@/components/homepage/sections/services";
import Subheading from "@/components/homepage/sections/subheading";

export default function Home() {
  return (
    <div>
      <Hero />
      <Subheading />
      <div className="container mx-auto flex justify-center px-12 flex-col flex-1">
        <About />
      </div>
      <div className="container mx-auto flex justify-center px-12 flex-col flex-1">
        <Services />
      </div>
    </div>
  );
}
