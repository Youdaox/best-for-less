import Image from "next/image";
import QuoteForm from "../quoteForm";

const HeroTextBlock = () => {
  return (
    <div className="max-w-3xl">
      <h1 className="text-white text-4xl sm:text-5xl font-bold px-4">
        Quality Service At The Best Price
      </h1>
      <p className="text-white text-md sm:text-lg mt-4 px-4">
        Best for Less mover is a Man with a Van business with over 20 years of professionalism. We are equipped with a team of experienced workers and a 20 cubic metre truck ready to handle your move. We give our customers the most competitive prices in the market for the smoothest experience. Choose us for your next move.
      </p>
    </div>
  );
}

const Hero = () => {
  return (
    <div className="mb-32">
      <div>
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
          <HeroTextBlock />
          <QuoteForm />
        </div>
      </div>
    </div>
  );
};
export default Hero;