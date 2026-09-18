"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  MenuIcon,
  ChevronDown,
  ArrowUpRight,
  BookOpen,
  FileText,
  Code2,
  Layers,
  Award,
  BadgeCheck,
  User,
  Briefcase,
  Home,
  Mail,
} from "lucide-react";

import { Button, buttonVariants } from "@/vendors/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
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

interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

interface NavLinkItem {
  type: "link";
  title: string;
  href: string;
}

interface NavDropdownItem {
  type: "dropdown";
  id: string;
  title: string;
  href: string;
  items: DropdownItem[];
}

type NavItem = NavLinkItem | NavDropdownItem;

const navItems: NavItem[] = [
  {
    type: "link",
    title: "About",
    href: "/about",
  },
  {
    type: "link",
    title: "Experience",
    href: "/experience",
  },
  {
    type: "dropdown",
    id: "works",
    title: "Works",
    href: "/research",
    items: [
      {
        title: "Research Focus",
        description: "Core domains, clinical translation & funded initiatives",
        href: "/research",
        icon: BookOpen,
      },
      {
        title: "Publications",
        description: "Peer-reviewed journal papers, IEEE proceedings & citations",
        href: "/publications",
        icon: FileText,
      },
      {
        title: "Projects",
        description: "Clinical AI models, code repositories & diagnostic toolkits",
        href: "/projects",
        icon: Code2,
      },
    ],
  },
  {
    type: "dropdown",
    id: "more",
    title: "More",
    href: "/achievements",
    items: [
      {
        title: "Achievements",
        description: "Academic fellowships, honors & competitive qualifications",
        href: "/achievements",
        icon: Award,
      },
      {
        title: "Certificates",
        description: "Verified IEEE & international conference reviewer recognitions",
        href: "/certificates",
        icon: BadgeCheck,
      },
      {
        title: "Skills & Methodologies",
        description: "Medical imaging, deep learning & clinical toolkits",
        href: "/skills",
        icon: Layers,
      },
    ],
  },
];

const mobileSections = [
  {
    category: "Overview",
    links: [
      { title: "Home", href: "/", icon: Home },
      { title: "About", href: "/about", icon: User },
      { title: "Experience", href: "/experience", icon: Briefcase },
    ],
  },
  {
    category: "Works",
    links: [
      { title: "Research Focus", href: "/research", icon: BookOpen },
      { title: "Publications", href: "/publications", icon: FileText },
      { title: "Projects", href: "/projects", icon: Code2 },
    ],
  },
  {
    category: "Honors & Skills",
    links: [
      { title: "Achievements", href: "/achievements", icon: Award },
      { title: "Certificates", href: "/certificates", icon: BadgeCheck },
      { title: "Skills & Methodologies", href: "/skills", icon: Layers },
    ],
  },
];

