import { profile, socials } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="container-x flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-2xl">{profile.name}</p>
          <p className="mt-1 text-sm text-muted-foreground">{profile.tagline}</p>
        </div>
        <div className="flex flex-col gap-3 md:items-end">
          <div className="flex gap-6 text-sm">
            <a className="link-underline" href={socials.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a className="link-underline" href={socials.x} target="_blank" rel="noreferrer">X</a>
            <a className="link-underline" href={socials.website} target="_blank" rel="noreferrer">Website</a>
            <a className="link-underline" href={`mailto:${socials.email}`}>Email</a>
          </div>
          <p className="text-xs text-muted-foreground">© 2026 {profile.name}. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
