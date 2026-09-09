import { cn } from "@/lib/utils";

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
  eyebrow?: string;
  description?: string;
  person?: AboutSignaturePerson;
  signature?: Image;
  className?: string;
}

interface About20Props extends AboutSignatureProps {}
type Props = Partial<About20Props>;

const defaultProps: About20Props = {
  eyebrow: "Founding Engineeer",
  description: "I am a creator, thinker, and builder who believes in crafting experiences that truly connect. My story is built on passion, innovation, and the drive to bring meaningful ideas to life.\n\nFrom concept to creation, I transform visions into reality through cutting-edge technology and timeless design. Every project is an opportunity to push boundaries and deliver solutions that inspire and empower.",
  person: {
  name: "Alfredo soprana",
  role: "Founder and CEO",
  avatar: {
  src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about-signature/photo-2-3x4.jpg",
  alt: "Alfredo soprana",
},
  location: "San Francisco, CA",
  handle: "@shadcnblocks.com",
},
  signature: {
    src: "https://deifkwefumgah.cloudfront.net/shadcnblocks/image-set/modern/about-signature/signature.svg",
    alt: "",
  },
};

const MAX_PARAGRAPHS = 2;

const About20 = (props: Props) => {
  const { eyebrow, description, person, signature, className } = {
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
      className={cn("bg-background py-32 text-foreground", className)}
    >
      <div className="container">
        <div className="grid w-full grid-cols-1 gap-15 lg:grid-cols-7 lg:gap-12">
          <div className="max-w-4xl space-y-15 lg:col-span-5">
            <div className="flex items-center gap-4 tracking-tight lg:text-xl">
              {eyebrow && <span className="opacity-50">{eyebrow}</span>}
              {person?.name && <span>{person.name}</span>}
            </div>
            {paragraphs.map((paragraph) => (
              <p
                key={paragraph.slice(0, 24)}
                className="text-xl font-medium tracking-tight lg:text-3xl"
              >
                {paragraph}
              </p>
            ))}
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
                  className="h-14 w-auto dark:invert"
                />
              )}
            </div>
          </div>
          {portrait && (
            <div className="h-100 w-full overflow-hidden lg:col-span-2">
              <img
                src={portrait.src}
                alt={portrait.alt}
                className="w-full -translate-y-12 object-cover"
              />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export { About20 };