const Navbar5 = ({ className }: Navbar5Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const navRef = useRef<HTMLElement | null>(null);

  // Close dropdown on route change
  useEffect(() => {
    setOpenDropdown(null);
    setIsOpen(false);
  }, [pathname]);

  // Click outside to close dropdown
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleMouseEnter = (id: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpenDropdown(id);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 150);
  };

  return (
    <header
      ref={navRef}
      className={cn(
        "py-3 lg:py-3.5 border-b border-border/40 bg-background/90 backdrop-blur-md sticky top-0 z-40 transition-colors",
        className
      )}
    >
      <div className="container">
        <nav className="flex items-center justify-between gap-4">
          {/* Logo / Brand */}
          <Link
            href="/"
            className="flex items-center group transition-colors shrink-0"
            aria-label="SCP Home"
          >
            <span className="text-xl lg:text-2xl font-black italic tracking-wider text-foreground group-hover:text-primary transition-colors select-none">
              SCP
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
            {navItems.map((item) => {
              if (item.type === "link") {
                const isActive =
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href + "/"));
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={cn(
                      "px-3 py-1.5 text-sm font-medium rounded-lg transition-colors",
                      isActive
                        ? "bg-muted text-foreground font-semibold shadow-2xs"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    )}
                  >
                    {item.title}
                  </Link>
                );
              }

              // Dropdown item
              const isChildActive = item.items.some(
                (child) =>
                  pathname === child.href ||
                  (child.href !== "/" && pathname.startsWith(child.href))
              );
              const isDropdownOpen = openDropdown === item.id;

              return (
                <div
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                >
                  <button
                    type="button"
                    onClick={() =>
                      setOpenDropdown(isDropdownOpen ? null : item.id)
                    }
                    className={cn(
                      "flex items-center gap-1 px-3 py-1.5 text-sm font-medium rounded-lg transition-colors cursor-pointer",
                      isChildActive || isDropdownOpen
                        ? "bg-muted/80 text-foreground font-semibold"
                        : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                    )}
                    aria-expanded={isDropdownOpen}
                  >
                    <span>{item.title}</span>
                    <ChevronDown
                      className={cn(
                        "size-3.5 transition-transform duration-200 opacity-70",
                        isDropdownOpen && "rotate-180"
                      )}
                    />
                  </button>

                  {/* Dropdown Menu Popup */}
                  <div
                    className={cn(
                      "absolute left-0 top-full pt-2 z-50 transition-all duration-200",
                      isDropdownOpen
                        ? "opacity-100 translate-y-0 pointer-events-auto"
                        : "opacity-0 -translate-y-1.5 pointer-events-none"
                    )}
                  >
                    <div className="w-80 rounded-xl border border-border/80 bg-popover/95 backdrop-blur-md p-2 shadow-xl ring-1 ring-border/5">
                      <div className="flex flex-col gap-1">
                        {item.items.map((subItem) => {
                          const isSubActive =
                            pathname === subItem.href ||
                            (subItem.href !== "/" &&
                              pathname.startsWith(subItem.href));
                          const Icon = subItem.icon;

                          return (
                            <Link
                              key={subItem.href}
                              href={subItem.href}
                              onClick={() => setOpenDropdown(null)}
                              className={cn(
                                "flex items-start gap-3 rounded-lg p-2.5 transition-all group/item",
                                isSubActive
                                  ? "bg-muted/80 text-foreground"
                                  : "hover:bg-muted/60 text-muted-foreground hover:text-foreground"
                              )}
                            >
                              <div
                                className={cn(
                                  "flex size-8 items-center justify-center rounded-lg shrink-0 transition-colors mt-0.5",
                                  isSubActive
                                    ? "bg-primary text-primary-foreground"
                                    : "bg-muted group-hover/item:bg-primary group-hover/item:text-primary-foreground text-foreground"
                                )}
                              >
                                <Icon className="size-4" />
                              </div>
                              <div className="flex flex-col min-w-0">
                                <span
                                  className={cn(
                                    "text-sm font-semibold leading-snug transition-colors",
                                    isSubActive
                                      ? "text-primary"
                                      : "text-foreground group-hover/item:text-primary"
                                  )}
                                >
                                  {subItem.title}
                                </span>
                                <span className="text-xs text-muted-foreground line-clamp-1 mt-0.5 leading-tight">
                                  {subItem.description}
                                </span>
                              </div>
                            </Link>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right Actions: Theme Toggle & Contact Button */}
          <div className="hidden items-center gap-2.5 lg:flex shrink-0">
            <ThemeToggle />
            <Link
              href="/contact"
              className={cn(
                buttonVariants({ size: "sm" }),
                "h-9 px-3.5 gap-1.5 rounded-lg shadow-xs font-medium text-xs xl:text-sm cursor-pointer"
              )}
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="size-3.5" />
            </Link>
          </div>

          {/* Mobile Menu Trigger & Drawer */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger
              className="lg:hidden"
              render={
                <Button
                  variant="ghost"
                  size="icon"
                  className="size-9 rounded-lg border border-border/60"
                  aria-label="Open navigation menu"
                />
              }
            >
              <MenuIcon className="h-5 w-5" />
            </SheetTrigger>
            <SheetContent
              side="top"
              className="max-h-[85vh] overflow-y-auto p-5 rounded-b-2xl border-b border-border/60 shadow-2xl"
            >
              <SheetHeader className="pb-3 border-b border-border/40">
                <SheetTitle className="text-left">
                  <Link
                    href="/"
                    onClick={() => setIsOpen(false)}
                    className="flex items-center group"
                    aria-label="SCP Home"
                  >
                    <span className="text-xl font-black italic tracking-wider text-foreground hover:text-primary transition-colors select-none">
                      SCP
                    </span>
                  </Link>
                </SheetTitle>
              </SheetHeader>

              {/* Categorized Mobile Navigation Links */}
              <div className="flex flex-col gap-4 py-4">
                {mobileSections.map((section) => (
                  <div key={section.category} className="space-y-1">
                    <span className="text-[11px] font-mono uppercase tracking-wider text-muted-foreground/80 px-2 font-semibold">
                      {section.category}
                    </span>
                    <div className="grid grid-cols-1 gap-1 pt-1">
                      {section.links.map((link) => {
                        const isActive =
                          pathname === link.href ||
                          (link.href !== "/" &&
                            pathname.startsWith(link.href));
                        const Icon = link.icon;

                        return (
                          <Link
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className={cn(
                              "flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                              isActive
                                ? "bg-primary/10 text-primary font-semibold"
                                : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
                            )}
                          >
                            <Icon className="size-4 opacity-70" />
                            <span>{link.title}</span>
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>

              {/* Mobile Actions */}
              <div className="pt-3 border-t border-border/40 flex flex-col gap-2.5">
                <Link
                  href="/contact"
                  onClick={() => setIsOpen(false)}
                  className={cn(
                    buttonVariants({ variant: "default" }),
                    "w-full justify-center gap-1.5 h-10 rounded-lg cursor-pointer"
                  )}
                >
                  <Mail className="size-4" />
                  <span>Get in Touch / Contact</span>
                </Link>
                <ThemeToggle showLabel className="w-full justify-center" />
              </div>
            </SheetContent>
          </Sheet>
        </nav>
      </div>
    </header>
  );
};

export { Navbar5 };
