import {
  ArrowRight,
  Award,
  Building2,
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
  asSection?: boolean;
}

const defaultItems: ListItem[] = [
  {
    icon: <Trophy className="size-6 text-primary" />,
    title: "Journal Publication",
    category: "IET Image Processing (2025)",
    description: "Computer‐Aided Volumetric Quantification of Pre‐and Post‐Treatment Intracranial Aneurysms in MRA.",
    link: "/publications",
  },
  {
    icon: <Award className="size-6 text-primary" />,
    title: "Journal Publication",
    category: "Scientific Reports (2025)",
    description: "Machine learning analysis of integrated ABP and PPG signals towards early detection of coronary artery disease.",
    link: "/publications",
  },
  {
    icon: <Lightbulb className="size-6 text-primary" />,
    title: "Journal Publication",
    category: "IEEE Transactions on NanoBioscience (2023)",
    description: "Multi-level residual dual attention network for major cerebral arteries segmentation in MRA toward diagnosis of cerebrovascular disorders.",
    link: "/publications",
  },
  {
    icon: <Building2 className="size-6 text-primary" />,
    title: "Honors & Leadership",
    category: "Young S&T Leaders",
    description: "Selected to participate in ESTIC-2025 at Bharat Mandapam, New Delhi.",
    link: "/achievements",
  },
];

const List2 = ({
  heading,
  items = defaultItems,
  buttonText = "View Details",
  className,
  asSection = true,
}: List2Props) => {
  const content = (
    <div className="container px-0 md:px-8">
      {heading && (
        <h2 className="mb-10 px-4 text-3xl font-semibold md:mb-14 md:text-4xl">
          {heading}
        </h2>
      )}
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
  );

  if (asSection) {
    return <section className={cn("py-16 lg:py-24", className)}>{content}</section>;
  }

  return <div className={cn("w-full", className)}>{content}</div>;
};

export { List2 };
