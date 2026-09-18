import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "../styles/globals.css";
import { cn } from "@/lib/utils";
import { Navbar5 } from "@/components/layout/navbar5";
import { ThemeProvider } from "@/components/theme-provider";
import { Footer16 } from "@/components/layout/footer16";
import ClickSpark from "@/components/section/ClickSpark";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Subhash Chandra Pal | AI for Neurovascular Imaging and Clinical Insight",
    template: "%s | Subhash Chandra Pal",
  },
  description:
    "Portfolio of Subhash Chandra Pal, Post Doctoral Fellow at IIT Mandi iHUB and HCI Foundation. Research in medical image analysis and AI for neurovascular imaging and clinical insight.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground transition-colors duration-300">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange={false}>
          <ClickSpark
            sparkSize={10}
            sparkRadius={15}
            sparkCount={8}
            duration={400}
            easing="ease-out"
            extraScale={1}
          >
            <Navbar5 />
            {children}
            <Footer16 />
          </ClickSpark>
        </ThemeProvider>
      </body>
    </html>
  );
}