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

/***/ "./components/Typewriter/index.js":
/*!****************************************!*\
  !*** ./components/Typewriter/index.js ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\nvar _this = undefined;\n\nvar _s = $RefreshSig$();\n\nvar Typewriter = function(param) {\n    var text = param.text, _speed = param.speed, speed = _speed === void 0 ? 100 : _speed;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\"), content = ref[0], setContent = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var index = 0;\n        var t = \"\";\n        var timer = setInterval(function() {\n            t = t + text[index];\n            setContent(t);\n            index++;\n            if (index === text.length) clearInterval(timer);\n        }, speed);\n        return function() {\n            return clearInterval(timer);\n        };\n    }, [\n        text,\n        speed\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: [\n                    content,\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                        className: \"cursor\"\n                    }, void 0, false, {\n                        fileName: \"/home/flavasavah/Documents/projects/azizgharbi.github.io/components/Typewriter/index.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, _this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/flavasavah/Documents/projects/azizgharbi.github.io/components/Typewriter/index.js\",\n                lineNumber: 22,\n                columnNumber: 9\n            }, _this)\n        }, void 0, false, {\n            fileName: \"/home/flavasavah/Documents/projects/azizgharbi.github.io/components/Typewriter/index.js\",\n            lineNumber: 21,\n            columnNumber: 7\n        }, _this)\n    }, void 0, false, {\n        fileName: \"/home/flavasavah/Documents/projects/azizgharbi.github.io/components/Typewriter/index.js\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, _this);\n};\n_s(Typewriter, \"4UAO89cZpwyRav4ptF9aIJMX2R4=\");\n_c = Typewriter;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Typewriter);\nvar _c;\n$RefreshReg$(_c, \"Typewriter\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1R5cGV3cml0ZXIvaW5kZXguanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQTs7O0FBQW1EO0FBRW5ELElBQU1HLFVBQVUsR0FBRyxnQkFBMkI7UUFBeEJDLElBQUksU0FBSkEsSUFBSSxpQkFBRUMsS0FBSyxFQUFMQSxLQUFLLHVCQUFHLEdBQUc7O0lBQ3JDLElBQThCSixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQW5DSyxPQUFPLEdBQWdCTCxHQUFZLEdBQTVCLEVBQUVNLFVBQVUsR0FBSU4sR0FBWSxHQUFoQjtJQUUxQkMsZ0RBQVMsQ0FBQyxXQUFNO1FBQ2QsSUFBSU0sS0FBSyxHQUFHLENBQUM7UUFDYixJQUFJQyxDQUFDLEdBQUcsRUFBRTtRQUNWLElBQU1DLEtBQUssR0FBR0MsV0FBVyxDQUFDLFdBQU07WUFDOUJGLENBQUMsR0FBR0EsQ0FBQyxHQUFHTCxJQUFJLENBQUNJLEtBQUssQ0FBQyxDQUFDO1lBQ3BCRCxVQUFVLENBQUNFLENBQUMsQ0FBQyxDQUFDO1lBQ2RELEtBQUssRUFBRSxDQUFDO1lBQ1IsSUFBSUEsS0FBSyxLQUFLSixJQUFJLENBQUNRLE1BQU0sRUFBRUMsYUFBYSxDQUFDSCxLQUFLLENBQUMsQ0FBQztRQUNsRCxDQUFDLEVBQUVMLEtBQUssQ0FBQztRQUVULE9BQU87bUJBQU1RLGFBQWEsQ0FBQ0gsS0FBSyxDQUFDO1NBQUEsQ0FBQztJQUNwQyxDQUFDLEVBQUU7UUFBQ04sSUFBSTtRQUFFQyxLQUFLO0tBQUMsQ0FBQyxDQUFDO0lBRWxCLHFCQUNFLDhEQUFDUyxLQUFHO2tCQUNGLDRFQUFDQSxLQUFHO3NCQUNGLDRFQUFDQyxHQUFDOztvQkFDQ1QsT0FBTztrQ0FDUiw4REFBQ1UsTUFBSTt3QkFBQ0MsU0FBUyxFQUFDLFFBQVE7Ozs7OzZCQUFROzs7Ozs7cUJBQzlCOzs7OztpQkFDQTs7Ozs7YUFDRixDQUNOO0FBQ0osQ0FBQztHQTFCS2QsVUFBVTtBQUFWQSxLQUFBQSxVQUFVO0FBNEJoQiwrREFBZUEsVUFBVSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvVHlwZXdyaXRlci9pbmRleC5qcz83MTg1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSAncmVhY3QnO1xuXG5jb25zdCBUeXBld3JpdGVyID0gKHsgdGV4dCwgc3BlZWQgPSAxMDAgfSkgPT4ge1xuICBjb25zdCBbY29udGVudCwgc2V0Q29udGVudF0gPSB1c2VTdGF0ZSgnJyk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBsZXQgaW5kZXggPSAwO1xuICAgIGxldCB0ID0gJyc7XG4gICAgY29uc3QgdGltZXIgPSBzZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICB0ID0gdCArIHRleHRbaW5kZXhdO1xuICAgICAgc2V0Q29udGVudCh0KTtcbiAgICAgIGluZGV4Kys7XG4gICAgICBpZiAoaW5kZXggPT09IHRleHQubGVuZ3RoKSBjbGVhckludGVydmFsKHRpbWVyKTtcbiAgICB9LCBzcGVlZCk7XG5cbiAgICByZXR1cm4gKCkgPT4gY2xlYXJJbnRlcnZhbCh0aW1lcik7XG4gIH0sIFt0ZXh0LCBzcGVlZF0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXY+XG4gICAgICAgIDxwPlxuICAgICAgICAgIHtjb250ZW50fVxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cImN1cnNvclwiPjwvc3Bhbj5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUeXBld3JpdGVyO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJUeXBld3JpdGVyIiwidGV4dCIsInNwZWVkIiwiY29udGVudCIsInNldENvbnRlbnQiLCJpbmRleCIsInQiLCJ0aW1lciIsInNldEludGVydmFsIiwibGVuZ3RoIiwiY2xlYXJJbnRlcnZhbCIsImRpdiIsInAiLCJzcGFuIiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Typewriter/index.js\n"));

/***/ })

});