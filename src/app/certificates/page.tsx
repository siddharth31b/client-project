import type { Metadata } from "next";
import { Gallery1 } from "@/components/section/gallery1";

export const metadata: Metadata = {
  title: "Certificates & Recognitions | Subhash Chandra Pal",
  description:
    "Certificates of appreciation and conference recognitions from IEEE and international academic venues awarded to Subhash Chandra Pal.",
};

export default function CertificatesPage() {
  return (
    <main className="flex-1">
      <Gallery1 />
    </main>
  );
}
