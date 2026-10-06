import { n as __toESM } from "../_runtime.mjs";
import { s as socials } from "./portfolio-BaaYmnm0.mjs";
import { n as require_react, r as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/contact-BYQK_UzA.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function ContactForm() {
	const [status, setStatus] = (0, import_react.useState)("idle");
	const [errors, setErrors] = (0, import_react.useState)({});
	function onSubmit(e) {
		e.preventDefault();
		const fd = new FormData(e.currentTarget);
		const name = String(fd.get("name") || "").trim();
		const email = String(fd.get("email") || "").trim();
		const company = String(fd.get("company") || "").trim();
		const message = String(fd.get("message") || "").trim();
		const errs = {};
		if (name.length < 2) errs.name = "Please add your name.";
		if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) errs.email = "That email address doesn’t look right.";
		if (message.length < 10) errs.message = "Please add a bit more to your message.";
		setErrors(errs);
		if (Object.keys(errs).length) return;
		setStatus("loading");
		try {
			const body = `${message}\n\nFrom: ${name}${company ? `, ${company}` : ""}\n${email}`;
			window.location.href = `mailto:${socials.email}?subject=${encodeURIComponent(`Portfolio enquiry from ${name}`)}&body=${encodeURIComponent(body)}`;
			setTimeout(() => setStatus("success"), 600);
		} catch {
			setStatus("error");
		}
	}
	if (status === "success") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		role: "status",
		className: "rounded-xl border p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-3xl",
				children: "Thanks for reaching out."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-muted-foreground",
				children: "Your email app should open with the message ready. Just send it from there, and I’ll get back to you."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "btn btn-outline mt-6",
				onClick: () => setStatus("idle"),
				children: "Send another message"
			})
		]
	});
	const field = "mt-2 w-full rounded-lg border border-input bg-card px-4 py-3 outline-none transition-colors focus:border-foreground";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("form", {
		noValidate: true,
		onSubmit,
		className: "contact-form grid gap-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "grid gap-5 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm font-medium",
					children: [
						"Name",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "name",
							autoComplete: "name",
							className: field,
							"aria-invalid": !!errors.name
						}),
						errors.name && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs text-destructive",
							children: errors.name
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "text-sm font-medium",
					children: [
						"Email",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							name: "email",
							type: "email",
							autoComplete: "email",
							className: field,
							"aria-invalid": !!errors.email
						}),
						errors.email && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "mt-1 block text-xs text-destructive",
							children: errors.email
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-sm font-medium",
				children: [
					"Company or organisation ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-muted-foreground",
						children: "(optional)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						name: "company",
						autoComplete: "organization",
						className: field
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "text-sm font-medium",
				children: [
					"Message",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
						name: "message",
						rows: 5,
						className: field,
						"aria-invalid": !!errors.message
					}),
					errors.message && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-xs text-destructive",
						children: errors.message
					})
				]
			}),
			status === "error" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				role: "alert",
				className: "text-sm text-destructive",
				children: [
					"That didn’t work. You can email me directly at ",
					socials.email,
					"."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				type: "submit",
				disabled: status === "loading",
				className: "btn btn-primary justify-self-start disabled:opacity-60",
				children: status === "loading" ? "Opening your email…" : "Send me a message"
			})
		]
	});
}
function ContactLinks() {
	const links = [
		{
			label: "Email",
			href: `mailto:${socials.email}`,
			value: socials.email
		},
		{
			label: "LinkedIn",
			href: socials.linkedin,
			value: "Find me on LinkedIn"
		},
		{
			label: "X",
			href: socials.x,
			value: "@DecencyBenjamin"
		},
		{
			label: "Website",
			href: socials.website,
			value: "Visit my website"
		},
		...socials.whatsapp ? [{
			label: "WhatsApp",
			href: socials.whatsapp,
			value: "Chat with me on WhatsApp"
		}] : []
	];
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "border-t",
		children: links.map((l) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
			className: "border-b",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
				href: l.href,
				target: l.href.startsWith("http") ? "_blank" : void 0,
				rel: "noreferrer",
				className: "group flex items-center justify-between py-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-sm text-muted-foreground",
					children: l.label
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "flex items-center gap-2",
					children: [l.value, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "transition-transform group-hover:translate-x-1",
						children: "↗"
					})]
				})]
			})
		}, l.label))
	});
}
var SplitComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
	className: "container-x grid gap-12 py-16 md:grid-cols-[1fr_1.3fr] md:gap-20 md:py-24",
	children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "eyebrow",
			children: "Contact"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
			className: "font-display mt-3 text-5xl md:text-6xl",
			children: ["Got a project or role in mind? ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "italic",
				children: "Let’s talk."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-10",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactLinks, {})
		})
	] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ContactForm, {})]
});
//#endregion
export { SplitComponent as component };
