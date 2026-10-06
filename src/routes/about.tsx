import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { Portrait } from "@/components/Portrait";
import { ExperienceSection, SkillsSection } from "@/components/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Benjamin Ehirim" },
      { name: "description", content: "A little about Benjamin Ehirim, a graphic designer and website builder based in Lagos." },
      { property: "og:title", content: "About | Benjamin Ehirim" },
      { property: "og:description", content: "A little about Benjamin Ehirim, a graphic designer and website builder based in Lagos." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <section className="container-x grid gap-10 py-16 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-24">
        <Portrait className="aspect-[4/5] w-full max-w-sm" />
        <div>
          <p className="eyebrow">About</p>
          <h1 className="font-display mt-3 text-5xl md:text-7xl">A bit about me.</h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed">
            {profile.about.map((paragraph, index) => (
              <p key={paragraph} className={index > 0 ? "text-muted-foreground" : undefined}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>
      <ExperienceSection />
      <SkillsSection />
    </>
  ),
});
