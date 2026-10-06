import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { profile } from "@/data/portfolio";

const nav = [
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Experience", to: "/about", hash: "experience" },
  { label: "Skills", to: "/about", hash: "skills" },
  { label: "Contact", to: "/contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const on = () => setScrolled(window.scrollY > 8);
    on();
    window.addEventListener("scroll", on, { passive: true });
    return () => window.removeEventListener("scroll", on);
  }, []);
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  return (
    <header className={`sticky top-0 z-50 transition-colors duration-300 ${scrolled || open ? "border-b bg-background/90 backdrop-blur" : "border-b border-transparent bg-background"}`}>
      <div className="container-x flex h-16 items-center justify-between">
        <Link to="/" className="font-display text-xl" onClick={() => setOpen(false)}>
          {profile.name}
        </Link>
        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link key={n.label} to={n.to} {...("hash" in n ? { hash: n.hash } : {})} className="link-underline text-sm text-muted-foreground hover:text-foreground" activeProps={{ className: "text-foreground" }} activeOptions={{ includeHash: true }}>
              {n.label}
            </Link>
          ))}
          <Link to="/cv" className="btn btn-primary !py-2 !px-4">View CV</Link>
        </nav>
        <div className="flex items-center gap-2 md:hidden">
          <Link to="/cv" className="btn btn-primary !py-1.5 !px-3.5 text-xs" onClick={() => setOpen(false)}>CV</Link>
          <button aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)} className="relative h-10 w-10 rounded-full">
            <span className={`absolute left-3 right-3 h-px bg-foreground transition-transform ${open ? "top-1/2 rotate-45" : "top-[16px]"}`} />
            <span className={`absolute left-3 right-3 h-px bg-foreground transition-transform ${open ? "top-1/2 -rotate-45" : "top-[24px]"}`} />
          </button>
        </div>
      </div>
      {open && (
        <nav aria-label="Mobile" className="fixed inset-x-0 top-16 bottom-0 bg-background animate-in fade-in slide-in-from-top-2 md:hidden">
          <ul className="container-x flex flex-col pt-6">
            {nav.map((n) => (
              <li key={n.label} className="border-b">
                <Link to={n.to} {...("hash" in n ? { hash: n.hash } : {})} onClick={() => setOpen(false)} className="font-display block py-4 text-4xl">
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
