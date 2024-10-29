/* empty css                                 */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, b as renderComponent, d as addAttribute, a as createAstro } from '../chunks/astro/server_CwYh5Sm4.mjs';
import { b as basics, w as works, $ as $$Layout } from '../chunks/Layout_UQbdRoig.mjs';
import 'clsx';
import { g as getCollection } from '../chunks/_astro_content_CWaquJZx.mjs';
import { $ as $$CardProject, a as $$ArrowViewProject } from '../chunks/CardProject_swXGisFz.mjs';
import { $ as $$Subtitle } from '../chunks/Subtitle_DBCx690k.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_ps_rHew3.mjs';
import moment from 'moment';
export { renderers } from '../renderers.mjs';

const $$ProfileSection = createComponent(($$result, $$props, $$slots) => {
  const { name, label, summary } = basics;
  return renderTemplate`${maybeRenderHead()}<section class="flex flex-col gap-4"> <div class="flex flex-col justify-center items-center gap-4 text-center"> <span class="px-2 text-xs font-semibold py-1 text-white rounded bg-black capitalize">Wellcome to my portfolio</span> <div class="flex flex-col items-center"> <p class="text-3xl sm:text-4xl font-extrabold capitalize">Hi, I'm ${name.split(" ")[0]} ${label}</p> </div> <div class="w-full max-w-sm flex flex-col items-center"> <p data-tooltip="Tooltip content" class="text-xs text-neutral-500">${summary}</p> </div> </div> </section>`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/components/sections/ProfileSection.astro", void 0);

const $$ProjectsSection = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = await getCollection("projects");
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "Subtitle", $$Subtitle, { "subtitle": "Projects" })} <div class="mt-5 space-y-2"> ${allProjects.map((project) => renderTemplate`${renderComponent($$result, "CardProject", $$CardProject, { "project": project })}`)} </div> <div class="w-full flex items-center justify-center mt-5"> <a href="/projects" class="w-fit rounded-full px-3 py-2 text-black flex items-center gap-2 hover:bg-[var(--accent-background-400)]"> <span class="text-xs font-medium">View projects</span> ${renderComponent($$result, "ArrowViewProject", $$ArrowViewProject, {})} </a> </div> </section>`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/components/sections/ProjectsSection.astro", void 0);

const getTimeDifference = (start, end) => {
  const yearsDiff = end.diff(start, "years");
  if (yearsDiff > 0) return `${yearsDiff} ${yearsDiff === 1 ? "year" : "years"}`;
  const monthsDiff = end.diff(start, "months");
  if (monthsDiff > 0) return `${monthsDiff + 1} ${monthsDiff === 1 ? "month" : "months"}`;
  const daysDiff = end.diff(start, "days");
  return `${daysDiff} ${daysDiff === 1 ? "day" : "days"}`;
};

const $$Astro = createAstro();
const $$CardExperience = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardExperience;
  const { work } = Astro2.props;
  const startdate = moment(work.startDate);
  const enddate = work.endDate !== null ? moment(work.endDate) : moment(/* @__PURE__ */ new Date());
  const difference = getTimeDifference(startdate, enddate);
  return renderTemplate`${maybeRenderHead()}<div class="w-full px-4 pt-4 pb-6 rounded-md bg-[var(--accent-background-400)] grid grid-cols-5 md:grid-cols-8 gap-3"> <div class="flex flex-col h-full col-span-1"> <div class="w-full sm:w-16 sm:h-16 rounded-md overflow-hidden shrink-0"> ${renderComponent($$result, "Image", $$Image, { "src": work.img, "alt": work.company, "width": 500, "height": 500 })} </div> <div class="mt-3 flex-col h-full hidden sm:flex sm:items-center"> <div class="w-3 h-3 rounded-full bg-neutral-300"></div> <!-- Línea vertical que se extiende hasta el final del contenedor --> <div class="w-[1px] bg-neutral-300 h-full"></div> </div> </div> <div class="col-start-1 col-end-6 sm:col-start-2 md:col-end-9"> <div class="flex flex-col space-y-3"> <div> <a${addAttribute(work.url, "href")} target="_blank" class="hover:underline"> <h4 class="text-xs font-bold">${work.company}</h4> </a> <p class="text-xs text-neutral-500 capitalize">${difference}</p> </div> <div> <p class="text-xs text-neutral-500 italic">${work.remote}</p> </div> </div> <div class="mt-3"> <h4 class="text-sm font-bold">${work.position}</h4> <div class="flex item-center gap-2 text-xs"> <p class="font-semibold">${work.type}</p> <p> - </p> <p class="text-neutral-500 italic">${startdate.year()} - ${work.endDate !== null ? enddate.year() : "Present"}</p> </div> <p class="text-neutral-500 text-xs">${work.country}, ${work.region}</p> </div> <div class="mt-2 prose"> <p class="text-xs">${work.summary}</p> </div> <div class="mt-2 gap-2 flex flex-wrap"> ${work.highlights.map((skill) => renderTemplate`<span class="px-2 text-xs font-semibold py-1 rounded bg-[var(--accent-background-600)]">${skill}</span>`)} </div> </div> </div>`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/components/system/CardExperience.astro", void 0);

const $$ExperiencesSection = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section> ${renderComponent($$result, "Subtitle", $$Subtitle, { "subtitle": "Experiences" })} <div class="my-5"> ${works.map((work) => renderTemplate`${renderComponent($$result, "CardExperience", $$CardExperience, { "work": work })}`)} </div> <div class="w-full flex items-center justify-center mt-5"> <a href="/resumen.pdf" target="_blank" class="w-fit rounded-full px-3 py-2 text-black flex items-center gap-2 hover:bg-[var(--accent-background-400)]"> <span class="text-xs font-medium">View full resumen</span> ${renderComponent($$result, "ArrowViewProject", $$ArrowViewProject, {})} </a> </div> </section>`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/components/sections/ExperiencesSection.astro", void 0);

const $$ContactSection = createComponent(($$result, $$props, $$slots) => {
  const { email } = basics;
  return renderTemplate`${maybeRenderHead()}<section> <div class="flex items-center justify-center"> <div class="my-5 w-full max-w-sm flex flex-col items-center gap-2"> <h1 class="text-4xl text-center font-bold">Have a project? Let's work together</h1> <p class="text-neutral-500 text-center text-sm">Catch up for a chat about your project, ideas, or anything else. I'm here to evaluate your business!</p> <a${addAttribute(`mailto:${email}`, "href")} target="_blank" class="w-fit rounded-full px-3 py-2 text-black flex items-center gap-2 hover:bg-[var(--accent-background-400)]"> <span class="text-xs font-medium">Connect with me</span> ${renderComponent($$result, "ArrowViewProject", $$ArrowViewProject, {})} </a> </div> </div> </section>`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/components/sections/ContactSection.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Luis Montiel - Portfolio" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="flex flex-col gap-10 mt-5"> ${renderComponent($$result2, "ProfileSection", $$ProfileSection, {})} ${renderComponent($$result2, "ProjectsSection", $$ProjectsSection, {})} ${renderComponent($$result2, "ExperiencesSection", $$ExperiencesSection, {})} ${renderComponent($$result2, "ContactSection", $$ContactSection, {})} </main> ` })}`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/pages/index.astro", void 0);

const $$file = "/home/ldmontielm/Documentos/Projects/portfolio-app/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
