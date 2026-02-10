import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  RiNumber1 as Number1Icon,
  RiNumber2 as Number2Icon,
  RiNumber3 as Number3Icon,
} from "@remixicon/react";
const icons = [
  <Number1Icon key={1} size={32} className="font-extrabold text-white"/>,
  <Number2Icon key={2} size={32} className="font-extrabold text-white" />,
  <Number3Icon key={3} size={32} className="font-extrabold text-white" />,
];

const ProcessStep = ({ number, title, description }: { number: number; title: string; description: string }) => {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-slate-800 rounded-lg">
        {icons[number - 1]}
      </div>
      <h2 className="text-3xl font-bold my-4">{title}</h2>
      <p className="text-center text-lg">{description}</p>
    </div>
  );
};

const Process = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full p-10 my-10">
        <Badge variant="outline" className="text-sm font-medium bg-slate-800/90 text-slate-100">How It Works</Badge>
        <p className="text-2xl">No hidden fees, our quote is all inclusive and straightforward.</p>
        <Separator className="mt-3 w-40! p-0.5 rounded-2xl bg-white/40"/>
      </div>
      <div className="flex flex-col justify-center items-center gap-10 my-10">
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