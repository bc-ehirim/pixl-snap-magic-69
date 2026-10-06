import { createFileRoute } from "@tanstack/react-router";
import { WorkGrid } from "@/components/WorkGrid";
import { SectionHead } from "@/components/Sections";

export const Route = createFileRoute("/work/")({
  head: () => ({
    meta: [
      { title: "Work — Ehirim Benjamin" },
      { name: "description", content: "Have a look at the design, branding, print and web projects I’ve worked on." },
      { property: "og:title", content: "Work — Ehirim Benjamin" },
      { property: "og:description", content: "Have a look at the design, branding, print and web projects I’ve worked on." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <section className="container-x py-16 md:py-24">
      <SectionHead eyebrow="Work" title="My work" sub="Here are some design, print and web projects I’ve worked on." />
      <WorkGrid />
    </section>
  ),
});
