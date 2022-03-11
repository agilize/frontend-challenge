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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\nconst SalaryContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_0__.createContext)(null);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SalaryContext);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9TYWxhcnlDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFxQztBQUVyQyxLQUFLLENBQUNDLGFBQWEsaUJBQUdELG9EQUFhLENBQUMsSUFBSTtBQUV4QyxpRUFBZUMsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vY29udGV4dHMvU2FsYXJ5Q29udGV4dC5qcz8wZDhhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5cbmNvbnN0IFNhbGFyeUNvbnRleHQgPSBjcmVhdGVDb250ZXh0KG51bGwpO1xuXG5leHBvcnQgZGVmYXVsdCBTYWxhcnlDb250ZXh0OyJdLCJuYW1lcyI6WyJjcmVhdGVDb250ZXh0IiwiU2FsYXJ5Q29udGV4dCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/SalaryContext.js\n");

/***/ }),

/***/ "./contexts/SalaryWrapper.js":
/*!***********************************!*\
  !*** ./contexts/SalaryWrapper.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SalaryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SalaryContext */ \"./contexts/SalaryContext.js\");\n\n\n\nconst SalaryWrapper = ({ children  })=>{\n    const { 0: salarioBruto , 1: setSalarioBruto  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: salarioBase , 1: setSalarioBase  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: totalDesconto , 1: setTotalDesconto  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: dependentes , 1: setDependente  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: salarioLiquido , 1: setSalarioLiquido  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)('');\n    const { 0: valorINSS , 1: setValorINSS  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: valorIRRF , 1: setValorIRRF  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: porcentagemINSS , 1: setPorcentagemINSS  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    const { 0: porcentagemIRRF , 1: setPorcentagemIRRF  } = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SalaryContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            valorINSS,\n            setValorINSS,\n            valorIRRF,\n            setValorIRRF,\n            salarioBruto,\n            setSalarioBruto,\n            salarioBase,\n            setSalarioBase,\n            totalDesconto,\n            setTotalDesconto,\n            dependentes,\n            setDependente,\n            salarioLiquido,\n            setSalarioLiquido,\n            porcentagemINSS,\n            setPorcentagemINSS,\n            porcentagemIRRF,\n            setPorcentagemIRRF\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/contexts/SalaryWrapper.js\",\n        lineNumber: 16,\n        columnNumber: 5\n    }, undefined));\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SalaryWrapper);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9TYWxhcnlXcmFwcGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBMkM7QUFDQTtBQUUzQyxLQUFLLENBQUNHLGFBQWEsSUFBSSxDQUFDLENBQUNDLFFBQVEsRUFBQyxDQUFDLEdBQUssQ0FBQztJQUN2QyxLQUFLLE1BQUVDLFlBQVksTUFBRUMsZUFBZSxNQUFJTCwrQ0FBUSxDQUFDLENBQUM7SUFDbEQsS0FBSyxNQUFFTSxXQUFXLE1BQUVDLGNBQWMsTUFBSVAsK0NBQVEsQ0FBQyxDQUFDO0lBQ2hELEtBQUssTUFBRVEsYUFBYSxNQUFFQyxnQkFBZ0IsTUFBSVQsK0NBQVEsQ0FBQyxDQUFDO0lBQ3BELEtBQUssTUFBRVUsV0FBVyxNQUFFQyxhQUFhLE1BQUlYLCtDQUFRLENBQUMsQ0FBQztJQUMvQyxLQUFLLE1BQUVZLGNBQWMsTUFBRUMsaUJBQWlCLE1BQUliLCtDQUFRLENBQUMsQ0FBRTtJQUN2RCxLQUFLLE1BQUVjLFNBQVMsTUFBRUMsWUFBWSxNQUFJZiwrQ0FBUSxDQUFDLENBQUM7SUFDNUMsS0FBSyxNQUFFZ0IsU0FBUyxNQUFFQyxZQUFZLE1BQUlqQiwrQ0FBUSxDQUFDLENBQUM7SUFDNUMsS0FBSyxNQUFFa0IsZUFBZSxNQUFFQyxrQkFBa0IsTUFBSW5CLCtDQUFRLENBQUMsQ0FBQztJQUN4RCxLQUFLLE1BQUVvQixlQUFlLE1BQUVDLGtCQUFrQixNQUFJckIsK0NBQVEsQ0FBQyxDQUFDO0lBRXhELE1BQU0sNkVBQ0hDLCtEQUFzQjtRQUNyQnNCLEtBQUssRUFBRSxDQUFDO1lBQ05ULFNBQVM7WUFDVEMsWUFBWTtZQUNaQyxTQUFTO1lBQ1RDLFlBQVk7WUFDWmIsWUFBWTtZQUNaQyxlQUFlO1lBQ2ZDLFdBQVc7WUFDWEMsY0FBYztZQUNkQyxhQUFhO1lBQ2JDLGdCQUFnQjtZQUNoQkMsV0FBVztZQUNYQyxhQUFhO1lBQ2JDLGNBQWM7WUFDZEMsaUJBQWlCO1lBQ2pCSyxlQUFlO1lBQ2ZDLGtCQUFrQjtZQUNsQkMsZUFBZTtZQUNmQyxrQkFBa0I7UUFDcEIsQ0FBQztrQkFFQWxCLFFBQVE7Ozs7OztBQUdmLENBQUM7QUFFRCxpRUFBZUQsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYXBwLy4vY29udGV4dHMvU2FsYXJ5V3JhcHBlci5qcz9kNWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2FsYXJ5Q29udGV4dCBmcm9tICcuL1NhbGFyeUNvbnRleHQnO1xuXG5jb25zdCBTYWxhcnlXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2FsYXJpb0JydXRvLCBzZXRTYWxhcmlvQnJ1dG9dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzYWxhcmlvQmFzZSwgc2V0U2FsYXJpb0Jhc2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0b3RhbERlc2NvbnRvLCBzZXRUb3RhbERlc2NvbnRvXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGVwZW5kZW50ZXMsIHNldERlcGVuZGVudGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzYWxhcmlvTGlxdWlkbywgc2V0U2FsYXJpb0xpcXVpZG9dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdmFsb3JJTlNTLCBzZXRWYWxvcklOU1NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt2YWxvcklSUkYsIHNldFZhbG9ySVJSRl0gPSB1c2VTdGF0ZSgwKTtcbiAgY29uc3QgW3BvcmNlbnRhZ2VtSU5TUywgc2V0UG9yY2VudGFnZW1JTlNTXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbcG9yY2VudGFnZW1JUlJGLCBzZXRQb3JjZW50YWdlbUlSUkZdID0gdXNlU3RhdGUoMCk7XG5cbiAgcmV0dXJuIChcbiAgICA8U2FsYXJ5Q29udGV4dC5Qcm92aWRlclxuICAgICAgdmFsdWU9e3tcbiAgICAgICAgdmFsb3JJTlNTLFxuICAgICAgICBzZXRWYWxvcklOU1MsXG4gICAgICAgIHZhbG9ySVJSRixcbiAgICAgICAgc2V0VmFsb3JJUlJGLFxuICAgICAgICBzYWxhcmlvQnJ1dG8sXG4gICAgICAgIHNldFNhbGFyaW9CcnV0byxcbiAgICAgICAgc2FsYXJpb0Jhc2UsXG4gICAgICAgIHNldFNhbGFyaW9CYXNlLFxuICAgICAgICB0b3RhbERlc2NvbnRvLFxuICAgICAgICBzZXRUb3RhbERlc2NvbnRvLFxuICAgICAgICBkZXBlbmRlbnRlcyxcbiAgICAgICAgc2V0RGVwZW5kZW50ZSxcbiAgICAgICAgc2FsYXJpb0xpcXVpZG8sXG4gICAgICAgIHNldFNhbGFyaW9MaXF1aWRvLFxuICAgICAgICBwb3JjZW50YWdlbUlOU1MsXG4gICAgICAgIHNldFBvcmNlbnRhZ2VtSU5TUyxcbiAgICAgICAgcG9yY2VudGFnZW1JUlJGLFxuICAgICAgICBzZXRQb3JjZW50YWdlbUlSUkYsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NhbGFyeUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYWxhcnlXcmFwcGVyOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNhbGFyeUNvbnRleHQiLCJTYWxhcnlXcmFwcGVyIiwiY2hpbGRyZW4iLCJzYWxhcmlvQnJ1dG8iLCJzZXRTYWxhcmlvQnJ1dG8iLCJzYWxhcmlvQmFzZSIsInNldFNhbGFyaW9CYXNlIiwidG90YWxEZXNjb250byIsInNldFRvdGFsRGVzY29udG8iLCJkZXBlbmRlbnRlcyIsInNldERlcGVuZGVudGUiLCJzYWxhcmlvTGlxdWlkbyIsInNldFNhbGFyaW9MaXF1aWRvIiwidmFsb3JJTlNTIiwic2V0VmFsb3JJTlNTIiwidmFsb3JJUlJGIiwic2V0VmFsb3JJUlJGIiwicG9yY2VudGFnZW1JTlNTIiwic2V0UG9yY2VudGFnZW1JTlNTIiwicG9yY2VudGFnZW1JUlJGIiwic2V0UG9yY2VudGFnZW1JUlJGIiwiUHJvdmlkZXIiLCJ2YWx1ZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/SalaryWrapper.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../styles/globals.scss */ \"./styles/globals.scss\");\n/* harmony import */ var _styles_globals_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_scss__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SalaryWrapper__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../contexts/SalaryWrapper */ \"./contexts/SalaryWrapper.js\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_contexts_SalaryWrapper__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/home/ederu/Workspace/frontend-challenge/pages/_app.js\",\n            lineNumber: 7,\n            columnNumber: 5\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/pages/_app.js\",\n        lineNumber: 6,\n        columnNumber: 3\n    }, this));\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (MyApp);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBK0I7QUFDc0I7U0FFNUNDLEtBQUssQ0FBQyxDQUFDLENBQUNDLFNBQVMsR0FBRUMsU0FBUyxFQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3hDLE1BQU0sNkVBQ0xILCtEQUFhOzhGQUNYRSxTQUFTO2VBQUtDLFNBQVM7Ozs7Ozs7Ozs7O0FBRzVCLENBQUM7QUFFRCxpRUFBZUYsS0FBSyIsInNvdXJjZXMiOlsid2VicGFjazovL2FwcC8uL3BhZ2VzL19hcHAuanM/ZTBhZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL3N0eWxlcy9nbG9iYWxzLnNjc3MnXG5pbXBvcnQgU2FsYXJ5V3JhcHBlciBmcm9tICcuLi9jb250ZXh0cy9TYWxhcnlXcmFwcGVyJztcblxuZnVuY3Rpb24gTXlBcHAoeyBDb21wb25lbnQsIHBhZ2VQcm9wcyB9KSB7XG4gIHJldHVybiAoXG4gIDxTYWxhcnlXcmFwcGVyPlxuICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cbiAgPC9TYWxhcnlXcmFwcGVyPlxuICApXG59XG5cbmV4cG9ydCBkZWZhdWx0IE15QXBwXG4iXSwibmFtZXMiOlsiU2FsYXJ5V3JhcHBlciIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

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