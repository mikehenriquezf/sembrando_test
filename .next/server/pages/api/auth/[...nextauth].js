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
exports.id = "pages/api/auth/[...nextauth]";
exports.ids = ["pages/api/auth/[...nextauth]"];
exports.modules = {

/***/ "next-auth/next":
/*!*********************************!*\
  !*** external "next-auth/next" ***!
  \*********************************/
/***/ ((module) => {

module.exports = require("next-auth/next");

/***/ }),

/***/ "next-auth/providers/credentials":
/*!**************************************************!*\
  !*** external "next-auth/providers/credentials" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next-auth/providers/credentials");

/***/ }),

/***/ "(api)/./pages/api/auth/[...nextauth].ts":
/*!*****************************************!*\
  !*** ./pages/api/auth/[...nextauth].ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next-auth/next */ \"next-auth/next\");\n/* harmony import */ var next_auth_next__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_auth_next__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/providers/credentials */ \"next-auth/providers/credentials\");\n/* harmony import */ var next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1__);\n\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (next_auth_next__WEBPACK_IMPORTED_MODULE_0___default()({\n    providers: [\n        next_auth_providers_credentials__WEBPACK_IMPORTED_MODULE_1___default()({\n            name: \"credentials\",\n            credentials: {\n                username: {\n                    label: \"Email\",\n                    type: \"text\",\n                    placeholder: \"johndoe@contratosenley.org\"\n                },\n                password: {\n                    label: \"Password\",\n                    type: \"password\"\n                }\n            },\n            authorize: (credentials)=>{\n                // DB Loockup Mock\n                if ((credentials === null || credentials === void 0 ? void 0 : credentials.username) === \"admin\" && credentials.password === \"test\") {\n                    return {\n                        id: 1,\n                        name: \"Admin\",\n                        email: \"admin@contratosenley.org\"\n                    };\n                }\n                // login fail\n                return null;\n            }\n        }), \n    ],\n    callbacks: {\n        async redirect (url, baseUrl) {\n            return \"http://localhost:3000/additem/\";\n        },\n        // JSON Web Token\n        jwt: async ({ token , user  })=>{\n            if (user) {\n                token.id = user.id;\n            }\n            return token;\n        },\n        // Session\n        session: async ({ session , token  })=>{\n            if (token) {\n                session.id = token.id;\n            }\n            return session;\n        }\n    },\n    secret: \"test\",\n    jwt: {\n        secret: \"test\",\n        encryption: true\n    }\n}));\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvYXV0aC9bLi4ubmV4dGF1dGhdLnRzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQXNDO0FBQzJCO0FBR2pFLGlFQUFlQSxxREFBUSxDQUFDO0lBQ3BCRSxTQUFTLEVBQUU7UUFDUEQsc0VBQWtCLENBQUM7WUFDZkUsSUFBSSxFQUFFLGFBQWE7WUFDbkJDLFdBQVcsRUFBRTtnQkFDVEMsUUFBUSxFQUFFO29CQUFFQyxLQUFLLEVBQUUsT0FBTztvQkFBRUMsSUFBSSxFQUFFLE1BQU07b0JBQUVDLFdBQVcsRUFBRSw0QkFBNEI7aUJBQUU7Z0JBQ3JGQyxRQUFRLEVBQUU7b0JBQUVILEtBQUssRUFBRSxVQUFVO29CQUFFQyxJQUFJLEVBQUUsVUFBVTtpQkFBRTthQUNwRDtZQUNERyxTQUFTLEVBQUUsQ0FBQ04sV0FBVyxHQUFLO2dCQUN4QixrQkFBa0I7Z0JBQ2xCLElBQUlBLENBQUFBLFdBQVcsYUFBWEEsV0FBVyxXQUFVLEdBQXJCQSxLQUFBQSxDQUFxQixHQUFyQkEsV0FBVyxDQUFFQyxRQUFRLE1BQUssT0FBTyxJQUFJRCxXQUFXLENBQUNLLFFBQVEsS0FBSyxNQUFNLEVBQUU7b0JBQ3RFLE9BQU87d0JBQ0hFLEVBQUUsRUFBRSxDQUFDO3dCQUNMUixJQUFJLEVBQUUsT0FBTzt3QkFDYlMsS0FBSyxFQUFFLDBCQUEwQjtxQkFDcEMsQ0FBQztpQkFDTDtnQkFDRCxhQUFhO2dCQUNiLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7U0FDSixDQUFDO0tBQ0w7SUFDREMsU0FBUyxFQUFFO1FBQ1AsTUFBTUMsUUFBUSxFQUFDQyxHQUFHLEVBQUVDLE9BQU8sRUFBRTtZQUN6QixPQUFPLGdDQUFnQyxDQUFDO1NBQzNDO1FBRUQsaUJBQWlCO1FBQ2pCQyxHQUFHLEVBQUUsT0FBTyxFQUFFQyxLQUFLLEdBQUVDLElBQUksR0FBRSxHQUFLO1lBQzVCLElBQUlBLElBQUksRUFBRTtnQkFDTkQsS0FBSyxDQUFDUCxFQUFFLEdBQUdRLElBQUksQ0FBQ1IsRUFBRSxDQUFDO2FBQ3RCO1lBQ0QsT0FBT08sS0FBSyxDQUFDO1NBQ2hCO1FBQ0QsVUFBVTtRQUNWRSxPQUFPLEVBQUUsT0FBTyxFQUFFQSxPQUFPLEdBQUVGLEtBQUssR0FBRSxHQUFLO1lBQ25DLElBQUlBLEtBQUssRUFBRTtnQkFDUEUsT0FBTyxDQUFDVCxFQUFFLEdBQUdPLEtBQUssQ0FBQ1AsRUFBRSxDQUFDO2FBQ3pCO1lBQ0QsT0FBT1MsT0FBTyxDQUFDO1NBQ2xCO0tBQ0o7SUFDREMsTUFBTSxFQUFFLE1BQU07SUFDZEosR0FBRyxFQUFFO1FBQ0RJLE1BQU0sRUFBRSxNQUFNO1FBQ2RDLFVBQVUsRUFBRSxJQUFJO0tBQ25CO0NBQ0osQ0FBQyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdGVzdF9wcm9qZWN0Ly4vcGFnZXMvYXBpL2F1dGgvWy4uLm5leHRhdXRoXS50cz8yZThiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBOZXh0QXV0aCBmcm9tIFwibmV4dC1hdXRoL25leHRcIjtcbmltcG9ydCBDcmVkZW50aWFsUHJvdmlkZXIgZnJvbSBcIm5leHQtYXV0aC9wcm92aWRlcnMvY3JlZGVudGlhbHNcIjtcbmltcG9ydCB7IHJlZGlyZWN0IH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvYXBpLXV0aWxzXCI7XG5cbmV4cG9ydCBkZWZhdWx0IE5leHRBdXRoKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQ3JlZGVudGlhbFByb3ZpZGVyKHtcbiAgICAgICAgICAgIG5hbWU6IFwiY3JlZGVudGlhbHNcIixcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiB7XG4gICAgICAgICAgICAgICAgdXNlcm5hbWU6IHsgbGFiZWw6IFwiRW1haWxcIiwgdHlwZTogXCJ0ZXh0XCIsIHBsYWNlaG9sZGVyOiBcImpvaG5kb2VAY29udHJhdG9zZW5sZXkub3JnXCIgfSxcbiAgICAgICAgICAgICAgICBwYXNzd29yZDogeyBsYWJlbDogXCJQYXNzd29yZFwiLCB0eXBlOiBcInBhc3N3b3JkXCIgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBhdXRob3JpemU6IChjcmVkZW50aWFscykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIERCIExvb2NrdXAgTW9ja1xuICAgICAgICAgICAgICAgIGlmIChjcmVkZW50aWFscz8udXNlcm5hbWUgPT09IFwiYWRtaW5cIiAmJiBjcmVkZW50aWFscy5wYXNzd29yZCA9PT0gXCJ0ZXN0XCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogXCJBZG1pblwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgZW1haWw6IFwiYWRtaW5AY29udHJhdG9zZW5sZXkub3JnXCIsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxvZ2luIGZhaWxcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0pLFxuICAgIF0sXG4gICAgY2FsbGJhY2tzOiB7XG4gICAgICAgIGFzeW5jIHJlZGlyZWN0KHVybCwgYmFzZVVybCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiaHR0cDovL2xvY2FsaG9zdDozMDAwL2FkZGl0ZW0vXCI7XG4gICAgICAgIH0sXG5cbiAgICAgICAgLy8gSlNPTiBXZWIgVG9rZW5cbiAgICAgICAgand0OiBhc3luYyAoeyB0b2tlbiwgdXNlciB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodXNlcikge1xuICAgICAgICAgICAgICAgIHRva2VuLmlkID0gdXNlci5pZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0b2tlbjtcbiAgICAgICAgfSxcbiAgICAgICAgLy8gU2Vzc2lvblxuICAgICAgICBzZXNzaW9uOiBhc3luYyAoeyBzZXNzaW9uLCB0b2tlbiB9KSA9PiB7XG4gICAgICAgICAgICBpZiAodG9rZW4pIHtcbiAgICAgICAgICAgICAgICBzZXNzaW9uLmlkID0gdG9rZW4uaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gc2Vzc2lvbjtcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHNlY3JldDogXCJ0ZXN0XCIsXG4gICAgand0OiB7XG4gICAgICAgIHNlY3JldDogXCJ0ZXN0XCIsXG4gICAgICAgIGVuY3J5cHRpb246IHRydWUsXG4gICAgfSxcbn0pO1xuIl0sIm5hbWVzIjpbIk5leHRBdXRoIiwiQ3JlZGVudGlhbFByb3ZpZGVyIiwicHJvdmlkZXJzIiwibmFtZSIsImNyZWRlbnRpYWxzIiwidXNlcm5hbWUiLCJsYWJlbCIsInR5cGUiLCJwbGFjZWhvbGRlciIsInBhc3N3b3JkIiwiYXV0aG9yaXplIiwiaWQiLCJlbWFpbCIsImNhbGxiYWNrcyIsInJlZGlyZWN0IiwidXJsIiwiYmFzZVVybCIsImp3dCIsInRva2VuIiwidXNlciIsInNlc3Npb24iLCJzZWNyZXQiLCJlbmNyeXB0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(api)/./pages/api/auth/[...nextauth].ts\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/auth/[...nextauth].ts"));
module.exports = __webpack_exports__;

})();