import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import projectComdaily from "@/assets/project-comdaily.jpg";
import projectTasksync from "@/assets/project-tasksync.jpg";
import projectIba from "@/assets/project-iba.jpg";
import projectAmazon from "@/assets/project-amazon.jpg";
import projectSaathi from "@/assets/project-saathi.jpg";
import projectSportz from "@/assets/project-sportz.jpg";

export const Route = createFileRoute("/case-studies")({
  component: CaseStudiesPage,
  head: () => ({
    meta: [
      { title: "Case Studies — Saurabh Jha" },
      { name: "description", content: "Designing systems and digital products that scale, without losing usability." },
    ],
  }),
});

const projects = [
  { image: projectComdaily, title: "comdaily", year: "2025", link: "/case-studies" },
  { image: projectTasksync, title: "TaskSync", year: "2024", link: "/case-studies/tasksync" },
  { image: projectIba, title: "Iba Cosmetics", year: "2024", link: "/case-studies" },
  { image: projectAmazon, title: "Amazon", year: "2026", link: "/case-studies" },
  { image: projectSaathi, title: "Saathi Pads", year: "2022", link: "/case-studies" },
  { image: projectSportz, title: "Sportz Interactive", year: "2020", linkLabel: "View Gallery →", link: "/case-studies" },
];

function CaseStudiesPage() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-3xl md:text-4xl">Designing systems and digital products that scale, without losing usability.</h1>
        <p className="mt-4 max-w-2xl text-muted-foreground">
          I work across UX strategy, design systems, and product interfaces—helping teams transform complex ideas into clear and intuitive experiences.
        </p>
        <p className="mt-2 text-muted-foreground">View selected work below.</p>
      </motion.div>

      <div className="mt-14 grid gap-8 md:grid-cols-3">
        {projects.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
          >
            <Link to={p.link} className="group block">
              <div className="overflow-hidden rounded-xl">
                <img
                  src={p.image}
                  alt={p.title}
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="mt-3 flex items-center justify-between">
                <span className="font-medium">{p.title}</span>
                <span className="text-sm text-muted-foreground">{p.year}</span>
              </div>
              <p className="mt-1 text-sm text-foreground transition-colors group-hover:text-primary">
                {p.linkLabel || "View Case Study →"}
              </p>
            </Link>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
