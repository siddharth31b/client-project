import { Bento53Tile1 } from "@/components/section/bento53-tile1";
import { Bento53Tile2 } from "@/components/section/bento53-tile2";
import { Bento53Tile3 } from "@/components/section/bento53-tile3";
import { Bento53Tile4 } from "@/components/section/bento53-tile4";
import { Bento53Tile5 } from "@/components/section/bento53-tile5";
import { cn } from "@/lib/utils";

interface Bento53Props {
  className?: string;
  asSection?: boolean;
}

const Bento53 = ({ className, asSection = false }: Bento53Props) => {
  const content = (
    <div className="container mx-auto">
      <div className="flex flex-col gap-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="overflow-hidden rounded-xl border border-border/50 bg-card">
            <Bento53Tile1 />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card">
            <Bento53Tile2 />
          </div>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card">
            <Bento53Tile3 />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card">
            <Bento53Tile4 />
          </div>
          <div className="overflow-hidden rounded-2xl border border-border/50 bg-card">
            <Bento53Tile5 />
          </div>
        </div>
      </div>
    </div>
  );

  if (asSection) {
    return (
      <section className={cn("bg-background py-12", className)}>
        {content}
      </section>
    );
  }

  return <div className={cn("w-full", className)}>{content}</div>;
};

export { Bento53 };
