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

/***/ "./utils/calcularINSS.js":
/*!*******************************!*\
  !*** ./utils/calcularINSS.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ calcularINSS; }\n/* harmony export */ });\nfunction calcularINSS(salarioBrutoInput) {\n    var salarioBruto = parseFloat(salarioBrutoInput);\n    var valorPorcentagemNSS = 0;\n    if (salarioBrutoInput <= 1212) return [\n        salarioBruto * 0.075,\n        valorPorcentagemNSS = 7.5\n    ];\n    if (salarioBrutoInput >= 2427.35 && salarioBrutoInput <= 3641.02) return [\n        salarioBruto * 0.09,\n        valorPorcentagemNSS = 9\n    ];\n    if (salarioBrutoInput >= 3641.03 && salarioBrutoInput <= 7087.21) return [\n        salarioBruto * 0.12,\n        valorPorcentagemNSS = 12\n    ];\n    if (salarioBrutoInput >= 7087.22) return [\n        salarioBruto * 0.14,\n        valorPorcentagemNSS = 14\n    ];\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jYWxjdWxhcklOU1MuanMuanMiLCJtYXBwaW5ncyI6Ijs7OztBQUFlLFFBQVEsQ0FBQ0EsWUFBWSxDQUFDQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ3ZELEdBQUssQ0FBQ0MsWUFBWSxHQUFHQyxVQUFVLENBQUNGLGlCQUFpQjtJQUNqRCxHQUFHLENBQUNHLG1CQUFtQixHQUFHLENBQUM7SUFDM0IsRUFBRSxFQUFFSCxpQkFBaUIsSUFBSSxJQUFJLEVBQzNCLE1BQU0sQ0FBQyxDQUFDQztRQUFBQSxZQUFZLEdBQUcsS0FBSztRQUFHRSxtQkFBbUIsR0FBRyxHQUFHO0lBQUMsQ0FBQztJQUU1RCxFQUFFLEVBQUVILGlCQUFpQixJQUFJLE9BQU8sSUFBSUEsaUJBQWlCLElBQUksT0FBTyxFQUM5RCxNQUFNLENBQUMsQ0FBQ0M7UUFBQUEsWUFBWSxHQUFHLElBQUk7UUFBR0UsbUJBQW1CLEdBQUcsQ0FBQztJQUFDLENBQUM7SUFFekQsRUFBRSxFQUFFSCxpQkFBaUIsSUFBSSxPQUFPLElBQUlBLGlCQUFpQixJQUFJLE9BQU8sRUFDOUQsTUFBTSxDQUFDLENBQUNDO1FBQUFBLFlBQVksR0FBRyxJQUFJO1FBQUdFLG1CQUFtQixHQUFHLEVBQUU7SUFBQyxDQUFDO0lBRTFELEVBQUUsRUFBRUgsaUJBQWlCLElBQUksT0FBTyxFQUM5QixNQUFNLENBQUMsQ0FBQ0M7UUFBQUEsWUFBWSxHQUFHLElBQUk7UUFBR0UsbUJBQW1CLEdBQUcsRUFBRTtJQUFDLENBQUM7QUFFNUQsQ0FBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi91dGlscy9jYWxjdWxhcklOU1MuanM/MWI3YiJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjYWxjdWxhcklOU1Moc2FsYXJpb0JydXRvSW5wdXQpIHtcbiAgY29uc3Qgc2FsYXJpb0JydXRvID0gcGFyc2VGbG9hdChzYWxhcmlvQnJ1dG9JbnB1dCk7XG4gIGxldCB2YWxvclBvcmNlbnRhZ2VtTlNTID0gMDtcbiAgaWYgKHNhbGFyaW9CcnV0b0lucHV0IDw9IDEyMTIpXG4gICAgcmV0dXJuIFtzYWxhcmlvQnJ1dG8gKiAwLjA3NSwgKHZhbG9yUG9yY2VudGFnZW1OU1MgPSA3LjUpXTtcblxuICBpZiAoc2FsYXJpb0JydXRvSW5wdXQgPj0gMjQyNy4zNSAmJiBzYWxhcmlvQnJ1dG9JbnB1dCA8PSAzNjQxLjAyKVxuICAgIHJldHVybiBbc2FsYXJpb0JydXRvICogMC4wOSwgKHZhbG9yUG9yY2VudGFnZW1OU1MgPSA5KV07XG5cbiAgaWYgKHNhbGFyaW9CcnV0b0lucHV0ID49IDM2NDEuMDMgJiYgc2FsYXJpb0JydXRvSW5wdXQgPD0gNzA4Ny4yMSlcbiAgICByZXR1cm4gW3NhbGFyaW9CcnV0byAqIDAuMTIsICh2YWxvclBvcmNlbnRhZ2VtTlNTID0gMTIpXTtcblxuICBpZiAoc2FsYXJpb0JydXRvSW5wdXQgPj0gNzA4Ny4yMilcbiAgICByZXR1cm4gW3NhbGFyaW9CcnV0byAqIDAuMTQsICh2YWxvclBvcmNlbnRhZ2VtTlNTID0gMTQpXTtcblxufSJdLCJuYW1lcyI6WyJjYWxjdWxhcklOU1MiLCJzYWxhcmlvQnJ1dG9JbnB1dCIsInNhbGFyaW9CcnV0byIsInBhcnNlRmxvYXQiLCJ2YWxvclBvcmNlbnRhZ2VtTlNTIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./utils/calcularINSS.js\n");

/***/ })

});