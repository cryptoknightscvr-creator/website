import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import { magazines } from "@/data/magazines";
import { TiltCard } from "@/components/TiltCard";
import Image from "next/image";

export default function MagazineSection() {
  return (
    <AnimatedSectionWrapper id="magazines" className="bg-secondary/20">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12 text-center">Magazines</h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {["Technical", "Non-Technical"].map((type) => (
            <div key={type} className="space-y-6">
              <h3 className="font-heading text-2xl font-bold mb-6 flex items-center gap-4">
                <span className="w-8 h-[2px] bg-white"></span>
                {type} Editions
              </h3>
              
              <div className="space-y-6">
                {magazines.filter(m => m.type === type).map((mag) => (
                  <TiltCard key={mag.id}>
                    <div className="group relative overflow-hidden flex flex-col sm:flex-row gap-6 bg-card border border-border/50 p-6 rounded-xl hover:border-white/10 transition-colors h-full">
                      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl z-0 pointer-events-none"></div>
                      <div className="w-full sm:w-1/3 aspect-[3/4] flex-shrink-0 bg-secondary rounded-lg overflow-hidden relative border border-white/5 z-10">
                        {mag.coverImage ? (
                          <Image src={mag.coverImage} alt={mag.title} fill className="object-cover" />
                        ) : (
                          <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/50 font-mono text-sm border border-dashed border-border/50 m-2 rounded">
                            Cover Placeholder
                          </div>
                        )}
                      </div>
                      <div className="flex flex-col flex-grow justify-center py-4 z-10">
                        <h4 className="font-heading text-xl font-bold mb-2">{mag.title}</h4>
                        <p className="text-sm font-mono text-white/50 mb-4">{mag.edition}</p>
                        <p className="text-sm text-muted-foreground mb-6 line-clamp-3 leading-relaxed">
                          {mag.description}
                        </p>
                        <div className="flex gap-4 mt-auto z-20">
                          {mag.pdfLink ? (
                            <>
                              <a href={mag.pdfLink} target="_blank" rel="noopener noreferrer" className="text-sm font-medium hover:text-white transition-colors z-20 relative cursor-pointer">View Online</a>
                              <a href={mag.pdfLink} download target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-muted-foreground hover:text-white transition-colors z-20 relative cursor-pointer">Download PDF</a>
                            </>
                          ) : (
                            <span className="text-sm font-medium text-muted-foreground/50 relative z-20">PDF Unavailable</span>
                          )}
                        </div>
                      </div>
                    </div>
                  </TiltCard>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
}
