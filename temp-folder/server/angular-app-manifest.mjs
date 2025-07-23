
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/My-Portfolio/home",
    "route": "/My-Portfolio"
  },
  {
    "renderMode": 2,
    "route": "/My-Portfolio/home"
  },
  {
    "renderMode": 2,
    "route": "/My-Portfolio/about"
  },
  {
    "renderMode": 2,
    "route": "/My-Portfolio/skills"
  },
  {
    "renderMode": 2,
    "route": "/My-Portfolio/projects"
  },
  {
    "renderMode": 2,
    "route": "/My-Portfolio/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5745, hash: 'd9fd33158c2c4759092879d4ad0594d078236dd38c0fcc96937385a7eb60dd69', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1724, hash: '09ecb8a3f460bf386bfb0da723a3739923976ff2bcfcdd27581c335e02de82ea', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'My-Portfolio/about/index.html': {size: 24058, hash: '49d96f7067a42f44bd77212bdf9eeade6eeec06f95d3d48c9a61e7bbc75652c7', text: () => import('./assets-chunks/My-Portfolio_about_index_html.mjs').then(m => m.default)},
    'My-Portfolio/contact/index.html': {size: 24241, hash: 'dd526f21f4b0354994ae111b9326258c1b2c56233cc2077795ee8e7a7d990b40', text: () => import('./assets-chunks/My-Portfolio_contact_index_html.mjs').then(m => m.default)},
    'My-Portfolio/projects/index.html': {size: 22536, hash: '46da4d3a036e2afc2a1c6ac5941c4c02c1c4302857088481ab2a595338d252d2', text: () => import('./assets-chunks/My-Portfolio_projects_index_html.mjs').then(m => m.default)},
    'My-Portfolio/skills/index.html': {size: 21746, hash: '4ba7305c576ee72fed69292321ebd1440b9e44d8caf16f34d9d2bbc185ba02b2', text: () => import('./assets-chunks/My-Portfolio_skills_index_html.mjs').then(m => m.default)},
    'My-Portfolio/home/index.html': {size: 20993, hash: '32731f9d98dff45db67ec5944785fb427eadad543df29556b54b04d941ec0992', text: () => import('./assets-chunks/My-Portfolio_home_index_html.mjs').then(m => m.default)},
    'styles-BVJQD57C.css': {size: 230873, hash: 'YU+im7r2LDs', text: () => import('./assets-chunks/styles-BVJQD57C_css.mjs').then(m => m.default)}
  },
};
