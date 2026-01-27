import Image from "next/image";
import QuoteForm from "../quoteForm";

const Hero = () => {
  return (
    <div>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.png"
          alt="Hero Image"
          fill
          priority
          className="object-cover"
        />
      </div>
      <div className="relative w-full h-196 rounded-md shadow-md">
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-white text-4xl sm:text-5xl font-bold text-center px-4">
            Quality Service At The Best Price
          </h1>
          <QuoteForm />
        </div>
      </div>
    </div>
  );
};
export default Hero;