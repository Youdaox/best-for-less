import Hero from "@/components/homepage/sections/hero";
import Services from "@/components/homepage/sections/services";

export default function Home() {
  return (
    <div>
      <Hero />
      <div className="container mx-auto flex justify-center px-12 flex-col flex-1">
        <Services />
      </div>
    </div>
  );
}
