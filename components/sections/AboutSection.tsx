import AnimatedSectionWrapper from "@/components/AnimatedSectionWrapper";

export default function AboutSection() {
  return (
    <AnimatedSectionWrapper id="about" className="bg-secondary/30">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">About Us</h2>
          <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
            <p>
              CryptoKnights is the premier cybersecurity collective at CVR College of Engineering, built by students, for students. We exist to bridge the gap between theoretical knowledge and practical security application.
            </p>
            <p>
              Our focus lies heavily on offensive and defensive cyber tactics, understanding modern vulnerabilities, and fostering a culture of continuous learning. We provide hands-on training, regular Capture The Flag (CTF) competitions, and expert-led workshops.
            </p>
            <p>
              Whether you are parsing your first packet or exploiting complex memory corruptions, CryptoKnights provides the resources, community, and guidance to elevate your security posture.
            </p>
          </div>
        </div>
      </div>
    </AnimatedSectionWrapper>
  );
}
