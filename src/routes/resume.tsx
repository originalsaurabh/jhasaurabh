import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import profilePhoto from "@/assets/profile-photo.png";
import uniLogo from "@/assets/icons/PFH.svg";
import designLogo from "@/assets/icons/frameboxx.png";
import csLogo from "@/assets/icons/University_of_Mumbai_coat_of_arms.svg";
import comdailyLogo from "@/assets/icons/favicon.png";
import independentLogo from "@/assets/icons/SJ logo.svg";
import saathiLogo from "@/assets/icons/Saathi.png";
import sportzLogo from "@/assets/icons/SI.png";
import vistaLogo from "@/assets/icons/vista.png";


interface ExperienceItem {
  logo: string;
  title: string;
  company: string;
  period: string;
  location: string;
  details?: React.ReactNode[];
}

const experience: ExperienceItem[] = [
  {
    logo: <img src={comdailyLogo} alt="comdaily logo" className="h-10 w-10 object-contain" />,
    title: "UX Design Intern @ ",
    company: "comdaily",
    period: "Jun-Sep 2025 | ",
    location: "Cologne, Germany",
    details: [
      "Built a design system of 30+ reusable Figma components covering UI patterns, typography tokens, spacing rules, and design tokens - reducing developer revision rounds by approximately 25-30% and eliminating the most common class of handoff errors across a 5-screen landing page and 25-screen dashboard redesign.",
      "Redesigned core workflow dashboards by observing how 8 internal users navigated daily tasks, identified two key bottlenecks causing repeated context-switching, and proposed a consolidated task view that was prioritised in the next sprint",
      "Challenged the initial brief for a full dashboard overhaul by presenting a component-level refresh as an alternative, validated it with users, and got it adopted by the team - saving an estimated two sprint cycles without compromising the usability goals",
      "Redesigned and standardised investor pitch decks by building a master Figma template flexible enough for multiple pitch contexts, used across 7-9 events during the placement and still in active use by the team after the internship ended"
    ],
  },
  {
    logo: <img src={independentLogo} alt="Independent Consultant logo" className="h-10 w-10 object-contain" />,
    title: "Freelance UX & Visual Designer @ ",
    company: "Independent Consultant",
    period: "Feb 2021 – Apr 2024 | ",
    location: "Remote – Global Clients",
    details: 
    [
      <>
        <Link to="/case-studies/iba-cosmetics" className="text-blue-600 hover:underline">IBA Cosmetics</Link>: Identified a UX problem without being briefed on it - mapped the existing e-commerce purchase journey, found the primary drop-off points, and redesigned the checkout flow with the client team. The client tracked 35% revenue growth in the year following launch against their pre-launch baseline
      </>,
      "Mondelez India: Produced digital advertising and social media assets across Oreo, Bournvita, Cadbury, and Gems product lines. Automated the artwork resizing workflow in Adobe Illustrator, eliminating manual resizing across 10+ platform formats per campaign and freeing the team from a repeatable production task on every cycle",
      "MICARAA Cosmetics (Germany): Designed packaging for 10 product lines for a German cosmetics brand, working directly with the client team from concept to print-ready production. All 10 designs entered full commercial production.",
      "Managed all project phases independently - from scoping and research through to design and handoff - across multiple concurrent clients, consistently meeting deadlines and earning repeat business."
    ],
  },
  {
    logo: <img src={saathiLogo} alt="Saathi Pads logo" className="h-10 w-10 object-contain" />,
    title: "Senior Designer @ ",
    company: "Saathi Pads",
    period: "Sep 2020 – Feb 2021 | ",
    location: "Ahmedabad, India",
    details: [
      <>
        Led the end-to-end redesign of the company website as the sole designer - owning all design and UX decisions and presenting rationale directly to stakeholders. The redesign drove conversion from 1.8% to 3.4%, reduced checkout drop-offs by approximately 22%, and grew sessions by approximately 35%. (<Link to="/case-studies/saathi-pads" className="text-blue-600 hover:underline">View Case Study</Link>)
      </>,
      "Owned creative production across 15+ simultaneous marketing campaigns within a $2M budget - directing timelines, creative resources, and review cycles to consistent on-time delivery",
      "Designed pitch decks and investor communication assets for MIT D-Lab and UNDP GSIV, contributing to funding conversations totalling $5M in new opportunities through clear visual storytelling."
    ],
  },
  {
    logo: <img src={sportzLogo} alt="Sportz Interactive logo" className="h-10 w-10 object-contain" />,
    title: "Junior Visual Designer @ ",
    company: "Sportz Interactive",
    period: "Oct 2018 – Jan 2020 | ",
    location: "Mumbai, India",
    details: [
      <>
        Produced 150+ social media and campaign assets for IPL and ISL under live event conditions - no revision cycles, real-time delivery - across campaigns reaching over 5 million followers. Contributed vector and SVG assets to the development team for sports client applications, requiring precision UI-ready file production. (<Link to="/case-studies/sportz-interactive" className="text-blue-600 hover:underline">View Gallery</Link>)
      </>,
      "Developed speed and quality discipline under sustained production pressure that directly informs current approach to high-output design system work and component production."
    ],
  },
  {
    logo: <img src={vistaLogo} alt="Vistaprint India logo" className="h-10 w-10 object-contain" />,
    title: "Graphic Designer @ ",
    company: "Vistaprint India (Cimpress)",
    period: "Oct 2017 – Oct 2018 | ",
    location: "Ahmedabad, India",
    details: [
      "Produced high-volume print and digital assets for US, UK, and Australian customers to exact brand and pre-press specifications, building a precision-first design discipline that carries through to current Figma component and handoff work.",
      "Developed client research techniques adopted team-wide, and was invited to deliver a workflow and research training programme for 120 designers - demonstrating early ability to systematise and share design knowledge across large teams."
    ],
  },
];

