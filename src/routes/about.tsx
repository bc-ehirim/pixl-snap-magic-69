import { createFileRoute } from "@tanstack/react-router";
import { Portrait } from "@/components/Portrait";
import { ExperienceSection, SkillsSection } from "@/components/Sections";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Benjamin Ehirim" },
      { name: "description", content: "About Benjamin Ehirim: graphic design, branding, print, digital experiences and AI-assisted web development." },
      { property: "og:title", content: "About — Benjamin Ehirim" },
      { property: "og:description", content: "About Benjamin Ehirim: graphic design, branding, print, digital experiences and AI-assisted web development." },
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
          <h1 className="font-display mt-3 text-5xl md:text-7xl">Where creativity meets technology.</h1>
          <div className="mt-8 space-y-5 text-lg leading-relaxed">
            <p>I'm Benjamin Ehirim, a multidisciplinary creative professional working across graphic design, branding, print, digital experiences, and AI-assisted web development.</p>
            <p className="text-muted-foreground">My work sits at the intersection of creativity and technology. I enjoy taking an idea from concept to a polished visual or functional digital product, using both traditional creative tools and modern AI-assisted solutions.</p>
            <p className="text-muted-foreground">I focus on practical solutions, thoughtful visual communication and continuous learning as technology changes how creative work is produced.</p>
          </div>
        </div>
      </section>
      <ExperienceSection />
      <SkillsSection />
    </>
  ),
});
