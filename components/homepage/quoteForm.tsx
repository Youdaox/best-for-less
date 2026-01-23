"use client"
import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "../ui/button";
import { Field, FieldGroup, FieldLabel } from "../ui/field";

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";

import { AddressAutofill } from '@mapbox/search-js-react';

import { QuoteRequest } from "@/app/types";

const components = [
  { title: "Office Movers", description: "We provide top-notch office moving services to ensure a smooth transition for your business." },
  { title: "Furniture Movers", description: "Our expert team handles your furniture with care, ensuring safe and efficient moves." },
  { title: "Trademe Pickup", description: "Convenient pickup services for your Trademe purchases, delivered right to your doorstep." },
  { title: "House Movers", description: "Reliable house moving services that make relocating stress-free and easy." },
  { title: "Item Removal", description: "Efficient and responsible removal of unwanted items from your premises." },
]


const QuoteForm = () => {
  const [movingFrom, setMovingFrom] = useState<string>("")
  const [movingTo, setMovingTo] = useState<string>("")
  const [date, setDate] = useState<Date | undefined>(new Date())
  const [moveType, setMoveType] = useState<string>("")
  const [name, setName] = useState<string>("")
  const [email, setEmail] = useState<string>("")
  const [message, setMessage] = useState<string>("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const quoteRequest: QuoteRequest = {
      movingFrom: { street_name: movingFrom },
      movingTo: { street_name: movingTo },
      movingDate: date!,
      moveType,
      name,
      email,
      message,
    }

    setMovingFrom("");
    setMovingTo("");
    setDate(new Date());
    setMoveType("");
    setName("");
    setEmail("");
    setMessage("");

    console.log(quoteRequest);
  }

  return (
    <div className="container flex justify-center m-16">
      <form onSubmit={handleSubmit}>
          <h1 className="text-4xl font-bold m-10">Where are you moving from?</h1>
          <FieldGroup className="gap-4">
            <AddressAutofill accessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY || ""}>
              <Input id="moving-from" placeholder="Moving from" autoComplete="address-line1" onChange={({target}) => setMovingFrom(target.value)}/>
            </AddressAutofill>
            <AddressAutofill accessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY || ""}>
              <Input id="moving-to" placeholder="Moving to" autoComplete="address-line1" onChange={({target}) => setMovingTo(target.value)} />
            </AddressAutofill>
          </FieldGroup>

          <FieldGroup className="grid gap-4 grid-cols-2 my-4">
              <Input id="name" placeholder="Name" onChange={({target}) => setName(target.value)} />
              <Input type="email" placeholder="Your Email" required onChange={({target}) => setEmail(target.value)} />
            <Field>
              <FieldLabel>Moving Date</FieldLabel>
              <Input type="date" id="moving-date" onChange={({target}) => setDate(new Date(target.value))} />
            </Field>
            <Field>
              <FieldLabel>Type of Move</FieldLabel>
              <Select onValueChange={(value) => setMoveType(value)}>
                <SelectTrigger className="w-45">
                  <SelectValue placeholder="Type of Move"/>
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
          <Input type="text" placeholder="Message" onChange={({target}) => setMessage(target.value)} />

          <Button type="submit">
            <Send className="icon" /> Get a Free Quote
          </Button>
        </form>
    </div>
  );
};

export default QuoteForm;