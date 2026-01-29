import Image from "next/image";
import QuoteForm from "../quoteForm";

const HeroTextBlock = () => {
  return (
    <div>
      <div className="max-w-2xl">
        <h1 className="text-white text-5xl md:text-7xl font-extrabold px-4 max-w-md">
          Quality Service At The Best Price
        </h1>
      </div>

      <div className="max-w-2xl">
        <h2 className="text-white text-2xl md:text-2xl font-semibold mt-4 px-4 italic">
          &quot;For a <span className="bg-yellow-300/10 px-2 py-1 rounded"> Stress-free</span> move, choose Best for Less Mover!&quot;
        </h2>

        <p className="text-white text-md font-semibold mt-4 px-4 leading-tight">
          Best for Less mover is a Man with a Van business with over 20 years of professionalism. We are equipped with a team of experienced workers and a 20 cubic metre truck ready to handle your move. We give our customers the most competitive prices in the market for the smoothest experience. Get a free quote today.
        </p>
      </div>
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
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 flex items-center justify-center mt-20">
          <HeroTextBlock />
          <QuoteForm />
        </div>
      </div>
    </div>
  );
};
export default Hero;