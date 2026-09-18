"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, LoaderIcon, Mail, MapPin, Phone, Send, Sparkles } from "lucide-react";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/vendors/ui/button";
import {
  Field,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/vendors/ui/field";
import { Input } from "@/vendors/ui/input";
import { Textarea } from "@/vendors/ui/textarea";
import { cn } from "@/lib/utils";

const contactFormSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  phone: z.string().optional(),
  message: z.string().min(1, "Message is required"),
});

type ContactFormData = z.infer<typeof contactFormSchema>;

interface Contact30Props {
  badge?: string;
  heroBadge?: string;
  title?: string;
  heroTitle?: string;
  description?: string;
  heroDescription?: string;
  subtitle?: string;
  email?: string;
  secondaryEmail?: string;
  phone?: string;
  address?: string;
  className?: string;
  onSubmit?: (data: ContactFormData) => Promise<void>;
}

const Contact30 = ({
  badge,
  heroBadge,
  title,
  heroTitle,
  description,
  heroDescription,
  subtitle,
  email = "subhashc@ihubiitmandi.in",
  secondaryEmail = "scpal172012@gmail.com",
  phone,
  address = "Department of IT, IIT Mandi iHUB and HCI Foundation, North Campus, Kamand, Himachal Pradesh - 175075",
  className,
  onSubmit,
}: Contact30Props) => {
  const displayBadge = badge || heroBadge || "Academic Inquiries";
  const displayTitle = title || heroTitle || "Contact & Inquiries";
  const displayDescription =
    description ||
    heroDescription ||
    subtitle ||
    "For academic inquiries, research collaborations, dataset discussions, or scholarly feedback, reach out via institutional contact or the form below.";

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const form = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onSubmit",
    reValidateMode: "onSubmit",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const handleFormSubmit = async (data: ContactFormData) => {
    try {
      if (onSubmit) {
        await onSubmit(data);
      } else {
        console.log("Form submitted:", data);
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
      setIsSubmitted(true);
      setShowSuccess(true);
      form.reset();
      setTimeout(() => setShowSuccess(false), 4500);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch {
      form.setError("root", {
        message: "Something went wrong. Please try again.",
      });
    }
  };

  return (
    <section className={cn("w-full py-12 lg:py-20", className)}>
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16 items-start">
          {/* Left Column: Heading & Direct Channels */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              {displayBadge && (
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
                  <Mail className="size-3.5" />
                  <span>{displayBadge}</span>
                </div>
              )}
              <h1 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl lg:text-5xl">
                {displayTitle}
              </h1>
              {displayDescription && (
                <p className="text-base text-muted-foreground leading-relaxed">
                  {displayDescription}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${email}`}
                className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-primary/40 hover:bg-muted/30"
              >
                <div className="flex size-10 items-center justify-center rounded-lg bg-primary/10 text-primary shrink-0 transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <Mail className="size-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                    Institutional Email
                  </p>
                  <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                    {email}
                  </p>
                </div>
              </a>

              {secondaryEmail && (
                <a
                  href={`mailto:${secondaryEmail}`}
                  className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-primary/40 hover:bg-muted/30"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground shrink-0 transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                    <Mail className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                      Alternative Email
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {secondaryEmail}
                    </p>
                  </div>
                </a>
              )}

              {phone && (
                <a
                  href={`tel:${phone}`}
                  className="group flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4 transition-all hover:border-primary/40 hover:bg-muted/30"
                >
                  <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground shrink-0 transition-colors group-hover:bg-primary/20 group-hover:text-primary">
                    <Phone className="size-4" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                      Phone
                    </p>
                    <p className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors truncate">
                      {phone}
                    </p>
                  </div>
                </a>
              )}

              <div className="flex items-start gap-4 rounded-xl border border-border/60 bg-card p-4">
                <div className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground shrink-0 mt-0.5">
                  <MapPin className="size-4" />
                </div>
                <div className="min-w-0 flex-1">
                  <p className="text-xs font-mono font-medium text-muted-foreground uppercase tracking-wider">
                    Academic Affiliation
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed mt-0.5">
                    {address}
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-xs text-muted-foreground space-y-1">
              <p className="font-semibold text-foreground flex items-center gap-1.5">
                <Sparkles className="size-3.5 text-primary" />
                Research Collaboration
              </p>
              <p className="leading-relaxed">
                Open for joint academic grant proposals, clinical dataset collaborations, and peer-review appointments.
              </p>
            </div>
          </div>

          {/* Right Column: Send a Message Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={form.handleSubmit(handleFormSubmit)}
              className="w-full rounded-2xl border border-border/60 bg-card p-6 sm:p-8 md:p-10 shadow-sm"
            >
              <div className="mb-6 space-y-1">
                <h2 className="text-2xl font-bold tracking-tight text-foreground">
                  Send a Message
                </h2>
                <p className="text-sm text-muted-foreground">
                  Fill out the details below and I&apos;ll get back to you shortly.
                </p>
              </div>

              {isSubmitted && (
                <div
                  className={cn(
                    "mb-6 flex items-center gap-2.5 rounded-lg border border-green-500/20 bg-green-500/10 p-4 transition-opacity duration-500",
                    showSuccess ? "opacity-100" : "opacity-0",
                  )}
                >
                  <CheckCircle2 className="size-5 text-green-500 shrink-0" />
                  <p className="text-sm font-medium text-green-600 dark:text-green-400">
                    Thank you! Your message has been sent successfully.
                  </p>
                </div>
              )}

              <FieldGroup>
                <div className="grid gap-4 sm:grid-cols-2">
                  <Controller
                    control={form.control}
                    name="name"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Name <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          aria-invalid={fieldState.invalid}
                          placeholder="Your name"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />

                  <Controller
                    control={form.control}
                    name="email"
                    render={({ field, fieldState }) => (
                      <Field data-invalid={fieldState.invalid}>
                        <FieldLabel htmlFor={field.name}>
                          Email <span className="text-destructive">*</span>
                        </FieldLabel>
                        <Input
                          {...field}
                          id={field.name}
                          type="email"
                          aria-invalid={fieldState.invalid}
                          placeholder="you@example.com"
                        />
                        {fieldState.invalid && (
                          <FieldError errors={[fieldState.error]} />
                        )}
                      </Field>
                    )}
                  />
                </div>

                <Controller
                  control={form.control}
                  name="phone"
                  render={({ field }) => (
                    <Field>
                      <FieldLabel htmlFor={field.name}>Phone</FieldLabel>
                      <Input
                        {...field}
                        id={field.name}
                        type="tel"
                        placeholder="Phone number (optional)"
                      />
                    </Field>
                  )}
                />

                <Controller
                  control={form.control}
                  name="message"
                  render={({ field, fieldState }) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor={field.name}>
                        Message <span className="text-destructive">*</span>
                      </FieldLabel>
                      <Textarea
                        {...field}
                        id={field.name}
                        aria-invalid={fieldState.invalid}
                        placeholder="Share your inquiry, collaboration interest, or research discussion..."
                        rows={5}
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />

                {form.formState.errors.root && (
                  <p className="text-sm text-destructive">
                    {form.formState.errors.root.message}
                  </p>
                )}

                <Button
                  type="submit"
                  size="lg"
                  className="w-full"
                  disabled={form.formState.isSubmitting}
                >
                  {form.formState.isSubmitting ? (
                    <>
                      <LoaderIcon className="mr-2 size-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 size-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </FieldGroup>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Contact30 };
