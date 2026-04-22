import { Link } from "react-router-dom";
import projectIba from "@/assets/Projects/IBA/Iba-listing-cover.png";
import {
  Container,
  Content,
  CaseStudyHeader,
  H2,
  Body,
  BulletList,
  Section,
  BackLink,
} from "@/components/case-study.shared";

function IbaCosmeticsPage() {
  return (
    <Container>
      <CaseStudyHeader
        cover={projectIba}
        coverAlt="IBA Cosmetics e-commerce and brand cover"
        title="IBA Cosmetics — E-commerce & Brand Experience Design"
        subtitle="Designing conversion-focused, on-brand experiences across web, marketplaces, and social for a halal-certified beauty brand."
        timeline="June - September 2025"
        role="UX Designer"
        skills="E-commerce UX · A+ Content · Brand Storytelling · Campaign Design"
        coverBackground="#E8E3D8"
      />

      <Content>
        <Section>
          <H2>Project Overview</H2>
          <Body>
            IBA Cosmetics is a fast-growing halal-certified beauty brand operating across its own
            e-commerce platform and multiple marketplaces. The objective of this engagement was to
            strengthen their digital presence, improve conversion, and create consistent brand
            communication across web, marketplaces, and social media.
          </Body>
          <Body>
            I worked closely with business and marketing stakeholders to design end-to-end
            e-commerce and content experiences that balanced user needs, brand storytelling, and
            commercial goals.
          </Body>
        </Section>

        <Section>
          <H2>The Problem</H2>
          <Body>
            IBA Cosmetics had strong products and brand intent, but their digital ecosystem lacked:
          </Body>
          <BulletList
            items={[
              "Consistent visual storytelling across platforms",
              "Optimized product presentation on e-commerce channels",
              "Conversion-focused content on their website",
              "High-impact creatives for sales, festivals, and campaigns",
            ]}
          />
          <Body>
            This resulted in missed opportunities for engagement, trust-building, and conversion.
          </Body>
        </Section>

        <Section>
          <H2>Approach</H2>
          <Body>
            I focused on creating a cohesive e-commerce ecosystem by aligning customer insights with
            business and operational goals.
          </Body>
          <Body>Key principles:</Body>
          <BulletList
            items={[
              "Design for clarity, trust, and conversion",
              "Maintain brand consistency across platforms",
              "Use visual storytelling to communicate product value",
              "Optimize content for both first-time and returning users",
            ]}
          />
        </Section>

        <Section>
          <H2>Key Contributions</H2>
          <BulletList
            items={[
              <span key="1">
                <strong>E-commerce Experience Design:</strong> Designed and enhanced the brand's
                e-commerce experience by aligning user journeys with business objectives. Helped
                structure content and layouts to improve product discovery and decision-making.
                Focused on improving conversion through clearer hierarchy, messaging, and visual
                cues.
              </span>,
              <span key="2">
                <strong>Product A+ &amp; B+ Content Design:</strong> Designed all A+ and B+ product
                images used on the website and third-party e-commerce platforms. Created visually
                rich, informative assets that communicated product benefits, ingredients, and brand
                values. Ensured consistency across marketplaces while adapting designs to
                platform-specific guidelines.
              </span>,
              <span key="3">
                <strong>Website Content &amp; Visual Design:</strong> Supported the design of the
                website with a strong focus on content structure and storytelling. Helped define how
                products, collections, and brand narratives were presented to users. Ensured the
                website reflected both brand credibility and a modern e-commerce aesthetic.
              </span>,
              <span key="4">
                <strong>Social Media &amp; Campaign Creatives:</strong> Designed social media
                content throughout the engagement, with a strong focus on sales campaigns,
                festivals, and special occasions. Created high-performing creatives for seasonal
                sales and promotional moments. Maintained visual consistency while adapting designs
                for different platforms and formats.
              </span>,
            ]}
          />
        </Section>

        <Section>
          <H2>Impact &amp; Outcomes</H2>
          <BulletList
            items={[
              <span key="1">
                <strong>35% revenue growth</strong> within the first year
              </span>,
              "Improved overall conversion rates across the e-commerce ecosystem",
              "Stronger and more consistent brand presence across website, marketplaces, and social channels",
              "Enhanced product storytelling leading to better customer understanding and trust",
            ]}
          />
        </Section>

        <Section>
          <H2>Reflection</H2>
          <Body>
            The work helped IBA Cosmetics strengthen its digital foundation, improve performance
            across e-commerce touchpoints, and scale its brand presence with a more consistent and
            conversion-driven design system. This experience reinforced the importance of balancing
            aesthetic design with data-driven decision-making.
          </Body>
        </Section>
        <BackLink to="/case-studies">← Back to Case Studies</BackLink>
      </Content>
    </Container>
  );
}

export default IbaCosmeticsPage;
