"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index", {
  /***/ "./components/github/index.js":
    /*!************************************!*\
  !*** ./components/github/index.js ***!
  \************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "GithubBox": function() { return /* binding */ GithubBox; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @swc/helpers/src/_async_to_generator.mjs */ "./node_modules/@swc/helpers/src/_async_to_generator.mjs");\n/* harmony import */ var _swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @swc/helpers/src/_ts_generator.mjs */ "./node_modules/@swc/helpers/src/_ts_generator.mjs");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./style */ "./components/github/style.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nvar _s = $RefreshSig$();\n"use client";\n\n\nvar entrypoint = "https://api.github.com/users/azizgharbi/repos";\nfunction getRepositories() {\n    return _getRepositories.apply(this, arguments);\n}\nfunction _getRepositories() {\n    _getRepositories = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(function() {\n        var res;\n        return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(this, function(_state) {\n            switch(_state.label){\n                case 0:\n                    return [\n                        4,\n                        fetch(entrypoint)\n                    ];\n                case 1:\n                    res = _state.sent();\n                    if (!res.ok) {\n                        throw new Error("Failed to fetch data");\n                    }\n                    return [\n                        2,\n                        res.json()\n                    ];\n            }\n        });\n    });\n    return _getRepositories.apply(this, arguments);\n}\nfunction GithubBox() {\n    var _this = this;\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)([]), repos = ref[0], setRepos = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(function() {\n        function fetchData() {\n            return _fetchData.apply(this, arguments);\n        }\n        function _fetchData() {\n            _fetchData = (0,_swc_helpers_src_async_to_generator_mjs__WEBPACK_IMPORTED_MODULE_3__["default"])(function() {\n                var data;\n                return (0,_swc_helpers_src_ts_generator_mjs__WEBPACK_IMPORTED_MODULE_4__["default"])(this, function(_state) {\n                    switch(_state.label){\n                        case 0:\n                            return [\n                                4,\n                                getRepositories()\n                            ];\n                        case 1:\n                            data = _state.sent();\n                            setRepos(data.filter(function(param) {\n                                var fork = param.fork;\n                                return !fork;\n                            }).map(function(param) {\n                                var full_name = param.full_name, html_url = param.html_url;\n                                return {\n                                    full_name: full_name,\n                                    html_url: html_url\n                                };\n                            }));\n                            return [\n                                2\n                            ];\n                    }\n                });\n            });\n            return _fetchData.apply(this, arguments);\n        }\n        fetchData();\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n            className: "github",\n            children: repos ? repos.map(function(param) {\n                var full_name = param.full_name, html_url = param.html_url;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                    className: "link",\n                    children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("a", {\n                        href: html_url,\n                        target: "_blank",\n                        rel: "noopener noreferrer",\n                        children: full_name\n                    }, void 0, false, {\n                        fileName: "/home/flavasavah/Documents/projects/azizgharbi.github.io/components/github/index.js",\n                        lineNumber: 35,\n                        columnNumber: 19\n                    }, _this)\n                }, full_name, false, {\n                    fileName: "/home/flavasavah/Documents/projects/azizgharbi.github.io/components/github/index.js",\n                    lineNumber: 34,\n                    columnNumber: 17\n                }, _this);\n            }) : null\n        }, void 0, false, {\n            fileName: "/home/flavasavah/Documents/projects/azizgharbi.github.io/components/github/index.js",\n            lineNumber: 30,\n            columnNumber: 7\n        }, this)\n    }, void 0, false);\n}\n_s(GithubBox, "0R7l53CiwQu7ziyMeHtgYF+Ya+E=");\n_c = GithubBox;\nvar _c;\n$RefreshReg$(_c, "GithubBox");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2dpdGh1Yi9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOzs7O0FBQUEsWUFBWSxDQUFDO0FBQ2U7QUFDZ0I7QUFFNUMsSUFBTUcsVUFBVSxHQUFHLCtDQUErQztTQUNuREMsZUFBZTtXQUFmQSxnQkFBZTs7U0FBZkEsZ0JBQWU7SUFBZkEsZ0JBQWUsR0FBOUIsK0ZBQWlDO1lBQ3pCQyxHQUFHOzs7O29CQUFHOzt3QkFBTUMsS0FBSyxDQUFDSCxVQUFVLENBQUM7c0JBQUE7O29CQUE3QkUsR0FBRyxHQUFHLGFBQXVCO29CQUNuQyxJQUFJLENBQUNBLEdBQUcsQ0FBQ0UsRUFBRSxFQUFFO3dCQUNYLE1BQU0sSUFBSUMsS0FBSyxDQUFDLHNCQUFzQixDQUFDLENBQUM7b0JBQzFDLENBQUM7b0JBQ0Q7O3dCQUFPSCxHQUFHLENBQUNJLElBQUksRUFBRTtzQkFBQzs7O0lBQ3BCLENBQUM7V0FOY0wsZ0JBQWU7O0FBUXZCLFNBQVNNLFNBQVMsR0FBRzs7O0lBQzFCLElBQTBCUixHQUFZLEdBQVpBLCtDQUFRLENBQUMsRUFBRSxDQUFDLEVBQS9CUyxLQUFLLEdBQWNULEdBQVksR0FBMUIsRUFBRVUsUUFBUSxHQUFJVixHQUFZLEdBQWhCO0lBQ3RCRCxnREFBUyxDQUFDLFdBQU07aUJBQ0NZLFNBQVM7bUJBQVRBLFVBQVM7O2lCQUFUQSxVQUFTO1lBQVRBLFVBQVMsR0FBeEIsK0ZBQTJCO29CQUNuQkMsSUFBSTs7Ozs0QkFBRzs7Z0NBQU1WLGVBQWUsRUFBRTs4QkFBQTs7NEJBQTlCVSxJQUFJLEdBQUcsYUFBdUI7NEJBQ3BDRixRQUFRLENBQ05FLElBQUksQ0FDREMsTUFBTSxDQUFDO29DQUFHQyxJQUFJLFNBQUpBLElBQUk7dUNBQU8sQ0FBQ0EsSUFBSTs2QkFBQSxDQUFDLENBQzNCQyxHQUFHLENBQUM7b0NBQUdDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7dUNBQVE7b0NBQUVELFNBQVMsRUFBVEEsU0FBUztvQ0FBRUMsUUFBUSxFQUFSQSxRQUFRO2lDQUFFOzZCQUFDLENBQUMsQ0FDL0QsQ0FBQzs7Ozs7O1lBQ0osQ0FBQzttQkFQY04sVUFBUzs7UUFReEJBLFNBQVMsRUFBRSxDQUFDO0lBQ2QsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO0lBRVAscUJBQ0U7a0JBQ0UsNEVBQUNPLEtBQUc7WUFBQ0MsU0FBUyxFQUFDLFFBQVE7c0JBQ3BCVixLQUFLLEdBQ0ZBLEtBQUssQ0FBQ00sR0FBRyxDQUFDLGdCQUE2QjtvQkFBMUJDLFNBQVMsU0FBVEEsU0FBUyxFQUFFQyxRQUFRLFNBQVJBLFFBQVE7Z0JBQzlCLHFCQUNFLDhEQUFDQyxLQUFHO29CQUFDQyxTQUFTLEVBQUUsTUFBTTs4QkFDcEIsNEVBQUNDLEdBQUM7d0JBQUNDLElBQUksRUFBRUosUUFBUTt3QkFBRUssTUFBTSxFQUFDLFFBQVE7d0JBQUNDLEdBQUcsRUFBQyxxQkFBcUI7a0NBQ3pEUCxTQUFTOzs7Ozs2QkFDUjttQkFIc0JBLFNBQVM7Ozs7eUJBSS9CLENBQ047WUFDSixDQUFDLENBQUMsR0FDRixJQUFJOzs7OztnQkFDSjtxQkFDTCxDQUNIO0FBQ0osQ0FBQztHQS9CZVIsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvZ2l0aHViL2luZGV4LmpzP2VmNTUiXSwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2UgY2xpZW50XCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vc3R5bGVcIjtcbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcblxuY29uc3QgZW50cnlwb2ludCA9IFwiaHR0cHM6Ly9hcGkuZ2l0aHViLmNvbS91c2Vycy9heml6Z2hhcmJpL3JlcG9zXCI7XG5hc3luYyBmdW5jdGlvbiBnZXRSZXBvc2l0b3JpZXMoKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGVudHJ5cG9pbnQpO1xuICBpZiAoIXJlcy5vaykge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCBkYXRhXCIpO1xuICB9XG4gIHJldHVybiByZXMuanNvbigpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gR2l0aHViQm94KCkge1xuICBjb25zdCBbcmVwb3MsIHNldFJlcG9zXSA9IHVzZVN0YXRlKFtdKTtcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBhc3luYyBmdW5jdGlvbiBmZXRjaERhdGEoKSB7XG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZ2V0UmVwb3NpdG9yaWVzKCk7XG4gICAgICBzZXRSZXBvcyhcbiAgICAgICAgZGF0YVxuICAgICAgICAgIC5maWx0ZXIoKHsgZm9yayB9KSA9PiAhZm9yaylcbiAgICAgICAgICAubWFwKCh7IGZ1bGxfbmFtZSwgaHRtbF91cmwgfSkgPT4gKHsgZnVsbF9uYW1lLCBodG1sX3VybCB9KSksXG4gICAgICApO1xuICAgIH1cbiAgICBmZXRjaERhdGEoKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ2l0aHViXCI+XG4gICAgICAgIHtyZXBvc1xuICAgICAgICAgID8gcmVwb3MubWFwKCh7IGZ1bGxfbmFtZSwgaHRtbF91cmwgfSkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPSBcImxpbmtcIiBrZXk9e2Z1bGxfbmFtZX0+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtodG1sX3VybH0gdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXIgbm9yZWZlcnJlclwiPlxuICAgICAgICAgICAgICAgICAgICB7ZnVsbF9uYW1lfVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IG51bGx9XG4gICAgICA8L2Rpdj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJTdHlsZSIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiZW50cnlwb2ludCIsImdldFJlcG9zaXRvcmllcyIsInJlcyIsImZldGNoIiwib2siLCJFcnJvciIsImpzb24iLCJHaXRodWJCb3giLCJyZXBvcyIsInNldFJlcG9zIiwiZmV0Y2hEYXRhIiwiZGF0YSIsImZpbHRlciIsImZvcmsiLCJtYXAiLCJmdWxsX25hbWUiLCJodG1sX3VybCIsImRpdiIsImNsYXNzTmFtZSIsImEiLCJocmVmIiwidGFyZ2V0IiwicmVsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/github/index.js\n',
        ),
      );

      /***/
    },
});
