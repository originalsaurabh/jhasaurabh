import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ResumeButton } from "@/components/ResumeButton";

export function Navbar() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const navLinks = [
    { to: "/about" as const, label: "About Me" },
    { to: "/case-studies" as const, label: "Case Studies" },
    { to: "/resume" as const, label: "Resume" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 sm:px-6 py-3 sm:py-4 relative">

        {/* Logo */}
        <Link to="/" className="flex-shrink-0 group">
          <img
            src="/images/sj-logo.svg"
            alt="SJ Logo"
            width={40}
            height={40}
            className="h-8 sm:h-10 w-8 sm:w-10 transition-transform duration-300 ease-out group-hover:-rotate-12"
          />
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-xs sm:text-[16px] font-medium transition-colors hover:text-primary ${
                location.pathname === link.to
                  ? "text-primary"
                  : "text-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Right */}
        <div className="hidden md:flex items-center gap-2 lg:gap-3">
          <Link to="/resume">
            <ResumeButton />
          </Link>

          {/* ✅ ORIGINAL BUTTON PRESERVED */}
          <Link to="/contact">
            <div className="
              bg-[#3b2313]
              px-3 lg:px-[16px]
              h-[40px] sm:h-[47px]
              flex items-center
              rounded-[25px]
              text-[#fffbee]
              text-xs sm:text-[16px]
              font-medium
              transition-transform duration-200
              hover:scale-95
            ">
              Let's Connect
            </div>
          </Link>
        </div>

        {/* Hamburger */}
        <button
          className="relative h-8 w-8 sm:h-10 sm:w-10 md:hidden flex-shrink-0"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label="Toggle menu"
        >
          <span className="absolute inset-0 bg-background" />

          <motion.span
            className="absolute left-[3px] top-[3px] h-[10px] w-[34px]"
            style={{
              background: "#3B2313",
              borderTopLeftRadius: 9,
              borderTopRightRadius: 9,
              borderBottomRightRadius: 1,
              borderBottomLeftRadius: 1,
              transformOrigin: "top left",
            }}
            animate={mobileOpen && !prefersReducedMotion ? { rotate: 15, x: 1.87, y: -2 } : {}}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
          />

          <motion.span
            className="absolute left-[3px] top-[15px] h-[10px] w-[34px] rounded-[2px]"
            style={{ background: "#FF3800" }}
            animate={mobileOpen && !prefersReducedMotion ? { x: -40, opacity: 0 } : {}}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
          />

          <motion.span
            className="absolute left-[3px] top-[27px] h-[10px] w-[34px]"
            style={{
              background: "#3B2313",
              borderTopLeftRadius: 1,
              borderTopRightRadius: 1,
              borderBottomRightRadius: 9,
              borderBottomLeftRadius: 9,
              transformOrigin: "top left",
            }}
            animate={mobileOpen && !prefersReducedMotion ? { rotate: -15, x: -0.71, y: 1.8 } : {}}
            transition={prefersReducedMotion ? { duration: 0 } : undefined}
          />
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="md:hidden px-4 pb-4"
          >
            <div className="flex flex-col gap-2 rounded-2xl bg-white p-3 shadow-lg">

              {navLinks.map((link, i) => (
                <motion.div
                  key={link.to}
                  initial={{ opacity: 0, x: 8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    to={link.to}
                    onClick={() => setMobileOpen(false)}
                    className="text-center py-2"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              {/* ✅ SAME ORIGINAL BUTTON IN MOBILE */}
              <Link
                to="/contact"
                onClick={() => setMobileOpen(false)}
              >
                <div className="
                  bg-[#3b2313]
                  px-[16px]
                  h-[47px]
                  flex items-center justify-center
                  rounded-[25px]
                  text-[#fffbee]
                  text-[16px]
                  font-medium
                  transition-transform duration-200
                  hover:scale-95
                ">
                  Let's Connect
                </div>
              </Link>

            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}