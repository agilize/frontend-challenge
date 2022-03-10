/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./contexts/SalaryContext.js":
/*!***********************************!*\
  !*** ./contexts/SalaryContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"SalaryContext\": () => (/* binding */ SalaryContext),\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst SalaryContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nconst SalaryProvider = ({ children  })=>{\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(SalaryContext.Provider, {\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/contexts/SalaryContext.js\",\n        lineNumber: 6,\n        columnNumber: 10\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SalaryProvider);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9TYWxhcnlDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBcUM7QUFFOUIsS0FBSyxDQUFDQyxhQUFhLGlCQUFHRCxvREFBYSxDQUFDLENBQUMsQ0FBQztBQUU3QyxLQUFLLENBQUNFLGNBQWMsSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUN4QyxNQUFNLDZFQUFFRixhQUFhLENBQUNHLFFBQVE7a0JBQUVELFFBQVE7Ozs7OztBQUUxQyxDQUFDO0FBRUQsaUVBQWVELGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL2NvbnRleHRzL1NhbGFyeUNvbnRleHQuanM/MGQ4YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuXG5leHBvcnQgY29uc3QgU2FsYXJ5Q29udGV4dCA9IGNyZWF0ZUNvbnRleHQoe30pO1xuXG5jb25zdCBTYWxhcnlQcm92aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IHtcbiAgcmV0dXJuIDxTYWxhcnlDb250ZXh0LlByb3ZpZGVyPntjaGlsZHJlbn08L1NhbGFyeUNvbnRleHQuUHJvdmlkZXI+XG4gIFxufTtcblxuZXhwb3J0IGRlZmF1bHQgU2FsYXJ5UHJvdmlkZXI7Il0sIm5hbWVzIjpbImNyZWF0ZUNvbnRleHQiLCJTYWxhcnlDb250ZXh0IiwiU2FsYXJ5UHJvdmlkZXIiLCJjaGlsZHJlbiIsIlByb3ZpZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./contexts/SalaryContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SalaryContext */ \"./contexts/SalaryContext.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/ederu/Workspace/frontend-challenge/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDdUI7U0FFN0NDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0xILCtEQUFjOzhGQUNaRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzVCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnXG5pbXBvcnQgU2FsYXJ5UHJvdmlkZXIgZnJvbSAnLi4vY29udGV4dHMvU2FsYXJ5Q29udGV4dCc7XG5cbmZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xuICByZXR1cm4gKFxuICA8U2FsYXJ5UHJvdmlkZXI+XG4gICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICA8L1NhbGFyeVByb3ZpZGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiU2FsYXJ5UHJvdmlkZXIiLCJNeUFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.scss":
/*!*****************************!*\
  !*** ./styles/globals.scss ***!
  \*****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();