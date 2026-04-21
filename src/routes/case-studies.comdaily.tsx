import { createFileRoute } from "@tanstack/react-router";
import projectComdaily from "@/assets/project-comdaily.png";
import componentcollage from "@/assets/Projects/comdaily/cover.png";
import componentLibraryOverview from "@/assets/Projects/comdaily/Design system (2).png";
import navigationBar from "@/assets/Projects/comdaily/Menu bar.png";
import {
  Container,
  Content,
  CaseStudyHeader,
  H2,
  H3,
  Body,
  BulletList,
  Section,
  Placeholder,
  BackLink,
} from "@/components/case-study.shared";

export const Route = createFileRoute("/case-studies/comdaily")({
  component: ComdailyPage,
  head: () => ({
    meta: [
      { title: "Building comdaily's Foundation: A Scalable Design System from 0→1" },
      {
        name: "description",
        content:
          "How I built comdaily's first scalable design system — tokens, components, usage rules, and the cross-team adoption to make it stick.",
      },
      { property: "og:title", content: "Building comdaily's Foundation — Design System Case Study" },
      {
        property: "og:description",
        content: "Tokens, components, and cross-team adoption that unified comdaily's product and marketing UI.",
      },
    ],
  }),
});

function ComdailyPage() {
  return (
    <Container>
      <CaseStudyHeader
        cover={projectComdaily}
        coverAlt="comdaily design system cover"
        title="Building comdaily's Foundation: A Scalable Design System from 0→1"
        subtitle="Comdaily had two teams designing in parallel with no shared foundation. I built the system that changed that — tokens, components, usage rules, and the cross-team adoption to make it stick."
        timeline="June - September 2025"
        role="UX Designer"
        skills="Systems Architecture · Cross-team Adoption · Component Documentation"
        coverBackground="#E3DBE5"
      />

      <Content>
        <Section>
          <H2>Project Overview</H2>
          <Body>
            comdaily is an AI-powered brand monitoring platform that helps companies track their visibility across
            emerging search engines such as ChatGPT and Perplexity.
          </Body>
          <Body>
            When I joined as a UX Design Intern, the product and marketing experiences lacked a shared visual
            language. My primary responsibility was to design and implement comdaily's first scalable design
            system, creating a consistent foundation that could support both rapid iteration and long-term
            growth. I then applied the system to key marketing pages and core dashboard components to validate
            its effectiveness.
          </Body>
        </Section>

        <Section>
          <H2>The Problem</H2>
          <Body>Before the design system, comdaily faced growing pains typical of an early-stage product.</Body>
          <H3>What was happening:</H3>
          <BulletList
            items={[
              "UI patterns were inconsistent across the dashboard and marketing pages",
              "Similar components were redesigned repeatedly",
              "Developers lacked clear guidance for states, spacing, and hierarchy",
            ]}
          />
          <H3>Why it mattered:</H3>
          <BulletList
            items={[
              "Inconsistencies reduced perceived product quality",
              "Design and development slowed as the product scaled",
              "There was no reliable foundation for future features",
            ]}
          />
        </Section>

        <Section>
          <H2>The Solution (High-Level)</H2>
          <Body>
            I designed a comprehensive design system from scratch, including shared foundations, reusable
            components, and clear usage guidelines. The system became the single source of truth for both
            marketing and product UI, enabling faster page creation, predictable implementation, and a cohesive
            brand experience.
          </Body>
        </Section>

        <Section>
          <H2>My Role &amp; Approach</H2>
          <Body>I owned the design system end-to-end while collaborating closely with product managers and developers.</Body>
          <BulletList
            items={[
              "Conducted a full UI audit across product and marketing.",
              "Defined design foundations and component standards.",
              "Built scalable components using auto-layout and variants.",
              "Applied the system to real product and marketing use cases.",
              "Iterated continuously based on developer feedback.",
            ]}
          />
          <Body>My guiding principle was systems over screens — designing components that could scale beyond the initial use cases.</Body>
        </Section>

        <Section>
          <H2>Design Process — Discovery &amp; UI Audit</H2>
          <H3>Phase 1: Discovery &amp; UI Audit</H3>
          <Body>I began by auditing existing screens to understand the scope of inconsistencies.</Body>
          <H3>Key findings:</H3>
          <BulletList
            items={[
              "7+ button styles serving similar purposes",
              "Inconsistent typography sizes and weights",
              "No standardized spacing or layout rules",
              "Components rebuilt manually across pages",
            ]}
          />
          <Body>This audit clarified that the problem wasn't individual screens, but the absence of a system.</Body>
        </Section>

        <Section>
          <H2>Design Process — Foundations &amp; Research</H2>
          <H3>Phase 2: Foundations &amp; Research</H3>
          <Body>
            I studied established systems like Material Design, Shopify Polaris, and Airbnb DLS to understand
            best practices, then tailored decisions to comdaily's brand and product needs.
          </Body>
          <H3>Foundations established:</H3>
          <BulletList
            items={[
              "Color system: Brand-aligned purple primary, neutral grays, semantic feedback colors",
              "Typography: Clear hierarchy with a consistent type scale",
              "Spacing: 8px-based system for visual rhythm and developer efficiency",
              "Elevation: Defined shadow levels to communicate hierarchy",
            ]}
          />
          <Body>These foundations ensured consistency before any components were built.</Body>
        </Section>

        <Section>
          <H2>Design Process — Component Library</H2>
          <H3>Phase 3: Component Library (Core Focus)</H3>
          <Body>I designed a modular component library organized by function and scalability.</Body>
          <H3>Key component groups included:</H3>
          <BulletList
            items={[
              "Buttons & CTAs: Primary, secondary, tertiary styles with full state coverage",
              "Form elements: Inputs, dropdowns, toggles, checkboxes, sliders",
              "Navigation: Tabs, tags, pills, top-level navigation",
              "Data display: Tables, cards, modals, banners, notifications",
              "Empty states & illustrations: Brand-aligned visual language",
            ]}
          />
          <H3>Each component was designed with:</H3>
          <BulletList
            items={[
              "Variants instead of one-off solutions",
              "Clear states (hover, focus, disabled)",
              "Developer-friendly constraints",
            ]}
          />
        </Section>

        <img
          src={componentcollage}
          alt="comdaily component library overview"
          className="w-full max-w-[900px] rounded-md"
          loading="lazy"
        />
        <Section><H3>Buttons</H3></Section>
        
        <img
          src={componentLibraryOverview}
          alt="comdaily component library overview"
          className="w-full max-w-[900px] rounded-md"
          loading="lazy"
        />
        <Section><H3>Navigation Bar</H3></Section>
        <img
          src={navigationBar}
          alt="comdaily navigation bar design"
          className="w-full max-w-[900px] rounded-md"
          loading="lazy"
        />

        <Section>
          <H2>Design Process — Application &amp; Validation (Marketing)</H2>
          <H3>Phase 4: Application &amp; Validation — Marketing Website</H3>
          <Body>
            I applied the system across multiple live pages to validate flexibility and speed (Homepage, Use
            Cases, Consulting, Pricing). Using predefined components allowed pages to be assembled quickly while
            maintaining strong visual consistency.
          </Body>
        </Section>

        <Section>
          <H2>Design Process — Application &amp; Validation (Product)</H2>
          <H3>Product Dashboard</H3>
          <Body>
            I also designed key dashboard sections using the same components (Metric cards, Tables, Comparison
            views, Platform tracking interfaces). This ensured the system worked beyond marketing and held up
            under real product complexity.
          </Body>
        </Section>

        <Section>
          <H2>Collaboration &amp; Handoff</H2>
          <Body>Collaboration was continuous throughout the project:</Body>
          <BulletList
            items={[
              "Weekly syncs with PMs and developers",
              "Shared, well-organized Figma files",
              "Documented component usage and tokens",
              "Feedback loops that improved real-world feasibility",
            ]}
          />
          <Body>This process significantly reduced clarification questions during development.</Body>
        </Section>

        <Section>
          <H2>Impact &amp; Outcomes</H2>
          <H3>Design</H3>
          <BulletList items={["New pages assembled in hours instead of days", "Consistent visual language across all surfaces"]} />
          <H3>Development</H3>
          <BulletList items={["Predictable implementation patterns", "Fewer UI clarification questions"]} />
          <H3>Business &amp; Product</H3>
          <BulletList
            items={[
              "More professional, cohesive brand presence",
              "Scalable foundation for future features",
              "Easier onboarding for new team members",
            ]}
          />
        </Section>

        <Section>
          <H2>Challenges &amp; How I Addressed Them</H2>
          <BulletList
            items={[
              "Balancing system rigour with shipping speed — resolved by building foundations first, then iterating components alongside real product work.",
              "Aligning marketing and product needs — resolved by treating both surfaces as first-class consumers of the same components.",
              "Driving adoption — resolved through documentation, examples, and continuous developer feedback loops.",
            ]}
          />
        </Section>

        <Section>
          <H2>Reflection</H2>
          <Body>
            Building comdaily's first design system reinforced that scalable design isn't about producing more
            screens — it's about producing fewer decisions, repeated reliably. The clearest impact was less in
            individual artefacts and more in the speed and confidence with which the team began to ship.
          </Body>
        </Section>
        <BackLink to="/case-studies">← Back to Case Studies</BackLink>
      </Content>
    </Container>
  );
}
