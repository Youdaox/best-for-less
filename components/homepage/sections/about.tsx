import { Separator } from "@radix-ui/react-separator";

const About = () => {
  return (
    <div className="rounded-lg grid grid-cols-1 lg:grid-cols-2 pt-10 lg:px-10 my-10 gap-7">
      <div>
        <Separator className="my-3 max-w-70 p-0.5 rounded-2xl bg-black/20"/>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-800 my-6">Best for Less mover is a Man with a Van business with over 20 years of professionalism.</h1>
      </div>
      <div className="flex flex-col gap-6">
        <p className="text-lg leading-tight">
          We are equipped with a team of experienced workers and a 20 cubic metre truck ready to handle your move. We give our customers the most competitive prices in the market for the smoothest experience. Whether you are moving locally or long-distance, we have the expertise and resources to make your move a success. Our commitment to customer satisfaction means that we go above and beyond to ensure that your belongings are handled with care and delivered on time. Choose Best for Less Mover for a stress-free and affordable moving experience.
        </p>
        <p className="text-lg leading-tight">
          We are equipped with a team of experienced workers and a 20 cubic metre truck ready to handle your move. We give our customers the most competitive prices in the market for the smoothest experience. Whether you are moving locally or long-distance, we have the expertise and resources to make your move a success. Our commitment to customer satisfaction means that we go above and beyond to ensure that your belongings are handled with care and delivered on time. Choose Best for Less Mover for a stress-free and affordable moving experience.
        </p>
      </div>
    </div>
  );
};

export default About;