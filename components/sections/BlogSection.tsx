import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import { blogs } from "@/data/blogs";

export default function BlogSection() {
  return (
    <AnimatedSectionWrapper id="blogs">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12 text-center">Latest Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {blogs.map((blog) => {
            const cardContent = (
              <div className="group cursor-pointer h-full flex flex-col bg-card/40 border border-border/50 rounded-xl p-6 hover:bg-card hover:border-white/20 transition-all duration-300 shadow-sm hover:shadow-primary/5">
                <div className="flex items-center gap-4 text-[10px] md:text-xs font-mono text-muted-foreground mb-4">
                  <span>{blog.date}</span>
                  <span className="w-1 h-1 rounded-full bg-border"></span>
                  <span>{blog.author}</span>
                </div>
                <h3 className="font-heading text-xl md:text-2xl font-bold mb-3 group-hover:text-white transition-colors leading-tight">{blog.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-grow">{blog.excerpt}</p>
                <div className="mt-auto pt-4 border-t border-border/30">
                  <span className="text-xs font-semibold tracking-wider uppercase text-primary/80 group-hover:text-primary transition-colors flex items-center gap-2">
                    Read Analysis
                    <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="Refactor with Arrow" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </div>
              </div>
            );

            if (blog.link) {
              return (
                <a 
                  key={blog.id} 
                  href={blog.link} 
                  target={blog.link.startsWith('http') ? "_blank" : "_self"} 
                  rel={blog.link.startsWith('http') ? "noopener noreferrer" : ""}
                >
                  {cardContent}
                </a>
              );
            }

            return <div key={blog.id}>{cardContent}</div>;
          })}
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
}
