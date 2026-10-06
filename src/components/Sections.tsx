import { education, experience, skills, tools, volunteering } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-3 text-4xl md:text-6xl">{title}</h2>
      {sub && <p className="mt-4 max-w-xl text-muted-foreground">{sub}</p>}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="container-x scroll-mt-20 py-20 md:py-28">
      <SectionHead eyebrow="Skills" title="What I bring" />
      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        {skills.map((g) => (
          <Reveal key={g.group}>
            <h3 className="border-t pt-4 text-sm font-semibold">{g.group}</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>
      <div className="mt-16">
        <p className="eyebrow">Tools I work with</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tools.map((t) => <li key={t} className="rounded-full border px-3.5 py-1.5 text-sm">{t}</li>)}
        </ul>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="container-x scroll-mt-20 py-20 md:py-28">
      <SectionHead eyebrow="Experience" title="Where I've worked" />
      <ol className="border-t">
        {experience.map((e, i) => (
          <Reveal as="li" key={i} className="grid gap-3 border-b py-8 md:grid-cols-[14rem_1fr] md:gap-10">
            <div className="text-sm text-muted-foreground">
              {e.start} — {e.end}
              <p className="mt-1 text-xs">{e.type}</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold">{e.position}</h3>
              <p className="text-muted-foreground">{e.organization}</p>
              <p className="mt-3 max-w-2xl leading-relaxed">{e.description}</p>
              {e.achievements.length > 0 && (
                <ul className="mt-3 list-disc space-y-1 pl-5 text-sm">{e.achievements.map((a) => <li key={a}>{a}</li>)}</ul>
              )}
              {e.tools.length > 0 && <p className="mt-3 text-xs text-muted-foreground">{e.tools.join(" · ")}</p>}
            </div>
          </Reveal>
        ))}
      </ol>
      <div className="mt-16">
        <p className="eyebrow">Education</p>
        {education.map((ed) => (
          <div key={ed.course} className="mt-4 grid gap-1 md:grid-cols-[14rem_1fr] md:gap-10">
            <p className="text-sm text-muted-foreground">{ed.dates}</p>
            <div>
              <h3 className="text-xl font-semibold">{ed.course}</h3>
              <p className="text-muted-foreground">{ed.school}</p>
              {ed.notes && <p className="mt-2 text-sm">{ed.notes}</p>}
            </div>
          </div>
        ))}
      </div>
      <div className="mt-16">
        <p className="eyebrow">Volunteering & Leadership</p>
        <div className="mt-4 grid gap-8 md:grid-cols-2">
          {volunteering.map((v) => (
            <div key={v.position} className="border-t pt-4">
              <h3 className="text-xl font-semibold">{v.position}</h3>
              <p className="text-muted-foreground">{v.organization} — {v.location}</p>
              <p className="mt-3 max-w-2xl leading-relaxed">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
