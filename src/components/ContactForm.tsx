import { useState, type FormEvent } from "react";
import { socials } from "@/data/portfolio";

type Errors = Partial<Record<"name" | "email" | "message", string>>;

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errors, setErrors] = useState<Errors>({});

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const name = String(fd.get("name") || "").trim();
    const email = String(fd.get("email") || "").trim();
    const company = String(fd.get("company") || "").trim();
    const message = String(fd.get("message") || "").trim();
    const errs: Errors = {};
    if (name.length < 2) errs.name = "Please add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      errs.email = "That email address doesn’t look right.";
    }
    if (message.length < 10) errs.message = "Please add a bit more to your message.";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("loading");
    try {
      // Opens the visitor's email app with the message pre-filled.
      const body = `${message}\n\nFrom: ${name}${company ? `, ${company}` : ""}\n${email}`;
      window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
      setTimeout(() => setStatus("success"), 600);
    } catch {
      setStatus("error");
    }
  }

  if (status === "success")
    return (
      <div role="status" className="rounded-xl border p-8">
        <p className="font-display text-3xl">Thanks for reaching out.</p>
        <p className="mt-2 text-muted-foreground">
          Your email app should open with the message ready. Just send it from there, and I’ll get
          back to you.
        </p>
        <button className="btn btn-outline mt-6" onClick={() => setStatus("idle")}>
          Send another message
        </button>
      </div>
    );

  const field =
    "mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 outline-none transition-colors focus:border-foreground";
  return (
    <form noValidate onSubmit={onSubmit} className="contact-form grid gap-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <label className="text-sm font-medium">
          Name
          <input name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} />
          {errors.name && (
            <span className="mt-1 block text-xs text-destructive">{errors.name}</span>
          )}
        </label>
        <label className="text-sm font-medium">
          Email
          <input
            name="email"
            type="email"
            autoComplete="email"
            className={field}
            aria-invalid={!!errors.email}
          />
          {errors.email && (
            <span className="mt-1 block text-xs text-destructive">{errors.email}</span>
          )}
        </label>
      </div>
      <label className="text-sm font-medium">
        Company or organisation <span className="text-muted-foreground">(optional)</span>
        <input name="company" autoComplete="organization" className={field} />
      </label>
      <label className="text-sm font-medium">
        Message
        <textarea name="message" rows={5} className={field} aria-invalid={!!errors.message} />
        {errors.message && (
          <span className="mt-1 block text-xs text-destructive">{errors.message}</span>
        )}
      </label>
      {status === "error" && (
        <p role="alert" className="text-sm text-destructive">
          That didn’t work. You can email me directly at {socials.email}.
        </p>
      )}
      <button
        type="submit"
        disabled={status === "loading"}
        className="btn btn-primary justify-self-start disabled:opacity-60"
      >
        {status === "loading" ? "Opening your email…" : "Send me a message"}
      </button>
    </form>
  );
}

export function ContactLinks() {
  const links = [
    { label: "Email", href: `mailto:${socials.email}`, value: socials.email },
    { label: "LinkedIn", href: socials.linkedin, value: "Find me on LinkedIn" },
    { label: "X", href: socials.x, value: "@DecencyBenjamin" },
    { label: "Website", href: socials.website, value: "Visit my website" },
    ...(socials.whatsapp
      ? [{ label: "WhatsApp", href: socials.whatsapp, value: "Chat with me on WhatsApp" }]
      : []),
  ];
  return (
    <ul className="border-t">
      {links.map((l) => (
        <li key={l.label} className="border-b">
          <a
            href={l.href}
            target={l.href.startsWith("http") ? "_blank" : undefined}
            rel="noreferrer"
            className="group flex items-center justify-between py-4"
          >
            <span className="text-sm text-muted-foreground">{l.label}</span>
            <span className="flex items-center gap-2">
              {l.value}
              <span className="transition-transform group-hover:translate-x-1">↗</span>
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}
