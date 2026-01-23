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
const components = [
  { title: "Office Movers", description: "We provide top-notch office moving services to ensure a smooth transition for your business." },
  { title: "Furniture Movers", description: "Our expert team handles your furniture with care, ensuring safe and efficient moves." },
  { title: "Trademe Pickup", description: "Convenient pickup services for your Trademe purchases, delivered right to your doorstep." },
  { title: "House Movers", description: "Reliable house moving services that make relocating stress-free and easy." },
  { title: "Item Removal", description: "Efficient and responsible removal of unwanted items from your premises." },
]

const ServicesCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card className="relative mx-auto w-full max-w-md py-6hover:shadow-2xl transition-shadow duration-300s hover:opacity-85 ">
      <CardHeader className="mt-5">
        <CardTitle className="text-2xl font-bold">{title}</CardTitle>
      </CardHeader>
      <CardContent className="text-lg">
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
    <div className="bg-gray-100 rounded-lg p-10 my-10">
      <h1 className="text-5xl font-bold justify-center flex my-5"> Our Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {components.map(c => (
          <ServicesCard key={c.title} title={c.title} description={c.description} />
        ))}
      </div>
    </div>
  );
};

export default Services;

    