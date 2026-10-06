import { createFileRoute } from "@tanstack/react-router";
import { ContactForm, ContactLinks } from "@/components/ContactForm";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Benjamin Ehirim" },
      { name: "description", content: "Get in touch with Benjamin Ehirim about job opportunities, freelance projects or collaborations." },
      { property: "og:title", content: "Contact — Benjamin Ehirim" },
      { property: "og:description", content: "Get in touch with Benjamin Ehirim about job opportunities, freelance projects or collaborations." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: () => (
    <section className="container-x grid gap-12 py-16 md:grid-cols-[1fr_1.3fr] md:gap-20 md:py-24">
      <div>
        <p className="eyebrow">Contact</p>
        <h1 className="font-display mt-3 text-5xl md:text-6xl">Have an opportunity or project in mind? <span className="italic">Let's talk.</span></h1>
        <div className="mt-10"><ContactLinks /></div>
      </div>
      <ContactForm />
    </section>
  ),
});
