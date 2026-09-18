import type { Metadata } from "next";
import { Contact30 } from "@/components/section/contact30";

export const metadata: Metadata = {
  title: "Contact | Subhash Chandra Pal",
  description:
    "Get in touch with Subhash Chandra Pal for research collaborations, academic inquiries, and scholarly discussions in medical image analysis and AI.",
};

export default function ContactPage() {
  return (
    <main className="flex-1">
      <Contact30 />
    </main>
  );
}
