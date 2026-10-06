import { n as __toESM } from "../_runtime.mjs";
import { i as profile, s as socials } from "./portfolio-BaaYmnm0.mjs";
import { n as require_react, r as require_jsx_runtime, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { _ as createFileRoute, b as useRouter, d as Scripts, f as HeadContent, g as lazyRouteComponent, h as Outlet, m as createRouter, v as createRootRouteWithContext, y as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route$6 } from "./work._slug-BMiVk2lA.mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-DpimR4Xs.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var nav = [
	{
		label: "Work",
		to: "/work"
	},
	{
		label: "About",
		to: "/about"
	},
	{
		label: "Experience",
		to: "/about",
		hash: "experience"
	},
	{
		label: "Skills",
		to: "/about",
		hash: "skills"
	},
	{
		label: "Contact",
		to: "/contact"
	}
];
function SiteHeader() {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const on = () => setScrolled(window.scrollY > 8);
		on();
		window.addEventListener("scroll", on, { passive: true });
		return () => window.removeEventListener("scroll", on);
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
		className: `site-header sticky top-0 z-50 transition-all duration-300 ${scrolled || open ? "is-scrolled" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex h-16 items-center justify-between",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
					to: "/",
					className: "font-display text-xl text-foreground",
					onClick: () => setOpen(false),
					children: profile.name
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "Main",
					className: "hidden items-center gap-8 md:flex",
					children: [nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						..."hash" in n ? { hash: n.hash } : {},
						className: "text-sm font-medium text-muted-foreground transition-colors hover:text-foreground",
						activeProps: { className: "text-foreground" },
						children: n.label
					}, n.label)), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cv",
						className: "btn btn-primary !px-4 !py-2.5 !text-xs",
						children: "My CV"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 md:hidden",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/cv",
						className: "btn btn-primary !px-3 !py-1.5 !text-[10px]",
						onClick: () => setOpen(false),
						children: "My CV"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						"aria-label": open ? "Close menu" : "Open menu",
						"aria-expanded": open,
						onClick: () => setOpen(!open),
						className: "relative h-10 w-10 rounded-full border border-black/10 bg-white/70",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-3 right-3 h-px bg-foreground transition-transform ${open ? "top-1/2 rotate-45" : "top-[16px]"}` }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute left-3 right-3 h-px bg-foreground transition-transform ${open ? "top-1/2 -rotate-45" : "top-[24px]"}` })]
					})]
				})
			]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
			"aria-label": "Mobile",
			className: "fixed inset-x-0 top-16 bottom-0 bg-background/90 backdrop-blur-xl md:hidden",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
				className: "container-x flex flex-col pt-6",
				children: nav.map((n) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
					className: "border-b border-black/5",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: n.to,
						..."hash" in n ? { hash: n.hash } : {},
						onClick: () => setOpen(false),
						className: "font-display block py-4 text-3xl text-foreground",
						children: n.label
					})
				}, n.label))
			})
		})]
	});
}
function SiteFooter() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
		className: "border-t",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "container-x flex flex-col gap-6 py-10 md:flex-row md:items-end md:justify-between",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl",
				children: profile.name
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: profile.tagline
			})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-col gap-3 md:items-end",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-6 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "link-underline",
							href: socials.linkedin,
							target: "_blank",
							rel: "noreferrer",
							children: "LinkedIn"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "link-underline",
							href: socials.x,
							target: "_blank",
							rel: "noreferrer",
							children: "X"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "link-underline",
							href: socials.website,
							target: "_blank",
							rel: "noreferrer",
							children: "Website"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							className: "link-underline",
							href: `mailto:${socials.email}`,
							children: "Email"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "text-xs text-muted-foreground",
					children: [
						"© 2026 ",
						profile.name,
						". All rights reserved."
					]
				})]
			})]
		})
	});
}
var styles_default = "/assets/styles-__t7iAJp.css";
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-display text-8xl text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "This page isn’t here."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Looks like the link is old or the page has moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Take me home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "Hmm, this page didn’t load."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong. Try again, or head back to the home page."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Give it another go"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Take me home"
					})]
				})
			]
		})
	});
}
var Route$5 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "Benjamin Ehirim | Designer & Creative Technologist" },
			{
				name: "description",
				content: "I’m Benjamin, a graphic designer and web creator in Lagos. Have a look at my design, print and web projects."
			},
			{
				name: "author",
				content: "Benjamin Ehirim"
			}
		],
		links: [{
			rel: "stylesheet",
			href: styles_default
		}, {
			rel: "icon",
			href: "/favicon.svg",
			type: "image/svg+xml"
		}]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "en",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$5.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(QueryClientProvider, {
		client: queryClient,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
				href: "#main",
				className: "sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded focus:bg-background focus:px-3 focus:py-2",
				children: "Skip to content"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("main", {
				id: "main",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteFooter, {})
		]
	});
}
var $$splitComponentImporter$4 = () => import("./routes-B70m1S7T.mjs");
var title = "Benjamin Ehirim | Designer & Creative Technologist";
var description = "I’m Benjamin, a graphic designer and web creator in Lagos. Have a look at my design, print and web projects.";
var Route$4 = createFileRoute("/")({
	head: () => ({ meta: [
		{ title },
		{
			name: "description",
			content: description
		},
		{
			property: "og:title",
			content: title
		},
		{
			property: "og:description",
			content: description
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
var $$splitComponentImporter$3 = () => import("./about-BSe-s3V2.mjs");
var Route$3 = createFileRoute("/about")({
	head: () => ({ meta: [
		{ title: "About | Benjamin Ehirim" },
		{
			name: "description",
			content: "A little about Benjamin Ehirim, a graphic designer and website builder based in Lagos."
		},
		{
			property: "og:title",
			content: "About | Benjamin Ehirim"
		},
		{
			property: "og:description",
			content: "A little about Benjamin Ehirim, a graphic designer and website builder based in Lagos."
		},
		{
			property: "og:type",
			content: "profile"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
var $$splitComponentImporter$2 = () => import("./contact-BYQK_UzA.mjs");
var Route$2 = createFileRoute("/contact")({
	head: () => ({ meta: [
		{ title: "Contact | Benjamin Ehirim" },
		{
			name: "description",
			content: "Have a project, job or collaboration in mind? Send Benjamin Ehirim a message."
		},
		{
			property: "og:title",
			content: "Contact | Benjamin Ehirim"
		},
		{
			property: "og:description",
			content: "Have a project, job or collaboration in mind? Send Benjamin Ehirim a message."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
var $$splitComponentImporter$1 = () => import("./cv-DLe9oLFA.mjs");
var Route$1 = createFileRoute("/cv")({
	head: () => ({ meta: [
		{ title: "CV | Benjamin Ehirim" },
		{
			name: "description",
			content: "View or download Benjamin Ehirim’s CV."
		},
		{
			name: "robots",
			content: "noindex"
		},
		{
			property: "og:title",
			content: "CV | Benjamin Ehirim"
		},
		{
			property: "og:description",
			content: "View or download Benjamin Ehirim’s CV."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
var $$splitComponentImporter = () => import("./work.index-CxUpK0Da.mjs");
var Route = createFileRoute("/work/")({
	head: () => ({ meta: [
		{ title: "Work | Ehirim Benjamin" },
		{
			name: "description",
			content: "Have a look at the design, branding, print and web projects I’ve worked on."
		},
		{
			property: "og:title",
			content: "Work | Ehirim Benjamin"
		},
		{
			property: "og:description",
			content: "Have a look at the design, branding, print and web projects I’ve worked on."
		},
		{
			property: "og:type",
			content: "website"
		},
		{
			name: "twitter:card",
			content: "summary_large_image"
		}
	] }),
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
var IndexRoute = Route$4.update({
	id: "/",
	path: "/",
	getParentRoute: () => Route$5
});
var AboutRoute = Route$3.update({
	id: "/about",
	path: "/about",
	getParentRoute: () => Route$5
});
var ContactRoute = Route$2.update({
	id: "/contact",
	path: "/contact",
	getParentRoute: () => Route$5
});
var CvRoute = Route$1.update({
	id: "/cv",
	path: "/cv",
	getParentRoute: () => Route$5
});
var WorkIndexRoute = Route.update({
	id: "/work/",
	path: "/work/",
	getParentRoute: () => Route$5
});
var rootRouteChildren = {
	IndexRoute,
	AboutRoute,
	ContactRoute,
	CvRoute,
	WorkSlugRoute: Route$6.update({
		id: "/work/$slug",
		path: "/work/$slug",
		getParentRoute: () => Route$5
	}),
	WorkIndexRoute
};
var routeTree = Route$5._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	const queryClient = new QueryClient();
	return createRouter({
		routeTree,
		context: { queryClient },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
