import { Link } from "@tanstack/react-router";

interface ProjectCardProps {
  image: string;
  title: string;
  year: string;
  linkTo?: string;
  linkLabel?: string;
  type?: string;
}

export function ProjectCard({ image, title, year, linkTo, linkLabel = "View Case Study →", type = "Case Study" }: ProjectCardProps) {
  const content = (
    <div className="group overflow-hidden rounded-xl bg-card transition-all hover:shadow-lg">
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex items-center justify-between px-4 py-3">
        <div>
          <p className="text-xs text-muted-foreground">{type}</p>
          <p className="font-medium text-foreground">{title}</p>
        </div>
        <span className="text-xs text-muted-foreground">{year}</span>
      </div>
    </div>
  );

  if (linkTo) {
    return (
      <div>
        {content}
        <Link to={linkTo} className="mt-2 block text-center text-sm text-foreground hover:text-primary transition-colors">
          {linkLabel}
        </Link>
      </div>
    );
  }

  return (
    <div>
      {content}
      <p className="mt-2 text-center text-sm text-muted-foreground">{linkLabel}</p>
    </div>
  );
}
