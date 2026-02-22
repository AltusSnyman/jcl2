import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "JCL Projects | Premium Rural Construction & Landscaping NZ",
  description:
    "JCL Projects builds custom pole sheds, retaining walls, luxury driveways, and earthworks across Kaukapakapa, Rodney & greater Auckland. Request a free quote today.",
  alternates: {
    canonical: "https://jclprojects.co.nz",
  },
  openGraph: {
    url: "https://jclprojects.co.nz",
  },
};

export default function Home() {
  return (
    <main className="min-h-screen bg-jcl-background text-jcl-foreground font-body">
      <Navbar />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
