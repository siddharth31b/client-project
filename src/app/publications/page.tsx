import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BookOpen, FileText } from "lucide-react";

import { List2, ListItem } from "@/components/section/list2";

export const metadata: Metadata = {
  title: "Publications | Subhash Chandra Pal",
  description:
    "Peer-reviewed journal articles and conference papers in neurovascular image analysis, deep learning, and medical AI by Subhash Chandra Pal.",
};

const journalArticles: ListItem[] = [
  {
    icon: <FileText className="size-6 text-primary" />,
    title: "Computer‐Aided Volumetric Quantification of Pre‐and Post‐Treatment Intracranial Aneurysms in MRA",
    category: "IET Image Processing • Vol. 19, Iss. 1, e70199 (2025)",
    description:
      "Pal, Subhash Chandra, Chirag Kamal Ahuja, Dimitrios Toumpanakis, Johan Wikstrom, Robin Strand, and Ashis Kumar Dhara.",
    link: "/contact",
  },
  {
    icon: <FileText className="size-6 text-primary" />,
    title: "Computationally efficient dilated residual networks for segmentation of major cerebral vessels in MRA",
    category: "Network Modeling Analysis in Health Informatics and Bioinformatics • Vol. 14, Iss. 1, Art. 95 (2025)",
    description:
      "Pal, Subhash Chandra, Chirag Kamal Ahuja, Dimitrios Toumpanakis, Johan Wikstrom, Robin Strand, and Ashis Kumar Dhara.",
    link: "/contact",
  },
  {
    icon: <FileText className="size-6 text-primary" />,
    title: "Machine learning analysis of integrated ABP and PPG signals towards early detection of coronary artery disease",
    category: "Scientific Reports (Nature Portfolio) • Vol. 15, Iss. 1, pp. 1–9 (2025)",
    description:
      "Amandeep Minhas, Subhash Chandra Pal, and Karan Jain.",
    link: "/contact",
  },
  {
    icon: <FileText className="size-6 text-primary" />,
    title: "Multi-level residual dual attention network for major cerebral arteries segmentation in MRA toward diagnosis of cerebrovascular disorders",
    category: "IEEE Transactions on NanoBioscience • Vol. 23, Iss. 1, pp. 167–175 (2023)",
    description:
      "Subhash Chandra Pal, Dimitrios Toumpanakis, Johan Wikström, Chirag Kamal Ahuja, Robin Strand, and Ashis Kumar Dhara.",
    link: "/contact",
  },
];

const conferencePapers: ListItem[] = [
  {
    icon: <BookOpen className="size-6 text-chart-1" />,
    title: "Automated Segmentation of Post-Treatment Intracranial Aneurysms from MRA Images: A U-Net based Approach",
    category: "2024 IEEE 21st India Council International Conference (INDICON) • pp. 1–5, IEEE (2024)",
    description:
      "Pal, Subhash Chandra, Dimitrios Toumpanakis, Johan Wikström, Chirag Kamal Ahuja, Robin Strand, and Ashis Kumar Dhara.",
    link: "/contact",
  },
  {
    icon: <BookOpen className="size-6 text-chart-1" />,
    title: "Context-Aware Preprocessing Method for Reduction of Volume of Interest Towards Quantification of Pre and Post-treatment Intracranial Aneurysms in MRA",
    category: "International Conference on Pattern Recognition (ICPR) • pp. 233–242, Springer Nature Switzerland (2024)",
    description:
      "Pal, Subhash Chandra, Dimitrios Toumpanakis, Johan Wikström, Chirag Kamal Ahuja, Robin Strand, and Ashis Kumar Dhara.",
    link: "/contact",
  },
  {
    icon: <BookOpen className="size-6 text-chart-1" />,
    title: "Segmentation of major cerebral vessel from mra images and evaluation using u-net family",
    category: "2022 IEEE 6th International Conference on Condition Assessment Techniques in Electrical Systems (CATCON) • pp. 235–238, IEEE (2022)",
    description:
      "Pal, Subhash Chandra, Subhashis Banerjee, Dimitrios Toumpanakis, Johan Wikström, Robin Strand, and Ashis Kumar Dhara.",
    link: "/contact",
  },
];

export default function PublicationsPage() {
  return (
    <main className="flex-1">
      {/* 1. Publications Hero */}
      <section className="pt-12 pb-6 lg:pt-20 lg:pb-10 border-b border-border/40 bg-muted/20">
        <div className="container">
          <div className="max-w-3xl space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/20 bg-primary/5 text-xs font-medium text-primary">
              <span>Peer-Reviewed Research</span>
            </div>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Publications & Papers
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Documented scholarly output across leading international journals and IEEE / Springer conferences in medical imaging, deep learning, and neurovascular diagnostics.
            </p>
          </div>
        </div>
      </section>

      {/* 2. Journal Articles */}
      <List2
        heading="Journal Articles"
        buttonText="Inquire / Cite"
        items={journalArticles}
      />

      {/* 3. Conference Papers */}
      <List2
        heading="Conference Proceedings"
        buttonText="Inquire / Cite"
        items={conferencePapers}
      />

      {/* 4. Research Connection Section */}
      <section className="py-12 border-t border-border/40 bg-muted/10">
        <div className="container flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-foreground">
              Interested in the Underlying Methodologies?
            </h3>
            <p className="text-sm text-muted-foreground">
              Explore our core deep learning architectures, MRA image preprocessing, and clinical validation.
            </p>
          </div>
          <Link
            href="/research"
            className="inline-flex items-center gap-1.5 font-semibold text-primary hover:underline shrink-0 text-sm"
          >
            <span>Explore Research</span>
            <ArrowRight className="size-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
