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
exports.id = "app/api/quizzes/route";
exports.ids = ["app/api/quizzes/route"];
exports.modules = {

/***/ "(rsc)/./app/api/quizzes/route.js":
/*!**********************************!*\
  !*** ./app/api/quizzes/route.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.js\");\n/* harmony import */ var next_server__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/server */ \"(rsc)/./node_modules/next/dist/api/server.js\");\n\n\nasync function GET() {\n    const quizzes = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].quiz.findMany({\n        include: {\n            questions: true\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(quizzes);\n}\nasync function POST(req) {\n    const body = await req.json();\n    const quiz = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].quiz.create({\n        data: {\n            title: body.title,\n            questions: {\n                create: body.questions.map((q)=>({\n                        question: q.question,\n                        options: JSON.stringify(q.options),\n                        answer: q.answer\n                    }))\n            }\n        },\n        include: {\n            questions: true\n        }\n    });\n    return next_server__WEBPACK_IMPORTED_MODULE_1__.NextResponse.json(quiz);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL3F1aXp6ZXMvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFpQztBQUNTO0FBRW5DLGVBQWVFO0lBQ3BCLE1BQU1DLFVBQVUsTUFBTUgsbURBQU1BLENBQUNJLElBQUksQ0FBQ0MsUUFBUSxDQUFDO1FBQ3pDQyxTQUFTO1lBQUVDLFdBQVc7UUFBSztJQUM3QjtJQUNBLE9BQU9OLHFEQUFZQSxDQUFDTyxJQUFJLENBQUNMO0FBQzNCO0FBRU8sZUFBZU0sS0FBS0MsR0FBRztJQUM1QixNQUFNQyxPQUFPLE1BQU1ELElBQUlGLElBQUk7SUFFM0IsTUFBTUosT0FBTyxNQUFNSixtREFBTUEsQ0FBQ0ksSUFBSSxDQUFDUSxNQUFNLENBQUM7UUFDcENDLE1BQU07WUFDSkMsT0FBT0gsS0FBS0csS0FBSztZQUNqQlAsV0FBVztnQkFDVEssUUFBUUQsS0FBS0osU0FBUyxDQUFDUSxHQUFHLENBQUNDLENBQUFBLElBQU07d0JBQy9CQyxVQUFVRCxFQUFFQyxRQUFRO3dCQUNwQkMsU0FBU0MsS0FBS0MsU0FBUyxDQUFDSixFQUFFRSxPQUFPO3dCQUNqQ0csUUFBUUwsRUFBRUssTUFBTTtvQkFDbEI7WUFDRjtRQUNGO1FBQ0FmLFNBQVM7WUFBRUMsV0FBVztRQUFLO0lBQzdCO0lBRUEsT0FBT04scURBQVlBLENBQUNPLElBQUksQ0FBQ0o7QUFDM0IiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRG93bmxvYWRzXFxteS1hcHAtMjAyNTA3MDlUMTkyMTAyWi0xLTAwMVxcbXktYXBwXFxhcHBcXGFwaVxccXVpenplc1xccm91dGUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHByaXNtYSBmcm9tICdAL2xpYi9wcmlzbWEnXHJcbmltcG9ydCB7IE5leHRSZXNwb25zZSB9IGZyb20gJ25leHQvc2VydmVyJ1xyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIEdFVCgpIHtcclxuICBjb25zdCBxdWl6emVzID0gYXdhaXQgcHJpc21hLnF1aXouZmluZE1hbnkoe1xyXG4gICAgaW5jbHVkZTogeyBxdWVzdGlvbnM6IHRydWUgfVxyXG4gIH0pXHJcbiAgcmV0dXJuIE5leHRSZXNwb25zZS5qc29uKHF1aXp6ZXMpXHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpXHJcblxyXG4gIGNvbnN0IHF1aXogPSBhd2FpdCBwcmlzbWEucXVpei5jcmVhdGUoe1xyXG4gICAgZGF0YToge1xyXG4gICAgICB0aXRsZTogYm9keS50aXRsZSxcclxuICAgICAgcXVlc3Rpb25zOiB7XHJcbiAgICAgICAgY3JlYXRlOiBib2R5LnF1ZXN0aW9ucy5tYXAocSA9PiAoe1xyXG4gICAgICAgICAgcXVlc3Rpb246IHEucXVlc3Rpb24sXHJcbiAgICAgICAgICBvcHRpb25zOiBKU09OLnN0cmluZ2lmeShxLm9wdGlvbnMpLCAvLyBzdHJpbmdpZnkgYXJyYXlcclxuICAgICAgICAgIGFuc3dlcjogcS5hbnN3ZXJcclxuICAgICAgICB9KSlcclxuICAgICAgfVxyXG4gICAgfSxcclxuICAgIGluY2x1ZGU6IHsgcXVlc3Rpb25zOiB0cnVlIH1cclxuICB9KVxyXG5cclxuICByZXR1cm4gTmV4dFJlc3BvbnNlLmpzb24ocXVpeilcclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiTmV4dFJlc3BvbnNlIiwiR0VUIiwicXVpenplcyIsInF1aXoiLCJmaW5kTWFueSIsImluY2x1ZGUiLCJxdWVzdGlvbnMiLCJqc29uIiwiUE9TVCIsInJlcSIsImJvZHkiLCJjcmVhdGUiLCJkYXRhIiwidGl0bGUiLCJtYXAiLCJxIiwicXVlc3Rpb24iLCJvcHRpb25zIiwiSlNPTiIsInN0cmluZ2lmeSIsImFuc3dlciJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/quizzes/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (!global.prisma) {\n    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    if (true) global.prisma = prisma;\n} else {\n    prisma = global.prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE2QztBQUU3QyxJQUFJQztBQUNKLElBQUksQ0FBQ0MsT0FBT0QsTUFBTSxFQUFFO0lBQ2xCQSxTQUFTLElBQUlELHdEQUFZQTtJQUN6QixJQUFJRyxJQUFxQyxFQUFFRCxPQUFPRCxNQUFNLEdBQUdBO0FBQzdELE9BQU87SUFDTEEsU0FBU0MsT0FBT0QsTUFBTTtBQUN4QjtBQUVBLGlFQUFlQSxNQUFNQSxFQUFBIiwic291cmNlcyI6WyJDOlxcVXNlcnNcXFVzZXJcXERvd25sb2Fkc1xcbXktYXBwLTIwMjUwNzA5VDE5MjEwMlotMS0wMDFcXG15LWFwcFxcbGliXFxwcmlzbWEuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgUHJpc21hQ2xpZW50IH0gZnJvbSAnQHByaXNtYS9jbGllbnQnXHJcblxyXG5sZXQgcHJpc21hXHJcbmlmICghZ2xvYmFsLnByaXNtYSkge1xyXG4gIHByaXNtYSA9IG5ldyBQcmlzbWFDbGllbnQoKVxyXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSBnbG9iYWwucHJpc21hID0gcHJpc21hXHJcbn0gZWxzZSB7XHJcbiAgcHJpc21hID0gZ2xvYmFsLnByaXNtYVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBwcmlzbWFcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCIsInByb2Nlc3MiXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fquizzes%2Froute&page=%2Fapi%2Fquizzes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquizzes%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Cmy-app-20250709T192102Z-1-001%5Cmy-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Cmy-app-20250709T192102Z-1-001%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fquizzes%2Froute&page=%2Fapi%2Fquizzes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquizzes%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Cmy-app-20250709T192102Z-1-001%5Cmy-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Cmy-app-20250709T192102Z-1-001%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_User_Downloads_my_app_20250709T192102Z_1_001_my_app_app_api_quizzes_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/quizzes/route.js */ \"(rsc)/./app/api/quizzes/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/quizzes/route\",\n        pathname: \"/api/quizzes\",\n        filename: \"route\",\n        bundlePath: \"app/api/quizzes/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\User\\\\Downloads\\\\my-app-20250709T192102Z-1-001\\\\my-app\\\\app\\\\api\\\\quizzes\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_User_Downloads_my_app_20250709T192102Z_1_001_my_app_app_api_quizzes_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZxdWl6emVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZxdWl6emVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGcXVpenplcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNVc2VyJTVDRG93bmxvYWRzJTVDbXktYXBwLTIwMjUwNzA5VDE5MjEwMlotMS0wMDElNUNteS1hcHAlNUNhcHAmcGFnZUV4dGVuc2lvbnM9dHN4JnBhZ2VFeHRlbnNpb25zPXRzJnBhZ2VFeHRlbnNpb25zPWpzeCZwYWdlRXh0ZW5zaW9ucz1qcyZyb290RGlyPUMlM0ElNUNVc2VycyU1Q1VzZXIlNUNEb3dubG9hZHMlNUNteS1hcHAtMjAyNTA3MDlUMTkyMTAyWi0xLTAwMSU1Q215LWFwcCZpc0Rldj10cnVlJnRzY29uZmlnUGF0aD10c2NvbmZpZy5qc29uJmJhc2VQYXRoPSZhc3NldFByZWZpeD0mbmV4dENvbmZpZ091dHB1dD0mcHJlZmVycmVkUmVnaW9uPSZtaWRkbGV3YXJlQ29uZmlnPWUzMCUzRCEiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBK0Y7QUFDdkM7QUFDcUI7QUFDOEM7QUFDM0g7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHlHQUFtQjtBQUMzQztBQUNBLGNBQWMsa0VBQVM7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLFlBQVk7QUFDWixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EsUUFBUSxzREFBc0Q7QUFDOUQ7QUFDQSxXQUFXLDRFQUFXO0FBQ3RCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDMEY7O0FBRTFGIiwic291cmNlcyI6WyIiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQXBwUm91dGVSb3V0ZU1vZHVsZSB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLW1vZHVsZXMvYXBwLXJvdXRlL21vZHVsZS5jb21waWxlZFwiO1xuaW1wb3J0IHsgUm91dGVLaW5kIH0gZnJvbSBcIm5leHQvZGlzdC9zZXJ2ZXIvcm91dGUta2luZFwiO1xuaW1wb3J0IHsgcGF0Y2hGZXRjaCBhcyBfcGF0Y2hGZXRjaCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL2xpYi9wYXRjaC1mZXRjaFwiO1xuaW1wb3J0ICogYXMgdXNlcmxhbmQgZnJvbSBcIkM6XFxcXFVzZXJzXFxcXFVzZXJcXFxcRG93bmxvYWRzXFxcXG15LWFwcC0yMDI1MDcwOVQxOTIxMDJaLTEtMDAxXFxcXG15LWFwcFxcXFxhcHBcXFxcYXBpXFxcXHF1aXp6ZXNcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL3F1aXp6ZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9xdWl6emVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9xdWl6emVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEb3dubG9hZHNcXFxcbXktYXBwLTIwMjUwNzA5VDE5MjEwMlotMS0wMDFcXFxcbXktYXBwXFxcXGFwcFxcXFxhcGlcXFxccXVpenplc1xcXFxyb3V0ZS5qc1wiLFxuICAgIG5leHRDb25maWdPdXRwdXQsXG4gICAgdXNlcmxhbmRcbn0pO1xuLy8gUHVsbCBvdXQgdGhlIGV4cG9ydHMgdGhhdCB3ZSBuZWVkIHRvIGV4cG9zZSBmcm9tIHRoZSBtb2R1bGUuIFRoaXMgc2hvdWxkXG4vLyBiZSBlbGltaW5hdGVkIHdoZW4gd2UndmUgbW92ZWQgdGhlIG90aGVyIHJvdXRlcyB0byB0aGUgbmV3IGZvcm1hdC4gVGhlc2Vcbi8vIGFyZSB1c2VkIHRvIGhvb2sgaW50byB0aGUgcm91dGUuXG5jb25zdCB7IHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcyB9ID0gcm91dGVNb2R1bGU7XG5mdW5jdGlvbiBwYXRjaEZldGNoKCkge1xuICAgIHJldHVybiBfcGF0Y2hGZXRjaCh7XG4gICAgICAgIHdvcmtBc3luY1N0b3JhZ2UsXG4gICAgICAgIHdvcmtVbml0QXN5bmNTdG9yYWdlXG4gICAgfSk7XG59XG5leHBvcnQgeyByb3V0ZU1vZHVsZSwgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzLCBwYXRjaEZldGNoLCAgfTtcblxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9YXBwLXJvdXRlLmpzLm1hcCJdLCJuYW1lcyI6W10sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fquizzes%2Froute&page=%2Fapi%2Fquizzes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquizzes%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Cmy-app-20250709T192102Z-1-001%5Cmy-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Cmy-app-20250709T192102Z-1-001%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "(ssr)/./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true!":
/*!******************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-flight-client-entry-loader.js?server=true! ***!
  \******************************************************************************************************/
/***/ (() => {



/***/ }),

/***/ "../app-render/after-task-async-storage.external":
/*!***********************************************************************************!*\
  !*** external "next/dist/server/app-render/after-task-async-storage.external.js" ***!
  \***********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/after-task-async-storage.external.js");

/***/ }),

