"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./contexts/SalaryWrapper.js":
/*!***********************************!*\
  !*** ./contexts/SalaryWrapper.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _SalaryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SalaryContext */ \"./contexts/SalaryContext.js\");\n\n\n\nvar _this = undefined;\nvar _s = $RefreshSig$();\nvar SalaryWrapper = function(param) {\n    var children = param.children;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), salarioBruto = ref[0], setSalarioBruto = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), salarioBase = ref1[0], setSalarioBase = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), totalDesconto = ref2[0], setTotalDesconto = ref2[1];\n    var ref3 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), dependentes = ref3[0], setDependente = ref3[1];\n    var ref4 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(''), salarioLiquido = ref4[0], setSalarioLiquido = ref4[1];\n    var ref5 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), porcentagemINSS = ref5[0], setPorcentagemINSS = ref5[1];\n    var ref6 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), porcentagemIRRF = ref6[0], setPorcentagemIRRF = ref6[1];\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SalaryContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"].Provider, {\n        value: {\n            salarioBruto: salarioBruto,\n            setSalarioBruto: setSalarioBruto,\n            salarioBase: salarioBase,\n            setSalarioBase: setSalarioBase,\n            totalDesconto: totalDesconto,\n            setTotalDesconto: setTotalDesconto,\n            dependentes: dependentes,\n            setDependente: setDependente,\n            salarioLiquido: salarioLiquido,\n            setSalarioLiquido: setSalarioLiquido,\n            porcentagemINSS: porcentagemINSS,\n            setPorcentagemINSS: setPorcentagemINSS,\n            porcentagemIRRF: porcentagemIRRF,\n            setPorcentagemIRPF: setPorcentagemIRPF\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/contexts/SalaryWrapper.js\",\n        lineNumber: 14,\n        columnNumber: 5\n    }, _this));\n};\n_s(SalaryWrapper, \"rdARh2vzNO7ydkTjojJK5GOYqo4=\");\n_c = SalaryWrapper;\n/* harmony default export */ __webpack_exports__[\"default\"] = (SalaryWrapper);\nvar _c;\n$RefreshReg$(_c, \"SalaryWrapper\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb250ZXh0cy9TYWxhcnlXcmFwcGVyLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBMkM7QUFDQTs7O0FBRTNDLEdBQUssQ0FBQ0csYUFBYSxHQUFHLFFBQVEsUUFBVSxDQUFDO1FBQWhCQyxRQUFRLFNBQVJBLFFBQVE7O0lBQy9CLEdBQUssQ0FBbUNILEdBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQTNDSSxZQUFZLEdBQXFCSixHQUFXLEtBQTlCSyxlQUFlLEdBQUlMLEdBQVc7SUFDbkQsR0FBSyxDQUFpQ0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBekNNLFdBQVcsR0FBb0JOLElBQVcsS0FBN0JPLGNBQWMsR0FBSVAsSUFBVztJQUNqRCxHQUFLLENBQXFDQSxJQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUE3Q1EsYUFBYSxHQUFzQlIsSUFBVyxLQUEvQlMsZ0JBQWdCLEdBQUlULElBQVc7SUFDckQsR0FBSyxDQUFnQ0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBeENVLFdBQVcsR0FBbUJWLElBQVcsS0FBNUJXLGFBQWEsR0FBSVgsSUFBVztJQUNoRCxHQUFLLENBQXVDQSxJQUFZLEdBQVpBLCtDQUFRLENBQUMsQ0FBRSxJQUFoRFksY0FBYyxHQUF1QlosSUFBWSxLQUFqQ2EsaUJBQWlCLEdBQUliLElBQVk7SUFDeEQsR0FBSyxDQUF5Q0EsSUFBVyxHQUFYQSwrQ0FBUSxDQUFDLENBQUMsR0FBakRjLGVBQWUsR0FBd0JkLElBQVcsS0FBakNlLGtCQUFrQixHQUFJZixJQUFXO0lBQ3pELEdBQUssQ0FBeUNBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQWpEZ0IsZUFBZSxHQUF3QmhCLElBQVcsS0FBakNpQixrQkFBa0IsR0FBSWpCLElBQVc7SUFFekQsTUFBTSw2RUFDSEMsK0RBQXNCO1FBQ3JCa0IsS0FBSyxFQUFFLENBQUM7WUFDTmYsWUFBWSxFQUFaQSxZQUFZO1lBQ1pDLGVBQWUsRUFBZkEsZUFBZTtZQUNmQyxXQUFXLEVBQVhBLFdBQVc7WUFDWEMsY0FBYyxFQUFkQSxjQUFjO1lBQ2RDLGFBQWEsRUFBYkEsYUFBYTtZQUNiQyxnQkFBZ0IsRUFBaEJBLGdCQUFnQjtZQUNoQkMsV0FBVyxFQUFYQSxXQUFXO1lBQ1hDLGFBQWEsRUFBYkEsYUFBYTtZQUNiQyxjQUFjLEVBQWRBLGNBQWM7WUFDZEMsaUJBQWlCLEVBQWpCQSxpQkFBaUI7WUFDakJDLGVBQWUsRUFBZkEsZUFBZTtZQUNmQyxrQkFBa0IsRUFBbEJBLGtCQUFrQjtZQUNsQkMsZUFBZSxFQUFmQSxlQUFlO1lBQ2ZJLGtCQUFrQixFQUFsQkEsa0JBQWtCO1FBQ3BCLENBQUM7a0JBRUFqQixRQUFROzs7Ozs7QUFHZixDQUFDO0dBL0JLRCxhQUFhO0tBQWJBLGFBQWE7QUFpQ25CLCtEQUFlQSxhQUFhLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29udGV4dHMvU2FsYXJ5V3JhcHBlci5qcz9kNWM2Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2FsYXJ5Q29udGV4dCBmcm9tICcuL1NhbGFyeUNvbnRleHQnO1xuXG5jb25zdCBTYWxhcnlXcmFwcGVyID0gKHsgY2hpbGRyZW4gfSkgPT4ge1xuICBjb25zdCBbc2FsYXJpb0JydXRvLCBzZXRTYWxhcmlvQnJ1dG9dID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzYWxhcmlvQmFzZSwgc2V0U2FsYXJpb0Jhc2VdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFt0b3RhbERlc2NvbnRvLCBzZXRUb3RhbERlc2NvbnRvXSA9IHVzZVN0YXRlKDApO1xuICBjb25zdCBbZGVwZW5kZW50ZXMsIHNldERlcGVuZGVudGVdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtzYWxhcmlvTGlxdWlkbywgc2V0U2FsYXJpb0xpcXVpZG9dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbcG9yY2VudGFnZW1JTlNTLCBzZXRQb3JjZW50YWdlbUlOU1NdID0gdXNlU3RhdGUoMCk7XG4gIGNvbnN0IFtwb3JjZW50YWdlbUlSUkYsIHNldFBvcmNlbnRhZ2VtSVJSRl0gPSB1c2VTdGF0ZSgwKTtcblxuICByZXR1cm4gKFxuICAgIDxTYWxhcnlDb250ZXh0LlByb3ZpZGVyXG4gICAgICB2YWx1ZT17e1xuICAgICAgICBzYWxhcmlvQnJ1dG8sXG4gICAgICAgIHNldFNhbGFyaW9CcnV0byxcbiAgICAgICAgc2FsYXJpb0Jhc2UsXG4gICAgICAgIHNldFNhbGFyaW9CYXNlLFxuICAgICAgICB0b3RhbERlc2NvbnRvLFxuICAgICAgICBzZXRUb3RhbERlc2NvbnRvLFxuICAgICAgICBkZXBlbmRlbnRlcyxcbiAgICAgICAgc2V0RGVwZW5kZW50ZSxcbiAgICAgICAgc2FsYXJpb0xpcXVpZG8sXG4gICAgICAgIHNldFNhbGFyaW9MaXF1aWRvLFxuICAgICAgICBwb3JjZW50YWdlbUlOU1MsXG4gICAgICAgIHNldFBvcmNlbnRhZ2VtSU5TUyxcbiAgICAgICAgcG9yY2VudGFnZW1JUlJGLFxuICAgICAgICBzZXRQb3JjZW50YWdlbUlSUEYsXG4gICAgICB9fVxuICAgID5cbiAgICAgIHtjaGlsZHJlbn1cbiAgICA8L1NhbGFyeUNvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTYWxhcnlXcmFwcGVyOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VTdGF0ZSIsIlNhbGFyeUNvbnRleHQiLCJTYWxhcnlXcmFwcGVyIiwiY2hpbGRyZW4iLCJzYWxhcmlvQnJ1dG8iLCJzZXRTYWxhcmlvQnJ1dG8iLCJzYWxhcmlvQmFzZSIsInNldFNhbGFyaW9CYXNlIiwidG90YWxEZXNjb250byIsInNldFRvdGFsRGVzY29udG8iLCJkZXBlbmRlbnRlcyIsInNldERlcGVuZGVudGUiLCJzYWxhcmlvTGlxdWlkbyIsInNldFNhbGFyaW9MaXF1aWRvIiwicG9yY2VudGFnZW1JTlNTIiwic2V0UG9yY2VudGFnZW1JTlNTIiwicG9yY2VudGFnZW1JUlJGIiwic2V0UG9yY2VudGFnZW1JUlJGIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsInNldFBvcmNlbnRhZ2VtSVJQRiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./contexts/SalaryWrapper.js\n");

/***/ })

});