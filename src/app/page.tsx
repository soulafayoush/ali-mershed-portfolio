"use client";

import dynamic from "next/dynamic";
import Navbar from "@/components/portfolio/navbar";
import ScrollProgress from "@/components/portfolio/scroll-progress";
import Hero from "@/components/portfolio/hero";
import ToolsMarquee from "@/components/portfolio/tools-marquee";
import Services from "@/components/portfolio/services";
import SelectedWorks from "@/components/portfolio/selected-works";
import CreativeProcess from "@/components/portfolio/creative-process";
import About from "@/components/portfolio/about";
import Certificates from "@/components/portfolio/certificates";
import Testimonials from "@/components/portfolio/testimonials";
import Contact from "@/components/portfolio/contact";
import Footer from "@/components/portfolio/footer";
import MobileBottomNav from "@/components/portfolio/mobile-bottom-nav";
import StickyConversionFooter from "@/components/portfolio/sticky-conversion-footer";
import BackToTop from "@/components/portfolio/back-to-top";

const MouseSpotlight = dynamic(() => import("@/components/portfolio/mouse-spotlight"), { ssr: false });
const CustomCursor = dynamic(() => import("@/components/portfolio/custom-cursor"), { ssr: false });

export default function Home() {
  return (
    <div className="relative min-h-screen flex flex-col bg-[#0A192F] text-[#F4F4F4] selection:bg-gold-accent/30 overflow-x-hidden bg-grain">
      <MouseSpotlight />
      <CustomCursor />
      <ScrollProgress />
      <Navbar />

      <main className="flex-1">
        <Hero />
        <ToolsMarquee />
        <Services />
        <SelectedWorks />
        <CreativeProcess />
        <About />
        <Certificates />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
      <MobileBottomNav />
      <StickyConversionFooter />
    </div>
  );
}
