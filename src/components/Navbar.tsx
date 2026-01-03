import { Button } from "@/components/ui/button";
import { Zap } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50">
      <div className="container mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Zap className="w-5 h-5 text-primary-foreground" />
          </div>
          <span className="text-xl font-bold text-foreground">StoryShort</span>
        </Link>

        {/* Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          <Link to="/pricing" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Pricing
          </Link>
          <Link to="/blog" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
            Blog
          </Link>
          <div className="flex items-center gap-2">
            <Link to="/affiliate" className="text-muted-foreground hover:text-foreground transition-colors text-sm">
              Affiliate Program
            </Link>
            <span className="text-xs bg-primary/20 text-primary px-2 py-0.5 rounded-full font-medium">
              New
            </span>
          </div>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" className="hidden sm:inline-flex">
            Sign In
          </Button>
          <Button variant="hero" size="sm">
            Get Started
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
