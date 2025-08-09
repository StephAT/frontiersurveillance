import { Link, NavLink } from "react-router-dom";
import { Button } from "@/components/ui/button";

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `px-3 py-2 rounded-md transition-colors ${
    isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
  }`;

const SiteHeader = () => {
  return (
    <header className="sticky top-0 z-40 w-full border-b bg-background/80 backdrop-blur">
      <div className="container mx-auto flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <img
            src="/lovable-uploads/8bde92d0-f73d-40f7-a296-3c4e08122064.png"
            alt="Frontier in Health Surveillance (FHS) logo"
            width={140}
            height={40}
            loading="eager"
            decoding="async"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={navLinkClass} end>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClass}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClass}>
            Contact
          </NavLink>
        </nav>
        <div className="hidden md:block">
          <Link to="/contact">
            <Button variant="hero" className="px-6">Get in touch</Button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default SiteHeader;
