import { createFileRoute } from "@tanstack/react-router";
import projectTasksync from "@/assets/project-tasksync.jpg";
import designProcessIllustration from "@/assets/Projects/TaskSync/design-process-illustration.jpg";
import competitiveAnalysisTable from "@/assets/Projects/TaskSync/competitive-analysis-table.jpg";
import userPersonaCard from "@/assets/Projects/TaskSync/user-persona-card.jpg";
import empathyMap from "@/assets/Projects/TaskSync/empathy-map.jpg";
import userFlowDiagram from "@/assets/Projects/TaskSync/user-flow-diagram.jpg";
import calendarScreens from "@/assets/Projects/TaskSync/calendar-screens.jpg";
import handDrawnWireframes from "@/assets/Projects/TaskSync/hand-drawn-wireframes.jpg";
import uiScreens from "@/assets/Projects/TaskSync/tasksync-ui-screen.jpg";
import {
  Container,
  Content,
  CaseStudyHeader,
  H2,
  Body,
  BodyBold,
  BulletList,
  Section,
  BackLink,
} from "@/components/case-study.shared";

export const Route = createFileRoute("/case-studies/tasksync")({
  component: TaskSyncPage,
  head: () => ({
    meta: [
      { title: "TaskSync — Redesigning the University LMS Experience" },
      {
        name: "description",
        content:
          "TaskSync: a unified central application replacing fragmented learning management systems for students, professors, and administration.",
      },
    ],
  }),
});


/* ---------- Page ---------- */

