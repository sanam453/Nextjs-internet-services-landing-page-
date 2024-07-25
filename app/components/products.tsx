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
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// @icons
import { Calendar, Cog, MessageCircleIcon, Pencil } from "lucide-react";

export function Products() {
  return (
    <section className="my-36 text-center">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl capitalize max-w-3xl mx-auto !leading-snug">
        Organizing meetings on a large scale made ease
      </h1>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
        Choose your team to personalize your experience.
      </p>
      <div className="mt-8 max-w-6xl mx-auto">
        <Tabs defaultValue="analytics">
          <TabsList className="grid w-80 mx-auto grid-cols-2">
            <TabsTrigger value="analytics">Analytics</TabsTrigger>
            <TabsTrigger value="sales">Sales</TabsTrigger>
          </TabsList>
          <TabsContent
            value="analytics"
            className="grid lg:grid-cols-2 grid-cols-1 gap-6 mt-16"
          >
            <Card className="text-left w-full rounded-2xl">
              <CardHeader>
                <div className="p-6 bg-primary-foreground rounded-2xl max-w-fit mb-4">
                  <Calendar className="h-10 w-10" />
                </div>
                <CardTitle className="!mb-2">
                  Make it easy to book meetings with you
                </CardTitle>
                <CardDescription>
                  Book more meetings with less effort by embedding coolander
                  anywhere on your website and adding available times to emails.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  height={1024}
                  width={1024}
                  src="/data-card.png"
                  alt="pattern"
                />
              </CardContent>
            </Card>
            <Card className="text-left w-full rounded-2xl">
              <CardHeader>
                <div className="p-6 bg-primary-foreground rounded-2xl max-w-fit mb-4">
                  <Pencil className="h-10 w-10" />
                </div>
                <CardTitle className="!mb-2">
                  Customize exactly when you&apos;re booked
                </CardTitle>
                <CardDescription>
                  Stay in control of your Coolander with granular ability tools,
                  scheduling rules, buffers and more.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  height={1024}
                  width={1024}
                  src="/pie-chart.png"
                  alt="pie-chart"
                  className="lg:h-[24rem] lg:w-[26rem] mx-auto"
                />
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent
            value="sales"
            className="grid lg:grid-cols-2 grid-cols-1 gap-6 -mt-0"
          >
            <Card className="text-left w-full rounded-2xl">
              <CardHeader>
                <div className="p-6 bg-primary-foreground rounded-2xl max-w-fit mb-4">
                  <MessageCircleIcon className="h-10 w-10" />
                </div>
                <CardTitle className="!mb-2">
                  Engage & Connect: Join the Conversation
                </CardTitle>
                <CardDescription>
                  Join our vibrant community in the Conversation section. Share
                  your thoughts, ask questions, and connect with others on a
                  wide range of topics.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  height={1024}
                  width={1024}
                  src="/conversations.png"
                  alt="conversations"
                />
              </CardContent>
            </Card>
            <Card className="text-left w-full rounded-2xl">
              <CardHeader>
                <div className="p-6 bg-primary-foreground rounded-2xl max-w-fit mb-4">
                  <Cog className="h-10 w-10" />
                </div>
                <CardTitle className="!mb-2">
                  Customize Your Experience
                </CardTitle>
                <CardDescription>
                  Tailor your experience with our platform settings. Adjust
                  preferences, manage notifications, and ensure everything is
                  just the way you like it
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Image
                  height={1024}
                  width={1024}
                  src="/platform-settings.png"
                  alt="platform-settings"
                  className="mx-auto h-full w-full"
                />
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
}

export default Products;
