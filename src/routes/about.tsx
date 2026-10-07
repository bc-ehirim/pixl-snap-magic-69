import { createFileRoute } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { Portrait } from "@/components/Portrait";
import { ExperienceSection, SkillsSection } from "@/components/Sections";
import { MotionText } from "@/components/MotionText";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About | Benjamin Ehirim" },
      {
        name: "description",
        content:
          "A little about Benjamin Ehirim, a graphic designer and website builder based in Lagos.",
      },
      { property: "og:title", content: "About | Benjamin Ehirim" },
      {
        property: "og:description",
        content:
          "A little about Benjamin Ehirim, a graphic designer and website builder based in Lagos.",
      },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <>
      <section className="about-hero">
        <div className="container-x grid items-center gap-10 py-16 md:grid-cols-[0.8fr_1.2fr] md:gap-20 md:py-24">
          <div className="about-portrait" data-image-reveal>
            <Portrait className="aspect-[4/5] w-full max-w-sm" />
          </div>
          <div className="about-copy">
            <p className="eyebrow" data-motion-reveal>
              About · Lagos, Nigeria
            </p>
            <h1
              className="font-display about-title mt-4 text-5xl md:text-7xl"
              data-motion-title
              data-liquid
            >
              <MotionText>A bit about me.</MotionText>
            </h1>
            <div className="mt-8 space-y-5 text-lg leading-relaxed">
              {profile.about.map((paragraph, index) => (
                <p
                  key={paragraph}
                  data-motion-reveal
                  className={index > 0 ? "about-secondary-copy" : "about-primary-copy"}
                >
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <ExperienceSection />
      <SkillsSection />
    </>
  ),
});
