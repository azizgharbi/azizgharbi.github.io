"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css ***!
  \********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"/* definition */\\n@font-face {\\n  font-family: Minecraft;\\n  src: url('https://azizgharbi.github.io/fonts/minecraft-fonts/MinecraftRegular.otf');\\n  font-weight: Bold;\\n  font-style: normal;\\n}\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: Minecraft, sans-serif;\\n}\\n/* width */\\n::-webkit-scrollbar {\\n  width: 10px;\\n}\\n/* Track */\\n::-webkit-scrollbar-track {\\n  background: #f1f1f1;\\n}\\n/* Handle */\\n::-webkit-scrollbar-thumb {\\n  background: #d63031;\\n}\\n/* Handle on hover */\\n::-webkit-scrollbar-thumb:hover {\\n  background: #d63031;\\n}\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n* {\\n  box-sizing: border-box;\\n}\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n  body {\\n    color: #f9ffff;\\n    background: #636e72;\\n    min-width: 375px;\\n  }\\n  .ground_1 {\\n    height: 50px;\\n    background: #d63031;\\n    border-bottom: 10px solid #e74c3c;\\n  }\\n  .ground_menu {\\n    display: flex;\\n    list-style-type: none;\\n    flex-direction: row-reverse;\\n    padding: 0;\\n    margin: 0;\\n  }\\n  .ground_menu > li {\\n    margin-top: 10px;\\n    margin-right: 10px;\\n  }\\n  .game_text {\\n    font-size: 18px;\\n    text-align: center;\\n    margin-top: 75px;\\n    margin-bottom: 75px;\\n  }\\n  .rectangle_text {\\n    position: absolute;\\n    margin-top: 120px;\\n    padding: 20px;\\n    background: #d63031;\\n    border: #80c71f 9px solid;\\n    z-index: 99999999;\\n    width: 600px;\\n  }\\n  .rectangle_head {\\n    margin-top: 5px;\\n    margin-left: 10px;\\n    background: #d63031;\\n    height: 10px;\\n    width: 75px;\\n  }\\n  .rectangle_img {\\n    position: absolute;\\n    margin-top: 10px;\\n    animation: move 2s linear infinite;\\n  }\\n  .github-box {\\n    width: 450px;\\n    height: auto;\\n    padding: 10px;\\n    background: #d63031;\\n    margin-right: auto;\\n    margin-left: auto;\\n    margin-bottom: 100px;\\n    border-radius: 5px;\\n  }\\n\\n  .loading-data {\\n    height: 430px;\\n  }\\n  .hint_game {\\n    color: blueviolet;\\n    font-weight: bold;\\n    font-size: larger;\\n  }\\n  .link {\\n    padding: 5px;\\n    color: #fff;\\n    text-decoration: underline;\\n    font-weight: bold;\\n  }\\n  .terminal {\\n    background: #2d3436;\\n    height: 180px;\\n    line-height: 1.6;\\n    padding: 10px;\\n    margin-left: auto;\\n    margin-right: auto;\\n    margin-bottom: 40px;\\n    margin-top: 100px;\\n    width: 450px;\\n    border-radius: 5px;\\n  }\\n  .terminal-menu {\\n    height: 10px;\\n    background-color: #3c44a9;\\n  }\\n\\n  @keyframes move {\\n    0% {\\n      transform: translateX(0px);\\n    }\\n    25% {\\n      transform: translateX(150px);\\n    }\\n    75% {\\n      transform: translateX(0px);\\n    }\\n    100% {\\n      transform: translateY(0px);\\n    }\\n  }\\n  .footer {\\n    position: fixed;\\n    bottom: 0;\\n    width: 100%;\\n    height: 80px;\\n    color: white;\\n    text-align: center;\\n  }\\n  .footer > p > span {\\n    font-size: 18px;\\n    color: #ffc312;\\n  }\\n  .footer > p > a {\\n    color: #3c44a9;\\n    cursor: pointer;\\n  }\\n  @media only screen and (max-width: 480px) {\\n    .github-box {\\n      width: 325px;\\n      margin-bottom: 30px;\\n    }\\n    .card {\\n      width: 325px;\\n      height: 250px;\\n    }\\n    .rectangle_text {\\n      width: 325px;\\n    }\\n    .footer {\\n      position: relative;\\n      width: 100%;\\n      height: 80px;\\n      color: white;\\n      text-align: center;\\n    }\\n  }\\n}\\n\\n.cursor {\\n  display: inline-block;\\n  margin-left: 5px;\\n  width: 5px;\\n  height: 20px;\\n  background-color: currentColor;\\n  animation: blink 1s step-end infinite;\\n}\\n\\n@keyframes blink {\\n  from,\\n  to {\\n    background-color: transparent;\\n  }\\n  50% {\\n    background-color: currentColor;\\n  }\\n}\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/globals.css\"],\"names\":[],\"mappings\":\"AAAA,eAAe;AACf;EACE,sBAAsB;EACtB,mFAAmF;EACnF,iBAAiB;EACjB,kBAAkB;AACpB;AACA;;EAEE,UAAU;EACV,SAAS;EACT,kCAAkC;AACpC;AACA,UAAU;AACV;EACE,WAAW;AACb;AACA,UAAU;AACV;EACE,mBAAmB;AACrB;AACA,WAAW;AACX;EACE,mBAAmB;AACrB;AACA,oBAAoB;AACpB;EACE,mBAAmB;AACrB;AACA;EACE,cAAc;EACd,qBAAqB;AACvB;AACA;EACE,sBAAsB;AACxB;AACA;EACE;IACE,kBAAkB;EACpB;EACA;IACE,cAAc;IACd,mBAAmB;IACnB,gBAAgB;EAClB;EACA;IACE,YAAY;IACZ,mBAAmB;IACnB,iCAAiC;EACnC;EACA;IACE,aAAa;IACb,qBAAqB;IACrB,2BAA2B;IAC3B,UAAU;IACV,SAAS;EACX;EACA;IACE,gBAAgB;IAChB,kBAAkB;EACpB;EACA;IACE,eAAe;IACf,kBAAkB;IAClB,gBAAgB;IAChB,mBAAmB;EACrB;EACA;IACE,kBAAkB;IAClB,iBAAiB;IACjB,aAAa;IACb,mBAAmB;IACnB,yBAAyB;IACzB,iBAAiB;IACjB,YAAY;EACd;EACA;IACE,eAAe;IACf,iBAAiB;IACjB,mBAAmB;IACnB,YAAY;IACZ,WAAW;EACb;EACA;IACE,kBAAkB;IAClB,gBAAgB;IAChB,kCAAkC;EACpC;EACA;IACE,YAAY;IACZ,YAAY;IACZ,aAAa;IACb,mBAAmB;IACnB,kBAAkB;IAClB,iBAAiB;IACjB,oBAAoB;IACpB,kBAAkB;EACpB;;EAEA;IACE,aAAa;EACf;EACA;IACE,iBAAiB;IACjB,iBAAiB;IACjB,iBAAiB;EACnB;EACA;IACE,YAAY;IACZ,WAAW;IACX,0BAA0B;IAC1B,iBAAiB;EACnB;EACA;IACE,mBAAmB;IACnB,aAAa;IACb,gBAAgB;IAChB,aAAa;IACb,iBAAiB;IACjB,kBAAkB;IAClB,mBAAmB;IACnB,iBAAiB;IACjB,YAAY;IACZ,kBAAkB;EACpB;EACA;IACE,YAAY;IACZ,yBAAyB;EAC3B;;EAEA;IACE;MACE,0BAA0B;IAC5B;IACA;MACE,4BAA4B;IAC9B;IACA;MACE,0BAA0B;IAC5B;IACA;MACE,0BAA0B;IAC5B;EACF;EACA;IACE,eAAe;IACf,SAAS;IACT,WAAW;IACX,YAAY;IACZ,YAAY;IACZ,kBAAkB;EACpB;EACA;IACE,eAAe;IACf,cAAc;EAChB;EACA;IACE,cAAc;IACd,eAAe;EACjB;EACA;IACE;MACE,YAAY;MACZ,mBAAmB;IACrB;IACA;MACE,YAAY;MACZ,aAAa;IACf;IACA;MACE,YAAY;IACd;IACA;MACE,kBAAkB;MAClB,WAAW;MACX,YAAY;MACZ,YAAY;MACZ,kBAAkB;IACpB;EACF;AACF;;AAEA;EACE,qBAAqB;EACrB,gBAAgB;EAChB,UAAU;EACV,YAAY;EACZ,8BAA8B;EAC9B,qCAAqC;AACvC;;AAEA;EACE;;IAEE,6BAA6B;EAC/B;EACA;IACE,8BAA8B;EAChC;AACF\",\"sourcesContent\":[\"/* definition */\\n@font-face {\\n  font-family: Minecraft;\\n  src: url('https://azizgharbi.github.io/fonts/minecraft-fonts/MinecraftRegular.otf');\\n  font-weight: Bold;\\n  font-style: normal;\\n}\\nhtml,\\nbody {\\n  padding: 0;\\n  margin: 0;\\n  font-family: Minecraft, sans-serif;\\n}\\n/* width */\\n::-webkit-scrollbar {\\n  width: 10px;\\n}\\n/* Track */\\n::-webkit-scrollbar-track {\\n  background: #f1f1f1;\\n}\\n/* Handle */\\n::-webkit-scrollbar-thumb {\\n  background: #d63031;\\n}\\n/* Handle on hover */\\n::-webkit-scrollbar-thumb:hover {\\n  background: #d63031;\\n}\\na {\\n  color: inherit;\\n  text-decoration: none;\\n}\\n* {\\n  box-sizing: border-box;\\n}\\n@media (prefers-color-scheme: dark) {\\n  html {\\n    color-scheme: dark;\\n  }\\n  body {\\n    color: #f9ffff;\\n    background: #636e72;\\n    min-width: 375px;\\n  }\\n  .ground_1 {\\n    height: 50px;\\n    background: #d63031;\\n    border-bottom: 10px solid #e74c3c;\\n  }\\n  .ground_menu {\\n    display: flex;\\n    list-style-type: none;\\n    flex-direction: row-reverse;\\n    padding: 0;\\n    margin: 0;\\n  }\\n  .ground_menu > li {\\n    margin-top: 10px;\\n    margin-right: 10px;\\n  }\\n  .game_text {\\n    font-size: 18px;\\n    text-align: center;\\n    margin-top: 75px;\\n    margin-bottom: 75px;\\n  }\\n  .rectangle_text {\\n    position: absolute;\\n    margin-top: 120px;\\n    padding: 20px;\\n    background: #d63031;\\n    border: #80c71f 9px solid;\\n    z-index: 99999999;\\n    width: 600px;\\n  }\\n  .rectangle_head {\\n    margin-top: 5px;\\n    margin-left: 10px;\\n    background: #d63031;\\n    height: 10px;\\n    width: 75px;\\n  }\\n  .rectangle_img {\\n    position: absolute;\\n    margin-top: 10px;\\n    animation: move 2s linear infinite;\\n  }\\n  .github-box {\\n    width: 450px;\\n    height: auto;\\n    padding: 10px;\\n    background: #d63031;\\n    margin-right: auto;\\n    margin-left: auto;\\n    margin-bottom: 100px;\\n    border-radius: 5px;\\n  }\\n\\n  .loading-data {\\n    height: 430px;\\n  }\\n  .hint_game {\\n    color: blueviolet;\\n    font-weight: bold;\\n    font-size: larger;\\n  }\\n  .link {\\n    padding: 5px;\\n    color: #fff;\\n    text-decoration: underline;\\n    font-weight: bold;\\n  }\\n  .terminal {\\n    background: #2d3436;\\n    height: 180px;\\n    line-height: 1.6;\\n    padding: 10px;\\n    margin-left: auto;\\n    margin-right: auto;\\n    margin-bottom: 40px;\\n    margin-top: 100px;\\n    width: 450px;\\n    border-radius: 5px;\\n  }\\n  .terminal-menu {\\n    height: 10px;\\n    background-color: #3c44a9;\\n  }\\n\\n  @keyframes move {\\n    0% {\\n      transform: translateX(0px);\\n    }\\n    25% {\\n      transform: translateX(150px);\\n    }\\n    75% {\\n      transform: translateX(0px);\\n    }\\n    100% {\\n      transform: translateY(0px);\\n    }\\n  }\\n  .footer {\\n    position: fixed;\\n    bottom: 0;\\n    width: 100%;\\n    height: 80px;\\n    color: white;\\n    text-align: center;\\n  }\\n  .footer > p > span {\\n    font-size: 18px;\\n    color: #ffc312;\\n  }\\n  .footer > p > a {\\n    color: #3c44a9;\\n    cursor: pointer;\\n  }\\n  @media only screen and (max-width: 480px) {\\n    .github-box {\\n      width: 325px;\\n      margin-bottom: 30px;\\n    }\\n    .card {\\n      width: 325px;\\n      height: 250px;\\n    }\\n    .rectangle_text {\\n      width: 325px;\\n    }\\n    .footer {\\n      position: relative;\\n      width: 100%;\\n      height: 80px;\\n      color: white;\\n      text-align: center;\\n    }\\n  }\\n}\\n\\n.cursor {\\n  display: inline-block;\\n  margin-left: 5px;\\n  width: 5px;\\n  height: 20px;\\n  background-color: currentColor;\\n  animation: blink 1s step-end infinite;\\n}\\n\\n@keyframes blink {\\n  from,\\n  to {\\n    background-color: transparent;\\n  }\\n  50% {\\n    background-color: currentColor;\\n  }\\n}\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1syXS5vbmVPZls4XS51c2VbMV0hLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9wb3N0Y3NzLWxvYWRlci9zcmMvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbMl0ub25lT2ZbOF0udXNlWzJdIS4vc3R5bGVzL2dsb2JhbHMuY3NzLmpzIiwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ3dIO0FBQ3hILDhCQUE4QixrSEFBMkI7QUFDekQ7QUFDQSx3RUFBd0UsMkJBQTJCLHdGQUF3RixzQkFBc0IsdUJBQXVCLEdBQUcsZUFBZSxlQUFlLGNBQWMsdUNBQXVDLEdBQUcsb0NBQW9DLGdCQUFnQixHQUFHLDBDQUEwQyx3QkFBd0IsR0FBRywyQ0FBMkMsd0JBQXdCLEdBQUcsMERBQTBELHdCQUF3QixHQUFHLEtBQUssbUJBQW1CLDBCQUEwQixHQUFHLEtBQUssMkJBQTJCLEdBQUcsdUNBQXVDLFVBQVUseUJBQXlCLEtBQUssVUFBVSxxQkFBcUIsMEJBQTBCLHVCQUF1QixLQUFLLGVBQWUsbUJBQW1CLDBCQUEwQix3Q0FBd0MsS0FBSyxrQkFBa0Isb0JBQW9CLDRCQUE0QixrQ0FBa0MsaUJBQWlCLGdCQUFnQixLQUFLLHVCQUF1Qix1QkFBdUIseUJBQXlCLEtBQUssZ0JBQWdCLHNCQUFzQix5QkFBeUIsdUJBQXVCLDBCQUEwQixLQUFLLHFCQUFxQix5QkFBeUIsd0JBQXdCLG9CQUFvQiwwQkFBMEIsZ0NBQWdDLHdCQUF3QixtQkFBbUIsS0FBSyxxQkFBcUIsc0JBQXNCLHdCQUF3QiwwQkFBMEIsbUJBQW1CLGtCQUFrQixLQUFLLG9CQUFvQix5QkFBeUIsdUJBQXVCLHlDQUF5QyxLQUFLLGlCQUFpQixtQkFBbUIsbUJBQW1CLG9CQUFvQiwwQkFBMEIseUJBQXlCLHdCQUF3QiwyQkFB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QUFhLDBCQUEwQixxQkFBcUIsZUFBZSxpQkFBaUIsbUNBQW1DLDBDQUEwQyxHQUFHLHNCQUFzQixpQkFBaUIsb0NBQW9DLEtBQUssU0FBUyxxQ0FBcUMsS0FBSyxHQUFHLHFCQUFxQjtBQUNyalM7QUFDQSwrREFBZSx1QkFBdUIsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zdHlsZXMvZ2xvYmFscy5jc3M/YmMzOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogZGVmaW5pdGlvbiAqL1xcbkBmb250LWZhY2Uge1xcbiAgZm9udC1mYW1pbHk6IE1pbmVjcmFmdDtcXG4gIHNyYzogdXJsKCdodHRwczovL2F6aXpnaGFyYmkuZ2l0aHViLmlvL2ZvbnRzL21pbmVjcmFmdC1mb250cy9NaW5lY3JhZnRSZWd1bGFyLm90ZicpO1xcbiAgZm9udC13ZWlnaHQ6IEJvbGQ7XFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxufVxcbmh0bWwsXFxuYm9keSB7XFxuICBwYWRkaW5nOiAwO1xcbiAgbWFyZ2luOiAwO1xcbiAgZm9udC1mYW1pbHk6IE1pbmVjcmFmdCwgc2Fucy1zZXJpZjtcXG59XFxuLyogd2lkdGggKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyIHtcXG4gIHdpZHRoOiAxMHB4O1xcbn1cXG4vKiBUcmFjayAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdHJhY2sge1xcbiAgYmFja2dyb3VuZDogI2YxZjFmMTtcXG59XFxuLyogSGFuZGxlICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10aHVtYiB7XFxuICBiYWNrZ3JvdW5kOiAjZDYzMDMxO1xcbn1cXG4vKiBIYW5kbGUgb24gaG92ZXIgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iOmhvdmVyIHtcXG4gIGJhY2tncm91bmQ6ICNkNjMwMzE7XFxufVxcbmEge1xcbiAgY29sb3I6IGluaGVyaXQ7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxufVxcbioge1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG59XFxuQG1lZGlhIChwcmVmZXJzLWNvbG9yLXNjaGVtZTogZGFyaykge1xcbiAgaHRtbCB7XFxuICAgIGNvbG9yLXNjaGVtZTogZGFyaztcXG4gIH1cXG4gIGJvZHkge1xcbiAgICBjb2xvcjogI2Y5ZmZmZjtcXG4gICAgYmFja2dyb3VuZDogIzYzNmU3MjtcXG4gICAgbWluLXdpZHRoOiAzNzVweDtcXG4gIH1cXG4gIC5ncm91bmRfMSB7XFxuICAgIGhlaWdodDogNTBweDtcXG4gICAgYmFja2dyb3VuZDogI2Q2MzAzMTtcXG4gICAgYm9yZGVyLWJvdHRvbTogMTBweCBzb2xpZCAjZTc0YzNjO1xcbiAgfVxcbiAgLmdyb3VuZF9tZW51IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93LXJldmVyc2U7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIG1hcmdpbjogMDtcXG4gIH1cXG4gIC5ncm91bmRfbWVudSA+IGxpIHtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgbWFyZ2luLXJpZ2h0OiAxMHB4O1xcbiAgfVxcbiAgLmdhbWVfdGV4dCB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICBtYXJnaW4tdG9wOiA3NXB4O1xcbiAgICBtYXJnaW4tYm90dG9tOiA3NXB4O1xcbiAgfVxcbiAgLnJlY3RhbmdsZV90ZXh0IHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxMjBweDtcXG4gICAgcGFkZGluZzogMjBweDtcXG4gICAgYmFja2dyb3VuZDogI2Q2MzAzMTtcXG4gICAgYm9yZGVyOiAjODBjNzFmIDlweCBzb2xpZDtcXG4gICAgei1pbmRleDogOTk5OTk5OTk7XFxuICAgIHdpZHRoOiA2MDBweDtcXG4gIH1cXG4gIC5yZWN0YW5nbGVfaGVhZCB7XFxuICAgIG1hcmdpbi10b3A6IDVweDtcXG4gICAgbWFyZ2luLWxlZnQ6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNkNjMwMzE7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgd2lkdGg6IDc1cHg7XFxuICB9XFxuICAucmVjdGFuZ2xlX2ltZyB7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgbWFyZ2luLXRvcDogMTBweDtcXG4gICAgYW5pbWF0aW9uOiBtb3ZlIDJzIGxpbmVhciBpbmZpbml0ZTtcXG4gIH1cXG4gIC5naXRodWItYm94IHtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBoZWlnaHQ6IGF1dG87XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIGJhY2tncm91bmQ6ICNkNjMwMzE7XFxuICAgIG1hcmdpbi1yaWdodDogYXV0bztcXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDEwMHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuXFxuICAubG9hZGluZy1kYXRhIHtcXG4gICAgaGVpZ2h0OiA0MzBweDtcXG4gIH1cXG4gIC5oaW50X2dhbWUge1xcbiAgICBjb2xvcjogYmx1ZXZpb2xldDtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICAgIGZvbnQtc2l6ZTogbGFyZ2VyO1xcbiAgfVxcbiAgLmxpbmsge1xcbiAgICBwYWRkaW5nOiA1cHg7XFxuICAgIGNvbG9yOiAjZmZmO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IHVuZGVybGluZTtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICB9XFxuICAudGVybWluYWwge1xcbiAgICBiYWNrZ3JvdW5kOiAjMmQzNDM2O1xcbiAgICBoZWlnaHQ6IDE4MHB4O1xcbiAgICBsaW5lLWhlaWdodDogMS42O1xcbiAgICBwYWRkaW5nOiAxMHB4O1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tYm90dG9tOiA0MHB4O1xcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcXG4gICAgd2lkdGg6IDQ1MHB4O1xcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XFxuICB9XFxuICAudGVybWluYWwtbWVudSB7XFxuICAgIGhlaWdodDogMTBweDtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNjNDRhOTtcXG4gIH1cXG5cXG4gIEBrZXlmcmFtZXMgbW92ZSB7XFxuICAgIDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgfVxcbiAgICAyNSUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNTBweCk7XFxuICAgIH1cXG4gICAgNzUlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoMHB4KTtcXG4gICAgfVxcbiAgICAxMDAlIHtcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMHB4KTtcXG4gICAgfVxcbiAgfVxcbiAgLmZvb3RlciB7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgYm90dG9tOiAwO1xcbiAgICB3aWR0aDogMTAwJTtcXG4gICAgaGVpZ2h0OiA4MHB4O1xcbiAgICBjb2xvcjogd2hpdGU7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIH1cXG4gIC5mb290ZXIgPiBwID4gc3BhbiB7XFxuICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgY29sb3I6ICNmZmMzMTI7XFxuICB9XFxuICAuZm9vdGVyID4gcCA+IGEge1xcbiAgICBjb2xvcjogIzNjNDRhOTtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgfVxcbiAgQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0ODBweCkge1xcbiAgICAuZ2l0aHViLWJveCB7XFxuICAgICAgd2lkdGg6IDMyNXB4O1xcbiAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XFxuICAgIH1cXG4gICAgLmNhcmQge1xcbiAgICAgIHdpZHRoOiAzMjVweDtcXG4gICAgICBoZWlnaHQ6IDI1MHB4O1xcbiAgICB9XFxuICAgIC5yZWN0YW5nbGVfdGV4dCB7XFxuICAgICAgd2lkdGg6IDMyNXB4O1xcbiAgICB9XFxuICAgIC5mb290ZXIge1xcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXG4gICAgICB3aWR0aDogMTAwJTtcXG4gICAgICBoZWlnaHQ6IDgwcHg7XFxuICAgICAgY29sb3I6IHdoaXRlO1xcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgfVxcbiAgfVxcbn1cXG5cXG4uY3Vyc29yIHtcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXG4gIG1hcmdpbi1sZWZ0OiA1cHg7XFxuICB3aWR0aDogNXB4O1xcbiAgaGVpZ2h0OiAyMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgYW5pbWF0aW9uOiBibGluayAxcyBzdGVwLWVuZCBpbmZpbml0ZTtcXG59XFxuXFxuQGtleWZyYW1lcyBibGluayB7XFxuICBmcm9tLFxcbiAgdG8ge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXG4gIH1cXG4gIDUwJSB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IGN1cnJlbnRDb2xvcjtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWxzLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxlQUFlO0FBQ2Y7RUFDRSxzQkFBc0I7RUFDdEIsbUZBQW1GO0VBQ25GLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7QUFDQTs7RUFFRSxVQUFVO0VBQ1YsU0FBUztFQUNULGtDQUFrQztBQUNwQztBQUNBLFVBQVU7QUFDVjtFQUNFLFdBQVc7QUFDYjtBQUNBLFVBQVU7QUFDVjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBLFdBQVc7QUFDWDtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBLG9CQUFvQjtBQUNwQjtFQUNFLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsY0FBYztFQUNkLHFCQUFxQjtBQUN2QjtBQUNBO0VBQ0Usc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRTtJQUNFLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsY0FBYztJQUNkLG1CQUFtQjtJQUNuQixnQkFBZ0I7RUFDbEI7RUFDQTtJQUNFLFlBQVk7SUFDWixtQkFBbUI7SUFDbkIsaUNBQWlDO0VBQ25DO0VBQ0E7SUFDRSxhQUFhO0lBQ2IscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQixVQUFVO0lBQ1YsU0FBUztFQUNYO0VBQ0E7SUFDRSxnQkFBZ0I7SUFDaEIsa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixtQkFBbUI7RUFDckI7RUFDQTtJQUNFLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsYUFBYTtJQUNiLG1CQUFtQjtJQUNuQix5QkFBeUI7SUFDekIsaUJBQWlCO0lBQ2pCLFlBQVk7RUFDZDtFQUNBO0lBQ0UsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLFdBQVc7RUFDYjtFQUNBO0lBQ0Usa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQ0FBa0M7RUFDcEM7RUFDQTtJQUNFLFlBQVk7SUFDWixZQUFZO0lBQ1osYUFBYTtJQUNiLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLG9CQUFvQjtJQUNwQixrQkFBa0I7RUFDcEI7O0VBRUE7SUFDRSxhQUFhO0VBQ2Y7RUFDQTtJQUNFLGlCQUFpQjtJQUNqQixpQkFBaUI7SUFDakIsaUJBQWlCO0VBQ25CO0VBQ0E7SUFDRSxZQUFZO0lBQ1osV0FBVztJQUNYLDBCQUEwQjtJQUMxQixpQkFBaUI7RUFDbkI7RUFDQTtJQUNFLG1CQUFtQjtJQUNuQixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGFBQWE7SUFDYixpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsWUFBWTtJQUNaLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsWUFBWTtJQUNaLHlCQUF5QjtFQUMzQjs7RUFFQTtJQUNFO01BQ0UsMEJBQTBCO0lBQzVCO0lBQ0E7TUFDRSw0QkFBNEI7SUFDOUI7SUFDQTtNQUNFLDBCQUEwQjtJQUM1QjtJQUNBO01BQ0UsMEJBQTBCO0lBQzVCO0VBQ0Y7RUFDQTtJQUNFLGVBQWU7SUFDZixTQUFTO0lBQ1QsV0FBVztJQUNYLFlBQVk7SUFDWixZQUFZO0lBQ1osa0JBQWtCO0VBQ3BCO0VBQ0E7SUFDRSxlQUFlO0lBQ2YsY0FBYztFQUNoQjtFQUNBO0lBQ0UsY0FBYztJQUNkLGVBQWU7RUFDakI7RUFDQTtJQUNFO01BQ0UsWUFBWTtNQUNaLG1CQUFtQjtJQUNyQjtJQUNBO01BQ0UsWUFBWTtNQUNaLGFBQWE7SUFDZjtJQUNBO01BQ0UsWUFBWTtJQUNkO0lBQ0E7TUFDRSxrQkFBa0I7TUFDbEIsV0FBVztNQUNYLFlBQVk7TUFDWixZQUFZO01BQ1osa0JBQWtCO0lBQ3BCO0VBQ0Y7QUFDRjs7QUFFQTtFQUNFLHFCQUFxQjtFQUNyQixnQkFBZ0I7RUFDaEIsVUFBVTtFQUNWLFlBQVk7RUFDWiw4QkFBOEI7RUFDOUIscUNBQXFDO0FBQ3ZDOztBQUVBO0VBQ0U7O0lBRUUsNkJBQTZCO0VBQy9CO0VBQ0E7SUFDRSw4QkFBOEI7RUFDaEM7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBkZWZpbml0aW9uICovXFxuQGZvbnQtZmFjZSB7XFxuICBmb250LWZhbWlseTogTWluZWNyYWZ0O1xcbiAgc3JjOiB1cmwoJ2h0dHBzOi8vYXppemdoYXJiaS5naXRodWIuaW8vZm9udHMvbWluZWNyYWZ0LWZvbnRzL01pbmVjcmFmdFJlZ3VsYXIub3RmJyk7XFxuICBmb250LXdlaWdodDogQm9sZDtcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxuaHRtbCxcXG5ib2R5IHtcXG4gIHBhZGRpbmc6IDA7XFxuICBtYXJnaW46IDA7XFxuICBmb250LWZhbWlseTogTWluZWNyYWZ0LCBzYW5zLXNlcmlmO1xcbn1cXG4vKiB3aWR0aCAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcbiAgd2lkdGg6IDEwcHg7XFxufVxcbi8qIFRyYWNrICovXFxuOjotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XFxuICBiYWNrZ3JvdW5kOiAjZjFmMWYxO1xcbn1cXG4vKiBIYW5kbGUgKi9cXG46Oi13ZWJraXQtc2Nyb2xsYmFyLXRodW1iIHtcXG4gIGJhY2tncm91bmQ6ICNkNjMwMzE7XFxufVxcbi8qIEhhbmRsZSBvbiBob3ZlciAqL1xcbjo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWI6aG92ZXIge1xcbiAgYmFja2dyb3VuZDogI2Q2MzAzMTtcXG59XFxuYSB7XFxuICBjb2xvcjogaW5oZXJpdDtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG59XFxuKiB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG5AbWVkaWEgKHByZWZlcnMtY29sb3Itc2NoZW1lOiBkYXJrKSB7XFxuICBodG1sIHtcXG4gICAgY29sb3Itc2NoZW1lOiBkYXJrO1xcbiAgfVxcbiAgYm9keSB7XFxuICAgIGNvbG9yOiAjZjlmZmZmO1xcbiAgICBiYWNrZ3JvdW5kOiAjNjM2ZTcyO1xcbiAgICBtaW4td2lkdGg6IDM3NXB4O1xcbiAgfVxcbiAgLmdyb3VuZF8xIHtcXG4gICAgaGVpZ2h0OiA1MHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZDYzMDMxO1xcbiAgICBib3JkZXItYm90dG9tOiAxMHB4IHNvbGlkICNlNzRjM2M7XFxuICB9XFxuICAuZ3JvdW5kX21lbnUge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3ctcmV2ZXJzZTtcXG4gICAgcGFkZGluZzogMDtcXG4gICAgbWFyZ2luOiAwO1xcbiAgfVxcbiAgLmdyb3VuZF9tZW51ID4gbGkge1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBtYXJnaW4tcmlnaHQ6IDEwcHg7XFxuICB9XFxuICAuZ2FtZV90ZXh0IHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICAgIG1hcmdpbi10b3A6IDc1cHg7XFxuICAgIG1hcmdpbi1ib3R0b206IDc1cHg7XFxuICB9XFxuICAucmVjdGFuZ2xlX3RleHQge1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIG1hcmdpbi10b3A6IDEyMHB4O1xcbiAgICBwYWRkaW5nOiAyMHB4O1xcbiAgICBiYWNrZ3JvdW5kOiAjZDYzMDMxO1xcbiAgICBib3JkZXI6ICM4MGM3MWYgOXB4IHNvbGlkO1xcbiAgICB6LWluZGV4OiA5OTk5OTk5OTtcXG4gICAgd2lkdGg6IDYwMHB4O1xcbiAgfVxcbiAgLnJlY3RhbmdsZV9oZWFkIHtcXG4gICAgbWFyZ2luLXRvcDogNXB4O1xcbiAgICBtYXJnaW4tbGVmdDogMTBweDtcXG4gICAgYmFja2dyb3VuZDogI2Q2MzAzMTtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICB3aWR0aDogNzVweDtcXG4gIH1cXG4gIC5yZWN0YW5nbGVfaW1nIHtcXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xcbiAgICBhbmltYXRpb246IG1vdmUgMnMgbGluZWFyIGluZmluaXRlO1xcbiAgfVxcbiAgLmdpdGh1Yi1ib3gge1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGhlaWdodDogYXV0bztcXG4gICAgcGFkZGluZzogMTBweDtcXG4gICAgYmFja2dyb3VuZDogI2Q2MzAzMTtcXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcXG4gICAgbWFyZ2luLWJvdHRvbTogMTAwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG5cXG4gIC5sb2FkaW5nLWRhdGEge1xcbiAgICBoZWlnaHQ6IDQzMHB4O1xcbiAgfVxcbiAgLmhpbnRfZ2FtZSB7XFxuICAgIGNvbG9yOiBibHVldmlvbGV0O1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gICAgZm9udC1zaXplOiBsYXJnZXI7XFxuICB9XFxuICAubGluayB7XFxuICAgIHBhZGRpbmc6IDVweDtcXG4gICAgY29sb3I6ICNmZmY7XFxuICAgIHRleHQtZGVjb3JhdGlvbjogdW5kZXJsaW5lO1xcbiAgICBmb250LXdlaWdodDogYm9sZDtcXG4gIH1cXG4gIC50ZXJtaW5hbCB7XFxuICAgIGJhY2tncm91bmQ6ICMyZDM0MzY7XFxuICAgIGhlaWdodDogMTgwcHg7XFxuICAgIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICAgIHBhZGRpbmc6IDEwcHg7XFxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XFxuICAgIG1hcmdpbi1ib3R0b206IDQwcHg7XFxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xcbiAgICB3aWR0aDogNDUwcHg7XFxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcXG4gIH1cXG4gIC50ZXJtaW5hbC1tZW51IHtcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjM2M0NGE5O1xcbiAgfVxcblxcbiAgQGtleWZyYW1lcyBtb3ZlIHtcXG4gICAgMCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICB9XFxuICAgIDI1JSB7XFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDE1MHB4KTtcXG4gICAgfVxcbiAgICA3NSUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpO1xcbiAgICB9XFxuICAgIDEwMCUge1xcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWSgwcHgpO1xcbiAgICB9XFxuICB9XFxuICAuZm9vdGVyIHtcXG4gICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICBib3R0b206IDA7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBoZWlnaHQ6IDgwcHg7XFxuICAgIGNvbG9yOiB3aGl0ZTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgfVxcbiAgLmZvb3RlciA+IHAgPiBzcGFuIHtcXG4gICAgZm9udC1zaXplOiAxOHB4O1xcbiAgICBjb2xvcjogI2ZmYzMxMjtcXG4gIH1cXG4gIC5mb290ZXIgPiBwID4gYSB7XFxuICAgIGNvbG9yOiAjM2M0NGE5O1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICB9XFxuICBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDQ4MHB4KSB7XFxuICAgIC5naXRodWItYm94IHtcXG4gICAgICB3aWR0aDogMzI1cHg7XFxuICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcXG4gICAgfVxcbiAgICAuY2FyZCB7XFxuICAgICAgd2lkdGg6IDMyNXB4O1xcbiAgICAgIGhlaWdodDogMjUwcHg7XFxuICAgIH1cXG4gICAgLnJlY3RhbmdsZV90ZXh0IHtcXG4gICAgICB3aWR0aDogMzI1cHg7XFxuICAgIH1cXG4gICAgLmZvb3RlciB7XFxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xcbiAgICAgIHdpZHRoOiAxMDAlO1xcbiAgICAgIGhlaWdodDogODBweDtcXG4gICAgICBjb2xvcjogd2hpdGU7XFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbiAgICB9XFxuICB9XFxufVxcblxcbi5jdXJzb3Ige1xcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcbiAgbWFyZ2luLWxlZnQ6IDVweDtcXG4gIHdpZHRoOiA1cHg7XFxuICBoZWlnaHQ6IDIwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBjdXJyZW50Q29sb3I7XFxuICBhbmltYXRpb246IGJsaW5rIDFzIHN0ZXAtZW5kIGluZmluaXRlO1xcbn1cXG5cXG5Aa2V5ZnJhbWVzIGJsaW5rIHtcXG4gIGZyb20sXFxuICB0byB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcbiAgfVxcbiAgNTAlIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3VycmVudENvbG9yO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[2].oneOf[8].use[2]!./styles/globals.css\n"));

/***/ })

});