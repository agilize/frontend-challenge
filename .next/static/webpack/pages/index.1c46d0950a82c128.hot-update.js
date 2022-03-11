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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonCalculator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/SalaryContext */ \"./contexts/SalaryContext.js\");\n/* harmony import */ var _utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/calcularINSS */ \"./utils/calcularINSS.js\");\n/* harmony import */ var _utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/calcularIRRF */ \"./utils/calcularIRRF.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ButtonCalculator(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), setPorcentagemIRPF = ref.setPorcentagemIRPF, setPorcentagemINSS = ref.setPorcentagemINSS;\n    var salarioBrutoInput = props.salarioBrutoInput, totalDescontoInput = props.totalDescontoInput, dependentesInput = props.dependentesInput;\n    var handleCalcular = function() {\n        var salarioBrutoINSS = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput);\n        setPorcentagemINSS(salarioBrutoINSS[1]);\n        var salarioBrutoIRRF = (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput);\n        setPorcentagemIRRF(salarioBrutoIRRF[2]);\n        // IRRF = (salário bruto – desconto INSS) x alíquota IRRF – parcela dedutível\n        if (dependentesInput > 0) {\n            var salarioBase = salarioBrutoInput - dependentesInput * 189.59;\n            var IRRF = salarioBase * (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[0] - (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[1];\n            var INSS = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput)[0];\n            var salarioLiquido = salarioBrutoInput - IRRF - INSS - totalDescontoInput;\n        }\n        var salarioBase1 = salarioBrutoInput - (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput).value;\n        var IRRF1 = salarioBase1 * (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[0] - (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[1];\n        var salarioLiquido1 = salarioBase1 - IRRF1 - totalDescontoInput;\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"button__main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleCalcular,\n            children: \"CALCULAR\"\n        }, void 0, false, {\n            fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n            lineNumber: 33,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this));\n};\n_s(ButtonCalculator, \"Is2MaVOM2fG6ZjzRSRt9JwOvVlQ=\");\n_c = ButtonCalculator;\nvar _c;\n$RefreshReg$(_c, \"ButtonCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL0J1dHRvbkNhbGN1bGF0b3IvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUN5QjtBQUNMO0FBQ0E7O0FBRXZDLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUMvQyxHQUFLLENBQThDTCxHQUF5QixHQUF6QkEsaURBQVUsQ0FBQ0MsK0RBQWEsR0FBbkVLLGtCQUFrQixHQUF5Qk4sR0FBeUIsQ0FBcEVNLGtCQUFrQixFQUFFQyxrQkFBa0IsR0FBS1AsR0FBeUIsQ0FBaERPLGtCQUFrQjtJQUM5QyxHQUFLLENBQUdDLGlCQUFpQixHQUEyQ0gsS0FBSyxDQUFqRUcsaUJBQWlCLEVBQUVDLGtCQUFrQixHQUF1QkosS0FBSyxDQUE5Q0ksa0JBQWtCLEVBQUVDLGdCQUFnQixHQUFLTCxLQUFLLENBQTFCSyxnQkFBZ0I7SUFFL0QsR0FBSyxDQUFDQyxjQUFjLEdBQUcsUUFDekIsR0FEK0IsQ0FBQztRQUU1QixHQUFLLENBQUNDLGdCQUFnQixHQUFHViwrREFBWSxDQUFDTSxpQkFBaUI7UUFDdkRELGtCQUFrQixDQUFDSyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXJDLEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQUdWLCtEQUFZLENBQUNLLGlCQUFpQjtRQUN2RE0sa0JBQWtCLENBQUNELGdCQUFnQixDQUFDLENBQUM7UUFFckMsRUFBNkU7UUFDN0UsRUFBRSxFQUFFSCxnQkFBZ0IsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN6QixHQUFLLENBQUNLLFdBQVcsR0FBR1AsaUJBQWlCLEdBQUdFLGdCQUFnQixHQUFHLE1BQU07WUFDakUsR0FBSyxDQUFDTSxJQUFJLEdBQUdELFdBQVcsR0FBR1osK0RBQVksQ0FBQ0ssaUJBQWlCLEVBQUUsQ0FBQyxJQUFJTCwrREFBWSxDQUFDSyxpQkFBaUIsRUFBRSxDQUFDO1lBQ2pHLEdBQUssQ0FBQ1MsSUFBSSxHQUFHZiwrREFBWSxDQUFDTSxpQkFBaUIsRUFBRSxDQUFDO1lBQzlDLEdBQUssQ0FBQ1UsY0FBYyxHQUFJVixpQkFBaUIsR0FBR1EsSUFBSSxHQUFHQyxJQUFJLEdBQUdSLGtCQUFrQjtRQUM5RSxDQUFDO1FBQ0QsR0FBSyxDQUFDTSxZQUFXLEdBQUdQLGlCQUFpQixHQUFHTiwrREFBWSxDQUFDTSxpQkFBaUIsRUFBRVcsS0FBSztRQUM3RSxHQUFLLENBQUNILEtBQUksR0FBR0QsWUFBVyxHQUFHWiwrREFBWSxDQUFDSyxpQkFBaUIsRUFBRSxDQUFDLElBQUlMLCtEQUFZLENBQUNLLGlCQUFpQixFQUFFLENBQUM7UUFDakcsR0FBSyxDQUFDVSxlQUFjLEdBQUdILFlBQVcsR0FBR0MsS0FBSSxHQUFHUCxrQkFBa0I7SUFFaEUsQ0FBQztJQUVELE1BQU0sNkVBQ0hXLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWM7OEZBQzFCQyxDQUFNO1lBQUNDLE9BQU8sRUFBRVosY0FBYztzQkFBRSxDQUFROzs7Ozs7Ozs7OztBQUcvQyxDQUFDO0dBOUJ1QlAsZ0JBQWdCO0tBQWhCQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dENvbnRhaW5lci9CdXR0b25DYWxjdWxhdG9yL2luZGV4LmpzeD81ZTllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7IFxuaW1wb3J0IFNhbGFyeUNvbnRleHQgZnJvbSAnLi4vLi4vLi4vY29udGV4dHMvU2FsYXJ5Q29udGV4dCc7XG5pbXBvcnQgY2FsY3VsYXJJTlNTIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGN1bGFySU5TUyc7XG5pbXBvcnQgY2FsY3VsYXJJUlJGIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGN1bGFySVJSRic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkNhbGN1bGF0b3IocHJvcHMpIHtcbiAgY29uc3QgeyBzZXRQb3JjZW50YWdlbUlSUEYsIHNldFBvcmNlbnRhZ2VtSU5TUyB9ID0gdXNlQ29udGV4dChTYWxhcnlDb250ZXh0KTtcbiAgY29uc3QgeyBzYWxhcmlvQnJ1dG9JbnB1dCwgdG90YWxEZXNjb250b0lucHV0LCBkZXBlbmRlbnRlc0lucHV0IH0gPSBwcm9wcztcblxuICBjb25zdCBoYW5kbGVDYWxjdWxhciA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBzYWxhcmlvQnJ1dG9JTlNTID0gY2FsY3VsYXJJTlNTKHNhbGFyaW9CcnV0b0lucHV0KTtcbiAgICBzZXRQb3JjZW50YWdlbUlOU1Moc2FsYXJpb0JydXRvSU5TU1sxXSlcblxuICAgIGNvbnN0IHNhbGFyaW9CcnV0b0lSUkYgPSBjYWxjdWxhcklSUkYoc2FsYXJpb0JydXRvSW5wdXQpO1xuICAgIHNldFBvcmNlbnRhZ2VtSVJSRihzYWxhcmlvQnJ1dG9JUlJGWzJdKVxuXG4gICAgLy8gSVJSRiA9IChzYWzDoXJpbyBicnV0byDigJMgZGVzY29udG8gSU5TUykgeCBhbMOtcXVvdGEgSVJSRiDigJMgcGFyY2VsYSBkZWR1dMOtdmVsXG4gICAgaWYgKGRlcGVuZGVudGVzSW5wdXQgPiAwKSB7XG4gICAgICBjb25zdCBzYWxhcmlvQmFzZSA9IHNhbGFyaW9CcnV0b0lucHV0IC0gZGVwZW5kZW50ZXNJbnB1dCAqIDE4OS41OTtcbiAgICAgIGNvbnN0IElSUkYgPSBzYWxhcmlvQmFzZSAqIGNhbGN1bGFySVJSRihzYWxhcmlvQnJ1dG9JbnB1dClbMF0gLSBjYWxjdWxhcklSUkYoc2FsYXJpb0JydXRvSW5wdXQpWzFdO1xuICAgICAgY29uc3QgSU5TUyA9IGNhbGN1bGFySU5TUyhzYWxhcmlvQnJ1dG9JbnB1dClbMF07XG4gICAgICBjb25zdCBzYWxhcmlvTGlxdWlkbyA9IChzYWxhcmlvQnJ1dG9JbnB1dCAtIElSUkYgLSBJTlNTIC0gdG90YWxEZXNjb250b0lucHV0KTtcbiAgICB9XG4gICAgY29uc3Qgc2FsYXJpb0Jhc2UgPSBzYWxhcmlvQnJ1dG9JbnB1dCAtIGNhbGN1bGFySU5TUyhzYWxhcmlvQnJ1dG9JbnB1dCkudmFsdWU7XG4gICAgY29uc3QgSVJSRiA9IHNhbGFyaW9CYXNlICogY2FsY3VsYXJJUlJGKHNhbGFyaW9CcnV0b0lucHV0KVswXSAtIGNhbGN1bGFySVJSRihzYWxhcmlvQnJ1dG9JbnB1dClbMV07XG4gICAgY29uc3Qgc2FsYXJpb0xpcXVpZG8gPSBzYWxhcmlvQmFzZSAtIElSUkYgLSB0b3RhbERlc2NvbnRvSW5wdXQ7XG4gICAgXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uX19tYWluXCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNhbGN1bGFyfT5DQUxDVUxBUjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlNhbGFyeUNvbnRleHQiLCJjYWxjdWxhcklOU1MiLCJjYWxjdWxhcklSUkYiLCJCdXR0b25DYWxjdWxhdG9yIiwicHJvcHMiLCJzZXRQb3JjZW50YWdlbUlSUEYiLCJzZXRQb3JjZW50YWdlbUlOU1MiLCJzYWxhcmlvQnJ1dG9JbnB1dCIsInRvdGFsRGVzY29udG9JbnB1dCIsImRlcGVuZGVudGVzSW5wdXQiLCJoYW5kbGVDYWxjdWxhciIsInNhbGFyaW9CcnV0b0lOU1MiLCJzYWxhcmlvQnJ1dG9JUlJGIiwic2V0UG9yY2VudGFnZW1JUlJGIiwic2FsYXJpb0Jhc2UiLCJJUlJGIiwiSU5TUyIsInNhbGFyaW9MaXF1aWRvIiwidmFsdWUiLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InputContainer/ButtonCalculator/index.jsx\n");

/***/ })

});