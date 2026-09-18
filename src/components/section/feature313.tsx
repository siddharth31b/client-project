"use client";

import { motion } from "framer-motion";
import { Play } from "lucide-react";

import { Button } from "@/vendors/ui/button";
import { Card } from "@/vendors/ui/card";
import { BorderGlow } from "./BorderGlow";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
  DialogTrigger,
} from "@/vendors/ui/dialog";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

interface Feature313Props {
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
  videoUrl?: string;
  videoCaption?: string;
  videoSecondaryCaption?: string;
  cards?: {
    title: string;
    image: string;
    className?: string;
  }[];
}

const Feature313 = ({
  className,
  imageSrc = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
  imageAlt = "Neurovascular Imaging and Medical AI Research",
  videoUrl = "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/man-1.mp4",
  videoCaption = "Research Overview & Clinical Insight",
  videoSecondaryCaption = "(Medical AI)",
  cards = [
    {
      title: "Deep Learning for Neurovascular Imaging & MRA Analysis",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-2.svg",
    },
    {
      title: "Automated Segmentation & Quantification of Intracranial Aneurysms",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-3.svg",
    },
    {
      title: "Computationally Efficient Dilated & Dual-Attention Networks",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-4.svg",
    },
    {
      title: "Translational Healthcare AI & Non-Invasive Biomarkers",
      image:
        "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/placeholder-5.svg",
    },
  ],
}: Feature313Props) => {
  // Helper function to extract YouTube video ID
  const getYouTubeVideoId = (url: string) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const youtubeId = videoUrl ? getYouTubeVideoId(videoUrl) : null;
  const isYouTube = !!youtubeId;
  const isMobile = useIsMobile();

  return (
    <section className={cn("bg-muted py-24", className)}>
      <div className="container flex flex-col gap-2">
        <div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <BorderGlow
              key={index}
              borderRadius={20}
              glowRadius={36}
              glowIntensity={1.25}
              edgeSensitivity={26}
              glowColor="205 90 70"
              colors={["#38bdf8", "#818cf8", "#c084fc"]}
              className="h-full group cursor-pointer transition-all duration-200 hover:-translate-y-1"
            >
              <div className="flex flex-col justify-between h-full min-h-[230px] lg:min-h-[250px] p-8 lg:p-10 gap-8">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex gap-1.5 items-center">
                    {cards.map((_, circleIndex) => (
                      <div
                        key={circleIndex}
                        className={cn(
                          "h-2 w-2 rounded-full transition-colors",
                          index >= circleIndex
                            ? "bg-primary shadow-[0_0_8px_rgba(56,189,248,0.6)]"
                            : "bg-muted-foreground/30"
                        )}
                      />
                    ))}
                  </div>
                  <div className="text-xs font-mono font-medium text-muted-foreground/80 tracking-wider">
                    0{index + 1}
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="size-12 flex-shrink-0 bg-neutral-100 dark:bg-white rounded-xl flex items-center justify-center p-2.5 shadow-xs border border-border/80 dark:border-none ring-1 ring-black/5">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="size-7 object-contain"
                    />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-sm lg:text-[15px] font-semibold leading-snug text-foreground tracking-tight">
                      {card.title}
                    </h3>
                  </div>
                </div>
              </div>
            </BorderGlow>
          ))}
        </div>

        {/* Video Container */}
        <Dialog>
          <DialogTrigger render={<motion.div className="group relative aspect-video min-h-72 cursor-pointer overflow-hidden rounded-lg" whileHover="hover" initial="initial" />}><motion.div
                                  className="absolute inset-0"
                                  variants={{
                                    initial: { filter: "blur(0px)" },
                                    hover: { filter: "blur(4px)" },
                                  }}
                                  transition={{ duration: 0.3, ease: "easeOut" }}
                                >
                                  <motion.img
                                    src={imageSrc}
                                    alt={imageAlt}
                                    className="h-full w-full rounded-lg object-cover"
                                    variants={{
                                      initial: { scale: 1 },
                                      hover: { scale: 1.1 },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                  />
                                </motion.div><div className="bg-opacity-20 absolute inset-0 flex items-center justify-center">
                                  <motion.div
                                    className="flex flex-col items-center justify-center gap-2 md:flex-row"
                                    variants={{
                                      initial: { gap: "0.5rem" },
                                      hover: { gap: "0rem" },
                                    }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                  >
                                    <motion.div
                                      variants={{
                                        initial: { x: 0, scale: 1 },
                                        hover: {
                                          x: isMobile ? 0 : "75%",
                                          scale: 1.2,
                                        },
                                      }}
                                      transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                      <Button
                                        size="lg"
                                        className="h-14 w-14 rounded-full bg-secondary hover:bg-secondary lg:h-20 lg:w-20"
                                      >
                                        <Play className="ml-0.5 size-5 text-primary md:size-7" />
                                        <span className="sr-only">{videoCaption}</span>
                                      </Button>
                                    </motion.div>

                                    <motion.div
                                      className="text-center md:text-left"
                                      variants={{
                                        initial: { opacity: 1 },
                                        hover: { opacity: 0, transform: "-translate-y-3" },
                                      }}
                                      transition={{ duration: 0.3, ease: "easeOut" }}
                                    >
                                      <div className="px-4 py-2">
                                        <p className="text-lg font-bold text-secondary">
                                          {videoCaption}
                                        </p>
                                        <p className="text-lg font-medium text-muted-foreground">
                                          {videoSecondaryCaption}
                                        </p>
                                      </div>
                                    </motion.div>
                                  </motion.div>
                                </div></DialogTrigger>
          <DialogContent className="w-full border-none bg-black p-0 md:max-w-6xl md:p-1">
            <DialogTitle className="sr-only">{videoCaption}</DialogTitle>
            <DialogDescription className="sr-only">
              {videoSecondaryCaption} - {videoCaption}
            </DialogDescription>
            <div className="aspect-video w-full">
              {isYouTube ? (
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                  title="Video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              ) : (
                <video
                  className="h-full w-full rounded-lg"
                  controls
                  autoPlay
                  src={videoUrl}
                >
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export { Feature313 };
