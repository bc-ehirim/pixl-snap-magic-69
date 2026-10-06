import { i as profile } from "./portfolio-BaaYmnm0.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/cv-DLe9oLFA.js
var import_jsx_runtime = require_jsx_runtime();
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
	className: "container-x py-16 md:py-24",
	children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "My CV"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "font-display mt-3 text-5xl md:text-7xl",
			children: profile.name
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-muted-foreground",
			children: profile.tagline
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-8 flex flex-wrap gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: profile.cvUrl,
				target: "_blank",
				rel: "noreferrer",
				className: "btn btn-primary",
				children: "Open my CV"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: profile.cvUrl,
				download: true,
				className: "btn btn-outline",
				children: "Download a copy"
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10 overflow-hidden rounded-xl border",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("iframe", {
				src: profile.cvUrl,
				title: `${profile.name} CV`,
				className: "h-[75vh] w-full bg-card",
				loading: "lazy"
			})
		})
	]
});
//#endregion
export { SplitComponent as component };
