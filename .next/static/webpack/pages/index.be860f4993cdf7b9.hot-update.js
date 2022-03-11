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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ButtonCalculator; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../contexts/SalaryContext */ \"./contexts/SalaryContext.js\");\n/* harmony import */ var _utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../utils/calcularINSS */ \"./utils/calcularINSS.js\");\n/* harmony import */ var _utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../utils/calcularIRRF */ \"./utils/calcularIRRF.js\");\n\n\n\n\n\nvar _s = $RefreshSig$();\nfunction ButtonCalculator(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useContext)(_contexts_SalaryContext__WEBPACK_IMPORTED_MODULE_2__[\"default\"]), setSalarioLiquido = ref.setSalarioLiquido, setPorcentagemIRRF = ref.setPorcentagemIRRF, setPorcentagemINSS = ref.setPorcentagemINSS, setSalarioBruto = ref.setSalarioBruto, setValorINSS = ref.setValorINSS;\n    var salarioBrutoInput = props.salarioBrutoInput, totalDescontoInput = props.totalDescontoInput, dependentesInput = props.dependentesInput;\n    var handleCalcular = function() {\n        setSalarioBruto(salarioBrutoInput);\n        var salarioBrutoINSS = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput);\n        setPorcentagemINSS(salarioBrutoINSS[1]);\n        var salarioBrutoIRRF = (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput);\n        setPorcentagemIRRF(salarioBrutoIRRF[2]);\n        var salario;\n        var salarioBaseINSS = 0;\n        if (dependentesInput >= 1) {\n            var INSS = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput[0] - dependentesInput * 189.59);\n            setValorINSS(INSS);\n            salarioBaseINSS = salarioBrutoInput - dependentesInput * 189.59 - INSS;\n        } else {\n            var INSS1 = (0,_utils_calcularINSS__WEBPACK_IMPORTED_MODULE_3__[\"default\"])(salarioBrutoInput)[0];\n            setValorINSS(INSS1);\n            salarioBaseINSS = salarioBrutoInput - INSS1;\n        }\n        var IRRF = salarioBaseINSS * (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[0] - (0,_utils_calcularIRRF__WEBPACK_IMPORTED_MODULE_4__[\"default\"])(salarioBrutoInput)[1];\n        var salarioLiquido = salarioBaseINSS - IRRF - totalDescontoInput;\n        if (salarioLiquido) setSalarioLiquido(salarioLiquido.toFixed(2));\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"button__main\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n            onClick: handleCalcular,\n            children: \"CALCULAR\"\n        }, void 0, false, {\n            fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n            lineNumber: 50,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/ButtonCalculator/index.jsx\",\n        lineNumber: 49,\n        columnNumber: 5\n    }, this));\n};\n_s(ButtonCalculator, \"rFV3fG+F4HqcaVmnOqVcHFG/WBk=\");\n_c = ButtonCalculator;\nvar _c;\n$RefreshReg$(_c, \"ButtonCalculator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL0J1dHRvbkNhbGN1bGF0b3IvaW5kZXguanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFrQztBQUN5QjtBQUNMO0FBQ0E7O0FBRXZDLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUMvQyxHQUFLLENBTURMLEdBQXlCLEdBQXpCQSxpREFBVSxDQUFDQywrREFBYSxHQUwxQkssaUJBQWlCLEdBS2ZOLEdBQXlCLENBTDNCTSxpQkFBaUIsRUFDakJDLGtCQUFrQixHQUloQlAsR0FBeUIsQ0FKM0JPLGtCQUFrQixFQUNsQkMsa0JBQWtCLEdBR2hCUixHQUF5QixDQUgzQlEsa0JBQWtCLEVBQ2xCQyxlQUFlLEdBRWJULEdBQXlCLENBRjNCUyxlQUFlLEVBQ2ZDLFlBQVksR0FDVlYsR0FBeUIsQ0FEM0JVLFlBQVk7SUFHZCxHQUFLLENBQUdDLGlCQUFpQixHQUEyQ04sS0FBSyxDQUFqRU0saUJBQWlCLEVBQUVDLGtCQUFrQixHQUF1QlAsS0FBSyxDQUE5Q08sa0JBQWtCLEVBQUVDLGdCQUFnQixHQUFLUixLQUFLLENBQTFCUSxnQkFBZ0I7SUFFL0QsR0FBSyxDQUFDQyxjQUFjLEdBQUcsUUFDekIsR0FEK0IsQ0FBQztRQUM1QkwsZUFBZSxDQUFDRSxpQkFBaUI7UUFDakMsR0FBSyxDQUFDSSxnQkFBZ0IsR0FBR2IsK0RBQVksQ0FBQ1MsaUJBQWlCO1FBQ3ZESCxrQkFBa0IsQ0FBQ08sZ0JBQWdCLENBQUMsQ0FBQztRQUVyQyxHQUFLLENBQUNDLGdCQUFnQixHQUFHYiwrREFBWSxDQUFDUSxpQkFBaUI7UUFDdkRKLGtCQUFrQixDQUFDUyxnQkFBZ0IsQ0FBQyxDQUFDO1FBRXJDLEdBQUcsQ0FBQ0MsT0FBTztRQUNYLEdBQUcsQ0FBQ0MsZUFBZSxHQUFHLENBQUM7UUFFdkIsRUFBRSxFQUFFTCxnQkFBZ0IsSUFBSSxDQUFDLEVBQUUsQ0FBQztZQUMxQixHQUFLLENBQUNNLElBQUksR0FBR2pCLCtEQUFZLENBQUVTLGlCQUFpQixDQUFFLENBQUMsSUFBS0UsZ0JBQWdCLEdBQUcsTUFBTTtZQUM3RUgsWUFBWSxDQUFDUyxJQUFJO1lBQ2pCRCxlQUFlLEdBQUlQLGlCQUFpQixHQUFJRSxnQkFBZ0IsR0FBRyxNQUFNLEdBQUtNLElBQUk7UUFFNUUsQ0FBQyxNQUFNLENBQUM7WUFDTixHQUFLLENBQUNBLEtBQUksR0FBR2pCLCtEQUFZLENBQUNTLGlCQUFpQixFQUFFLENBQUM7WUFDOUNELFlBQVksQ0FBQ1MsS0FBSTtZQUNqQkQsZUFBZSxHQUFHUCxpQkFBaUIsR0FBR1EsS0FBSTtRQUM1QyxDQUFDO1FBRUMsR0FBSyxDQUFDQyxJQUFJLEdBQ1BGLGVBQWUsR0FBR2YsK0RBQVksQ0FBQ1EsaUJBQWlCLEVBQUUsQ0FBQyxJQUFLUiwrREFBWSxDQUFDUSxpQkFBaUIsRUFBRSxDQUFDO1FBQzVGLEdBQUssQ0FBQ1UsY0FBYyxHQUFHSCxlQUFlLEdBQUdFLElBQUksR0FBR1Isa0JBQWtCO1FBRWxFLEVBQUUsRUFBRVMsY0FBYyxFQUFFZixpQkFBaUIsQ0FBQ2UsY0FBYyxDQUFDQyxPQUFPLENBQUMsQ0FBQztJQUdsRSxDQUFDO0lBRUQsTUFBTSw2RUFDSEMsQ0FBRztRQUFDQyxTQUFTLEVBQUMsQ0FBYzs4RkFDMUJDLENBQU07WUFBQ0MsT0FBTyxFQUFFWixjQUFjO3NCQUFFLENBQVE7Ozs7Ozs7Ozs7O0FBRy9DLENBQUM7R0EvQ3VCVixnQkFBZ0I7S0FBaEJBLGdCQUFnQiIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL0J1dHRvbkNhbGN1bGF0b3IvaW5kZXguanN4PzVlOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ29udGV4dCB9IGZyb20gJ3JlYWN0JztcbmltcG9ydCBTYWxhcnlDb250ZXh0IGZyb20gJy4uLy4uLy4uL2NvbnRleHRzL1NhbGFyeUNvbnRleHQnO1xuaW1wb3J0IGNhbGN1bGFySU5TUyBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxjdWxhcklOU1MnO1xuaW1wb3J0IGNhbGN1bGFySVJSRiBmcm9tICcuLi8uLi8uLi91dGlscy9jYWxjdWxhcklSUkYnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBCdXR0b25DYWxjdWxhdG9yKHByb3BzKSB7XG4gIGNvbnN0IHtcbiAgICBzZXRTYWxhcmlvTGlxdWlkbyxcbiAgICBzZXRQb3JjZW50YWdlbUlSUkYsXG4gICAgc2V0UG9yY2VudGFnZW1JTlNTLFxuICAgIHNldFNhbGFyaW9CcnV0byxcbiAgICBzZXRWYWxvcklOU1MsXG4gIH0gPSB1c2VDb250ZXh0KFNhbGFyeUNvbnRleHQpO1xuXG4gIGNvbnN0IHsgc2FsYXJpb0JydXRvSW5wdXQsIHRvdGFsRGVzY29udG9JbnB1dCwgZGVwZW5kZW50ZXNJbnB1dCB9ID0gcHJvcHM7XG5cbiAgY29uc3QgaGFuZGxlQ2FsY3VsYXIgPSAoKSA9PiB7XG4gICAgc2V0U2FsYXJpb0JydXRvKHNhbGFyaW9CcnV0b0lucHV0KTtcbiAgICBjb25zdCBzYWxhcmlvQnJ1dG9JTlNTID0gY2FsY3VsYXJJTlNTKHNhbGFyaW9CcnV0b0lucHV0KTtcbiAgICBzZXRQb3JjZW50YWdlbUlOU1Moc2FsYXJpb0JydXRvSU5TU1sxXSk7XG5cbiAgICBjb25zdCBzYWxhcmlvQnJ1dG9JUlJGID0gY2FsY3VsYXJJUlJGKHNhbGFyaW9CcnV0b0lucHV0KTtcbiAgICBzZXRQb3JjZW50YWdlbUlSUkYoc2FsYXJpb0JydXRvSVJSRlsyXSk7XG5cbiAgICBsZXQgc2FsYXJpb1xuICAgIGxldCBzYWxhcmlvQmFzZUlOU1MgPSAwO1xuXG4gICAgaWYgKGRlcGVuZGVudGVzSW5wdXQgPj0gMSkge1xuICAgICAgY29uc3QgSU5TUyA9IGNhbGN1bGFySU5TUygoc2FsYXJpb0JydXRvSW5wdXQpWzBdIC0gKGRlcGVuZGVudGVzSW5wdXQgKiAxODkuNTkpKTtcbiAgICAgIHNldFZhbG9ySU5TUyhJTlNTKTtcbiAgICAgIHNhbGFyaW9CYXNlSU5TUyA9IChzYWxhcmlvQnJ1dG9JbnB1dCAtIChkZXBlbmRlbnRlc0lucHV0ICogMTg5LjU5KSkgLSBJTlNTO1xuXG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IElOU1MgPSBjYWxjdWxhcklOU1Moc2FsYXJpb0JydXRvSW5wdXQpWzBdO1xuICAgICAgc2V0VmFsb3JJTlNTKElOU1MpO1xuICAgICAgc2FsYXJpb0Jhc2VJTlNTID0gc2FsYXJpb0JydXRvSW5wdXQgLSBJTlNTO1xuICAgIH1cblxuICAgICAgY29uc3QgSVJSRiA9XG4gICAgICAgIChzYWxhcmlvQmFzZUlOU1MgKiBjYWxjdWxhcklSUkYoc2FsYXJpb0JydXRvSW5wdXQpWzBdKSAtIGNhbGN1bGFySVJSRihzYWxhcmlvQnJ1dG9JbnB1dClbMV07XG4gICAgICBjb25zdCBzYWxhcmlvTGlxdWlkbyA9IHNhbGFyaW9CYXNlSU5TUyAtIElSUkYgLSB0b3RhbERlc2NvbnRvSW5wdXQ7XG4gICAgICBcbiAgICAgIGlmIChzYWxhcmlvTGlxdWlkbykgc2V0U2FsYXJpb0xpcXVpZG8oc2FsYXJpb0xpcXVpZG8udG9GaXhlZCgyKSk7XG5cbiAgICBcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwiYnV0dG9uX19tYWluXCI+XG4gICAgICA8YnV0dG9uIG9uQ2xpY2s9e2hhbmRsZUNhbGN1bGFyfT5DQUxDVUxBUjwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNvbnRleHQiLCJTYWxhcnlDb250ZXh0IiwiY2FsY3VsYXJJTlNTIiwiY2FsY3VsYXJJUlJGIiwiQnV0dG9uQ2FsY3VsYXRvciIsInByb3BzIiwic2V0U2FsYXJpb0xpcXVpZG8iLCJzZXRQb3JjZW50YWdlbUlSUkYiLCJzZXRQb3JjZW50YWdlbUlOU1MiLCJzZXRTYWxhcmlvQnJ1dG8iLCJzZXRWYWxvcklOU1MiLCJzYWxhcmlvQnJ1dG9JbnB1dCIsInRvdGFsRGVzY29udG9JbnB1dCIsImRlcGVuZGVudGVzSW5wdXQiLCJoYW5kbGVDYWxjdWxhciIsInNhbGFyaW9CcnV0b0lOU1MiLCJzYWxhcmlvQnJ1dG9JUlJGIiwic2FsYXJpbyIsInNhbGFyaW9CYXNlSU5TUyIsIklOU1MiLCJJUlJGIiwic2FsYXJpb0xpcXVpZG8iLCJ0b0ZpeGVkIiwiZGl2IiwiY2xhc3NOYW1lIiwiYnV0dG9uIiwib25DbGljayJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/InputContainer/ButtonCalculator/index.jsx\n");

/***/ })

});