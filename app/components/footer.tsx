import * as React from "react";

// @components
import { Button } from "@/components/ui/button";

// @icons
import { Dribbble, Facebook, Github, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <section className="rounded-2xl w-full relative text-center mb-10">
      <div className="bg-[url('/tech.jpg')] opacity-5 rotate-180 h-full rounded-2xl absolute bg-center bg-cover bg-no-repeat w-full" />
      <div className="relative container mx-auto">
        <h1 className="text-4xl font-bold tracking-tight lg:text-5xl capitalize max-w-3xl mx-auto !leading-snug">
          Elevate your scheduling
        </h1>
        <p className="text-xl text-muted-foreground capitalize max-w-4xl mx-auto my-4">
          Start using the top scheduling automation platform now - and it&apos;s
          free!
        </p>
        <div className="flex gap-4 pl-4 pt-4 justify-center">
          <Button size="lg" variant="outline">
            Sign up for free
          </Button>
          <Button size="lg">Talk to sales</Button>
        </div>
        <hr className="my-10" />
        <div className="flex md:justify-between justify-center flex-wrap items-center gap-6">
          <p>&copy; Copyright Network 2024. All rights reserved.</p>
          <div className="flex gap-4 items-center">
            <Button variant="default" size="icon">
              <Twitter />
            </Button>
            <Button variant="default" size="icon">
              <Facebook />
            </Button>
            <Button variant="default" size="icon">
              <Github />
            </Button>
            <Button variant="default" size="icon">
              <Linkedin />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Footer;
