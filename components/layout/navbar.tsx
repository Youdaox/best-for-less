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

const components: { title: string; href: string; description: string }[] = [
  {
    title: "Office Movers",
    href: "/services",
    description:
      "A modal dialog that interrupts the user with important content and expects a response.",
  },
  {
    title: "Furniture Movers",
    href: "/services",
    description:
      "For sighted users to preview content available behind a link.",
  },
  {
    title: "Trademe Pickup",
    href: "/services",
    description:
      "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
  },
  {
    title: "House Movers",
    href: "/services",
    description: "Visually or semantically separates content.",
  },
  { title: "Item Removal",
    href: "/services",
    description: "Efficient and responsible removal of unwanted items from your premises." },
]
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
    <div className={`flex shadow-md rounded-b-lg items-center justify-around bg-zinc-50 fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? "-translate-y-full" : "top-0"}`}>
        <div className="relative">
          <h1 className="text-4xl font-extrabold">BEST FOR LESS</h1>
        </div>
        <div className="flex items-center gap-20">
          <NavigationMenu className="py-4 px-4 w-full">
              <NavigationMenuList className="flex gap-10 text-lg">
                
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/">
                        Home
                      </Link>
                      </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger>Services</NavigationMenuTrigger>
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
                      <Link href="/about">About</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link href="/contact">Contact</Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>

              </NavigationMenuList>
          </NavigationMenu>
          <div>language</div>
        </div>
      
    </div>
  )
};

export default Navbar;