import * as React from "react";

// @components
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage } from "@/components/ui/avatar";

export function Resources() {
  return (
    <section id="resources" className="mb-32 text-center">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl capitalize max-w-3xl mx-auto !leading-snug">
        Comprehensive Internet Service Resources
      </h1>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
        Access guides, FAQs, and tools to make the most of your internet
        service.
      </p>
      <div className="mt-16 grid lg:grid-cols-3 grid-cols-1 lg:gap-x-6 gap-y-6">
        <div className="col-span-2">
          <Card className="text-left md:h-[30rem] h-[24rem] rounded-2xl overflow-hidden">
            <CardHeader>
              <CardTitle className="mb-2">Helpful Guides and Tools</CardTitle>
              <CardDescription>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sunt,
                ea!
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Image
                height={1024}
                width={1024}
                src="/website.png"
                alt="website"
                className="h-full w-full translate-y-10"
              />
            </CardContent>
          </Card>
        </div>
        <div className="col-span-1">
          <Card className="h-full rounded-2xl flex flex-col justify-between gap-16">
            <CardHeader className="z-0 !flex flex-row justify-center items-center -space-x-2 *:ring *:ring-white">
              <Avatar className="z-0 size-10">
                <AvatarImage
                  className="w-full h-full"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=3164&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </Avatar>
              <Avatar className="z-10 size-14">
                <AvatarImage
                  className="w-full h-full"
                  src="https://images.unsplash.com/photo-1464863979621-258859e62245?q=80&w=3172&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </Avatar>
              <Avatar className="z-20 size-20">
                <AvatarImage
                  className="w-full h-full"
                  src="https://images.unsplash.com/photo-1543096222-72de739f7917?q=80&w=2000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </Avatar>
              <Avatar className="z-10 size-14">
                <AvatarImage
                  className="w-full h-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=3174&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </Avatar>
              <Avatar className="z-0 size-10">
                <AvatarImage
                  className="w-full h-full"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=3176&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
              </Avatar>
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-4 text-5xl">10M+</CardTitle>
              <CardDescription>
                Used by millions of teams and professionals.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </div>
      <Card className="mt-6 text-left grid lg:grid-cols-2 grid-cols-1 lg:h-[20rem] md:h-[28rem] h-[24rem] rounded-2xl overflow-hidden">
        <CardHeader>
          <CardTitle>Free Updates</CardTitle>
          <CardDescription className="!mt-4 !mb-6 max-w-xs">
           You&apos;ll get a guaranteed free lifetime update, including new sections!
          </CardDescription>
          <Button className="max-w-fit">Buy Now</Button>
        </CardHeader>
        <CardContent>
          <Image
            height={1024}
            width={1024}
            src="/website2.png"
            alt="website2"
            className="h-full w-full lg:translate-y-10"
          />
        </CardContent>
      </Card>
    </section>
  );
}

export default Resources;
