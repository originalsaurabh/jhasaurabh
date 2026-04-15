import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import projectTasksync from "@/assets/project-tasksync.jpg";

export const Route = createFileRoute("/case-studies/tasksync")({
  component: TaskSyncPage,
  head: () => ({
    meta: [
      { title: "TaskSync Case Study — Saurabh Jha" },
      { name: "description", content: "TaskSync: LMS & Productivity App for university students." },
    ],
  }),
});

function TaskSyncPage() {
  return (
    <section className="mx-auto max-w-4xl px-6 py-20">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
        <div className="overflow-hidden rounded-2xl bg-[#A8D96C]/20">
          <img src={projectTasksync} alt="TaskSync" className="w-full object-cover" />
        </div>

        <div className="mt-10">
          <h1 className="text-4xl md:text-5xl">TaskSync</h1>
          <p className="mt-2 font-display text-xl text-muted-foreground">LMS & Productivity App</p>
        </div>
      </motion.div>

      {/* Meta */}
      <div className="mt-10 grid grid-cols-2 gap-6 rounded-xl bg-card p-6 md:grid-cols-4">
        <div>
          <p className="text-xs text-muted-foreground">Role</p>
          <p className="text-sm font-medium">UX / Product Designer</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Duration</p>
          <p className="text-sm font-medium">Apr – Jul 2024</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Status</p>
          <p className="text-sm font-medium">Completed</p>
        </div>
        <div>
          <p className="text-xs text-muted-foreground">Location</p>
          <p className="text-sm font-medium">Göttingen, Germany</p>
        </div>
      </div>

      {/* Content Sections */}
      <div className="mt-16 space-y-14">
        <div>
          <h2 className="text-2xl">Project Overview</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            TaskSync is a Learning Management System (LMS) and Productivity app designed specifically for university students. The goal was to create a unified platform that consolidates academic tasks, deadlines, communication, and resources into a single intuitive mobile experience.
          </p>
        </div>

        <div>
          <h2 className="text-2xl">Problem Statement</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            University students juggle multiple tools for managing their academic life — separate apps for calendars, to-do lists, grade tracking, and communication. This fragmentation leads to missed deadlines, duplicated effort, and cognitive overload. TaskSync aimed to solve this by providing a centralized, student-focused productivity platform.
          </p>
        </div>

        <div>
          <h2 className="text-2xl">Design Process</h2>
          <div className="mt-6 grid grid-cols-5 gap-4">
            {["Discover", "Define", "Ideate", "Design", "Test"].map((phase, i) => (
              <div key={i} className="rounded-lg bg-card p-4 text-center">
                <p className="text-xs text-muted-foreground">Phase {i + 1}</p>
                <p className="mt-1 text-sm font-medium">{phase}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl">Key Features</h2>
          <div className="mt-6 space-y-4">
            {[
              { title: "Unified Calendar", desc: "All academic deadlines, exams, and events in one view." },
              { title: "Centralized Communication Hub", desc: "Direct messaging with peers and professors." },
              { title: "Academic Content Library", desc: "Course materials organized by semester and subject." },
              { title: "AI-Powered Academic Assistant", desc: "Smart suggestions for study planning and task prioritization." },
            ].map((f, i) => (
              <div key={i} className="rounded-xl bg-card p-5">
                <h4 className="text-sm font-bold font-body">{f.title}</h4>
                <p className="mt-1 text-xs text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h2 className="text-2xl">Outcome & Impact</h2>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            The final prototype was validated through usability testing with 8 university students. Key outcomes included a 40% reduction in task management time and a 92% satisfaction rate for the unified calendar feature. The project demonstrated how thoughtful UX design can significantly reduce cognitive load in academic environments.
          </p>
        </div>
      </div>

      <div className="mt-16">
        <Link to="/case-studies" className="text-sm text-primary hover:underline">
          ← Back to Case Studies
        </Link>
      </div>
    </section>
  );
}
