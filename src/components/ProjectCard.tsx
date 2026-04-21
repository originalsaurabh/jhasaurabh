import { Link } from "react-router-dom";

interface ProjectCardProps {
  cover: string;
  left: string;
  mid: string;
  right: string;
  title: string;
  year: string;
  linkTo?: string;
  type?: string;
  description: string;
  role: string;
}

export function ProjectCard({
  cover,
  left,
  mid,
  right,
  title,
  year,
  linkTo,
  type = "Case Study",
  description,
  role,
}: ProjectCardProps) {

  const card = (
    <div className="group relative w-[380px] h-[420px]">

      {/* CANVAS */}
      <div className="relative w-full h-[380px] overflow-visible">

        {/* MID */}
        <img
          src={mid}
          className="
            absolute left-[143.61px] top-[34px]
            w-[94px] h-[211.13px]
            rounded-[10px]
            object-cover object-top
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:top-[0px]
          "
        />

        {/* LEFT */}
        <img
          src={left}
          className="
            absolute left-[50px] top-[42.27px]
            w-[93px] h-[93px]
            rounded-[10px]
            object-cover object-top
            -rotate-[6deg]
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:left-[22px]
            group-hover:top-[49.75px]
            group-hover:-rotate-[17deg]
          "
        />

        {/* RIGHT */}
        <img
          src={right}
          className="
            absolute left-[237px] top-[34px]
            w-[93px] h-[190.72px]
            rounded-[10px]
            object-cover object-top
            rotate-[4deg]
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:left-[260.81px]
            group-hover:top-[6px]
            group-hover:rotate-[13deg]
          "
        />

        {/* COVER */}
        <img
          src={cover}
          className="
            absolute left-[50px] top-[73px]
            w-[280px] h-[175px]
            rounded-[18px]
            object-cover object-top
            shadow-md
            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
            group-hover:left-[50px]
            group-hover:top-[95px]
            group-hover:-rotate-[5deg]
          "
        />

        {/* WHITE CARD */}
        <div
          className="
            absolute left-[50px] top-[120px]
            w-[280px] h-[180px]
            bg-white
            rounded-[20px]
            shadow-[0_10px_30px_rgba(0,0,0,0.08)]
            overflow-hidden

            transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]

            group-hover:rotate-[-5deg]
            group-hover:h-[140px]
            group-hover:top-[160px]
          "
        >
          <div className="relative w-full h-full px-4">

            {/* TOP TEXT (MOVES WITH CARD) */}
            <div className="absolute top-4 left-4 right-4">
              <p className="text-[10px] leading-[14.5px] font-medium text-black">
                {type}
              </p>

              <p className="text-[10px] leading-[14.5px] font-medium text-black">
                {year}
              </p>
            </div>

            {/* TITLE (BOTTOM LOCKED) */}
            <h3
              className="
                absolute left-4 right-4 bottom-4
                text-[24px] leading-[28px] font-semibold text-black
              "
            >
              {title}
            </h3>

          </div>
        </div>

      </div>

      {/* DESCRIPTION */}
      <div
        className="
          absolute left-[50px] top-[360px]
          w-[280px]
          text-[16px] leading-[23px] text-black/60
          opacity-0
          transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
          group-hover:opacity-100
          group-hover:translate-y-[10px]
        "
      >
        {description}
        <br />
        <span className="text-black font-semibold">Role: {role}</span>
      </div>

    </div>
  );

  return linkTo ? (
    <Link to={linkTo} className="block">
      {card}
    </Link>
  ) : (
    card
  );
}