/***/ "../app-render/work-async-storage.external":
/*!*****************************************************************************!*\
  !*** external "next/dist/server/app-render/work-async-storage.external.js" ***!
  \*****************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-async-storage.external.js");

/***/ }),

/***/ "./work-unit-async-storage.external":
/*!**********************************************************************************!*\
  !*** external "next/dist/server/app-render/work-unit-async-storage.external.js" ***!
  \**********************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/app-render/work-unit-async-storage.external.js");

/***/ }),

/***/ "@prisma/client":
/*!*********************************!*\
  !*** external "@prisma/client" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("@prisma/client");

/***/ }),

/***/ "next/dist/compiled/next-server/app-page.runtime.dev.js":
/*!*************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-page.runtime.dev.js" ***!
  \*************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-page.runtime.dev.js");

/***/ }),

/***/ "next/dist/compiled/next-server/app-route.runtime.dev.js":
/*!**************************************************************************!*\
  !*** external "next/dist/compiled/next-server/app-route.runtime.dev.js" ***!
  \**************************************************************************/
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/compiled/next-server/app-route.runtime.dev.js");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fquizzes%2Froute&page=%2Fapi%2Fquizzes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fquizzes%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDownloads%5Cmy-app-20250709T192102Z-1-001%5Cmy-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDownloads%5Cmy-app-20250709T192102Z-1-001%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();