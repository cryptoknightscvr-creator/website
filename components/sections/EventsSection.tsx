import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import { events } from "@/data/events";
import { motion } from "framer-motion";
import { TiltCard } from "@/components/TiltCard";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100 } }
};

export default function EventsSection() {
  return (
    <AnimatedSectionWrapper id="events">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12 text-center">Events Conducted</h2>
        
        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {events.map((event) => (
            <motion.div variants={item} key={event.id}>
              <TiltCard>
                <div className="bg-card/80 border border-border/50 p-6 rounded-xl transition-all duration-300 flex flex-col h-full group">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-0 pointer-events-none"></div>
                  <div className="mb-4 relative z-10">
                    <span className="text-xs font-mono px-3 py-1 bg-white/5 text-white/70 rounded-full border border-white/10">
                      {event.date}
                    </span>
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-3 relative z-10">{event.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow leading-relaxed relative z-10">
                    {event.description}
                  </p>
                </div>
              </TiltCard>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </AnimatedSectionWrapper>
  );
}
