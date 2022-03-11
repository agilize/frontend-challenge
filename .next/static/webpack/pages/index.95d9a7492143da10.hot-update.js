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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonCalculator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/SalaryContext */ \"./contexts/SalaryContext.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction ButtonCalculator(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), salarioBruto = ref.salarioBruto, setPorcentagemIRPF = ref.setPorcentagemIRPF, porcentagemINSS = ref.porcentagemINSS, setPorcentagemINSS = ref.setPorcentagemINSS;\n    salarioBrutoInput = {\n        salarioBrutoInput: salarioBrutoInput\n    };\n    totalDescontoInput = {\n        totalDescontoInput: totalDescontoInput\n    };\n    dependentesInput = {\n        dependentesInput: dependentesInput\n    };\n    var handleCalcular = function() {\n        var descontoINSS = 0;\n        var descontoIRPF = 0;\n        if (salarioBruto <= 1212) {\n            setPorcentagemINSS(7.5);\n            descontoINSS = salarioBruto * 0.075;\n        }\n        if (salarioBruto >= 2427.35 && salarioBruto <= 3641.02) {\n            setPorcentagemINSS(9);\n            descontoINSS = salarioBruto * 0.09;\n        }\n        if (salarioBruto >= 3641.03 && salarioBruto <= 7087.21) {\n            setPorcentagemINSS(12);\n            descontoINSS = salarioBruto * 0.12;\n        }\n        if (salarioBruto >= 7087.22) {\n            setPorcentagemINSS(14);\n            descontoINSS = salarioBruto * 0.14;\n        }\n        var parcelaDedutivaIRRF = 0;\n        var descontoIRRF = 0;\n        if (salarioBruto <= 1903.98) {\n            setPorcentagemINSS(0);\n            descontoIRRF = 0;\n            parcelaDedutivaIRRF = 0;\n        }\n        if (salarioBruto >= 1903.99 && salarioBruto <= 2826.65) {\n            setPorcentagemINSS(7.5);\n            descontoIRRF = salarioBruto * 0.075;\n            parcelaDedutivaIRRF = 142.8;\n        }\n        if (salarioBruto >= 2826.66 && salarioBruto <= 3751.05) {\n            setPorcentagemINSS(15);\n            descontoIRRF = salarioBruto * 0.15;\n            parcelaDedutivaIRRF = 354.8;\n        }\n        if (salarioBruto >= 3751.06 && salarioBruto <= 4664.68) {\n            setPorcentagemINSS(22.5);\n            descontoIRRF = salarioBruto * 0.225;\n            parcelaDedutivaIRRF = 636.13;\n        }\n        if (salarioBruto >= 4664.69) {\n            setPorcentagemINSS(27.5);\n            descontoIRRF = salarioBruto * 0.275;\n            parcelaDedutivaIRRF = 869.36;\n        }\n        var salarioBase = salarioBruto - descontoINSS;\n        var IRRF = salarioBase * descontoIRRF - parcelaDedutivaIRRF;\n        console.log('descontoIRRF', descontoIRRF);\n        console.log('descontoINSS', descontoINSS);\n        console.log('salarioBase', salarioBase);\n        console.log('IRRF', IRRF);\n        console.log('parcelaDedutivaIRRF', parcelaDedutivaIRRF);\n    //   const liquidSalary = base - irf - descounts;\n    //   return liquidSalary.toFixed(2);\n    // export const calculateTax = (grossSalary, descounts, dependents) => {\n    //   // IRRF = (salário bruto – desconto INSS) x alíquota IRRF – parcela dedutível\n    //   if (dependents >= 1) {\n    //     const base = grossSalary - dependents * 189.59;\n    //     const irf = base * verifyIRRF(grossSalary).aliquota - verifyIRRF(grossSalary).parcel;\n    //     const inss = verifyINSS(grossSalary).value;\n    //     const liquidSalary = grossSalary - irf - inss - descounts;\n    //     return liquidSalary.toFixed(2);\n    //   }\n    //   console.log(verifyINSS(grossSalary).value);\n    //   const base = grossSalary - verifyINSS(grossSalary).value;\n    //   const irf = base * verifyIRRF(grossSalary).aliquota - verifyIRRF(grossSalary).parcel;\n    //   const liquidSalary = base - irf - descounts;\n    //   return liquidSalary.toFixed(2);\n    // };\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"button__main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleCalcular(),\n            children: \"CALCULAR\"\n        }, void 0, false, {\n            fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n            lineNumber: 100,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n        lineNumber: 99,\n        columnNumber: 5\n    }, this));\n};\n_s(ButtonCalculator, \"r44gmpypvSVrBKIvGBcBpKQbf5A=\");\n_c = ButtonCalculator;\nvar _c;\n$RefreshReg$(_c, \"ButtonCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL0J1dHRvbkNhbGN1bGF0b3IvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBa0M7QUFDeUI7O0FBRTVDLFFBQVEsQ0FBQ0UsZ0JBQWdCLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUMvQyxHQUFLLENBQTZFSCxHQUF5QixHQUF6QkEsaURBQVUsQ0FBQ0MsK0RBQWEsR0FBbEdHLFlBQVksR0FBOERKLEdBQXlCLENBQW5HSSxZQUFZLEVBQUVDLGtCQUFrQixHQUEwQ0wsR0FBeUIsQ0FBckZLLGtCQUFrQixFQUFFQyxlQUFlLEdBQXlCTixHQUF5QixDQUFqRU0sZUFBZSxFQUFFQyxrQkFBa0IsR0FBS1AsR0FBeUIsQ0FBaERPLGtCQUFrQjtJQUU3RUMsaUJBQWlCLEdBQUcsQ0FBQztRQUFDQSxpQkFBaUIsRUFBakJBLGlCQUFpQjtJQUFDLENBQUM7SUFDekNDLGtCQUFrQixHQUFHLENBQUM7UUFBQ0Esa0JBQWtCLEVBQWxCQSxrQkFBa0I7SUFBQyxDQUFDO0lBQzNDQyxnQkFBZ0IsR0FBRyxDQUFDO1FBQUNBLGdCQUFnQixFQUFoQkEsZ0JBQWdCO0lBQUMsQ0FBQztJQUN2QyxHQUFLLENBQUNDLGNBQWMsR0FBRyxRQUN6QixHQUQrQixDQUFDO1FBRzVCLEdBQUcsQ0FBQ0MsWUFBWSxHQUFHLENBQUM7UUFDcEIsR0FBRyxDQUFDQyxZQUFZLEdBQUcsQ0FBQztRQUNwQixFQUFFLEVBQUVULFlBQVksSUFBSSxJQUFJLEVBQUUsQ0FBQztZQUV6Qkcsa0JBQWtCLENBQUMsR0FBRztZQUN0QkssWUFBWSxHQUFHUixZQUFZLEdBQUcsS0FBSztRQUNyQyxDQUFDO1FBRUQsRUFBRSxFQUFFQSxZQUFZLElBQUksT0FBTyxJQUFJQSxZQUFZLElBQUksT0FBTyxFQUFFLENBQUM7WUFFdkRHLGtCQUFrQixDQUFDLENBQUM7WUFDcEJLLFlBQVksR0FBR1IsWUFBWSxHQUFHLElBQUk7UUFDcEMsQ0FBQztRQUVELEVBQUUsRUFBRUEsWUFBWSxJQUFJLE9BQU8sSUFBSUEsWUFBWSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBRXZERyxrQkFBa0IsQ0FBQyxFQUFFO1lBQ3JCSyxZQUFZLEdBQUdSLFlBQVksR0FBRyxJQUFJO1FBQ3BDLENBQUM7UUFFRCxFQUFFLEVBQUVBLFlBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUU1Qkcsa0JBQWtCLENBQUMsRUFBRTtZQUNyQkssWUFBWSxHQUFHUixZQUFZLEdBQUcsSUFBSTtRQUNwQyxDQUFDO1FBRUQsR0FBRyxDQUFDVSxtQkFBbUIsR0FBRyxDQUFDO1FBQzNCLEdBQUcsQ0FBQ0MsWUFBWSxHQUFHLENBQUM7UUFFcEIsRUFBRSxFQUFFWCxZQUFZLElBQUksT0FBTyxFQUFFLENBQUM7WUFDNUJHLGtCQUFrQixDQUFDLENBQUM7WUFDcEJRLFlBQVksR0FBRyxDQUFDO1lBQ2hCRCxtQkFBbUIsR0FBRyxDQUFDO1FBQ3pCLENBQUM7UUFDRCxFQUFFLEVBQUVWLFlBQVksSUFBSSxPQUFPLElBQUlBLFlBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUN2REcsa0JBQWtCLENBQUMsR0FBRztZQUN0QlEsWUFBWSxHQUFHWCxZQUFZLEdBQUcsS0FBSztZQUNuQ1UsbUJBQW1CLEdBQUcsS0FBSztRQUM3QixDQUFDO1FBQ0QsRUFBRSxFQUFFVixZQUFZLElBQUksT0FBTyxJQUFJQSxZQUFZLElBQUksT0FBTyxFQUFFLENBQUM7WUFDdkRHLGtCQUFrQixDQUFDLEVBQUU7WUFDckJRLFlBQVksR0FBR1gsWUFBWSxHQUFHLElBQUk7WUFDbENVLG1CQUFtQixHQUFHLEtBQUs7UUFDN0IsQ0FBQztRQUNELEVBQUUsRUFBRVYsWUFBWSxJQUFJLE9BQU8sSUFBSUEsWUFBWSxJQUFJLE9BQU8sRUFBRSxDQUFDO1lBQ3ZERyxrQkFBa0IsQ0FBQyxJQUFJO1lBQ3ZCUSxZQUFZLEdBQUdYLFlBQVksR0FBRyxLQUFLO1lBQ25DVSxtQkFBbUIsR0FBRyxNQUFNO1FBQzlCLENBQUM7UUFDRCxFQUFFLEVBQUVWLFlBQVksSUFBSSxPQUFPLEVBQUUsQ0FBQztZQUM1Qkcsa0JBQWtCLENBQUMsSUFBSTtZQUN2QlEsWUFBWSxHQUFHWCxZQUFZLEdBQUcsS0FBSztZQUNuQ1UsbUJBQW1CLEdBQUcsTUFBTTtRQUM5QixDQUFDO1FBRUQsR0FBSyxDQUFDRSxXQUFXLEdBQUdaLFlBQVksR0FBR1EsWUFBWTtRQUMvQyxHQUFLLENBQUNLLElBQUksR0FBR0QsV0FBVyxHQUFHRCxZQUFZLEdBQUdELG1CQUFtQjtRQUM3REksT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBYyxlQUFFSixZQUFZO1FBQ3hDRyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFjLGVBQUVQLFlBQVk7UUFDeENNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLENBQWEsY0FBRUgsV0FBVztRQUN0Q0UsT0FBTyxDQUFDQyxHQUFHLENBQUMsQ0FBTSxPQUFFRixJQUFJO1FBQ3hCQyxPQUFPLENBQUNDLEdBQUcsQ0FBQyxDQUFxQixzQkFBRUwsbUJBQW1CO0lBRXRELEVBQWlEO0lBQ2pELEVBQW9DO0lBRXBDLEVBQXdFO0lBQ3hFLEVBQWtGO0lBQ2xGLEVBQTJCO0lBQzNCLEVBQXNEO0lBQ3RELEVBQTRGO0lBQzVGLEVBQWtEO0lBQ2xELEVBQWlFO0lBQ2pFLEVBQXNDO0lBQ3RDLEVBQU07SUFDTixFQUFnRDtJQUNoRCxFQUE4RDtJQUM5RCxFQUEwRjtJQUMxRixFQUFpRDtJQUNqRCxFQUFvQztJQUNwQyxFQUFLO0lBQ1AsQ0FBQztJQUlELE1BQU0sNkVBQ0hNLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWM7OEZBQzFCQyxDQUFNO1lBQUNDLE9BQU8sRUFBRVosY0FBYztzQkFBSSxDQUFROzs7Ozs7Ozs7OztBQUdqRCxDQUFDO0dBbkd1QlQsZ0JBQWdCO0tBQWhCQSxnQkFBZ0IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9JbnB1dENvbnRhaW5lci9CdXR0b25DYWxjdWxhdG9yL2luZGV4LmpzeD81ZTllIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUNvbnRleHQgfSBmcm9tICdyZWFjdCc7IFxuaW1wb3J0IFNhbGFyeUNvbnRleHQgZnJvbSAnLi4vLi4vLi4vY29udGV4dHMvU2FsYXJ5Q29udGV4dCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEJ1dHRvbkNhbGN1bGF0b3IocHJvcHMpIHtcbiAgY29uc3QgeyBzYWxhcmlvQnJ1dG8sIHNldFBvcmNlbnRhZ2VtSVJQRiwgcG9yY2VudGFnZW1JTlNTLCBzZXRQb3JjZW50YWdlbUlOU1MgfSA9IHVzZUNvbnRleHQoU2FsYXJ5Q29udGV4dCk7XG4gIFxuICBzYWxhcmlvQnJ1dG9JbnB1dCA9IHsgc2FsYXJpb0JydXRvSW5wdXQgfTtcbiAgdG90YWxEZXNjb250b0lucHV0ID0geyB0b3RhbERlc2NvbnRvSW5wdXQgfTtcbiAgZGVwZW5kZW50ZXNJbnB1dCA9IHsgZGVwZW5kZW50ZXNJbnB1dCB9O1xuICBjb25zdCBoYW5kbGVDYWxjdWxhciA9ICgpID0+IHtcbiAgICBcbiAgICAgIFxuICAgIGxldCBkZXNjb250b0lOU1MgPSAwO1xuICAgIGxldCBkZXNjb250b0lSUEYgPSAwO1xuICAgIGlmIChzYWxhcmlvQnJ1dG8gPD0gMTIxMikge1xuXG4gICAgICBzZXRQb3JjZW50YWdlbUlOU1MoNy41KTtcbiAgICAgIGRlc2NvbnRvSU5TUyA9IHNhbGFyaW9CcnV0byAqIDAuMDc1O1xuICAgIH1cblxuICAgIGlmIChzYWxhcmlvQnJ1dG8gPj0gMjQyNy4zNSAmJiBzYWxhcmlvQnJ1dG8gPD0gMzY0MS4wMikge1xuXG4gICAgICBzZXRQb3JjZW50YWdlbUlOU1MoOSk7XG4gICAgICBkZXNjb250b0lOU1MgPSBzYWxhcmlvQnJ1dG8gKiAwLjA5O1xuICAgIH1cblxuICAgIGlmIChzYWxhcmlvQnJ1dG8gPj0gMzY0MS4wMyAmJiBzYWxhcmlvQnJ1dG8gPD0gNzA4Ny4yMSkge1xuXG4gICAgICBzZXRQb3JjZW50YWdlbUlOU1MoMTIpO1xuICAgICAgZGVzY29udG9JTlNTID0gc2FsYXJpb0JydXRvICogMC4xMjtcbiAgICB9XG5cbiAgICBpZiAoc2FsYXJpb0JydXRvID49IDcwODcuMjIpIHtcblxuICAgICAgc2V0UG9yY2VudGFnZW1JTlNTKDE0KTtcbiAgICAgIGRlc2NvbnRvSU5TUyA9IHNhbGFyaW9CcnV0byAqIDAuMTQ7XG4gICAgfVxuXG4gICAgbGV0IHBhcmNlbGFEZWR1dGl2YUlSUkYgPSAwO1xuICAgIGxldCBkZXNjb250b0lSUkYgPSAwO1xuXG4gICAgaWYgKHNhbGFyaW9CcnV0byA8PSAxOTAzLjk4KSB7XG4gICAgICBzZXRQb3JjZW50YWdlbUlOU1MoMCk7XG4gICAgICBkZXNjb250b0lSUkYgPSAwO1xuICAgICAgcGFyY2VsYURlZHV0aXZhSVJSRiA9IDA7XG4gICAgfVxuICAgIGlmIChzYWxhcmlvQnJ1dG8gPj0gMTkwMy45OSAmJiBzYWxhcmlvQnJ1dG8gPD0gMjgyNi42NSkge1xuICAgICAgc2V0UG9yY2VudGFnZW1JTlNTKDcuNSk7XG4gICAgICBkZXNjb250b0lSUkYgPSBzYWxhcmlvQnJ1dG8gKiAwLjA3NTtcbiAgICAgIHBhcmNlbGFEZWR1dGl2YUlSUkYgPSAxNDIuODtcbiAgICB9XG4gICAgaWYgKHNhbGFyaW9CcnV0byA+PSAyODI2LjY2ICYmIHNhbGFyaW9CcnV0byA8PSAzNzUxLjA1KSB7XG4gICAgICBzZXRQb3JjZW50YWdlbUlOU1MoMTUpO1xuICAgICAgZGVzY29udG9JUlJGID0gc2FsYXJpb0JydXRvICogMC4xNTtcbiAgICAgIHBhcmNlbGFEZWR1dGl2YUlSUkYgPSAzNTQuODtcbiAgICB9XG4gICAgaWYgKHNhbGFyaW9CcnV0byA+PSAzNzUxLjA2ICYmIHNhbGFyaW9CcnV0byA8PSA0NjY0LjY4KSB7XG4gICAgICBzZXRQb3JjZW50YWdlbUlOU1MoMjIuNSk7XG4gICAgICBkZXNjb250b0lSUkYgPSBzYWxhcmlvQnJ1dG8gKiAwLjIyNTtcbiAgICAgIHBhcmNlbGFEZWR1dGl2YUlSUkYgPSA2MzYuMTM7XG4gICAgfVxuICAgIGlmIChzYWxhcmlvQnJ1dG8gPj0gNDY2NC42OSkge1xuICAgICAgc2V0UG9yY2VudGFnZW1JTlNTKDI3LjUpO1xuICAgICAgZGVzY29udG9JUlJGID0gc2FsYXJpb0JydXRvICogMC4yNzU7XG4gICAgICBwYXJjZWxhRGVkdXRpdmFJUlJGID0gODY5LjM2O1xuICAgIH1cblxuICAgIGNvbnN0IHNhbGFyaW9CYXNlID0gc2FsYXJpb0JydXRvIC0gZGVzY29udG9JTlNTO1xuICAgIGNvbnN0IElSUkYgPSBzYWxhcmlvQmFzZSAqIGRlc2NvbnRvSVJSRiAtIHBhcmNlbGFEZWR1dGl2YUlSUkY7XG4gICAgY29uc29sZS5sb2coJ2Rlc2NvbnRvSVJSRicsIGRlc2NvbnRvSVJSRik7XG4gICAgY29uc29sZS5sb2coJ2Rlc2NvbnRvSU5TUycsIGRlc2NvbnRvSU5TUyk7XG4gICAgY29uc29sZS5sb2coJ3NhbGFyaW9CYXNlJywgc2FsYXJpb0Jhc2UpO1xuICAgIGNvbnNvbGUubG9nKCdJUlJGJywgSVJSRik7XG4gICAgY29uc29sZS5sb2coJ3BhcmNlbGFEZWR1dGl2YUlSUkYnLCBwYXJjZWxhRGVkdXRpdmFJUlJGKTtcbiAgICBcbiAgICAvLyAgIGNvbnN0IGxpcXVpZFNhbGFyeSA9IGJhc2UgLSBpcmYgLSBkZXNjb3VudHM7XG4gICAgLy8gICByZXR1cm4gbGlxdWlkU2FsYXJ5LnRvRml4ZWQoMik7XG5cbiAgICAvLyBleHBvcnQgY29uc3QgY2FsY3VsYXRlVGF4ID0gKGdyb3NzU2FsYXJ5LCBkZXNjb3VudHMsIGRlcGVuZGVudHMpID0+IHtcbiAgICAvLyAgIC8vIElSUkYgPSAoc2Fsw6FyaW8gYnJ1dG8g4oCTIGRlc2NvbnRvIElOU1MpIHggYWzDrXF1b3RhIElSUkYg4oCTIHBhcmNlbGEgZGVkdXTDrXZlbFxuICAgIC8vICAgaWYgKGRlcGVuZGVudHMgPj0gMSkge1xuICAgIC8vICAgICBjb25zdCBiYXNlID0gZ3Jvc3NTYWxhcnkgLSBkZXBlbmRlbnRzICogMTg5LjU5O1xuICAgIC8vICAgICBjb25zdCBpcmYgPSBiYXNlICogdmVyaWZ5SVJSRihncm9zc1NhbGFyeSkuYWxpcXVvdGEgLSB2ZXJpZnlJUlJGKGdyb3NzU2FsYXJ5KS5wYXJjZWw7XG4gICAgLy8gICAgIGNvbnN0IGluc3MgPSB2ZXJpZnlJTlNTKGdyb3NzU2FsYXJ5KS52YWx1ZTtcbiAgICAvLyAgICAgY29uc3QgbGlxdWlkU2FsYXJ5ID0gZ3Jvc3NTYWxhcnkgLSBpcmYgLSBpbnNzIC0gZGVzY291bnRzO1xuICAgIC8vICAgICByZXR1cm4gbGlxdWlkU2FsYXJ5LnRvRml4ZWQoMik7XG4gICAgLy8gICB9XG4gICAgLy8gICBjb25zb2xlLmxvZyh2ZXJpZnlJTlNTKGdyb3NzU2FsYXJ5KS52YWx1ZSk7XG4gICAgLy8gICBjb25zdCBiYXNlID0gZ3Jvc3NTYWxhcnkgLSB2ZXJpZnlJTlNTKGdyb3NzU2FsYXJ5KS52YWx1ZTtcbiAgICAvLyAgIGNvbnN0IGlyZiA9IGJhc2UgKiB2ZXJpZnlJUlJGKGdyb3NzU2FsYXJ5KS5hbGlxdW90YSAtIHZlcmlmeUlSUkYoZ3Jvc3NTYWxhcnkpLnBhcmNlbDtcbiAgICAvLyAgIGNvbnN0IGxpcXVpZFNhbGFyeSA9IGJhc2UgLSBpcmYgLSBkZXNjb3VudHM7XG4gICAgLy8gICByZXR1cm4gbGlxdWlkU2FsYXJ5LnRvRml4ZWQoMik7XG4gICAgLy8gfTtcbiAgfTtcblxuICBcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uX19tYWluXCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNhbGN1bGFyKCl9PkNBTENVTEFSPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiU2FsYXJ5Q29udGV4dCIsIkJ1dHRvbkNhbGN1bGF0b3IiLCJwcm9wcyIsInNhbGFyaW9CcnV0byIsInNldFBvcmNlbnRhZ2VtSVJQRiIsInBvcmNlbnRhZ2VtSU5TUyIsInNldFBvcmNlbnRhZ2VtSU5TUyIsInNhbGFyaW9CcnV0b0lucHV0IiwidG90YWxEZXNjb250b0lucHV0IiwiZGVwZW5kZW50ZXNJbnB1dCIsImhhbmRsZUNhbGN1bGFyIiwiZGVzY29udG9JTlNTIiwiZGVzY29udG9JUlBGIiwicGFyY2VsYURlZHV0aXZhSVJSRiIsImRlc2NvbnRvSVJSRiIsInNhbGFyaW9CYXNlIiwiSVJSRiIsImNvbnNvbGUiLCJsb2ciLCJkaXYiLCJjbGFzc05hbWUiLCJidXR0b24iLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/InputContainer/ButtonCalculator/index.jsx\n");

/***/ })

});