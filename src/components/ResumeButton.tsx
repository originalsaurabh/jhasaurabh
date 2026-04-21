import { Link } from "react-router-dom";
import projectComdaily from "@/assets/icons/favicon.png";
import projectIba from "@/assets/icons/iba.png";
import projectSportz from "@/assets/icons/DC.png";
import projectAmazon from "@/assets/icons/vista.png";

interface ResumeButtonProps {
  to?: string;
  image1?: string;
  image2?: string;
  image3?: string;
  image4?: string;
}

export function ResumeButton({
  to,
  image1 = projectIba,
  image2 = projectSportz,
  image3 = projectAmazon,
  image4 = projectComdaily,
}: ResumeButtonProps) {
  const button = (
    <div className="resume-btn group relative inline-block" style={{ width: 154, height: 60 }} aria-label="Resume">
      <div
        className="absolute left-0 flex items-center justify-center rounded-full border border-[#3B2313] transition-all duration-300 ease-out bg-transparent group-hover:bg-[#3B2313]"
        style={{ width: 154, height: 47, top: 9, paddingLeft: 77, paddingRight: 16 }}
      >
        <span
          className="text-[#3B2313] transition-colors duration-300 group-hover:text-[#FFFBEE]"
          style={{ fontFamily: "Inter, sans-serif", fontSize: 16, fontWeight: 500, lineHeight: "23.2px" }}
        >
          Resume
        </span>
      </div>

      <img
        src={image1}
        alt=""
        className="absolute rounded-[10px] object-cover transition-all duration-500 ease-out"
        style={{
          width: 40,
          height: 40,
          left: "var(--img1-left, 23.95px)",
          top: "var(--img1-top, 4px)",
          transform: "rotate(var(--img1-rot, 10deg))",
          transformOrigin: "top left",
          boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
        }}
      />

      <img
        src={image2}
        alt=""
        className="absolute rounded-[10px] object-cover transition-all duration-500 ease-out"
        style={{
          width: 40,
          height: 40,
          left: "var(--img2-left, 12.53px)",
          top: "var(--img2-top, 24.22px)",
          transform: "rotate(var(--img2-rot, -20deg))",
          transformOrigin: "top left",
          boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
        }}
      />

      <img
        src={image3}
        alt=""
        className="absolute rounded-[10px] object-cover transition-all duration-500 ease-out"
        style={{
          width: 40,
          height: 40,
          left: "var(--img3-left, 29.03px)",
          top: "var(--img3-top, 10.67px)",
          transform: "rotate(var(--img3-rot, 15deg))",
          transformOrigin: "top left",
          boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
        }}
      />

      <img
        src={image4}
        alt=""
        className="absolute rounded-[10px] object-cover transition-all duration-500 ease-out"
        style={{
          width: 40,
          height: 40,
          left: "var(--img4-left, 11px)",
          top: "var(--img4-top, 15.95px)",
          transform: "rotate(var(--img4-rot, -10deg))",
          transformOrigin: "top left",
          boxShadow: "1px 1px 1px rgba(0,0,0,0.25)",
        }}
      />

      <style>{`
        .resume-btn:hover {
          --img1-left: 28px;
          --img1-top: -2.86px;
          --img1-rot: -10deg;

          --img2-left: -0.03px;
          --img2-top: 29.65px;
          --img2-rot: -5deg;

          --img3-left: 34px;
          --img3-top: 29.20px;
          --img3-rot: 0deg;

          --img4-left: -1.01px;
          --img4-top: -8.30px;
          --img4-rot: 5deg;
        }
      `}</style>
    </div>
  );

  return to ? <Link to={to}>{button}</Link> : button;
}
