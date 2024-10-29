/* empty css                         */
import { c as createComponent, r as renderTemplate, m as maybeRenderHead, d as addAttribute, b as renderComponent, a as createAstro } from './astro/server_CwYh5Sm4.mjs';
import 'clsx';

const $$ArrowViewProject = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<svg xmlns="http://www.w3.org/2000/svg" width="13" height="4" viewBox="0 0 13 4" fill="none"> <path d="M12.1768 2.17678C12.2744 2.07915 12.2744 1.92085 12.1768 1.82322L10.5858 0.232233C10.4882 0.134602 10.3299 0.134602 10.2322 0.232233C10.1346 0.329864 10.1346 0.488155 10.2322 0.585786L11.6464 2L10.2322 3.41421C10.1346 3.51184 10.1346 3.67014 10.2322 3.76777C10.3299 3.8654 10.4882 3.8654 10.5858 3.76777L12.1768 2.17678ZM0 2.25H12V1.75H0V2.25Z" fill="black"></path> </svg>`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/components/icons/ArrowViewProject.astro", void 0);

const $$Astro = createAstro();
const $$CardProject = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$CardProject;
  const { project } = Astro2.props;
  const { deploy, description, title, type, category } = project.data;
  return renderTemplate`${maybeRenderHead()}<div class="p-2.5 rounded border-nuetral-500 bg-[var(--accent-background-400)] hover:bg-[var(--accent-background-600)]"> <div class="flex flex-col gap-2"> <p class="text-xs text-neutral-500">${`${type} - ${category}`}</p> <a${addAttribute(`/projects/${project.slug}`, "href")} class="text-2xl font-medium"> ${title} </a> <p class="text-neutral-500 text-xs">${description}</p> </div> <div class="mt-3"> <a${addAttribute(deploy, "href")} target="_blank" class="flex items-center gap-2"> <span class="text-xs font-medium">Visit project</span> ${renderComponent($$result, "ArrowViewProject", $$ArrowViewProject, {})} </a> </div> </div>`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/pages/projects/components/CardProject.astro", void 0);

const $$file = "/home/ldmontielm/Documentos/Projects/portfolio-app/src/pages/projects/components/CardProject.astro";
const $$url = "/projects/components/CardProject";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$CardProject,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$CardProject as $, _page as _, $$ArrowViewProject as a };
