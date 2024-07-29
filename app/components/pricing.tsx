import * as React from "react";

// @components
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// @icons
import { CheckIcon } from "lucide-react";

interface PricingCardPropsType {
  title: string;
  options: string[];
  price: number;
}

function PricingCard({ title, options, price }: PricingCardPropsType) {
  return (
    <Card className="w-full shadow-none border-none">
      <CardHeader className="text-left text-2xl font-bold">{title}</CardHeader>
      <CardContent className="space-y-4">
        {options.map((option, key) => (
          <div
            key={key}
            className="flex gap-2 items-start text-left text-muted-foreground"
          >
            <CheckIcon className="h-5 w-5" />
            {option}
          </div>
        ))}
      </CardContent>
      <hr className="mt-6 mb-10" />
      <CardFooter className="w-full flex-col items-start gap-4">
        <div className="flex">
          <span className="text-sm mt-2 text-foreground font-normal">$</span>{" "}
          <p className="text-2xl font-bold">{price}</p>
          <span className="mt-2 text-foreground font-normal text-sm">
            /month
          </span>
        </div>
        <Button className="w-full">Choose</Button>
      </CardFooter>
    </Card>
  );
}

const data = [
  {
    title: "Basic",
    options: [
      "No contract, cancel anytime",
      "10% off for students with a valid ID",
      "Basic support, Email access, 5 devices",
      "Available on all plans with a 12-month contract",
      "Save $10/month when bundling internet with TV services",
    ],
    price: 44.99,
  },
  {
    title: "Pro",
    options: [
      "HD streaming, Free modemhi",
      "Get $25 credit for each referral",
      "Best rates, early termination fee applies",
      "Discounted rates, early termination fee applies",
      "Priority support, Email access, 10 devices, Basic streaming",
    ],
    price: 99.99,
  },
  {
    title: "Premium",
    options: [
      "$50, waived for 24-month contract",
      "Rates locked in for the duration of the contract",
      "$10/month for modem, $15/month for modem/router combo",
      "$100 for 12-month contract, 24-month",
      "24/7 support, Email access, 20 devices",
    ],
    price: 129.49,
  },
];

export function Pricing() {
  return (
    <section className="mb-32 text-center">
      <h1 className="text-4xl font-bold tracking-tight lg:text-5xl capitalize max-w-3xl mx-auto !leading-snug">
        The right plan for your business
      </h1>
      <p className="text-xl text-muted-foreground max-w-4xl mx-auto mt-4">
        We have several powerful plans to showcase your business and get
        discovers as a creative entrepreneure.
      </p>
      <Card className="p-6 mt-16 grid xl:grid-cols-3 lg:grid-cols-2 grid-cols-1 gap-10 rounded-2xl">
        {data.map((props, key) => (
          <PricingCard key={key} {...props} />
        ))}
      </Card>
    </section>
  );
}

export default Pricing;
