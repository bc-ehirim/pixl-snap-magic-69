import { a as projects, i as profile } from "./portfolio-BaaYmnm0.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Portrait } from "./Portrait-DfQ-KoO6.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { n as ProjectCover } from "./ProjectCard-ClY5xhod.mjs";
import { n as ArrowRight, r as ArrowDown, t as ArrowUpRight } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-B70m1S7T.js
var import_jsx_runtime = require_jsx_runtime();
function HomePage() {
	const featuredProjects = projects.slice(0, 3);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x py-8 md:py-14",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "hero-shell",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative z-10 py-3 md:py-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "apple-pill",
							children: profile.status
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "eyebrow mt-8",
							children: profile.location
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "font-display mt-4 max-w-3xl text-5xl leading-[0.98] md:text-7xl lg:text-[5.5rem]",
							children: profile.heroTitle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg",
							children: profile.intro
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-8 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
								to: "/work",
								className: "btn btn-primary",
								children: ["Have a look at my work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
									size: 16,
									"aria-hidden": "true"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
								to: "/about",
								className: "btn btn-outline",
								children: "About me"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
							href: "#selected-work",
							className: "mt-10 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground",
							children: ["See what I’ve been working on ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, {
								size: 15,
								"aria-hidden": "true"
							})]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "hero-panel",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "hero-card aspect-[4/5]",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, { className: "h-full w-full rounded-none" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "metric-card",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: profile.initials }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: profile.headline })]
					})]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
			id: "selected-work",
			className: "container-x scroll-mt-20 py-14 md:py-20",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 flex flex-wrap items-end justify-between gap-5 md:mb-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "A few projects"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "font-display mt-3 text-4xl text-foreground md:text-5xl",
					children: "Some of the work I’ve done"
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work",
					className: "inline-flex items-center gap-2 pb-1 text-sm font-medium text-accent hover:underline",
					children: ["See all my work ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
						size: 16,
						"aria-hidden": "true"
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 md:grid-cols-3",
				children: featuredProjects.map((project) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/work/$slug",
					params: { slug: project.slug },
					className: "home-project-card group",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "aspect-[4/3] overflow-hidden",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCover, {
							project,
							className: "transition-transform duration-500 ease-out group-hover:scale-[1.03]"
						})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "eyebrow !text-accent",
								children: project.category
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "font-display mt-2 text-xl leading-snug md:text-2xl",
								children: project.title
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground",
								children: project.summary
							})
						]
					})]
				}, project.slug))
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
			className: "container-x pb-16 md:pb-24",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "surface-panel flex flex-col gap-6 rounded-2xl p-6 md:flex-row md:items-center md:justify-between md:p-10",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "eyebrow",
						children: "Got something in mind?"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display mt-2 text-3xl md:text-4xl",
						children: "Let’s talk about it."
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-muted-foreground",
						children: "Tell me what you need, and I’ll see how I can help."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/contact",
					className: "btn btn-primary shrink-0",
					children: ["Send me a message ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, {
						size: 16,
						"aria-hidden": "true"
					})]
				})]
			})
		})
	] });
}
//#endregion
export { HomePage as component };
