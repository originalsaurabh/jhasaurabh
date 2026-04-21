import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import projectarch from "@/assets/icons/3d architecture.png";
import projectgears from "@/assets/icons/gears.png";
import projectstart from "@/assets/icons/start 1.png";
import projectgif from "@/assets/icons/twists.gif";
import projectUX from "@/assets/icons/UX work.png";
import projectSaathi from "@/assets/icons/Saathi.png";
import projectVista from "@/assets/icons/vista.png";
import projectSI from "@/assets/icons/SI.png";
import projectcomdaily from "@/assets/icons/favicon.png";
import projectiba from "@/assets/icons/iba.png";
import projectDC from "@/assets/icons/DC.png";

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
  images?: {
    src: string;
    side: Side;
    alt: string;
    size?: number;   // 👈 per-image size
    offset?: number; // 👈 per-image horizontal adjustment
  }[];
};

const DEFAULT_IMAGE_SIZE = 130;

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
      images: [{ src: projectarch, side: "right", alt: "", offset: -60, size: 200 }],
    },
    {
      text:
        "Over time I realized that behind every good experience there's always a quiet layer of thoughtful design. That curiosity is what eventually led me to UX.",
      images: [{ src: projectgears, side: "left", alt: "" }],
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
      text:
        "It's about taking something complex; a system, a workflow, a product; and shaping it until it becomes simple enough for someone else to use without thinking about it. That moment when something just works is what I find beautiful.",
      images: [{ src: projectstart, side: "right", alt: "", offset: -60, size: 200 }],
    },
    {
      text: (
        <>
          <strong>My path into UX wasn't linear.</strong><br />
          I started my career in visual and brand design, learning how communication, identity, and aesthetics shape how people experience a product.
        </>
      ),
      images: [{ src: projectgif, side: "left", alt: "", offset: -60, size: 180 }],
    },
    {
      text:
        "Later, working across digital design, marketing, and operations, I began seeing the bigger picture; how design decisions connect to real business systems and user behavior.",
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
      images: [{ src: projectUX, side: "right", alt: "", offset: -90, size: 240 }],
    },
    {
      text:
        "The invisible frameworks that allow products and teams to scale without losing consistency. I enjoy building those foundations; the things that make future work easier, faster, and clearer.",
    },
    {
      text: (
        <>
          <strong>
            My work today sits at the intersection of craft, structure, and empathy.
          </strong>
          <br />
          I combine visual design, UX thinking, and systems perspective to design products that are intuitive for users and sustainable for teams.
        </>
      ),
      images: [
        { src: projectSaathi, side: "right", alt: "", offset: -60, size: 70 },
        { src: projectVista, side: "left", alt: "", offset: -80, size: 70 },
      ],
    },
    {
      text:
        "Recently, I've worked on projects like, building a design system from 0 → 1, designing product dashboards and digital platforms, and improving operational workflows through systems thinking.",
      images: [
        { src: projectSI, side: "left", alt: "", offset: 0, size: 70 },
        { src: projectcomdaily, side: "right", offset: 40, alt: "", size: 70 },
      ],
    },
    {
      text:
        "Each project reinforces the same idea: good design isn't just what people see. It's how the entire experience fits together.",
      images: [
        { src: projectiba, side: "left", alt: "", offset: -70, size: 70 },
        { src: projectDC, side: "right", alt: "", offset: -80, size: 70 },
      ],
    },
    {
      text:
        "I'm currently based in Europe and open to opportunities where I can contribute to thoughtful product design, scalable design systems, and teams that care about building meaningful digital experiences.",
    },
    {
      text:
        "Because at the end of the day, I believe design is really about helping people move through the world with less friction.",
    },
    {
      text: (
        <strong>
          And I'm always curious about what we can improve next.
        </strong>
      ),
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
            {p.images?.map((img, idx) => {
              const size = img.size ?? DEFAULT_IMAGE_SIZE;
              const baseOffset = -180 - idx * 20;
              const finalOffset = baseOffset + (img.offset ?? 0);

              return (
                <img
                  key={idx}
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="absolute hidden rounded-[10px] md:block"
                  style={{
                    width: size,
                    height: size,
                    objectFit: "contain",
                    top: "50%",
                    transform: "translateY(-50%)",
                    ...(img.side === "left"
                      ? { left: finalOffset }
                      : { right: finalOffset }),
                  }}
                />
              );
            })}

            <p>{p.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}