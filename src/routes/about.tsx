import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";

export const Route = createFileRoute("/about")({
  component: AboutPage,
  head: () => ({
    meta: [
      { title: "About Me — Saurabh Jha" },
      { name: "description", content: "UX Designer passionate about systems, structure, and meaningful digital experiences." },
    ],
  }),
});

function AboutPage() {
  const paragraphs = [
    {
      text: (
        <>
          <strong>I've always been drawn to how things work.</strong>
          <br /><br />
          Not just visually, but structurally.<br />
          Why some experiences feel effortless.<br />
          Why others make you stop, think, or struggle.
        </>
      ),
    },
    {
      text: "Over time I realized that behind every good experience there's always a quiet layer of thoughtful design. That curiosity is what eventually led me to UX.",
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
    },
    {
      text: (
        <>
          <strong>My path into UX wasn't linear.</strong><br />
          I started my career in visual and brand design, learning how communication, identity, and aesthetics shape how people experience a product.
        </>
      ),
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
    },
    {
      text: "Recently, I've worked on projects like, building a design system from 0 → 1, designing product dashboards and digital platforms, and improving operational workflows through systems thinking.",
    },
    {
      text: "Each project reinforces the same idea: good design isn't just what people see. It's how the entire experience fits together.",
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
    <section className="mx-auto max-w-2xl px-6 py-20">
      {paragraphs.map((p, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ delay: 0.05, duration: 0.5 }}
          className="mb-6 text-base leading-relaxed text-foreground"
        >
          {typeof p.text === "string" ? <p>{p.text}</p> : p.text}
        </motion.div>
      ))}
    </section>
  );
}
