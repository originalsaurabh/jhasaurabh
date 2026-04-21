import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import profilePhoto from "@/assets/profile-photo.jpg";

export const Route = createFileRoute("/resume")({
  component: ResumePage,
  head: () => ({
    meta: [
      { title: "Resume — Saurabh Jha" },
      { name: "description", content: "UX & Service Designer with 6+ years of experience." },
    ],
  }),
});

interface ExperienceItem {
  logo: string;
  title: string;
  company: string;
  period: string;
  location: string;
  details?: string[];
}

const experience: ExperienceItem[] = [
  {
    logo: "🎨",
    title: "UX Design Intern @ ",
    company: "comdaily",
    period: "Jun-Sep 2025 | ",
    location: "Koln, Germany",
    details: ["Contributed to UX research and interface design for the brand monitoring platform."],
  },
  {
    logo: "🖼️",
    title: "Visual Designer Consultant @ ",
    company: "Endeavour Design Studio",
    period: "Feb 2021 – Apr 2024 | ",
    location: "Remote – Global Clients",
    details: ["Delivered visual design consulting for global clients across multiple industries."],
  },
  {
    logo: "🌿",
    title: "Senior Designer & Digital Marketing Executive @ ",
    company: "Saathi Pads",
    period: "Sep 2020 – Feb 2021 | ",
    location: "Ahmedabad, India",
    details: ["Led brand design and digital marketing for sustainable menstrual products."],
  },
  {
    logo: "🏏",
    title: "Junior Visual Designer @ ",
    company: "Sportz Interactive",
    period: "Oct 2018 – Jan 2020 | ",
    location: "Mumbai, India",
    details: ["Designed sports media graphics for major cricket leagues and teams."],
  },
  {
    logo: "🖨️",
    title: "Graphic Designer @ ",
    company: "Vistaprint India (Cimpress)",
    period: "Oct 2017 – Oct 2018 | ",
    location: "Ahmedabad, India",
    details: ["Created print and digital designs at scale for the mass customization platform."],
  },
];

const education = [
  {
    logo: "🎓",
    title: "M.Sc. User Experience Management & Design",
    school: "PFH Private Hochschule",
    date: "Sep 2025",
    location: "Göttingen, Germany",
  },
  {
    logo: "🎨",
    title: "Dip. Graphic and Web Design",
    school: "Frameboxx Institute of Animation and Visual Effects",
    date: "Oct 2017",
    location: "Mumbai, India",
  },
  {
    logo: "💻",
    title: "B.Sc. Computer Science",
    school: "University of Mumbai",
    date: "Nov 2017",
    location: "Mumbai, India",
  },
];

const skills = [
  {
    category: "Product & UX Design",
    items:
      "User-Centered Design, Design Thinking, Information Architecture, Interaction Design, User Interface Design, Responsive & Scalable Interfaces, Design Systems & Component Libraries, Prototyping (Low to High Fidelity), Usability & Accessibility (WCAG 2.1)",
  },
  {
    category: "Research & Strategy",
    items:
      "User Research (Qualitative & Quantitative), User Interviews & Surveys, Usability Testing, Journey Mapping, Competitive & Contextual Analysis, Data-Driven Design, Product Strategy",
  },
  {
    category: "Systems & Collaboration",
    items:
      "Design Ops & Structured Workflows, Cross-Functional Collaboration, Stakeholder Engagement, Agile / Scrum, Developer Handoff, End-to-End Product Development",
  },
  {
    category: "Tools",
    items:
      "Figma (Advanced), Framer, Webflow, Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro), Miro, Basic Frontend (HTML, CSS, JS), Claude Code, VS Code",
  },
  {
    category: "Languages & Certification",
    items:
      "English (Fluent), German (A2 – Actively Improving)\nLean Six Sigma White Belt (Process Improvement & Quality Optimization)",
  },
];

/* ---------- Shared text style helpers (match Figma exactly) ---------- */
const fontInter = { fontFamily: "Inter, sans-serif" } as const;

const sectionLabelStyle = {
  ...fontInter,
  color: "#000",
  fontSize: 24,
  fontWeight: 500,
  lineHeight: "33.6px",
} as const;

const itemRegular = {
  ...fontInter,
  color: "#000",
  fontSize: 16,
  fontWeight: 400,
  lineHeight: "19.2px",
} as const;

