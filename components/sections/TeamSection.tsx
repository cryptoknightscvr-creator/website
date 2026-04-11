"use client";
import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import { coordinators, facultyMembers, teamMembers } from "@/data/team";
import { Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";
import Image from "next/image";

const container = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, scale: 0.8, y: 30, rotateX: -20 },
  show: { opacity: 1, scale: 1, y: 0, rotateX: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
};

export default function TeamSection() {
  return (
    <AnimatedSectionWrapper id="team" className="bg-secondary/10">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* COORDINATORS SECTION */}
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12 text-center">Coordinators</h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-8 md:gap-12 mb-24 max-w-4xl mx-auto"
        >
          {coordinators.map((member) => (
            <motion.div variants={item} key={member.id}>
              <TiltCard>
                <div className="group relative bg-card border border-border/50 rounded-2xl p-8 text-center h-full flex flex-col items-center justify-center bg-gradient-to-b from-card to-secondary/30">
                  <div className="w-32 aspect-square bg-background rounded-full mx-auto mb-6 overflow-hidden relative border-2 border-primary/20 shadow-[0_0_30px_rgba(0,180,255,0.2)]">
                    {member.image ? (
                      <Image src={member.image} alt={member.name} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-white/5 transition-colors duration-500 flex items-center justify-center font-mono text-xs text-muted-foreground/30 text-center px-4">Photo Placeholder</div>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-xl md:text-2xl mb-2">{member.name}</h3>
                  <p className="text-base text-primary/80 font-mono mb-4">{member.role}</p>
                  
                  {member.linkedin && (
                    <div className="flex justify-center relative z-10 mt-auto">
                       <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors cursor-pointer p-2.5 bg-background/50 rounded-full border border-border hover:border-white/20">
                          <Linkedin size={20} />
                       </a>
                    </div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-24 opacity-30" />

        {/* FACULTY SECTION */}
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12 text-center text-white/90">Faculty & Mentors</h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-24"
        >
          {facultyMembers.map((member) => (
            <motion.div variants={item} key={member.id}>
              <TiltCard>
                <div className="group relative bg-card border border-border/50 rounded-xl p-6 text-center h-full flex flex-col items-center justify-center bg-gradient-to-b from-card to-secondary/20">
                  <div className="w-24 aspect-square bg-background rounded-full mx-auto mb-4 overflow-hidden relative border border-white/10 shadow-[0_0_20px_rgba(0,180,255,0.1)]">
                    {member.image ? (
                      <Image src={member.image} alt={member.name} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-white/5 transition-colors duration-500 flex items-center justify-center font-mono text-[10px] text-muted-foreground/30">Photo</div>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground font-mono mt-2 mb-4">{member.role}</p>
                  
                  {member.linkedin && (
                    <div className="flex justify-center relative z-10 mt-auto">
                       <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors cursor-pointer p-2 bg-background/50 rounded-full border border-border hover:border-white/20">
                          <Linkedin size={16} />
                       </a>
                    </div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

        <div className="w-full h-px bg-gradient-to-r from-transparent via-border to-transparent mb-24 opacity-30" />

        {/* THE TEAM SECTION */}
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12 text-center text-white/80">The Team</h2>
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {teamMembers.map((member) => (
            <motion.div variants={item} key={member.id}>
              <TiltCard>
                <div className="group relative bg-card/80 border border-border/50 rounded-xl p-4 text-center h-full hover:bg-card transition-colors duration-300">
                  <div className="w-16 aspect-square bg-secondary/50 rounded-full mx-auto mb-4 overflow-hidden relative border border-white/5">
                    {member.image ? (
                      <Image src={member.image} alt={member.name} fill className="object-cover" />
                    ) : (
                      <div className="absolute inset-0 bg-white/5 transition-colors duration-500 flex items-center justify-center font-mono text-[8px] text-muted-foreground/30">Photo</div>
                    )}
                  </div>
                  <h3 className="font-heading font-bold text-sm md:text-base mb-1">{member.name}</h3>
                  <p className="text-[10px] md:text-xs text-muted-foreground font-mono line-clamp-1 mb-2">{member.role}</p>
                  
                  {member.linkedin && (
                    <div className="flex justify-center relative z-10 mt-auto">
                       <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-white transition-colors cursor-pointer p-1.5 bg-background/50 rounded-full border border-border hover:border-white/20">
                          <Linkedin size={12} />
                       </a>
                    </div>
                  )}
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </AnimatedSectionWrapper>
  );
}
