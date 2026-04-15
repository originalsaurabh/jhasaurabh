import { Link, useLocation } from "@tanstack/react-router";
import { useState } from "react";
import { Button } from "@/components/ui/button";

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
        {/* Left: Logo */}
        <Link to="/" className="flex-shrink-0">
          <img src="/images/sj-logo.svg" alt="SJ Logo" width={40} height={40} className="h-10 w-10" />
        </Link>

        {/* Center: Nav Links (desktop) */}
        <div className="hidden items-center gap-8 md:flex absolute left-1/2 -translate-x-1/2">
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

        {/* Right: Resume + Connect */}
        <div className="hidden items-center gap-3 md:flex">
          <Link to="/resume">
            <button className="resume-btn group relative" aria-label="Resume">
              <img
                src="/images/resume-button-closed.svg"
                alt="Resume"
                className="h-[46px] block group-hover:hidden"
              />
              <img
                src="/images/resume-button-hover.svg"
                alt="Resume hover"
                className="h-[56px] hidden group-hover:block"
              />
            </button>
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
