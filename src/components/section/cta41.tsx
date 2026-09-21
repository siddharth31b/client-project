import { useId } from "react";
import Link from "next/link";

import { Button } from "@/vendors/ui/button";

import { cn } from "@/lib/utils";

interface Button {
  text: string;
  url: string;
  icon?: React.ReactNode;
}
interface Buttons {
  primary?: Button;
  secondary?: Button;
}

interface CtaSimpleProps {
  heading: string;
  description: string;
  buttons?: Buttons;
  className?: string;
}

type Cta41Props = CtaSimpleProps;
type Props = Partial<Cta41Props>;

const defaultProps: Cta41Props = {
  heading: "Let's Connect & Collaborate",
  description:
    "Open for research collaborations, engineering leadership, and technical advising.",
  buttons: {
    primary: {
      text: "Get in Touch",
      url: "/contact",
    },
    secondary: {
      text: "View Projects",
      url: "/projects",
    },
  },
};

const DottedPattern = () => {
  const patternId = useId().replaceAll(":", "");
  return (
    <svg
      aria-hidden
      className="pointer-events-none absolute inset-0 z-0 h-full w-full"
    >
      <defs>
        <pattern
          id={patternId}
          width={20}
          height={20}
          patternUnits="userSpaceOnUse"
        >
          <circle
            cx={10}
            cy={10}
            r={1.5}
            fill="currentColor"
            className="text-border"
          />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${patternId})`} />
    </svg>
  );
};

const Cta41 = (props: Props) => {
  const { heading, description, buttons, className } = {
    ...defaultProps,
    ...props,
  };

  return (
    <section className={cn("py-32", className)}>
      <div className="relative flex items-center justify-center overflow-hidden border py-20 text-center md:p-20">
        <DottedPattern />
        <div className="relative z-10 container">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-3xl font-semibold text-balance md:text-5xl">
              {heading}
            </h2>
            <p className="md:text-lg">{description}</p>
            <div className="mt-11 flex flex-col justify-center gap-2 sm:flex-row">
              {buttons?.primary && (
                <Button size="lg" render={<Link href={buttons.primary.url} />} nativeButton={false}>
                  {buttons.primary.text}
                </Button>
              )}
              {buttons?.secondary && (
                <Button size="lg" variant="outline" render={<Link href={buttons.secondary.url} />} nativeButton={false}>
                  {buttons.secondary.text}
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Cta41 };
