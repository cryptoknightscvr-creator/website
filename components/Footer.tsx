import Link from "next/link";
import { Instagram, Linkedin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-background border-t border-border pt-16 pb-8">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-2">
            <h3 className="font-heading font-bold text-2xl tracking-tighter mb-4">CryptoKnights</h3>
            <p className="text-muted-foreground max-w-sm mb-6">
              "Security is a continuous commitment."
            </p>
            <p className="text-sm text-muted-foreground">
              Offical Club of Computer Science and Engineering (Cyber Security)<br />
              CVR College of Engineering
            </p>
          </div>
          <div>
            <h4 className="font-medium mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#about" className="hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="#events" className="hover:text-white transition-colors">Events</Link></li>
              <li><Link href="#magazines" className="hover:text-white transition-colors">Magazines</Link></li>
              <li><Link href="#team" className="hover:text-white transition-colors">Team</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-medium mb-4">Connect</h4>
            <div className="flex space-x-4 text-muted-foreground">
              <a href="#" className="hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
        </div>
        <div className="pt-8 border-t border-border/50 text-center text-sm text-muted-foreground flex flex-col md:flex-row justify-between items-center">
          <p>© {new Date().getFullYear()} CryptoKnights. All rights reserved.</p>
          <p className="mt-4 md:mt-0 font-medium">Made with ❤️ by CVR Cybersecurity Dept</p>
        </div>
      </div>
    </footer>
  );
}
