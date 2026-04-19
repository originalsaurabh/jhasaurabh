import { Link, useLocation } from "@tanstack/react-router";
import { ResumeButton } from "@/components/ResumeButton";

export function Navbar() {
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md">
      <nav className="relative flex items-center justify-between px-[64px] h-[100px] mx-auto max-w-7xl">

        {/* LOGO */}
        <Link to="/" className="z-10">
          <img 
            src="/images/sj-logo.svg"
            className="
              w-[40px] h-[40px]
              transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]
              hover:rotate-[10deg]
            "
            alt="SJ Logo"
            width={40}
            height={40}
          />
        </Link>

        {/* CENTER NAV */}
        <div className="absolute left-1/2 -translate-x-1/2 flex items-center gap-[32px] h-full">

          <Link
            to="/about"
            className={`text-[16px] leading-none flex items-center transition-all duration-200 ${
              location.pathname === "/about"
                ? "text-primary font-medium"
                : "text-[#3b2313] font-normal"
            } hover:text-accent hover:font-medium`}
          >
            About Me
          </Link>

          <Link
            to="/case-studies"
            className={`text-[16px] leading-none flex items-center transition-all duration-200 ${
              location.pathname === "/case-studies"
                ? "text-primary font-medium"
                : "text-[#3b2313] font-normal"
            } hover:text-accent hover:font-medium`}
          >
            Case Studies
          </Link>

        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-[16px]">

            <ResumeButton to="/resume" />

          {/* CONNECT BUTTON */}
          <Link to="/contact">
            <div className="
              bg-[#3b2313]
              px-[16px]
              h-[47px]
              flex items-center
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
      </nav>
    </header>
  );
}