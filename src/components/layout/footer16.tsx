import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/vendors/ui/accordion";
import { Button } from "@/vendors/ui/button";
import { cn } from "@/lib/utils";

const Github = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
);

const Linkedin = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const Facebook = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const Twitter = ({ className }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const SOCIAL_LINKS = [
  {
    icon: Github,
    href: "#",
  },
  {
    icon: Linkedin,
    href: "#",
  },
  {
    icon: Facebook,
    href: "#",
  },
  {
    icon: Twitter,
    href: "#",
  },
];

const NAVIGATION = [
  {
    title: "General",
    links: [
      { name: "Home", href: "/" },
      { name: "About", href: "/about" },
      { name: "Experience", href: "/experience" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Portfolio",
    links: [
      { name: "Projects", href: "/projects" },
      { name: "Skills", href: "/skills" },
      { name: "Certificates", href: "/certificates" },
    ],
  },
  {
    title: "Academics",
    links: [
      { name: "Research", href: "/research" },
      { name: "Publications", href: "/publications" },
      { name: "Achievements", href: "/achievements" },
    ],
  },
];

interface Footer16Props {
  className?: string;
}

const Footer16 = ({ className }: Footer16Props) => {
  return (
    <section className={cn("bg-background pt-24 pb-12 border-t border-border/40", className)}>
      <footer className="container">
        <div className="grid gap-10 pb-6 md:grid-cols-2 md:pb-0">
          <div className="flex flex-col justify-start gap-8">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                Alfredo soprana
              </span>
            </Link>
            <div className="flex items-center justify-start gap-4 md:flex-row">
              {SOCIAL_LINKS.map((item, i) => (
                <Button
                  key={`social-link-${i}`}
                  size="icon"
                  variant="secondary"
                  aria-label="Social Link"
                >
                  <a href={item.href} aria-label="Social link">
                    <item.icon className="size-4 lg:size-5" />
                  </a>
                </Button>
              ))}
            </div>
          </div>
          <div>
            <div className="hidden md:flex md:gap-10 lg:gap-24 xl:gap-32">
              {NAVIGATION.map((section) => (
                <div className="flex flex-col gap-4" key={section.title}>
                  <h6 className="mb-2 text-sm font-semibold text-foreground uppercase tracking-wider">
                    {section.title}
                  </h6>
                  {section.links.map((link) => (
                    <Link
                      className="text-sm font-medium text-muted-foreground transition-colors duration-200 ease-in-out hover:text-foreground"
                      key={link.name}
                      href={link.href}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
            <div className="md:hidden">
              <Accordion className="w-full">
                {NAVIGATION.map((section, i) => (
                  <AccordionItem value={`item-${i}`} key={section.title}>
                    <AccordionTrigger className="py-4 text-sm text-foreground uppercase tracking-wider hover:no-underline">
                      {section.title}
                    </AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-2">
                      {section.links.map((link) => (
                        <Link
                          className="text-sm font-medium text-muted-foreground transition-colors duration-200 ease-in-out hover:text-foreground"
                          key={link.name}
                          href={link.href}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
        <div className="overflow-hidden select-none pointer-events-none pt-12">
          <p className="text-center font-black uppercase tracking-tighter text-foreground/5 text-5xl sm:text-7xl md:text-8xl lg:text-[10rem] leading-none">
            Alfredo soprana
          </p>
        </div>
      </footer>
    </section>
  );
};

export { Footer16 };