const itemBold = {
  ...fontInter,
  color: "#000",
  fontSize: 16,
  fontWeight: 700,
  lineHeight: "19.2px",
} as const;

const itemMedium = {
  ...fontInter,
  color: "#000",
  fontSize: 16,
  fontWeight: 500,
  lineHeight: "19.2px",
} as const;

function ResumePage() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);
  const [projectExpanded, setProjectExpanded] = useState(false);

  return (
    <div className="w-full">
      {/* ---------- Header (centered, photo + name + bio) ---------- */}
      <section className="mx-auto flex max-w-[1200px] items-start justify-center gap-12 px-6 py-16 md:px-[120px] lg:px-[180px]">
        <motion.img
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          src={profilePhoto}
          alt="Saurabh Jha"
          className="h-[148px] w-[148px] flex-shrink-0 rounded-full object-cover"
        />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex max-w-[720px] flex-1 flex-col gap-6"
        >
          <div>
            <h1
              style={{
                ...fontInter,
                color: "#000",
                fontSize: 24,
                fontWeight: 700,
                lineHeight: "26.4px",
              }}
            >
              Saurabh Jha
            </h1>
            <p style={{ ...fontInter, color: "#000", fontSize: 16, fontWeight: 500, lineHeight: "17.6px", marginTop: 4 }}>
              UX Designer
            </p>
            <a
              href="https://www.linkedin.com/in/saurabhjha95"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...fontInter,
                color: "#0077B5",
                fontSize: 16,
                fontWeight: 500,
                textDecoration: "underline",
                lineHeight: "17.6px",
                display: "inline-block",
                marginTop: 4,
              }}
            >
              LinkedIn
            </a>
          </div>
          <p
            style={{
              ...fontInter,
              color: "#000",
              fontSize: 16,
              fontWeight: 400,
              lineHeight: "23.2px",
              textAlign: "justify",
            }}
          >
            UX & Service Designer with 6+ years of experience translating complex user data, digital and analog,
            into clear, actionable design solutions. Skilled in customer journey mapping, service design, and
            data-driven UX, with a strong focus on improving end-to-end user experiences. Experienced in design
            thinking, cross-functional collaboration, and turning unstructured insights into strategic,
            human-centered outcomes.
          </p>
        </motion.div>
      </section>

      {/* ---------- CTA buttons (aligned with the right column) ---------- */}
      <section className="mx-auto flex max-w-[1200px] px-6 md:px-[120px] lg:px-[180px]">
        <div className="ml-auto flex w-full max-w-[720px] flex-wrap items-center gap-4 md:pl-[196px]">
          <button
            type="button"
            className="rounded-[26px] px-4 py-3 transition-opacity hover:opacity-90"
            style={{
              background: "#FF3800",
              ...fontInter,
              color: "#fff",
              fontSize: 18,
              fontWeight: 500,
              lineHeight: "26.1px",
            }}
          >
            Download Resume
          </button>
          <Link
            to="/contact"
            className="rounded-[26px] px-4 py-3 transition-colors hover:bg-black/5"
            style={{
              outline: "2px solid rgba(0,0,0,0.15)",
              outlineOffset: "-2px",
              ...fontInter,
              color: "#000",
              fontSize: 18,
              fontWeight: 500,
              lineHeight: "26.1px",
            }}
          >
            Get in Touch!
          </Link>
        </div>
      </section>

      {/* ---------- Experience ---------- */}
      <ResumeSection label="Experience">
        <div className="flex flex-col gap-[30px]">
          {experience.map((exp, i) => {
            const isOpen = expandedIdx === i;
            return (
              <ExpandableItem
                key={i}
                isOpen={isOpen}
                onToggle={() => setExpandedIdx(isOpen ? null : i)}
                logo={
                  <span className="flex h-10 w-10 items-center justify-center rounded-[5px] bg-muted text-lg">
                    {exp.logo}
                  </span>
                }
                header={
                  <>
                    <div>
                      <span style={itemRegular}>{exp.title}</span>
                      <span style={itemBold}>{exp.company}</span>
                    </div>
                    <div>
                      <span style={itemRegular}>{exp.period}</span>
                      <span style={itemMedium}>{exp.location}</span>
                    </div>
                  </>
                }
                details={exp.details}
              />
            );
          })}
        </div>
      </ResumeSection>

      {/* ---------- Projects ---------- */}
      <ResumeSection label="Projects">
        <div className="flex flex-col gap-[30px]">
          <ExpandableItem
            isOpen={projectExpanded}
            onToggle={() => setProjectExpanded((v) => !v)}
            logo={<span className="block h-10 w-10 rounded-[5px] opacity-0" />}
            header={
              <>
                <p style={itemBold}>TaskSync, Scalable LMS for Universities</p>
                <p style={itemRegular}>Apr-Jul 2024 | Göttingen, Germany</p>
              </>
            }
            details={["Unified central application replacing fragmented learning management systems."]}
          />
        </div>
      </ResumeSection>

      {/* ---------- Education ---------- */}
      <ResumeSection label="Education">
        <div className="flex flex-col gap-[30px]">
          {education.map((edu, i) => (
            <div key={i} className="flex items-start gap-[15px] py-[10px]">
              <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-[5px] bg-white text-lg" style={{ boxShadow: "1px 1px 0px rgba(0,0,0,0.25)" }}>
                {edu.logo}
              </span>
              <div className="flex flex-1 flex-col gap-1">
                <div className="flex items-start justify-between gap-4">
                  <span style={{ ...itemRegular, fontWeight: 600 }}>{edu.title}</span>
                  <span style={{ ...itemRegular, textAlign: "right" }}>{edu.date}</span>
                </div>
                <div className="flex items-start justify-between gap-4">
                  <span style={itemRegular}>{edu.school}</span>
                  <span style={{ ...itemRegular, textAlign: "right" }}>{edu.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </ResumeSection>

      {/* ---------- Skills ---------- */}
      <ResumeSection label="Skills">
        <div className="flex flex-col gap-6">
          {skills.map((s, i) => (
            <div key={i} className="flex flex-col gap-1">
              <p style={itemBold}>{s.category}</p>
              <p style={{ ...itemRegular, whiteSpace: "pre-line" }}>{s.items}</p>
            </div>
          ))}
        </div>
      </ResumeSection>

      {/* ---------- Volunteering ---------- */}
      <ResumeSection label="Volunteering">
        <div className="flex flex-col gap-1 py-[10px]">
          <div>
            <span style={itemRegular}>Marketing Graphic Designer @ </span>
            <span style={itemBold}>DEGIS - </span>
            <span style={itemMedium}>German Association for International Students</span>
          </div>
          <p style={itemRegular}>Nov 2024-Sep 2025 | Göttingen, Germany</p>
        </div>
      </ResumeSection>
    </div>
  );
}

/**
 * Expandable item with hover-tilt plus icon and animated bullet description.
 * - Default: plus sign upright, logo full opacity
 * - Hover: plus tilts 45°, logo dims to 80%
 * - Open: plus rotates to 135° (becomes ×), description expands as bullets
 */
function ExpandableItem({
  isOpen,
  onToggle,
  logo,
  header,
  details,
}: {
  isOpen: boolean;
  onToggle: () => void;
  logo: React.ReactNode;
  header: React.ReactNode;
  details?: string[];
}) {
  return (
    <div className="group">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-[15px] py-[10px] text-left"
      >
        <span className="flex-shrink-0 transition-opacity duration-200 group-hover:opacity-80">
          {logo}
        </span>
        <div className="flex flex-1 flex-col gap-1">{header}</div>
        <motion.span
          animate={{ rotate: isOpen ? 135 : 0 }}
          whileHover={!isOpen ? { rotate: 45 } : undefined}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="flex h-[15px] w-[15px] flex-shrink-0 items-center justify-center text-xl leading-none"
          style={{ color: "#3B2313" }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && details && details.length > 0 && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="flex">
              <div className="w-[55px] flex-shrink-0" />
              <ul className="list-disc pl-4" style={{ ...itemRegular, color: "#15100C" }}>
                {details.map((d, j) => (
                  <li key={j}>{d}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Two-column section: left label (148px), right content (max 720px).
 * Matches Figma's `paddingLeft: 240, paddingRight: 240, gap: 48` layout.
 */
function ResumeSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className="mx-auto flex max-w-[1200px] gap-12 px-6 py-16 md:px-[120px] lg:px-[180px]">
      <div className="w-[148px] flex-shrink-0">
        <h2 style={sectionLabelStyle}>{label}</h2>
      </div>
      <div className="w-full max-w-[720px]">{children}</div>
    </section>
  );
}
