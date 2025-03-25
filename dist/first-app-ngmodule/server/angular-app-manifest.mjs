
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "preload": [
      "chunk-P2CYMTY4.js",
      "chunk-H43Q3DCX.js",
      "chunk-WNRBVXRO.js"
    ],
    "route": "/"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-X3WTFYS5.js",
      "chunk-H43Q3DCX.js"
    ],
    "route": "/about"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-BZBMVKNW.js",
      "chunk-WNRBVXRO.js"
    ],
    "route": "/admin"
  },
  {
    "renderMode": 2,
    "preload": [
      "chunk-B53ONVEC.js",
      "chunk-WNRBVXRO.js"
    ],
    "route": "/courses"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 24315, hash: '251ed0524c4def0193dfe08da73e2f06ba811a297d93dfbd21be856f13cc46cf', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 17889, hash: 'ad57e2f94182fd78427365953ee53f2f94763f274a72f8dc512f30b254de245b', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'about/index.html': {size: 31318, hash: 'dde619d883130dbfccd3d510e30a2618115c568de0820afaa308e195465408da', text: () => import('./assets-chunks/about_index_html.mjs').then(m => m.default)},
    'courses/index.html': {size: 30774, hash: '798f452d80e9d25275f573355abadb7c5ab0e024387c27d4bc524676557c49b2', text: () => import('./assets-chunks/courses_index_html.mjs').then(m => m.default)},
    'admin/index.html': {size: 33223, hash: 'f14f767a585fa5f7130fd27c3536f45da37a2d7231914493e2bf3427e7e44ae5', text: () => import('./assets-chunks/admin_index_html.mjs').then(m => m.default)},
    'index.html': {size: 57961, hash: 'd78a8e6087a0734482cf1245cc01d81aeca02ff36509b9292a38d0be93b5f363', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-A63ODABY.css': {size: 96019, hash: 'ejFJOTIHwX8', text: () => import('./assets-chunks/styles-A63ODABY_css.mjs').then(m => m.default)}
  },
};
