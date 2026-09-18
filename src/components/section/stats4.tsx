import { BookOpen, FileCheck, Award, Microscope } from "lucide-react";
import { cn } from "@/lib/utils";

interface Stats4Props {
  className?: string;
}

const stats = [
  {
    value: "7+",
    label: "Journal & Conference Papers",
    icon: BookOpen,
  },
  {
    value: "8+",
    label: "Reviewer Venues & Panels",
    icon: FileCheck,
  },
  {
    value: "4+ Yrs",
    label: "Neurovascular AI Research",
    icon: Microscope,
  },
  {
    value: "2x",
    label: "GATE-EE Qualified (2018, 2020)",
    icon: Award,
  },
];

const Stats4 = ({ className }: Stats4Props) => {
  return (
    <section className={cn("py-20 lg:py-28 border-y border-border/40 bg-muted/20", className)}>
      <div className="container">
        <div className="flex flex-col items-center justify-between gap-8 lg:flex-row">
          <div className="text-center lg:text-left">
            <p className="text-xs font-semibold uppercase tracking-wider text-primary mb-1">
              Research Metrics
            </p>
            <p className="text-xl font-bold tracking-tight text-foreground lg:text-2xl">
              Academic & Scientific Impact
            </p>
          </div>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 lg:gap-10">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 text-center lg:items-start lg:text-left">
                <div className="flex items-center gap-2">
                  <span className="text-3xl font-extrabold tracking-tight text-foreground lg:text-4xl">
                    {stat.value}
                  </span>
                  <stat.icon className="size-5 text-primary" />
                </div>
                <span className="text-xs text-muted-foreground font-medium max-w-[140px] leading-snug">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Stats4 };
