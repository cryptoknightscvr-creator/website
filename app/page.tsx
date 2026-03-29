"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Loader from "@/components/Loader";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import VisionSection from "@/components/sections/VisionSection";
import EventsSection from "@/components/sections/EventsSection";
import MagazineSection from "@/components/sections/MagazineSection";
import BlogSection from "@/components/sections/BlogSection";
import TeamSection from "@/components/sections/TeamSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  const [loading, setLoading] = useState(true);

  return (
    <>
      <AnimatePresence>
        {loading && <Loader onComplete={() => setLoading(false)} />}
      </AnimatePresence>
      <div className={`transition-opacity duration-1000 ${loading ? "opacity-0" : "opacity-100"}`}>
        <HeroSection />
        <AboutSection />
        <VisionSection />
        <EventsSection />
        <MagazineSection />
        <BlogSection />
        <TeamSection />
        <ContactSection />
      </div>
    </>
  );
}
