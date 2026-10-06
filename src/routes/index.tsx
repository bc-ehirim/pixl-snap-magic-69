import { createFileRoute, Link } from "@tanstack/react-router";
import { profile } from "@/data/portfolio";
import { Portrait } from "@/components/Portrait";
import { WorkGrid } from "@/components/WorkGrid";
import { Reveal } from "@/components/Reveal";
import { SectionHead, SkillsSection, ExperienceSection } from "@/components/Sections";
import { ContactForm, ContactLinks } from "@/components/ContactForm";

const title = "Ehirim Benjamin — Designer & Creative Technologist";
const description =
  "Portfolio of Ehirim Benjamin, a multidisciplinary creative professional working across graphic design, branding, digital experiences and AI-assisted development.";

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
  component: Home,
});

function Home() {
  return (
    <>
      <section className="container-x grid items-center gap-10 pb-16 pt-10 md:grid-cols-[1.4fr_1fr] md:gap-16 md:pb-28 md:pt-20">
        <div className="animate-in fade-in slide-in-from-bottom-3 duration-700">
          <p className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs">
            <span className="relative flex h-2 w-2"><span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-60" /><span className="relative h-2 w-2 rounded-full bg-success" /></span>
            {profile.status}
          </p>
          <p className="mt-8 text-lg font-semibold">{profile.name}</p>
          <h1 className="font-display mt-2 text-5xl leading-[1.02] sm:text-6xl lg:text-8xl">
            Designer. <span className="italic text-muted-foreground">Creative Technologist.</span> AI-Assisted Builder.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">{profile.intro}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link to="/work" className="btn btn-primary">View My Work</Link>
            <Link to="/cv" className="btn btn-outline">View CV</Link>
            <Link to="/contact" className="link-underline ml-2 text-sm font-semibold">Let's Work Together →</Link>
          </div>
        </div>
        <Portrait className="aspect-[4/5] w-full max-w-sm justify-self-center md:max-w-none" />
      </section>

      <section id="work" className="container-x scroll-mt-20 py-20 md:py-28">
        <SectionHead eyebrow="Work" title="Selected Work" sub="A selection of design, digital and technology projects I've worked on." />
        <WorkGrid />
      </section>

      <section className="bg-surface">
        <div className="container-x grid gap-10 py-20 md:grid-cols-[1fr_1.5fr] md:py-28">
          <div>
            <p className="eyebrow">About</p>
            <h2 className="font-display mt-3 text-4xl md:text-6xl">Where creativity meets technology.</h2>
          </div>
          <Reveal className="space-y-5 text-lg leading-relaxed">
            <p>I'm Ehirim Benjamin, a multidisciplinary creative professional working across graphic design, branding, print, digital experiences and AI-assisted web development.</p>
            <p className="text-muted-foreground">I enjoy taking an idea from concept to a polished visual or functional digital product, using both traditional creative tools and modern AI-assisted workflows.</p>
            <Link to="/about" className="link-underline inline-block text-base font-semibold">More about me →</Link>
          </Reveal>
        </div>
      </section>

      <ExperienceSection />
      <div className="container-x"><hr /></div>
      <SkillsSection />

      <section id="contact" className="bg-primary text-primary-foreground">
        <div className="container-x py-20 md:py-28">
          <h2 className="font-display max-w-4xl text-4xl md:text-7xl">Have an opportunity or project in mind? <span className="italic">Let's talk.</span></h2>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link to="/contact" className="btn bg-background text-foreground">Get in touch</Link>
            <Link to="/cv" className="btn border border-primary-foreground/30">View CV</Link>
          </div>
        </div>
      </section>
    </>
  );
}

// Re-exported for the contact page
export { ContactForm, ContactLinks };
