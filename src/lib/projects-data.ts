export interface ProjectDetail {
  label: string;
  value: string;
}

export interface ProjectItem {
  id: string | number;
  slug: string;
  title: string;
  category: string;
  description: string;
  launchDate: string;
  image: string;
  scope: string;
  client?: string;
  location?: string;
  year: string;
  paragraphs: string[];
  galleryImages: string[];
  liveUrl?: string;
}

export const PROJECTS_DATA: ProjectItem[] = [
  {
    id: 1,
    slug: "intracranial-aneurysm-analysis",
    title: "Computer-Aided Diagnostic Analysis of Intracranial Aneurysms from MRA Images",
    category: "Neurovascular Imaging & Deep Learning",
    description:
      "Advanced deep learning frameworks integrating multi-modal neuroimaging and radiomics for automated detection, segmentation, and diagnostic evaluation of intracranial aneurysms in magnetic resonance angiography (MRA).",
    launchDate: "2025",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    year: "2022 – 2025",
    scope: "Deep Learning, Radiomics, MRA Segmentation, Diagnostic AI",
    client: "NIT Durgapur & Uppsala University",
    location: "India & Sweden",
    paragraphs: [
      "Intracranial aneurysms present significant cerebrovascular risks requiring rapid, accurate, and non-invasive detection. This doctoral research project developed computational methods for computer-aided diagnostic analysis of intracranial aneurysms using magnetic resonance angiography (MRA) datasets.",
      "The framework integrates novel attention-guided neural architectures and radiomic feature extraction to assist neuro-radiologists in detecting aneurysm boundaries, assessing morphology, and evaluating rupture risk with high specificity and sensitivity across multi-center cohorts.",
    ],
    galleryImages: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    ],
  },
  {
    id: 2,
    slug: "cerebral-vessel-segmentation",
    title: "Computationally Efficient Dilated Residual & Attention Networks for Major Cerebral Vessel Segmentation",
    category: "Cerebrovascular Segmentation",
    description:
      "Novel deep learning architectures combining dilated convolutions, residual connections, and dual attention mechanisms to accurately delineate complex cerebral vasculature from MRA images.",
    launchDate: "2025",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    year: "2023 – 2025",
    scope: "Dilated Residual Networks, Dual Attention, Cerebrovascular Mapping",
    client: "Indo-Swedish DBT Collaborative Project",
    location: "NIT Durgapur & Uppsala University",
    paragraphs: [
      "Precise segmentation of major cerebral vessels is essential for diagnosing cerebrovascular anomalies and planning neuro-interventional procedures. Standard deep architectures often struggle with thin vascular structures and high computational complexity.",
      "This work introduced computationally efficient dilated residual networks and multi-level residual dual attention networks that capture multi-scale spatial dependencies, resolving microvascular continuity while reducing inference memory overhead for clinical deployment.",
    ],
    galleryImages: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    ],
  },
  {
    id: 3,
    slug: "post-treatment-aneurysm-segmentation",
    title: "Automated Segmentation of Post-Treatment Intracranial Aneurysms from MRA Images",
    category: "Clinical Follow-Up & Treatment Monitoring",
    description:
      "A specialized U-Net based deep learning methodology specifically optimized for delineating residual and recurrent aneurysms following neurosurgical clipping or endovascular coiling.",
    launchDate: "2024",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    year: "2023 – 2024",
    scope: "Post-Interventional Imaging, Artifact Handling, U-Net Architecture",
    client: "DBT Indo-Swedish Initiative",
    location: "India & Sweden",
    paragraphs: [
      "Post-treatment evaluation of intracranial aneurysms is complicated by metallic artifacts, coils, clips, and hemodynamic remodeling within treated vessel lumens.",
      "This project formulated an automated segmentation pipeline utilizing specialized U-Net variants that suppress artifact distortions, facilitating objective longitudinal follow-up and detection of aneurysm recanalization from non-invasive MRA acquisitions.",
    ],
    galleryImages: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
    ],
  },
  {
    id: 4,
    slug: "aneurysm-volumetric-quantification",
    title: "Context-Aware Volumetric Quantification of Pre- and Post-Treatment Aneurysms in MRA",
    category: "Quantitative Medical Imaging",
    description:
      "Rigorous mathematical and computational pipeline for context-aware volume-of-interest reduction and 3D volumetric quantification of intracranial aneurysms across patient treatment timelines.",
    launchDate: "2025",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
    year: "2024 – 2025",
    scope: "3D Volumetrics, Context-Aware ROI Reduction, Longitudinal Tracking",
    client: "Academic Research Initiative",
    location: "NIT Durgapur & Collaborating Hospitals",
    paragraphs: [
      "Manual volumetric measurement of aneurysms across longitudinal scans is time-intensive and subject to inter-observer variability. This research developed a context-aware preprocessing methodology that reduces the search volume of interest and performs automated 3D voxel quantification.",
      "The method provides clinicians with reproducible volumetric indices to assess aneurysm growth, shrinkage post-treatment, or residual neck enlargement, published in IET Image Processing and ICPR.",
    ],
    galleryImages: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw6.jpeg",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw1.jpeg",
    ],
  },
  {
    id: 5,
    slug: "coronary-artery-disease-signal-analysis",
    title: "Machine Learning Analysis of Integrated ABP and PPG Signals for Early CAD Detection",
    category: "Translational Physiological Signal AI",
    description:
      "Non-invasive physiological signal analysis integrating Arterial Blood Pressure (ABP) and Photoplethysmogram (PPG) waveforms using machine learning for early detection of coronary artery disease.",
    launchDate: "2025",
    image:
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
    year: "2024 – 2025",
    scope: "Biomedical Signal Processing, PPG Waveform Analysis, Predictive ML",
    client: "Healthcare AI Research Collaboration",
    location: "India",
    paragraphs: [
      "Coronary artery disease (CAD) remains a leading cause of cardiovascular mortality worldwide. Early detection via non-invasive, accessible screening methods is crucial for preventive intervention.",
      "This study, published in Nature Scientific Reports, investigates integrated feature extraction from synchronized ABP and PPG hemodynamic waveforms, demonstrating high predictive diagnostic accuracy for early CAD stratifications without invasive angiography.",
    ],
    galleryImages: [
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw2.jpeg",
      "https://deifkwefumgah.cloudfront.net/shadcnblocks/block/lummi/bw3.jpeg",
    ],
  },
];

export function getAllProjects(): ProjectItem[] {
  return PROJECTS_DATA;
}

export function getProjectBySlug(slug: string): ProjectItem | undefined {
  return PROJECTS_DATA.find((p) => p.slug === slug);
}

export function getRelatedProjects(currentSlug: string, count: number = 2): ProjectItem[] {
  return PROJECTS_DATA.filter((p) => p.slug !== currentSlug).slice(0, count);
}

