"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/anadir";
exports.ids = ["pages/api/anadir"];
exports.modules = {

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("@prisma/client");

/***/ }),

/***/ "(api)/./lib/prisma.ts":
/*!***********************!*\
  !*** ./lib/prisma.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"prisma\": () => (/* binding */ prisma)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nconst prisma = global.prisma || new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\nif (true) global.prisma = prisma;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9saWIvcHJpc21hLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQU12QyxNQUFNQyxNQUFNLEdBQUdDLE1BQU0sQ0FBQ0QsTUFBTSxJQUFJLElBQUlELHdEQUFZLEVBQUUsQ0FBQztBQUUxRCxJQUFJRyxJQUFxQyxFQUFFRCxNQUFNLENBQUNELE1BQU0sR0FBR0EsTUFBTSxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdF9wcm9qZWN0Ly4vbGliL3ByaXNtYS50cz85ODIyIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gXCJAcHJpc21hL2NsaWVudFwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG4gICAgdmFyIHByaXNtYTogUHJpc21hQ2xpZW50IHwgdW5kZWZpbmVkO1xufVxuXG5leHBvcnQgY29uc3QgcHJpc21hID0gZ2xvYmFsLnByaXNtYSB8fCBuZXcgUHJpc21hQ2xpZW50KCk7XG5cbmlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XG4iXSwibmFtZXMiOlsiUHJpc21hQ2xpZW50IiwicHJpc21hIiwiZ2xvYmFsIiwicHJvY2VzcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(api)/./lib/prisma.ts\n");

/***/ }),

/***/ "(api)/./pages/api/anadir.ts":
/*!*****************************!*\
  !*** ./pages/api/anadir.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ handler)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/prisma */ \"(api)/./lib/prisma.ts\");\n\nasync function handler(req, res) {\n    const { brand , title , category , content  } = req.body;\n    try {\n        await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__.prisma.carsModels.create({\n            data: {\n                carBrand: brand,\n                carName: title,\n                carModel: category,\n                carDescription: content\n            }\n        });\n        res.status(200).json({\n            message: \"Carro a\\xf1adido con exito!\"\n        });\n    } catch (error) {\n        console.log(\"Fail :(\");\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYW5hZGlyLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTBDO0FBRzNCLGVBQWVDLE9BQU8sQ0FBQ0MsR0FBbUIsRUFBRUMsR0FBb0IsRUFBRTtJQUM3RSxNQUFNLEVBQUVDLEtBQUssR0FBRUMsS0FBSyxHQUFFQyxRQUFRLEdBQUVDLE9BQU8sR0FBRSxHQUFHTCxHQUFHLENBQUNNLElBQUk7SUFFcEQsSUFBSTtRQUNBLE1BQU1SLGlFQUF3QixDQUFDO1lBQzNCVyxJQUFJLEVBQUU7Z0JBQ0ZDLFFBQVEsRUFBRVIsS0FBSztnQkFDZlMsT0FBTyxFQUFFUixLQUFLO2dCQUNkUyxRQUFRLEVBQUVSLFFBQVE7Z0JBQ2xCUyxjQUFjLEVBQUVSLE9BQU87YUFDMUI7U0FDSixDQUFDLENBQUM7UUFDSEosR0FBRyxDQUFDYSxNQUFNLENBQUMsR0FBRyxDQUFDLENBQUNDLElBQUksQ0FBQztZQUFFQyxPQUFPLEVBQUUsNkJBQTBCO1NBQUUsQ0FBQyxDQUFDO0tBQ2pFLENBQUMsT0FBT0MsS0FBSyxFQUFFO1FBQ1pDLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0tBQzFCO0NBQ0oiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly90ZXN0X3Byb2plY3QvLi9wYWdlcy9hcGkvYW5hZGlyLnRzPzE2YmEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcHJpc21hIH0gZnJvbSBcIi4uLy4uL2xpYi9wcmlzbWFcIjtcbmltcG9ydCB7IE5leHRBcGlSZXF1ZXN0LCBOZXh0QXBpUmVzcG9uc2UgfSBmcm9tIFwibmV4dFwiO1xuXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBoYW5kbGVyKHJlcTogTmV4dEFwaVJlcXVlc3QsIHJlczogTmV4dEFwaVJlc3BvbnNlKSB7XG4gICAgY29uc3QgeyBicmFuZCwgdGl0bGUsIGNhdGVnb3J5LCBjb250ZW50IH0gPSByZXEuYm9keTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IHByaXNtYS5jYXJzTW9kZWxzLmNyZWF0ZSh7XG4gICAgICAgICAgICBkYXRhOiB7XG4gICAgICAgICAgICAgICAgY2FyQnJhbmQ6IGJyYW5kLFxuICAgICAgICAgICAgICAgIGNhck5hbWU6IHRpdGxlLFxuICAgICAgICAgICAgICAgIGNhck1vZGVsOiBjYXRlZ29yeSxcbiAgICAgICAgICAgICAgICBjYXJEZXNjcmlwdGlvbjogY29udGVudCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pO1xuICAgICAgICByZXMuc3RhdHVzKDIwMCkuanNvbih7IG1lc3NhZ2U6IFwiQ2Fycm8gYcOxYWRpZG8gY29uIGV4aXRvIVwiIH0pO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiRmFpbCA6KFwiKTtcbiAgICB9XG59XG4iXSwibmFtZXMiOlsicHJpc21hIiwiaGFuZGxlciIsInJlcSIsInJlcyIsImJyYW5kIiwidGl0bGUiLCJjYXRlZ29yeSIsImNvbnRlbnQiLCJib2R5IiwiY2Fyc01vZGVscyIsImNyZWF0ZSIsImRhdGEiLCJjYXJCcmFuZCIsImNhck5hbWUiLCJjYXJNb2RlbCIsImNhckRlc2NyaXB0aW9uIiwic3RhdHVzIiwianNvbiIsIm1lc3NhZ2UiLCJlcnJvciIsImNvbnNvbGUiLCJsb2ciXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/anadir.ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/anadir.ts"));
module.exports = __webpack_exports__;

})();