import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import { CalendarCheck2, Mails, Truck } from "lucide-react";

const ProcessStep = ({ number, title, description }: { number: string; title: string; description: string }) => {
  return (
    <div className="flex flex-col max-w-md">
      <h1 className="text-5xl lg:text-8xl font-bold">{number}</h1>
      <h2 className="text-3xl font-bold my-4">{title}</h2>
      <p className="text-wrap text-md sm:text-lg text-slate-500">{description}</p>
    </div>
  );
};

const MobileProcess = () => {
  return (
    <ScrollArea className="rounded-md border whitespace-nowrap">
      <div className="flex space-x-4 p-4">
        <div className="w-sm items-center bg-zinc-100 rounded-xl shadow-xl border-slate-800/20 border px-4 py-8">
          <Mails className="w-12 h-12"/>
          <ProcessStep
            number="1"
            title="Get a Quote"
            description="Fill out our simple quote form with your moving details to receive a personalized estimate. Our team will review your information and provide you with a quote tailored to your specific needs. Our quotes are all inclusive, so you can trust that there are no hidden fees or surprises."
          />
        </div>
        <div className="w-sm items-center bg-zinc-100 rounded-xl shadow-xl border-slate-800/20 border px-4 py-8">
          <CalendarCheck2 className="w-12 h-12"/>
          <ProcessStep
            number="2"
            title="Schedule Your Move"
            description="Choose a convenient date and time for your move, and our team will work with you to ensure a smooth scheduling process. We strive to make the scheduling process as easy and flexible as possible to accommodate your needs."
          />
        </div>
        <div className="w-sm items-center bg-zinc-100 rounded-xl shadow-xl border-slate-800/20 border px-4 py-8">
          <Truck className="w-12 h-12"/>
          <ProcessStep
            number="3"
            title="Relax and Enjoy"
            description="On moving day, our professional movers will handle all the heavy lifting and logistics, allowing you to relax and enjoy a stress-free moving experience. We take care of everything so you can focus on settling into your new home."
          />
        </div>
      </div>
      <ScrollBar orientation="horizontal" />
    </ScrollArea>
  );
}

const Process = () => {
  return (
    <div>
      <div className="flex flex-col items-center w-full p-8">
        <Badge variant="outline" className="text-sm font-medium bg-slate-800/90 text-slate-100">How It Works</Badge>
        <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-800 mb-4 my-2">Our Simple Process</h1>
        <p className="text-xl">No hidden fees, our quote is all inclusive and straightforward.</p>
        <Separator className="mt-3 w-40! p-0.5 rounded-2xl bg-white/40"/>
      </div>
      <div className="hidden sm:flex flex-col max-w-4xl mx-auto">
        <div className="flex flex-row my-10 justify-between items-end bg-zinc-100 rounded-xl shadow-xl border-slate-800/20 border p-10">
          <ProcessStep
            number="1"
            title="Get a Quote"
            description="Fill out our simple quote form with your moving details to receive a personalized estimate. Our team will review your information and provide you with a quote tailored to your specific needs. Our quotes are all inclusive, so you can trust that there are no hidden fees or surprises."
          />
          <Mails className="w-48 h-48" />
        </div>
        <div className="flex flex-row my-10 justify-between items-end bg-zinc-100 rounded-xl shadow-xl border-slate-800/20 border p-10">
          <CalendarCheck2 className="w-48 h-48" />
          <ProcessStep
            number="2"
            title="Schedule Your Move"
            description="Choose a convenient date and time for your move, and our team will work with you to ensure a smooth scheduling process. We strive to make the scheduling process as easy and flexible as possible to accommodate your needs."
          />
        </div>
        <div className="flex flex-row my-10 justify-between items-end bg-zinc-100 rounded-xl shadow-xl border-slate-800/20 border p-10">
          <ProcessStep
            number="3"
            title="Relax and Enjoy"
            description="On moving day, our professional movers will handle all the heavy lifting and logistics, allowing you to relax and enjoy a stress-free moving experience. We take care of everything so you can focus on settling into your new home."
          />
          <Truck className="w-48 h-48" />
        </div>
      </div>
      <div className="sm:hidden">
        <MobileProcess />
      </div>
    </div>
  );
};

export default Process;