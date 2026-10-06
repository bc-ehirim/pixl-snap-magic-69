globalThis.__nitro_main__ = import.meta.url;
import { i as HTTPError, n as defineLazyEventHandler, t as H3Core } from "./_libs/h3+rou3+srvx.mjs";
import { t as HookableCore } from "./_libs/hookable.mjs";
import { r as FastResponse } from "./_libs/h3-v2+rou3+srvx.mjs";
//#region #nitro-vite-setup
function lazyService(loader) {
	let promise, mod;
	return { fetch(req) {
		if (mod) return mod.fetch(req);
		if (!promise) promise = loader().then((_mod) => mod = _mod.default || _mod);
		return promise.then((mod) => mod.fetch(req));
	} };
}
var services = { ["ssr"]: lazyService(() => import("./_ssr/ssr.mjs")) };
globalThis.__nitro_vite_envs__ = services;
//#endregion
//#region #nitro/virtual/public-assets-data
var public_assets_data_default = {
	"/cv-placeholder.pdf": {
		"type": "application/pdf",
		"etag": "\"1a0-n6YVgyUNAr+d2vC25CBhY/8GCt4\"",
		"mtime": "2026-10-06T14:40:47.818Z",
		"size": 416,
		"path": "../public/cv-placeholder.pdf"
	},
	"/favicon.svg": {
		"type": "image/svg+xml",
		"etag": "\"e5-TiYfOMXEu7lUMD0BjCaAvU9FqQI\"",
		"mtime": "2026-10-06T14:40:47.819Z",
		"size": 229,
		"path": "../public/favicon.svg"
	},
	"/assets/about-DMJjOeTx.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"306-x8VMmofjecxTSjdfb7kNsp7995s\"",
		"mtime": "2026-10-06T22:00:19.209Z",
		"size": 774,
		"path": "../public/assets/about-DMJjOeTx.js"
	},
	"/assets/cv-Dqk0Q4L8.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"347-CUJC+ZjjmUEiXcjcV4I6Mluw6RU\"",
		"mtime": "2026-10-06T22:00:19.211Z",
		"size": 839,
		"path": "../public/assets/cv-Dqk0Q4L8.js"
	},
	"/assets/contact-IzECZ7hz.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1103-4X+rASewVuV5MrWHTymvqjDKawQ\"",
		"mtime": "2026-10-06T22:00:19.210Z",
		"size": 4355,
		"path": "../public/assets/contact-IzECZ7hz.js"
	},
	"/assets/Portrait-DxXIIJGt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"228-j/y5t2job92KEn0JFLzV+R6aDoo\"",
		"mtime": "2026-10-06T22:00:19.202Z",
		"size": 552,
		"path": "../public/assets/Portrait-DxXIIJGt.js"
	},
	"/assets/ProjectCard-O-Mu-N8f.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"6c7-PzU/1GhdtJ7lyoYqVVZW/aWzRs8\"",
		"mtime": "2026-10-06T22:00:19.203Z",
		"size": 1735,
		"path": "../public/assets/ProjectCard-O-Mu-N8f.js"
	},
	"/assets/index-B0Mbhx_-.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"5f102-IJvNWf0X+iSqueUr/M1XGOeVTEk\"",
		"mtime": "2026-10-06T22:00:19.201Z",
		"size": 389378,
		"path": "../public/assets/index-B0Mbhx_-.js"
	},
	"/assets/routes-BZAmAPe7.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"13e7-EaWFhS5jZQkV5QJYsT6TTt0xbMo\"",
		"mtime": "2026-10-06T22:00:19.212Z",
		"size": 5095,
		"path": "../public/assets/routes-BZAmAPe7.js"
	},
	"/assets/Sections-D6-5JJpe.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"1154-uGWPnf1+HkEnqiUJ6tlF6Q+BRnM\"",
		"mtime": "2026-10-06T22:00:19.205Z",
		"size": 4436,
		"path": "../public/assets/Sections-D6-5JJpe.js"
	},
	"/assets/work.index-DZW3gQEt.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"4c1-eTtCriymtPaYj9sTDXBW7hTIJ2I\"",
		"mtime": "2026-10-06T22:00:19.215Z",
		"size": 1217,
		"path": "../public/assets/work.index-DZW3gQEt.js"
	},
	"/assets/work._slug-DN4EJmKA.js": {
		"type": "text/javascript; charset=utf-8",
		"etag": "\"a53-oMsXnW4aVDFU5aNGqBWXxK10LNg\"",
		"mtime": "2026-10-06T22:00:19.214Z",
		"size": 2643,
		"path": "../public/assets/work._slug-DN4EJmKA.js"
	},
	"/robots.txt": {
		"type": "text/plain; charset=utf-8",
		"etag": "\"ae-hLVBrSrDdpIw3Xl0dJPRkupPepQ\"",
		"mtime": "2026-10-06T14:40:47.821Z",
		"size": 174,
		"path": "../public/robots.txt"
	},
	"/Resume for Ehirim Benjamin.pdf": {
		"type": "application/pdf",
		"etag": "\"d723-/pQ+XC0ZtpUUz9ttMzcz360le40\"",
		"mtime": "2026-10-05T19:56:36.411Z",
		"size": 55075,
		"path": "../public/Resume for Ehirim Benjamin.pdf"
	},
	"/assets/styles-__t7iAJp.css": {
		"type": "text/css; charset=utf-8",
		"etag": "\"1438a-15VLlbJxNRGXyv624eUbOyDMAeA\"",
		"mtime": "2026-10-06T22:00:19.216Z",
		"size": 82826,
		"path": "../public/assets/styles-__t7iAJp.css"
	},
	"/projects/babc-official-site.jpg": {
		"type": "image/jpeg",
		"etag": "\"a893-a3O9g6x0GV4czQjfj2EaxVEMWaM\"",
		"mtime": "2026-10-06T16:02:16.783Z",
		"size": 43155,
		"path": "../public/projects/babc-official-site.jpg"
	},
	"/projects/babc-quotation-app.jpg": {
		"type": "image/jpeg",
		"etag": "\"fa19-+yieJf2Huk60ETItLUS+rRjKv+o\"",
		"mtime": "2026-10-06T16:00:08.700Z",
		"size": 64025,
		"path": "../public/projects/babc-quotation-app.jpg"
	},
	"/projects/coach-zinny.jpg": {
		"type": "image/jpeg",
		"etag": "\"102fa-2rt+QYreGwtUkhPTz6/wxt/HXuY\"",
		"mtime": "2026-10-06T15:59:14.184Z",
		"size": 66298,
		"path": "../public/projects/coach-zinny.jpg"
	},
	"/projects/brand-identity-logos.png": {
		"type": "image/png",
		"etag": "\"461ef-n7clgjmTRVSR7wqWUmdR18lsW7w\"",
		"mtime": "2026-10-06T16:33:03.671Z",
		"size": 287215,
		"path": "../public/projects/brand-identity-logos.png"
	},
	"/projects/campaign-graphics-gallery.png": {
		"type": "image/png",
		"etag": "\"b1b17-4CXbDqJaldtyLv79Nh9QXcH4UKk\"",
		"mtime": "2026-10-06T16:58:02.463Z",
		"size": 727831,
		"path": "../public/projects/campaign-graphics-gallery.png"
	},
	"/projects/print-design-samples.png": {
		"type": "image/png",
		"etag": "\"d638f-BBQNodEt/Ns9NLzZZi7H06tQywE\"",
		"mtime": "2026-10-06T16:44:38.107Z",
		"size": 877455,
		"path": "../public/projects/print-design-samples.png"
	},
	"/benjamin-ehirim-portrait.png": {
		"type": "image/png",
		"etag": "\"1724a9-hgrKl+FR4FQRMUuTiVzAnHiPa38\"",
		"mtime": "2026-10-06T15:24:14.604Z",
		"size": 1516713,
		"path": "../public/benjamin-ehirim-portrait.png"
	},
	"/Benjamin Ehirim's personal photo.png": {
		"type": "image/png",
		"etag": "\"1e73cb-5wQ1Wgs9m6Hw0+92xaHAVcTWgus\"",
		"mtime": "2026-09-15T08:57:37.285Z",
		"size": 1995723,
		"path": "../public/Benjamin Ehirim's personal photo.png"
	}
};
//#endregion
//#region #nitro/virtual/public-assets
var publicAssetBases = {};
function isPublicAssetURL(id = "") {
	if (public_assets_data_default[id]) return true;
	for (const base in publicAssetBases) if (id.startsWith(base)) return true;
	return false;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/route-rules.mjs
var headers = ((m) => function headersRouteRule(event) {
	for (const [key, value] of Object.entries(m.options || {})) event.res.headers.set(key, value);
});
//#endregion
//#region #nitro/virtual/routing
var findRouteRules = /* @__PURE__ */ (() => {
	const $0 = [{
		name: "headers",
		route: "/assets/**",
		handler: headers,
		options: { "cache-control": "public, max-age=31536000, immutable" }
	}];
	return (m, p) => {
		let r = [];
		if (p.charCodeAt(p.length - 1) === 47) p = p.slice(0, -1) || "/";
		let s = p.split("/");
		if (s.length > 1) {
			if (s[1] === "assets") r.unshift({
				data: $0,
				params: { "_": s.slice(2).join("/") }
			});
		}
		return r;
	};
})();
var _lazy_t0FZmn = defineLazyEventHandler(() => import("./_chunks/ssr-renderer.mjs"));
var findRoute = /* @__PURE__ */ (() => {
	const data = {
		route: "/**",
		handler: _lazy_t0FZmn
	};
	return ((_m, p) => {
		return {
			data,
			params: { "_": p.slice(1) }
		};
	});
})();
[].filter(Boolean);
//#endregion
//#region node_modules/nitro/dist/runtime/internal/error/prod.mjs
var errorHandler = (error, event) => {
	const res = defaultHandler(error, event);
	return new FastResponse(typeof res.body === "string" ? res.body : JSON.stringify(res.body, null, 2), res);
};
function defaultHandler(error, event) {
	const unhandled = error.unhandled ?? !HTTPError.isError(error);
	const { status = 500, statusText = "" } = unhandled ? {} : error;
	if (status === 404) {
		const url = event.url || new URL(event.req.url);
		const baseURL = "/";
		if (/^\/[^/]/.test(baseURL) && !url.pathname.startsWith(baseURL)) return {
			status: 302,
			headers: new Headers({ location: `${baseURL}${url.pathname.slice(1)}${url.search}` })
		};
	}
	const headers = new Headers(unhandled ? {} : error.headers);
	headers.set("content-type", "application/json; charset=utf-8");
	return {
		status,
		statusText,
		headers,
		body: {
			error: true,
			...unhandled ? {
				status,
				unhandled: true
			} : typeof error.toJSON === "function" ? error.toJSON() : {
				status,
				statusText,
				message: error.message
			}
		}
	};
}
//#endregion
//#region #nitro/virtual/error-handler
var errorHandlers = [errorHandler];
async function error_handler_default(error, event) {
	for (const handler of errorHandlers) try {
		const response = await handler(error, event, { defaultHandler });
		if (response) return response;
	} catch (error) {
		console.error(error);
	}
}
//#endregion
//#region #nitro/virtual/app
function createNitroApp() {
	const captureError = (error, errorCtx) => {
		if (errorCtx?.event) {
			const errors = errorCtx.event.req.context?.nitro?.errors;
			if (errors) errors.push({
				error,
				context: errorCtx
			});
		}
	};
	const h3App = createH3App({ onError(error, event) {
		return error_handler_default(error, event);
	} });
	let appHandler = (req) => {
		req.context ||= {};
		req.context.nitro = req.context.nitro || { errors: [] };
		return h3App.fetch(req);
	};
	return {
		fetch: appHandler,
		h3: h3App,
		hooks: void 0,
		captureError
	};
}
function createH3App(config) {
	const h3App = new H3Core(config);
	h3App["~findRoute"] = (event) => findRoute(event.req.method, event.url.pathname);
	h3App["~getMiddleware"] = (event, route) => {
		const pathname = event.url.pathname;
		const method = event.req.method;
		const middleware = [];
		const routeRules = getRouteRules(method, pathname);
		event.context.routeRules = routeRules?.routeRules;
		if (routeRules?.routeRuleMiddleware.length) middleware.push(...routeRules.routeRuleMiddleware);
		if (route?.data?.middleware?.length) middleware.push(...route.data.middleware);
		return middleware;
	};
	return h3App;
}
//#endregion
//#region node_modules/nitro/dist/runtime/internal/app.mjs
var APP_ID = "default";
function useNitroApp() {
	let instance = useNitroApp._instance;
	if (instance) return instance;
	instance = useNitroApp._instance = createNitroApp();
	globalThis.__nitro__ = globalThis.__nitro__ || {};
	globalThis.__nitro__[APP_ID] = instance;
	return instance;
}
function useNitroHooks() {
	const nitroApp = useNitroApp();
	const hooks = nitroApp.hooks;
	if (hooks) return hooks;
	return nitroApp.hooks = new HookableCore();
}
function getRouteRules(method, pathname) {
	const m = findRouteRules(method, pathname);
	if (!m?.length) return { routeRuleMiddleware: [] };
	const routeRules = {};
	for (const layer of m) for (const rule of layer.data) {
		const currentRule = routeRules[rule.name];
		if (currentRule) {
			if (rule.options === false) {
				delete routeRules[rule.name];
				continue;
			}
			if (typeof currentRule.options === "object" && typeof rule.options === "object") currentRule.options = {
				...currentRule.options,
				...rule.options
			};
			else currentRule.options = rule.options;
			currentRule.route = rule.route;
			currentRule.params = {
				...currentRule.params,
				...layer.params
			};
		} else if (rule.options !== false) routeRules[rule.name] = {
			...rule,
			params: layer.params
		};
	}
	const middleware = [];
	const orderedRules = Object.values(routeRules).sort((a, b) => (a.handler?.order || 0) - (b.handler?.order || 0));
	for (const rule of orderedRules) {
		if (rule.options === false || !rule.handler) continue;
		middleware.push(rule.handler(rule));
	}
	return {
		routeRules,
		routeRuleMiddleware: middleware
	};
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/_module-handler.mjs
function createHandler(hooks) {
	const nitroApp = useNitroApp();
	const nitroHooks = useNitroHooks();
	return {
		async fetch(request, env, context) {
			globalThis.__env__ = env;
			augmentReq(request, {
				env,
				context
			});
			const ctxExt = {};
			const url = new URL(request.url);
			if (hooks.fetch) {
				const res = await hooks.fetch(request, env, context, url, ctxExt);
				if (res) return res;
			}
			return await nitroApp.fetch(request);
		},
		scheduled(controller, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:scheduled", {
				controller,
				env,
				context
			}) || Promise.resolve());
		},
		email(message, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:email", {
				message,
				event: message,
				env,
				context
			}) || Promise.resolve());
		},
		queue(batch, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:queue", {
				batch,
				event: batch,
				env,
				context
			}) || Promise.resolve());
		},
		tail(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:tail", {
				traces,
				env,
				context
			}) || Promise.resolve());
		},
		trace(traces, env, context) {
			globalThis.__env__ = env;
			context.waitUntil(nitroHooks.callHook("cloudflare:trace", {
				traces,
				env,
				context
			}) || Promise.resolve());
		}
	};
}
function augmentReq(cfReq, ctx) {
	const req = cfReq;
	req.ip = cfReq.headers.get("cf-connecting-ip") || void 0;
	req.runtime ??= { name: "cloudflare" };
	req.runtime.cloudflare = {
		...req.runtime.cloudflare,
		...ctx
	};
	req.waitUntil = ctx.context?.waitUntil.bind(ctx.context);
}
//#endregion
//#region node_modules/nitro/dist/presets/cloudflare/runtime/cloudflare-module.mjs
var cloudflare_module_default = createHandler({ fetch(cfRequest, env, context, url) {
	if (env.ASSETS && isPublicAssetURL(url.pathname)) return env.ASSETS.fetch(cfRequest);
} });
//#endregion
export { cloudflare_module_default as default };
