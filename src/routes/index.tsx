import { createFileRoute } from "@tanstack/react-router";

const title = "Benjamin Ehirim — Designer & Creative Technologist";
const description =
  "Portfolio of Benjamin Ehirim, a multidisciplinary creative professional working across graphic design, branding, digital experiences and AI-assisted development.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});
