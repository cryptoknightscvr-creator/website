"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { AnimatedText } from "@/components/AnimatedText";

export default function HeroSection() {
  const { scrollY } = useScroll();
  const yBg = useTransform(scrollY, [0, 1000], [0, 300]);
  const yText = useTransform(scrollY, [0, 1000], [0, 150]);
  const opacityText = useTransform(scrollY, [0, 500], [1, 0]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></motion.div>
      
      {/* Soft gradient orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/[0.02] rounded-full blur-3xl z-0 pointer-events-none"></div>

      <div className="container relative z-10 px-6 md:px-12 text-center">
        <motion.div
          style={{ y: yText, opacity: opacityText }}
          className="flex flex-col items-center"
        >
          <motion.div 
            initial={{ scale: 0.8, opacity: 0, rotate: -10 }}
            animate={{ scale: 1, opacity: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.2, type: "spring", bounce: 0.4 }}
            className="relative w-24 h-24 md:w-40 md:h-40 mb-4 mt-8 md:mt-16"
          >
            <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
            <Image src="/images/logo.jpeg" alt="CryptoKnights Logo" fill className="object-contain drop-shadow-[0_0_25px_rgba(0,255,255,0.4)]" />
          </motion.div>

          <AnimatedText 
            text="CryptoKnights" 
            className="font-heading justify-center font-black text-5xl md:text-7xl lg:text-8xl tracking-tighter text-white mb-2 drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]" 
            delay={0.5} 
          />
          <AnimatedText 
            text="The Official Cyber Security Club" 
            delay={1.2}
            className="font-heading justify-center text-lg md:text-2xl text-muted-foreground font-light tracking-tight mb-2" 
          />
          <motion.p 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            transition={{ delay: 2, duration: 1 }}
            className="text-xs md:text-sm text-muted-foreground/80 font-mono mb-4 max-w-2xl mx-auto"
          >
            CVR College of Engineering
          </motion.p>
          <motion.p 
            initial={{ opacity: 0, y: 10 }} 
            animate={{ opacity: 1, y: 0 }} 
            transition={{ delay: 2.2, duration: 0.8 }}
            className="text-sm md:text-base text-white/80 max-w-2xl mx-auto mb-8"
          >
            "Building Security Minds. Defending Digital Futures."
          </motion.p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#events" className="w-full sm:w-auto px-8 py-3 bg-white text-black font-medium rounded-md hover:bg-white/90 transition-colors">
              Explore Events
            </a>
            <a href="#magazines" className="w-full sm:w-auto px-8 py-3 bg-transparent border border-white/20 text-white font-medium rounded-md hover:bg-white/10 transition-colors">
              View Magazines
            </a>
            <a href="#team" className="w-full sm:w-auto px-8 py-3 bg-transparent text-white font-medium hover:text-accent-foreground transition-colors">
              Meet the Team
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
