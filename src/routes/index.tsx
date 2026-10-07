import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowDown, ArrowRight, ArrowUpRight, Phone } from "lucide-react";
import { profile, projects } from "@/data/portfolio";
import { MotionText } from "@/components/MotionText";
import { ProjectCover } from "@/components/ProjectCard";
import { Portrait } from "@/components/Portrait";

const title = "Benjamin Ehirim | Designer & Creative Technologist";
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
            <span className="apple-pill" data-motion-meta>
              {profile.status}
            </span>
            <h1
              className="font-display hero-title mt-4 max-w-3xl text-5xl leading-[0.98] md:text-7xl lg:text-[5.5rem]"
              data-motion-title
              data-liquid
            >
              <MotionText split="characters">{profile.heroTitle}</MotionText>
            </h1>
            <p
              className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
              data-motion-meta
            >
              {profile.intro}
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3" data-motion-meta>
              <Link to="/work" data-magnetic className="btn btn-primary">
                Have a look at my work <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/about" data-magnetic className="btn btn-outline">
                About me
              </Link>
              <a
                href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
                data-magnetic
                className="btn btn-call"
              >
                <Phone size={16} aria-hidden="true" />
                Call me
              </a>
            </div>
            <a
              href="#selected-work"
              data-motion-meta
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

      <section id="selected-work" className="home-work-section scroll-mt-20">
        <div className="work-poster" data-motion-reveal>
          <span className="work-poster-orbit work-poster-orbit-one" data-parallax />
          <span className="work-poster-orbit work-poster-orbit-two" data-parallax />
          <p className="eyebrow work-poster-label">Selected work · 2024 — 2026</p>
          <h2
            className="font-display work-poster-title"
            data-motion-title
            data-parallax
            data-liquid
          >
            <MotionText>WORK</MotionText>
          </h2>
          <p className="work-poster-note">Ideas made real.</p>
        </div>
        <div className="container-x py-12 md:py-16">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-5 md:mb-10">
            <div>
              <p className="eyebrow">A few projects</p>
              <h2 className="font-display mt-3 text-3xl text-foreground md:text-4xl">
                Selected projects
              </h2>
            </div>
            <Link
              to="/work"
              data-magnetic
              className="inline-flex items-center gap-2 pb-1 text-sm font-medium text-accent hover:underline"
            >
              See all my work <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
          <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {featuredProjects.map((project) => (
              <Link
                key={project.slug}
                to="/work/$slug"
                params={{ slug: project.slug }}
                data-cursor="VIEW"
                data-motion-reveal
                className="home-project-card group"
              >
                <div className="project-media aspect-[4/3] overflow-hidden" data-image-reveal>
                  <ProjectCover project={project} />
                  <span className="project-view-cta" aria-hidden="true">
                    VIEW
                    <ArrowUpRight size={16} />
                  </span>
                </div>
                <div className="p-5">
                  <p className="eyebrow !text-accent">
                    {project.category}
                    {project.year && ` · ${project.year}`}
                  </p>
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
          <div className="flex w-full flex-col gap-3 md:w-auto md:flex-row">
            <a
              href={`tel:${profile.phone.replace(/[^\d+]/g, "")}`}
              data-magnetic
              className="btn btn-call shrink-0"
            >
              <Phone size={16} aria-hidden="true" />
              Call me
            </a>
            <Link to="/contact" data-magnetic className="btn btn-primary shrink-0">
              Send me a message <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
