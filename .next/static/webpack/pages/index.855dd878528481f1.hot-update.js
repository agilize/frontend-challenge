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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonCalculator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/SalaryContext */ \"./contexts/SalaryContext.js\");\n/* harmony import */ var _utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/calcularINSS */ \"./utils/calcularINSS.js\");\n/* harmony import */ var _utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/calcularIRRF */ \"./utils/calcularIRRF.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ButtonCalculator(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), setSalarioLiquido = ref.setSalarioLiquido, setPorcentagemIRRF = ref.setPorcentagemIRRF, setPorcentagemINSS = ref.setPorcentagemINSS, setTotalDesconto = ref.setTotalDesconto, setValorINSS = ref.setValorINSS, setValorIRRF = ref.setValorIRRF;\n    var salarioBrutoInput = props.salarioBrutoInput, totalDescontoInput = props.totalDescontoInput, dependentesInput = props.dependentesInput;\n    var handleCalcular = function() {\n        if (!salarioBrutoInput) return;\n        var salarioBrutoINSS = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput);\n        setPorcentagemINSS(salarioBrutoINSS[1]);\n        var salarioBrutoIRRF = (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput);\n        setPorcentagemIRRF(salarioBrutoIRRF[2]);\n        var salarioBaseINSS = 0;\n        if (dependentesInput >= 1) {\n            var salarioDependente = salarioBrutoInput - dependentesInput * 189.59;\n            var INSS = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioDependente)[0];\n            setValorINSS(INSS.toFixed(2));\n            salarioBaseINSS = salarioDependente - INSS;\n        } else {\n            var INSS1 = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput)[0];\n            setValorINSS(INSS1.toFixed(2));\n            salarioBaseINSS = salarioBrutoInput - INSS1;\n        }\n        var IRRF = salarioBaseINSS * (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[0] - (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[1];\n        console.log('IRRF', IRRF);\n        setValorIRRF(IRRF.toFixed(2));\n        setTotalDesconto(parse(totalDescontoInput).toFixed(2));\n        var salarioLiquido = salarioBaseINSS - IRRF - totalDescontoInput;\n        if (salarioLiquido) setSalarioLiquido(salarioLiquido.toFixed(2));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"button__main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleCalcular,\n            children: \"CALCULAR\"\n        }, void 0, false, {\n            fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n            lineNumber: 55,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n        lineNumber: 54,\n        columnNumber: 5\n    }, this));\n};\n_s(ButtonCalculator, \"KuqzVLmUVfl6NVAvxHPvp4kgaGM=\");\n_c = ButtonCalculator;\nvar _c;\n$RefreshReg$(_c, \"ButtonCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL0J1dHRvbkNhbGN1bGF0b3IvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUN5QjtBQUNMO0FBQ0E7O0FBRXZDLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUMvQyxHQUFLLENBT0RMLEdBQXlCLEdBQXpCQSxpREFBVSxDQUFDQywrREFBYSxHQU4xQkssaUJBQWlCLEdBTWZOLEdBQXlCLENBTjNCTSxpQkFBaUIsRUFDakJDLGtCQUFrQixHQUtoQlAsR0FBeUIsQ0FMM0JPLGtCQUFrQixFQUNsQkMsa0JBQWtCLEdBSWhCUixHQUF5QixDQUozQlEsa0JBQWtCLEVBQ2xCQyxnQkFBZ0IsR0FHZFQsR0FBeUIsQ0FIM0JTLGdCQUFnQixFQUNoQkMsWUFBWSxHQUVWVixHQUF5QixDQUYzQlUsWUFBWSxFQUNaQyxZQUFZLEdBQ1ZYLEdBQXlCLENBRDNCVyxZQUFZO0lBR2QsR0FBSyxDQUFHQyxpQkFBaUIsR0FBMkNQLEtBQUssQ0FBakVPLGlCQUFpQixFQUFFQyxrQkFBa0IsR0FBdUJSLEtBQUssQ0FBOUNRLGtCQUFrQixFQUFFQyxnQkFBZ0IsR0FBS1QsS0FBSyxDQUExQlMsZ0JBQWdCO0lBRS9ELEdBQUssQ0FBQ0MsY0FBYyxHQUFHLFFBQ3pCLEdBRCtCLENBQUM7UUFDNUIsRUFBRSxHQUFHSCxpQkFBaUIsRUFBRSxNQUFNO1FBRTlCLEdBQUssQ0FBQ0ksZ0JBQWdCLEdBQUdkLCtEQUFZLENBQUNVLGlCQUFpQjtRQUN2REosa0JBQWtCLENBQUNRLGdCQUFnQixDQUFDLENBQUM7UUFFckMsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR2QsK0RBQVksQ0FBQ1MsaUJBQWlCO1FBQ3ZETCxrQkFBa0IsQ0FBQ1UsZ0JBQWdCLENBQUMsQ0FBQztRQUVyQyxHQUFHLENBQUNDLGVBQWUsR0FBRyxDQUFDO1FBRXZCLEVBQUUsRUFBRUosZ0JBQWdCLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDMUIsR0FBSyxDQUFDSyxpQkFBaUIsR0FBR1AsaUJBQWlCLEdBQUlFLGdCQUFnQixHQUFHLE1BQU07WUFDeEUsR0FBSyxDQUFDTSxJQUFJLEdBQUdsQiwrREFBWSxDQUFDaUIsaUJBQWlCLEVBQUUsQ0FBQztZQUM5Q1QsWUFBWSxDQUFDVSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCSCxlQUFlLEdBQUdDLGlCQUFpQixHQUFHQyxJQUFJO1FBRTVDLENBQUMsTUFBTSxDQUFDO1lBQ04sR0FBSyxDQUFDQSxLQUFJLEdBQUdsQiwrREFBWSxDQUFDVSxpQkFBaUIsRUFBRSxDQUFDO1lBQzlDRixZQUFZLENBQUNVLEtBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUM7WUFDM0JILGVBQWUsR0FBR04saUJBQWlCLEdBQUdRLEtBQUk7UUFDNUMsQ0FBQztRQUVDLEdBQUssQ0FBQ0UsSUFBSSxHQUNQSixlQUFlLEdBQUdmLCtEQUFZLENBQUNTLGlCQUFpQixFQUFFLENBQUMsSUFBS1QsK0RBQVksQ0FBQ1MsaUJBQWlCLEVBQUUsQ0FBQztRQUM1RlcsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTSxPQUFFRixJQUFJO1FBQ3hCWCxZQUFZLENBQUNXLElBQUksQ0FBQ0QsT0FBTyxDQUFDLENBQUM7UUFDM0JaLGdCQUFnQixDQUFDZ0IsS0FBSyxDQUFDWixrQkFBa0IsRUFBRVEsT0FBTyxDQUFDLENBQUM7UUFDcEQsR0FBSyxDQUFDSyxjQUFjLEdBQUdSLGVBQWUsR0FBR0ksSUFBSSxHQUFHVCxrQkFBa0I7UUFFbEUsRUFBRSxFQUFFYSxjQUFjLEVBQUVwQixpQkFBaUIsQ0FBQ29CLGNBQWMsQ0FBQ0wsT0FBTyxDQUFDLENBQUM7SUFHbEUsQ0FBQztJQUVELE1BQU0sNkVBQ0hNLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWM7OEZBQzFCQyxDQUFNO1lBQUNDLE9BQU8sRUFBRWYsY0FBYztzQkFBRSxDQUFROzs7Ozs7Ozs7OztBQUcvQyxDQUFDO0dBcER1QlgsZ0JBQWdCO0tBQWhCQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dENvbnRhaW5lci9CdXR0b25DYWxjdWxhdG9yL2luZGV4LmpzeD81ZTllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7XG5pbXBvcnQgU2FsYXJ5Q29udGV4dCBmcm9tICcuLi8uLi8uLi9jb250ZXh0cy9TYWxhcnlDb250ZXh0JztcbmltcG9ydCBjYWxjdWxhcklOU1MgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsY3VsYXJJTlNTJztcbmltcG9ydCBjYWxjdWxhcklSUkYgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsY3VsYXJJUlJGJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uQ2FsY3VsYXRvcihwcm9wcykge1xuICBjb25zdCB7XG4gICAgc2V0U2FsYXJpb0xpcXVpZG8sXG4gICAgc2V0UG9yY2VudGFnZW1JUlJGLFxuICAgIHNldFBvcmNlbnRhZ2VtSU5TUyxcbiAgICBzZXRUb3RhbERlc2NvbnRvLFxuICAgIHNldFZhbG9ySU5TUyxcbiAgICBzZXRWYWxvcklSUkZcbiAgfSA9IHVzZUNvbnRleHQoU2FsYXJ5Q29udGV4dCk7XG5cbiAgY29uc3QgeyBzYWxhcmlvQnJ1dG9JbnB1dCwgdG90YWxEZXNjb250b0lucHV0LCBkZXBlbmRlbnRlc0lucHV0IH0gPSBwcm9wcztcblxuICBjb25zdCBoYW5kbGVDYWxjdWxhciA9ICgpID0+IHtcbiAgICBpZiAoIXNhbGFyaW9CcnV0b0lucHV0KSByZXR1cm47XG5cbiAgICBjb25zdCBzYWxhcmlvQnJ1dG9JTlNTID0gY2FsY3VsYXJJTlNTKHNhbGFyaW9CcnV0b0lucHV0KTtcbiAgICBzZXRQb3JjZW50YWdlbUlOU1Moc2FsYXJpb0JydXRvSU5TU1sxXSk7XG5cbiAgICBjb25zdCBzYWxhcmlvQnJ1dG9JUlJGID0gY2FsY3VsYXJJUlJGKHNhbGFyaW9CcnV0b0lucHV0KTtcbiAgICBzZXRQb3JjZW50YWdlbUlSUkYoc2FsYXJpb0JydXRvSVJSRlsyXSk7XG5cbiAgICBsZXQgc2FsYXJpb0Jhc2VJTlNTID0gMDtcblxuICAgIGlmIChkZXBlbmRlbnRlc0lucHV0ID49IDEpIHtcbiAgICAgIGNvbnN0IHNhbGFyaW9EZXBlbmRlbnRlID0gc2FsYXJpb0JydXRvSW5wdXQgLSAoZGVwZW5kZW50ZXNJbnB1dCAqIDE4OS41OSk7XG4gICAgICBjb25zdCBJTlNTID0gY2FsY3VsYXJJTlNTKHNhbGFyaW9EZXBlbmRlbnRlKVswXTtcbiAgICAgIHNldFZhbG9ySU5TUyhJTlNTLnRvRml4ZWQoMikpO1xuICAgICAgc2FsYXJpb0Jhc2VJTlNTID0gc2FsYXJpb0RlcGVuZGVudGUgLSBJTlNTO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IElOU1MgPSBjYWxjdWxhcklOU1Moc2FsYXJpb0JydXRvSW5wdXQpWzBdO1xuICAgICAgc2V0VmFsb3JJTlNTKElOU1MudG9GaXhlZCgyKSk7XG4gICAgICBzYWxhcmlvQmFzZUlOU1MgPSBzYWxhcmlvQnJ1dG9JbnB1dCAtIElOU1M7XG4gICAgfVxuXG4gICAgICBjb25zdCBJUlJGID1cbiAgICAgICAgKHNhbGFyaW9CYXNlSU5TUyAqIGNhbGN1bGFySVJSRihzYWxhcmlvQnJ1dG9JbnB1dClbMF0pIC0gY2FsY3VsYXJJUlJGKHNhbGFyaW9CcnV0b0lucHV0KVsxXTtcbiAgICAgIGNvbnNvbGUubG9nKCdJUlJGJywgSVJSRilcbiAgICAgIHNldFZhbG9ySVJSRihJUlJGLnRvRml4ZWQoMikpO1xuICAgICAgc2V0VG90YWxEZXNjb250byhwYXJzZSh0b3RhbERlc2NvbnRvSW5wdXQpLnRvRml4ZWQoMikpO1xuICAgICAgY29uc3Qgc2FsYXJpb0xpcXVpZG8gPSBzYWxhcmlvQmFzZUlOU1MgLSBJUlJGIC0gdG90YWxEZXNjb250b0lucHV0O1xuICAgICAgXG4gICAgICBpZiAoc2FsYXJpb0xpcXVpZG8pIHNldFNhbGFyaW9MaXF1aWRvKHNhbGFyaW9MaXF1aWRvLnRvRml4ZWQoMikpO1xuXG4gICAgXG4gIH07XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbl9fbWFpblwiPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYWxjdWxhcn0+Q0FMQ1VMQVI8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiU2FsYXJ5Q29udGV4dCIsImNhbGN1bGFySU5TUyIsImNhbGN1bGFySVJSRiIsIkJ1dHRvbkNhbGN1bGF0b3IiLCJwcm9wcyIsInNldFNhbGFyaW9MaXF1aWRvIiwic2V0UG9yY2VudGFnZW1JUlJGIiwic2V0UG9yY2VudGFnZW1JTlNTIiwic2V0VG90YWxEZXNjb250byIsInNldFZhbG9ySU5TUyIsInNldFZhbG9ySVJSRiIsInNhbGFyaW9CcnV0b0lucHV0IiwidG90YWxEZXNjb250b0lucHV0IiwiZGVwZW5kZW50ZXNJbnB1dCIsImhhbmRsZUNhbGN1bGFyIiwic2FsYXJpb0JydXRvSU5TUyIsInNhbGFyaW9CcnV0b0lSUkYiLCJzYWxhcmlvQmFzZUlOU1MiLCJzYWxhcmlvRGVwZW5kZW50ZSIsIklOU1MiLCJ0b0ZpeGVkIiwiSVJSRiIsImNvbnNvbGUiLCJsb2ciLCJwYXJzZSIsInNhbGFyaW9MaXF1aWRvIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InputContainer/ButtonCalculator/index.jsx\n");

/***/ })

});