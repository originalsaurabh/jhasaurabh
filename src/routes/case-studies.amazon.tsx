import { Link } from "react-router-dom";
import projectAmazon from "@/assets/Projects/Amazon/Amazon.png";
import scenario1 from "@/assets/Projects/Amazon/Scenario-1.jpg";
import scenario2 from "@/assets/Projects/Amazon/Scenario-2.jpg";
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

function AmazonPage() {
  return (
    <Container>
      <CaseStudyHeader
        cover={projectAmazon}
        coverAlt="Amazon Sortation Center conveyor merge cover"
        title="Optimizing Conveyor Merge Flow at Amazon Sortation Center"
        subtitle="Systems thinking approach to operational efficiency and throughput optimization"
        timeline="January 2026"
        role="Operations Analysis"
        skills="Lean Analysis · Flow Optimization · Data Observation"
        coverBackground="#E8ECEE"
      />

      <Content>
        <Section>
          <H2>Project Overview</H2>
          <Body>
            At Amazon Sortation Center, inbound parcels are unloaded through two primary streams:
          </Body>
          <BulletList items={["Fluid unload", "Pallet unload"]} />
          <Body>
            These streams merge before feeding into sortation. Conveyor belts progressively increase
            speed from Belt 1 to Belt 3, making parcel spacing at the merge critical for maintaining
            stable flow.
          </Body>
          <Body>
            During high-volume inbound operations, management decisions often focus on maximizing
            unload speed at the start of the process. This case study examines how that approach
            impacts overall system efficiency.
          </Body>
        </Section>

        <Section>
          <H2>Problem Statement</H2>
          <Body>
            A common operational assumption is:{" "}
            <em>Maximizing utilization at the unload point increases total output.</em>
          </Body>
          <Body>
            This assumption was tested during peak inbound periods when additional labor was added
            upstream to accelerate unloading.
          </Body>
        </Section>

        <img
          src={scenario1}
          alt="Amazon scenario 1 - overutilization at input"
          className="w-full max-w-[900px] rounded-md"
          loading="lazy"
        />

        <Section>
          <H2>Scenario 1 — Overutilization at the Input (Current State)</H2>
          <BodyBold>Process Setup:</BodyBold>
          <BulletList
            items={[
              "An additional associate (W1) is assigned to the fluid line",
              "Existing associates (W2–W4) continue operating at their standard pace",
              "Parcel input into Merge M1 increases without any change to merge capacity",
            ]}
          />
          <BodyBold>Observed Behavior:</BodyBold>
          <BulletList
            items={[
              "Parcel density increases on Belt 3",
              "Gaps between parcels have reduced significantly",
              "Merge M1 becomes congested due to insufficient spacing",
              "Downstream associates (W3 and W4) are forced to pause frequently",
            ]}
          />
          <BodyBold>Impact:</BodyBold>
          <BulletList
            items={[
              "Downstream productivity drops by ~50%",
              "Waiting and congestion increase (Lean waste)",
              "Sortation achieves 100% throughput, but only by overusing labor, reducing effective efficiency, and increasing operational strain",
            ]}
          />
          <Body>
            <strong>Root Cause:</strong> The merge is the system constraint. Overfeeding it
            increases local activity but degrades overall efficiency.
          </Body>
        </Section>

        <img
          src={scenario2}
          alt="Amazon scenario 2 - flow-controlled operation"
          className="w-full max-w-[900px] rounded-md"
          loading="lazy"
        />

        <Section>
          <H2>Scenario 2 — Flow-Controlled Operation (Improved State)</H2>
          <BodyBold>Process Change:</BodyBold>
          <BulletList
            items={[
              "Fluid unload is staffed with only one associate",
              "Parcel spacing is preserved before the merge",
              "Merge M2 is managed like a zip chain, allowing smooth alternation of parcels",
            ]}
          />
          <BodyBold>Results:</BodyBold>
          <BulletList
            items={[
              "Stable merge behavior without congestion",
              "No downstream slowdowns",
              "Sortation receives a steady ~90% volume",
              "All labor and conveyors operate at 100% effective utilization",
              "One associate becomes available for redeployment to higher-priority work",
            ]}
          />
        </Section>

        <Section>
          <H2>Lean / Six Sigma Perspective</H2>
          <BulletList
            items={[
              <span key="t">
                <strong>Theory of Constraints:</strong> Throughput is governed by the merge, not the
                unload rate
              </span>,
              <span key="w">
                <strong>Waste eliminated:</strong> Waiting, overproduction, unnecessary motion
              </span>,
              <span key="p">
                <strong>Process control</strong> over brute-force staffing
              </span>,
              <span key="f">
                <strong>Flow optimization</strong> yields better results than local maximization
              </span>,
            ]}
          />
        </Section>

        <Section>
          <H2>Facility-Level Implications</H2>
          <Body>
            This case study focuses on a single merge point, but similar merge configurations exist
            across the facility.
          </Body>
          <Body>
            If the same overfeeding behavior occurs at five comparable merge points, the cumulative
            effect becomes substantial:
          </Body>
          <BulletList
            items={[
              <span key="1">
                <strong>~50% productivity</strong> loss across two downstream associates per merge
              </span>,
              <span key="2">
                Equivalent to <strong>~5 full associates</strong> worth of lost productivity
              </span>,
              "Increased congestion during the periods when volume is highest",
              "Inefficiencies that remain hidden when only sortation output is measured",
            ]}
          />
          <Body>
            This demonstrates how localized decisions can compound into facility-wide
            inefficiencies, particularly during peak operations.
          </Body>
        </Section>

        <Section>
          <H2>Limitations of the Study</H2>
          <Body>To ensure transparency, the following limitations apply:</Body>
          <BulletList
            items={[
              <span key="1">
                <strong>1. Volume Dependency:</strong> This behavior is most visible during
                high-volume conditions such as peak season, Prime Day events, and large inbound
                waves. During normal or low-volume operations, merge congestion is less pronounced.
              </span>,
              <span key="2">
                <strong>2. Data Constraints:</strong> Productivity losses are based on direct floor
                observations, associate pacing, and visual assessment of parcel spacing and waiting
                time. Exact metrics could not be validated due to limited access to internal
                conveyor and machine data.
              </span>,
            ]}
          />
          <Body>
            Despite these limitations, the trend and operational impact are consistently observable.
          </Body>
        </Section>

        <Section>
          <H2>Amazon Leadership Principles Applied</H2>
          <BulletList
            items={[
              <span key="1">
                <strong>Dive Deep:</strong> Identified spacing and merge behavior as the true
                constraint
              </span>,
              <span key="2">
                <strong>Ownership:</strong> Focused on system efficiency rather than local metrics
              </span>,
              <span key="3">
                <strong>Bias for Action:</strong> Proposed a low-risk change without equipment
                investment
              </span>,
              <span key="4">
                <strong>Think Big:</strong> Evaluated impact beyond a single process point
              </span>,
            ]}
          />
        </Section>

        <Section>
          <H2>Conclusion</H2>
          <Body>
            This case study shows that maximizing input does not guarantee maximizing output. By
            overfeeding the merge, the system achieved short-term throughput at the cost of labor
            efficiency, stability, and scalability.
          </Body>
          <Body>
            Controlling flow to the system constraint restored downstream productivity, reduced
            waste, and freed labor—without sacrificing operational goals. When applied consistently
            across multiple merge points, this approach has the potential to unlock meaningful
            efficiency gains at the facility level, especially during peak demand.
          </Body>
          <Body>
            True operational excellence comes not from pushing every process to its limit, but from
            aligning labor, machines, and flow to the constraint that defines the system.
          </Body>
        </Section>
        <BackLink to="/case-studies">← Back to Case Studies</BackLink>
      </Content>
    </Container>
  );
}

export default AmazonPage;
