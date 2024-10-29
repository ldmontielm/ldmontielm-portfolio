import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_lKpQtWd4.mjs';
import { manifest } from './manifest_B2lWQxIc.mjs';

const serverIslandMap = new Map([
]);;

const _page0 = () => import('./pages/about.astro.mjs');
const _page1 = () => import('./pages/projects/components/cardproject.astro.mjs');
const _page2 = () => import('./pages/projects/_slug_.astro.mjs');
const _page3 = () => import('./pages/projects.astro.mjs');
const _page4 = () => import('./pages/index.astro.mjs');
const _page5 = () => import('./pages/_image.astro.mjs');
const pageMap = new Map([
    ["src/pages/about/index.astro", _page0],
    ["src/pages/projects/components/CardProject.astro", _page1],
    ["src/pages/projects/[slug].astro", _page2],
    ["src/pages/projects/index.astro", _page3],
    ["src/pages/index.astro", _page4],
    ["node_modules/.pnpm/astro@5.0.0-beta.5_rollup@4.24.0_sass-embedded@1.80.4_sass@1.80.4_typescript@5.6.3/node_modules/astro/dist/assets/endpoint/generic.js", _page5]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "511f9226-31fa-4b9b-82b8-6d5aba991fb9",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
