/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CwYh5Sm4.mjs';
import { $ as $$Layout } from '../chunks/Layout_UQbdRoig.mjs';
import { $ as $$Subtitle } from '../chunks/Subtitle_DBCx690k.mjs';
import { $ as $$CardProject } from '../chunks/CardProject_swXGisFz.mjs';
import { g as getCollection } from '../chunks/_astro_content_CWaquJZx.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const allProjects = await getCollection("projects");
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects - Luis Montiel" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mt-5"> ${renderComponent($$result2, "Subtitle", $$Subtitle, { "subtitle": "Projects" })} <div class="mt-5"> ${allProjects.map((project) => renderTemplate`${renderComponent($$result2, "CardProject", $$CardProject, { "project": project })}`)} </div> </main> ` })}`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/pages/projects/index.astro", void 0);

const $$file = "/home/ldmontielm/Documentos/Projects/portfolio-app/src/pages/projects/index.astro";
const $$url = "/projects";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
