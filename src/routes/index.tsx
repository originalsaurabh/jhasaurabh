import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import comdailyCover from "@/assets/Card images/comdaily cover.png";
import comdailyCoverHover from "@/assets/Card images/comdaily cover hover.png";
import comdailyLeft from "@/assets/Card images/comdaily left.png";
import comdailyLeftHover from "@/assets/Card images/comdaily left hover.png";
import comdailyMid from "@/assets/Card images/comdaily mid.png";
import comdailyMidHover from "@/assets/Card images/comdaily mid hover.png";
import comdailyRight from "@/assets/Card images/comdaily right.png";
import comdailyRightHover from "@/assets/Card images/comdaily right hover.png";
import tsCover from "@/assets/Card images/TS cover.png";
import tsCoverHover from "@/assets/Card images/TS cover hover.png";
import tsLeft from "@/assets/Card images/TS left.png";
import tsLeftHover from "@/assets/Card images/TS left hover.png";
import tsMid from "@/assets/Card images/TS mid.png";
import tsMidHover from "@/assets/Card images/TS mid hover.png";
import tsRight from "@/assets/Card images/TS right.png";
import tsRightHover from "@/assets/Card images/TS right hover.png";
import ibaCover from "@/assets/Card images/iba cover.png";
import ibaCoverHover from "@/assets/Card images/iba cover hover.png";
import ibaLeft from "@/assets/Card images/iba left.png";
import ibaLeftHover from "@/assets/Card images/iba left hover.png";
import ibaMid from "@/assets/Card images/iba mid.png";
import ibaMidHover from "@/assets/Card images/iba mid hover.png";
import ibaRight from "@/assets/Card images/iba right.png";
import ibaRightHover from "@/assets/Card images/iba right hover.png";

const testimonials = [
  {
    quote: "Saurabh brought much-needed structure to our design process early on. He built a design system that improved consistency and reduced developer back-and-forth. What stood out was his ability to challenge ideas constructively and think beyond execution.",
    name: "Ellen Martin",
    role: "Co-Founder at comdaily",
  },
  {
    quote: "Thank you! Excellent work and communication! He was able to quickly complete the project to my vision!! Will definitely work again in the future!",
    name: "Carolin Lengersdorf",
    role: "MICARAA GmbH",
  },
  {
    quote: "Our conversion rate went from ~1.8% to 3.4%, and checkout drop-offs dropped by ~22%. Sessions were also up ~35%. Saurabh has been quite instrumental with his UI/UX work on my website. He focused on real user behavior, not just visuals, and delivered fast, clean iterations. Reliable and actually moves numbers.",
    name: "Shreyans Jain",
    role: "Head of Sales, Saathi Pads",
  },
  {
    quote: "Saurabh quickly identified issues in our purchase flow and improved them without being explicitly asked. His work was practical, user-focused, and contributed to stronger engagement and overall performance.",
    name: "Mehleka Bhaisaheb",
    role: "Digital Marketing Manager,IBA Cosmetics",
  },
  {
    quote: "Saurabh handled multiple campaigns under pressure while keeping focus on what actually worked for users. His work on the website directly improved conversions and reduced drop-offs.",
    name: "Khushali Samriya",
    role: "Communication Manager, Saathi Pads",
  },
  {
    quote: "Saurabh is very responsive and is a pleasure to work with. I look forward to continue working with you guys going forward!",
    name: "Ricardo",
    role: "Founder, Bannerfi",
  },
];

// To add new logos in the future:
// 1. Add the logo file to public/brand/ folder
// 2. Add a new object to this array with name and logo properties
const brands = [
  { name: "Cadbury", logo: "/brand/Cadbury.svg" },
  { name: "Vistaprint", logo: "/brand/VistaPrint_idVhzhABHb_0.svg" },
  { name: "BannerBuzz", logo: "/brand/BannerBuzzWorld_id_V73LBRU_1.svg" },
  { name: "LIVSPACE", logo: "/brand/Livspace_idvWCv3LDF_1.svg" },
  { name: "Amazon", logo: "/brand/Amazon_Logo_0.svg" },
  { name: "Mondelēz", logo: "/brand/Mondelēz International_id5rKWAECb_0.svg" },
  { name: "Logo", logo: "/brand/Logo.svg" },
  { name: "Transparent", logo: "/brand/Transparent_logo_white_720x.webp" },
  { name: "MICARAA", logo: "/brand/micaraa-Logo-RGB_mit-Slogan-1000px_8726c8df-96b6-4a93-8d6a-aab01b201b39_400x.avif" },
  { name: "SI", logo: "/brand/si-logo.svg" },
  { name: "Logos 1", logo: "/brand/idBb09CBkC_logos.png" },
  { name: "Logos 2", logo: "/brand/idLbJxDHSd_1771767311359.png" },
];

