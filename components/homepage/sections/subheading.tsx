import { Separator } from "@/components/ui/separator";

const Card = ({ text, title }: { text: string; title: string }) => {
  return (
    <div className="flex flex-col items-center p-8">
      <h2 className="text-5xl md:text-6xl py-3 font-semibold text-slate-800">
        {title}
      </h2>
      <p className="text-lg">
        {text}
      </p>
    </div>
  );
}

const Subheading = () => {
  return (
    <div className="max-w-full mx-auto my-10 py-14 grid grid-cols-2 justify-between lg:grid-cols-4 bg-slate-100/30 rounded-lg">
      <div className="flex justify-center border-r-2 border-slate-300">
        <Card title="20+" text="years of experience" />
      </div>
      <div className="flex justify-center border-r-2 border-slate-300">
        <Card title="999+" text="satisfied customers" />
      </div>
      <div className="flex justify-center border-r-2 border-slate-300">
        <Card title="999+" text="moves completed" />
      </div>
      <div className="flex justify-center">
        <Card title="4.8" text="customer rating" />
      </div>
    </div>
  );
}

export default Subheading;