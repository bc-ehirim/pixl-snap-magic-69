import { a as projects } from "./portfolio-BaaYmnm0.mjs";
import { K as notFound, _ as createFileRoute, g as lazyRouteComponent } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/work._slug-BMiVk2lA.js
var $$splitComponentImporter = () => import("./work._slug-DSCk9jMA.mjs");
var Route = createFileRoute("/work/$slug")({
	loader: ({ params }) => {
		const i = projects.findIndex((p) => p.slug === params.slug);
		if (i < 0) throw notFound();
		return {
			project: projects[i],
			prev: projects[(i - 1 + projects.length) % projects.length],
			next: projects[(i + 1) % projects.length]
		};
	},
	head: ({ loaderData }) => {
		const t = loaderData ? `${loaderData.project.title} | Ehirim Benjamin` : "Project | Ehirim Benjamin";
		const d = loaderData?.project.summary ?? "Case study by Ehirim Benjamin.";
		return { meta: [
			{ title: t },
			{
				name: "description",
				content: d
			},
			{
				property: "og:title",
				content: t
			},
			{
				property: "og:description",
				content: d
			},
			{
				property: "og:type",
				content: "article"
			},
			{
				name: "twitter:card",
				content: "summary_large_image"
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
