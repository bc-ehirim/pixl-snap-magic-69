import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";

export const Route = createFileRoute("/cv")({
  head: () => ({
    meta: [
      { title: "CV — Benjamin Ehirim" },
      { name: "description", content: "View or download Benjamin Ehirim’s CV." },
      { name: "robots", content: "noindex" },
      { property: "og:title", content: "CV — Benjamin Ehirim" },
      { property: "og:description", content: "View or download Benjamin Ehirim’s CV." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => (
    <section className="container-x py-16 md:py-24">
      <p className="eyebrow">My CV</p>
      <h1 className="font-display mt-3 text-5xl md:text-7xl">{profile.name}</h1>
      <p className="mt-3 text-muted-foreground">{profile.tagline}</p>
      <div className="mt-8 flex flex-wrap gap-3">
        <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="btn btn-primary">Open my CV</a>
        <a href={profile.cvUrl} download className="btn btn-outline">Download a copy</a>
      </div>
      <div className="mt-10 overflow-hidden rounded-xl border">
        <iframe
          src={profile.cvUrl}
          title={`${profile.name} CV`}
          className="h-[75vh] w-full bg-card"
          loading="lazy"
        />
      </div>
    </section>
  ),
});
