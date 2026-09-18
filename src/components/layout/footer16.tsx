import Link from "next/link";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/vendors/ui/accordion";
import { cn } from "@/lib/utils";



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
    <section className={cn("bg-background pt-14 pb-8 border-t border-border/40", className)}>
      <footer className="container">
        <div className="grid gap-10 pb-6 md:grid-cols-2 md:pb-0">
          <div className="flex flex-col justify-start gap-4">
            {/* Logo */}
            <Link href="/" className="inline-block">
              <span className="text-2xl font-bold tracking-tight text-foreground hover:text-primary transition-colors">
                Subhash Chandra Pal
              </span>
            </Link>
            <div className="space-y-1 text-sm text-muted-foreground">
              <p className="font-semibold text-foreground">Post Doctoral Fellow</p>
              <p>Department of IT</p>
              <p>IIT Mandi iHUB and HCI Foundation</p>
              <p>IIT Mandi, North Campus, Kamand, HP - 175075</p>
              <p className="pt-2">
                <a
                  href="mailto:subhashc@ihubiitmandi.in"
                  className="text-foreground hover:text-primary transition-colors font-mono text-xs"
                >
                  subhashc@ihubiitmandi.in
                </a>
              </p>
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
        <div className="overflow-hidden select-none pointer-events-none pt-8">
          <p className="text-center font-black uppercase tracking-tighter text-foreground/[0.035] text-4xl sm:text-6xl md:text-7xl lg:text-8xl leading-none">
            Subhash Chandra Pal
          </p>
        </div>
      </footer>
    </section>
  );
};

export { Footer16 };
