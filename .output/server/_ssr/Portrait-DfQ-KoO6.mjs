import { i as profile } from "./portfolio-BaaYmnm0.mjs";
import { r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Portrait-DfQ-KoO6.js
var import_jsx_runtime = require_jsx_runtime();
function Portrait({ className = "" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: `overflow-hidden rounded-2xl ${className}`,
		children: profile.portrait ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: profile.portrait,
			alt: `Portrait of ${profile.name}`,
			className: "h-full w-full object-cover"
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "placeholder-art flex h-full w-full flex-col items-center justify-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-6xl",
				children: profile.initials
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "eyebrow",
				children: "Photo to come"
			})]
		})
	});
}
//#endregion
export { Portrait as t };
