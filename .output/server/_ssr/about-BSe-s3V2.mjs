import { i as profile } from "./portfolio-BaaYmnm0.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { t as Portrait } from "./Portrait-DfQ-KoO6.mjs";
import { r as SkillsSection, t as ExperienceSection } from "./Sections-ZYN-bZsy.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/about-BSe-s3V2.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
	/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "container-x grid gap-10 py-16 md:grid-cols-[1fr_1.4fr] md:gap-16 md:py-24",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Portrait, { className: "aspect-[4/5] w-full max-w-sm" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: "About"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "font-display mt-3 text-5xl md:text-7xl",
				children: "A bit about me."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-8 space-y-5 text-lg leading-relaxed",
				children: profile.about.map((paragraph, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: index > 0 ? "text-muted-foreground" : void 0,
					children: paragraph
				}, paragraph))
			})
		] })]
	}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExperienceSection, {}),
	/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SkillsSection, {})
] });
//#endregion
export { SplitComponent as component };
