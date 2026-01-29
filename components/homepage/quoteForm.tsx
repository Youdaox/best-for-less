"use client"
import { useState } from "react";
import { SearchIcon, Send } from "lucide-react";
import { Button } from "../ui/button";
import { Field, FieldGroup, FieldLabel } from "../ui/field";

import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import { Separator } from "@/components/ui/separator"


import { AddressAutofill } from '@mapbox/search-js-react';

import { QuoteRequest } from "@/app/types";
import { Textarea } from "../ui/textarea";

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
  const [moveType, setMoveType] = useState<string>("type of move")
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
    <div className="flex flex-col justify-center text-center m-16 mr-0 ml-24 shadow-lg py-12 px-8 rounded-2xl bg-gray-100/90 ">
      <h1 className="text-black text-4xl font-extrabold px-4 mb-12">Request A Free Quote</h1>
      <form className="bg-white p-6 rounded-lg shadow-2xl w-lg" onSubmit={handleSubmit}>
        <FieldGroup className="gap-5">
          <AddressAutofill accessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY || ""}>
            <InputGroup>
              <InputGroupInput 
                id="moving-from" 
                placeholder="Moving from..." 
                autoComplete="address-line1" 
                value={movingFrom} 
                onChange={({target}) => setMovingFrom(target.value)}
              />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
          </AddressAutofill>
          <AddressAutofill accessToken={process.env.NEXT_PUBLIC_MAPBOX_API_KEY || ""}>
            <InputGroup>
              <InputGroupInput 
                id="moving-to" 
                placeholder="Moving to..." 
                autoComplete="address-line1" 
                value={movingTo} 
                onChange={({target}) => setMovingTo(target.value)}
              />
              <InputGroupAddon>
                <SearchIcon />
              </InputGroupAddon>
            </InputGroup>
          </AddressAutofill>
          <Separator className="my-3 mx-auto max-w-18 p-0.5 rounded-2xl bg-black/20"/>
        </FieldGroup>

        <FieldGroup className="grid gap-4 grid-cols-2 my-4">
          <Input id="name" placeholder="Name" value={name} onChange={({target}) => setName(target.value)} />
          <Input type="email" placeholder="Your Email" required value={email} onChange={({target}) => setEmail(target.value)} />
          <Input type="date" id="moving-date" value={date?.toISOString().split('T')[0]} onChange={({target}) => setDate(new Date(target.value))} />

          <Select onValueChange={(value) => setMoveType(value)}>
            <SelectTrigger className="w-full h-12! text-lg!">
              <SelectValue placeholder="Type of Move"/>
            </SelectTrigger>
            <SelectContent position="item-aligned">
              {components.map(c => (
                <SelectItem key={c.title} value={c.title}>{c.title}</SelectItem>
                )
              )}
            </SelectContent>
          </Select>
        </FieldGroup>

        <Textarea placeholder="Message" value={message} onChange={({target}) => setMessage(target.value)} />

        <Button 
          className="text-md mt-6 bg-slate-950 hover:bg-slate-800 text-white font-bold py-6 px-4 "
          type="submit"
        >
          <Send className="icon size-lg" /> 
          Get a Free Quote
        </Button>
      </form>
    </div>
  );
};

export default QuoteForm;