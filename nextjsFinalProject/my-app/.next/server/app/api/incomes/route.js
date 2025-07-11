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
exports.id = "app/api/incomes/route";
exports.ids = ["app/api/incomes/route"];
exports.modules = {

/***/ "(rsc)/./app/api/incomes/route.js":
/*!**********************************!*\
  !*** ./app/api/incomes/route.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.js\");\n\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const filterDate = searchParams.get('date');\n    const userId = parseInt(req.headers.get('x-user-id'));\n    if (!userId) {\n        return new Response('Unauthorized', {\n            status: 401\n        });\n    }\n    const incomes = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].income.findMany({\n        where: {\n            userId,\n            ...filterDate && {\n                date: {\n                    startsWith: filterDate\n                }\n            }\n        },\n        orderBy: {\n            date: 'desc'\n        }\n    });\n    return Response.json(incomes);\n}\nasync function POST(req) {\n    const body = await req.json();\n    const { title, amount, date, userId } = body;\n    if (!title || !amount || !date || !userId) {\n        return new Response('Invalid data', {\n            status: 400\n        });\n    }\n    const newIncome = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].income.create({\n        data: {\n            title,\n            amount,\n            date,\n            userId\n        }\n    });\n    return Response.json(newIncome);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2luY29tZXMvcm91dGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQWtDO0FBRTNCLGVBQWVDLElBQUlDLEdBQUc7SUFDM0IsTUFBTSxFQUFFQyxZQUFZLEVBQUUsR0FBRyxJQUFJQyxJQUFJRixJQUFJRyxHQUFHO0lBQ3hDLE1BQU1DLGFBQWFILGFBQWFJLEdBQUcsQ0FBQztJQUNwQyxNQUFNQyxTQUFTQyxTQUFTUCxJQUFJUSxPQUFPLENBQUNILEdBQUcsQ0FBQztJQUV4QyxJQUFJLENBQUNDLFFBQVE7UUFDWCxPQUFPLElBQUlHLFNBQVMsZ0JBQWdCO1lBQUVDLFFBQVE7UUFBSTtJQUNwRDtJQUVBLE1BQU1DLFVBQVUsTUFBTWIsbURBQU1BLENBQUNjLE1BQU0sQ0FBQ0MsUUFBUSxDQUFDO1FBQzNDQyxPQUFPO1lBQ0xSO1lBQ0EsR0FBSUYsY0FBYztnQkFDaEJXLE1BQU07b0JBQ0pDLFlBQVlaO2dCQUNkO1lBQ0YsQ0FBQztRQUNIO1FBQ0FhLFNBQVM7WUFBRUYsTUFBTTtRQUFPO0lBQzFCO0lBRUEsT0FBT04sU0FBU1MsSUFBSSxDQUFDUDtBQUN2QjtBQUVPLGVBQWVRLEtBQUtuQixHQUFHO0lBQzVCLE1BQU1vQixPQUFPLE1BQU1wQixJQUFJa0IsSUFBSTtJQUMzQixNQUFNLEVBQUVHLEtBQUssRUFBRUMsTUFBTSxFQUFFUCxJQUFJLEVBQUVULE1BQU0sRUFBRSxHQUFHYztJQUV4QyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsVUFBVSxDQUFDUCxRQUFRLENBQUNULFFBQVE7UUFDekMsT0FBTyxJQUFJRyxTQUFTLGdCQUFnQjtZQUFFQyxRQUFRO1FBQUk7SUFDcEQ7SUFFQSxNQUFNYSxZQUFZLE1BQU16QixtREFBTUEsQ0FBQ2MsTUFBTSxDQUFDWSxNQUFNLENBQUM7UUFDM0NDLE1BQU07WUFDSko7WUFDQUM7WUFDQVA7WUFDQVQ7UUFDRjtJQUNGO0lBRUEsT0FBT0csU0FBU1MsSUFBSSxDQUFDSztBQUN2QiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxuZXh0anNGaW5hbFByb2plY3RcXG15LWFwcFxcYXBwXFxhcGlcXGluY29tZXNcXHJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBwcmlzbWEgZnJvbSAnQC9saWIvcHJpc21hJztcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBHRVQocmVxKSB7XHJcbiAgY29uc3QgeyBzZWFyY2hQYXJhbXMgfSA9IG5ldyBVUkwocmVxLnVybCk7XHJcbiAgY29uc3QgZmlsdGVyRGF0ZSA9IHNlYXJjaFBhcmFtcy5nZXQoJ2RhdGUnKTtcclxuICBjb25zdCB1c2VySWQgPSBwYXJzZUludChyZXEuaGVhZGVycy5nZXQoJ3gtdXNlci1pZCcpKTtcclxuXHJcbiAgaWYgKCF1c2VySWQpIHtcclxuICAgIHJldHVybiBuZXcgUmVzcG9uc2UoJ1VuYXV0aG9yaXplZCcsIHsgc3RhdHVzOiA0MDEgfSk7XHJcbiAgfVxyXG5cclxuICBjb25zdCBpbmNvbWVzID0gYXdhaXQgcHJpc21hLmluY29tZS5maW5kTWFueSh7XHJcbiAgICB3aGVyZToge1xyXG4gICAgICB1c2VySWQsXHJcbiAgICAgIC4uLihmaWx0ZXJEYXRlICYmIHtcclxuICAgICAgICBkYXRlOiB7XHJcbiAgICAgICAgICBzdGFydHNXaXRoOiBmaWx0ZXJEYXRlXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9yZGVyQnk6IHsgZGF0ZTogJ2Rlc2MnIH1cclxuICB9KTtcclxuXHJcbiAgcmV0dXJuIFJlc3BvbnNlLmpzb24oaW5jb21lcyk7XHJcbn1cclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBQT1NUKHJlcSkge1xyXG4gIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gIGNvbnN0IHsgdGl0bGUsIGFtb3VudCwgZGF0ZSwgdXNlcklkIH0gPSBib2R5O1xyXG5cclxuICBpZiAoIXRpdGxlIHx8ICFhbW91bnQgfHwgIWRhdGUgfHwgIXVzZXJJZCkge1xyXG4gICAgcmV0dXJuIG5ldyBSZXNwb25zZSgnSW52YWxpZCBkYXRhJywgeyBzdGF0dXM6IDQwMCB9KTtcclxuICB9XHJcblxyXG4gIGNvbnN0IG5ld0luY29tZSA9IGF3YWl0IHByaXNtYS5pbmNvbWUuY3JlYXRlKHtcclxuICAgIGRhdGE6IHtcclxuICAgICAgdGl0bGUsXHJcbiAgICAgIGFtb3VudCxcclxuICAgICAgZGF0ZSxcclxuICAgICAgdXNlcklkXHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBSZXNwb25zZS5qc29uKG5ld0luY29tZSk7XHJcbn1cclxuIl0sIm5hbWVzIjpbInByaXNtYSIsIkdFVCIsInJlcSIsInNlYXJjaFBhcmFtcyIsIlVSTCIsInVybCIsImZpbHRlckRhdGUiLCJnZXQiLCJ1c2VySWQiLCJwYXJzZUludCIsImhlYWRlcnMiLCJSZXNwb25zZSIsInN0YXR1cyIsImluY29tZXMiLCJpbmNvbWUiLCJmaW5kTWFueSIsIndoZXJlIiwiZGF0ZSIsInN0YXJ0c1dpdGgiLCJvcmRlckJ5IiwianNvbiIsIlBPU1QiLCJib2R5IiwidGl0bGUiLCJhbW91bnQiLCJuZXdJbmNvbWUiLCJjcmVhdGUiLCJkYXRhIl0sImlnbm9yZUxpc3QiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./app/api/incomes/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (global.prisma) {\n    prisma = global.prisma;\n} else {\n    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    global.prisma = prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQUVKLElBQUlDLE9BQU9ELE1BQU0sRUFBRTtJQUNqQkEsU0FBU0MsT0FBT0QsTUFBTTtBQUN4QixPQUFPO0lBQ0xBLFNBQVMsSUFBSUQsd0RBQVlBO0lBQ3pCRSxPQUFPRCxNQUFNLEdBQUdBO0FBQ2xCO0FBRUEsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcbmV4dGpzRmluYWxQcm9qZWN0XFxteS1hcHBcXGxpYlxccHJpc21hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbmxldCBwcmlzbWE7XHJcblxyXG5pZiAoZ2xvYmFsLnByaXNtYSkge1xyXG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XHJcbn0gZWxzZSB7XHJcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fincomes%2Froute&page=%2Fapi%2Fincomes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fincomes%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fincomes%2Froute&page=%2Fapi%2Fincomes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fincomes%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_User_Desktop_nextjsFinalProject_my_app_app_api_incomes_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/incomes/route.js */ \"(rsc)/./app/api/incomes/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/incomes/route\",\n        pathname: \"/api/incomes\",\n        filename: \"route\",\n        bundlePath: \"app/api/incomes/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\User\\\\Desktop\\\\nextjsFinalProject\\\\my-app\\\\app\\\\api\\\\incomes\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_User_Desktop_nextjsFinalProject_my_app_app_api_incomes_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZpbmNvbWVzJTJGcm91dGUmcGFnZT0lMkZhcGklMkZpbmNvbWVzJTJGcm91dGUmYXBwUGF0aHM9JnBhZ2VQYXRoPXByaXZhdGUtbmV4dC1hcHAtZGlyJTJGYXBpJTJGaW5jb21lcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNVc2VyJTVDRGVza3RvcCU1Q25leHRqc0ZpbmFsUHJvamVjdCU1Q215LWFwcCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDVXNlciU1Q0Rlc2t0b3AlNUNuZXh0anNGaW5hbFByb2plY3QlNUNteS1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2lDO0FBQzlHO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxcbmV4dGpzRmluYWxQcm9qZWN0XFxcXG15LWFwcFxcXFxhcHBcXFxcYXBpXFxcXGluY29tZXNcXFxccm91dGUuanNcIjtcbi8vIFdlIGluamVjdCB0aGUgbmV4dENvbmZpZ091dHB1dCBoZXJlIHNvIHRoYXQgd2UgY2FuIHVzZSB0aGVtIGluIHRoZSByb3V0ZVxuLy8gbW9kdWxlLlxuY29uc3QgbmV4dENvbmZpZ091dHB1dCA9IFwiXCJcbmNvbnN0IHJvdXRlTW9kdWxlID0gbmV3IEFwcFJvdXRlUm91dGVNb2R1bGUoe1xuICAgIGRlZmluaXRpb246IHtcbiAgICAgICAga2luZDogUm91dGVLaW5kLkFQUF9ST1VURSxcbiAgICAgICAgcGFnZTogXCIvYXBpL2luY29tZXMvcm91dGVcIixcbiAgICAgICAgcGF0aG5hbWU6IFwiL2FwaS9pbmNvbWVzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9pbmNvbWVzL3JvdXRlXCJcbiAgICB9LFxuICAgIHJlc29sdmVkUGFnZVBhdGg6IFwiQzpcXFxcVXNlcnNcXFxcVXNlclxcXFxEZXNrdG9wXFxcXG5leHRqc0ZpbmFsUHJvamVjdFxcXFxteS1hcHBcXFxcYXBwXFxcXGFwaVxcXFxpbmNvbWVzXFxcXHJvdXRlLmpzXCIsXG4gICAgbmV4dENvbmZpZ091dHB1dCxcbiAgICB1c2VybGFuZFxufSk7XG4vLyBQdWxsIG91dCB0aGUgZXhwb3J0cyB0aGF0IHdlIG5lZWQgdG8gZXhwb3NlIGZyb20gdGhlIG1vZHVsZS4gVGhpcyBzaG91bGRcbi8vIGJlIGVsaW1pbmF0ZWQgd2hlbiB3ZSd2ZSBtb3ZlZCB0aGUgb3RoZXIgcm91dGVzIHRvIHRoZSBuZXcgZm9ybWF0LiBUaGVzZVxuLy8gYXJlIHVzZWQgdG8gaG9vayBpbnRvIHRoZSByb3V0ZS5cbmNvbnN0IHsgd29ya0FzeW5jU3RvcmFnZSwgd29ya1VuaXRBc3luY1N0b3JhZ2UsIHNlcnZlckhvb2tzIH0gPSByb3V0ZU1vZHVsZTtcbmZ1bmN0aW9uIHBhdGNoRmV0Y2goKSB7XG4gICAgcmV0dXJuIF9wYXRjaEZldGNoKHtcbiAgICAgICAgd29ya0FzeW5jU3RvcmFnZSxcbiAgICAgICAgd29ya1VuaXRBc3luY1N0b3JhZ2VcbiAgICB9KTtcbn1cbmV4cG9ydCB7IHJvdXRlTW9kdWxlLCB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MsIHBhdGNoRmV0Y2gsICB9O1xuXG4vLyMgc291cmNlTWFwcGluZ1VSTD1hcHAtcm91dGUuanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fincomes%2Froute&page=%2Fapi%2Fincomes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fincomes%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fincomes%2Froute&page=%2Fapi%2Fincomes%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fincomes%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();