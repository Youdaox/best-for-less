import { Separator } from "@radix-ui/react-separator";
import {
  RiNumber1 as Number1Icon,
  RiNumber2 as Number2Icon,
  RiNumber3 as Number3Icon,
} from "@remixicon/react";
const icons = [
  <Number1Icon key={1} size={32} className="text-slate-800" />,
  <Number2Icon key={2} size={32} className="text-slate-800" />,
  <Number3Icon key={3} size={32} className="text-slate-800" />,
];

const ProcessStep = ({ number, title, description }: { number: number; title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center max-w-sm">
      {icons[number - 1]}
      <h2 className="text-3xl font-bold my-4">{title}</h2>
      <p className="text-center text-lg">{description}</p>
    </div>
  );
};

const Process = () => {
  return (
    <div>
      <div className="bg-slate-800 flex flex-col items-center w-full p-10 my-10">
        <Separator className="mt-3 w-40 p-0.5 rounded-2xl bg-white/40"/>
        <h1 className="text-5xl font-extrabold text-white my-6"> How it works</h1>
        <p className="text-2xl text-white">No hidden fees, our quote is all inclusive and straightforward.</p>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10 my-10">
        <ProcessStep
          number={1}
          title="Get a Quote"
          description="Fill out our simple quote form with your moving details to receive a personalized estimate."
        />
        <ProcessStep
          number={2}
          title="Schedule Your Move"
          description="Choose a convenient date and time for your move, and we'll handle the rest."
        />
        <ProcessStep
          number={3}
          title="Relax and Enjoy"
          description="Sit back and relax while our professional team takes care of your move efficiently and safely."
        />
      </div>
    </div>
  );
};

export default Process;