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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ calcularIRRF; }\n/* harmony export */ });\n// Até R$ 1.903,98: isento de imposto de renda\t-\t-\n// Se está entre R$ 1.903,99 e 2.826,65\t7,5%\tR$ 142,80\n// De R$ 2.826,66 a R$ 3.751,05\t15%\tR$ 354,80\n// De R$ 3.751,06 a R$ 4.664,68 (Teto do INSS em 2022)\t22,5%\tR$ 636,13\n// Acima de R$ 4.664,68\t27,5%\tR$ 869,36\nfunction calcularIRRF(salarioBrutoInput) {\n    if (salarioBrutoInput <= 1903.98) {\n        return [\n            descontoIRRF = 0,\n            parcelaDedutivaIRRF = 0\n        ];\n    }\n    if (salarioBrutoInput >= 1903.99 && salarioBrutoInput <= 2826.65) {\n        return [\n            descontoIRRF = 142.8,\n            parcelaDedutivaIRRF = 7.5\n        ];\n    // setPorcentagemINSS(7.5);\n    // descontoIRRF = salarioBrutoInput * 0.075;\n    // parcelaDedutivaIRRF = 142.8;\n    }\n    if (salarioBrutoInput >= 2826.66 && salarioBrutoInput <= 3751.05) {\n        return [\n            descontoIRRF = 354.8,\n            parcelaDedutivaIRRF = 15\n        ];\n        setPorcentagemINSS(15);\n        descontoIRRF = salarioBrutoInput * 0.15;\n        parcelaDedutivaIRRF = 354.8;\n    }\n    if (salarioBrutoInput >= 3751.06 && salarioBrutoInput <= 4664.68) {\n        return [\n            descontoIRRF = 636.13,\n            parcelaDedutivaIRRF = 22.5\n        ];\n        setPorcentagemINSS(22.5);\n        descontoIRRF = salarioBrutoInput * 0.225;\n        parcelaDedutivaIRRF = 636.13;\n    }\n    if (salarioBrutoInput >= 4664.69) {\n        setPorcentagemINSS(27.5);\n        descontoIRRF = salarioBrutoInput * 0.275;\n        parcelaDedutivaIRRF = 869.36;\n    }\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jYWxjdWxhcklSUkYuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBLEVBQWtEO0FBQ2pELEVBQXFEO0FBQ3RELEVBQTZDO0FBQzdDLEVBQXNFO0FBQ3RFLEVBQXVDO0FBRXhCLFFBQVEsQ0FBQ0EsWUFBWSxDQUFDQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZELEVBQUUsRUFBRUEsaUJBQWlCLElBQUksT0FBTyxFQUFFLENBQUM7UUFDakMsTUFBTSxDQUFDLENBQUM7WUFBQ0MsWUFBWSxHQUFHLENBQUM7WUFBSUMsbUJBQW1CLEdBQUcsQ0FBQztRQUFDLENBQUM7SUFDeEQsQ0FBQztJQUNELEVBQUUsRUFBRUYsaUJBQWlCLElBQUksT0FBTyxJQUFJQSxpQkFBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqRSxNQUFNLENBQUMsQ0FBQztZQUFDQyxZQUFZLEdBQUcsS0FBTTtZQUFJQyxtQkFBbUIsR0FBRyxHQUFHO1FBQUMsQ0FBQztJQUM3RCxFQUEyQjtJQUMzQixFQUE0QztJQUM1QyxFQUErQjtJQUNqQyxDQUFDO0lBQ0QsRUFBRSxFQUFFRixpQkFBaUIsSUFBSSxPQUFPLElBQUlBLGlCQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pFLE1BQU0sQ0FBQyxDQUFDO1lBQUNDLFlBQVksR0FBRyxLQUFNO1lBQUlDLG1CQUFtQixHQUFHLEVBQUU7UUFBQyxDQUFDO1FBQzVEQyxrQkFBa0IsQ0FBQyxFQUFFO1FBQ3JCRixZQUFZLEdBQUdELGlCQUFpQixHQUFHLElBQUk7UUFDdkNFLG1CQUFtQixHQUFHLEtBQUs7SUFDN0IsQ0FBQztJQUNELEVBQUUsRUFBRUYsaUJBQWlCLElBQUksT0FBTyxJQUFJQSxpQkFBaUIsSUFBSSxPQUFPLEVBQUUsQ0FBQztRQUNqRSxNQUFNLENBQUMsQ0FBQztZQUFDQyxZQUFZLEdBQUcsTUFBTTtZQUFJQyxtQkFBbUIsR0FBRyxJQUFJO1FBQUMsQ0FBQztRQUM5REMsa0JBQWtCLENBQUMsSUFBSTtRQUN2QkYsWUFBWSxHQUFHRCxpQkFBaUIsR0FBRyxLQUFLO1FBQ3hDRSxtQkFBbUIsR0FBRyxNQUFNO0lBQzlCLENBQUM7SUFDRCxFQUFFLEVBQUVGLGlCQUFpQixJQUFJLE9BQU8sRUFBRSxDQUFDO1FBQ2pDRyxrQkFBa0IsQ0FBQyxJQUFJO1FBQ3ZCRixZQUFZLEdBQUdELGlCQUFpQixHQUFHLEtBQUs7UUFDeENFLG1CQUFtQixHQUFHLE1BQU07SUFDOUIsQ0FBQztBQUNILENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vdXRpbHMvY2FsY3VsYXJJUlJGLmpzPzExMTIiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQXTDqSBSJCAxLjkwMyw5ODogaXNlbnRvIGRlIGltcG9zdG8gZGUgcmVuZGFcdC1cdC1cbi8vIFNlIGVzdMOhIGVudHJlIFIkIDEuOTAzLDk5IGUgMi44MjYsNjVcdDcsNSVcdFIkIDE0Miw4MFxuLy8gRGUgUiQgMi44MjYsNjYgYSBSJCAzLjc1MSwwNVx0MTUlXHRSJCAzNTQsODBcbi8vIERlIFIkIDMuNzUxLDA2IGEgUiQgNC42NjQsNjggKFRldG8gZG8gSU5TUyBlbSAyMDIyKVx0MjIsNSVcdFIkIDYzNiwxM1xuLy8gQWNpbWEgZGUgUiQgNC42NjQsNjhcdDI3LDUlXHRSJCA4NjksMzZcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY2FsY3VsYXJJUlJGKHNhbGFyaW9CcnV0b0lucHV0KSB7XG4gIGlmIChzYWxhcmlvQnJ1dG9JbnB1dCA8PSAxOTAzLjk4KSB7XG4gICAgcmV0dXJuIFsoZGVzY29udG9JUlJGID0gMCksIChwYXJjZWxhRGVkdXRpdmFJUlJGID0gMCldO1xuICB9XG4gIGlmIChzYWxhcmlvQnJ1dG9JbnB1dCA+PSAxOTAzLjk5ICYmIHNhbGFyaW9CcnV0b0lucHV0IDw9IDI4MjYuNjUpIHtcbiAgICByZXR1cm4gWyhkZXNjb250b0lSUkYgPSAxNDIuODApLCAocGFyY2VsYURlZHV0aXZhSVJSRiA9IDcuNSldO1xuICAgIC8vIHNldFBvcmNlbnRhZ2VtSU5TUyg3LjUpO1xuICAgIC8vIGRlc2NvbnRvSVJSRiA9IHNhbGFyaW9CcnV0b0lucHV0ICogMC4wNzU7XG4gICAgLy8gcGFyY2VsYURlZHV0aXZhSVJSRiA9IDE0Mi44O1xuICB9XG4gIGlmIChzYWxhcmlvQnJ1dG9JbnB1dCA+PSAyODI2LjY2ICYmIHNhbGFyaW9CcnV0b0lucHV0IDw9IDM3NTEuMDUpIHtcbiAgICByZXR1cm4gWyhkZXNjb250b0lSUkYgPSAzNTQuODApLCAocGFyY2VsYURlZHV0aXZhSVJSRiA9IDE1KV07XG4gICAgc2V0UG9yY2VudGFnZW1JTlNTKDE1KTtcbiAgICBkZXNjb250b0lSUkYgPSBzYWxhcmlvQnJ1dG9JbnB1dCAqIDAuMTU7XG4gICAgcGFyY2VsYURlZHV0aXZhSVJSRiA9IDM1NC44O1xuICB9XG4gIGlmIChzYWxhcmlvQnJ1dG9JbnB1dCA+PSAzNzUxLjA2ICYmIHNhbGFyaW9CcnV0b0lucHV0IDw9IDQ2NjQuNjgpIHtcbiAgICByZXR1cm4gWyhkZXNjb250b0lSUkYgPSA2MzYuMTMpLCAocGFyY2VsYURlZHV0aXZhSVJSRiA9IDIyLjUpXTtcbiAgICBzZXRQb3JjZW50YWdlbUlOU1MoMjIuNSk7XG4gICAgZGVzY29udG9JUlJGID0gc2FsYXJpb0JydXRvSW5wdXQgKiAwLjIyNTtcbiAgICBwYXJjZWxhRGVkdXRpdmFJUlJGID0gNjM2LjEzO1xuICB9XG4gIGlmIChzYWxhcmlvQnJ1dG9JbnB1dCA+PSA0NjY0LjY5KSB7XG4gICAgc2V0UG9yY2VudGFnZW1JTlNTKDI3LjUpO1xuICAgIGRlc2NvbnRvSVJSRiA9IHNhbGFyaW9CcnV0b0lucHV0ICogMC4yNzU7XG4gICAgcGFyY2VsYURlZHV0aXZhSVJSRiA9IDg2OS4zNjtcbiAgfVxufVxuIl0sIm5hbWVzIjpbImNhbGN1bGFySVJSRiIsInNhbGFyaW9CcnV0b0lucHV0IiwiZGVzY29udG9JUlJGIiwicGFyY2VsYURlZHV0aXZhSVJSRiIsInNldFBvcmNlbnRhZ2VtSU5TUyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./utils/calcularIRRF.js\n");

/***/ })

});