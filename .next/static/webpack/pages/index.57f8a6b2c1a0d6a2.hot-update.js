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
  /***/ "./components/Rectangle/style.js":
    /*!***************************************!*\
  !*** ./components/Rectangle/style.js ***!
  \***************************************/
    /***/ function (module, __webpack_exports__, __webpack_require__) {
      eval(
        __webpack_require__.ts(
          '__webpack_require__.r(__webpack_exports__);\nvar rectangleStyle = {\n    shape: function shape() {\n        var isClicked = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : false, isHover = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;\n        return {\n            transition: "all .3s",\n            cursor: "pointer",\n            marginLeft: "10px",\n            background: isHover && !isClicked ? "#80c71f" : "#89ac59",\n            height: !isClicked && isHover ? "180px" : "".concat((180 + Math.random() * 100).toFixed(), "px"),\n            width: "75px"\n        };\n    }\n};\n/* harmony default export */ __webpack_exports__["default"] = (rectangleStyle);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we\'re in a\n        // browser context before continuing.\n        if (typeof self !== \'undefined\' &&\n            // AMP / No-JS mode does not inject these helpers:\n            \'$RefreshHelpers$\' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we\'ll check if it\'s\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we\'ll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it\'s possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL1JlY3RhbmdsZS9zdHlsZS5qcy5qcyIsIm1hcHBpbmdzIjoiO0FBQUEsSUFBTUEsY0FBYyxHQUFHO0lBQ3JCQyxLQUFLLEVBQUUsU0FBUEEsS0FBSyxHQUFnRDtZQUFwQ0MsU0FBUyxHQUFUQSwrQ0FBaUIsa0JBQUwsS0FBSyxFQUFFQyxPQUFPLEdBQVBBLCtDQUFlLGtCQUFMLEtBQUs7UUFDakQsT0FBTztZQUNMQyxVQUFVLEVBQUUsU0FBUztZQUNyQkMsTUFBTSxFQUFFLFNBQVM7WUFDakJDLFVBQVUsRUFBRSxNQUFNO1lBQ2xCQyxVQUFVLEVBQUVKLE9BQU8sSUFBSSxDQUFDRCxTQUFTLEdBQUcsU0FBUyxHQUFHLFNBQVM7WUFDekRNLE1BQU0sRUFDSixDQUFDTixTQUFTLElBQUlDLE9BQU8sR0FDakIsT0FBTyxHQUNQLEVBQUMsQ0FBd0MsTUFBRSxDQUF4QyxDQUFDLEdBQUcsR0FBR00sSUFBSSxDQUFDQyxNQUFNLEVBQUUsR0FBRyxHQUFHLEVBQUVDLE9BQU8sRUFBRSxFQUFDLElBQUUsQ0FBQztZQUNsREMsS0FBSyxFQUFFLE1BQU07U0FDZCxDQUFDO0lBQ0osQ0FBQztDQUNGO0FBRUQsK0RBQWVaLGNBQWMsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL1JlY3RhbmdsZS9zdHlsZS5qcz9jZmMxIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IHJlY3RhbmdsZVN0eWxlID0ge1xuICBzaGFwZTogZnVuY3Rpb24gKGlzQ2xpY2tlZCA9IGZhbHNlLCBpc0hvdmVyID0gZmFsc2UpIHtcbiAgICByZXR1cm4ge1xuICAgICAgdHJhbnNpdGlvbjogXCJhbGwgLjNzXCIsXG4gICAgICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICAgICAgbWFyZ2luTGVmdDogXCIxMHB4XCIsXG4gICAgICBiYWNrZ3JvdW5kOiBpc0hvdmVyICYmICFpc0NsaWNrZWQgPyBcIiM4MGM3MWZcIiA6IFwiIzg5YWM1OVwiLFxuICAgICAgaGVpZ2h0OlxuICAgICAgICAhaXNDbGlja2VkICYmIGlzSG92ZXJcbiAgICAgICAgICA/IFwiMTgwcHhcIlxuICAgICAgICAgIDogYCR7KDE4MCArIE1hdGgucmFuZG9tKCkgKiAxMDApLnRvRml4ZWQoKX1weGAsXG4gICAgICB3aWR0aDogXCI3NXB4XCIsXG4gICAgfTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHJlY3RhbmdsZVN0eWxlO1xuIl0sIm5hbWVzIjpbInJlY3RhbmdsZVN0eWxlIiwic2hhcGUiLCJpc0NsaWNrZWQiLCJpc0hvdmVyIiwidHJhbnNpdGlvbiIsImN1cnNvciIsIm1hcmdpbkxlZnQiLCJiYWNrZ3JvdW5kIiwiaGVpZ2h0IiwiTWF0aCIsInJhbmRvbSIsInRvRml4ZWQiLCJ3aWR0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/Rectangle/style.js\n',
        ),
      );

      /***/
    },
});
