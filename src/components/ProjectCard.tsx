import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/portfolio";

export function ProjectCover({ project, className = "" }: { project: Project; className?: string }) {
  if (project.cover)
    return (
      <img
        src={project.cover}
        alt={`${project.title} cover`}
        loading="lazy"
        className={`h-full w-full ${project.coverFit === "contain" ? "object-contain bg-muted/30" : "object-cover"} ${className}`}
      />
    );
  return (
    <div className={`placeholder-art flex h-full w-full items-center justify-center ${className}`}>
      <div className="text-center">
        <p className="font-display text-3xl md:text-4xl">{project.title}</p>
        <p className="eyebrow mt-3">Project image to come</p>
      </div>
    </div>
  );
}

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group">
      <Link to="/work/$slug" params={{ slug: project.slug }} className="block">
        <div className="aspect-[4/3] overflow-hidden rounded-xl">
          <ProjectCover
            project={project}
            className="transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          />
        </div>
        <div className="mt-5 flex items-baseline justify-between gap-4">
          <h3 className="font-display text-2xl md:text-3xl">{project.title}</h3>
          <span className="shrink-0 text-xs text-muted-foreground">{project.year}</span>
        </div>
        <p className="eyebrow mt-1 !text-accent">{project.category}</p>
        <p className="mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground">{project.summary}</p>
        <dl className="mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs">
          <dt className="text-muted-foreground">Role</dt><dd>{project.role}</dd>
          <dt className="text-muted-foreground">Tools</dt><dd>{project.tools.join(", ")}</dd>
        </dl>
        <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold">
          View project details{" "}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </span>
      </Link>
    </article>
  );
}
