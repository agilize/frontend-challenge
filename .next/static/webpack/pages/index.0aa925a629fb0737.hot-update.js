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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonCalculator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/SalaryContext */ \"./contexts/SalaryContext.js\");\n/* harmony import */ var _utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/calcularINSS */ \"./utils/calcularINSS.js\");\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ButtonCalculator(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), setPorcentagemIRPF = ref.setPorcentagemIRPF, porcentagemINSS = ref.porcentagemINSS, setPorcentagemINSS = ref.setPorcentagemINSS;\n    var salarioBrutoInput = props.salarioBrutoInput, totalDescontoInput = props.totalDescontoInput, dependentesInput = props.dependentesInput;\n    var handleCalcular = function() {\n        var salarioBruto = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput);\n        console.log(salarioBruto);\n    // setPorcentagemINSS(7.5);\n    // let parcelaDedutivaIRRF = 0;\n    // let descontoIRRF = 0;\n    // if (salarioBrutoInput <= 1903.98) {\n    //   setPorcentagemINSS(0);\n    //   descontoIRRF = 0;\n    //   parcelaDedutivaIRRF = 0;\n    // }\n    // if (salarioBrutoInput >= 1903.99 && salarioBrutoInput <= 2826.65) {\n    //   setPorcentagemINSS(7.5);\n    //   descontoIRRF = salarioBrutoInput * 0.075;\n    //   parcelaDedutivaIRRF = 142.8;\n    // }\n    // if (salarioBrutoInput >= 2826.66 && salarioBrutoInput <= 3751.05) {\n    //   setPorcentagemINSS(15);\n    //   descontoIRRF = salarioBrutoInput * 0.15;\n    //   parcelaDedutivaIRRF = 354.8;\n    // }\n    // if (salarioBrutoInput >= 3751.06 && salarioBrutoInput <= 4664.68) {\n    //   setPorcentagemINSS(22.5);\n    //   descontoIRRF = salarioBrutoInput * 0.225;\n    //   parcelaDedutivaIRRF = 636.13;\n    // }\n    // if (salarioBrutoInput >= 4664.69) {\n    //   setPorcentagemINSS(27.5);\n    //   descontoIRRF = salarioBrutoInput * 0.275;\n    //   parcelaDedutivaIRRF = 869.36;\n    // }\n    // const salarioBase = salarioBrutoInput - descontoINSS;\n    // const IRRF = salarioBase * descontoIRRF - parcelaDedutivaIRRF;\n    // console.log('descontoIRRF', descontoIRRF);\n    // console.log('descontoINSS', descontoINSS);\n    // console.log('salarioBase', salarioBase);\n    // console.log('IRRF', IRRF);\n    // console.log('parcelaDedutivaIRRF', parcelaDedutivaIRRF);\n    //   const liquidSalary = base - irf - descounts;\n    //   return liquidSalary.toFixed(2);\n    // export const calculateTax = (grossSalary, descounts, dependents) => {\n    //   // IRRF = (salário bruto – desconto INSS) x alíquota IRRF – parcela dedutível\n    //   if (dependents >= 1) {\n    //     const base = grossSalary - dependents * 189.59;\n    //     const irf = base * verifyIRRF(grossSalary).aliquota - verifyIRRF(grossSalary).parcel;\n    //     const inss = verifyINSS(grossSalary).value;\n    //     const liquidSalary = grossSalary - irf - inss - descounts;\n    //     return liquidSalary.toFixed(2);\n    //   }\n    //   console.log(verifyINSS(grossSalary).value);\n    //   const base = grossSalary - verifyINSS(grossSalary).value;\n    //   const irf = base * verifyIRRF(grossSalary).aliquota - verifyIRRF(grossSalary).parcel;\n    //   const liquidSalary = base - irf - descounts;\n    //   return liquidSalary.toFixed(2);\n    // };\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"button__main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleCalcular(),\n            children: \"CALCULAR\"\n        }, void 0, false, {\n            fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n            lineNumber: 76,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n        lineNumber: 75,\n        columnNumber: 5\n    }, this));\n};\n_s(ButtonCalculator, \"5tAX9UyYB95bANJ8d5EwGGKNTlE=\");\n_c = ButtonCalculator;\nvar _c;\n$RefreshReg$(_c, \"ButtonCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL0J1dHRvbkNhbGN1bGF0b3IvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQWtDO0FBQ3lCO0FBQ0w7O0FBQ3ZDLFFBQVEsQ0FBQ0csZ0JBQWdCLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUMvQyxHQUFLLENBQStESixHQUF5QixHQUF6QkEsaURBQVUsQ0FBQ0MsK0RBQWEsR0FBcEZJLGtCQUFrQixHQUEwQ0wsR0FBeUIsQ0FBckZLLGtCQUFrQixFQUFFQyxlQUFlLEdBQXlCTixHQUF5QixDQUFqRU0sZUFBZSxFQUFFQyxrQkFBa0IsR0FBS1AsR0FBeUIsQ0FBaERPLGtCQUFrQjtJQUMvRCxHQUFLLENBQUdDLGlCQUFpQixHQUEyQ0osS0FBSyxDQUFqRUksaUJBQWlCLEVBQUVDLGtCQUFrQixHQUF1QkwsS0FBSyxDQUE5Q0ssa0JBQWtCLEVBQUVDLGdCQUFnQixHQUFLTixLQUFLLENBQTFCTSxnQkFBZ0I7SUFFL0QsR0FBSyxDQUFDQyxjQUFjLEdBQUcsUUFDekIsR0FEK0IsQ0FBQztRQUU1QixHQUFLLENBQUNDLFlBQVksR0FBR1YsK0RBQVksQ0FBQ00saUJBQWlCO1FBQ25ESyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0YsWUFBWTtJQUMxQixFQUEyQjtJQUd6QixFQUErQjtJQUMvQixFQUF3QjtJQUV4QixFQUFzQztJQUN0QyxFQUEyQjtJQUMzQixFQUFzQjtJQUN0QixFQUE2QjtJQUM3QixFQUFJO0lBQ0osRUFBc0U7SUFDdEUsRUFBNkI7SUFDN0IsRUFBOEM7SUFDOUMsRUFBaUM7SUFDakMsRUFBSTtJQUNKLEVBQXNFO0lBQ3RFLEVBQTRCO0lBQzVCLEVBQTZDO0lBQzdDLEVBQWlDO0lBQ2pDLEVBQUk7SUFDSixFQUFzRTtJQUN0RSxFQUE4QjtJQUM5QixFQUE4QztJQUM5QyxFQUFrQztJQUNsQyxFQUFJO0lBQ0osRUFBc0M7SUFDdEMsRUFBOEI7SUFDOUIsRUFBOEM7SUFDOUMsRUFBa0M7SUFDbEMsRUFBSTtJQUVKLEVBQXdEO0lBQ3hELEVBQWlFO0lBQ2pFLEVBQTZDO0lBQzdDLEVBQTZDO0lBQzdDLEVBQTJDO0lBQzNDLEVBQTZCO0lBQzdCLEVBQTJEO0lBRTNELEVBQWlEO0lBQ2pELEVBQW9DO0lBRXBDLEVBQXdFO0lBQ3hFLEVBQWtGO0lBQ2xGLEVBQTJCO0lBQzNCLEVBQXNEO0lBQ3RELEVBQTRGO0lBQzVGLEVBQWtEO0lBQ2xELEVBQWlFO0lBQ2pFLEVBQXNDO0lBQ3RDLEVBQU07SUFDTixFQUFnRDtJQUNoRCxFQUE4RDtJQUM5RCxFQUEwRjtJQUMxRixFQUFpRDtJQUNqRCxFQUFvQztJQUNwQyxFQUFLO0lBQ1AsQ0FBQztJQUlELE1BQU0sNkVBQ0hHLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWM7OEZBQzFCQyxDQUFNO1lBQUNDLE9BQU8sRUFBRVAsY0FBYztzQkFBSSxDQUFROzs7Ozs7Ozs7OztBQUdqRCxDQUFDO0dBM0V1QlIsZ0JBQWdCO0tBQWhCQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dENvbnRhaW5lci9CdXR0b25DYWxjdWxhdG9yL2luZGV4LmpzeD81ZTllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7IFxuaW1wb3J0IFNhbGFyeUNvbnRleHQgZnJvbSAnLi4vLi4vLi4vY29udGV4dHMvU2FsYXJ5Q29udGV4dCc7XG5pbXBvcnQgY2FsY3VsYXJJTlNTIGZyb20gJy4uLy4uLy4uL3V0aWxzL2NhbGN1bGFySU5TUyc7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25DYWxjdWxhdG9yKHByb3BzKSB7XG4gIGNvbnN0IHsgc2V0UG9yY2VudGFnZW1JUlBGLCBwb3JjZW50YWdlbUlOU1MsIHNldFBvcmNlbnRhZ2VtSU5TUyB9ID0gdXNlQ29udGV4dChTYWxhcnlDb250ZXh0KTtcbiAgY29uc3QgeyBzYWxhcmlvQnJ1dG9JbnB1dCwgdG90YWxEZXNjb250b0lucHV0LCBkZXBlbmRlbnRlc0lucHV0IH0gPSBwcm9wcztcblxuICBjb25zdCBoYW5kbGVDYWxjdWxhciA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBzYWxhcmlvQnJ1dG8gPSBjYWxjdWxhcklOU1Moc2FsYXJpb0JydXRvSW5wdXQpO1xuICAgIGNvbnNvbGUubG9nKHNhbGFyaW9CcnV0byk7XG4gIC8vIHNldFBvcmNlbnRhZ2VtSU5TUyg3LjUpO1xuICAgXG5cbiAgICAvLyBsZXQgcGFyY2VsYURlZHV0aXZhSVJSRiA9IDA7XG4gICAgLy8gbGV0IGRlc2NvbnRvSVJSRiA9IDA7XG5cbiAgICAvLyBpZiAoc2FsYXJpb0JydXRvSW5wdXQgPD0gMTkwMy45OCkge1xuICAgIC8vICAgc2V0UG9yY2VudGFnZW1JTlNTKDApO1xuICAgIC8vICAgZGVzY29udG9JUlJGID0gMDtcbiAgICAvLyAgIHBhcmNlbGFEZWR1dGl2YUlSUkYgPSAwO1xuICAgIC8vIH1cbiAgICAvLyBpZiAoc2FsYXJpb0JydXRvSW5wdXQgPj0gMTkwMy45OSAmJiBzYWxhcmlvQnJ1dG9JbnB1dCA8PSAyODI2LjY1KSB7XG4gICAgLy8gICBzZXRQb3JjZW50YWdlbUlOU1MoNy41KTtcbiAgICAvLyAgIGRlc2NvbnRvSVJSRiA9IHNhbGFyaW9CcnV0b0lucHV0ICogMC4wNzU7XG4gICAgLy8gICBwYXJjZWxhRGVkdXRpdmFJUlJGID0gMTQyLjg7XG4gICAgLy8gfVxuICAgIC8vIGlmIChzYWxhcmlvQnJ1dG9JbnB1dCA+PSAyODI2LjY2ICYmIHNhbGFyaW9CcnV0b0lucHV0IDw9IDM3NTEuMDUpIHtcbiAgICAvLyAgIHNldFBvcmNlbnRhZ2VtSU5TUygxNSk7XG4gICAgLy8gICBkZXNjb250b0lSUkYgPSBzYWxhcmlvQnJ1dG9JbnB1dCAqIDAuMTU7XG4gICAgLy8gICBwYXJjZWxhRGVkdXRpdmFJUlJGID0gMzU0Ljg7XG4gICAgLy8gfVxuICAgIC8vIGlmIChzYWxhcmlvQnJ1dG9JbnB1dCA+PSAzNzUxLjA2ICYmIHNhbGFyaW9CcnV0b0lucHV0IDw9IDQ2NjQuNjgpIHtcbiAgICAvLyAgIHNldFBvcmNlbnRhZ2VtSU5TUygyMi41KTtcbiAgICAvLyAgIGRlc2NvbnRvSVJSRiA9IHNhbGFyaW9CcnV0b0lucHV0ICogMC4yMjU7XG4gICAgLy8gICBwYXJjZWxhRGVkdXRpdmFJUlJGID0gNjM2LjEzO1xuICAgIC8vIH1cbiAgICAvLyBpZiAoc2FsYXJpb0JydXRvSW5wdXQgPj0gNDY2NC42OSkge1xuICAgIC8vICAgc2V0UG9yY2VudGFnZW1JTlNTKDI3LjUpO1xuICAgIC8vICAgZGVzY29udG9JUlJGID0gc2FsYXJpb0JydXRvSW5wdXQgKiAwLjI3NTtcbiAgICAvLyAgIHBhcmNlbGFEZWR1dGl2YUlSUkYgPSA4NjkuMzY7XG4gICAgLy8gfVxuXG4gICAgLy8gY29uc3Qgc2FsYXJpb0Jhc2UgPSBzYWxhcmlvQnJ1dG9JbnB1dCAtIGRlc2NvbnRvSU5TUztcbiAgICAvLyBjb25zdCBJUlJGID0gc2FsYXJpb0Jhc2UgKiBkZXNjb250b0lSUkYgLSBwYXJjZWxhRGVkdXRpdmFJUlJGO1xuICAgIC8vIGNvbnNvbGUubG9nKCdkZXNjb250b0lSUkYnLCBkZXNjb250b0lSUkYpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdkZXNjb250b0lOU1MnLCBkZXNjb250b0lOU1MpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdzYWxhcmlvQmFzZScsIHNhbGFyaW9CYXNlKTtcbiAgICAvLyBjb25zb2xlLmxvZygnSVJSRicsIElSUkYpO1xuICAgIC8vIGNvbnNvbGUubG9nKCdwYXJjZWxhRGVkdXRpdmFJUlJGJywgcGFyY2VsYURlZHV0aXZhSVJSRik7XG4gICAgXG4gICAgLy8gICBjb25zdCBsaXF1aWRTYWxhcnkgPSBiYXNlIC0gaXJmIC0gZGVzY291bnRzO1xuICAgIC8vICAgcmV0dXJuIGxpcXVpZFNhbGFyeS50b0ZpeGVkKDIpO1xuXG4gICAgLy8gZXhwb3J0IGNvbnN0IGNhbGN1bGF0ZVRheCA9IChncm9zc1NhbGFyeSwgZGVzY291bnRzLCBkZXBlbmRlbnRzKSA9PiB7XG4gICAgLy8gICAvLyBJUlJGID0gKHNhbMOhcmlvIGJydXRvIOKAkyBkZXNjb250byBJTlNTKSB4IGFsw61xdW90YSBJUlJGIOKAkyBwYXJjZWxhIGRlZHV0w612ZWxcbiAgICAvLyAgIGlmIChkZXBlbmRlbnRzID49IDEpIHtcbiAgICAvLyAgICAgY29uc3QgYmFzZSA9IGdyb3NzU2FsYXJ5IC0gZGVwZW5kZW50cyAqIDE4OS41OTtcbiAgICAvLyAgICAgY29uc3QgaXJmID0gYmFzZSAqIHZlcmlmeUlSUkYoZ3Jvc3NTYWxhcnkpLmFsaXF1b3RhIC0gdmVyaWZ5SVJSRihncm9zc1NhbGFyeSkucGFyY2VsO1xuICAgIC8vICAgICBjb25zdCBpbnNzID0gdmVyaWZ5SU5TUyhncm9zc1NhbGFyeSkudmFsdWU7XG4gICAgLy8gICAgIGNvbnN0IGxpcXVpZFNhbGFyeSA9IGdyb3NzU2FsYXJ5IC0gaXJmIC0gaW5zcyAtIGRlc2NvdW50cztcbiAgICAvLyAgICAgcmV0dXJuIGxpcXVpZFNhbGFyeS50b0ZpeGVkKDIpO1xuICAgIC8vICAgfVxuICAgIC8vICAgY29uc29sZS5sb2codmVyaWZ5SU5TUyhncm9zc1NhbGFyeSkudmFsdWUpO1xuICAgIC8vICAgY29uc3QgYmFzZSA9IGdyb3NzU2FsYXJ5IC0gdmVyaWZ5SU5TUyhncm9zc1NhbGFyeSkudmFsdWU7XG4gICAgLy8gICBjb25zdCBpcmYgPSBiYXNlICogdmVyaWZ5SVJSRihncm9zc1NhbGFyeSkuYWxpcXVvdGEgLSB2ZXJpZnlJUlJGKGdyb3NzU2FsYXJ5KS5wYXJjZWw7XG4gICAgLy8gICBjb25zdCBsaXF1aWRTYWxhcnkgPSBiYXNlIC0gaXJmIC0gZGVzY291bnRzO1xuICAgIC8vICAgcmV0dXJuIGxpcXVpZFNhbGFyeS50b0ZpeGVkKDIpO1xuICAgIC8vIH07XG4gIH07XG5cbiAgXG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJ1dHRvbl9fbWFpblwiPlxuICAgICAgPGJ1dHRvbiBvbkNsaWNrPXtoYW5kbGVDYWxjdWxhcigpfT5DQUxDVUxBUjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlNhbGFyeUNvbnRleHQiLCJjYWxjdWxhcklOU1MiLCJCdXR0b25DYWxjdWxhdG9yIiwicHJvcHMiLCJzZXRQb3JjZW50YWdlbUlSUEYiLCJwb3JjZW50YWdlbUlOU1MiLCJzZXRQb3JjZW50YWdlbUlOU1MiLCJzYWxhcmlvQnJ1dG9JbnB1dCIsInRvdGFsRGVzY29udG9JbnB1dCIsImRlcGVuZGVudGVzSW5wdXQiLCJoYW5kbGVDYWxjdWxhciIsInNhbGFyaW9CcnV0byIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InputContainer/ButtonCalculator/index.jsx\n");

/***/ })

});