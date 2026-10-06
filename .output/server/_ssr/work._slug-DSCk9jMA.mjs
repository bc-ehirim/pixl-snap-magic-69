import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./work._slug-BMiVk2lA.mjs";
import { n as ProjectCover } from "./ProjectCard-ClY5xhod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-DSCk9jMA.js
var import_jsx_runtime = require_jsx_runtime();
function Block({ title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "grid gap-3 border-t py-8 md:grid-cols-[14rem_1fr] md:gap-10",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "eyebrow pt-1",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "max-w-2xl text-lg leading-relaxed",
			children
		})]
	});
}
function CaseStudy() {
	const { project: p, prev, next } = Route.useLoaderData();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
			className: "container-x pb-10 pt-10 md:pt-16",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/work",
					className: "link-underline text-sm text-muted-foreground",
					children: "← Back to all work"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mt-8 !text-accent",
					children: p.year ? `${p.category} · ${p.year}` : p.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display mt-3 text-5xl md:text-8xl",
					children: p.title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-5 max-w-2xl text-lg text-muted-foreground",
					children: p.summary
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "container-x",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-[16/9] overflow-hidden rounded-2xl",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCover, { project: p })
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x py-12 md:py-20",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					title: "About this project",
					children: p.overview
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					title: "The brief",
					children: p.challenge
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					title: "My part",
					children: p.role
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					title: "How I went about it",
					children: p.approach
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					title: "Tools I used",
					children: p.tools.join(", ")
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					title: "What I made",
					children: p.solution
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					title: "Project images",
					children: p.gallery.length ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-4",
						children: p.gallery.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
							src: g,
							alt: `${p.title} screenshot`,
							loading: "lazy",
							className: "rounded-xl"
						}, g))
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "The main project image is shown above."
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Block, {
					title: "How it went",
					children: p.outcome ?? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "I haven’t added this part yet."
					})
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
			"aria-label": "Project navigation",
			className: "container-x grid grid-cols-2 gap-4 border-t py-10",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/work/$slug",
				params: { slug: prev.slug },
				className: "group",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "← Previous"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display mt-2 text-xl md:text-3xl",
					children: prev.title
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/work/$slug",
				params: { slug: next.slug },
				className: "group text-right",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "eyebrow",
					children: "Next →"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display mt-2 text-xl md:text-3xl",
					children: next.title
				})]
			})]
		})
	] });
}
//#endregion
export { CaseStudy as component };
