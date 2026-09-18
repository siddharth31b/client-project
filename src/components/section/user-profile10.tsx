import Image from "next/image";
import Link from "next/link";
import {
  BadgeCheck,
  BookOpen,
  Layers,
  ArrowUpRight,
} from "lucide-react";

import { buttonVariants } from "@/vendors/ui/button";
import { Card, CardContent } from "@/vendors/ui/card";
import { cn } from "@/lib/utils";

const LinkedInIcon = ({ className }: { className?: string }) => (
  <svg
    role="img"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451c.979 0 1.778-.773 1.778-1.729V1.73C24 .774 23.205 0 22.225 0z" />
  </svg>
);

export interface UserProfileData {
  name: string;
  designation: string;
  focus: string;
  institution?: string;
  department?: string;
  location?: string;
  image: string;
  verified?: boolean;
  linkedin?: string;
}

export interface UserProfile10Props {
  user?: Partial<UserProfileData>;
  className?: string;
}

const defaultUser: UserProfileData = {
  name: "Subhash Chandra Pal",
  designation: "Postdoctoral Researcher",
  focus: "AI for Neurovascular Imaging and Clinical Insight",
  institution: "IIT Mandi iHUB and HCI Foundation",
  department: "Department of IT",
  location: "North Campus, Kamand, Himachal Pradesh - 175075",
  image: "/SP_P.png",
  verified: true,
  linkedin: "https://www.linkedin.com/in/subhashchandrapal/",
};

const UserProfile10 = ({ user = defaultUser, className }: UserProfile10Props) => {
  const profile = { ...defaultUser, ...user };

  return (
    <Card
      className={cn(
        "w-full max-w-[340px] sm:max-w-[350px] overflow-hidden pt-0 shadow-lg border border-border/50 bg-card transition-all duration-300 hover:shadow-xl",
        className,
      )}
    >
      {/* Portrait image with balanced height */}
      <div className="relative h-[260px] sm:h-[280px] w-full overflow-hidden bg-muted/20">
        <Image
          src={profile.image}
          alt={profile.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 350px"
          className="size-full object-cover object-top transition-transform duration-500 hover:scale-105"
          priority
        />
      </div>

      <CardContent className="space-y-4 p-4 sm:p-5">
        {/* Name with verification badge */}
        <div>
          <div className="flex items-center gap-1.5">
            <h3 className="text-lg font-semibold tracking-tight text-foreground">
              {profile.name}
            </h3>
            {profile.verified && (
              <BadgeCheck className="size-5 fill-primary text-primary-foreground shrink-0" />
            )}
          </div>
          <p className="mt-0.5 text-sm font-medium text-primary">
            {profile.designation}
          </p>
          <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
            {profile.focus}
          </p>
        </div>

        {/* Verified scholarly indicators and internal navigation CTA */}
        <div className="flex items-center justify-between gap-2 pt-1">
          <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground shrink-0">
            <Link
              href="/publications"
              className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-primary"
              title="View Publications"
            >
              <BookOpen className="size-3.5 text-primary shrink-0" />
              <span className="whitespace-nowrap">7 Pubs</span>
            </Link>
            <Link
              href="/projects"
              className="inline-flex items-center gap-1.5 whitespace-nowrap transition-colors hover:text-primary"
              title="View Projects"
            >
              <Layers className="size-3.5 text-primary shrink-0" />
              <span className="whitespace-nowrap">5 Projects</span>
            </Link>
          </div>
          <a
            href={profile.linkedin || "https://www.linkedin.com/in/subhashchandrapal/"}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              buttonVariants({ size: "sm" }),
              "gap-1 text-xs h-8 px-2.5 sm:px-3 rounded-full shadow-xs shrink-0 whitespace-nowrap cursor-pointer"
            )}
            aria-label="Subhash Chandra Pal on LinkedIn"
          >
            <LinkedInIcon className="size-3.5 fill-current shrink-0" />
            <span>LinkedIn</span>
            <ArrowUpRight className="size-3 opacity-80 shrink-0" />
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export { UserProfile10 };
export default UserProfile10;
