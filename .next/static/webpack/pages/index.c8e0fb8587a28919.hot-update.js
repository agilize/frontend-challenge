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

/***/ "./components/InputContainer/index.jsx":
/*!*********************************************!*\
  !*** ./components/InputContainer/index.jsx ***!
  \*********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InputContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ButtonCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonCalculator */ \"./components/InputContainer/ButtonCalculator/index.jsx\");\n/* harmony import */ var _InputElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputElement */ \"./components/InputContainer/InputElement/index.jsx\");\n/* harmony import */ var _SelectDependent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectDependent */ \"./components/InputContainer/SelectDependent/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction InputContainer() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), salarioBruto = ref[0], setSalarioBruto = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), totalDesconto = ref1[0], setTotalDesconto = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(0), dependentes = ref2[0], setDependente = ref2[1];\n    var handleChangeSalarioBruto = function(event) {\n        setSalarioBruto(event.target.value);\n    };\n    var handleChangeTotalDesconto = function(event) {\n        setTotalDesconto(event.target.value);\n    };\n    var handleChangeDepedentes = function(event) {\n        setDependentes(event.target.value);\n    };\n    var incrementarDepedentes = function() {\n        setDependente(dependentes + 1);\n    };\n    var decrementarDepedentes = function() {\n        if (dependentes <= 0) {\n            return;\n        }\n        setDependente(dependentes - 1);\n    };\n    console.log(salarioBruto);\n    console.log(totalDesconto);\n    console.log(dependentes);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input__container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                question: \"Qual seu sal\\xe1rio bruto?\",\n                description: \"Sal\\xe1rio bruto sem descontos\",\n                handleChange: handleChangeSalarioBruto\n            }, void 0, false, {\n                fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/index.jsx\",\n                lineNumber: 41,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                question: \"Total de descontos\",\n                description: \"Pens\\xe3o aliment\\xedcia, plano de sa\\xfade...\",\n                handleChange: handleChangeTotalDesconto\n            }, void 0, false, {\n                fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/index.jsx\",\n                lineNumber: 46,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SelectDependent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleChange: handleChangeDepedentes,\n                incrementarDepedentes: incrementarDepedentes,\n                decrementarDepedentes: decrementarDepedentes\n            }, void 0, false, {\n                fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/index.jsx\",\n                lineNumber: 51,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonCalculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/index.jsx\",\n                lineNumber: 57,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/index.jsx\",\n        lineNumber: 40,\n        columnNumber: 5\n    }, this));\n};\n_s(InputContainer, \"pL9RTYYgC2cKTpdDjlol7PVc58Y=\");\n_c = InputContainer;\nvar _c;\n$RefreshReg$(_c, \"InputContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDUjtBQUNNO0FBQ2Y7O0FBRWpCLFFBQVEsQ0FBQ0ksY0FBYyxHQUFHLENBQUM7O0lBQ3hDLEdBQUssQ0FBbUNELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTVDRSxZQUFZLEdBQXFCRixHQUFZLEtBQS9CRyxlQUFlLEdBQUlILEdBQVk7SUFDcEQsR0FBSyxDQUFxQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUNJLGFBQWEsR0FBc0JKLElBQVksS0FBaENLLGdCQUFnQixHQUFJTCxJQUFZO0lBQ3RELEdBQUssQ0FBZ0NBLElBQVcsR0FBWEEsK0NBQVEsQ0FBQyxDQUFDLEdBQXhDTSxXQUFXLEdBQW1CTixJQUFXLEtBQTVCTyxhQUFhLEdBQUlQLElBQVc7SUFFaEQsR0FBSyxDQUFDUSx3QkFBd0IsR0FBRyxRQUFRLENBQVBDLEtBQUssRUFBSyxDQUFDO1FBQzNDTixlQUFlLENBQUNNLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO0lBQ3BDLENBQUM7SUFFRCxHQUFLLENBQUNDLHlCQUF5QixHQUFHLFFBQVEsQ0FBUEgsS0FBSyxFQUFLLENBQUM7UUFDNUNKLGdCQUFnQixDQUFDSSxLQUFLLENBQUNDLE1BQU0sQ0FBQ0MsS0FBSztJQUNyQyxDQUFDO0lBRUQsR0FBSyxDQUFDRSxzQkFBc0IsR0FBRyxRQUFRLENBQVBKLEtBQUssRUFBSyxDQUFDO1FBQ3pDSyxjQUFjLENBQUNMLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO0lBQ25DLENBQUM7SUFFRCxHQUFLLENBQUNJLHFCQUFxQixHQUFHLFFBQ2hDLEdBRHNDLENBQUM7UUFDbkNSLGFBQWEsQ0FBQ0QsV0FBVyxHQUFHLENBQUM7SUFDL0IsQ0FBQztJQUVELEdBQUssQ0FBQ1UscUJBQXFCLEdBQUcsUUFDaEMsR0FEc0MsQ0FBQztRQUNuQyxFQUFFLEVBQUVWLFdBQVcsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUNyQixNQUFNO1FBQ1IsQ0FBQztRQUNEQyxhQUFhLENBQUNELFdBQVcsR0FBRyxDQUFDO0lBQy9CLENBQUM7SUFHRFcsT0FBTyxDQUFDQyxHQUFHLENBQUNoQixZQUFZO0lBQ3hCZSxPQUFPLENBQUNDLEdBQUcsQ0FBQ2QsYUFBYTtJQUN6QmEsT0FBTyxDQUFDQyxHQUFHLENBQUNaLFdBQVc7SUFFdkIsTUFBTSw2RUFDSGEsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBa0I7O3dGQUM5QnRCLHFEQUFZO2dCQUNYdUIsUUFBUSxFQUFDLENBQXlCO2dCQUNqQ0MsV0FBVSxFQUFDLENBQTZCO2dCQUN4Q0MsWUFBVyxFQUFFZix3QkFBd0I7Ozs7Ozt3RkFFdkNWLHFEQUFZO2dCQUNYdUIsUUFBUSxFQUFDLENBQW9CO2dCQUM3QkMsV0FBVyxFQUFDLENBQXVDO2dCQUNuREMsWUFBWSxFQUFFWCx5QkFBeUI7Ozs7Ozt3RkFFeENiLHdEQUFlO2dCQUVkd0IsWUFBWSxFQUFFVixzQkFBc0I7Z0JBQ3BDRSxxQkFBcUIsRUFBRUEscUJBQXFCO2dCQUM1Q0MscUJBQXFCLEVBQUVBLHFCQUFxQjs7Ozs7O3dGQUU3Q25CLHlEQUFnQjs7Ozs7Ozs7Ozs7QUFHdkIsQ0FBQztHQXREdUJJLGNBQWM7S0FBZEEsY0FBYyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL2luZGV4LmpzeD9jYTQ3Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCdXR0b25DYWxjdWxhdG9yIGZyb20gJy4vQnV0dG9uQ2FsY3VsYXRvcic7XG5pbXBvcnQgSW5wdXRFbGVtZW50IGZyb20gJy4vSW5wdXRFbGVtZW50JztcbmltcG9ydCBTZWxlY3REZXBlbmRlbnQgZnJvbSAnLi9TZWxlY3REZXBlbmRlbnQnO1xuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIElucHV0Q29udGFpbmVyKCkge1xuICBjb25zdCBbc2FsYXJpb0JydXRvLCBzZXRTYWxhcmlvQnJ1dG9dID0gdXNlU3RhdGUoJycpO1xuICBjb25zdCBbdG90YWxEZXNjb250bywgc2V0VG90YWxEZXNjb250b10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFtkZXBlbmRlbnRlcywgc2V0RGVwZW5kZW50ZV0gPSB1c2VTdGF0ZSgwKTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VTYWxhcmlvQnJ1dG8gPSAoZXZlbnQpID0+IHtcbiAgICBzZXRTYWxhcmlvQnJ1dG8oZXZlbnQudGFyZ2V0LnZhbHVlKTtcbiAgfTtcblxuICBjb25zdCBoYW5kbGVDaGFuZ2VUb3RhbERlc2NvbnRvID0gKGV2ZW50KSA9PiB7XG4gICAgc2V0VG90YWxEZXNjb250byhldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZURlcGVkZW50ZXMgPSAoZXZlbnQpID0+IHtcbiAgICBzZXREZXBlbmRlbnRlcyhldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGluY3JlbWVudGFyRGVwZWRlbnRlcyA9ICgpID0+IHtcbiAgICBzZXREZXBlbmRlbnRlKGRlcGVuZGVudGVzICsgMSk7XG4gIH07XG5cbiAgY29uc3QgZGVjcmVtZW50YXJEZXBlZGVudGVzID0gKCkgPT4ge1xuICAgIGlmIChkZXBlbmRlbnRlcyA8PSAwKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHNldERlcGVuZGVudGUoZGVwZW5kZW50ZXMgLSAxKTtcbiAgfTtcblxuXG4gIGNvbnNvbGUubG9nKHNhbGFyaW9CcnV0byk7XG4gIGNvbnNvbGUubG9nKHRvdGFsRGVzY29udG8pO1xuICBjb25zb2xlLmxvZyhkZXBlbmRlbnRlcyk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImlucHV0X19jb250YWluZXJcIj5cbiAgICAgIDxJbnB1dEVsZW1lbnRcbiAgICAgICAgcXVlc3Rpb249XCJRdWFsIHNldSBzYWzDoXJpbyBicnV0bz9cIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIlNhbMOhcmlvIGJydXRvIHNlbSBkZXNjb250b3NcIlxuICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZVNhbGFyaW9CcnV0b31cbiAgICAgIC8+XG4gICAgICA8SW5wdXRFbGVtZW50XG4gICAgICAgIHF1ZXN0aW9uPVwiVG90YWwgZGUgZGVzY29udG9zXCJcbiAgICAgICAgZGVzY3JpcHRpb249XCJQZW5zw6NvIGFsaW1lbnTDrWNpYSwgcGxhbm8gZGUgc2HDumRlLi4uXCJcbiAgICAgICAgaGFuZGxlQ2hhbmdlPXtoYW5kbGVDaGFuZ2VUb3RhbERlc2NvbnRvfVxuICAgICAgLz5cbiAgICAgIDxTZWxlY3REZXBlbmRlbnRcbiAgICAgIFxuICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZURlcGVkZW50ZXN9XG4gICAgICAgIGluY3JlbWVudGFyRGVwZWRlbnRlcz17aW5jcmVtZW50YXJEZXBlZGVudGVzfVxuICAgICAgICBkZWNyZW1lbnRhckRlcGVkZW50ZXM9e2RlY3JlbWVudGFyRGVwZWRlbnRlc31cbiAgICAgIC8+XG4gICAgICA8QnV0dG9uQ2FsY3VsYXRvciAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIkJ1dHRvbkNhbGN1bGF0b3IiLCJJbnB1dEVsZW1lbnQiLCJTZWxlY3REZXBlbmRlbnQiLCJ1c2VTdGF0ZSIsIklucHV0Q29udGFpbmVyIiwic2FsYXJpb0JydXRvIiwic2V0U2FsYXJpb0JydXRvIiwidG90YWxEZXNjb250byIsInNldFRvdGFsRGVzY29udG8iLCJkZXBlbmRlbnRlcyIsInNldERlcGVuZGVudGUiLCJoYW5kbGVDaGFuZ2VTYWxhcmlvQnJ1dG8iLCJldmVudCIsInRhcmdldCIsInZhbHVlIiwiaGFuZGxlQ2hhbmdlVG90YWxEZXNjb250byIsImhhbmRsZUNoYW5nZURlcGVkZW50ZXMiLCJzZXREZXBlbmRlbnRlcyIsImluY3JlbWVudGFyRGVwZWRlbnRlcyIsImRlY3JlbWVudGFyRGVwZWRlbnRlcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJxdWVzdGlvbiIsImRlc2NyaXB0aW9uIiwiaGFuZGxlQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InputContainer/index.jsx\n");

/***/ })

});