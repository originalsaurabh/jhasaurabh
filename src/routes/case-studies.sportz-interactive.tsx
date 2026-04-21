import { createFileRoute } from "@tanstack/react-router";
import projectSportz from "@/assets/Projects/Sportz/SI cover.png";
import dcAshwin250 from "@/assets/Projects/Sportz/Delhi Capitals/Ashwin-250_P1.png";
import dcAshwin from "@/assets/Projects/Sportz/Delhi Capitals/Ashwin.png";
import dcKaif from "@/assets/Projects/Sportz/Delhi Capitals/Kaif.png";
import dcMayank from "@/assets/Projects/Sportz/Delhi Capitals/Mayank.png";
import dcMishra from "@/assets/Projects/Sportz/Delhi Capitals/Mishra2.png";
import dcMostSixes from "@/assets/Projects/Sportz/Delhi Capitals/Most-Sixes.png";
import dcStarsAction from "@/assets/Projects/Sportz/Delhi Capitals/dc-stars-in-action-native.jpg";
import giAway from "@/assets/Projects/Sportz/Gujarat Fortune Giants/Away.png";
import giDelhi1 from "@/assets/Projects/Sportz/Gujarat Fortune Giants/Delhi-(1).jpg";
import giDidYouKnow from "@/assets/Projects/Sportz/Gujarat Fortune Giants/Didyouknow.jpg";
import giHeadToHead from "@/assets/Projects/Sportz/Gujarat Fortune Giants/HeadToHead.jpg";
import giLineUpStory from "@/assets/Projects/Sportz/Gujarat Fortune Giants/Line-UP-Story.jpg";
import giLineUp1 from "@/assets/Projects/Sportz/Gujarat Fortune Giants/Line-Up_1.png";
import giLineUp2 from "@/assets/Projects/Sportz/Gujarat Fortune Giants/Line-Up_2.png";
import hockeyCountdown from "@/assets/Projects/Sportz/Hockey India/5-days-countdown.png";
import hockeyCountdownInsta from "@/assets/Projects/Sportz/Hockey India/Countdown_insta.png";
import hockeyGuess from "@/assets/Projects/Sportz/Hockey India/Guess.png";
import hockeyGurjit from "@/assets/Projects/Sportz/Hockey India/gurjit.png";
import steelersMatchAlbum from "@/assets/Projects/Sportz/Haryana Steelers/Match Album_PLAY_OFFS.png";
import steelersQuiz from "@/assets/Projects/Sportz/Haryana Steelers/Steelers-QUIZ.jpg";
import steelersStat from "@/assets/Projects/Sportz/Haryana Steelers/stat.png";
import steelersTraining from "@/assets/Projects/Sportz/Haryana Steelers/training1.png";
import steelersBirthday from "@/assets/Projects/Sportz/Haryana Steelers/Happy-Birthday-Sunil.png";
import procamAdhm1 from "@/assets/Projects/Sportz/Procam International/ADHM-Infographic.png";
import procamAdhm2 from "@/assets/Projects/Sportz/Procam International/ADHM-Infographic2.png";
import procamCharity from "@/assets/Projects/Sportz/Procam International/Charity-Day-2019.png";
import procamEndPlate from "@/assets/Projects/Sportz/Procam International/End-Plate.png";
import procamTcsw10k from "@/assets/Projects/Sportz/Procam International/TCSW10K.png";
import procamTmm from "@/assets/Projects/Sportz/Procam International/TMM.png";
import procamTsk from "@/assets/Projects/Sportz/Procam International/TSK-infographic.jpg";
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

const teams = [
  {
    title: "Delhi Capitals — Men's Cricket Team",
    folder: "Delhi Capitals",
    images: [
      { src: dcAshwin250, alt: "Delhi Capitals Ashwin highlight" },
      { src: dcAshwin, alt: "Delhi Capitals Ashwin profile" },
      { src: dcKaif, alt: "Delhi Capitals Kaif creative" },
      { src: dcMayank, alt: "Delhi Capitals Mayank design" },
      { src: dcMishra, alt: "Delhi Capitals Mishra asset" },
      { src: dcMostSixes, alt: "Delhi Capitals Most Sixes graphic" },
    ],
  },
  {
    title: "Hockey India — Men's Team",
    folder: "Hockey India",
    images: [
      { src: hockeyCountdown, alt: "Hockey India countdown creative" },
      { src: hockeyCountdownInsta, alt: "Hockey India Instagram countdown asset" },
      { src: hockeyGuess, alt: "Hockey India guess campaign" },
      { src: hockeyGurjit, alt: "Hockey India Gurjit profile creative" },
    ],
  },
  {
    title: "Gujarat Fortune Giants — Men's Kabaddi Team",
    folder: "Gujarat Fortune Giants",
    images: [
      { src: giAway, alt: "Gujarat Fortune Giants away asset" },
      { src: giDelhi1, alt: "Gujarat Fortune Giants Delhi campaign" },
      { src: giDidYouKnow, alt: "Gujarat Fortune Giants did-you-know asset" },
      { src: giHeadToHead, alt: "Gujarat Fortune Giants head-to-head graphic" },
      { src: giLineUpStory, alt: "Gujarat Fortune Giants line-up story asset" },
      { src: giLineUp1, alt: "Gujarat Fortune Giants line-up design 1" },
      { src: giLineUp2, alt: "Gujarat Fortune Giants line-up design 2" },
    ],
  },
  {
    title: "Haryana Steelers — Men's Kabaddi Team",
    folder: "Haryana Steelers",
    images: [
      { src: steelersMatchAlbum, alt: "Haryana Steelers playoff match album" },
      { src: steelersQuiz, alt: "Haryana Steelers quiz creative" },
      { src: steelersStat, alt: "Haryana Steelers statistics asset" },
      { src: steelersTraining, alt: "Haryana Steelers training creative" },
      { src: steelersBirthday, alt: "Haryana Steelers birthday campaign" },
    ],
  },
  {
    title: "Procam International — Leading India's Marathon Race",
    folder: "Procam International",
    images: [
      { src: procamAdhm1, alt: "Procam ADHM infographic 1" },
      { src: procamAdhm2, alt: "Procam ADHM infographic 2" },
      { src: procamCharity, alt: "Procam charity day asset" },
      { src: procamEndPlate, alt: "Procam end plate graphic" },
      { src: procamTcsw10k, alt: "Procam TCSW10K campaign asset" },
      { src: procamTmm, alt: "Procam TMM event creative" },
      { src: procamTsk, alt: "Procam TSK infographic" },
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
