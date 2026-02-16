import { Separator } from "@/components/ui/separator";
import {
  RiWechatFill as WechatFillIcon,
} from "@remixicon/react";
import { Mail, MapPin, Phone } from "lucide-react";

import Image from "next/image";
import data from "@/data/services.json";
import { Service } from "@/app/types";

import Link from "next/link";
const services: Service[] = data;

const Footer = () => {
  return (
    <footer className="max-w-full bg-slate-800">
      <div className="flex flex-col space-y-12 md:p-4 sm:p-12 lg:flex-row items-center lg:items-start justify-around rounded-lg text-white">
        <div className="max-w-sm gap-2 flex flex-col items-center lg:items-start mt-16 tra">

          <div className="absolute rounded-md bg-slate-100 -translate-y-36 p-8">
              <Image
                src="/logo.png"
                alt="Logo"
                width={256}
                height={1}
                className="object-contain"
              />
            </div>

          <p className="my-4 text-center lg:text-start">Best for Less mover is a Man with a Van business with over 20 years of professionalism. We are equipped with a team of experienced workers and a 20 cubic metre truck ready to handle your move.</p>
          <div className="flex flex-row gap-4">
            <WechatFillIcon size={30} />
            <WechatFillIcon size={30} />
            <WechatFillIcon size={30} />
          </div>
        </div>
        <div className="flex flex-col md:flex-row space-y-12 items-center md:items-start   justify-between md:gap-12 2xl:gap-50">
          <div className="flex flex-col items-center" >
            <Link href="/services">
              <h1 className="text-3xl font-bold mb-8">Services</h1>
            </Link>
            <ul className="grid grid-cols-2 text-lg font-semibold space-y-4 gap-x-12">
              {services.map(service => (
                <Link key={service.title} href={service.href}>
                <li key={service.title}>{service.title}</li>
                </Link>
              ))}
            </ul>
          </div>
          <div className="flex flex-col items-center">
            <Link href="/contact">
            <h1 className="text-3xl font-bold mb-8">Contact</h1>
            </Link>
            <ul className="text-md space-y-4">
              <li className="flex items-center gap-2"> <Mail size={32}/>email@example.com</li>
              <li className="flex items-center gap-2"> <Phone size={32}/>234 567 890</li>
              <li className="flex items-center gap-2"> <MapPin size={32}/>123 Main St</li> 
            </ul>
          </div>
        </div>
      </div>
      <Separator className="mx-auto max-w-7xl p-px rounded-2xl bg-white/10"/>
      <div className="mx-auto py-6 text-center text-sm text-muted-foreground">
        &copy; {new Date().getFullYear()} Best For Less.
      </div>
    </footer>
  );
};

export default Footer;