function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-6 py-24 text-center md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-6"
        >
          <span
            className="inline-flex items-center gap-2 rounded-[22px] px-4 py-2 text-sm font-medium text-white"
            style={{ background: "rgba(59, 35, 19, 0.80)" }}
          >
            <span className="relative flex h-5 w-5 items-center justify-center">
              {/* Outer halo — fades in/out */}
              <span
                className="absolute h-5 w-5 rounded-full animate-blink-halo"
                style={{ background: "rgba(30, 255, 0, 0.50)" }}
              />
              {/* Inner solid dot */}
              <span
                className="relative h-2.5 w-2.5 rounded-full"
                style={{ background: "#1EFF00" }}
              />
            </span>
            Available Now for Design Roles
          </span>

          <p className="text-[24px] font-semibold leading-[34.8px] text-black">
            Hello, I'm Saurabh Jha
          </p>

          <h1 className="max-w-2xl text-4xl leading-tight md:text-5xl">
            Making products your users <br />
            don't need instructions for.
          </h1>

          <p className="max-w-2xl text-[24px] font-medium leading-[34.8px] text-black/55">
            I design interfaces, systems, and experiences that make products easier to use and easier to scale.
          </p>

          <div className="flex items-center gap-4">
            <Link to="/case-studies">
              <Button variant="hero" size="lg">View Work</Button>
            </Link>
            <Link to="/contact">
              <Button variant="heroOutline" size="lg">Get in Touch!</Button>
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Brand Strip */}
      <section className="overflow-hidden border-y border-border bg-card py-5">
        <div className="flex animate-scroll items-center gap-12 whitespace-nowrap px-6">
          {Array.from({ length: 3 }).flatMap(() => brands).map((brand, i) => (
            <img
              key={i}
              src={brand.logo}
              alt={brand.name}
              className="h-8 md:h-10 w-auto flex-shrink-0 object-contain"
            />
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 flex items-center justify-between">
          <h2 className="text-3xl md:text-4xl">Featured Projects</h2>
          <Link to="/case-studies">
            <Button variant="outline" size="sm">View All</Button>
          </Link>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          <ProjectCard
            cover={comdailyCover}
            hoverCover={comdailyCoverHover}
            left={comdailyLeft}
            hoverLeft={comdailyLeftHover}
            mid={comdailyMid}
            hoverMid={comdailyMidHover}
            right={comdailyRight}
            hoverRight={comdailyRightHover}
            title="comdaily"
            year="October 2025"
            type="Case Study"
            description="Created a scalable design system used across product and marketing."
            role="UX Designer"
            linkTo="/case-studies/comdaily"
          />
          <ProjectCard
            cover={tsCover}
            hoverCover={tsCoverHover}
            left={tsLeft}
            hoverLeft={tsLeftHover}
            mid={tsMid}
            hoverMid={tsMidHover}
            right={tsRight}
            hoverRight={tsRightHover}
            title="TaskSync"
            year="July 2025"
            type="Case Study"
            description="Redesigned UX to improve usability in education platforms."
            role="UX Designer"
            linkTo="/case-studies/tasksync"
          />
          <ProjectCard
            cover={ibaCover}
            hoverCover={ibaCoverHover}
            left={ibaLeft}
            hoverLeft={ibaLeftHover}
            mid={ibaMid}
            hoverMid={ibaMidHover}
            right={ibaRight}
            hoverRight={ibaRightHover}
            title="iba cosmetics"
            year="April 2025"
            type="Case Study"
            description="Improved conversion and built a consistent brand experience."
            role="Visual Designer"
            linkTo="/case-studies/iba-cosmetics"
          />
        </div>
      </section>

      {/* Testimonials Marquee */}
      <section className="py-20">
        <div className="mx-auto max-w-6xl px-6">
          <h2 className="text-3xl md:text-4xl">What others say!</h2>
          <p className="mt-2 text-muted-foreground">I didn't come up with these, I swear</p>
        </div>

        <div className="mt-10 overflow-hidden">
          <div className="flex animate-scroll-testimonials gap-6 whitespace-nowrap hover:[animation-play-state:paused]">
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={i}
                className="inline-flex w-[440px] flex-shrink-0 whitespace-normal rounded-xl bg-card p-6 flex-col"
              >
                {/* Quote */}
                <p className="text-sm leading-relaxed text-foreground">
                  "{t.quote}"
                </p>

                {/* Footer (bottom aligned) */}
                <div className="mt-auto pt-6 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-medium text-primary">
                      {t.name[0]}
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}


export default HomePage;
