import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Benjamin Ehirim" },
      { name: "description", content: "Curriculum vitae of Benjamin Ehirim, designer and creative technologist." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "CV — Benjamin Ehirim" },
      { property: "og:description", content: "Curriculum vitae of Benjamin Ehirim, designer and creative technologist." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <section className="container-x py-16 md:py-24">
      <p className="eyebrow">Curriculum Vitae</p>
      <h1 className="font-display mt-3 text-5xl md:text-7xl">{profile.name}</h1>
      <p className="mt-3 text-muted-foreground">{profile.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="btn btn-primary">View CV</a>
        <a href={profile.cvUrl} download className="btn btn-outline">Download CV</a>
      </div>
      <div className="mt-10 overflow-hidden rounded-xl border">
        <iframe src={profile.cvUrl} title="CV preview" className="h-[75vh] w-full bg-card" loading="lazy" />
      </div>
    </section>
  ),
});
