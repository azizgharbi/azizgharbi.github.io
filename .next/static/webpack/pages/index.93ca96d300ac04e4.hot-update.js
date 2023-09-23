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
  /***/ "./components/Rectangle/index.js":
    /*!***************************************!*\
  !*** ./components/Rectangle/index.js ***!
  \***************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ Rectangle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ "./node_modules/tone/build/esm/index.js");\n/* harmony import */ var _Box__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../Box */ "./components/Box/index.js");\n/* harmony import */ var _public_images_link_gif__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./../../public/images/link.gif */ "./public/images/link.gif");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./style */ "./components/Rectangle/style.js");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Rectangle(param) {\n    var description = param.description, note = param.note;\n    var releaseTone = function releaseTone() {\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__.Synth().toDestination();\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth.triggerAttack(note, now);\n        synth.triggerRelease(now + 0.2);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), hover = ref[0], setHover = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), clicked = ref1[0], setClicked = ref1[1];\n    var handleRelease = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        releaseTone();\n        setClicked(!clicked);\n    }, [\n        releaseTone\n    ]);\n    var handleMouseOut = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setHover(true);\n    }, []);\n    var handleMoousOver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setHover(false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                style: _style__WEBPACK_IMPORTED_MODULE_5__["default"].shape(clicked, hover),\n                onClick: handleRelease,\n                onMouseOut: handleMouseOut,\n                onMouseOver: handleMoousOver\n            }, void 0, false, {\n                fileName: "/home/flavasavah/Documents/projects/azizgharbi.github.io/components/Rectangle/index.js",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Box__WEBPACK_IMPORTED_MODULE_3__["default"], {\n                show: clicked && description\n            }, void 0, false, {\n                fileName: "/home/flavasavah/Documents/projects/azizgharbi.github.io/components/Rectangle/index.js",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "/home/flavasavah/Documents/projects/azizgharbi.github.io/components/Rectangle/index.js",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Rectangle, "2YUsXIPr33e9u4nXcobMKKoFxvo=");\n_c = Rectangle;\nvar _c;\n$RefreshReg$(_c, "Rectangle");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY3RhbmdsZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7QUFBQTs7QUFBOEM7QUFDakI7QUFDSDtBQUN3QjtBQUN0QjtBQUViLFNBQVNNLFNBQVMsQ0FBQyxLQUFxQixFQUFFO1FBQXJCQyxXQUFXLEdBQWIsS0FBcUIsQ0FBbkJBLFdBQVcsRUFBRUMsSUFBSSxHQUFuQixLQUFxQixDQUFOQSxJQUFJO1FBSTFDQyxXQUFXLEdBQXBCLFNBQVNBLFdBQVcsR0FBRztRQUNyQixJQUFNQyxLQUFLLEdBQUcsSUFBSVIsdUNBQVUsRUFBRSxDQUFDVSxhQUFhLEVBQUU7UUFDOUMsSUFBTUMsR0FBRyxHQUFHWCxxQ0FBUSxFQUFFO1FBQ3RCUSxLQUFLLENBQUNJLGFBQWEsQ0FBQ04sSUFBSSxFQUFFSyxHQUFHLENBQUMsQ0FBQztRQUMvQkgsS0FBSyxDQUFDSyxjQUFjLENBQUNGLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOztJQVJELElBQTBCWixHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQWpDZSxLQUFLLEdBQWNmLEdBQWMsR0FBNUIsRUFBRWdCLFFBQVEsR0FBSWhCLEdBQWMsR0FBbEI7SUFDdEIsSUFBOEJBLElBQWUsR0FBZkEsK0NBQVEsQ0FBQyxLQUFLLENBQUMsRUFBdENpQixPQUFPLEdBQWdCakIsSUFBZSxHQUEvQixFQUFFa0IsVUFBVSxHQUFJbEIsSUFBZSxHQUFuQjtJQVMxQixJQUFNbUIsYUFBYSxHQUFHcEIsa0RBQVcsQ0FBQyxXQUFNO1FBQ3RDUyxXQUFXLEVBQUUsQ0FBQztRQUNkVSxVQUFVLENBQUMsQ0FBQ0QsT0FBTyxDQUFDLENBQUM7SUFDdkIsQ0FBQyxFQUFFO1FBQUNULFdBQVc7S0FBQyxDQUFDO0lBRWxCLElBQU1ZLGNBQWMsR0FBR3JCLGtEQUFXLENBQUMsV0FBTTtRQUN0Q2lCLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNqQixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4sSUFBTUssZUFBZSxHQUFHdEIsa0RBQVcsQ0FBQyxXQUFNO1FBQ3hDaUIsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ2xCLENBQUMsRUFBRSxFQUFFLENBQUM7SUFFTixxQkFDRSw4REFBQ00sS0FBRzs7MEJBQ0YsOERBQUNBLEtBQUc7Z0JBQ0ZDLEtBQUssRUFBRW5CLG9EQUFXLENBQUNhLE9BQU8sRUFBRUYsS0FBSyxDQUFDO2dCQUNsQ1UsT0FBTyxFQUFFTixhQUFhO2dCQUN0Qk8sVUFBVSxFQUFFTixjQUFjO2dCQUMxQk8sV0FBVyxFQUFFTixlQUFlOzs7OztvQkFDdkI7MEJBQ1AsOERBQUNuQiw0Q0FBRztnQkFBQzBCLElBQUksRUFBR1gsT0FBTyxJQUFJWCxXQUFXOzs7OztvQkFBSzs7Ozs7O1lBQ25DLENBQ047QUFDSixDQUFDO0dBbkN1QkQsU0FBUztBQUFUQSxLQUFBQSxTQUFTIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvUmVjdGFuZ2xlL2luZGV4LmpzP2ZkMGYiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdXNlQ2FsbGJhY2ssIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgKiBhcyBUb25lIGZyb20gXCJ0b25lXCI7XG5pbXBvcnQgQm94IGZyb20gXCIuLy4uL0JveFwiXG5pbXBvcnQgR29rdSBmcm9tIFwiLi8uLi8uLi9wdWJsaWMvaW1hZ2VzL2xpbmsuZ2lmXCI7XG5pbXBvcnQgU3R5bGUgZnJvbSBcIi4vc3R5bGVcIjtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUmVjdGFuZ2xlKHsgZGVzY3JpcHRpb24sIG5vdGUgfSkge1xuICBjb25zdCBbaG92ZXIsIHNldEhvdmVyXSA9IHVzZVN0YXRlKHRydWUpO1xuICBjb25zdCBbY2xpY2tlZCwgc2V0Q2xpY2tlZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgZnVuY3Rpb24gcmVsZWFzZVRvbmUoKSB7XG4gICAgY29uc3Qgc3ludGggPSBuZXcgVG9uZS5TeW50aCgpLnRvRGVzdGluYXRpb24oKTtcbiAgICBjb25zdCBub3cgPSBUb25lLm5vdygpO1xuICAgIHN5bnRoLnRyaWdnZXJBdHRhY2sobm90ZSwgbm93KTtcbiAgICBzeW50aC50cmlnZ2VyUmVsZWFzZShub3cgKyAwLjIpO1xuICB9XG5cbiAgY29uc3QgaGFuZGxlUmVsZWFzZSA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICByZWxlYXNlVG9uZSgpO1xuICAgIHNldENsaWNrZWQoIWNsaWNrZWQpO1xuICB9LCBbcmVsZWFzZVRvbmVdKTtcblxuIGNvbnN0IGhhbmRsZU1vdXNlT3V0ID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEhvdmVyKHRydWUpO1xuICB9LCBbXSk7XG5cbiAgY29uc3QgaGFuZGxlTW9vdXNPdmVyID0gdXNlQ2FsbGJhY2soKCkgPT4ge1xuICAgIHNldEhvdmVyKGZhbHNlKTtcbiAgfSwgW10pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxkaXZcbiAgICAgICAgc3R5bGU9e1N0eWxlLnNoYXBlKGNsaWNrZWQsIGhvdmVyKX1cbiAgICAgICAgb25DbGljaz17aGFuZGxlUmVsZWFzZX1cbiAgICAgICAgb25Nb3VzZU91dD17aGFuZGxlTW91c2VPdXR9XG4gICAgICAgIG9uTW91c2VPdmVyPXtoYW5kbGVNb291c092ZXJ9XG4gICAgICA+PC9kaXY+XG4gICAgICA8Qm94IHNob3c9IHtjbGlja2VkICYmIGRlc2NyaXB0aW9uIH0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJ1c2VDYWxsYmFjayIsInVzZVN0YXRlIiwiVG9uZSIsIkJveCIsIkdva3UiLCJTdHlsZSIsIlJlY3RhbmdsZSIsImRlc2NyaXB0aW9uIiwibm90ZSIsInJlbGVhc2VUb25lIiwic3ludGgiLCJTeW50aCIsInRvRGVzdGluYXRpb24iLCJub3ciLCJ0cmlnZ2VyQXR0YWNrIiwidHJpZ2dlclJlbGVhc2UiLCJob3ZlciIsInNldEhvdmVyIiwiY2xpY2tlZCIsInNldENsaWNrZWQiLCJoYW5kbGVSZWxlYXNlIiwiaGFuZGxlTW91c2VPdXQiLCJoYW5kbGVNb291c092ZXIiLCJkaXYiLCJzdHlsZSIsInNoYXBlIiwib25DbGljayIsIm9uTW91c2VPdXQiLCJvbk1vdXNlT3ZlciIsInNob3ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Rectangle/index.js\n',
        ),
      );

      /***/
    },
});
