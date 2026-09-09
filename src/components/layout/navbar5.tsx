"use client";

import { MenuIcon } from "lucide-react";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/vendors/ui/accordion";
import { Button } from "@/vendors/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/vendors/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/vendors/ui/sheet";
import { cn } from "@/lib/utils";

interface Navbar5Props {
  className?: string;
}

const Navbar5 = ({ className }: Navbar5Props) => {
  const features = [
    {
      title: "Dashboard",
      description: "Overview of your activity",
      href: "#",
    },
    {
      title: "Analytics",
      description: "Track your performance",
      href: "#",
    },
    {
      title: "Settings",
      description: "Configure your preferences",
      href: "#",
    },
    {
      title: "Integrations",
      description: "Connect with other tools",
      href: "#",
    },
    {
      title: "Storage",
      description: "Manage your files",
      href: "#",
    },
    {
      title: "Support",
      description: "Get help when needed",
      href: "#",
    },
  ];

  return (
    <section className={cn("py-5 lg:py-6", className)}>
      <div className="container">
        <nav className="flex items-center justify-between">
          <a
            href="https://www.shadcnblocks.com"
            className="flex items-center gap-3"
          >
            <img
              src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
              className="h-10 w-auto lg:h-11"
              alt="Shadcn UI Navbar"
            />
            <span className="text-2xl font-extrabold tracking-tight lg:text-3xl">
              Shadcnblocks.com
            </span>
          </a>
          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="gap-1 lg:gap-2">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-lg font-semibold lg:text-xl">
                  Features
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="grid w-[650px] grid-cols-2 p-4">
                    {features.map((feature, index) => (
                      <NavigationMenuLink
                        href={feature.href}
                        key={index}
                        className="rounded-lg p-3.5 transition-colors hover:bg-muted/70"
                      >
                        <div key={feature.title}>
                          <p className="mb-1 text-lg font-bold text-foreground">
                            {feature.title}
                          </p>
                          <p className="text-base text-muted-foreground">
                            {feature.description}
                          </p>
                        </div>
                      </NavigationMenuLink>
                    ))}
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={cn(navigationMenuTriggerStyle(), "text-lg font-semibold lg:text-xl")}
                >
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={cn(navigationMenuTriggerStyle(), "text-lg font-semibold lg:text-xl")}
                >
                  Resources
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="#"
                  className={cn(navigationMenuTriggerStyle(), "text-lg font-semibold lg:text-xl")}
                >
                  Contact
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <div className="hidden items-center gap-4 lg:flex">
            <Button variant="outline" className="h-12 px-6 text-lg font-semibold rounded-lg">
              Sign in
            </Button>
            <Button className="h-12 px-6 text-lg font-semibold rounded-lg">
              Start for free
            </Button>
          </div>
          <Sheet>
            <SheetTrigger className="lg:hidden" render={<Button variant="outline" size="icon" className="size-10" />}><MenuIcon className="h-5 w-5" /></SheetTrigger>
            <SheetContent side="top" className="max-h-screen overflow-auto">
              <SheetHeader>
                <SheetTitle>
                  <a
                    href="https://www.shadcnblocks.com"
                    className="flex items-center gap-2.5"
                  >
                    <img
                      src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/logos/shadcnblockscom-icon.svg"
                      className="h-8 w-auto"
                      alt="Shadcn UI Navbar"
                    />
                    <span className="text-xl font-bold tracking-tight">
                      Shadcnblocks.com
                    </span>
                  </a>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col p-4">
                <Accordion className="mt-4 mb-2">
                  <AccordionItem value="solutions" className="border-none">
                    <AccordionTrigger className="text-lg font-medium hover:no-underline">
                      Features
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-2">
                        {features.map((feature, index) => (
                          <a
                            href={feature.href}
                            key={index}
                            className="rounded-md p-3 transition-colors hover:bg-muted/70"
                          >
                            <div key={feature.title}>
                              <p className="mb-1 text-base font-semibold text-foreground">
                                {feature.title}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {feature.description}
                              </p>
                            </div>
                          </a>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex flex-col gap-5 text-base font-medium">
                  <a href="#" className="font-medium hover:text-foreground transition-colors">
                    Templates
                  </a>
                  <a href="#" className="font-medium hover:text-foreground transition-colors">
                    Blog
                  </a>
                  <a href="#" className="font-medium hover:text-foreground transition-colors">
                    Pricing
                  </a>
                </div>
                <div className="mt-6 flex flex-col gap-3">
                  <Button variant="outline" size="lg" className="w-full text-base">
                    Sign in
                  </Button>
                  <Button size="lg" className="w-full text-base">
                    Start for free
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar5 };
