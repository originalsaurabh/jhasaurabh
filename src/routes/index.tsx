import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ProjectCard } from "@/components/ProjectCard";
import projectComdaily from "@/assets/project-comdaily.jpg";
import projectTasksync from "@/assets/project-tasksync.jpg";
import projectIba from "@/assets/project-iba.jpg";

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      { title: "Saurabh Jha — UX Designer" },
      { name: "description", content: "Making products your users don't need instructions for." },
    ],
  }),
});

const testimonials = [
  {
    quote: "Using this felt like it transformed me completely.",
    name: "David",
    role: "Co-Founder at comdaily",
  },
  {
    quote: "In the garden of life, some things are just very sweet. This is one of them.",
    name: "Ellen Martin",
    role: "Co-Founder at comdaily",
  },
  {
    quote: "Thank you! Excellent work and communication! He was able to quickly complete the project to my vision!! Will definitely work again in the future!",
    name: "Carolin Lengersdorf",
    role: "MICARAA GmbH",
  },
  {
    quote: "Saurabh is a pleasure to work with. Always forward-thinking.",
    name: "Client",
    role: "Freelance Project",
  },
  {
    quote: "His designs are thoughtful, well-researched, and always user-centered. Highly recommend!",
    name: "Anika Sharma",
    role: "Product Lead, TechStart",
  },
  {
    quote: "Saurabh brought clarity to our chaotic product. The UX overhaul increased engagement by 40%.",
    name: "Rohan Mehta",
    role: "CEO, FinEdge",
  },
  {
    quote: "Working with Saurabh was seamless. He truly understands what users need before they do.",
    name: "Priya Nair",
    role: "Head of Product, Buildly",
  },
  {
    quote: "A rare designer who balances aesthetics with usability perfectly. Would work with again!",
    name: "James O'Connor",
    role: "Founder, Pixelworks",
  },
];

const brands = ["Cadbury", "Vistaprint", "BannerBuzz", "LIVSPACE", "Disney"];

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
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-4 py-1.5 text-sm font-medium">
            <span className="h-2.5 w-2.5 rounded-full bg-green-500" />
            Available Now
          </span>

          <p className="text-base text-muted-foreground">Hello, I'm Saurabh Jha</p>

          <h1 className="max-w-xl text-4xl leading-tight md:text-5xl">
            Making products your users don't need instructions for.
          </h1>

          <p className="max-w-lg text-muted-foreground">
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
          {[...brands, ...brands].map((brand, i) => (
            <span key={i} className="font-display text-xl text-muted-foreground md:text-2xl">
              {brand}
            </span>
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
            image={projectComdaily}
            title="comdaily"
            year="October 2025"
            linkTo="/case-studies"
          />
          <ProjectCard
            image={projectTasksync}
            title="TaskSync"
            year="July 2025"
            linkTo="/case-studies/tasksync"
          />
          <ProjectCard
            image={projectIba}
            title="iba cosmetics"
            year="April 2025"
            linkTo="/case-studies"
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
                className="inline-block w-[340px] flex-shrink-0 whitespace-normal rounded-xl bg-card p-6"
              >
                <p className="text-sm leading-relaxed text-foreground">"{t.quote}"</p>
                <div className="mt-4 flex items-center gap-3">
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                    <span className="text-xs font-medium text-primary">{t.name[0]}</span>
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
