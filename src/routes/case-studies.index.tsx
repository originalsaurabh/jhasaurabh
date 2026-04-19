import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import projectComdaily from "@/assets/Projects/comdaily/comdaily-cover.jpg";
import projectTasksync from "@/assets/project-tasksync.jpg";
import projectIba from "@/assets/Projects/IBA/Iba-Cover.png";
import projectAmazon from "@/assets/Projects/Amazon/Amazon.png";
import projectSaathi from "@/assets/Projects/Saathi/Saathi Cover.png";
import projectSportz from "@/assets/Projects/Sportz/SI cover.png";

export const Route = createFileRoute("/case-studies/")({
  component: CaseStudiesPage,
  head: () => ({
    meta: [
      { title: "Case Studies — Saurabh Jha" },
      {
        name: "description",
        content:
          "Designing systems and digital products that scale, without losing usability.",
      },
    ],
  }),
});

const projects = [
  { image: projectComdaily, title: "comdaily", year: "2025", link: "/case-studies" },
  { image: projectTasksync, title: "TaskSync", year: "2024", link: "/case-studies/tasksync" },
  { image: projectIba, title: "Iba Cosmetics", year: "2024", link: "/case-studies" },
  { image: projectAmazon, title: "Amazon", year: "2026", link: "/case-studies" },
  { image: projectSaathi, title: "Saathi Pads", year: "2022", link: "/case-studies" },
  {
    image: projectSportz,
    title: "Sportz Interactive",
    year: "2020",
    linkLabel: "View Gallery →",
    link: "/case-studies",
  },
];

function CaseStudiesPage() {
  return (
    <section className="w-full">

      {/* HEADER */}
      <div className="mx-auto max-w-5xl px-6 py-20">
        <motion.div className="flex flex-col items-center justify-center py-[36px] gap-[8px] w-full">

          <h1 className="w-full text-[24px] leading-[34.8px] font-[700] font-canela text-black">
            Designing systems and digital products that scale, without losing usability.
          </h1>

          <p className="w-full text-[20px] leading-[29px] font-[400] font-inter text-black">
            I work across UX strategy, design systems, and product interfaces; helping teams transform complex ideas into clear and intuitive experiences.
          </p>

          <p className="w-full text-[20px] leading-[29px] font-[400] font-inter text-black">
            View selected work below.
          </p>

        </motion.div>
      </div>

      {/* PROJECTS */}
      <div className="w-full px-4 md:px-6 lg:px-10 pb-20">

        <div className="flex flex-wrap gap-4">

          {projects.map((p, i) => (
            <motion.div
              key={i}
              className="w-full sm:w-[calc(50%-8px)] lg:w-[calc(33.333%-11px)]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <Link to={p.link} className="group block w-full h-full">

                <div className="p-1 rounded-xl outline outline-1 outline-[#FFF1C4] flex flex-col gap-1 transition-transform duration-300 group-hover:scale-[1.005]">

                  {/* IMAGE */}
                  <div
                    className="w-full aspect-[407/254] rounded-lg p-3 flex items-end justify-between bg-cover bg-center"
                    style={{
                      backgroundImage: `linear-gradient(0deg, rgba(255, 255, 255, 0.4) 0%, rgba(102,102,102,0) 15%), url(${p.image})`,
                    }}
                  >
                    <span className="text-[14px] leading-[20.3px] font-inter font-medium text-black">
                      {p.title}
                    </span>
                    <span className="text-[14px] leading-[20.3px] font-inter font-medium text-black text-right">
                      {p.year}
                    </span>
                  </div>
                  
                  {/* CTA */}
                  <div className="w-full px-2 py-1 bg-white rounded-lg flex items-center justify-center transition-colors duration-300 group-hover:bg-[#FF3800]">
                    <span className="text-[14px] leading-[20.3px] font-inter font-medium text-black transition-colors duration-300 group-hover:text-white">
                      {p.linkLabel || "View Case Study →"}
                    </span>
                  </div>

                </div>

              </Link>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}