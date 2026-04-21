import { createFileRoute } from "@tanstack/react-router";
import projectSportz from "@/assets/Projects/Sportz/SI cover.png";
import {
  Container,
  Content,
  CaseStudyHeader,
  BackLink,
} from "@/components/case-study.shared";
import { SportzGalleryStrip } from "@/components/SportzGalleryStrip";

export const Route = createFileRoute("/case-studies/sportz-interactive")({
  component: SportzInteractivePage,
  head: () => ({
    meta: [
      { title: "Live from the Field — Sportz Interactive" },
      {
        name: "description",
        content:
          "150+ social media and campaign assets across Indian sports leagues, produced live alongside matches and events.",
      },
      { property: "og:title", content: "Live from the Field — Sportz Interactive" },
      {
        property: "og:description",
        content: "Designing fast, accurately, and consistently — where the match doesn't wait and neither does the deadline.",
      },
    ],
  }),
});

/* Placeholder image set — user will drop real files into:
   src/assets/Projects/SportzInteractive/<TeamFolder>/
   then we swap these to imports. */
const placeholder = (w: number, h: number) =>
  `https://placehold.co/${w}x${h}/E3DBE5/3B2313?text=Sportz`;

const teams = [
  {
    title: "Delhi Capitals — Men's Cricket Team",
    folder: "DelhiCapitals",
    images: [
      { src: placeholder(262, 328), alt: "Delhi Capitals asset 1" },
      { src: placeholder(328, 328), alt: "Delhi Capitals asset 2" },
      { src: placeholder(262, 328), alt: "Delhi Capitals asset 3" },
      { src: placeholder(262, 328), alt: "Delhi Capitals asset 4" },
      { src: placeholder(262, 328), alt: "Delhi Capitals asset 5" },
      { src: placeholder(328, 328), alt: "Delhi Capitals asset 6" },
    ],
  },
  {
    title: "Hockey India — Men's Team",
    folder: "HockeyIndia",
    images: [
      { src: placeholder(262, 328), alt: "Hockey India asset 1" },
      { src: placeholder(262, 328), alt: "Hockey India asset 2" },
      { src: placeholder(328, 328), alt: "Hockey India asset 3" },
      { src: placeholder(262, 328), alt: "Hockey India asset 4" },
    ],
  },
  {
    title: "Gujarat Fortune Giants — Men's Kabaddi Team",
    folder: "GujaratFortuneGiants",
    images: [
      { src: placeholder(262, 328), alt: "Gujarat Fortune Giants asset 1" },
      { src: placeholder(262, 328), alt: "Gujarat Fortune Giants asset 2" },
      { src: placeholder(328, 328), alt: "Gujarat Fortune Giants asset 3" },
      { src: placeholder(262, 328), alt: "Gujarat Fortune Giants asset 4" },
      { src: placeholder(262, 328), alt: "Gujarat Fortune Giants asset 5" },
      { src: placeholder(262, 328), alt: "Gujarat Fortune Giants asset 6" },
    ],
  },
  {
    title: "Haryana Steelers — Men's Kabaddi Team",
    folder: "HaryanaSteelers",
    images: [
      { src: placeholder(328, 328), alt: "Haryana Steelers asset 1" },
      { src: placeholder(262, 328), alt: "Haryana Steelers asset 2" },
      { src: placeholder(328, 328), alt: "Haryana Steelers asset 3" },
      { src: placeholder(262, 328), alt: "Haryana Steelers asset 4" },
      { src: placeholder(800, 328), alt: "Haryana Steelers banner" },
    ],
  },
  {
    title: "Procam International — Leading India's Marathon Race",
    folder: "Procam",
    images: [
      { src: placeholder(328, 328), alt: "Procam asset 1" },
      { src: placeholder(328, 328), alt: "Procam asset 2" },
      { src: placeholder(583, 328), alt: "Procam wide asset" },
      { src: placeholder(262, 328), alt: "Procam asset 4" },
      { src: placeholder(262, 328), alt: "Procam asset 5" },
      { src: placeholder(262, 328), alt: "Procam asset 6" },
      { src: placeholder(328, 328), alt: "Procam asset 7" },
    ],
  },
];

function SportzInteractivePage() {
  return (
    <Container>
      <CaseStudyHeader
        cover={projectSportz}
        coverAlt="Sportz Interactive — Live from the Field cover"
        title="Live from the Field"
        subtitle="150+ assets across Indian sports leagues, produced in real time alongside live matches and events. This gallery documents the discipline of designing fast, accurately, and consistently — where the match doesn't wait and neither does the deadline."
        timeline="October 2018 – January 2020"
        role="Visual Designer"
        skills="Graphic Design · Live Design · Social Media"
        coverBackground="#B51B21"
      />

      <Content>
        {teams.map((team) => (
          <SportzGalleryStrip key={team.folder} title={team.title} images={team.images} />
        ))}
        <BackLink to="/case-studies">← Back to Case Studies</BackLink>
      </Content>
    </Container>
  );
}
