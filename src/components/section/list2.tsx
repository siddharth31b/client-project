import {
  ArrowRight,
  Award,
  Building2,
  HeartHandshake,
  Leaf,
  Lightbulb,
  Trophy,
} from "lucide-react";
import React from "react";
import Link from "next/link";

import { Button } from "@/vendors/ui/button";
import { Separator } from "@/vendors/ui/separator";
import { cn } from "@/lib/utils";

export interface ListItem {
  icon: React.ReactNode;
  title: string;
  category: string;
  description: string;
  link: string;
}

export interface List2Props {
  heading?: string;
  items?: ListItem[];
  buttonText?: string;
  className?: string;
}

const defaultItems: ListItem[] = [
  {
    icon: <Trophy className="size-6 text-foreground" />,
    title: "Industry Recognition",
    category: "Achievement",
    description: "Outstanding Performance Award.",
    link: "/publications",
  },
  {
    icon: <Award className="size-6 text-foreground" />,
    title: "Excellence Award",
    category: "Recognition",
    description: "Best in Category Winner.",
    link: "/publications",
  },
  {
    icon: <Lightbulb className="size-6 text-foreground" />,
    title: "Innovation Prize",
    category: "Technology",
    description: "Breakthrough Solution of the Year.",
    link: "/publications",
  },
  {
    icon: <HeartHandshake className="size-6 text-foreground" />,
    title: "Customer Success",
    category: "Service",
    description: "Top-Rated Solution Provider.",
    link: "/publications",
  },
  {
    icon: <Building2 className="size-6 text-foreground" />,
    title: "Global Leadership",
    category: "Management",
    description: "Executive Team of the Year.",
    link: "/publications",
  },
  {
    icon: <Leaf className="size-6 text-foreground" />,
    title: "Sustainability Impact",
    category: "Environmental",
    description: "Green Initiative Excellence.",
    link: "/publications",
  },
];

const List2 = ({
  heading = "Our Achievements & Recognition",
  items = defaultItems,
  buttonText = "View Details",
  className,
}: List2Props) => {
  return (
    <section className={cn("py-16 lg:py-24", className)}>
      <div className="container px-0 md:px-8">
        <h2 className="mb-10 px-4 text-3xl font-semibold md:mb-14 md:text-4xl">
          {heading}
        </h2>
        <div className="flex flex-col">
          <Separator />
          {items.map((item, index) => {
            const isInternal = item.link.startsWith("/");

            return (
              <React.Fragment key={index}>
                <div className="grid items-center gap-4 px-4 py-5 md:grid-cols-4">
                  <div className="order-2 flex items-center gap-2 md:order-none">
                    <span className="flex h-14 w-16 shrink-0 items-center justify-center rounded-md bg-muted">
                      {item.icon}
                    </span>
                    <div className="flex flex-col gap-1">
                      <h3 className="font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {item.category}
                      </p>
                    </div>
                  </div>
                  <p className="order-1 text-xl font-semibold md:order-none md:col-span-2 md:text-2xl">
                    {item.description}
                  </p>
                  {isInternal ? (
                    <Button
                      variant="outline"
                      render={
                        <Link
                          className="order-3 ml-auto w-fit gap-2 md:order-none"
                          href={item.link}
                        />
                      }
                      nativeButton={false}
                    >
                      <span>{buttonText}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  ) : (
                    <Button
                      variant="outline"
                      render={
                        <a
                          className="order-3 ml-auto w-fit gap-2 md:order-none"
                          href={item.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                      nativeButton={false}
                    >
                      <span>{buttonText}</span>
                      <ArrowRight className="h-4 w-4" />
                    </Button>
                  )}
                </div>
                <Separator />
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export { List2 };
