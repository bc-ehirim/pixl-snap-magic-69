import { useState } from "react";
import { categories, projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function WorkGrid() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);

  return (
    <div>
      <div role="tablist" aria-label="Filter projects" className="work-filter">
        {categories.map((c) => (
          <button
            key={c}
            role="tab"
            aria-selected={cat === c}
            data-magnetic
            onClick={() => setCat(c)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
              cat === c
                ? "border-foreground bg-foreground text-background"
                : "border-black/5 bg-white/40 text-muted-foreground hover:border-black/10 hover:text-foreground"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="mt-8 grid gap-x-6 gap-y-12 md:grid-cols-2">
        {list.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
        {list.length === 0 && (
          <p className="text-muted-foreground">Nothing here just yet. Try another category.</p>
        )}
      </div>
    </div>
  );
}
