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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonCalculator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/SalaryContext */ \"./contexts/SalaryContext.js\");\n/* harmony import */ var _utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/calcularINSS */ \"./utils/calcularINSS.js\");\n/* harmony import */ var _utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/calcularIRRF */ \"./utils/calcularIRRF.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ButtonCalculator(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), setPorcentagemIRPF = ref.setPorcentagemIRPF, setPorcentagemINSS = ref.setPorcentagemINSS;\n    var salarioBrutoInput = props.salarioBrutoInput, totalDescontoInput = props.totalDescontoInput, dependentesInput = props.dependentesInput;\n    var handleCalcular = function() {\n        var salarioBrutoINSS = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput);\n        setPorcentagemINSS(salarioBrutoINSS[1]);\n        var salarioBrutoIRRF = (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput);\n        setPorcentagemIRPF(salarioBrutoIRRF[2]);\n        // IRRF = (salário bruto – desconto INSS) x alíquota IRRF – parcela dedutível\n        if (dependentesInput > 0) {\n            var salarioBase = salarioBrutoInput - dependentesInput * 189.59;\n            var IRRF = salarioBase * (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[0] - (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[1];\n            var INSS = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput)[0];\n            var salarioLiquido = salarioBrutoInput - IRRF - INSS - totalDescontoInput;\n        }\n        var salarioBase1 = salarioBrutoInput - (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput).value;\n        var irf = salarioBase1 * verifyIRRF(salarioBrutoInput).aliquota - verifyIRRF(salarioBrutoInput).parcel;\n        var liquidSalary = base - irf - totalDescontoInput;\n        return liquidSalary.toFixed(2);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"button__main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleCalcular,\n            children: \"CALCULAR\"\n        }, void 0, false, {\n            fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n            lineNumber: 36,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, this));\n};\n_s(ButtonCalculator, \"Is2MaVOM2fG6ZjzRSRt9JwOvVlQ=\");\n_c = ButtonCalculator;\nvar _c;\n$RefreshReg$(_c, \"ButtonCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL0J1dHRvbkNhbGN1bGF0b3IvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUN5QjtBQUNMO0FBQ0E7O0FBRXZDLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUMvQyxHQUFLLENBQThDTCxHQUF5QixHQUF6QkEsaURBQVUsQ0FBQ0MsK0RBQWEsR0FBbkVLLGtCQUFrQixHQUF5Qk4sR0FBeUIsQ0FBcEVNLGtCQUFrQixFQUFFQyxrQkFBa0IsR0FBS1AsR0FBeUIsQ0FBaERPLGtCQUFrQjtJQUM5QyxHQUFLLENBQUdDLGlCQUFpQixHQUEyQ0gsS0FBSyxDQUFqRUcsaUJBQWlCLEVBQUVDLGtCQUFrQixHQUF1QkosS0FBSyxDQUE5Q0ksa0JBQWtCLEVBQUVDLGdCQUFnQixHQUFLTCxLQUFLLENBQTFCSyxnQkFBZ0I7SUFFL0QsR0FBSyxDQUFDQyxjQUFjLEdBQUcsUUFDekIsR0FEK0IsQ0FBQztRQUU1QixHQUFLLENBQUNDLGdCQUFnQixHQUFHViwrREFBWSxDQUFDTSxpQkFBaUI7UUFDdkRELGtCQUFrQixDQUFDSyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXJDLEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQUdWLCtEQUFZLENBQUNLLGlCQUFpQjtRQUN2REYsa0JBQWtCLENBQUNPLGdCQUFnQixDQUFDLENBQUM7UUFFckMsRUFBNkU7UUFDN0UsRUFBRSxFQUFFSCxnQkFBZ0IsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN6QixHQUFLLENBQUNJLFdBQVcsR0FBR04saUJBQWlCLEdBQUdFLGdCQUFnQixHQUFHLE1BQU07WUFDakUsR0FBSyxDQUFDSyxJQUFJLEdBQUdELFdBQVcsR0FBR1gsK0RBQVksQ0FBQ0ssaUJBQWlCLEVBQUUsQ0FBQyxJQUFJTCwrREFBWSxDQUFDSyxpQkFBaUIsRUFBRSxDQUFDO1lBQ2pHLEdBQUssQ0FBQ1EsSUFBSSxHQUFHZCwrREFBWSxDQUFDTSxpQkFBaUIsRUFBRSxDQUFDO1lBQzlDLEdBQUssQ0FBQ1MsY0FBYyxHQUFJVCxpQkFBaUIsR0FBR08sSUFBSSxHQUFHQyxJQUFJLEdBQUdQLGtCQUFrQjtRQUM5RSxDQUFDO1FBR0QsR0FBSyxDQUFDSyxZQUFXLEdBQUdOLGlCQUFpQixHQUFHTiwrREFBWSxDQUFDTSxpQkFBaUIsRUFBRVUsS0FBSztRQUM3RSxHQUFLLENBQUNDLEdBQUcsR0FBR0wsWUFBVyxHQUFHTSxVQUFVLENBQUNaLGlCQUFpQixFQUFFYSxRQUFRLEdBQUdELFVBQVUsQ0FBQ1osaUJBQWlCLEVBQUVjLE1BQU07UUFDdkcsR0FBSyxDQUFDQyxZQUFZLEdBQUdDLElBQUksR0FBR0wsR0FBRyxHQUFHVixrQkFBa0I7UUFDcEQsTUFBTSxDQUFDYyxZQUFZLENBQUNFLE9BQU8sQ0FBQyxDQUFDO0lBRS9CLENBQUM7SUFFRCxNQUFNLDZFQUNIQyxDQUFHO1FBQUNDLFNBQVMsRUFBQyxDQUFjOzhGQUMxQkMsQ0FBTTtZQUFDQyxPQUFPLEVBQUVsQixjQUFjO3NCQUFFLENBQVE7Ozs7Ozs7Ozs7O0FBRy9DLENBQUM7R0FqQ3VCUCxnQkFBZ0I7S0FBaEJBLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL0J1dHRvbkNhbGN1bGF0b3IvaW5kZXguanN4PzVlOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JzsgXG5pbXBvcnQgU2FsYXJ5Q29udGV4dCBmcm9tICcuLi8uLi8uLi9jb250ZXh0cy9TYWxhcnlDb250ZXh0JztcbmltcG9ydCBjYWxjdWxhcklOU1MgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsY3VsYXJJTlNTJztcbmltcG9ydCBjYWxjdWxhcklSUkYgZnJvbSAnLi4vLi4vLi4vdXRpbHMvY2FsY3VsYXJJUlJGJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQnV0dG9uQ2FsY3VsYXRvcihwcm9wcykge1xuICBjb25zdCB7IHNldFBvcmNlbnRhZ2VtSVJQRiwgc2V0UG9yY2VudGFnZW1JTlNTIH0gPSB1c2VDb250ZXh0KFNhbGFyeUNvbnRleHQpO1xuICBjb25zdCB7IHNhbGFyaW9CcnV0b0lucHV0LCB0b3RhbERlc2NvbnRvSW5wdXQsIGRlcGVuZGVudGVzSW5wdXQgfSA9IHByb3BzO1xuXG4gIGNvbnN0IGhhbmRsZUNhbGN1bGFyID0gKCkgPT4ge1xuICAgIFxuICAgIGNvbnN0IHNhbGFyaW9CcnV0b0lOU1MgPSBjYWxjdWxhcklOU1Moc2FsYXJpb0JydXRvSW5wdXQpO1xuICAgIHNldFBvcmNlbnRhZ2VtSU5TUyhzYWxhcmlvQnJ1dG9JTlNTWzFdKVxuXG4gICAgY29uc3Qgc2FsYXJpb0JydXRvSVJSRiA9IGNhbGN1bGFySVJSRihzYWxhcmlvQnJ1dG9JbnB1dCk7XG4gICAgc2V0UG9yY2VudGFnZW1JUlBGKHNhbGFyaW9CcnV0b0lSUkZbMl0pXG5cbiAgICAvLyBJUlJGID0gKHNhbMOhcmlvIGJydXRvIOKAkyBkZXNjb250byBJTlNTKSB4IGFsw61xdW90YSBJUlJGIOKAkyBwYXJjZWxhIGRlZHV0w612ZWxcbiAgICBpZiAoZGVwZW5kZW50ZXNJbnB1dCA+IDApIHtcbiAgICAgIGNvbnN0IHNhbGFyaW9CYXNlID0gc2FsYXJpb0JydXRvSW5wdXQgLSBkZXBlbmRlbnRlc0lucHV0ICogMTg5LjU5O1xuICAgICAgY29uc3QgSVJSRiA9IHNhbGFyaW9CYXNlICogY2FsY3VsYXJJUlJGKHNhbGFyaW9CcnV0b0lucHV0KVswXSAtIGNhbGN1bGFySVJSRihzYWxhcmlvQnJ1dG9JbnB1dClbMV07XG4gICAgICBjb25zdCBJTlNTID0gY2FsY3VsYXJJTlNTKHNhbGFyaW9CcnV0b0lucHV0KVswXTtcbiAgICAgIGNvbnN0IHNhbGFyaW9MaXF1aWRvID0gKHNhbGFyaW9CcnV0b0lucHV0IC0gSVJSRiAtIElOU1MgLSB0b3RhbERlc2NvbnRvSW5wdXQpO1xuICAgIH1cblxuICAgIFxuICAgIGNvbnN0IHNhbGFyaW9CYXNlID0gc2FsYXJpb0JydXRvSW5wdXQgLSBjYWxjdWxhcklOU1Moc2FsYXJpb0JydXRvSW5wdXQpLnZhbHVlO1xuICAgIGNvbnN0IGlyZiA9IHNhbGFyaW9CYXNlICogdmVyaWZ5SVJSRihzYWxhcmlvQnJ1dG9JbnB1dCkuYWxpcXVvdGEgLSB2ZXJpZnlJUlJGKHNhbGFyaW9CcnV0b0lucHV0KS5wYXJjZWw7XG4gICAgY29uc3QgbGlxdWlkU2FsYXJ5ID0gYmFzZSAtIGlyZiAtIHRvdGFsRGVzY29udG9JbnB1dDtcbiAgICByZXR1cm4gbGlxdWlkU2FsYXJ5LnRvRml4ZWQoMik7XG5cbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJidXR0b25fX21haW5cIj5cbiAgICAgIDxidXR0b24gb25DbGljaz17aGFuZGxlQ2FsY3VsYXJ9PkNBTENVTEFSPC9idXR0b24+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbiJdLCJuYW1lcyI6WyJ1c2VDb250ZXh0IiwiU2FsYXJ5Q29udGV4dCIsImNhbGN1bGFySU5TUyIsImNhbGN1bGFySVJSRiIsIkJ1dHRvbkNhbGN1bGF0b3IiLCJwcm9wcyIsInNldFBvcmNlbnRhZ2VtSVJQRiIsInNldFBvcmNlbnRhZ2VtSU5TUyIsInNhbGFyaW9CcnV0b0lucHV0IiwidG90YWxEZXNjb250b0lucHV0IiwiZGVwZW5kZW50ZXNJbnB1dCIsImhhbmRsZUNhbGN1bGFyIiwic2FsYXJpb0JydXRvSU5TUyIsInNhbGFyaW9CcnV0b0lSUkYiLCJzYWxhcmlvQmFzZSIsIklSUkYiLCJJTlNTIiwic2FsYXJpb0xpcXVpZG8iLCJ2YWx1ZSIsImlyZiIsInZlcmlmeUlSUkYiLCJhbGlxdW90YSIsInBhcmNlbCIsImxpcXVpZFNhbGFyeSIsImJhc2UiLCJ0b0ZpeGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InputContainer/ButtonCalculator/index.jsx\n");

/***/ })

});