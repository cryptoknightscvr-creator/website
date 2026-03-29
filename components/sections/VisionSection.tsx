import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";

export default function VisionSection() {
  return (
    <AnimatedSectionWrapper id="vision">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="p-12 border border-border/50 bg-card/30 backdrop-blur-md rounded-2xl text-center relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-white text-center">Our Vision</h2>
            <p className="text-xl md:text-2xl text-muted-foreground font-light italic leading-relaxed">
              "To cultivate a generation of elite cybersecurity professionals equipped with the ethical mindset, technical prowess, and innovative thinking required to defend global digital infrastructures against evolving asymmetric threats."
            </p>
          </div>
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
}
