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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonCalculator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/SalaryContext */ \"./contexts/SalaryContext.js\");\n/* harmony import */ var _utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/calcularINSS */ \"./utils/calcularINSS.js\");\n/* harmony import */ var _utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/calcularIRRF */ \"./utils/calcularIRRF.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ButtonCalculator(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), setSalarioLiquido = ref.setSalarioLiquido, setPorcentagemIRRF = ref.setPorcentagemIRRF, setPorcentagemINSS = ref.setPorcentagemINSS, setTotalDesconto = ref.setTotalDesconto, setValorINSS = ref.setValorINSS, setValorIRRF = ref.setValorIRRF;\n    var salarioBrutoInput = props.salarioBrutoInput, totalDescontoInput = props.totalDescontoInput, dependentesInput = props.dependentesInput;\n    var handleCalcular = function() {\n        if (!salarioBrutoInput) return;\n        var salarioBrutoINSS = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput);\n        setPorcentagemINSS(salarioBrutoINSS[1]);\n        var salarioBrutoIRRF = (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput);\n        setPorcentagemIRRF(salarioBrutoIRRF[2]);\n        var salarioBaseINSS = 0;\n        if (dependentesInput >= 1) {\n            var salarioDependente = salarioBrutoInput - dependentesInput * 189.59;\n            var INSS = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioDependente)[0];\n            setValorINSS(INSS.toFixed(2));\n            salarioBaseINSS = salarioDependente - INSS;\n        } else {\n            var INSS1 = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput)[0];\n            setValorINSS(INSS1.toFixed(2));\n            salarioBaseINSS = salarioBrutoInput - INSS1;\n        }\n        console.log(\"\");\n        console.log(salarioBaseINSS, salarioBrutoInput);\n        console.log(salarioBaseINSS * (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[0]);\n        var IRRF = salarioBaseINSS * (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[0] - (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[1];\n        console.log('IRRF', IRRF);\n        setValorIRRF(IRRF.toFixed(2));\n        setTotalDesconto(parseFloat(totalDescontoInput).toFixed(2));\n        var salarioLiquido = salarioBaseINSS - IRRF - totalDescontoInput;\n        if (salarioLiquido) setSalarioLiquido(salarioLiquido.toFixed(2));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"button__main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleCalcular,\n            children: \"CALCULAR\"\n        }, void 0, false, {\n            fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n            lineNumber: 57,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n        lineNumber: 56,\n        columnNumber: 5\n    }, this));\n};\n_s(ButtonCalculator, \"KuqzVLmUVfl6NVAvxHPvp4kgaGM=\");\n_c = ButtonCalculator;\nvar _c;\n$RefreshReg$(_c, \"ButtonCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL0J1dHRvbkNhbGN1bGF0b3IvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUN5QjtBQUNMO0FBQ0E7O0FBRXZDLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUMvQyxHQUFLLENBT0RMLEdBQXlCLEdBQXpCQSxpREFBVSxDQUFDQywrREFBYSxHQU4xQkssaUJBQWlCLEdBTWZOLEdBQXlCLENBTjNCTSxpQkFBaUIsRUFDakJDLGtCQUFrQixHQUtoQlAsR0FBeUIsQ0FMM0JPLGtCQUFrQixFQUNsQkMsa0JBQWtCLEdBSWhCUixHQUF5QixDQUozQlEsa0JBQWtCLEVBQ2xCQyxnQkFBZ0IsR0FHZFQsR0FBeUIsQ0FIM0JTLGdCQUFnQixFQUNoQkMsWUFBWSxHQUVWVixHQUF5QixDQUYzQlUsWUFBWSxFQUNaQyxZQUFZLEdBQ1ZYLEdBQXlCLENBRDNCVyxZQUFZO0lBR2QsR0FBSyxDQUFHQyxpQkFBaUIsR0FBMkNQLEtBQUssQ0FBakVPLGlCQUFpQixFQUFFQyxrQkFBa0IsR0FBdUJSLEtBQUssQ0FBOUNRLGtCQUFrQixFQUFFQyxnQkFBZ0IsR0FBS1QsS0FBSyxDQUExQlMsZ0JBQWdCO0lBRS9ELEdBQUssQ0FBQ0MsY0FBYyxHQUFHLFFBQ3pCLEdBRCtCLENBQUM7UUFDNUIsRUFBRSxHQUFHSCxpQkFBaUIsRUFBRSxNQUFNO1FBRTlCLEdBQUssQ0FBQ0ksZ0JBQWdCLEdBQUdkLCtEQUFZLENBQUNVLGlCQUFpQjtRQUN2REosa0JBQWtCLENBQUNRLGdCQUFnQixDQUFDLENBQUM7UUFFckMsR0FBSyxDQUFDQyxnQkFBZ0IsR0FBR2QsK0RBQVksQ0FBQ1MsaUJBQWlCO1FBQ3ZETCxrQkFBa0IsQ0FBQ1UsZ0JBQWdCLENBQUMsQ0FBQztRQUVyQyxHQUFHLENBQUNDLGVBQWUsR0FBRyxDQUFDO1FBRXZCLEVBQUUsRUFBRUosZ0JBQWdCLElBQUksQ0FBQyxFQUFFLENBQUM7WUFDMUIsR0FBSyxDQUFDSyxpQkFBaUIsR0FBR1AsaUJBQWlCLEdBQUlFLGdCQUFnQixHQUFHLE1BQU07WUFDeEUsR0FBSyxDQUFDTSxJQUFJLEdBQUdsQiwrREFBWSxDQUFDaUIsaUJBQWlCLEVBQUUsQ0FBQztZQUM5Q1QsWUFBWSxDQUFDVSxJQUFJLENBQUNDLE9BQU8sQ0FBQyxDQUFDO1lBQzNCSCxlQUFlLEdBQUdDLGlCQUFpQixHQUFHQyxJQUFJO1FBRTVDLENBQUMsTUFBTSxDQUFDO1lBQ04sR0FBSyxDQUFDQSxLQUFJLEdBQUdsQiwrREFBWSxDQUFDVSxpQkFBaUIsRUFBRSxDQUFDO1lBQzlDRixZQUFZLENBQUNVLEtBQUksQ0FBQ0MsT0FBTyxDQUFDLENBQUM7WUFDM0JILGVBQWUsR0FBR04saUJBQWlCLEdBQUdRLEtBQUk7UUFDNUMsQ0FBQztRQUNDRSxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFFO1FBQ2RELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDTCxlQUFlLEVBQUVOLGlCQUFpQjtRQUM5Q1UsT0FBTyxDQUFDQyxHQUFHLENBQUNMLGVBQWUsR0FBR2YsK0RBQVksQ0FBQ1MsaUJBQWlCLEVBQUUsQ0FBQztRQUMvRCxHQUFLLENBQUNZLElBQUksR0FDUE4sZUFBZSxHQUFHZiwrREFBWSxDQUFDUyxpQkFBaUIsRUFBRSxDQUFDLElBQUtULCtEQUFZLENBQUNTLGlCQUFpQixFQUFFLENBQUM7UUFDNUZVLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQU0sT0FBRUMsSUFBSTtRQUN4QmIsWUFBWSxDQUFDYSxJQUFJLENBQUNILE9BQU8sQ0FBQyxDQUFDO1FBQzNCWixnQkFBZ0IsQ0FBQ2dCLFVBQVUsQ0FBQ1osa0JBQWtCLEVBQUVRLE9BQU8sQ0FBQyxDQUFDO1FBQ3pELEdBQUssQ0FBQ0ssY0FBYyxHQUFHUixlQUFlLEdBQUdNLElBQUksR0FBR1gsa0JBQWtCO1FBRWxFLEVBQUUsRUFBRWEsY0FBYyxFQUFFcEIsaUJBQWlCLENBQUNvQixjQUFjLENBQUNMLE9BQU8sQ0FBQyxDQUFDO0lBR2xFLENBQUM7SUFFRCxNQUFNLDZFQUNITSxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFjOzhGQUMxQkMsQ0FBTTtZQUFDQyxPQUFPLEVBQUVmLGNBQWM7c0JBQUUsQ0FBUTs7Ozs7Ozs7Ozs7QUFHL0MsQ0FBQztHQXREdUJYLGdCQUFnQjtLQUFoQkEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5wdXRDb250YWluZXIvQnV0dG9uQ2FsY3VsYXRvci9pbmRleC5qc3g/NWU5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IFNhbGFyeUNvbnRleHQgZnJvbSAnLi4vLi4vLi4vY29udGV4dHMvU2FsYXJ5Q29udGV4dCc7XG5pbXBvcnQgY2FsY3VsYXJJTlNTIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGN1bGFySU5TUyc7XG5pbXBvcnQgY2FsY3VsYXJJUlJGIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGN1bGFySVJSRic7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkNhbGN1bGF0b3IocHJvcHMpIHtcbiAgY29uc3Qge1xuICAgIHNldFNhbGFyaW9MaXF1aWRvLFxuICAgIHNldFBvcmNlbnRhZ2VtSVJSRixcbiAgICBzZXRQb3JjZW50YWdlbUlOU1MsXG4gICAgc2V0VG90YWxEZXNjb250byxcbiAgICBzZXRWYWxvcklOU1MsXG4gICAgc2V0VmFsb3JJUlJGXG4gIH0gPSB1c2VDb250ZXh0KFNhbGFyeUNvbnRleHQpO1xuXG4gIGNvbnN0IHsgc2FsYXJpb0JydXRvSW5wdXQsIHRvdGFsRGVzY29udG9JbnB1dCwgZGVwZW5kZW50ZXNJbnB1dCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaGFuZGxlQ2FsY3VsYXIgPSAoKSA9PiB7XG4gICAgaWYgKCFzYWxhcmlvQnJ1dG9JbnB1dCkgcmV0dXJuO1xuXG4gICAgY29uc3Qgc2FsYXJpb0JydXRvSU5TUyA9IGNhbGN1bGFySU5TUyhzYWxhcmlvQnJ1dG9JbnB1dCk7XG4gICAgc2V0UG9yY2VudGFnZW1JTlNTKHNhbGFyaW9CcnV0b0lOU1NbMV0pO1xuXG4gICAgY29uc3Qgc2FsYXJpb0JydXRvSVJSRiA9IGNhbGN1bGFySVJSRihzYWxhcmlvQnJ1dG9JbnB1dCk7XG4gICAgc2V0UG9yY2VudGFnZW1JUlJGKHNhbGFyaW9CcnV0b0lSUkZbMl0pO1xuXG4gICAgbGV0IHNhbGFyaW9CYXNlSU5TUyA9IDA7XG5cbiAgICBpZiAoZGVwZW5kZW50ZXNJbnB1dCA+PSAxKSB7XG4gICAgICBjb25zdCBzYWxhcmlvRGVwZW5kZW50ZSA9IHNhbGFyaW9CcnV0b0lucHV0IC0gKGRlcGVuZGVudGVzSW5wdXQgKiAxODkuNTkpO1xuICAgICAgY29uc3QgSU5TUyA9IGNhbGN1bGFySU5TUyhzYWxhcmlvRGVwZW5kZW50ZSlbMF07XG4gICAgICBzZXRWYWxvcklOU1MoSU5TUy50b0ZpeGVkKDIpKTtcbiAgICAgIHNhbGFyaW9CYXNlSU5TUyA9IHNhbGFyaW9EZXBlbmRlbnRlIC0gSU5TUztcblxuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBJTlNTID0gY2FsY3VsYXJJTlNTKHNhbGFyaW9CcnV0b0lucHV0KVswXTtcbiAgICAgIHNldFZhbG9ySU5TUyhJTlNTLnRvRml4ZWQoMikpO1xuICAgICAgc2FsYXJpb0Jhc2VJTlNTID0gc2FsYXJpb0JydXRvSW5wdXQgLSBJTlNTO1xuICAgIH1cbiAgICAgIGNvbnNvbGUubG9nKFwiXCIpXG4gICAgICBjb25zb2xlLmxvZyhzYWxhcmlvQmFzZUlOU1MsIHNhbGFyaW9CcnV0b0lucHV0KVxuICAgICAgY29uc29sZS5sb2coc2FsYXJpb0Jhc2VJTlNTICogY2FsY3VsYXJJUlJGKHNhbGFyaW9CcnV0b0lucHV0KVswXSlcbiAgICAgIGNvbnN0IElSUkYgPVxuICAgICAgICAoc2FsYXJpb0Jhc2VJTlNTICogY2FsY3VsYXJJUlJGKHNhbGFyaW9CcnV0b0lucHV0KVswXSkgLSBjYWxjdWxhcklSUkYoc2FsYXJpb0JydXRvSW5wdXQpWzFdO1xuICAgICAgY29uc29sZS5sb2coJ0lSUkYnLCBJUlJGKVxuICAgICAgc2V0VmFsb3JJUlJGKElSUkYudG9GaXhlZCgyKSk7XG4gICAgICBzZXRUb3RhbERlc2NvbnRvKHBhcnNlRmxvYXQodG90YWxEZXNjb250b0lucHV0KS50b0ZpeGVkKDIpKTtcbiAgICAgIGNvbnN0IHNhbGFyaW9MaXF1aWRvID0gc2FsYXJpb0Jhc2VJTlNTIC0gSVJSRiAtIHRvdGFsRGVzY29udG9JbnB1dDtcbiAgICAgIFxuICAgICAgaWYgKHNhbGFyaW9MaXF1aWRvKSBzZXRTYWxhcmlvTGlxdWlkbyhzYWxhcmlvTGlxdWlkby50b0ZpeGVkKDIpKTtcblxuICAgIFxuICB9O1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25fX21haW5cIj5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2FsY3VsYXJ9PkNBTENVTEFSPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlNhbGFyeUNvbnRleHQiLCJjYWxjdWxhcklOU1MiLCJjYWxjdWxhcklSUkYiLCJCdXR0b25DYWxjdWxhdG9yIiwicHJvcHMiLCJzZXRTYWxhcmlvTGlxdWlkbyIsInNldFBvcmNlbnRhZ2VtSVJSRiIsInNldFBvcmNlbnRhZ2VtSU5TUyIsInNldFRvdGFsRGVzY29udG8iLCJzZXRWYWxvcklOU1MiLCJzZXRWYWxvcklSUkYiLCJzYWxhcmlvQnJ1dG9JbnB1dCIsInRvdGFsRGVzY29udG9JbnB1dCIsImRlcGVuZGVudGVzSW5wdXQiLCJoYW5kbGVDYWxjdWxhciIsInNhbGFyaW9CcnV0b0lOU1MiLCJzYWxhcmlvQnJ1dG9JUlJGIiwic2FsYXJpb0Jhc2VJTlNTIiwic2FsYXJpb0RlcGVuZGVudGUiLCJJTlNTIiwidG9GaXhlZCIsImNvbnNvbGUiLCJsb2ciLCJJUlJGIiwicGFyc2VGbG9hdCIsInNhbGFyaW9MaXF1aWRvIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InputContainer/ButtonCalculator/index.jsx\n");

/***/ })

});