const education = [
  {
    logo: <img src={uniLogo} alt="PFH logo" className="h-10 w-10 object-contain" />,
    title: "M.Sc. User Experience Management & Design",
    school: "PFH Private Hochschule",
    date: "Sep 2025",
    location: "Göttingen, Germany",
    details: (
      <ul className="list-disc pl-4">
        <li>Thesis: Defined user and market requirements for AI-driven LMS platforms by conducting semi-structured interviews with 10 university stakeholders across three roles (students, instructors, administrators), building role-specific personas, and auditing four competing platforms (Blackboard, Canvas, Moodle, Stud.IP). Findings produced four concrete design recommendations directly tied to observed behaviour and market gaps: unified workflow ecosystems, mobile-first UX, privacy-first AI assistants (with GDPR-compliant data handling), and curriculum mapping tools.</li>
        <li>Programme project <Link to="/case-studies/tasksync" className="text-blue-600 hover:underline">TaskSync</Link>: Led end-to-end UX design of an AI-enhanced LMS, including user research, persona development, information architecture, wireframing, journey mapping, and a 32-screen high-fidelity Figma prototype built with Auto Layout and a scalable component library</li>
      </ul>
    )
  },
  {
    logo: <img src={designLogo} alt="Frameboxx logo" className="h-10 w-10 object-contain" />,
    title: "Dip. Graphic and Web Design",
    school: "Frameboxx Institute of Animation and Visual Effects",
    date: "Oct 2017",
    location: "Mumbai, India",
  },
  {
    logo: <img src={csLogo} alt="Mumbai University logo" className="h-10 w-10 object-contain" />,
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
const resumeShellClass = "mx-auto w-full max-w-[916px] px-4 sm:px-6 lg:px-0";
const resumeContentClass = "w-full max-w-[720px] lg:w-[720px] lg:flex-none";
const mutedTextColor = "hsl(var(--muted-foreground))";
const mutedTextColorOpacity60 = "hsla(var(--muted-foreground), 0.6)";

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
  const prefersReducedMotion = typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  return (
    <div className="w-full">
      {/* ---------- Header (centered, photo + name + bio) ---------- */}
      <section className="mx-auto flex w-full max-w-[918px] flex-col items-center justify-center gap-6 px-4 py-8 sm:px-6 md:py-16 lg:flex-row lg:items-start lg:gap-[50px] lg:px-0">
        <motion.img
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
          src={profilePhoto}
          alt="Saurabh Jha"
          className="h-[120px] w-[120px] flex-shrink-0 rounded-full object-cover sm:h-[148px] sm:w-[148px]"
        />
        <motion.div
          initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, delay: 0.1 }}
          className="flex w-full max-w-[720px] flex-col gap-4 text-center sm:gap-6 md:text-left lg:w-[720px] lg:flex-none"
        >
          <div>
            <h1
              style={{
                ...fontInter,
                color: "#000",
                fontSize: "clamp(18px, 5vw, 24px)",
                fontWeight: 700,
                lineHeight: "1.2",
              }}
            >
              Saurabh Jha
            </h1>
            <p style={{ ...fontInter, color: "#000", fontSize: "clamp(14px, 4vw, 16px)", fontWeight: 500, lineHeight: "1.2", marginTop: 4 }}>
              UX Designer
            </p>
            <a
              href="https://www.linkedin.com/in/saurabhjha95"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                ...fontInter,
                color: "#0077B5",
                fontSize: "clamp(14px, 4vw, 16px)",
                fontWeight: 500,
                textDecoration: "underline",
                lineHeight: "1.2",
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
              fontSize: "clamp(14px, 4vw, 16px)",
              fontWeight: 400,
              lineHeight: "1.6",
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

      {/* ---------- CTA buttons (responsive) ---------- */}
      <section className={`${resumeShellClass} flex justify-start`}>
        <div className="flex w-full max-w-[720px] flex-col flex-wrap items-center justify-start gap-3 sm:flex-row sm:gap-4 lg:ml-[196px]">
          <button
            type="button"
            className="rounded-[26px] px-4 py-2.5 sm:py-3 transition-opacity hover:opacity-90 w-full sm:w-auto"
            style={{
              background: "#FF3800",
              ...fontInter,
              color: "#fff",
              fontSize: "clamp(16px, 4vw, 18px)",
              fontWeight: 500,
              lineHeight: "1.4",
            }}
          >
            Download Resume
          </button>
          <Link
            to="/contact"
            className="rounded-[26px] px-4 py-2.5 sm:py-3 transition-colors hover:bg-black/5 w-full sm:w-auto text-center"
            style={{
              outline: "2px solid rgba(0,0,0,0.15)",
              outlineOffset: "-2px",
              ...fontInter,
              color: "#000",
              fontSize: "clamp(16px, 4vw, 18px)",
              fontWeight: 500,
              lineHeight: "1.4",
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

      {false && (
      <>
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
            details={[
              "Thesis: Defined user and market requirements for AI-driven LMS platforms by conducting semi-structured interviews with 10 university stakeholders across three roles (students, instructors, administrators), building role-specific personas, and auditing four competing platforms (Blackboard, Canvas, Moodle, Stud.IP). Findings produced four concrete design recommendations directly tied to observed behaviour and market gaps: unified workflow ecosystems, mobile-first UX, privacy-first AI assistants (with GDPR-compliant data handling), and curriculum mapping tools. ",
              "Programme project TaskSync: Led end-to-end UX design of an AI-enhanced LMS, including user research, persona development, information architecture, wireframing, journey mapping, and a 32-screen high-fidelity Figma prototype built with Auto Layout and a scalable component library"
            ]}
          />
        </div>
      </ResumeSection>
      </>
      )}

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
                <div className="flex items-start justify-between gap-4">
                  {edu.details && (
                    <span style={{ ...itemRegular, color: mutedTextColorOpacity60 }}>
                      {edu.details}
                    </span>
                  )}
           
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
  prefersReducedMotion = false,
}: {
  isOpen: boolean;
  onToggle: () => void;
  logo: React.ReactNode;
  header: React.ReactNode;
  details?: React.ReactNode[];
  prefersReducedMotion?: boolean;
}) {
  return (
    <div className="group">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-start gap-2 sm:gap-[15px] py-2 sm:py-[10px] text-left"
      >
        <span className="flex-shrink-0 transition-opacity duration-200 group-hover:opacity-80">
          {logo}
        </span>
        <div className="flex flex-1 flex-col gap-1 min-w-0">{header}</div>
        <motion.span
          animate={{ rotate: isOpen ? 135 : 0 }}
          whileHover={!isOpen && !prefersReducedMotion ? { rotate: 45 } : undefined}
          transition={prefersReducedMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 20 }}
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
            transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.3, ease: "easeInOut" }}
            style={{ overflow: "hidden" }}
          >
            <div className="flex flex-col sm:flex-row">
              <div className="w-0 sm:w-[55px] flex-shrink-0" />
              <ul
                className="list-disc pl-4 sm:pl-4"
                style={{
                  ...itemRegular,
                  color: mutedTextColorOpacity60,
                  fontSize: "clamp(13px, 4vw, 16px)",
                }} >
                {details.map((d, j) => ( <li key={j}>{d}</li> ))} 
              </ul>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

/**
 * Two-column section: left label (148px), right content (720px on desktop).
 * Responsive padding and layout for all screen sizes.
 */
function ResumeSection({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <section className={`${resumeShellClass} flex flex-col gap-4 py-8 md:py-12 lg:flex-row lg:gap-12 lg:py-16`}>
      <div className="w-full flex-shrink-0 lg:w-[148px]">
        <h2 style={{ ...sectionLabelStyle, fontSize: "clamp(20px, 5vw, 24px)" }}>{label}</h2>
      </div>

      <div className={resumeContentClass}>{children}</div>
    </section>
  );
}


export default ResumePage;
