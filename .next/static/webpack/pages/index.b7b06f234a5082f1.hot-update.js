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

/***/ "./utils/calcularIRRF.js":
/*!*******************************!*\
  !*** ./utils/calcularIRRF.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ calcularIRRF; }\n/* harmony export */ });\nfunction calcularIRRF(salarioBrutoInput) {\n    if (salarioBrutoInput <= 1903.98) {\n        setPorcentagemINSS(0);\n        descontoIRRF = 0;\n        parcelaDedutivaIRRF = 0;\n    }\n    if (salarioBrutoInput >= 1903.99 && salarioBrutoInput <= 2826.65) {\n        setPorcentagemINSS(7.5);\n        descontoIRRF = salarioBrutoInput * 0.075;\n        parcelaDedutivaIRRF = 142.8;\n    }\n    if (salarioBrutoInput >= 2826.66 && salarioBrutoInput <= 3751.05) {\n        setPorcentagemINSS(15);\n        descontoIRRF = salarioBrutoInput * 0.15;\n        parcelaDedutivaIRRF = 354.8;\n    }\n    if (salarioBrutoInput >= 3751.06 && salarioBrutoInput <= 4664.68) {\n        setPorcentagemINSS(22.5);\n        descontoIRRF = salarioBrutoInput * 0.225;\n        parcelaDedutivaIRRF = 636.13;\n    }\n    if (salarioBrutoInput >= 4664.69) {\n        setPorcentagemINSS(27.5);\n        descontoIRRF = salarioBrutoInput * 0.275;\n        parcelaDedutivaIRRF = 869.36;\n    }\n}; // Até R$ 1.903,98: isento de imposto de renda\t-\t-\n // Se está entre R$ 1.903,99 e 2.826,65\t7,5%\tR$ 142,80\n // De R$ 2.826,66 a R$ 3.751,05\t15%\tR$ 354,80\n // De R$ 3.751,06 a R$ 4.664,68 (Teto do INSS em 2022)\t22,5%\tR$ 636,13\n // Acima de R$ 4.664,68\t27,5%\tR$ 869,36\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jYWxjdWxhcklSUkYuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFFBQVEsQ0FBQ0EsWUFBWSxDQUFDQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZELEVBQUUsRUFBRUEsaUJBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDL0JDLGtCQUFrQixDQUFDLENBQUM7UUFDcEJDLFlBQVksR0FBRyxDQUFDO1FBQ2hCQyxtQkFBbUIsR0FBRyxDQUFDO0lBQ3pCLENBQUM7SUFDRCxFQUFFLEVBQUVILGlCQUFpQixJQUFJLE9BQU8sSUFBSUEsaUJBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakVDLGtCQUFrQixDQUFDLEdBQUc7UUFDdEJDLFlBQVksR0FBR0YsaUJBQWlCLEdBQUcsS0FBSztRQUN4Q0csbUJBQW1CLEdBQUcsS0FBSztJQUM3QixDQUFDO0lBQ0QsRUFBRSxFQUFFSCxpQkFBaUIsSUFBSSxPQUFPLElBQUlBLGlCQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pFQyxrQkFBa0IsQ0FBQyxFQUFFO1FBQ3JCQyxZQUFZLEdBQUdGLGlCQUFpQixHQUFHLElBQUk7UUFDdkNHLG1CQUFtQixHQUFHLEtBQUs7SUFDN0IsQ0FBQztJQUNELEVBQUUsRUFBRUgsaUJBQWlCLElBQUksT0FBTyxJQUFJQSxpQkFBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqRUMsa0JBQWtCLENBQUMsSUFBSTtRQUN2QkMsWUFBWSxHQUFHRixpQkFBaUIsR0FBRyxLQUFLO1FBQ3hDRyxtQkFBbUIsR0FBRyxNQUFNO0lBQzlCLENBQUM7SUFDRCxFQUFFLEVBQUVILGlCQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pDQyxrQkFBa0IsQ0FBQyxJQUFJO1FBQ3ZCQyxZQUFZLEdBQUdGLGlCQUFpQixHQUFHLEtBQUs7UUFDeENHLG1CQUFtQixHQUFHLE1BQU07SUFDOUIsQ0FBQztBQUNMLENBQUMsQ0FFRCxDQUFrRCxFQUFDO0FBQ2xELENBQXFEO0FBQ3RELENBQTZDO0FBQzdDLENBQXNFO0FBQ3RFLENBQXVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3V0aWxzL2NhbGN1bGFySVJSRi5qcz8xMTEyIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGNhbGN1bGFySVJSRihzYWxhcmlvQnJ1dG9JbnB1dCkge1xuICBpZiAoc2FsYXJpb0JydXRvSW5wdXQgPD0gMTkwMy45OCkge1xuICAgICAgc2V0UG9yY2VudGFnZW1JTlNTKDApO1xuICAgICAgZGVzY29udG9JUlJGID0gMDtcbiAgICAgIHBhcmNlbGFEZWR1dGl2YUlSUkYgPSAwO1xuICAgIH1cbiAgICBpZiAoc2FsYXJpb0JydXRvSW5wdXQgPj0gMTkwMy45OSAmJiBzYWxhcmlvQnJ1dG9JbnB1dCA8PSAyODI2LjY1KSB7XG4gICAgICBzZXRQb3JjZW50YWdlbUlOU1MoNy41KTtcbiAgICAgIGRlc2NvbnRvSVJSRiA9IHNhbGFyaW9CcnV0b0lucHV0ICogMC4wNzU7XG4gICAgICBwYXJjZWxhRGVkdXRpdmFJUlJGID0gMTQyLjg7XG4gICAgfVxuICAgIGlmIChzYWxhcmlvQnJ1dG9JbnB1dCA+PSAyODI2LjY2ICYmIHNhbGFyaW9CcnV0b0lucHV0IDw9IDM3NTEuMDUpIHtcbiAgICAgIHNldFBvcmNlbnRhZ2VtSU5TUygxNSk7XG4gICAgICBkZXNjb250b0lSUkYgPSBzYWxhcmlvQnJ1dG9JbnB1dCAqIDAuMTU7XG4gICAgICBwYXJjZWxhRGVkdXRpdmFJUlJGID0gMzU0Ljg7XG4gICAgfVxuICAgIGlmIChzYWxhcmlvQnJ1dG9JbnB1dCA+PSAzNzUxLjA2ICYmIHNhbGFyaW9CcnV0b0lucHV0IDw9IDQ2NjQuNjgpIHtcbiAgICAgIHNldFBvcmNlbnRhZ2VtSU5TUygyMi41KTtcbiAgICAgIGRlc2NvbnRvSVJSRiA9IHNhbGFyaW9CcnV0b0lucHV0ICogMC4yMjU7XG4gICAgICBwYXJjZWxhRGVkdXRpdmFJUlJGID0gNjM2LjEzO1xuICAgIH1cbiAgICBpZiAoc2FsYXJpb0JydXRvSW5wdXQgPj0gNDY2NC42OSkge1xuICAgICAgc2V0UG9yY2VudGFnZW1JTlNTKDI3LjUpO1xuICAgICAgZGVzY29udG9JUlJGID0gc2FsYXJpb0JydXRvSW5wdXQgKiAwLjI3NTtcbiAgICAgIHBhcmNlbGFEZWR1dGl2YUlSUkYgPSA4NjkuMzY7XG4gICAgfVxufVxuXG4vLyBBdMOpIFIkIDEuOTAzLDk4OiBpc2VudG8gZGUgaW1wb3N0byBkZSByZW5kYVx0LVx0LVxuLy8gU2UgZXN0w6EgZW50cmUgUiQgMS45MDMsOTkgZSAyLjgyNiw2NVx0Nyw1JVx0UiQgMTQyLDgwXG4vLyBEZSBSJCAyLjgyNiw2NiBhIFIkIDMuNzUxLDA1XHQxNSVcdFIkIDM1NCw4MFxuLy8gRGUgUiQgMy43NTEsMDYgYSBSJCA0LjY2NCw2OCAoVGV0byBkbyBJTlNTIGVtIDIwMjIpXHQyMiw1JVx0UiQgNjM2LDEzXG4vLyBBY2ltYSBkZSBSJCA0LjY2NCw2OFx0MjcsNSVcdFIkIDg2OSwzNiJdLCJuYW1lcyI6WyJjYWxjdWxhcklSUkYiLCJzYWxhcmlvQnJ1dG9JbnB1dCIsInNldFBvcmNlbnRhZ2VtSU5TUyIsImRlc2NvbnRvSVJSRiIsInBhcmNlbGFEZWR1dGl2YUlSUkYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/calcularIRRF.js\n");

/***/ })

});