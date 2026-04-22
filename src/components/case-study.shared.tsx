import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface ContainerProps {
  children: ReactNode;
}

export function Container({ children }: ContainerProps) {
  return (
    <article className="w-full flex flex-col items-center px-4 sm:px-6 md:px-12 lg:px-40 xl:px-60 pb-12 sm:pb-16 md:pb-20">
      {children}
    </article>
  );
}

interface ContentProps {
  children: ReactNode;
}

export function Content({ children }: ContentProps) {
  return <div className="w-full flex flex-col items-center gap-6">{children}</div>;
}

interface CaseStudyHeaderProps {
  cover: string;
  coverAlt: string;
  title: string;
  subtitle: string;
  timeline: string;
  role: string;
  skills: string;
  coverBackground?: string;
}

export function CaseStudyHeader({
  cover,
  coverAlt,
  title,
  subtitle,
  timeline,
  role,
  skills,
  coverBackground = "#E2F397",
}: CaseStudyHeaderProps) {
  const metadata = [
    { icon: <TimelineIcon />, label: "Timeline", value: timeline },
    { icon: <RoleIcon />, label: "Role", value: role },
    { icon: <SkillsIcon />, label: "Leveraged Skills", value: skills },
  ];

  const prefersReducedMotion =
    typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  return (
    <>
      <motion.div
        initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4 }}
        style={{
          width: "100vw",
          background: coverBackground,
        }}
      >
        <div className="flex justify-center">
          <div className="w-full max-w-[1280px]">
            <img
              src={cover}
              alt={coverAlt}
              className="w-full object-cover"
              style={{
                height: "auto",
                aspectRatio: "1280 / 690",
              }}
            />
          </div>
        </div>
      </motion.div>

      <header className="w-full flex flex-col items-center py-6 sm:py-8 md:py-10 gap-3 sm:gap-4">
        <H1>{title}</H1>
        <Body>{subtitle}</Body>

        <div className="w-full max-w-[900px] flex flex-col sm:flex-row items-start gap-4 sm:gap-3 px-4 sm:px-0">
          {metadata.map((item) => (
            <div key={item.label} className="flex-1 flex flex-col items-start gap-1 min-w-0">
              <div className="flex items-center gap-1">
                {item.icon}
                <span style={labelStyle}>{item.label}</span>
              </div>
              <span style={metaStyle}>{item.value}</span>
            </div>
          ))}
        </div>
      </header>
    </>
  );
}

const labelStyle = {
  color: "#000",
  fontSize: 16,
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  lineHeight: "17.6px",
} as const;

const metaStyle = {
  color: "#000",
  fontSize: 14,
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  lineHeight: "15.4px",
} as const;

export function H1({ children }: { children: ReactNode }) {
  return (
    <h1 className="w-full max-w-[900px]" style={headingStyle}>
      {children}
    </h1>
  );
}

export function H2({ children }: { children: ReactNode }) {
  return (
    <h2 className="w-full max-w-[900px]" style={headingStyle}>
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return (
    <h3 className="w-full max-w-[900px]" style={subheadingStyle}>
      {children}
    </h3>
  );
}

const headingStyle = {
  color: "#000",
  fontSize: 24,
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  lineHeight: "26.4px",
} as const;

const subheadingStyle = {
  color: "#000",
  fontSize: 20,
  fontFamily: "Inter, sans-serif",
  fontWeight: 600,
  lineHeight: "24px",
} as const;

export function Body({ children }: { children: ReactNode }) {
  return (
    <p className="w-full max-w-[900px]" style={bodyStyle}>
      {children}
    </p>
  );
}

export function BodyBold({ children }: { children: ReactNode }) {
  return (
    <p className="w-full max-w-[900px]" style={bodyBoldStyle}>
      {children}
    </p>
  );
}

const bodyStyle = {
  color: "#000",
  fontSize: 16,
  fontFamily: "Inter, sans-serif",
  fontWeight: 400,
  lineHeight: "22px",
} as const;

const bodyBoldStyle = {
  color: "#000",
  fontSize: 16,
  fontFamily: "Inter, sans-serif",
  fontWeight: 700,
  lineHeight: "22px",
} as const;

export function BulletList({ items }: { items: ReactNode[] }) {
  return (
    <ul
      className="list-disc space-y-1"
      style={{
        color: "#000",
        fontSize: 16,
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        lineHeight: "22px",
        paddingLeft: 20,
        margin: 0,
      }}
    >
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export function Section({ children }: { children: ReactNode }) {
  return <div className="w-full max-w-[900px] space-y-3">{children}</div>;
}

export function Placeholder({ label, height = 337 }: { label: string; height?: number }) {
  return (
    <div
      className="w-full max-w-[900px] rounded-md flex items-center justify-center"
      style={{
        height,
        background: "#E9EBE6",
        color: "#6b6b6b",
        fontSize: 14,
        fontFamily: "Inter, sans-serif",
      }}
    >
      {label}
    </div>
  );
}

export function BackLink({ to, children }: { to: string; children: ReactNode }) {
  return (
    <div className="w-full max-w-[900px] pt-6">
      <Link to={to} className="text-sm text-primary hover:underline">
        {children}
      </Link>
    </div>
  );
}

const TimelineIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
    <rect x="2.5" y="3.75" width="15" height="13.75" rx="2" stroke="#000" strokeWidth="1.5" />
    <path
      d="M2.5 7.5h15M6.25 2.5v2.5M13.75 2.5v2.5"
      stroke="#000"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const RoleIcon = () => (
  <svg width="18" height="20" viewBox="0 0 18 20" fill="none" aria-hidden>
    <circle cx="9" cy="6" r="3.25" stroke="#100F0D" strokeWidth="1.5" />
    <path
      d="M2.5 18c.8-3.2 3.4-5 6.5-5s5.7 1.8 6.5 5"
      stroke="#100F0D"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);
const SkillsIcon = () => (
  <svg width="20" height="18" viewBox="0 0 20 18" fill="none" aria-hidden>
    <circle cx="2.4" cy="2.3" r="1.7" fill="#100F0D" />
    <circle cx="2.4" cy="9" r="1.7" fill="#100F0D" />
    <circle cx="2.4" cy="15.7" r="1.7" fill="#100F0D" />
    <rect x="7.1" y="1.3" width="12.9" height="2" rx="1" fill="#100F0D" />
    <rect x="7.1" y="8" width="12.9" height="2" rx="1" fill="#100F0D" />
    <rect x="7.1" y="14.7" width="12.9" height="2" rx="1" fill="#100F0D" />
  </svg>
);
