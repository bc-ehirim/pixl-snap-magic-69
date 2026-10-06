import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { projects } from "@/data/portfolio";
import { ProjectCover } from "@/components/ProjectCard";

export const Route = createFileRoute("/work/$slug")({
  loader: ({ params }) => {
    const i = projects.findIndex((p) => p.slug === params.slug);
    if (i < 0) throw notFound();
    return {
      project: projects[i]!,
      prev: projects[(i - 1 + projects.length) % projects.length]!,
      next: projects[(i + 1) % projects.length]!,
    };
  },
  head: ({ loaderData }) => {
    const t = loaderData ? `${loaderData.project.title} | Ehirim Benjamin` : "Project | Ehirim Benjamin";
    const d = loaderData?.project.summary ?? "Case study by Ehirim Benjamin.";
    return {
      meta: [
        { title: t },
        { name: "description", content: d },
        { property: "og:title", content: t },
        { property: "og:description", content: d },
        { property: "og:type", content: "article" },
        { name: "twitter:card", content: "summary_large_image" },
      ],
    };
  },
  component: CaseStudy,
});

function Block({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="grid gap-3 border-t py-8 md:grid-cols-[14rem_1fr] md:gap-10">
      <h2 className="eyebrow pt-1">{title}</h2>
      <div className="max-w-2xl text-lg leading-relaxed">{children}</div>
    </div>
  );
}

function CaseStudy() {
  const { project: p, prev, next } = Route.useLoaderData();
  return (
    <article>
      <header className="container-x pb-10 pt-10 md:pt-16">
        <Link to="/work" className="link-underline text-sm text-muted-foreground">← Back to all work</Link>
        <p className="eyebrow mt-8 !text-accent">{p.year ? `${p.category} · ${p.year}` : p.category}</p>
        <h1 className="font-display mt-3 text-5xl md:text-8xl">{p.title}</h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{p.summary}</p>
      </header>
      <div className="container-x">
        <div className="aspect-[16/9] overflow-hidden rounded-2xl"><ProjectCover project={p} /></div>
      </div>
      <div className="container-x py-12 md:py-20">
        <Block title="About this project">{p.overview}</Block>
        <Block title="The brief">{p.challenge}</Block>
        <Block title="My part">{p.role}</Block>
        <Block title="How I went about it">{p.approach}</Block>
        <Block title="Tools I used">{p.tools.join(", ")}</Block>
        <Block title="What I made">{p.solution}</Block>
        <Block title="Project images">
          {p.gallery.length ? (
            <div className="grid gap-4">{p.gallery.map((g) => <img key={g} src={g} alt={`${p.title} screenshot`} loading="lazy" className="rounded-xl" />)}</div>
          ) : (
            <span className="text-muted-foreground">The main project image is shown above.</span>
          )}
        </Block>
        <Block title="How it went">{p.outcome ?? <span className="text-muted-foreground">I haven’t added this part yet.</span>}</Block>
      </div>
      <nav aria-label="Project navigation" className="container-x grid grid-cols-2 gap-4 border-t py-10">
        <Link to="/work/$slug" params={{ slug: prev.slug }} className="group">
          <span className="eyebrow">← Previous</span>
          <p className="font-display mt-2 text-xl md:text-3xl">{prev.title}</p>
        </Link>
        <Link to="/work/$slug" params={{ slug: next.slug }} className="group text-right">
          <span className="eyebrow">Next →</span>
          <p className="font-display mt-2 text-xl md:text-3xl">{next.title}</p>
        </Link>
      </nav>
    </article>
  );
}
