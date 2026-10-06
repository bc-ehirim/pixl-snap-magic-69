import { n as __toESM } from "../_runtime.mjs";
import { a as projects, t as categories } from "./portfolio-BaaYmnm0.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { n as SectionHead } from "./Sections-ZYN-bZsy.mjs";
import { t as ProjectCard } from "./ProjectCard-ClY5xhod.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work.index-CxUpK0Da.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function WorkGrid() {
	const [cat, setCat] = (0, import_react.useState)("All");
	const list = cat === "All" ? projects : projects.filter((p) => p.category === cat);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		role: "tablist",
		"aria-label": "Filter projects",
		className: "work-filter",
		children: categories.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			role: "tab",
			"aria-selected": cat === c,
			onClick: () => setCat(c),
			className: `shrink-0 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${cat === c ? "border-foreground bg-foreground text-background" : "border-black/5 bg-white/40 text-muted-foreground hover:border-black/10 hover:text-foreground"}`,
			children: c
		}, c))
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-8 grid gap-x-6 gap-y-8 md:grid-cols-2",
		children: [list.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ProjectCard, { project: p }, p.slug)), list.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-muted-foreground",
			children: "Nothing here just yet. Try another category."
		})]
	})] });
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
	className: "container-x py-16 md:py-24",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
		eyebrow: "Work",
		title: "My work",
		sub: "Here are some design, print and web projects I’ve worked on."
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WorkGrid, {})]
});
//#endregion
export { SplitComponent as component };
