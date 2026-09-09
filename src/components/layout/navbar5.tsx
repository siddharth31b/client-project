"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MenuIcon } from "lucide-react";

import { Button } from "@/vendors/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
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

const navLinks = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  { title: "Experience", href: "/experience" },
  { title: "Projects", href: "/projects" },
  { title: "Research", href: "/research" },
  { title: "Publications", href: "/publications" },
  { title: "Skills", href: "/skills" },
  { title: "Achievements", href: "/achievements" },
  { title: "Certificates", href: "/certificates" },
  { title: "Contact", href: "/contact" },
];

const Navbar5 = ({ className }: Navbar5Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <section className={cn("py-4 lg:py-5 border-b border-border/40 bg-background/95 backdrop-blur-xs sticky top-0 z-40", className)}>
      <div className="container">
        <nav className="flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group transition-colors shrink-0"
          >
            <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-primary transition-colors lg:text-2xl">
              Alfredo soprana
            </span>
          </Link>

          <NavigationMenu className="hidden lg:block">
            <NavigationMenuList className="gap-0.5 xl:gap-1">
              {navLinks.map((item) => {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href));

                return (
                  <NavigationMenuItem key={item.href}>
                    <NavigationMenuLink
                      render={<Link href={item.href} />}
                      className={cn(
                        "px-2 py-1.5 text-xs xl:text-sm font-medium rounded-md transition-colors",
                        isActive
                          ? "bg-muted text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                      )}
                    >
                      {item.title}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                );
              })}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="hidden items-center gap-3 lg:flex shrink-0">
            <ThemeToggle />
          </div>

          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              className="lg:hidden"
              render={
                <Button
                  variant="outline"
                  size="icon"
                  className="size-10"
                  aria-label="Open menu"
                />
              }
            >
              <MenuIcon className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent side="top" className="max-h-[90vh] overflow-y-auto p-6">
              <SheetHeader className="pb-4 border-b border-border/40">
                <SheetTitle>
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="text-xl font-bold tracking-tight text-foreground hover:text-primary transition-colors"
                  >
                    Alfredo soprana
                  </Link>
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-1 py-4">
                {navLinks.map((item) => {
                  const isActive =
                    pathname === item.href ||
                    (item.href !== "/" && pathname.startsWith(item.href));

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "flex items-center px-3 py-2.5 rounded-lg text-base font-medium transition-colors",
                        isActive
                          ? "bg-muted text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
                      )}
                    >
                      {item.title}
                    </Link>
                  );
                })}
              </div>
              <div className="pt-4 border-t border-border/40 flex flex-col gap-3">
                <ThemeToggle className="w-full justify-center" />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </section>
  );
};

export { Navbar5 };
