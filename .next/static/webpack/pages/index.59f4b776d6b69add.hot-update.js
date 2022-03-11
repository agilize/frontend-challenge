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

/***/ "./components/InputContainer/ButtonCalculator/index.jsx":
/*!**************************************************************!*\
  !*** ./components/InputContainer/ButtonCalculator/index.jsx ***!
  \**************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonCalculator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/SalaryContext */ \"./contexts/SalaryContext.js\");\n/* harmony import */ var _utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/calcularINSS */ \"./utils/calcularINSS.js\");\n/* harmony import */ var _utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/calcularIRRF */ \"./utils/calcularIRRF.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ButtonCalculator(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), setSalarioLiquido = ref.setSalarioLiquido, setPorcentagemIRRF = ref.setPorcentagemIRRF, setPorcentagemINSS = ref.setPorcentagemINSS;\n    var salarioBrutoInput = props.salarioBrutoInput, totalDescontoInput = props.totalDescontoInput, dependentesInput = props.dependentesInput;\n    var handleCalcular = function() {\n        var salarioBrutoINSS = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput);\n        setPorcentagemINSS(salarioBrutoINSS[1]);\n        var salarioBrutoIRRF = (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput);\n        setPorcentagemIRRF(salarioBrutoIRRF[2]);\n        console.log('dependentesInput', dependentesInput);\n        var salarioBase = 0;\n        var salarioBaseINSS = 0;\n        if (dependentesInput >= 1) {\n            salarioBase = salarioBrutoInput - dependentesInput * 189.59;\n            salarioBaseINSS = salarioBase - (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBase)[0];\n        } else {\n            salarioBaseINSS = salarioBrutoInput - (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput)[0];\n        }\n        var IRRF = salarioBaseINSS * (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[0] - (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[1];\n        var salarioLiquido = salarioBaseINSS - IRRF - totalDescontoInput;\n        setSalarioLiquido(salarioLiquido);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"button__main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleCalcular,\n            children: \"CALCULAR\"\n        }, void 0, false, {\n            fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n            lineNumber: 38,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n        lineNumber: 37,\n        columnNumber: 5\n    }, this));\n};\n_s(ButtonCalculator, \"3fhy9QwsZwClkE63y9KcmPSqycI=\");\n_c = ButtonCalculator;\nvar _c;\n$RefreshReg$(_c, \"ButtonCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL0J1dHRvbkNhbGN1bGF0b3IvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUN5QjtBQUNMO0FBQ0E7O0FBRXZDLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUMvQyxHQUFLLENBQWlFTCxHQUF5QixHQUF6QkEsaURBQVUsQ0FBQ0MsK0RBQWEsR0FBdEZLLGlCQUFpQixHQUE2Q04sR0FBeUIsQ0FBdkZNLGlCQUFpQixFQUFFQyxrQkFBa0IsR0FBeUJQLEdBQXlCLENBQXBFTyxrQkFBa0IsRUFBRUMsa0JBQWtCLEdBQUtSLEdBQXlCLENBQWhEUSxrQkFBa0I7SUFDakUsR0FBSyxDQUFHQyxpQkFBaUIsR0FBMkNKLEtBQUssQ0FBakVJLGlCQUFpQixFQUFFQyxrQkFBa0IsR0FBdUJMLEtBQUssQ0FBOUNLLGtCQUFrQixFQUFFQyxnQkFBZ0IsR0FBS04sS0FBSyxDQUExQk0sZ0JBQWdCO0lBRS9ELEdBQUssQ0FBQ0MsY0FBYyxHQUFHLFFBQ3pCLEdBRCtCLENBQUM7UUFDNUIsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR1gsK0RBQVksQ0FBQ08saUJBQWlCO1FBQ3ZERCxrQkFBa0IsQ0FBQ0ssZ0JBQWdCLENBQUMsQ0FBQztRQUVyQyxHQUFLLENBQUNDLGdCQUFnQixHQUFHWCwrREFBWSxDQUFDTSxpQkFBaUI7UUFDdkRGLGtCQUFrQixDQUFDTyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXJDQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFrQixtQkFBRUwsZ0JBQWdCO1FBQ2hELEdBQUcsQ0FBQ00sV0FBVyxHQUFHLENBQUM7UUFDbkIsR0FBRyxDQUFDQyxlQUFlLEdBQUcsQ0FBQztRQUV2QixFQUFFLEVBQUVQLGdCQUFnQixJQUFJLENBQUMsRUFBRSxDQUFDO1lBQzFCTSxXQUFXLEdBQUdSLGlCQUFpQixHQUFJRSxnQkFBZ0IsR0FBRyxNQUFNO1lBQzVETyxlQUFlLEdBQUdELFdBQVcsR0FBR2YsK0RBQVksQ0FBQ2UsV0FBVyxFQUFFLENBQUM7UUFDN0QsQ0FBQyxNQUFNLENBQUM7WUFDTkMsZUFBZSxHQUFHVCxpQkFBaUIsR0FBR1AsK0RBQVksQ0FBQ08saUJBQWlCLEVBQUUsQ0FBQztRQUN6RSxDQUFDO1FBRUMsR0FBSyxDQUFDVSxJQUFJLEdBQ1BELGVBQWUsR0FBR2YsK0RBQVksQ0FBQ00saUJBQWlCLEVBQUUsQ0FBQyxJQUFLTiwrREFBWSxDQUFDTSxpQkFBaUIsRUFBRSxDQUFDO1FBQzVGLEdBQUssQ0FBQ1csY0FBYyxHQUFHRixlQUFlLEdBQUdDLElBQUksR0FBR1Qsa0JBQWtCO1FBRWxFSixpQkFBaUIsQ0FBQ2MsY0FBYztJQUVwQyxDQUFDO0lBRUQsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBYzs4RkFDMUJDLENBQU07WUFBQ0MsT0FBTyxFQUFFWixjQUFjO3NCQUFFLENBQVE7Ozs7Ozs7Ozs7O0FBRy9DLENBQUM7R0FuQ3VCUixnQkFBZ0I7S0FBaEJBLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL0J1dHRvbkNhbGN1bGF0b3IvaW5kZXguanN4PzVlOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTYWxhcnlDb250ZXh0IGZyb20gJy4uLy4uLy4uL2NvbnRleHRzL1NhbGFyeUNvbnRleHQnO1xuaW1wb3J0IGNhbGN1bGFySU5TUyBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxjdWxhcklOU1MnO1xuaW1wb3J0IGNhbGN1bGFySVJSRiBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxjdWxhcklSUkYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25DYWxjdWxhdG9yKHByb3BzKSB7XG4gIGNvbnN0IHsgc2V0U2FsYXJpb0xpcXVpZG8sIHNldFBvcmNlbnRhZ2VtSVJSRiwgc2V0UG9yY2VudGFnZW1JTlNTIH0gPSB1c2VDb250ZXh0KFNhbGFyeUNvbnRleHQpO1xuICBjb25zdCB7IHNhbGFyaW9CcnV0b0lucHV0LCB0b3RhbERlc2NvbnRvSW5wdXQsIGRlcGVuZGVudGVzSW5wdXQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGhhbmRsZUNhbGN1bGFyID0gKCkgPT4ge1xuICAgIGNvbnN0IHNhbGFyaW9CcnV0b0lOU1MgPSBjYWxjdWxhcklOU1Moc2FsYXJpb0JydXRvSW5wdXQpO1xuICAgIHNldFBvcmNlbnRhZ2VtSU5TUyhzYWxhcmlvQnJ1dG9JTlNTWzFdKTtcblxuICAgIGNvbnN0IHNhbGFyaW9CcnV0b0lSUkYgPSBjYWxjdWxhcklSUkYoc2FsYXJpb0JydXRvSW5wdXQpO1xuICAgIHNldFBvcmNlbnRhZ2VtSVJSRihzYWxhcmlvQnJ1dG9JUlJGWzJdKTtcblxuICAgIGNvbnNvbGUubG9nKCdkZXBlbmRlbnRlc0lucHV0JywgZGVwZW5kZW50ZXNJbnB1dCk7XG4gICAgbGV0IHNhbGFyaW9CYXNlID0gMDtcbiAgICBsZXQgc2FsYXJpb0Jhc2VJTlNTID0gMDtcblxuICAgIGlmIChkZXBlbmRlbnRlc0lucHV0ID49IDEpIHtcbiAgICAgIHNhbGFyaW9CYXNlID0gc2FsYXJpb0JydXRvSW5wdXQgLSAoZGVwZW5kZW50ZXNJbnB1dCAqIDE4OS41OSk7XG4gICAgICBzYWxhcmlvQmFzZUlOU1MgPSBzYWxhcmlvQmFzZSAtIGNhbGN1bGFySU5TUyhzYWxhcmlvQmFzZSlbMF07XG4gICAgfSBlbHNlIHtcbiAgICAgIHNhbGFyaW9CYXNlSU5TUyA9IHNhbGFyaW9CcnV0b0lucHV0IC0gY2FsY3VsYXJJTlNTKHNhbGFyaW9CcnV0b0lucHV0KVswXTtcbiAgICB9XG5cbiAgICAgIGNvbnN0IElSUkYgPVxuICAgICAgICAoc2FsYXJpb0Jhc2VJTlNTICogY2FsY3VsYXJJUlJGKHNhbGFyaW9CcnV0b0lucHV0KVswXSkgLSBjYWxjdWxhcklSUkYoc2FsYXJpb0JydXRvSW5wdXQpWzFdO1xuICAgICAgY29uc3Qgc2FsYXJpb0xpcXVpZG8gPSBzYWxhcmlvQmFzZUlOU1MgLSBJUlJGIC0gdG90YWxEZXNjb250b0lucHV0O1xuICAgICAgXG4gICAgICBzZXRTYWxhcmlvTGlxdWlkbyhzYWxhcmlvTGlxdWlkbyk7XG4gICAgXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbl9fbWFpblwiPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYWxjdWxhcn0+Q0FMQ1VMQVI8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiU2FsYXJ5Q29udGV4dCIsImNhbGN1bGFySU5TUyIsImNhbGN1bGFySVJSRiIsIkJ1dHRvbkNhbGN1bGF0b3IiLCJwcm9wcyIsInNldFNhbGFyaW9MaXF1aWRvIiwic2V0UG9yY2VudGFnZW1JUlJGIiwic2V0UG9yY2VudGFnZW1JTlNTIiwic2FsYXJpb0JydXRvSW5wdXQiLCJ0b3RhbERlc2NvbnRvSW5wdXQiLCJkZXBlbmRlbnRlc0lucHV0IiwiaGFuZGxlQ2FsY3VsYXIiLCJzYWxhcmlvQnJ1dG9JTlNTIiwic2FsYXJpb0JydXRvSVJSRiIsImNvbnNvbGUiLCJsb2ciLCJzYWxhcmlvQmFzZSIsInNhbGFyaW9CYXNlSU5TUyIsIklSUkYiLCJzYWxhcmlvTGlxdWlkbyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InputContainer/ButtonCalculator/index.jsx\n");

/***/ })

});