"use client";

import * as React from "react";

import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";

// @icons
import { Menu } from "lucide-react";
interface MenuItemPropsType {
  title: string;
  href: string;
}

function MenuItem({ title, href }: MenuItemPropsType) {
  return (
    <NavigationMenuItem>
      <Link href={href} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {title}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

const data = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Products",
    href: "#products",
  },
  {
    title: "Resources",
    href: "#resources",
  },
  {
    title: "Pricing",
    href: "#pricing",
  },
];

export function Navbar() {
  return (
    <section className="flex items-center justify-between py-6 relative">
      <div className="flex items-center gap-4">
        <Image
          height={90}
          width={90}
          className="w-full h-full"
          src="/logo.svg"
          alt="logo"
        />
        <NavigationMenu className="hidden md:block">
          <NavigationMenuList>
            {data.map((props, key) => (
              <MenuItem key={key} {...props} />
            ))}
          </NavigationMenuList>
        </NavigationMenu>
      </div>
      <div className="md:flex hidden gap-4">
        <Button variant="outline">Login</Button>
        <Button>Getting Started</Button>
      </div>
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger>
            <Button variant="outline" size="icon">
              <Menu className="w-6 h-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="top">
            <SheetHeader>
              <SheetTitle className="pb-4 pl-2">
                <Image height={80} width={80} src="/logo.svg" alt="logo" />
              </SheetTitle>
            </SheetHeader>
            <SheetDescription className="-ml-5">
              <NavigationMenu>
                <NavigationMenuList className="flex flex-col text-slate-950 items-start ml-3">
                  {data.map((props, key) => (
                    <MenuItem key={key} {...props} />
                  ))}
                </NavigationMenuList>
              </NavigationMenu>
              <div className="flex gap-4 ml-8 mt-4">
                <Button className="w-full" variant="outline">
                  Login
                </Button>
                <Button className="w-full">Getting Started</Button>
              </div>
            </SheetDescription>
          </SheetContent>
        </Sheet>
      </div>
    </section>
  );
}

export default Navbar;
