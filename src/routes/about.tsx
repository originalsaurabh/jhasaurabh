import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import projectComdaily from "@/assets/project-comdaily.jpg";
import projectTasksync from "@/assets/project-tasksync.jpg";
import projectIba from "@/assets/project-iba.jpg";
import projectAmazon from "@/assets/project-amazon.jpg";
import projectSaathi from "@/assets/project-saathi.jpg";
import projectSportz from "@/assets/project-sportz.jpg";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Me — Saurabh Jha" },
      {
        name: "description",
        content:
          "UX Designer passionate about systems, structure, and meaningful digital experiences.",
      },
    ],
  }),
});

type Side = "left" | "right";
type Paragraph = {
  text: React.ReactNode;
  image?: { src: string; side: Side; alt: string; rotate?: number; size?: number };
};

function AboutPage() {
  const paragraphs: Paragraph[] = [
    {
      text: (
        <>
          <strong>I've always been drawn to how things work.</strong>
        </>
      ),
    },
    {
      text: (
        <>
          Not just visually, but structurally.<br />
          Why some experiences feel effortless.<br />
          Why others make you stop, think, or struggle.
        </>
      ),
      image: { src: projectAmazon, side: "left", alt: "", rotate: -6, size: 110 },
    },
    {
      text: "Over time I realized that behind every good experience there's always a quiet layer of thoughtful design. That curiosity is what eventually led me to UX.",
      image: { src: projectSportz, side: "right", alt: "", rotate: 4, size: 120 },
    },
    {
      text: (
        <>
          Design, for me, is about clarity.<br />
          Not decoration.
        </>
      ),
    },
    {
      text: "It's about taking something complex; a system, a workflow, a product; and shaping it until it becomes simple enough for someone else to use without thinking about it. That moment when something just works is what I find beautiful.",
      image: { src: projectTasksync, side: "right", alt: "", rotate: -4, size: 130 },
    },
    {
      text: (
        <>
          <strong>My path into UX wasn't linear.</strong><br />
          I started my career in visual and brand design, learning how communication, identity, and aesthetics shape how people experience a product.
        </>
      ),
      image: { src: projectIba, side: "left", alt: "", rotate: 5, size: 110 },
    },
    {
      text: "Later, working across digital design, marketing, and operations, I began seeing the bigger picture; how design decisions connect to real business systems and user behavior.",
    },
    {
      text: (
        <>
          That shift pushed me toward product design and UX strategy.<br />
          Over time, I found myself drawn to systems.<br />
          Design systems.<br />
          Operational systems.<br />
          Product ecosystems.
        </>
      ),
      image: { src: projectComdaily, side: "right", alt: "", rotate: 6, size: 120 },
    },
    {
      text: "The invisible frameworks that allow products and teams to scale without losing consistency. I enjoy building those foundations; the things that make future work easier, faster, and clearer.",
    },
    {
      text: (
        <>
          <strong>My work today sits at the intersection of craft, structure, and empathy.</strong><br />
          I combine visual design, UX thinking, and systems perspective to design products that are intuitive for users and sustainable for teams.
        </>
      ),
      image: { src: projectSaathi, side: "right", alt: "", rotate: -5, size: 100 },
    },
    {
      text: "Recently, I've worked on projects like, building a design system from 0 → 1, designing product dashboards and digital platforms, and improving operational workflows through systems thinking.",
      image: { src: projectTasksync, side: "left", alt: "", rotate: -8, size: 90 },
    },
    {
      text: "Each project reinforces the same idea: good design isn't just what people see. It's how the entire experience fits together.",
      image: { src: projectIba, side: "left", alt: "", rotate: 6, size: 100 },
    },
    {
      text: "I'm currently based in Europe and open to opportunities where I can contribute to thoughtful product design, scalable design systems, and teams that care about building meaningful digital experiences.",
    },
    {
      text: "Because at the end of the day, I believe design is really about helping people move through the world with less friction.",
    },
    {
      text: <strong>And I'm always curious about what we can improve next.</strong>,
    },
  ];

  return (
    <section className="mx-auto max-w-5xl px-6 py-20">
      <div className="relative mx-auto max-w-[590px] text-left">
        {paragraphs.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: 0.05, duration: 0.5 }}
            className="relative mb-6 text-base leading-relaxed text-foreground"
          >
            {/* Side image — positioned absolutely outside the text column */}
            {p.image && (
              <img
                src={p.image.src}
                alt={p.image.alt}
                aria-hidden={p.image.alt === ""}
                loading="lazy"
                className="absolute hidden rounded-[10px] object-cover shadow-md md:block"
                style={{
                  width: p.image.size ?? 110,
                  height: p.image.size ?? 110,
                  top: "50%",
                  transform: `translateY(-50%) rotate(${p.image.rotate ?? 0}deg)`,
                  ...(p.image.side === "left"
                    ? { left: -180 }
                    : { right: -180 }),
                }}
              />
            )}
            {typeof p.text === "string" ? <p>{p.text}</p> : <p>{p.text}</p>}
          </motion.div>
        ))}
      </div>
    </section>
  );
}
