"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./components/TotalContainer/index.jsx":
/*!*********************************************!*\
  !*** ./components/TotalContainer/index.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ TotalContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _public_imagens_border_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../public/imagens/border.png */ \"./public/imagens/border.png\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../contexts/SalaryContext */ \"./contexts/SalaryContext.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction TotalContainer() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useContext)(_contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_3__[\"default\"]), salarioBruto = ref.salarioBruto, porcentagemINSS = ref.porcentagemINSS, porcentagemIRRF = ref.porcentagemIRRF, salarioLiquido = ref.salarioLiquido, valorINSS = ref.valorINSS, ValorIRRF = ref.ValorIRRF;\n    var salario = parseFloat(salarioBruto).toFixed(2).replace(/(\\d)(?=(\\d{3})+(?!\\d))/g, '$1,');\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"total__container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"total__title-resume\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Seu sal\\xe1rio l\\xedquido ser\\xe1\"\n                    }, void 0, false, {\n                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"total__title-total\",\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: _public_imagens_border_png__WEBPACK_IMPORTED_MODULE_1__[\"default\"].src,\n                                alt: \"\"\n                            }, void 0, false, {\n                                fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                lineNumber: 17,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                className: \"total__title-totaltext\",\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                                        children: \"R$\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                        lineNumber: 19,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                                        children: salarioLiquido\n                                    }, void 0, false, {\n                                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                        lineNumber: 20,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                lineNumber: 18,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                        lineNumber: 16,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                lineNumber: 14,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"total__title-complete\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        children: \"Como o c\\xe1lculo \\xe9 feito?\"\n                    }, void 0, false, {\n                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                        lineNumber: 26,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Sal\\xe1rio bruto\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                        lineNumber: 29,\n                                        columnNumber: 13\n                                    }, this),\n                                    salario !== 'NaN' ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"R$ \",\n                                            salario\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 34\n                                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"R$ 0,00\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                        lineNumber: 30,\n                                        columnNumber: 56\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"INSS(\",\n                                            porcentagemINSS,\n                                            \"%)\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                        lineNumber: 34,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"R$ \",\n                                            valorINSS\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                        lineNumber: 36,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                lineNumber: 33,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"IRRF(\",\n                                            porcentagemIRRF,\n                                            \"%)\"\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                        lineNumber: 40,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"R$ \",\n                                            ValorIRRF\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                        lineNumber: 41,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                lineNumber: 39,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Outros descontos\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                        lineNumber: 45,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"R$ \",\n                                            2.8\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                        lineNumber: 46,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                lineNumber: 44,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"hr\", {}, void 0, false, {\n                                fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: [\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: \"Sal\\xe1rio l\\xedquido\"\n                                    }, void 0, false, {\n                                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                        lineNumber: 51,\n                                        columnNumber: 13\n                                    }, this),\n                                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                        children: [\n                                            \"R$ \",\n                                            salarioLiquido\n                                        ]\n                                    }, void 0, true, {\n                                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                        lineNumber: 52,\n                                        columnNumber: 13\n                                    }, this)\n                                ]\n                            }, void 0, true, {\n                                fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                                lineNumber: 50,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/components/TotalContainer/index.jsx\",\n        lineNumber: 13,\n        columnNumber: 5\n    }, this));\n};\n_s(TotalContainer, \"khF0GI51SIUTxn3PXIzQSD6CVUo=\");\n_c = TotalContainer;\nvar _c;\n$RefreshReg$(_c, \"TotalContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1RvdGFsQ29udGFpbmVyL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUNvRDtBQUNsQjtBQUNzQjs7QUFFekMsUUFBUSxDQUFDRyxjQUFjLEdBQUcsQ0FBQzs7SUFDeEMsR0FBSyxDQUNIRixHQUF5QixHQUF6QkEsaURBQVUsQ0FBQ0MsK0RBQWEsR0FEbEJFLFlBQVksR0FDbEJILEdBQXlCLENBRG5CRyxZQUFZLEVBQUVDLGVBQWUsR0FDbkNKLEdBQXlCLENBRExJLGVBQWUsRUFBRUMsZUFBZSxHQUNwREwsR0FBeUIsQ0FEWUssZUFBZSxFQUFFQyxjQUFjLEdBQ3BFTixHQUF5QixDQUQ2Qk0sY0FBYyxFQUFFQyxTQUFTLEdBQy9FUCxHQUF5QixDQUQ2Q08sU0FBUyxFQUFFQyxTQUFTLEdBQzFGUixHQUF5QixDQUR3RFEsU0FBUztJQUc1RixHQUFHLENBQUNDLE9BQU8sR0FBR0MsVUFBVSxDQUFDUCxZQUFZLEVBQUVRLE9BQU8sQ0FBQyxDQUFDLEVBQUVDLE9BQU8sNEJBQTRCLENBQUs7SUFFMUYsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBa0I7O3dGQUM5QkQsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQXFCOztnR0FDakNDLENBQUU7a0NBQUMsQ0FBd0I7Ozs7OztnR0FDeEJGLENBQUE7d0JBQUNDLFNBQVMsRUFBQyxDQUFvQjs7d0dBQ2hDRSxDQUFHO2dDQUFDQyxHQUFHLEVBQUVsQixzRUFBVTtnQ0FBRW1CLEdBQUcsRUFBQyxDQUFFOzs7Ozs7d0dBQzNCTCxDQUFHO2dDQUFDQyxTQUFTLEVBQUMsQ0FBd0I7O2dIQUNwQ0ssQ0FBRTtrREFBQyxDQUFFOzs7Ozs7Z0hBQ0xDLENBQUU7a0RBQUVkLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozt3RkFLeEJPLENBQUc7Z0JBQUNDLFNBQVMsRUFBQyxDQUF1Qjs7Z0dBQ25DQyxDQUFFO2tDQUFDLENBQXVCOzs7Ozs7Z0dBQ3hCRixDQUFDOzt3R0FDREEsQ0FBRzs7Z0hBQ0RRLENBQUM7a0RBQUMsQ0FBYTs7Ozs7O29DQUNkWixPQUFNLEtBQUssQ0FBSyxtRkFBSVksQ0FBQzs7NENBQUMsQ0FBRzs0Q0FBQ1osT0FBTzs7Ozs7OzJIQUFTWSxDQUFDO2tEQUFDLENBQU87Ozs7Ozs7Ozs7Ozt3R0FHdERSLENBQUc7O2dIQUNEUSxDQUFDOzs0Q0FBQyxDQUFLOzRDQUFDakIsZUFBZTs0Q0FBQyxDQUFFOzs7Ozs7O2dIQUUxQmlCLENBQUM7OzRDQUFDLENBQUc7NENBQUNkLFNBQVM7Ozs7Ozs7Ozs7Ozs7d0dBR2pCTSxDQUFHOztnSEFDRFEsQ0FBQzs7NENBQUMsQ0FBSzs0Q0FBQ2hCLGVBQWU7NENBQUMsQ0FBRTs7Ozs7OztnSEFDMUJnQixDQUFDOzs0Q0FBQyxDQUFHOzRDQUFDYixTQUFTOzs7Ozs7Ozs7Ozs7O3dHQUdqQkssQ0FBRzs7Z0hBQ0RRLENBQUM7a0RBQUMsQ0FBZ0I7Ozs7OztnSEFDbEJBLENBQUM7OzRDQUFDLENBQUc7QUFBRSwrQ0FBSzs7Ozs7Ozs7Ozs7Ozt3R0FFZEMsQ0FBRTs7Ozs7d0dBRUZULENBQUc7O2dIQUNEUSxDQUFDO2tEQUFDLENBQWU7Ozs7OztnSEFDakJBLENBQUM7OzRDQUFDLENBQUc7NENBQUNmLGNBQWM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNakMsQ0FBQztHQXBEdUJKLGNBQWM7S0FBZEEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1RvdGFsQ29udGFpbmVyL2luZGV4LmpzeD8xN2VjIl0sInNvdXJjZXNDb250ZW50IjpbIlxuaW1wb3J0IGJvcmRlciBmcm9tICcuLi8uLi9wdWJsaWMvaW1hZ2Vucy9ib3JkZXIucG5nJztcbmltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2FsYXJ5Q29udGV4dCBmcm9tICcuLi8uLi9jb250ZXh0cy9TYWxhcnlDb250ZXh0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gVG90YWxDb250YWluZXIoKSB7XG4gIGNvbnN0IHsgc2FsYXJpb0JydXRvLCBwb3JjZW50YWdlbUlOU1MsIHBvcmNlbnRhZ2VtSVJSRiwgc2FsYXJpb0xpcXVpZG8sIHZhbG9ySU5TUywgVmFsb3JJUlJGIH0gPVxuICAgIHVzZUNvbnRleHQoU2FsYXJ5Q29udGV4dCk7XG4gXG4gIGxldCBzYWxhcmlvID0gcGFyc2VGbG9hdChzYWxhcmlvQnJ1dG8pLnRvRml4ZWQoMikucmVwbGFjZSgvKFxcZCkoPz0oXFxkezN9KSsoPyFcXGQpKS9nLCAnJDEsJylcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWxfX2NvbnRhaW5lclwiPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbF9fdGl0bGUtcmVzdW1lXCI+XG4gICAgICAgIDxoMT5TZXUgc2Fsw6FyaW8gbMOtcXVpZG8gc2Vyw6E8L2gxPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvdGFsX190aXRsZS10b3RhbFwiPlxuICAgICAgICAgIDxpbWcgc3JjPXtib3JkZXIuc3JjfSBhbHQ9XCJcIiAvPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG90YWxfX3RpdGxlLXRvdGFsdGV4dFwiPlxuICAgICAgICAgICAgPGgzPlIkPC9oMz5cbiAgICAgICAgICAgIDxoMj57c2FsYXJpb0xpcXVpZG99PC9oMj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b3RhbF9fdGl0bGUtY29tcGxldGVcIj5cbiAgICAgICAgPGgxPkNvbW8gbyBjw6FsY3VsbyDDqSBmZWl0bz88L2gxPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5TYWzDoXJpbyBicnV0bzwvcD5cbiAgICAgICAgICAgIHtzYWxhcmlvICE9PSAnTmFOJyA/IDxwPlIkIHtzYWxhcmlvfTwvcD4gOiA8cD5SJCAwLDAwPC9wPn1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5JTlNTKHtwb3JjZW50YWdlbUlOU1N9JSk8L3A+XG5cbiAgICAgICAgICAgIDxwPlIkIHt2YWxvcklOU1N9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPklSUkYoe3BvcmNlbnRhZ2VtSVJSRn0lKTwvcD5cbiAgICAgICAgICAgIDxwPlIkIHtWYWxvcklSUkZ9PC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPk91dHJvcyBkZXNjb250b3M8L3A+XG4gICAgICAgICAgICA8cD5SJCB7KDIuODAwKX08L3A+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGhyIC8+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+U2Fsw6FyaW8gbMOtcXVpZG88L3A+XG4gICAgICAgICAgICA8cD5SJCB7c2FsYXJpb0xpcXVpZG99PC9wPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbImJvcmRlciIsInVzZUNvbnRleHQiLCJTYWxhcnlDb250ZXh0IiwiVG90YWxDb250YWluZXIiLCJzYWxhcmlvQnJ1dG8iLCJwb3JjZW50YWdlbUlOU1MiLCJwb3JjZW50YWdlbUlSUkYiLCJzYWxhcmlvTGlxdWlkbyIsInZhbG9ySU5TUyIsIlZhbG9ySVJSRiIsInNhbGFyaW8iLCJwYXJzZUZsb2F0IiwidG9GaXhlZCIsInJlcGxhY2UiLCJkaXYiLCJjbGFzc05hbWUiLCJoMSIsImltZyIsInNyYyIsImFsdCIsImgzIiwiaDIiLCJwIiwiaHIiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/TotalContainer/index.jsx\n");

/***/ })

});