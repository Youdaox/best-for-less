import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { RiSurveyFill } from "@remixicon/react";

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-9xl font-bold">{number}</h1>
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
        <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-800 my-6">Our Simple Process</h1>
        <p className="text-2xl">No hidden fees, our quote is all inclusive and straightforward.</p>
        <Separator className="mt-3 w-40! p-0.5 rounded-2xl bg-white/40"/>
      </div>
      <div className="flex flex-col max-w-4xl mx-auto my-10">
        <div className="flex flex-row max-w-3xl my-10">
          <ProcessStep
            number="1"
            title="Get a Quote"
            description="Fill out our simple quote form with your moving details to receive a personalized estimate."
          />
          <RiSurveyFill size={140}/>
        </div>
        <div className="flex flex-row max-w-3xl my-10">
          <ProcessStep
            number="2"
            title="Schedule Your Move"
            description="Choose a convenient date and time for your move, and we'll handle the rest."
          />
        </div>
        <div className="flex flex-row max-w-3xl my-10 gap-60">
          <ProcessStep
            number="3"
            title="Relax and Enjoy"
            description="Sit back and relax while our professional team takes care of your move efficiently and safely."
          />
        </div>
      </div>
    </div>
  );
};

export default Process;