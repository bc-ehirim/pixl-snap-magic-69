import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
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

  return (
    <header
      className={`site-header sticky top-0 z-50 transition-all duration-300 ${
        scrolled || open ? "is-scrolled" : ""
      }`}
    >
      <div className="container-x relative flex h-16 items-center justify-between gap-3">
        <Link
          to="/"
          className="font-display text-lg text-foreground sm:text-xl"
          onClick={() => setOpen(false)}
        >
          {profile.name}
        </Link>

        <nav aria-label="Main" className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <Link
              key={n.label}
              to={n.to}
              {...("hash" in n ? { hash: n.hash } : {})}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
            >
              {n.label}
            </Link>
          ))}
          <Link to="/cv" className="btn btn-primary !px-4 !py-2.5 !text-xs">
            My CV
          </Link>
        </nav>

        <div className="ml-auto flex items-center gap-2 md:hidden">
          <Link
            to="/cv"
            className="btn btn-primary !px-3 !py-1.5 !text-[10px]"
            onClick={() => setOpen(false)}
          >
            My CV
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="inline-flex h-10 items-center gap-2 rounded-full bg-foreground px-3 text-xs font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg focus-visible:outline-white"
          >
            {open ? (
              <X size={17} strokeWidth={2.5} aria-hidden="true" />
            ) : (
              <Menu size={17} strokeWidth={2.5} aria-hidden="true" />
            )}
            <span>{open ? "Close" : "Menu"}</span>
          </button>
        </div>
      </div>

      <div
        className={`md:hidden ${
          open ? "pointer-events-auto opacity-100 translate-y-0" : "pointer-events-none opacity-0 -translate-y-2"
        } absolute inset-x-0 top-full z-40 px-3 pb-3 pt-2 transition-all duration-200`}
        aria-hidden={!open}
      >
        <nav
          aria-label="Mobile"
          className="overflow-hidden rounded-2xl border border-black/5 bg-background/95 shadow-[0_15px_38px_rgba(17,17,17,0.08)] backdrop-blur-xl"
        >
          <div className="flex items-center justify-between border-b border-black/5 px-4 py-3">
            <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">
              Menu
            </span>
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              Close
            </button>
          </div>

          <ul className="divide-y divide-black/5">
            {nav.map((n) => (
              <li key={n.label}>
                <Link
                  to={n.to}
                  {...("hash" in n ? { hash: n.hash } : {})}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between px-4 py-3.5 text-base font-medium text-foreground transition-colors hover:bg-black/[0.02]"
                >
                  <span>{n.label}</span>
                  <span aria-hidden="true" className="text-lg text-muted-foreground">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
