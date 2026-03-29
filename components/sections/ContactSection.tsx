import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";

export default function ContactSection() {
  return (
    <AnimatedSectionWrapper id="contact">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12">
          <div className="flex-1">
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Have a vulnerability to report? Interested in collaborating? Reach out to the core team.
            </p>
            <div className="space-y-4 font-mono text-sm">
              <p>
                <span className="text-white/50 block mb-1">Email</span>
                <a href="mailto:cryptoknights.cvr@gmail.com" className="hover:text-white transition-colors">cryptoknights.cvr@gmail.com</a>
              </p>
              <p>
                <span className="text-white/50 block mb-1">HQ Address</span>
                CVR College of Engineering<br/>
                Vastunagar, Mangalpalli (V),<br/>
                Ibrahimpatnam (M), Ranga Reddy District,<br/>
                Telangana 501510
              </p>
            </div>
          </div>
          
          <div className="flex-1">
            <form action="https://formsubmit.co/cryptoknights.cvr@gmail.com" method="POST" className="space-y-6 bg-card/50 p-6 md:p-8 rounded-2xl border border-border">
              <input type="hidden" name="_subject" value="New Transmission from CryptoKnights Website!" />
              <div className="space-y-4">
                <input 
                  type="text" 
                  name="name"
                  placeholder="Full Name"
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all placeholder:text-muted-foreground"
                />
                <input 
                  type="email" 
                  name="email"
                  placeholder="Email Address" 
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all placeholder:text-muted-foreground"
                />
                <input 
                  type="text" 
                  name="subject"
                  placeholder="Subject" 
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all placeholder:text-muted-foreground"
                />
                <textarea 
                  name="message"
                  placeholder="Message" 
                  rows={4}
                  required
                  className="w-full bg-background border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-white/20 transition-all resize-none placeholder:text-muted-foreground"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-white text-black font-medium py-3 rounded-lg hover:bg-white/90 transition-colors"
              >
                Send Transmission
              </button>
            </form>
          </div>
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
}
