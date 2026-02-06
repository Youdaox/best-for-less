"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import Link from "next/link";
import { useEffect, useState } from "react";
import services from "@/data/services.json";
import { Service } from "@/app/types";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";

import { Phone, Menu} from "lucide-react";
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"

const components: Service[] = services;

const ListItem = ({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) => {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="flex flex-col gap-1 text-sm">
            <div className="leading-none font-medium">{title}</div>
            <div className="text-muted-foreground line-clamp-2">{children}</div>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  )
}

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Menu size={32}/>
      </SheetTrigger>
      <SheetContent side="left">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-4 p-4">
          <Link href="/">
            Home
          </Link>
          <Link href="/services">
            Services
          </Link>
          <Link href="/pricing">
            Pricing
          </Link>
          <Link href="/about">
            About
          </Link>
        </nav>
      </SheetContent>
    </Sheet>
  )
}


const Navbar = () => {
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    let lastScrollY = 0;

    const onScroll = () => {
      const currentScrollY = window.scrollY;
      setScrolled(window.scrollY > lastScrollY);
      lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <div className={`p-2 py-4 md:py-2 flex shadow-md items-center justify-around bg-slate-800 text-zinc-50 fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? "-translate-y-full" : "top-0"}`}>
        <div className="flex md:hidden items-center">
          <MobileMenu />
        </div>
        
        <div className="relative">
          <h1 className="text-4xl text-zinc-100 font-extrabold whitespace-nowrap">BEST FOR LESS</h1>
        </div>

        <div className="hidden md:flex items-center">
          <NavigationMenu className="py-4 px-4 mr-5">
              <NavigationMenuList className="flex gap-4 text-lg font-semibold">
                
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/">
                        Home
                      </Link>
                      </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">Services</NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="mt-2.5 grid w-100 gap-3 md:w-125 md:grid-cols-2 lg:w-150">
                        {components.map(c => (
                          <ListItem
                            key={c.title}
                            title={c.title}
                            href={c.href}
                          >
                            {c.description}
                          </ListItem>
                        ))}
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                  
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/pricing">Pricing</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/about">About</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

              </NavigationMenuList>
          </NavigationMenu>
          <div className="flex items-center gap-12">
            <Separator orientation="vertical" className="bg-black/30 hidden lg:flex p-px h-10!" />
            <div className="hidden lg:flex flex-row gap-10">
              <div className="flex items-center">
                <Phone size={24} color="oklch(79.5% 0.184 86.047)" className="inline mr-3" />
                <span className="text-xl font-bold whitespace-nowrap">021 123 4567</span>
              </div>
              <Button size='lg' className='py-7 px-10 text-white text-md bg-pink-900/85 hover:bg-pink-900 cursor-pointer'>
                Get a Quote
              </Button>
            </div>
          </div>
        </div>
      
    </div>
  )
};

export default Navbar;