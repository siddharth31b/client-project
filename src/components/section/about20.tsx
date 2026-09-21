import { User } from "lucide-react";
import { cn } from "@/lib/utils";
import { UserProfile10 } from "@/components/section/user-profile10";

interface AboutSignaturePerson {
  name: string;
  role: string;
  avatar?: Image;
  location?: string;
  handle?: string;
}
interface Image {
  src: string;
  alt: string;
  srcDark?: string;
}

interface AboutSignatureProps {
  badge?: string;
  heading?: string;
  subheading?: string;
  eyebrow?: string;
  description?: string;
  person?: AboutSignaturePerson;
  signature?: Image;
  className?: string;
}

type About20Props = AboutSignatureProps;
type Props = Partial<About20Props>;

const defaultProps: About20Props = {
  eyebrow: "Post Doctoral Fellow",
  description:
    "Subhash Chandra Pal is a researcher in medical image analysis and artificial intelligence, with a focus on developing deep learning–based tools for the diagnosis, treatment, and follow-up of intracranial aneurysms.\n\nHis work integrates multi-modal neuroimaging, radiomics, and clinical data to enable accurate, interpretable, and clinically relevant solutions for neurovascular disease management. He pursued his Ph.D. under the joint supervision of Dr. Ashis Kumar Dhara (NIT Durgapur) and Prof. Robin Strand (Uppsala University, Sweden).",
  person: {
    name: "Subhash Chandra Pal",
    role: "Post Doctoral Fellow · Department of IT, IIT Mandi iHUB",
    avatar: {
      src: "/SP_P.png",
      alt: "Subhash Chandra Pal",
    },
    location: "IIT Mandi, Himachal Pradesh",
    handle: "subhashc@ihubiitmandi.in",
  },
  signature: {
    src: "/iHub_Logo.png",
    alt: "IIT Mandi iHUB Logo",
  },
};

const MAX_PARAGRAPHS = 2;

const About20 = (props: Props) => {
  const {
    badge,
    heading,
    subheading,
    eyebrow,
    description,
    person,
    signature,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const portrait = person?.avatar;
  const paragraphs = (description ?? "")
    .split("\n\n")
    .filter(Boolean)
    .slice(0, MAX_PARAGRAPHS);

  return (
    <section
      className={cn("bg-background py-16 lg:py-24 text-foreground", className)}
    >
      <div className="container">
        <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-7 lg:gap-12">
          <div className="max-w-4xl space-y-8 lg:col-span-5">
            {/* Upper Header: About, Subhash Chandra Pal, Role */}
            <div className="space-y-3">
              {badge && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
                  <User className="size-3.5" />
                  <span>{badge}</span>
                </div>
              )}
              {heading ? (
                <div className="space-y-1">
                  <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                    {heading}
                  </h2>
                  {subheading && (
                    <p className="text-2xl font-bold text-foreground/90 sm:text-3xl lg:text-4xl">
                      {subheading}
                    </p>
                  )}
                  {eyebrow && (
                    <p className="text-xs sm:text-sm font-mono font-medium text-primary uppercase tracking-wider pt-0.5">
                      {eyebrow}
                    </p>
                  )}
                </div>
              ) : (
                <div className="flex items-center gap-4 tracking-tight lg:text-xl">
                  {eyebrow && <span className="opacity-50">{eyebrow}</span>}
                  {person?.name && <span>{person.name}</span>}
                </div>
              )}
            </div>

            <div className="space-y-6">
              {paragraphs.map((paragraph) => (
                <p
                  key={paragraph.slice(0, 24)}
                  className="text-xl font-medium tracking-tight text-foreground/90 leading-relaxed lg:text-2xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-25">
              {person?.role && (
                <p className="mb-4 text-sm text-foreground/50 uppercase lg:text-base">
                  {person.role}
                </p>
              )}
              {signature && (
                <img
                  src={signature.src}
                  alt={signature.alt}
                  className="h-14 w-auto object-contain"
                />
              )}
            </div>
          </div>
          <div className="flex w-full justify-center lg:col-span-2 lg:justify-end items-start">
            <UserProfile10
              user={{
                ...(person?.name ? { name: person.name } : {}),
                ...(portrait?.src ? { image: portrait.src } : {}),
                linkedin: "https://www.linkedin.com/in/subhashchandrapal/",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { About20 };
