import { createFileRoute } from "@tanstack/react-router";
import projectSaathi from "@/assets/Projects/Saathi/Saathi Cover.png";
import {
  Container,
  Content,
  CaseStudyHeader,
  H2,
  H3,
  Body,
  Section,
  BackLink,
} from "@/components/case-study.shared";

export const Route = createFileRoute("/case-studies/saathi-pads")({
  component: SaathiPadsPage,
  head: () => ({
    meta: [
      { title: "Saathi Pads: One Designer, Every Touchpoint" },
      {
        name: "description",
        content:
          "End-to-end creative ownership across brand identity, e-commerce UX, packaging, and marketing campaigns for a D2C women's health brand.",
      },
      { property: "og:title", content: "Saathi Pads — One Designer, Every Touchpoint" },
      {
        property: "og:description",
        content: "Brand foundation, conversion-focused redesign, and end-to-end campaign work for a D2C women's health brand.",
      },
    ],
  }),
});

function SaathiPadsPage() {
  return (
    <Container>
      <CaseStudyHeader
        cover={projectSaathi}
        coverAlt="Saathi Pads brand and e-commerce cover"
        title="Saathi Pads: One Designer, Every Touchpoint"
        subtitle="End-to-end creative ownership across brand identity, e-commerce UX, packaging, and marketing campaigns for a D2C women's health brand."
        timeline="September 2020 – February 2021"
        role="Sole Creative: Brand Design, UX/UI, Marketing"
        skills="Brand Identity · E-commerce UX · Packaging · Campaign Design"
        coverBackground="#D4B79B"
      />

      <Content>
        <Section>
          <H2>The Situation</H2>
          <Body>
            Saathi Pads makes biodegradable sanitary pads from banana and bamboo fibre — a genuinely
            differentiated product in a category where most brands look and sound the same. When I joined in
            September 2020, the brand's digital presence didn't reflect that. The website was an uncustomized
            Shopify template. The visuals were inconsistent across touchpoints. The two product lines — Banana
            and Bamboo — were visually identical. There were no brand guidelines.
          </Body>
          <Body>
            I was the only creative person on the team. Everything from brand foundations to campaign execution
            ran through me. The work I'm describing here happened across five months, in parallel, with no
            design handoff process because there was no one to hand off to.
          </Body>
        </Section>

        <Section>
          <H2>The First Thing I Did Was Create a Foundation</H2>
          <Body>
            Before touching the website or any campaign work, I built a brand guidelines document. This wasn't a
            request from the founders — it was my call, and it was the right one. Every design problem I could
            see on the existing site traced back to the same root cause: there was no defined visual language,
            so every piece of content had been made in isolation. Fixing individual screens without fixing that
            first would have meant compounding the inconsistency rather than resolving it.
          </Body>
          <Body>
            The guidelines covered the core of what the team needed to work from: the color system, typography,
            logo usage rules, and visual tone. Two decisions from this document ended up shaping everything that
            came after. First, I assigned distinct primary colors to each product line — purple for the Banana
            range, which was the brand's hero product, and green for the Bamboo range to signal its natural
            provenance. Second, I documented these not as suggestions but as rules, so that any asset made after
            this point — whether a social post, a product page, or a package — would read as part of the same
            brand.
          </Body>
          <Body>Everything else in this case study is downstream of this document.</Body>
        </Section>

        <Section>
          <H2>The Problem With the Site</H2>
          <Body>
            The website was doing a lot of heavy lifting it wasn't equipped for. It was the primary landing page
            for all digital marketing campaigns, which meant every rupee spent on acquisition was sending traffic
            to a page that couldn't convert it. The issues weren't subtle. The Shopify template was completely
            uncustomized. Branding was inconsistent — colors varied across graphics, logo placement was
            arbitrary, and the two product lines were visually indistinguishable from each other. The checkout
            flow had no progress indicators, no way to edit your cart once you'd moved forward, and generic CTAs
            that gave users no sense of what happened next. It felt unfinished because it was.
          </Body>
        </Section>

        <Section>
          <H2>Research: Understanding the Competitive Landscape</H2>
          <Body>
            Before making any design decisions, I did a structured walkthrough of the three competitors I
            considered most relevant — Carmesi, NUA, and Pee Safe. I went through the full experience on each:
            discovering products, learning about them, choosing, and completing a purchase. All three had
            something Saathi didn't — a consistent, trustworthy visual presence that carried from the website
            through to their social media. Opening their sites felt intentional. Opening Saathi's didn't.
          </Body>
          <Body>
            But I wasn't looking to copy their approach. What I noticed was that all three led with product. None
            of them were leading with people. Saathi had something those brands didn't — founders with a genuine
            story, external recognition, and a point of view on women's health. That became my differentiator.
          </Body>
        </Section>

        <Section>
          <H2>Key Design Decisions</H2>
          <H3>Homepage restructured around trust and conversion</H3>
          <Body>
            I rebuilt the homepage with the campaign landing page use case as the primary frame. The hero section
            moved away from generic product imagery and toward founder-led content — videos, quotes, and awards
            the brand had won. The rationale was straightforward: in a category where customers are being asked
            to switch from products they've used for years, trust is the conversion mechanism. Putting the
            founders front and centre gave the brand a human face that product photography alone couldn't
            achieve. I also introduced festive and event-specific product combos as featured content, giving
            returning visitors a reason to engage beyond their standard purchase.
          </Body>

          <H3>Product line differentiation</H3>
          <Body>
            The Banana and Bamboo ranges were applied consistently from this point forward — purple for Banana,
            green for Bamboo — across product cards, labels, and category pages. What had previously been two
            products that looked identical now had a clear visual logic that helped users orient themselves
            quickly.
          </Body>

          <H3>Checkout redesign</H3>
          <Body>
            The checkout flow got four specific interventions. I added breadcrumbs so users could see where they
            were in the process. I introduced editable quantity and size controls at each stage so users weren't
            forced to start over if they wanted to make a change. I replaced generic "Continue" buttons with
            descriptive CTAs that named the next step explicitly. And I applied consistent branding throughout
            the flow — the checkout had previously felt like a different site entirely.
          </Body>

          <H3>Pushing back on dark patterns</H3>
          <Body>
            At one point during the process, there was stakeholder pressure to introduce UX patterns designed to
            obscure information and push users toward decisions they might not have made with full clarity. I
            pushed back. My position was that in a category built on trust — where you're asking someone to make
            a personal, recurring purchase from a brand they don't yet know — dark patterns are a short-term
            conversion tactic that erodes the long-term relationship. My manager backed me on this and we held
            the line. The conversion results suggest it was the right call.
          </Body>
        </Section>

        <Section>
          <H2>Outcomes</H2>
          <Body>
            These numbers come from the brand team's before/after tracking, shared with me via a colleague
            testimonial, measured across Q3 FY20-21 (October–December 2020) — the same quarter the redesign
            shipped.
          </Body>

          <div
            className="w-full grid grid-cols-3 gap-4 pt-2"
            style={{ color: "#000", fontSize: 16, fontFamily: "Inter, sans-serif" }}
          >
            <div className="font-semibold border-b border-black/30 pb-2">Metric</div>
            <div className="font-semibold border-b border-black/30 pb-2">Before</div>
            <div className="font-semibold border-b border-black/30 pb-2">After</div>

            <div className="border-b border-black/15 py-2">Conversion rate</div>
            <div className="border-b border-black/15 py-2 font-bold">~1.8%</div>
            <div className="border-b border-black/15 py-2 font-bold">~3.4%</div>

            <div className="border-b border-black/15 py-2">Checkout drop-off</div>
            <div className="border-b border-black/15 py-2">—</div>
            <div className="border-b border-black/15 py-2 font-bold">−22%</div>

            <div className="py-2">Monthly sessions</div>
            <div className="py-2">—</div>
            <div className="py-2 font-bold">+35%</div>
          </div>

          <Body>
            The redesign was completed by November 2020. The results reflect a period when changes were still
            being incrementally rolled out, which makes the attribution reasonably clean.
          </Body>
        </Section>

        <Section>
          <H2>Reflection</H2>
          <Body>
            Saathi Pads was the first project where I owned every touchpoint a customer could encounter — brand,
            web, packaging, campaigns. The discipline that came out of it was learning to lead with the system,
            not the screen. A brand foundation built early made every subsequent decision faster and more
            defensible.
          </Body>
        </Section>
        <BackLink to="/case-studies">← Back to Case Studies</BackLink>
      </Content>
    </Container>
  );
}
