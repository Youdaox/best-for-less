"use client"
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Field, FieldGroup, FieldLabel } from "../ui/field";

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

const components = [
  { title: "Office Movers", description: "We provide top-notch office moving services to ensure a smooth transition for your business." },
  { title: "Furniture Movers", description: "Our expert team handles your furniture with care, ensuring safe and efficient moves." },
  { title: "Trademe Pickup", description: "Convenient pickup services for your Trademe purchases, delivered right to your doorstep." },
  { title: "House Movers", description: "Reliable house moving services that make relocating stress-free and easy." },
  { title: "Item Removal", description: "Efficient and responsible removal of unwanted items from your premises." },
]


const QuoteForm = () => {
  const [date, setDate] = useState<Date | undefined>(new Date())

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <div className="container flex justify-center m-16">
      <form onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold m-10">Where are you moving from?</h1>
          <FieldGroup className="gap-4">
            <Input id="moving-from" placeholder="Moving from" />
            <Input id="moving-to" placeholder="Moving to" />
          </FieldGroup>

          <FieldGroup className="grid gap-4 grid-cols-2 my-4">
              <Input id="name" placeholder="Name" />
              <Input type="email" placeholder="Your Email" required/>
            <Field>
              <FieldLabel>Moving Date</FieldLabel>
              <Input type="date" id="moving-date"/>
            </Field>
            <Field>
              <FieldLabel>Type of Move</FieldLabel>
              <Select>
                <SelectTrigger className="w-45">
                  <SelectValue placeholder="Type of Move" />
                </SelectTrigger>
                <SelectContent position="item-aligned">
                  {components.map(c => (
                    <SelectItem key={c.title} value={c.title}>{c.title}</SelectItem>
                    )
                  )}
                </SelectContent>
              </Select>
            </Field>
          </FieldGroup>
          <Input type="text" placeholder="Message" />

          <Button type="submit">
            <Send className="icon" /> Get a Free Quote
          </Button>
        </form>
    </div>
  );
};

export default QuoteForm;