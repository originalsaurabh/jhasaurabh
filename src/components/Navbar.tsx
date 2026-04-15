import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.png";

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  const navLinks = [
    { to: "/about" as const, label: "About Me" },
    { to: "/case-studies" as const, label: "Case Studies" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex-shrink-0">
          <img src={logo} alt="SJ Logo" width={40} height={40} className="h-10 w-10" />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm font-medium transition-colors hover:text-primary ${
                location.pathname === link.to ? "text-primary" : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        <div className="hidden items-center gap-3 md:flex">
          <Link to="/resume">
            <Button variant="outline" size="sm" className="gap-2">
              <span className="h-6 w-6 rounded-full bg-gradient-to-br from-pink-400 via-purple-500 to-orange-400" />
              Resume
            </Button>
          </Link>
          <Link to="/contact">
            <Button variant="nav" size="sm">Let's Connect</Button>
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="flex flex-col gap-1.5 md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle menu"
        >
          <span className={`h-0.5 w-6 bg-foreground transition-all ${mobileOpen ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-all ${mobileOpen ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-foreground transition-all ${mobileOpen ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="border-t border-border bg-background px-6 py-4 md:hidden">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm font-medium"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/resume" onClick={() => setMobileOpen(false)}>
              <Button variant="outline" size="sm" className="w-full">Resume</Button>
            </Link>
            <Link to="/contact" onClick={() => setMobileOpen(false)}>
              <Button variant="nav" size="sm" className="w-full">Let's Connect</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
