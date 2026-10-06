import { education, experience, skills, tools, volunteering } from "@/data/portfolio";
import { Reveal } from "./Reveal";

export function SectionHead({ eyebrow, title, sub }: { eyebrow: string; title: string; sub?: string }) {
  return (
    <div className="mb-10 md:mb-14">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="font-display mt-3 text-4xl leading-none text-foreground md:text-6xl">{title}</h2>
      {sub && <p className="mt-4 max-w-2xl text-base text-muted-foreground md:text-lg">{sub}</p>}
    </div>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="container-x scroll-mt-20 py-16 md:py-20">
      <SectionHead eyebrow="Skills" title="The things I can help with" />
      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
        {skills.map((g) => (
          <Reveal key={g.group} className="skill-card rounded-[1.6rem] p-5 md:p-6">
            <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-foreground">{g.group}</h3>
            <ul className="mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
              {g.items.map((i) => <li key={i}>{i}</li>)}
            </ul>
          </Reveal>
        ))}
      </div>

      <div className="mt-16">
        <p className="eyebrow">Tools I use</p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {tools.map((t) => (
            <li key={t} className="rounded-full border border-black/5 bg-white/50 px-3.5 py-1.5 text-sm text-muted-foreground">
              {t}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experience" className="container-x scroll-mt-20 py-16 md:py-20">
      <SectionHead eyebrow="Experience" title="My work experience" />

      <ol className="space-y-5">
        {experience.map((e, i) => {
          const start = e.start.trim();
          const end = e.end.trim();
          const dateLabel = start && end ? `${start} to ${end}` : start || end;

          return (
            <Reveal as="li" key={i} className="experience-card rounded-[1.8rem] p-5 md:p-7">
              <div className="grid gap-5 md:grid-cols-[14rem_1fr]">
                <div className="text-sm leading-relaxed text-muted-foreground">
                  {dateLabel && <p>{dateLabel}</p>}
                  {e.type && <p className={dateLabel ? "mt-2 text-xs uppercase tracking-[0.12em]" : "text-xs uppercase tracking-[0.12em]"}>{e.type}</p>}
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-foreground">{e.position}</h3>
                  <p className="mt-1 text-muted-foreground">{e.organization}</p>
                  <p className="mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground">{e.description}</p>

                  {e.achievements.length > 0 && (
                    <ul className="mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground">
                      {e.achievements.map((a) => <li key={a}>{a}</li>)}
                    </ul>
                  )}

                  {e.tools.length > 0 && (
                    <p className="mt-4 text-xs uppercase tracking-[0.12em] text-muted-foreground">
                      {e.tools.join(" · ")}
                    </p>
                  )}
                </div>
              </div>
            </Reveal>
          );
        })}
      </ol>

      <div className="mt-16">
        <p className="eyebrow">Education</p>
        {education.map((ed) => (
          <div key={ed.course} className={`mt-5 grid gap-3 rounded-[1.6rem] border border-black/5 bg-white/40 p-5 ${ed.dates ? "md:grid-cols-[14rem_1fr]" : ""}`}>
            {ed.dates && <p className="text-sm text-muted-foreground">{ed.dates}</p>}
            <div>
              <h3 className="text-xl font-semibold text-foreground">{ed.course}</h3>
              <p className="mt-1 text-muted-foreground">{ed.school}</p>
              {ed.notes && <p className="mt-2 text-sm text-muted-foreground">{ed.notes}</p>}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-16">
        <p className="eyebrow">Volunteering & Leadership</p>
        <div className="mt-5 grid gap-5 md:grid-cols-2">
          {volunteering.map((v) => (
            <div key={v.position} className="rounded-[1.6rem] border border-black/5 bg-white/40 p-5">
              <h3 className="text-xl font-semibold text-foreground">{v.position}</h3>
              <p className="mt-1 text-muted-foreground">{v.organization}, {v.location}</p>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{v.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
