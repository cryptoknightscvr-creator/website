import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";
import { blogs } from "@/data/blogs";

export default function BlogSection() {
  return (
    <AnimatedSectionWrapper id="blogs">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12 text-center">Latest Insights</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {blogs.map((blog) => (
            <div key={blog.id} className="group cursor-pointer">
              <div className="aspect-video bg-secondary rounded-xl mb-6 overflow-hidden relative border border-border">
                 <div className="absolute inset-0 flex items-center justify-center text-muted-foreground/30 font-mono text-sm">
                    Image Placeholder
                 </div>
              </div>
              <div className="flex items-center gap-4 text-xs font-mono text-muted-foreground mb-3">
                <span>{blog.date}</span>
                <span className="w-1 h-1 rounded-full bg-border"></span>
                <span>{blog.author}</span>
              </div>
              <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-white transition-colors">{blog.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{blog.excerpt}</p>
              <span className="text-sm font-medium underline underline-offset-4 decoration-white/20 group-hover:decoration-white transition-colors">
                Read More
              </span>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
}
