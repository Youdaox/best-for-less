import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
const PricingCard = ({ title, price, mostPopular }: { title: string, price: string, mostPopular?: boolean }) => {
  return (
    <div className="max-w-sm w-full border p-4 shadow-sm rounded-lg">

      {mostPopular && <Badge variant="outline" className="absolute translate-x-30 -translate-y-8 text-sm font-medium bg-zinc-500 text-slate-100">Most Popular</Badge>}
      <h2 className="text-2xl font-semibold text-center mb-4">{title}</h2>
      <h2 className="text-center text-lg text-slate-600">Starting at ${price} p/hr*</h2>
      <Button variant="outline" className="w-full py-6 rounded-full text-md cursor-pointer my-4">Get a Personalized Quote</Button>
      <ul className="space-y-2 mx-4 mt-4">
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✓</span>
          <span>Professional & Experienced Team</span>
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✓</span>
          <span>Includes moving blankets</span>
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✓</span>
          <span>Flexible Scheduling</span>
        </li>
        <li className="flex items-center">
          <span className="text-green-500 mr-2">✓</span>
          <span>Fully Insured Moves</span>
        </li>
      </ul>
    </div>
  )
}

const Pricing = () => {
  return (
    <div className="">
      <div className="flex flex-col items-center w-full p-10">
        <h1 className="text-3xl lg:text-5xl font-bold text-slate-800 my-6">AFFORDABLE MOVING RATES</h1>
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <PricingCard title="1 man and a truck" price="199" />
        <PricingCard title="2 men and a truck" price="299" mostPopular={true} />
        <PricingCard title="3 men and a truck" price="399" />
      </div>
      <p className="text-center text-slate-600 mt-12">*Prices do not include call out fee, we charge a fixed call-out fee of $50 for all moves. Prices may vary depending on the distance and floor level.</p>
    </div>
  )
}

export default Pricing;