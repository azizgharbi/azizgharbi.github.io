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
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "default": function() { return /* binding */ Rectangle; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "./node_modules/react/jsx-dev-runtime.js");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var tone__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! tone */ "./node_modules/tone/build/esm/index.js");\n/* harmony import */ var _public_images_link_gif__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../public/images/link.gif */ "./public/images/link.gif");\n/* harmony import */ var _style__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style */ "./components/Rectangle/style.js");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Rectangle(param) {\n    var description = param.description, note = param.note;\n    var releaseTone = function releaseTone() {\n        var synth = new tone__WEBPACK_IMPORTED_MODULE_2__.Synth().toDestination();\n        var now = tone__WEBPACK_IMPORTED_MODULE_2__.now();\n        synth.triggerAttack(note, now);\n        synth.triggerRelease(now + 0.2);\n    };\n    _s();\n    var ref = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(true), hover = ref[0], setHover = ref[1];\n    var ref1 = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false), clicked = ref1[0], setClicked = ref1[1];\n    var handleRelease = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        releaseTone();\n        setClicked(!clicked);\n    }, [\n        releaseTone\n    ]);\n    var handleMouseOut = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setHover(true);\n    }, []);\n    var handleMoousOver = (0,react__WEBPACK_IMPORTED_MODULE_1__.useCallback)(function() {\n        setHover(false);\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                style: _style__WEBPACK_IMPORTED_MODULE_4__["default"].shape(clicked, hover),\n                onClick: handleRelease,\n                onMouseOut: function() {\n                    setHover(true);\n                },\n                onMouseOver: function() {\n                    setHover(false);\n                }\n            }, void 0, false, {\n                fileName: "/home/flavasavah/Documents/projects/azizgharbi.github.io/components/Rectangle/index.js",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this),\n            clicked && description ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("img", {\n                        className: "rectangle_img",\n                        src: _public_images_link_gif__WEBPACK_IMPORTED_MODULE_3__["default"].src,\n                        width: 150\n                    }, void 0, false, {\n                        fileName: "/home/flavasavah/Documents/projects/azizgharbi.github.io/components/Rectangle/index.js",\n                        lineNumber: 46,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                        className: "rectangle_text",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("p", {\n                            children: description\n                        }, void 0, false, {\n                            fileName: "/home/flavasavah/Documents/projects/azizgharbi.github.io/components/Rectangle/index.js",\n                            lineNumber: 48,\n                            columnNumber: 13\n                        }, this)\n                    }, void 0, false, {\n                        fileName: "/home/flavasavah/Documents/projects/azizgharbi.github.io/components/Rectangle/index.js",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this)\n                ]\n            }, void 0, true) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)("div", {\n                className: "rectangle_head"\n            }, void 0, false, {\n                fileName: "/home/flavasavah/Documents/projects/azizgharbi.github.io/components/Rectangle/index.js",\n                lineNumber: 52,\n                columnNumber: 9\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: "/home/flavasavah/Documents/projects/azizgharbi.github.io/components/Rectangle/index.js",\n        lineNumber: 32,\n        columnNumber: 5\n    }, this);\n}\n_s(Rectangle, "2YUsXIPr33e9u4nXcobMKKoFxvo=");\n_c = Rectangle;\nvar _c;\n$RefreshReg$(_c, "Rectangle");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY3RhbmdsZS9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7OztBQUFBOztBQUE4QztBQUNqQjtBQUVxQjtBQUN0QjtBQUViLFNBQVNLLFNBQVMsQ0FBQyxLQUFxQixFQUFFO1FBQXJCQyxXQUFXLEdBQWIsS0FBcUIsQ0FBbkJBLFdBQVcsRUFBRUMsSUFBSSxHQUFuQixLQUFxQixDQUFOQSxJQUFJO1FBSTFDQyxXQUFXLEdBQXBCLFNBQVNBLFdBQVcsR0FBRztRQUNyQixJQUFNQyxLQUFLLEdBQUcsSUFBSVAsdUNBQVUsRUFBRSxDQUFDUyxhQUFhLEVBQUU7UUFDOUMsSUFBTUMsR0FBRyxHQUFHVixxQ0FBUSxFQUFFO1FBQ3RCTyxLQUFLLENBQUNJLGFBQWEsQ0FBQ04sSUFBSSxFQUFFSyxHQUFHLENBQUMsQ0FBQztRQUMvQkgsS0FBSyxDQUFDSyxjQUFjLENBQUNGLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQztJQUNsQyxDQUFDOztJQVJELElBQTBCWCxHQUFjLEdBQWRBLCtDQUFRLENBQUMsSUFBSSxDQUFDLEVBQWpDYyxLQUFLLEdBQWNkLEdBQWMsR0FBNUIsRUFBRWUsUUFBUSxHQUFJZixHQUFjLEdBQWxCO0lBQ3RCLElBQThCQSxJQUFlLEdBQWZBLCtDQUFRLENBQUMsS0FBSyxDQUFDLEVBQXRDZ0IsT0FBTyxHQUFnQmhCLElBQWUsR0FBL0IsRUFBRWlCLFVBQVUsR0FBSWpCLElBQWUsR0FBbkI7SUFTMUIsSUFBTWtCLGFBQWEsR0FBR25CLGtEQUFXLENBQUMsV0FBTTtRQUN0Q1EsV0FBVyxFQUFFLENBQUM7UUFDZFUsVUFBVSxDQUFDLENBQUNELE9BQU8sQ0FBQyxDQUFDO0lBQ3ZCLENBQUMsRUFBRTtRQUFDVCxXQUFXO0tBQUMsQ0FBQztJQUVsQixJQUFNWSxjQUFjLEdBQUdwQixrREFBVyxDQUFDLFdBQU07UUFDdENnQixRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDakIsQ0FBQyxFQUFFLEVBQUUsQ0FBQztJQUVOLElBQU1LLGVBQWUsR0FBR3JCLGtEQUFXLENBQUMsV0FBTTtRQUN4Q2dCLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUNsQixDQUFDLEVBQUUsRUFBRSxDQUFDO0lBRU4scUJBQ0UsOERBQUNNLEtBQUc7OzBCQUNGLDhEQUFDQSxLQUFHO2dCQUNGQyxLQUFLLEVBQUVuQixvREFBVyxDQUFDYSxPQUFPLEVBQUVGLEtBQUssQ0FBQztnQkFDbENVLE9BQU8sRUFBRU4sYUFBYTtnQkFDdEJPLFVBQVUsRUFBRSxXQUFNO29CQUNoQlYsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO2dCQUNqQixDQUFDO2dCQUNEVyxXQUFXLEVBQUUsV0FBTTtvQkFDakJYLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDbEIsQ0FBQzs7Ozs7b0JBQ0k7WUFFTkMsT0FBTyxJQUFJWCxXQUFXLGlCQUNyQjs7a0NBQ0UsOERBQUNzQixLQUFHO3dCQUFDQyxTQUFTLEVBQUMsZUFBZTt3QkFBQ0MsR0FBRyxFQUFFM0IsbUVBQVE7d0JBQUU0QixLQUFLLEVBQUUsR0FBRzs7Ozs7NEJBQUk7a0NBQzVELDhEQUFDVCxLQUFHO3dCQUFDTyxTQUFTLEVBQUMsZ0JBQWdCO2tDQUM3Qiw0RUFBQ0csR0FBQztzQ0FBRTFCLFdBQVc7Ozs7O2dDQUFLOzs7Ozs0QkFDaEI7OzRCQUNMLGlCQUVILDhEQUFDZ0IsS0FBRztnQkFBQ08sU0FBUyxFQUFDLGdCQUFnQjs7Ozs7b0JBQU87Ozs7OztZQUVwQyxDQUNOO0FBQ0osQ0FBQztHQWpEdUJ4QixTQUFTO0FBQVRBLEtBQUFBLFNBQVMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9SZWN0YW5nbGUvaW5kZXguanM/ZmQwZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB1c2VDYWxsYmFjaywgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFRvbmUgZnJvbSBcInRvbmVcIjtcblxuaW1wb3J0IEdva3UgZnJvbSBcIi4vLi4vLi4vcHVibGljL2ltYWdlcy9saW5rLmdpZlwiO1xuaW1wb3J0IFN0eWxlIGZyb20gXCIuL3N0eWxlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFJlY3RhbmdsZSh7IGRlc2NyaXB0aW9uLCBub3RlIH0pIHtcbiAgY29uc3QgW2hvdmVyLCBzZXRIb3Zlcl0gPSB1c2VTdGF0ZSh0cnVlKTtcbiAgY29uc3QgW2NsaWNrZWQsIHNldENsaWNrZWRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGZ1bmN0aW9uIHJlbGVhc2VUb25lKCkge1xuICAgIGNvbnN0IHN5bnRoID0gbmV3IFRvbmUuU3ludGgoKS50b0Rlc3RpbmF0aW9uKCk7XG4gICAgY29uc3Qgbm93ID0gVG9uZS5ub3coKTtcbiAgICBzeW50aC50cmlnZ2VyQXR0YWNrKG5vdGUsIG5vdyk7XG4gICAgc3ludGgudHJpZ2dlclJlbGVhc2Uobm93ICsgMC4yKTtcbiAgfVxuXG4gIGNvbnN0IGhhbmRsZVJlbGVhc2UgPSB1c2VDYWxsYmFjaygoKSA9PiB7XG4gICAgcmVsZWFzZVRvbmUoKTtcbiAgICBzZXRDbGlja2VkKCFjbGlja2VkKTtcbiAgfSwgW3JlbGVhc2VUb25lXSk7XG5cbiBjb25zdCBoYW5kbGVNb3VzZU91dCA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRIb3Zlcih0cnVlKTtcbiAgfSwgW10pO1xuXG4gIGNvbnN0IGhhbmRsZU1vb3VzT3ZlciA9IHVzZUNhbGxiYWNrKCgpID0+IHtcbiAgICBzZXRIb3ZlcihmYWxzZSk7XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8ZGl2XG4gICAgICAgIHN0eWxlPXtTdHlsZS5zaGFwZShjbGlja2VkLCBob3Zlcil9XG4gICAgICAgIG9uQ2xpY2s9e2hhbmRsZVJlbGVhc2V9XG4gICAgICAgIG9uTW91c2VPdXQ9eygpID0+IHtcbiAgICAgICAgICBzZXRIb3Zlcih0cnVlKTtcbiAgICAgICAgfX1cbiAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IHtcbiAgICAgICAgICBzZXRIb3ZlcihmYWxzZSk7XG4gICAgICAgIH19XG4gICAgICA+PC9kaXY+XG5cbiAgICAgIHtjbGlja2VkICYmIGRlc2NyaXB0aW9uID8gKFxuICAgICAgICA8PlxuICAgICAgICAgIDxpbWcgY2xhc3NOYW1lPVwicmVjdGFuZ2xlX2ltZ1wiIHNyYz17R29rdS5zcmN9IHdpZHRoPXsxNTB9IC8+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyZWN0YW5nbGVfdGV4dFwiPlxuICAgICAgICAgICAgPHA+e2Rlc2NyaXB0aW9ufTwvcD5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC8+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJlY3RhbmdsZV9oZWFkXCI+PC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUNhbGxiYWNrIiwidXNlU3RhdGUiLCJUb25lIiwiR29rdSIsIlN0eWxlIiwiUmVjdGFuZ2xlIiwiZGVzY3JpcHRpb24iLCJub3RlIiwicmVsZWFzZVRvbmUiLCJzeW50aCIsIlN5bnRoIiwidG9EZXN0aW5hdGlvbiIsIm5vdyIsInRyaWdnZXJBdHRhY2siLCJ0cmlnZ2VyUmVsZWFzZSIsImhvdmVyIiwic2V0SG92ZXIiLCJjbGlja2VkIiwic2V0Q2xpY2tlZCIsImhhbmRsZVJlbGVhc2UiLCJoYW5kbGVNb3VzZU91dCIsImhhbmRsZU1vb3VzT3ZlciIsImRpdiIsInN0eWxlIiwic2hhcGUiLCJvbkNsaWNrIiwib25Nb3VzZU91dCIsIm9uTW91c2VPdmVyIiwiaW1nIiwiY2xhc3NOYW1lIiwic3JjIiwid2lkdGgiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Rectangle/index.js\n',
        ),
      );

      /***/
    },
});