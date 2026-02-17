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
import { Service } from "@/app/types";
import services from "@/data/services.json";
import { Badge } from "@/components/ui/badge";

const components: Service[] = services

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
    <Card className="relative gap-2 sm:gap-8 mx-auto max-w-md sm:max-w-sm py-6 hover:shadow-lg transition-shadow duration-300s hover:opacity-85 ">
      <CardHeader className="flex flex-row items-center sm:flex-col sm:items-start sm:mt-5">
        {icon && icons[icon]} 
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
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
    <div className="flex flex-col items-center my-8">
      <Badge variant="outline" className="text-sm font-medium bg-slate-800/90 text-slate-100">Our Services</Badge>
      <h1 className="text-3xl lg:text-5xl font-extrabold text-slate-800 mb-4 my-2"> Our Services</h1>
      <p className="text-xl">We offer a range of services to meet your moving needs.</p>
      <Separator className="my-3 max-w-70 p-0.5 rounded-2xl bg-black/20"/>
      <div className="rounded-lg lg:p-10 my-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {components.map(c => (
            <ServicesCard key={c.title} title={c.title} description={c.description} icon={c.icon} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;

    