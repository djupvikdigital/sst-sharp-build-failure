"use strict";
(() => {
var exports = {};
exports.id = 405;
exports.ids = [405];
exports.modules = {

/***/ 603:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.a(module, async (__webpack_handle_async_dependencies__, __webpack_async_result__) => { try {
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Home),
/* harmony export */   "getStaticProps": () => (/* binding */ getStaticProps)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(17);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _exact_realty_esbuild_plugin_responsive_images__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(882);
/* harmony import */ var mdx_bundler__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(214);
/* harmony import */ var mdx_bundler__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(mdx_bundler__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var mdx_bundler_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(228);
/* harmony import */ var mdx_bundler_client__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(mdx_bundler_client__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(968);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_6__);
var __webpack_async_dependencies__ = __webpack_handle_async_dependencies__([_exact_realty_esbuild_plugin_responsive_images__WEBPACK_IMPORTED_MODULE_2__]);
_exact_realty_esbuild_plugin_responsive_images__WEBPACK_IMPORTED_MODULE_2__ = (__webpack_async_dependencies__.then ? (await __webpack_async_dependencies__)() : __webpack_async_dependencies__)[0];







function Home({ code  }) {
    const Component = (0,react__WEBPACK_IMPORTED_MODULE_5__.useMemo)(()=>(0,mdx_bundler_client__WEBPACK_IMPORTED_MODULE_4__.getMDXComponent)(code), [
        code
    ]);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {
        children: [
            /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)((next_head__WEBPACK_IMPORTED_MODULE_6___default()), {
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("title", {
                        children: "Test"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("meta", {
                        name: "viewport",
                        content: "width=device-width, initial-scale=1"
                    })
                ]
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx(Component, {})
        ]
    });
}
const getStaticProps = async ()=>{
    const cwd = process.cwd();
    const source = `
import * as metaImage from 'respimg+file:./test-image.jpg?sizes=1280w'

<img srcSet={metaImage.sources[0][1]}/>
  `;
    const outdir = path__WEBPACK_IMPORTED_MODULE_1___default().join(cwd, "public");
    const { code  } = await (0,mdx_bundler__WEBPACK_IMPORTED_MODULE_3__.bundleMDX)({
        bundleDirectory: outdir,
        bundlePath: "/",
        cwd,
        esbuildOptions: (options)=>{
            options.plugins = [
                (0,_exact_realty_esbuild_plugin_responsive_images__WEBPACK_IMPORTED_MODULE_2__["default"])(),
                ...options.plugins ? options.plugins : []
            ];
            return options;
        },
        source
    });
    return {
        props: {
            code
        }
    };
};

__webpack_async_result__();
} catch(e) { __webpack_async_result__(e); } });

/***/ }),

/***/ 214:
/***/ ((module) => {

module.exports = require("mdx-bundler");

/***/ }),

/***/ 228:
/***/ ((module) => {

module.exports = require("mdx-bundler/client");

/***/ }),

/***/ 968:
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ 689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ }),

/***/ 882:
/***/ ((module) => {

module.exports = import("@exact-realty/esbuild-plugin-responsive-images");;

/***/ }),

/***/ 17:
/***/ ((module) => {

module.exports = require("path");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(603));
module.exports = __webpack_exports__;

})();