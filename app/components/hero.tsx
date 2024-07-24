"use client";

import * as React from "react";
import { useState, useEffect } from "react";

// @components
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// charts import
import dynamic from "next/dynamic";

// @icons
import { ArrowRight } from "lucide-react";

// @ts-ignore
const Chart = dynamic(() => import("react-apexcharts"), {
  ssr: false,
});

const lineChartOptions = {
  chart: {
    toolbar: {
      show: false,
    },
  },
  title: {
    show: false,
  },
  dataLabels: {
    enabled: false,
  },
  xaxis: {
    axisTicks: {
      show: false,
    },
    axisBorder: {
      show: false,
    },
    labels: {
      show: false, // Hide x-axis labels
    },
  },
  yaxis: {
    labels: {
      show: false, // Hide x-axis labels
    },
  },
  grid: {
    show: false,
    borderColor: "#EEEEEE",
    strokeDashArray: 5,
    xaxis: {
      lines: {
        show: false,
      },
    },
    padding: {
      top: 0,
      right: 0,
    },
  },
  fill: {
    type: "solid",
    opacity: 0,
  },
  tooltip: {
    theme: "light",
  },
  colors: ["#2196F3", "#00e396"],
  stroke: {
    lineCap: "round",
    width: 2,
  },
  markers: {
    size: 0,
  },
  legend: {
    show: false, // Hide the legend
  },
};

const lineChartSeries = [
  {
    name: "series1",
    data: [31, 40, 28, 51, 42, 109, 100],
  },
  {
    name: "series2",
    data: [30, 38, 34, 48, 34, 100, 90],
  },
];

export function Hero() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  // brand images
  const BRAND_IMAGES = ["asana", "github", "gitlab", "spotify", "adobe"];

  return (
    <section className="my-20 text-center">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl capitalize">
        Organize your time with ease
      </h1>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
        tempore accusamus aliquid assumenda temporibus eveniet commodi nostrum
        numquam. Ratione, minima.
      </p>
      <div className="mt-10 flex gap-4 items-center justify-center">
        <Button size="lg">Get Started</Button>
        <Button size="lg" variant="outline">
          Learn More
        </Button>
      </div>
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 items-center mt-20">
        <Card className="rounded-2xl w-full">
          <CardHeader className="text-left">
            <Badge variant="secondary" className="max-w-fit mb-2">
              Your earnings
            </Badge>
            <CardTitle className="text-4xl">$50.00</CardTitle>
            <CardDescription>Next playout in:</CardDescription>
            <CardDescription className="font-medium text-black">
              29,345 pts
            </CardDescription>
          </CardHeader>
          <CardContent className="-mb-14 -mr-6 -ml-11">
            {isClient && (
              <Chart
                // @ts-ignore
                options={lineChartOptions}
                series={lineChartSeries}
                type="area"
                height={220}
              />
            )}
          </CardContent>
        </Card>
        <Card className="rounded-2xl w-full h-96">
          <CardHeader>
            <Image
              height={100}
              width={100}
              src="/speed2.png"
              alt="pattern"
              className="h-52 w-52 mx-auto mb-6"
            />
          </CardHeader>
          <CardContent>
            <CardDescription>
              Discover valuable tips to boost your score.
            </CardDescription>
            <Button className="mt-4" variant="ghost">
              Learn more
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </CardContent>
        </Card>
        <Card className="rounded-2xl w-full relative h-96">
          <div className="bg-[url('/pattern7.png')] h-full rounded-2xl absolute bg-contain bg-bottom bg-no-repeat w-full" />
          <div className="relative">
            <CardHeader>
              <CardTitle className="text-3xl">Connect Sources</CardTitle>
            </CardHeader>
            <CardContent className="flex gap-2 justify-center mt-2">
              <Button variant="outline" className="!py-6">
                <Image
                  height={100}
                  width={100}
                  src="/icons/Apple.svg"
                  alt="pattern"
                  className="h-7 w-7"
                />
                <div className="ml-2 text-left">
                  <p className="text-[10px] -mb-1">Download on the</p>
                  <p className="text-base">App Store</p>
                </div>
              </Button>
              <Button variant="outline" className="!py-6">
                <Image
                  height={100}
                  width={100}
                  src="/icons/google-play.svg"
                  alt="pattern"
                  className="h-7 w-7"
                />
                <div className="ml-2 text-left">
                  <p className="text-[10px] -mb-1">Download on the</p>
                  <p className="text-base">Play Store</p>
                </div>
              </Button>
            </CardContent>
          </div>
        </Card>
      </div>
      <div className="mt-20">
        <p className="text-lg">
          Loved by <strong>20 million+</strong> users
        </p>
        <div className="flex flex-wrap justify-center items-center gap-16 mt-6">
          {BRAND_IMAGES.map((img, key) => (
            <Image
              key={key}
              height={100}
              width={100}
              src={`/logos/${img}.png`}
              alt="pattern"
              className="h-12 w-32"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Hero;
