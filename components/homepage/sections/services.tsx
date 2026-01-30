import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Button } from "../../ui/button";
import { House, Van, Trash2, Armchair, Briefcase, Piano } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const components = [
  { title: "Office Movers", description: "We provide top-notch office moving services to ensure a smooth transition for your business.", icon: "Briefcase"},
  { title: "Furniture Movers", description: "Our expert team handles your furniture with care, ensuring safe and efficient moves.", icon: "Armchair" },
  { title: "Trademe Pickup", description: "Convenient pickup services for your Trademe purchases, delivered right to your doorstep.", icon: "Van" },
  { title: "House Movers", description: "Reliable house moving services that make relocating stress-free and easy.", icon: "House" },
  { title: "Item Removal", description: "Efficient and responsible removal of unwanted items from your premises.", icon: "Trash2" },
  { title: "Special Items", description: "We handle special items with extra care to ensure their safe transport.", icon: "Piano" },
]

const icons: { [key: string]: React.JSX.Element } = {
  House: <House size={56} />,
  Van: <Van size={56} />,
  Trash2: <Trash2 size={56} />,
  Armchair: <Armchair size={56} />,
  Briefcase: <Briefcase size={56} />,
  Piano: <Piano size={56} />,
}

interface ServicesCardProps {
  title: string;
  description: string;
  icon?: string;
}

const ServicesCard = ({ title, description, icon }: ServicesCardProps) => {
  return (
    <Card className="relative mx-auto max-w-sm py-6 hover:shadow-lg transition-shadow duration-300s hover:opacity-85 ">
      <CardHeader className="mt-5">
        {icon && icons[icon]} 
        <CardTitle className="text-2xl font-extrabold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-lg max-w-sm">
        <CardDescription>{description}</CardDescription>
      </CardContent>
      <CardFooter>
        <CardAction>
          <Button variant="outline">Learn More</Button>
        </CardAction>
      </CardFooter>
    </Card>
  );
}

const Services = () => {
  return (
    <div>
      <Separator className="my-3 max-w-70 p-0.5 rounded-2xl bg-black/20"/>
      <h1 className="text-7xl font-extrabold text-slate-800 my-6"> Our Services</h1>
      <p className="text-3xl">We offer a range of services to meet your moving needs.</p>
      <div className="rounded-lg p-10 my-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {components.map(c => (
            <ServicesCard key={c.title} title={c.title} description={c.description} icon={c.icon} />
          ))}
        </div>
      </div>
      <Separator className="my-5 p-0.5 rounded-2xl"/>
    </div>
  );
};

export default Services;

    