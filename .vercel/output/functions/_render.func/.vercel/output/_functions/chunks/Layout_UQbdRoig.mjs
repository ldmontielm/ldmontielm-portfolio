import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, a as createAstro, g as renderHead, h as renderSlot, i as renderScript } from './astro/server_CwYh5Sm4.mjs';
/* empty css                         */
import 'clsx';

const sizes = {
  xs: 14,
  sm: 16,
  stroke_xs: 0.5
};

const $$Github = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(sizes.xs, "width")}${addAttribute(sizes.xs, "height")} viewBox="0 0 24 24" fill="none" stroke="black"${addAttribute(sizes.stroke_xs, "stroke-width")} stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path> </svg>`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/components/icons/Github.astro", void 0);

const $$Linkedin = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg"${addAttribute(sizes.sm, "width")}${addAttribute(sizes.sm, "height")} viewBox="0 0 24 24" fill="none" stroke="black"${addAttribute(sizes.stroke_xs, "stroke-width")} stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/components/icons/Linkedin.astro", void 0);

const basics = {
	name: "Luis Montiel",
	label: "Software developer specialized in creating modern and efficient solutions.",
	image: "",
	email: "ld.montielm@gmail.com",
	phone: "(+57) 3245705946",
	url: "",
	working: "Currently Working",
	summary: "Welcome! I'm Luis Montiel, software developer specialized in creating modern and efficient solutions. Explore my projects and get to know my work, if you need me just get in touch.",
	location: {
		address: "",
		postalCode: "",
		city: "Medellín",
		countryCode: "COL",
		region: "Antioquia"
	},
	profiles: [
		{
			network: "Github",
			username: "ldmontielm",
			url: "https://github.com/ldmontielm"
		},
		{
			network: "Linkedin",
			username: "Luis David Montiel Montes",
			url: "https://www.linkedin.com/in/ld-montiel/"
		}
	]
};
const works = [
	{
		company: "Silverbox SAS",
		position: "Junior Software Developer",
		img: "/companies/silverbox.png",
		remote: "Remotly",
		country: "Medellín",
		region: "Antioquia",
		type: "Full time",
		url: "https://www.silverbox.com.co/",
		startDate: "2024-01-17",
		endDate: null,
		summary: "I've specialized in developing RESTful APIs with FastAPI, as well as deploying containers on GCP using Cloud Run and orchestrating them with Kubernetes in Google Kubernetes Engine (GKE). Additionally, I focus on developing web applications with Django and creating interfaces using the React ecosystem.",
		highlights: [
			"Python",
			"Django",
			"Javascript",
			"Typescript",
			"React JS",
			"Next JS",
			"Kubernetes",
			"GKE",
			"Docker"
		]
	}
];

const $$Astro$1 = createAstro();
const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Navbar;
  const { pathname } = Astro2.url;
  const routes = [
    {
      id: 1,
      name: "Home",
      href: "/",
      active: pathname === "/"
    },
    {
      id: 2,
      name: "Projects",
      href: "/projects",
      active: pathname === "/projects"
    },
    {
      id: 3,
      name: "About",
      href: "/about",
      active: pathname === "/about"
    }
  ];
  const { profiles } = basics;
  const SOCIAL_ICONS = {
    Github: $$Github,
    Linkedin: $$Linkedin
  };
  return renderTemplate`${maybeRenderHead()}<div class=""> <div class="w-full py-4 flex items-center justify-between"> <ul class="flex items-center gap-4 text-xs font-medium"> ${routes.map((route) => renderTemplate`<li> <a${addAttribute(route.href, "href")}${addAttribute(`${route.active ? "underline" : "hover:underline"}`, "class")}>${route.name}</a> </li>`)} </ul> <div class="flex items-center gap-4"> <div class="flex items-center gap-2"> ${profiles.map((social) => {
    const Icon = SOCIAL_ICONS[social.network];
    return renderTemplate`<a${addAttribute(social.url, "href")}${addAttribute(`${social.network} Profile`, "data-tippy-content")} target="_blank" class="w-7 h-7 rounded-md bg-[var(--accent-backgroud-200)] flex items-center justify-center"> ${renderComponent($$result, "Icon", Icon, {})} </a>`;
  })} </div> </div> </div> </div>`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/components/system/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="description" content="Astro description"><meta name="viewport" content="width=device-width"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderHead()}</head> <body> <div class="w-full md:max-w-2xl mx-auto px-4 grid min-h-[100dvh] grid-rows-[auto_1fr_auto]"> ${renderComponent($$result, "Navbar", $$Navbar, {})} ${renderSlot($$result, $$slots["default"])} <footer class="my-5 space-y-2"> <div></div> <hr> <div> <p class="text-neutral-500 text-xs">© 2024 Luis Montiel. All rights reserved.</p> </div> </footer> </div> ${renderScript($$result, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")} </body> </html> `;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/layouts/Layout.astro", void 0);

export { $$Layout as $, $$Github as a, basics as b, works as w };
