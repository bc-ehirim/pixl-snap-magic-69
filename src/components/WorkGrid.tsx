import { useState } from "react";
import { categories, projects } from "@/data/portfolio";
import { ProjectCard } from "./ProjectCard";

export function WorkGrid() {
  const [cat, setCat] = useState<(typeof categories)[number]>("All");
  const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);
  return (
    <div>
      <div role="tablist" aria-label="Filter projects" className="-mx-5 flex gap-2 overflow-x-auto px-5 pb-2 md:mx-0 md:flex-wrap md:px-0">
        {categories.map((c) => (
          <button key={c} role="tab" aria-selected={cat === c} onClick={() => setCat(c)}
            className={`shrink-0 rounded-full border px-4 py-2 text-sm transition-colors ${cat === c ? "border-foreground bg-foreground text-background" : "text-muted-foreground hover:border-foreground hover:text-foreground"}`}>
            {c}
          </button>
        ))}
      </div>
      <div className="mt-10 grid gap-x-10 gap-y-16 md:grid-cols-2">
        {list.map((p) => <ProjectCard key={p.slug} project={p} />)}
        {list.length === 0 && <p className="text-muted-foreground">No projects in this category yet.</p>}
      </div>
    </div>
  );
}
