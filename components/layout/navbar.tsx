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
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion, useCycle, AnimatePresence, MotionConfig } from "motion/react"

import services from "@/data/services.json";
import { Service } from "@/app/types";
import { Button } from "../ui/button";
import { Separator } from "@/components/ui/separator";

import { Phone} from "lucide-react";

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

const MobileMenu = ({ scrolled }: { scrolled: boolean }) => {
  const [mobileNav, toggleMobileNav] = useCycle(false, true);

  return (
    <div>
      <motion.button 
        animate={mobileNav ? "open" : "closed"}
        whileTap={{ scale: 0.95 }}
        onClick={() => toggleMobileNav()}
        className="flex flex-col space-y-2.5 relative z-10"
      >
        <motion.span variants={{
          open: { rotate: -45, y: 13.9 },
          closed: { rotate: 0, y: 0 }
        }} className="block w-8 h-1 rounded-full bg-slate-800"></motion.span>
        <motion.span variants={{
          open: { opacity: 0 },
          closed: { opacity: 1 },
        }} className="block w-8 h-1 rounded-full bg-slate-800"></motion.span>
        <motion.span variants={{
          open: { rotate: 45, y: -13.9 },
          closed: { rotate: 0, y: 0 }
        }} className="block w-8 h-1 rounded-full bg-slate-800"></motion.span>
      </motion.button>
      <AnimatePresence>
        {(mobileNav && !scrolled) &&
          <MotionConfig
            transition={{
              duration: 0.3,
              ease: "easeInOut",
            }}
          >
            <motion.div variants={{
              open: { 
                y: "0%",
                transition: {
                  when: "beforeChildren",
                  staggerChildren: 0.1,
                  duration: 0.2,
                  ease: "easeInOut",
                }
              },
              closed: {
                y: "-100%", 
                transition: {
                  when: "afterChildren",
                  duration: 0.1,
                  ease: "easeInOut",
                }
              },
            }} 
            initial="closed"
            animate="open"
            exit="closed"
            className="fixed inset-0 bg-zinc-50 flex flex-col justify-center">
              <motion.div variants={{
                open: { x: "0%", opacity: 1 },
                closed: { x: "25%", opacity: 0 },
              }}>
                <div className="flex flex-col items-center gap-8 text-xl font-bold text-slate-800">
                  <Link href="/" onClick={() => toggleMobileNav()}>
                    Home
                  </Link>
                  <Link href="/services" onClick={() => toggleMobileNav()}>
                    Services
                  </Link>
                  <Link href="/pricing" onClick={() => toggleMobileNav()}>
                    Pricing
                  </Link>
                  <Link href="/about" onClick={() => toggleMobileNav()}>
                    About
                  </Link>
                </div>
              </motion.div>
            </motion.div>
          </MotionConfig>
        }
      </AnimatePresence>
    </div>
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
    <div className={`p-2 py-4 md:py-2 flex shadow-md items-center justify-around bg-zinc-50 fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? "-translate-y-full" : "top-0"}`}>

        <div className="relative px-8 py-2 z-10">
          <Image
            src="/logo.png"
            alt="Logo"
            width={256}
            height={1}
            className="object-contain"
          />
        </div>

        <div className="flex md:hidden items-center">
          <MobileMenu scrolled={scrolled} />
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