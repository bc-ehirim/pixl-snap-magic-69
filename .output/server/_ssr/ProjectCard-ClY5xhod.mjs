import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/ProjectCard-ClY5xhod.js
var import_jsx_runtime = require_jsx_runtime();
function ProjectCover({ project, className = "" }) {
	if (project.cover) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
		src: project.cover,
		alt: `${project.title} cover`,
		loading: "lazy",
		className: `h-full w-full ${project.coverFit === "contain" ? "object-contain bg-muted/30" : "object-cover"} ${className}`
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `placeholder-art flex h-full w-full items-center justify-center ${className}`,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl md:text-4xl",
				children: project.title
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow mt-3",
				children: "Project image to come"
			})]
		})
	});
}
function ProjectCard({ project }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("article", {
		className: "group",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
			to: "/work/$slug",
			params: { slug: project.slug },
			className: "block",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "aspect-[4/3] overflow-hidden rounded-xl",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCover, {
						project,
						className: "transition-transform duration-700 ease-out group-hover:scale-[1.03]"
					})
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-5 flex items-baseline justify-between gap-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "font-display text-2xl md:text-3xl",
						children: project.title
					}), project.year && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "shrink-0 text-xs text-muted-foreground",
						children: project.year
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow mt-1 !text-accent",
					children: project.category
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-3 max-w-prose text-sm leading-relaxed text-muted-foreground",
					children: project.summary
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
					className: "mt-4 grid grid-cols-[auto_1fr] gap-x-4 gap-y-1 text-xs",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Role"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: project.role }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
							className: "text-muted-foreground",
							children: "Tools"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", { children: project.tools.join(", ") })
					]
				})
			]
		})
	});
}
//#endregion
export { ProjectCover as n, ProjectCard as t };
