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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ InputContainer; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _ButtonCalculator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ButtonCalculator */ \"./components/InputContainer/ButtonCalculator/index.jsx\");\n/* harmony import */ var _InputElement__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./InputElement */ \"./components/InputContainer/InputElement/index.jsx\");\n/* harmony import */ var _SelectDependent__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SelectDependent */ \"./components/InputContainer/SelectDependent/index.jsx\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction InputContainer() {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), salarioBruto = ref[0], setSalarioBruto = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(''), totalDesconto = ref1[0], setTotalDesconto = ref1[1];\n    var ref2 = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(), dependentes = ref2[0], setDependentes = ref2[1];\n    var handleChangeSalarioBruto = function(event) {\n        setSalarioBruto(event.target.value);\n    };\n    var handleChangeTotalDesconto = function(event) {\n        setTotalDesconto(event.target.value);\n    };\n    var handleChangeDepedentes = function(event) {\n        setDependentes(event.target.value);\n    };\n    console.log(salarioBruto);\n    console.log(totalDesconto);\n    console.log(dependentes);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"input__container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                question: \"Qual seu sal\\xe1rio bruto?\",\n                description: \"Sal\\xe1rio bruto sem descontos\",\n                handleChange: handleChangeSalarioBruto\n            }, void 0, false, {\n                fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/index.jsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_InputElement__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                question: \"Total de descontos\",\n                description: \"Pens\\xe3o aliment\\xedcia, plano de sa\\xfade...\",\n                handleChange: handleChangeTotalDesconto\n            }, void 0, false, {\n                fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/index.jsx\",\n                lineNumber: 34,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_SelectDependent__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                handleChange: handleChangeDepedentes\n            }, void 0, false, {\n                fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/index.jsx\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_ButtonCalculator__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/index.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/index.jsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this));\n};\n_s(InputContainer, \"NuCEwhTNaXoxiPZsp8OE2o91vug=\");\n_c = InputContainer;\nvar _c;\n$RefreshReg$(_c, \"InputContainer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL2luZGV4LmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDUjtBQUNNO0FBQ2Y7O0FBRWpCLFFBQVEsQ0FBQ0ksY0FBYyxHQUFHLENBQUM7O0lBQ3hDLEdBQUssQ0FBbUNELEdBQVksR0FBWkEsK0NBQVEsQ0FBQyxDQUFFLElBQTVDRSxZQUFZLEdBQXFCRixHQUFZLEtBQS9CRyxlQUFlLEdBQUlILEdBQVk7SUFDcEQsR0FBSyxDQUFxQ0EsSUFBWSxHQUFaQSwrQ0FBUSxDQUFDLENBQUUsSUFBOUNJLGFBQWEsR0FBc0JKLElBQVksS0FBaENLLGdCQUFnQixHQUFJTCxJQUFZO0lBQ3RELEdBQUssQ0FBaUNBLElBQVUsR0FBVkEsK0NBQVEsSUFBdkNNLFdBQVcsR0FBb0JOLElBQVUsS0FBNUJPLGNBQWMsR0FBSVAsSUFBVTtJQUVoRCxHQUFLLENBQUNRLHdCQUF3QixHQUFHLFFBQVEsQ0FBUEMsS0FBSyxFQUFLLENBQUM7UUFDM0NOLGVBQWUsQ0FBQ00sS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7SUFDcEMsQ0FBQztJQUVELEdBQUssQ0FBQ0MseUJBQXlCLEdBQUcsUUFBUSxDQUFQSCxLQUFLLEVBQUssQ0FBQztRQUM1Q0osZ0JBQWdCLENBQUNJLEtBQUssQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLO0lBQ3JDLENBQUM7SUFFRCxHQUFLLENBQUNFLHNCQUFzQixHQUFHLFFBQVEsQ0FBUEosS0FBSyxFQUFLLENBQUM7UUFDekNGLGNBQWMsQ0FBQ0UsS0FBSyxDQUFDQyxNQUFNLENBQUNDLEtBQUs7SUFDbkMsQ0FBQztJQUVERyxPQUFPLENBQUNDLEdBQUcsQ0FBQ2IsWUFBWTtJQUN4QlksT0FBTyxDQUFDQyxHQUFHLENBQUNYLGFBQWE7SUFDekJVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDVCxXQUFXO0lBRXZCLE1BQU0sNkVBQ0hVLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWtCOzt3RkFDOUJuQixxREFBWTtnQkFDWG9CLFFBQVEsRUFBQyxDQUF5QjtnQkFDakNDLFdBQVUsRUFBQyxDQUE2QjtnQkFDeENDLFlBQVcsRUFBRVosd0JBQXdCOzs7Ozs7d0ZBRXZDVixxREFBWTtnQkFDWG9CLFFBQVEsRUFBQyxDQUFvQjtnQkFDN0JDLFdBQVcsRUFBQyxDQUF1QztnQkFDbkRDLFlBQVksRUFBRVIseUJBQXlCOzs7Ozs7d0ZBRXhDYix3REFBZTtnQkFDZHFCLFlBQVksRUFBRVAsc0JBQXNCOzs7Ozs7d0ZBRXJDaEIseURBQWdCOzs7Ozs7Ozs7OztBQUd2QixDQUFDO0dBdkN1QkksY0FBYztLQUFkQSxjQUFjIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5wdXRDb250YWluZXIvaW5kZXguanN4P2NhNDciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEJ1dHRvbkNhbGN1bGF0b3IgZnJvbSAnLi9CdXR0b25DYWxjdWxhdG9yJztcbmltcG9ydCBJbnB1dEVsZW1lbnQgZnJvbSAnLi9JbnB1dEVsZW1lbnQnO1xuaW1wb3J0IFNlbGVjdERlcGVuZGVudCBmcm9tICcuL1NlbGVjdERlcGVuZGVudCc7XG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0JztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSW5wdXRDb250YWluZXIoKSB7XG4gIGNvbnN0IFtzYWxhcmlvQnJ1dG8sIHNldFNhbGFyaW9CcnV0b10gPSB1c2VTdGF0ZSgnJyk7XG4gIGNvbnN0IFt0b3RhbERlc2NvbnRvLCBzZXRUb3RhbERlc2NvbnRvXSA9IHVzZVN0YXRlKCcnKTtcbiAgY29uc3QgW2RlcGVuZGVudGVzLCBzZXREZXBlbmRlbnRlc10gPSB1c2VTdGF0ZSgpO1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVNhbGFyaW9CcnV0byA9IChldmVudCkgPT4ge1xuICAgIHNldFNhbGFyaW9CcnV0byhldmVudC50YXJnZXQudmFsdWUpO1xuICB9O1xuXG4gIGNvbnN0IGhhbmRsZUNoYW5nZVRvdGFsRGVzY29udG8gPSAoZXZlbnQpID0+IHtcbiAgICBzZXRUb3RhbERlc2NvbnRvKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc3QgaGFuZGxlQ2hhbmdlRGVwZWRlbnRlcyA9IChldmVudCkgPT4ge1xuICAgIHNldERlcGVuZGVudGVzKGV2ZW50LnRhcmdldC52YWx1ZSk7XG4gIH07XG5cbiAgY29uc29sZS5sb2coc2FsYXJpb0JydXRvKTtcbiAgY29uc29sZS5sb2codG90YWxEZXNjb250byk7XG4gIGNvbnNvbGUubG9nKGRlcGVuZGVudGVzKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiaW5wdXRfX2NvbnRhaW5lclwiPlxuICAgICAgPElucHV0RWxlbWVudFxuICAgICAgICBxdWVzdGlvbj1cIlF1YWwgc2V1IHNhbMOhcmlvIGJydXRvP1wiXG4gICAgICAgIGRlc2NyaXB0aW9uPVwiU2Fsw6FyaW8gYnJ1dG8gc2VtIGRlc2NvbnRvc1wiXG4gICAgICAgIGhhbmRsZUNoYW5nZT17aGFuZGxlQ2hhbmdlU2FsYXJpb0JydXRvfVxuICAgICAgLz5cbiAgICAgIDxJbnB1dEVsZW1lbnRcbiAgICAgICAgcXVlc3Rpb249XCJUb3RhbCBkZSBkZXNjb250b3NcIlxuICAgICAgICBkZXNjcmlwdGlvbj1cIlBlbnPDo28gYWxpbWVudMOtY2lhLCBwbGFubyBkZSBzYcO6ZGUuLi5cIlxuICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZVRvdGFsRGVzY29udG99XG4gICAgICAvPlxuICAgICAgPFNlbGVjdERlcGVuZGVudFxuICAgICAgICBoYW5kbGVDaGFuZ2U9e2hhbmRsZUNoYW5nZURlcGVkZW50ZXN9XG4gICAgICAvPlxuICAgICAgPEJ1dHRvbkNhbGN1bGF0b3IgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJCdXR0b25DYWxjdWxhdG9yIiwiSW5wdXRFbGVtZW50IiwiU2VsZWN0RGVwZW5kZW50IiwidXNlU3RhdGUiLCJJbnB1dENvbnRhaW5lciIsInNhbGFyaW9CcnV0byIsInNldFNhbGFyaW9CcnV0byIsInRvdGFsRGVzY29udG8iLCJzZXRUb3RhbERlc2NvbnRvIiwiZGVwZW5kZW50ZXMiLCJzZXREZXBlbmRlbnRlcyIsImhhbmRsZUNoYW5nZVNhbGFyaW9CcnV0byIsImV2ZW50IiwidGFyZ2V0IiwidmFsdWUiLCJoYW5kbGVDaGFuZ2VUb3RhbERlc2NvbnRvIiwiaGFuZGxlQ2hhbmdlRGVwZWRlbnRlcyIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJxdWVzdGlvbiIsImRlc2NyaXB0aW9uIiwiaGFuZGxlQ2hhbmdlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InputContainer/index.jsx\n");

/***/ })

});