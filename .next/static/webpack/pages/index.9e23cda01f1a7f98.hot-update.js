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

/***/ "./components/InputContainer/SelectDependent/index.jsx":
/*!*************************************************************!*\
  !*** ./components/InputContainer/SelectDependent/index.jsx ***!
  \*************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ SelectDependent; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react_icons_ai__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/ai */ \"./node_modules/react-icons/ai/index.esm.js\");\n\n\n\nvar _s = $RefreshSig$();\nfunction SelectDependent(props) {\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0), dependentes = ref[0], setDependent = ref[1];\n    var incrementeDepedentes = function() {\n        setDependent(dependentes + 1);\n    };\n    var decrementeDepedentes = function() {\n        if (dependentes <= 0) {\n            return;\n        }\n        setDependent(dependentes - 1);\n    };\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"select__main\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"strong\", {\n                children: \"Quantos dependentes voce tem?\"\n            }, void 0, false, {\n                fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/SelectDependent/index.jsx\",\n                lineNumber: 20,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"select__group\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineMinusCircle, {\n                        className: \"select__icon\",\n                        onClick: decrementeDepedentes\n                    }, void 0, false, {\n                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/SelectDependent/index.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        type: \"text\",\n                        placeholder: \"0\",\n                        onChange: handleChange,\n                        value: dependentes\n                    }, void 0, false, {\n                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/SelectDependent/index.jsx\",\n                        lineNumber: 24,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlinePlusCircle, {\n                        className: \"select__icon\",\n                        onClick: incrementeDepedentes\n                    }, void 0, false, {\n                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/SelectDependent/index.jsx\",\n                        lineNumber: 25,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/SelectDependent/index.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"select__description\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_ai__WEBPACK_IMPORTED_MODULE_2__.AiOutlineQuestionCircle, {\n                        className: \"select__icon\"\n                    }, void 0, false, {\n                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/SelectDependent/index.jsx\",\n                        lineNumber: 28,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        children: \"Dependentes declarados no Imposto de Renda\"\n                    }, void 0, false, {\n                        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/SelectDependent/index.jsx\",\n                        lineNumber: 29,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/SelectDependent/index.jsx\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/ederu/Workspace/frontend-challenge/components/InputContainer/SelectDependent/index.jsx\",\n        lineNumber: 19,\n        columnNumber: 5\n    }, this));\n};\n_s(SelectDependent, \"rGEI62VsuwnwPY/75ViYiWAYY24=\");\n_c = SelectDependent;\nvar _c;\n$RefreshReg$(_c, \"SelectDependent\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0lucHV0Q29udGFpbmVyL1NlbGVjdERlcGVuZGVudC9pbmRleC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUNtRTs7QUFFcEYsUUFBUSxDQUFDSSxlQUFlLENBQUNDLEtBQUssRUFBRSxDQUFDOztJQUM5QyxHQUFLLENBQStCTCxHQUFXLEdBQVhBLCtDQUFRLENBQUMsQ0FBQyxHQUF2Q00sV0FBVyxHQUFrQk4sR0FBVyxLQUEzQk8sWUFBWSxHQUFJUCxHQUFXO0lBRS9DLEdBQUssQ0FBQ1Esb0JBQW9CLEdBQUcsUUFDL0IsR0FEcUMsQ0FBQztRQUNsQ0QsWUFBWSxDQUFDRCxXQUFXLEdBQUcsQ0FBQztJQUM5QixDQUFDO0lBRUQsR0FBSyxDQUFDRyxvQkFBb0IsR0FBRyxRQUMvQixHQURxQyxDQUFDO1FBQ2xDLEVBQUUsRUFBQ0gsV0FBVyxJQUFJLENBQUMsRUFBRSxDQUFDO1lBQ3BCLE1BQU07UUFDUixDQUFDO1FBQ0RDLFlBQVksQ0FBQ0QsV0FBVyxHQUFHLENBQUM7SUFDOUIsQ0FBQztJQUVELE1BQU0sNkVBQ0hJLENBQUc7UUFBQ0MsU0FBUyxFQUFDLENBQWM7O3dGQUMxQkMsQ0FBTTswQkFBQyxDQUE2Qjs7Ozs7O3dGQUNwQ0YsQ0FBRztnQkFBQ0MsU0FBUyxFQUFDLENBQWU7O2dHQUMzQlIsZ0VBQW9CO3dCQUFDUSxTQUFTLEVBQUMsQ0FBYzt3QkFBQ0UsT0FBTyxFQUFFSixvQkFBb0I7Ozs7OztnR0FFM0VLLENBQUs7d0JBQUNDLElBQUksRUFBQyxDQUFNO3dCQUFDQyxXQUFXLEVBQUMsQ0FBRzt3QkFBQ0MsUUFBUSxFQUFFQyxZQUFZO3dCQUFFQyxLQUFLLEVBQUViLFdBQVc7Ozs7OztnR0FDNUVKLCtEQUFtQjt3QkFBQ1MsU0FBUyxFQUFDLENBQWM7d0JBQUNFLE9BQU8sRUFBRUwsb0JBQW9COzs7Ozs7Ozs7Ozs7d0ZBRTVFRSxDQUFHO2dCQUFDQyxTQUFTLEVBQUMsQ0FBcUI7O2dHQUNqQ1YsbUVBQXVCO3dCQUFDVSxTQUFTLEVBQUMsQ0FBYzs7Ozs7O2dHQUNoRFMsQ0FBQztrQ0FBQyxDQUEwQzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXJELENBQUM7R0E3QnVCaEIsZUFBZTtLQUFmQSxlQUFlIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvSW5wdXRDb250YWluZXIvU2VsZWN0RGVwZW5kZW50L2luZGV4LmpzeD9kMzUwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xuaW1wb3J0IHsgQWlPdXRsaW5lUXVlc3Rpb25DaXJjbGUsIEFpT3V0bGluZVBsdXNDaXJjbGUsIEFpT3V0bGluZU1pbnVzQ2lyY2xlIH0gZnJvbSAncmVhY3QtaWNvbnMvYWknO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTZWxlY3REZXBlbmRlbnQocHJvcHMpIHtcbiAgY29uc3QgW2RlcGVuZGVudGVzLCBzZXREZXBlbmRlbnRdID0gdXNlU3RhdGUoMCk7XG5cbiAgY29uc3QgaW5jcmVtZW50ZURlcGVkZW50ZXMgPSAoKSA9PiB7XG4gICAgc2V0RGVwZW5kZW50KGRlcGVuZGVudGVzICsgMSk7XG4gIH07XG5cbiAgY29uc3QgZGVjcmVtZW50ZURlcGVkZW50ZXMgPSAoKSA9PiB7XG4gICAgaWYoZGVwZW5kZW50ZXMgPD0gMCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBzZXREZXBlbmRlbnQoZGVwZW5kZW50ZXMgLSAxKTtcbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0X19tYWluXCI+XG4gICAgICA8c3Ryb25nPlF1YW50b3MgZGVwZW5kZW50ZXMgdm9jZSB0ZW0/PC9zdHJvbmc+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlbGVjdF9fZ3JvdXBcIj5cbiAgICAgICAgPEFpT3V0bGluZU1pbnVzQ2lyY2xlIGNsYXNzTmFtZT1cInNlbGVjdF9faWNvblwiIG9uQ2xpY2s9e2RlY3JlbWVudGVEZXBlZGVudGVzfSAvPlxuXG4gICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIHBsYWNlaG9sZGVyPVwiMFwiIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9IHZhbHVlPXtkZXBlbmRlbnRlc30gLz5cbiAgICAgICAgPEFpT3V0bGluZVBsdXNDaXJjbGUgY2xhc3NOYW1lPVwic2VsZWN0X19pY29uXCIgb25DbGljaz17aW5jcmVtZW50ZURlcGVkZW50ZXN9IC8+XG4gICAgICA8L2Rpdj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VsZWN0X19kZXNjcmlwdGlvblwiPlxuICAgICAgICA8QWlPdXRsaW5lUXVlc3Rpb25DaXJjbGUgY2xhc3NOYW1lPVwic2VsZWN0X19pY29uXCIgLz5cbiAgICAgICAgPHA+RGVwZW5kZW50ZXMgZGVjbGFyYWRvcyBubyBJbXBvc3RvIGRlIFJlbmRhPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJBaU91dGxpbmVRdWVzdGlvbkNpcmNsZSIsIkFpT3V0bGluZVBsdXNDaXJjbGUiLCJBaU91dGxpbmVNaW51c0NpcmNsZSIsIlNlbGVjdERlcGVuZGVudCIsInByb3BzIiwiZGVwZW5kZW50ZXMiLCJzZXREZXBlbmRlbnQiLCJpbmNyZW1lbnRlRGVwZWRlbnRlcyIsImRlY3JlbWVudGVEZXBlZGVudGVzIiwiZGl2IiwiY2xhc3NOYW1lIiwic3Ryb25nIiwib25DbGljayIsImlucHV0IiwidHlwZSIsInBsYWNlaG9sZGVyIiwib25DaGFuZ2UiLCJoYW5kbGVDaGFuZ2UiLCJ2YWx1ZSIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/InputContainer/SelectDependent/index.jsx\n");

/***/ })

});