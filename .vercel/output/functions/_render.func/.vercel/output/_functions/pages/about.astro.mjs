/* empty css                                 */
import { c as createComponent, r as renderTemplate, b as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_CwYh5Sm4.mjs';
import { $ as $$Layout } from '../chunks/Layout_UQbdRoig.mjs';
import { $ as $$Subtitle } from '../chunks/Subtitle_DBCx690k.mjs';
import { $ as $$Image } from '../chunks/_astro_assets_ps_rHew3.mjs';
export { renderers } from '../renderers.mjs';

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Projects - Luis Montiel" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<main class="mt-5"> ${renderComponent($$result2, "Subtitle", $$Subtitle, { "subtitle": "About" })} <div class="w-full py-5"> ${renderComponent($$result2, "Image", $$Image, { "src": "/public/cover-about.webp", "class": "rounded-md", "alt": "cover profile image", "height": 638, "width": 1088 })} </div> <div class="prose max-w-[100%]"> <p>
I am a 21-year-old software developer from Montelíbano, Córdoba,
                with a diverse background that blends passion and technical
                training. Since graduating from high school, I’ve actively
                sought opportunities to expand my knowledge in technology,
                leading me to join the MINTIC 2022 project—a bootcamp led by the
                Universidad del Norte de Barranquilla in partnership with
                Colombia’s Ministry of Information and Communications
                Technology. This experience was pivotal, as it allowed me to
                dive into software development and witness the real-world impact
                technology can have on communities and businesses. During the
                bootcamp, I not only learned to code but also developed skills
                in teamwork, project management, and user-centered design.
                Equipped with expertise in technologies like Django, React, and
                Next.js, I am focused on building practical, well-designed
                solutions. My goal is to continue learning and applying my
                knowledge to contribute to the technological development of my
                country and, eventually, to take my career to the next level on
                the global tech stage.
</p> </div> </main> ` })}`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/pages/about/index.astro", void 0);

const $$file = "/home/ldmontielm/Documentos/Projects/portfolio-app/src/pages/about/index.astro";
const $$url = "/about";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Index,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
