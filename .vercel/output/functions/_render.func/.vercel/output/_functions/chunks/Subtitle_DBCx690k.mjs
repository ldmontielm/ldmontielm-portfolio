import { c as createComponent, r as renderTemplate, m as maybeRenderHead, a as createAstro } from './astro/server_CwYh5Sm4.mjs';
import 'clsx';

const $$Astro = createAstro();
const $$Subtitle = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Subtitle;
  const { subtitle } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="space-y-3"> <h3 class="text-xl font-semibold">${subtitle}</h3> <hr> </div>`;
}, "/home/ldmontielm/Documentos/Projects/portfolio-app/src/components/ui/Subtitle.astro", void 0);

export { $$Subtitle as $ };
