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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonCalculator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/SalaryContext */ \"./contexts/SalaryContext.js\");\n/* harmony import */ var _utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/calcularINSS */ \"./utils/calcularINSS.js\");\n/* harmony import */ var _utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/calcularIRRF */ \"./utils/calcularIRRF.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ButtonCalculator(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), setPorcentagemIRPF = ref.setPorcentagemIRPF, porcentagemINSS = ref.porcentagemINSS, setPorcentagemINSS = ref.setPorcentagemINSS;\n    var salarioBrutoInput = props.salarioBrutoInput, totalDescontoInput = props.totalDescontoInput, dependentesInput = props.dependentesInput;\n    var handleCalcular = function() {\n        var salarioBrutoINSS = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput);\n        setPorcentagemINSS(salarioBrutoINSS[1]);\n        var salarioBrutoIRRF = (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput);\n        setPorcentagemIRPF(salarioBrutoIRRF[2]);\n        // IRRF = (salário bruto – desconto INSS) x alíquota IRRF – parcela dedutível\n        if (dependentesInput > 0) {\n            var base = grossSalary - dependents * 189.59;\n            var irf = base * verifyIRRF(grossSalary).aliquota - verifyIRRF(grossSalary).parcel;\n            var inss = verifyINSS(grossSalary).value;\n            var liquidSalary = grossSalary - irf - inss - descounts;\n            return liquidSalary.toFixed(2);\n        }\n        console.log(verifyINSS(grossSalary).value);\n        var base1 = grossSalary - verifyINSS(grossSalary).value;\n        var irf1 = base1 * verifyIRRF(grossSalary).aliquota - verifyIRRF(grossSalary).parcel;\n        var liquidSalary1 = base1 - irf1 - descounts;\n        return liquidSalary1.toFixed(2);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"button__main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleCalcular,\n            children: \"CALCULAR\"\n        }, void 0, false, {\n            fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n            lineNumber: 37,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this));\n};\n_s(ButtonCalculator, \"5tAX9UyYB95bANJ8d5EwGGKNTlE=\");\n_c = ButtonCalculator;\nvar _c;\n$RefreshReg$(_c, \"ButtonCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL0J1dHRvbkNhbGN1bGF0b3IvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUN5QjtBQUNMO0FBQ0E7O0FBRXZDLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUMvQyxHQUFLLENBQStETCxHQUF5QixHQUF6QkEsaURBQVUsQ0FBQ0MsK0RBQWEsR0FBcEZLLGtCQUFrQixHQUEwQ04sR0FBeUIsQ0FBckZNLGtCQUFrQixFQUFFQyxlQUFlLEdBQXlCUCxHQUF5QixDQUFqRU8sZUFBZSxFQUFFQyxrQkFBa0IsR0FBS1IsR0FBeUIsQ0FBaERRLGtCQUFrQjtJQUMvRCxHQUFLLENBQUdDLGlCQUFpQixHQUEyQ0osS0FBSyxDQUFqRUksaUJBQWlCLEVBQUVDLGtCQUFrQixHQUF1QkwsS0FBSyxDQUE5Q0ssa0JBQWtCLEVBQUVDLGdCQUFnQixHQUFLTixLQUFLLENBQTFCTSxnQkFBZ0I7SUFFL0QsR0FBSyxDQUFDQyxjQUFjLEdBQUcsUUFDekIsR0FEK0IsQ0FBQztRQUU1QixHQUFLLENBQUNDLGdCQUFnQixHQUFHWCwrREFBWSxDQUFDTyxpQkFBaUI7UUFDdkRELGtCQUFrQixDQUFDSyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXJDLEdBQUssQ0FBQ0MsZ0JBQWdCLEdBQUdYLCtEQUFZLENBQUNNLGlCQUFpQjtRQUN2REgsa0JBQWtCLENBQUNRLGdCQUFnQixDQUFDLENBQUM7UUFFckMsRUFBNkU7UUFDN0UsRUFBRSxFQUFFSCxnQkFBZ0IsR0FBRyxDQUFDLEVBQUUsQ0FBQztZQUN6QixHQUFLLENBQUNJLElBQUksR0FBR0MsV0FBVyxHQUFHQyxVQUFVLEdBQUcsTUFBTTtZQUM5QyxHQUFLLENBQUNDLEdBQUcsR0FBR0gsSUFBSSxHQUFHSSxVQUFVLENBQUNILFdBQVcsRUFBRUksUUFBUSxHQUFHRCxVQUFVLENBQUNILFdBQVcsRUFBRUssTUFBTTtZQUNwRixHQUFLLENBQUNDLElBQUksR0FBR0MsVUFBVSxDQUFDUCxXQUFXLEVBQUVRLEtBQUs7WUFDMUMsR0FBSyxDQUFDQyxZQUFZLEdBQUdULFdBQVcsR0FBR0UsR0FBRyxHQUFHSSxJQUFJLEdBQUdJLFNBQVM7WUFDekQsTUFBTSxDQUFDRCxZQUFZLENBQUNFLE9BQU8sQ0FBQyxDQUFDO1FBQy9CLENBQUM7UUFFREMsT0FBTyxDQUFDQyxHQUFHLENBQUNOLFVBQVUsQ0FBQ1AsV0FBVyxFQUFFUSxLQUFLO1FBQ3pDLEdBQUssQ0FBQ1QsS0FBSSxHQUFHQyxXQUFXLEdBQUdPLFVBQVUsQ0FBQ1AsV0FBVyxFQUFFUSxLQUFLO1FBQ3hELEdBQUssQ0FBQ04sSUFBRyxHQUFHSCxLQUFJLEdBQUdJLFVBQVUsQ0FBQ0gsV0FBVyxFQUFFSSxRQUFRLEdBQUdELFVBQVUsQ0FBQ0gsV0FBVyxFQUFFSyxNQUFNO1FBQ3BGLEdBQUssQ0FBQ0ksYUFBWSxHQUFHVixLQUFJLEdBQUdHLElBQUcsR0FBR1EsU0FBUztRQUMzQyxNQUFNLENBQUNELGFBQVksQ0FBQ0UsT0FBTyxDQUFDLENBQUM7SUFFL0IsQ0FBQztJQUVELE1BQU0sNkVBQ0hHLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWM7OEZBQzFCQyxDQUFNO1lBQUNDLE9BQU8sRUFBRXJCLGNBQWM7c0JBQUUsQ0FBUTs7Ozs7Ozs7Ozs7QUFHL0MsQ0FBQztHQWxDdUJSLGdCQUFnQjtLQUFoQkEsZ0JBQWdCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5wdXRDb250YWluZXIvQnV0dG9uQ2FsY3VsYXRvci9pbmRleC5qc3g/NWU5ZSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDb250ZXh0IH0gZnJvbSAncmVhY3QnOyBcbmltcG9ydCBTYWxhcnlDb250ZXh0IGZyb20gJy4uLy4uLy4uL2NvbnRleHRzL1NhbGFyeUNvbnRleHQnO1xuaW1wb3J0IGNhbGN1bGFySU5TUyBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxjdWxhcklOU1MnO1xuaW1wb3J0IGNhbGN1bGFySVJSRiBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxjdWxhcklSUkYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25DYWxjdWxhdG9yKHByb3BzKSB7XG4gIGNvbnN0IHsgc2V0UG9yY2VudGFnZW1JUlBGLCBwb3JjZW50YWdlbUlOU1MsIHNldFBvcmNlbnRhZ2VtSU5TUyB9ID0gdXNlQ29udGV4dChTYWxhcnlDb250ZXh0KTtcbiAgY29uc3QgeyBzYWxhcmlvQnJ1dG9JbnB1dCwgdG90YWxEZXNjb250b0lucHV0LCBkZXBlbmRlbnRlc0lucHV0IH0gPSBwcm9wcztcblxuICBjb25zdCBoYW5kbGVDYWxjdWxhciA9ICgpID0+IHtcbiAgICBcbiAgICBjb25zdCBzYWxhcmlvQnJ1dG9JTlNTID0gY2FsY3VsYXJJTlNTKHNhbGFyaW9CcnV0b0lucHV0KTtcbiAgICBzZXRQb3JjZW50YWdlbUlOU1Moc2FsYXJpb0JydXRvSU5TU1sxXSlcblxuICAgIGNvbnN0IHNhbGFyaW9CcnV0b0lSUkYgPSBjYWxjdWxhcklSUkYoc2FsYXJpb0JydXRvSW5wdXQpO1xuICAgIHNldFBvcmNlbnRhZ2VtSVJQRihzYWxhcmlvQnJ1dG9JUlJGWzJdKVxuXG4gICAgLy8gSVJSRiA9IChzYWzDoXJpbyBicnV0byDigJMgZGVzY29udG8gSU5TUykgeCBhbMOtcXVvdGEgSVJSRiDigJMgcGFyY2VsYSBkZWR1dMOtdmVsXG4gICAgaWYgKGRlcGVuZGVudGVzSW5wdXQgPiAwKSB7XG4gICAgICBjb25zdCBiYXNlID0gZ3Jvc3NTYWxhcnkgLSBkZXBlbmRlbnRzICogMTg5LjU5O1xuICAgICAgY29uc3QgaXJmID0gYmFzZSAqIHZlcmlmeUlSUkYoZ3Jvc3NTYWxhcnkpLmFsaXF1b3RhIC0gdmVyaWZ5SVJSRihncm9zc1NhbGFyeSkucGFyY2VsO1xuICAgICAgY29uc3QgaW5zcyA9IHZlcmlmeUlOU1MoZ3Jvc3NTYWxhcnkpLnZhbHVlO1xuICAgICAgY29uc3QgbGlxdWlkU2FsYXJ5ID0gZ3Jvc3NTYWxhcnkgLSBpcmYgLSBpbnNzIC0gZGVzY291bnRzO1xuICAgICAgcmV0dXJuIGxpcXVpZFNhbGFyeS50b0ZpeGVkKDIpO1xuICAgIH1cbiAgICBcbiAgICBjb25zb2xlLmxvZyh2ZXJpZnlJTlNTKGdyb3NzU2FsYXJ5KS52YWx1ZSk7XG4gICAgY29uc3QgYmFzZSA9IGdyb3NzU2FsYXJ5IC0gdmVyaWZ5SU5TUyhncm9zc1NhbGFyeSkudmFsdWU7XG4gICAgY29uc3QgaXJmID0gYmFzZSAqIHZlcmlmeUlSUkYoZ3Jvc3NTYWxhcnkpLmFsaXF1b3RhIC0gdmVyaWZ5SVJSRihncm9zc1NhbGFyeSkucGFyY2VsO1xuICAgIGNvbnN0IGxpcXVpZFNhbGFyeSA9IGJhc2UgLSBpcmYgLSBkZXNjb3VudHM7XG4gICAgcmV0dXJuIGxpcXVpZFNhbGFyeS50b0ZpeGVkKDIpO1xuXG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uX19tYWluXCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNhbGN1bGFyfT5DQUxDVUxBUjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG4iXSwibmFtZXMiOlsidXNlQ29udGV4dCIsIlNhbGFyeUNvbnRleHQiLCJjYWxjdWxhcklOU1MiLCJjYWxjdWxhcklSUkYiLCJCdXR0b25DYWxjdWxhdG9yIiwicHJvcHMiLCJzZXRQb3JjZW50YWdlbUlSUEYiLCJwb3JjZW50YWdlbUlOU1MiLCJzZXRQb3JjZW50YWdlbUlOU1MiLCJzYWxhcmlvQnJ1dG9JbnB1dCIsInRvdGFsRGVzY29udG9JbnB1dCIsImRlcGVuZGVudGVzSW5wdXQiLCJoYW5kbGVDYWxjdWxhciIsInNhbGFyaW9CcnV0b0lOU1MiLCJzYWxhcmlvQnJ1dG9JUlJGIiwiYmFzZSIsImdyb3NzU2FsYXJ5IiwiZGVwZW5kZW50cyIsImlyZiIsInZlcmlmeUlSUkYiLCJhbGlxdW90YSIsInBhcmNlbCIsImluc3MiLCJ2ZXJpZnlJTlNTIiwidmFsdWUiLCJsaXF1aWRTYWxhcnkiLCJkZXNjb3VudHMiLCJ0b0ZpeGVkIiwiY29uc29sZSIsImxvZyIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InputContainer/ButtonCalculator/index.jsx\n");

/***/ })

});