function TaskSyncPage() {
  return (
    <Container>
      <CaseStudyHeader
        cover={projectTasksync}
        coverAlt="TaskSync — LMS & Productivity App cover"
        title="TaskSync - Redesigning the University LMS Experience"
        subtitle="Unified central application replacing fragmented learning management systems"
        timeline="April - July 2024"
        role="UX Designer"
        skills="Research · Ideation · IA · UI · Concept Design"
        coverBackground="#E2F397"
      />

      <Content>
        <Section>
          <H2>Project Overview</H2>
          <Body>
            Universities today rely heavily on Learning Management Systems to manage teaching, learning, and
            administration. However, most existing LMS platforms are outdated, visually cluttered, and fragmented
            across multiple systems. Students often struggle to understand academic processes, professors find
            the systems complex and unintuitive, and administrative staff rely on entirely separate platforms
            that are not transparent to users.
          </Body>
          <Body>
            TaskSync was designed as an attempt to rethink the LMS from a user-centered perspective by unifying
            all university-related workflows into one central application. Instead of adding more features to an
            already complex system, the focus was placed on clarity, structure, and meaningful integration.
          </Body>
        </Section>

        <Section>
          <H2>Problem Statement</H2>
          <Body>
            The existing LMS ecosystem presents several usability and structural problems that negatively impact
            all user groups.
          </Body>
          <BulletList
            items={[
              "Academic workflows are unclear, and users often do not know what the next step or final outcome will be",
              "Multiple platforms are required to complete a single task (LMS, email, calendar, portals, admin systems)",
              "Visual design is outdated, reducing engagement and adoption",
              "Professors often avoid advanced or AI-based features due to poor usability",
              "Administrative systems operate separately and are difficult to understand for students and faculty",
            ]}
          />
          <Body>
            As a result, users spend more time navigating systems than focusing on learning, teaching, or
            decision-making.
          </Body>
        </Section>

        <Section>
          <H2>Design Goals</H2>
          <Body>
            The primary goal of TaskSync was to design a single, unified academic platform that replaces
            fragmented LMS systems and improves the overall university experience.
          </Body>
          <Body>The project focused on:</Body>
          <BulletList
            items={[
              "Centralizing academic workflows into one system",
              "Reducing cognitive load and confusion",
              "Improving clarity of academic processes and outcomes",
              "Supporting different user groups without creating separate tools",
              "Introducing AI as a supportive, assistive feature rather than a replacement",
            ]}
          />
        </Section>

        <Section>
          <H2>Design Process</H2>
          <Body>
            The project followed a structured UX design process to ensure that design decisions were grounded in
            research and user needs.
          </Body>
        </Section>

        <img
          src={designProcessIllustration}
          alt="TaskSync design process illustration"
          className="w-full max-w-[900px] rounded-md"
          loading="lazy"
        />

        <Section>
          <Body>
            Each phase informed the next, allowing the solution to evolve from research insights to a refined
            interface and interaction model.
          </Body>
        </Section>

        <Section>
          <H2>Discover Phase – User Research</H2>
          <Body>
            Research Objectives: The research phase focused on understanding how students, professors, and
            administrative staff interact with existing LMS systems and where the main points of friction occur.
          </Body>
          <BodyBold>Key objectives included:</BodyBold>
          <BulletList
            items={[
              "Identifying pain points in current academic workflows",
              "Understanding expectations from an ideal LMS",
              "Analyzing how users currently manage academic tasks across platforms",
            ]}
          />
          <BodyBold>Research Methods:</BodyBold>
          <BulletList
            items={[
              "Secondary research on existing LMS platforms",
              "Informal interviews and discussions with students and peers",
              "Analysis of personal academic experiences using LMS systems",
            ]}
          />
          <Body>These methods provided qualitative insights into recurring usability and structural issues.</Body>
        </Section>

        <Section>
          <H2>Competitive Analysis</H2>
        </Section>

        <img
          src={competitiveAnalysisTable}
          alt="TaskSync competitive analysis table"
          className="w-full max-w-[900px] rounded-md"
          loading="lazy"
        />

        <Section>
          <Body>A competitive analysis was conducted to evaluate commonly used LMS platforms and academic tools.</Body>
          <BodyBold>The analysis revealed that while most systems offer similar features, they suffer from:</BodyBold>
          <BulletList
            items={[
              "Poor information hierarchy",
              "Weak cross-platform integration",
              "Overloaded interfaces",
              "Low adoption of AI features",
            ]}
          />
          <Body>Rather than focusing on feature quantity, TaskSync focuses on integration, clarity, and consistency.</Body>
        </Section>

        <Section>
          <H2>Define Phase – User Persona</H2>
          <Body>To represent the primary user group, a student persona was created based on research findings.</Body>
          <Body>Persona: Sarah Jane Age: 21 Occupation: University Student</Body>
          <BodyBold>Needs:</BodyBold>
          <BulletList
            items={[
              "Clear overview of deadlines and academic responsibilities",
              "Easy access to learning materials",
              "Centralized communication with professors and peers",
            ]}
          />
          <BodyBold>Pain Points:</BodyBold>
          <BulletList
            items={[
              "Too many platforms for academic tasks",
              "Confusion around submissions, schedules, and outcomes",
              "Difficulty finding past materials and information",
            ]}
          />
        </Section>

        <img
          src={userPersonaCard}
          alt="Sarah Jane persona card"
          className="w-full max-w-[900px] rounded-md"
          loading="lazy"
        />

        <Section>
          <H2>Empathy Map</H2>
          <Body>
            An empathy map was created to better understand the thoughts, feelings, and frustrations of students
            when interacting with existing LMS platforms. This helped ensure that design decisions addressed
            emotional as well as functional pain points.
          </Body>
        </Section>

        <img
          src={empathyMap}
          alt="TaskSync empathy map"
          className="w-full max-w-[900px] rounded-md"
          loading="lazy"
        />

        <Section>
          <H2>Ideate Phase – User Flow</H2>
          <Body>
            Based on research and defined requirements, user flows were created to map out key academic tasks
            such as accessing materials, communicating with professors, and managing schedules.
          </Body>
          <Body>The goal was to reduce unnecessary steps and make each workflow intuitive and predictable.</Body>
        </Section>

        <img
          src={userFlowDiagram}
          alt="TaskSync user flow diagram"
          className="w-full max-w-[900px] rounded-md"
          loading="lazy"
        />

        <Section>
          <H2>Solution Overview</H2>
          <Body>
            TaskSync is designed as a centralized academic ecosystem that brings together all university-related
            activities into one application.
          </Body>
          <Body>
            It integrates scheduling, communication, academic content, and AI-powered assistance into a single
            interface that adapts to different user roles without fragmenting the experience.
          </Body>
        </Section>

        <Section>
          <H2>Key Features - Unified Calendar</H2>
          <Body>
            TaskSync provides a single calendar that supports academic, personal, and professional events. Events
            are organized using tags and color coding, allowing users to differentiate between categories while
            maintaining a unified overview.
          </Body>
          <Body>
            The calendar can sync with external services, ensuring that users do not need to manage multiple
            calendars across platforms.
          </Body>
        </Section>

        <img
          src={calendarScreens}
          alt="TaskSync unified calendar screens"
          className="w-full max-w-[900px] rounded-md"
          loading="lazy"
        />

        <Section>
          <H2>Key Features - Centralized Communication Hub</H2>
          <Body>
            All study-related communication takes place within one centralized message system. This includes
            student-professor communication, course-based discussions, and administrative announcements.
          </Body>
          <Body>
            By consolidating communication, TaskSync eliminates scattered emails and reduces missed or
            misunderstood messages.
          </Body>
        </Section>

        <Section>
          <H2>Key Features - Academic Content Library</H2>
          <Body>
            All academic materials such as lecture slides, notes, assignments, and presentations are stored in a
            single searchable repository. Content is organized by course, semester, and topic, making it easy to
            locate information even after a course has ended.
          </Body>
        </Section>

        <Section>
          <H2>Key Features - AI-Powered Academic Assistant</H2>
          <Body>TaskSync integrates AI as a supportive academic assistant.</Body>
          <BodyBold>For students, AI helps with:</BodyBold>
          <BulletList
            items={[
              "Lecture note assistance",
              "Topic explanations",
              "Generating possible exam questions",
              "Searching across the entire platform",
            ]}
          />
          <BodyBold>For professors, AI supports:</BodyBold>
          <BulletList
            items={[
              "Lecture planning",
              "Exam preparation",
              "Scheduling evaluations and grading",
            ]}
          />
          <Body>For administration, AI assists with managing student data and reducing repetitive queries.</Body>
        </Section>

        <Section>
          <H2>Design Phase – Wireframes</H2>
          <Body>
            Initial ideas were explored using hand-drawn wireframes. These low-fidelity sketches allowed rapid
            iteration and experimentation with layout, navigation, and hierarchy before moving into high-fidelity
            design.
          </Body>
        </Section>

        <img
          src={handDrawnWireframes}
          alt="TaskSync hand drawn wireframes"
          className="w-full max-w-[900px] rounded-md"
          loading="lazy"
        />

        <Section>
          <H2>Visual Design &amp; User Interface</H2>
          <Body>
            The final UI design focuses on clarity, visual hierarchy, and accessibility. Colors and typography
            were chosen to support readability while maintaining a modern and friendly academic aesthetic.
          </Body>
          <Body>The interface aims to reduce visual noise and guide users naturally through their tasks.</Body>
        </Section>

        <img
          src={uiScreens}
          alt="TaskSync visual UI screens"
          className="w-full max-w-[900px] rounded-md"
          loading="lazy"
        />

        <Section>
          <H2>Prototype</H2>
          <Body>
            A high-fidelity interactive prototype was created to demonstrate core workflows and interactions. The
            prototype showcases how users navigate between features and complete academic tasks within TaskSync.
          </Body>
        </Section>

        <a
          href="https://www.figma.com/proto/trUk416c0rw5Aw978kmpdf/TaskSync-Final-Project?node-id=52-904&t=89DGKlFEvcgmNpPo-1"
          target="_blank"
          rel="noreferrer noopener"
          className="inline-flex items-center justify-center rounded-md transition-opacity hover:opacity-90"
          style={{
            padding: 10,
            background: "#3B2313",
            outline: "1px solid #3B2313",
            outlineOffset: "-1px",
            color: "#FFFBEE",
            fontSize: 16,
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
          }}
        >
          Experience the Interactive Prototype
        </a>

        <Section>
          <H2>Usability Testing</H2>
          <Body>
            After the Visual design was complete I tested the prototype with 5 representative users to see how
            user friendly the application is. The test was conducted over Skype calls where the participants
            were given the following tasks while I observed how they navigated through application:
          </Body>
          <BulletList
            items={[
              "Create a New Task",
              "Navigate the Calendar",
              "Send a Message to a Group Member",
              "Sync your calendars",
            ]}
          />
        </Section>

        <Section>
          <H2>Outcome &amp; Impact</H2>
          <Body>
            TaskSync received a final grade of 1.00, the highest possible grade in the German education system.
            The project was well received by professors and peers, particularly for its clarity, structure, and
            depth of consideration for different user groups.
          </Body>
          <Body>
            The project demonstrated strong system-level thinking, justified design decisions, and effective
            information architecture.
          </Body>
        </Section>

        <Section>
          <H2>Reflection &amp; Future Scope</H2>
          <Body>
            Future improvements could explore deeper AI integration, real-time lecture transcription for
            in-person classes, and adaptation for real-world university systems.
          </Body>
          <Body>
            TaskSync serves as a conceptual exploration of how thoughtful UX design can simplify complex academic
            ecosystems.
          </Body>
        </Section>

        <BackLink to="/case-studies">← Back to Case Studies</BackLink>
      </Content>
    </Container>
  );
}
