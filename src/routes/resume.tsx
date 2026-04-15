import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
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
    title: "UX Design Intern",
    company: "comdaily",
    period: "Jun–Sep 2025",
    location: "Koln, Germany",
    details: ["Contributed to UX research and interface design for the brand monitoring platform."],
  },
  {
    logo: "🖼️",
    title: "Visual Designer Consultant",
    company: "Endeavour Design Studio",
    period: "Feb 2021 – Apr 2024",
    location: "Remote – Global Clients",
    details: ["Delivered visual design consulting for global clients across multiple industries."],
  },
  {
    logo: "🌿",
    title: "Senior Designer & Digital Marketing Executive",
    company: "Saathi Pads",
    period: "Sep 2020 – Feb 2021",
    location: "Ahmedabad, India",
    details: ["Led brand design and digital marketing for sustainable menstrual products."],
  },
  {
    logo: "🏏",
    title: "Junior Visual Designer",
    company: "Sportz Interactive",
    period: "Oct 2018 – Jan 2020",
    location: "Mumbai, India",
    details: ["Designed sports media graphics for major cricket leagues and teams."],
  },
  {
    logo: "🖨️",
    title: "Graphic Designer",
    company: "Vistaprint India (Cimpress)",
    period: "Oct 2017 – Oct 2018",
    location: "Ahmedabad, India",
    details: ["Created print and digital designs at scale for the mass customization platform."],
  },
];

const education = [
  { logo: "🎓", title: "M.Sc. User Experience Management & Design", school: "PFH Private Hochschule", date: "Sep 2025", location: "Göttingen, Germany" },
  { logo: "🎨", title: "Dip. Graphic and Web Design", school: "Frameboxx Institute of Animation and Visual Effects", date: "Oct 2017", location: "Mumbai, India" },
  { logo: "💻", title: "B.Sc. Computer Science", school: "University of Mumbai", date: "Nov 2017", location: "Mumbai, India" },
];

const skills = [
  {
    category: "Product & UX Design",
    items: "User-Centered Design, Design Thinking, Information Architecture, Interaction Design, User Interface Design, Responsive & Scalable Interfaces, Design Systems & Component Libraries, Prototyping (Low to High Fidelity), Usability & Accessibility (WCAG 2.1)",
  },
  {
    category: "Research & Strategy",
    items: "User Research (Qualitative & Quantitative), User Interviews & Surveys, Usability Testing, Journey Mapping, Competitive & Contextual Analysis, Data-Driven Design, Product Strategy",
  },
  {
    category: "Systems & Collaboration",
    items: "Design Ops & Structured Workflows, Cross-Functional Collaboration, Stakeholder Engagement, Agile / Scrum, Developer Handoff, End-to-End Product Development",
  },
  {
    category: "Tools",
    items: "Figma (Advanced), Framer, Webflow, Adobe Creative Suite (Photoshop, Illustrator, After Effects, Premiere Pro), Miro, Basic Frontend (HTML, CSS, JS), Claude Code, VS Code",
  },
  {
    category: "Languages & Certification",
    items: "English (Fluent), German (A2 – Actively Improving), Lean Six Sigma White Belt (Process Improvement & Quality Optimization)",
  },
];

function ResumePage() {
  const [expandedIdx, setExpandedIdx] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-3xl px-6 py-20">
      {/* Header */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col items-start gap-6 md:flex-row md:items-center">
        <img src={profilePhoto} alt="Saurabh Jha" className="h-28 w-28 rounded-2xl object-cover" />
        <div>
          <h1 className="text-2xl font-body font-bold">Saurabh Jha</h1>
          <p className="text-muted-foreground">UX Designer</p>
          <a href="https://www.linkedin.com/in/saurabhjha95" target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">LinkedIn</a>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground max-w-lg">
            UX & Service Designer with 6+ years of experience translating complex user data, digital and analog, into clear, actionable design solutions. Skilled in customer journey mapping, service design, and data-driven UX.
          </p>
        </div>
      </motion.div>

      <div className="mt-8 flex gap-4">
        <Button variant="hero" size="default">Download Resume</Button>
        <Link to="/contact">
          <Button variant="heroOutline" size="default">Get in Touch!</Button>
        </Link>
      </div>

      {/* Experience */}
      <div className="mt-16">
        <h2 className="text-2xl">Experience</h2>
        <div className="mt-6 space-y-4">
          {experience.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-start justify-between gap-4 rounded-xl bg-card p-4 cursor-pointer"
              onClick={() => setExpandedIdx(expandedIdx === i ? null : i)}
            >
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-lg">{exp.logo}</span>
                <div>
                  <p className="text-sm">{exp.title} @ <strong>{exp.company}</strong></p>
                  <p className="text-xs text-muted-foreground">{exp.period} | {exp.location}</p>
                  {expandedIdx === i && exp.details && (
                    <ul className="mt-2 text-xs text-muted-foreground list-disc pl-4">
                      {exp.details.map((d, j) => <li key={j}>{d}</li>)}
                    </ul>
                  )}
                </div>
              </div>
              <span className="text-lg text-muted-foreground">{expandedIdx === i ? "−" : "+"}</span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Projects */}
      <div className="mt-16">
        <h2 className="text-2xl">Projects</h2>
        <div className="mt-6 rounded-xl bg-card p-4">
          <p className="text-sm font-medium">TaskSync, Scalable LMS for Universities</p>
          <p className="text-xs text-muted-foreground">Apr–Jul 2024 | Göttingen, Germany</p>
        </div>
      </div>

      {/* Education */}
      <div className="mt-16">
        <h2 className="text-2xl">Education</h2>
        <div className="mt-6 space-y-4">
          {education.map((edu, i) => (
            <div key={i} className="flex items-start justify-between gap-4">
              <div className="flex items-start gap-4">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-lg">{edu.logo}</span>
                <div>
                  <p className="text-sm font-medium">{edu.title}</p>
                  <p className="text-xs text-muted-foreground">{edu.school}</p>
                </div>
              </div>
              <div className="text-right">
                <p className="text-xs text-muted-foreground">{edu.date}</p>
                <p className="text-xs text-muted-foreground">{edu.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Skills */}
      <div className="mt-16">
        <h2 className="text-2xl">Skills</h2>
        <div className="mt-6 space-y-6">
          {skills.map((s, i) => (
            <div key={i}>
              <p className="text-sm font-bold">{s.category}</p>
              <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{s.items}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Volunteering */}
      <div className="mt-16">
        <h2 className="text-2xl">Volunteering</h2>
        <div className="mt-6">
          <p className="text-sm">Marketing Graphic Designer @ <strong>DEGIS - German Association for International Students</strong></p>
          <p className="text-xs text-muted-foreground">Nov 2024–Sep 2025 | Göttingen, Germany</p>
        </div>
      </div>
    </section>
  );
}
