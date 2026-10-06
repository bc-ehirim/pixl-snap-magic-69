import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
import { Portrait } from "@/components/Portrait";
import { ProjectCover } from "@/components/ProjectCard";

const title = "Benjamin Ehirim — Designer & Creative Technologist";
const description =
  "I’m Benjamin, a graphic designer and web creator in Lagos. Have a look at my design, print and web projects.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <>
      <section className="container-x py-8 md:py-14">
        <div className="hero-shell">
          <div className="relative z-10 py-3 md:py-6">
            <span className="apple-pill">{profile.status}</span>
            <p className="eyebrow mt-8">{profile.location}</p>
            <h1 className="font-display mt-4 max-w-3xl text-5xl leading-[0.98] md:text-7xl lg:text-[5.5rem]">
              {profile.heroTitle}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link to="/work" className="btn btn-primary">
                Have a look at my work <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/about" className="btn btn-outline">
                About me
              </Link>
            </div>
            <a
              href="#selected-work"
              className="mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              See what I’ve been working on <ArrowDown size={15} aria-hidden="true" />
            </a>
          </div>

          <div className="hero-panel">
            <div className="hero-card aspect-[4/5]">
              <Portrait className="h-full w-full rounded-none" />
            </div>
            <div className="metric-card">
              <strong>{profile.initials}</strong>
              <span>{profile.headline}</span>
            </div>
          </div>
        </div>
      </section>

      <section id="selected-work" className="container-x scroll-mt-20 py-14 md:py-20">
        <div className="mb-8 flex flex-wrap items-end justify-between gap-5 md:mb-10">
          <div>
            <p className="eyebrow">A few projects</p>
            <h2 className="font-display mt-3 text-4xl text-foreground md:text-5xl">
              Some of the work I’ve done
            </h2>
          </div>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 pb-1 text-sm font-medium text-accent hover:underline"
          >
            See all my work <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div className="grid gap-5 md:grid-cols-3">
          {featuredProjects.map((project) => (
            <Link
              key={project.slug}
              to="/work/$slug"
              params={{ slug: project.slug }}
              className="home-project-card group"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <ProjectCover
                  project={project}
                  className="transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
              </div>
              <div className="p-5">
                <p className="eyebrow !text-accent">{project.category}</p>
                <h3 className="font-display mt-2 text-xl leading-snug md:text-2xl">
                  {project.title}
                </h3>
                <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
                  {project.summary}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="container-x pb-16 md:pb-24">
        <div className="surface-panel flex flex-col gap-6 rounded-2xl p-6 md:flex-row md:items-center md:justify-between md:p-10">
          <div>
            <p className="eyebrow">Got something in mind?</p>
            <h2 className="font-display mt-2 text-3xl md:text-4xl">Let’s talk about it.</h2>
            <p className="mt-2 text-muted-foreground">
              Tell me what you need, and I’ll see how I can help.
            </p>
          </div>
          <Link to="/contact" className="btn btn-primary shrink-0">
            Send me a message <ArrowRight size={16} aria-hidden="true" />
          </Link>
        </div>
      </section>
    </>
  );
}
