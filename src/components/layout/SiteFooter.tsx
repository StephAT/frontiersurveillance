import { Link } from "react-router-dom";
import { Phone, Mail, Facebook, Twitter, Linkedin } from "lucide-react";

const SiteFooter = () => {
  return (
    <footer className="mt-16 bg-gradient-primary text-primary-foreground">
      <div className="container mx-auto py-10 grid gap-6 md:grid-cols-4 rounded-xl glass ring-1 ring-primary/20 shadow-elevated">
        <div>
          <p className="font-semibold">Frontier in Health Surveillance (FHS)</p>
          <p className="text-sm text-primary-foreground/90 mt-2">
            Strengthening health security through innovative surveillance and data-driven insights.
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Quick links</p>
          <ul className="space-y-1 text-sm">
            <li><Link to="/" className="hover:underline">Home</Link></li>
            <li><Link to="/about" className="hover:underline">About</Link></li>
            <li><Link to="/contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-semibold mb-2">Regions</p>
          <p className="text-sm text-primary-foreground/80">
            Equatoria • Upper Nile • Bahr el Ghazal, South Sudan
          </p>
        </div>
        <div>
          <p className="font-semibold mb-2">Contact</p>
          <ul className="space-y-1 text-sm">
            <li>
              <a href="tel:+211922324530" className="hover:underline inline-flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden /> +211 922 324 530
              </a>
            </li>
            <li>
              <a href="tel:+2348138382938" className="hover:underline inline-flex items-center gap-2">
                <Phone className="h-4 w-4" aria-hidden /> +234 813 838 2938
              </a>
            </li>
            <li>
              <a href="mailto:davidaadedokun@gmail.com" className="hover:underline inline-flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden /> davidaadedokun@gmail.com
              </a>
            </li>
            <li>
              <a href="mailto:hassanmundrei@gmail.com" className="hover:underline inline-flex items-center gap-2">
                <Mail className="h-4 w-4" aria-hidden /> hassanmundrei@gmail.com
              </a>
            </li>
          </ul>
          <div className="mt-3 flex items-center gap-3 text-primary-foreground/80">
            <a href="#" aria-label="Facebook" className="hover:text-primary-foreground"><Facebook className="h-5 w-5" /></a>
            <a href="#" aria-label="Twitter" className="hover:text-primary-foreground"><Twitter className="h-5 w-5" /></a>
            <a href="#" aria-label="LinkedIn" className="hover:text-primary-foreground"><Linkedin className="h-5 w-5" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-primary/20">
        <div className="container mx-auto py-4 text-xs text-primary-foreground/80 flex items-center justify-between">
          <span>© {new Date().getFullYear()} FHS. All rights reserved.</span>
          <span>One Health • Transparency • Timeliness</span>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;

