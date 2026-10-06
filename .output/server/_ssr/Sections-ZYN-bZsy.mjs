import { n as __toESM } from "../_runtime.mjs";
import { c as tools, l as volunteering, n as education, o as skills, r as experience } from "./portfolio-BaaYmnm0.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/Sections-ZYN-bZsy.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Reveal({ children, className = "", as: Tag = "div" }) {
	const ref = (0, import_react.useRef)(null);
	(0, import_react.useEffect)(() => {
		const el = ref.current;
		if (!el) return;
		const io = new IntersectionObserver(([e]) => {
			if (e?.isIntersecting) {
				el.classList.add("is-visible");
				io.disconnect();
			}
		}, { threshold: .12 });
		io.observe(el);
		return () => io.disconnect();
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Tag, {
		ref,
		className: `reveal ${className}`,
		children
	});
}
function SectionHead({ eyebrow, title, sub }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-10 md:mb-14",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "eyebrow",
				children: eyebrow
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "font-display mt-3 text-4xl leading-none text-foreground md:text-6xl",
				children: title
			}),
			sub && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-4 max-w-2xl text-base text-muted-foreground md:text-lg",
				children: sub
			})
		]
	});
}
function SkillsSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "skills",
		className: "container-x scroll-mt-20 py-16 md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Skills",
				title: "The things I can help with"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "grid gap-5 sm:grid-cols-2 xl:grid-cols-4",
				children: skills.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Reveal, {
					className: "skill-card rounded-[1.6rem] p-5 md:p-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "text-sm font-semibold uppercase tracking-[0.14em] text-foreground",
						children: g.group
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
						className: "mt-4 space-y-2 text-sm leading-relaxed text-muted-foreground",
						children: g.items.map((i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: i }, i))
					})]
				}, g.group))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Tools I use"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
					className: "mt-4 flex flex-wrap gap-2",
					children: tools.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
						className: "rounded-full border border-black/5 bg-white/50 px-3.5 py-1.5 text-sm text-muted-foreground",
						children: t
					}, t))
				})]
			})
		]
	});
}
function ExperienceSection() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		id: "experience",
		className: "container-x scroll-mt-20 py-16 md:py-20",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionHead, {
				eyebrow: "Experience",
				title: "My work experience"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
				className: "space-y-5",
				children: experience.map((e, i) => {
					const start = e.start.trim();
					const end = e.end.trim();
					const dateLabel = start && end ? `${start} to ${end}` : start || end;
					return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Reveal, {
						as: "li",
						className: "experience-card rounded-[1.8rem] p-5 md:p-7",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "grid gap-5 md:grid-cols-[14rem_1fr]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "text-sm leading-relaxed text-muted-foreground",
								children: [dateLabel && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: dateLabel }), e.type && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: dateLabel ? "mt-2 text-xs uppercase tracking-[0.12em]" : "text-xs uppercase tracking-[0.12em]",
									children: e.type
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "text-xl font-semibold text-foreground",
									children: e.position
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1 text-muted-foreground",
									children: e.organization
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 max-w-2xl text-base leading-relaxed text-muted-foreground",
									children: e.description
								}),
								e.achievements.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-4 list-disc space-y-1 pl-5 text-sm leading-relaxed text-muted-foreground",
									children: e.achievements.map((a) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: a }, a))
								}),
								e.tools.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-4 text-xs uppercase tracking-[0.12em] text-muted-foreground",
									children: e.tools.join(" · ")
								})
							] })]
						})
					}, i);
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Education"
				}), education.map((ed) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: `mt-5 grid gap-3 rounded-[1.6rem] border border-black/5 bg-white/40 p-5 ${ed.dates ? "md:grid-cols-[14rem_1fr]" : ""}`,
					children: [ed.dates && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-sm text-muted-foreground",
						children: ed.dates
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
							className: "text-xl font-semibold text-foreground",
							children: ed.course
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-muted-foreground",
							children: ed.school
						}),
						ed.notes && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-muted-foreground",
							children: ed.notes
						})
					] })]
				}, ed.course))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "eyebrow",
					children: "Volunteering & Leadership"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-5 grid gap-5 md:grid-cols-2",
					children: volunteering.map((v) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "rounded-[1.6rem] border border-black/5 bg-white/40 p-5",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-xl font-semibold text-foreground",
								children: v.position
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "mt-1 text-muted-foreground",
								children: [
									v.organization,
									", ",
									v.location
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-3 text-base leading-relaxed text-muted-foreground",
								children: v.description
							})
						]
					}, v.position))
				})]
			})
		]
	});
}
//#endregion
export { SectionHead as n, SkillsSection as r, ExperienceSection as t };
