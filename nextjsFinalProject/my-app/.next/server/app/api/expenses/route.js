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
exports.id = "app/api/expenses/route";
exports.ids = ["app/api/expenses/route"];
exports.modules = {

/***/ "(rsc)/./app/api/expenses/route.js":
/*!***********************************!*\
  !*** ./app/api/expenses/route.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   GET: () => (/* binding */ GET),\n/* harmony export */   POST: () => (/* binding */ POST)\n/* harmony export */ });\n/* harmony import */ var _lib_prisma__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/lib/prisma */ \"(rsc)/./lib/prisma.js\");\n\nasync function GET(req) {\n    const { searchParams } = new URL(req.url);\n    const filterDate = searchParams.get('date');\n    const expenses = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].expense.findMany({\n        where: filterDate ? {\n            date: {\n                startsWith: filterDate\n            }\n        } : {},\n        orderBy: {\n            date: 'desc'\n        }\n    });\n    return Response.json(expenses);\n}\nasync function POST(req) {\n    try {\n        const body = await req.json();\n        const { title, amount, date, userId } = body;\n        if (!title || !amount || !date || !userId) {\n            return new Response(JSON.stringify({\n                error: 'Bütün sahələr tələb olunur.'\n            }), {\n                status: 400\n            });\n        }\n        const newExpense = await _lib_prisma__WEBPACK_IMPORTED_MODULE_0__[\"default\"].expense.create({\n            data: {\n                title,\n                amount,\n                date,\n                user: {\n                    connect: {\n                        id: userId\n                    }\n                }\n            }\n        });\n        return Response.json(newExpense);\n    } catch (error) {\n        console.error('POST xətası:', error);\n        return new Response(JSON.stringify({\n            error: 'Server xətası'\n        }), {\n            status: 500\n        });\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9hcHAvYXBpL2V4cGVuc2VzL3JvdXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUFrQztBQUUzQixlQUFlQyxJQUFJQyxHQUFHO0lBQzNCLE1BQU0sRUFBRUMsWUFBWSxFQUFFLEdBQUcsSUFBSUMsSUFBSUYsSUFBSUcsR0FBRztJQUN4QyxNQUFNQyxhQUFhSCxhQUFhSSxHQUFHLENBQUM7SUFFcEMsTUFBTUMsV0FBVyxNQUFNUixtREFBTUEsQ0FBQ1MsT0FBTyxDQUFDQyxRQUFRLENBQUM7UUFDN0NDLE9BQU9MLGFBQWE7WUFDbEJNLE1BQU07Z0JBQUVDLFlBQVlQO1lBQVc7UUFDakMsSUFBSSxDQUFDO1FBQ0xRLFNBQVM7WUFBRUYsTUFBTTtRQUFPO0lBQzFCO0lBRUEsT0FBT0csU0FBU0MsSUFBSSxDQUFDUjtBQUN2QjtBQUVPLGVBQWVTLEtBQUtmLEdBQUc7SUFDNUIsSUFBSTtRQUNGLE1BQU1nQixPQUFPLE1BQU1oQixJQUFJYyxJQUFJO1FBQzNCLE1BQU0sRUFBRUcsS0FBSyxFQUFFQyxNQUFNLEVBQUVSLElBQUksRUFBRVMsTUFBTSxFQUFFLEdBQUdIO1FBRXhDLElBQUksQ0FBQ0MsU0FBUyxDQUFDQyxVQUFVLENBQUNSLFFBQVEsQ0FBQ1MsUUFBUTtZQUN6QyxPQUFPLElBQUlOLFNBQVNPLEtBQUtDLFNBQVMsQ0FBQztnQkFBRUMsT0FBTztZQUE4QixJQUFJO2dCQUFFQyxRQUFRO1lBQUk7UUFDOUY7UUFFQSxNQUFNQyxhQUFhLE1BQU0xQixtREFBTUEsQ0FBQ1MsT0FBTyxDQUFDa0IsTUFBTSxDQUFDO1lBQzdDQyxNQUFNO2dCQUNKVDtnQkFDQUM7Z0JBQ0FSO2dCQUNBaUIsTUFBTTtvQkFDSkMsU0FBUzt3QkFBRUMsSUFBSVY7b0JBQU87Z0JBQ3hCO1lBQ0Y7UUFDRjtRQUVBLE9BQU9OLFNBQVNDLElBQUksQ0FBQ1U7SUFDdkIsRUFBRSxPQUFPRixPQUFPO1FBQ2RRLFFBQVFSLEtBQUssQ0FBQyxnQkFBZ0JBO1FBQzlCLE9BQU8sSUFBSVQsU0FBU08sS0FBS0MsU0FBUyxDQUFDO1lBQUVDLE9BQU87UUFBZ0IsSUFBSTtZQUFFQyxRQUFRO1FBQUk7SUFDaEY7QUFDRiIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxVc2VyXFxEZXNrdG9wXFxuZXh0anNGaW5hbFByb2plY3RcXG15LWFwcFxcYXBwXFxhcGlcXGV4cGVuc2VzXFxyb3V0ZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcHJpc21hIGZyb20gJ0AvbGliL3ByaXNtYSc7XHJcblxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gR0VUKHJlcSkge1xyXG4gIGNvbnN0IHsgc2VhcmNoUGFyYW1zIH0gPSBuZXcgVVJMKHJlcS51cmwpO1xyXG4gIGNvbnN0IGZpbHRlckRhdGUgPSBzZWFyY2hQYXJhbXMuZ2V0KCdkYXRlJyk7XHJcblxyXG4gIGNvbnN0IGV4cGVuc2VzID0gYXdhaXQgcHJpc21hLmV4cGVuc2UuZmluZE1hbnkoe1xyXG4gICAgd2hlcmU6IGZpbHRlckRhdGUgPyB7XHJcbiAgICAgIGRhdGU6IHsgc3RhcnRzV2l0aDogZmlsdGVyRGF0ZSB9XHJcbiAgICB9IDoge30sXHJcbiAgICBvcmRlckJ5OiB7IGRhdGU6ICdkZXNjJyB9XHJcbiAgfSk7XHJcblxyXG4gIHJldHVybiBSZXNwb25zZS5qc29uKGV4cGVuc2VzKTtcclxufVxyXG5cclxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIFBPU1QocmVxKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGJvZHkgPSBhd2FpdCByZXEuanNvbigpO1xyXG4gICAgY29uc3QgeyB0aXRsZSwgYW1vdW50LCBkYXRlLCB1c2VySWQgfSA9IGJvZHk7XHJcblxyXG4gICAgaWYgKCF0aXRsZSB8fCAhYW1vdW50IHx8ICFkYXRlIHx8ICF1c2VySWQpIHtcclxuICAgICAgcmV0dXJuIG5ldyBSZXNwb25zZShKU09OLnN0cmluZ2lmeSh7IGVycm9yOiAnQsO8dMO8biBzYWjJmWzJmXIgdMmZbMmZYiBvbHVudXIuJyB9KSwgeyBzdGF0dXM6IDQwMCB9KTtcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBuZXdFeHBlbnNlID0gYXdhaXQgcHJpc21hLmV4cGVuc2UuY3JlYXRlKHtcclxuICAgICAgZGF0YToge1xyXG4gICAgICAgIHRpdGxlLFxyXG4gICAgICAgIGFtb3VudCxcclxuICAgICAgICBkYXRlLFxyXG4gICAgICAgIHVzZXI6IHtcclxuICAgICAgICAgIGNvbm5lY3Q6IHsgaWQ6IHVzZXJJZCB9XHJcbiAgICAgICAgfVxyXG4gICAgICB9XHJcbiAgICB9KTtcclxuXHJcbiAgICByZXR1cm4gUmVzcG9uc2UuanNvbihuZXdFeHBlbnNlKTtcclxuICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgY29uc29sZS5lcnJvcignUE9TVCB4yZl0YXPEsTonLCBlcnJvcik7XHJcbiAgICByZXR1cm4gbmV3IFJlc3BvbnNlKEpTT04uc3RyaW5naWZ5KHsgZXJyb3I6ICdTZXJ2ZXIgeMmZdGFzxLEnIH0pLCB7IHN0YXR1czogNTAwIH0pO1xyXG4gIH1cclxufVxyXG4iXSwibmFtZXMiOlsicHJpc21hIiwiR0VUIiwicmVxIiwic2VhcmNoUGFyYW1zIiwiVVJMIiwidXJsIiwiZmlsdGVyRGF0ZSIsImdldCIsImV4cGVuc2VzIiwiZXhwZW5zZSIsImZpbmRNYW55Iiwid2hlcmUiLCJkYXRlIiwic3RhcnRzV2l0aCIsIm9yZGVyQnkiLCJSZXNwb25zZSIsImpzb24iLCJQT1NUIiwiYm9keSIsInRpdGxlIiwiYW1vdW50IiwidXNlcklkIiwiSlNPTiIsInN0cmluZ2lmeSIsImVycm9yIiwic3RhdHVzIiwibmV3RXhwZW5zZSIsImNyZWF0ZSIsImRhdGEiLCJ1c2VyIiwiY29ubmVjdCIsImlkIiwiY29uc29sZSJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./app/api/expenses/route.js\n");

/***/ }),

/***/ "(rsc)/./lib/prisma.js":
/*!***********************!*\
  !*** ./lib/prisma.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @prisma/client */ \"@prisma/client\");\n/* harmony import */ var _prisma_client__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_prisma_client__WEBPACK_IMPORTED_MODULE_0__);\n\nlet prisma;\nif (global.prisma) {\n    prisma = global.prisma;\n} else {\n    prisma = new _prisma_client__WEBPACK_IMPORTED_MODULE_0__.PrismaClient();\n    global.prisma = prisma;\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (prisma);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9saWIvcHJpc21hLmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUE4QztBQUU5QyxJQUFJQztBQUVKLElBQUlDLE9BQU9ELE1BQU0sRUFBRTtJQUNqQkEsU0FBU0MsT0FBT0QsTUFBTTtBQUN4QixPQUFPO0lBQ0xBLFNBQVMsSUFBSUQsd0RBQVlBO0lBQ3pCRSxPQUFPRCxNQUFNLEdBQUdBO0FBQ2xCO0FBRUEsaUVBQWVBLE1BQU1BLEVBQUMiLCJzb3VyY2VzIjpbIkM6XFxVc2Vyc1xcVXNlclxcRGVza3RvcFxcbmV4dGpzRmluYWxQcm9qZWN0XFxteS1hcHBcXGxpYlxccHJpc21hLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IFByaXNtYUNsaWVudCB9IGZyb20gJ0BwcmlzbWEvY2xpZW50JztcclxuXHJcbmxldCBwcmlzbWE7XHJcblxyXG5pZiAoZ2xvYmFsLnByaXNtYSkge1xyXG4gIHByaXNtYSA9IGdsb2JhbC5wcmlzbWE7XHJcbn0gZWxzZSB7XHJcbiAgcHJpc21hID0gbmV3IFByaXNtYUNsaWVudCgpO1xyXG4gIGdsb2JhbC5wcmlzbWEgPSBwcmlzbWE7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHByaXNtYTtcclxuIl0sIm5hbWVzIjpbIlByaXNtYUNsaWVudCIsInByaXNtYSIsImdsb2JhbCJdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./lib/prisma.js\n");

/***/ }),

/***/ "(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fexpenses%2Froute&page=%2Fapi%2Fexpenses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fexpenses%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fexpenses%2Froute&page=%2Fapi%2Fexpenses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fexpenses%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D! ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   patchFetch: () => (/* binding */ patchFetch),\n/* harmony export */   routeModule: () => (/* binding */ routeModule),\n/* harmony export */   serverHooks: () => (/* binding */ serverHooks),\n/* harmony export */   workAsyncStorage: () => (/* binding */ workAsyncStorage),\n/* harmony export */   workUnitAsyncStorage: () => (/* binding */ workUnitAsyncStorage)\n/* harmony export */ });\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/dist/server/route-modules/app-route/module.compiled */ \"(rsc)/./node_modules/next/dist/server/route-modules/app-route/module.compiled.js\");\n/* harmony import */ var next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/server/route-kind */ \"(rsc)/./node_modules/next/dist/server/route-kind.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/dist/server/lib/patch-fetch */ \"(rsc)/./node_modules/next/dist/server/lib/patch-fetch.js\");\n/* harmony import */ var next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var C_Users_User_Desktop_nextjsFinalProject_my_app_app_api_expenses_route_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/api/expenses/route.js */ \"(rsc)/./app/api/expenses/route.js\");\n\n\n\n\n// We inject the nextConfigOutput here so that we can use them in the route\n// module.\nconst nextConfigOutput = \"\"\nconst routeModule = new next_dist_server_route_modules_app_route_module_compiled__WEBPACK_IMPORTED_MODULE_0__.AppRouteRouteModule({\n    definition: {\n        kind: next_dist_server_route_kind__WEBPACK_IMPORTED_MODULE_1__.RouteKind.APP_ROUTE,\n        page: \"/api/expenses/route\",\n        pathname: \"/api/expenses\",\n        filename: \"route\",\n        bundlePath: \"app/api/expenses/route\"\n    },\n    resolvedPagePath: \"C:\\\\Users\\\\User\\\\Desktop\\\\nextjsFinalProject\\\\my-app\\\\app\\\\api\\\\expenses\\\\route.js\",\n    nextConfigOutput,\n    userland: C_Users_User_Desktop_nextjsFinalProject_my_app_app_api_expenses_route_js__WEBPACK_IMPORTED_MODULE_3__\n});\n// Pull out the exports that we need to expose from the module. This should\n// be eliminated when we've moved the other routes to the new format. These\n// are used to hook into the route.\nconst { workAsyncStorage, workUnitAsyncStorage, serverHooks } = routeModule;\nfunction patchFetch() {\n    return (0,next_dist_server_lib_patch_fetch__WEBPACK_IMPORTED_MODULE_2__.patchFetch)({\n        workAsyncStorage,\n        workUnitAsyncStorage\n    });\n}\n\n\n//# sourceMappingURL=app-route.js.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9uZXh0LWFwcC1sb2FkZXIvaW5kZXguanM/bmFtZT1hcHAlMkZhcGklMkZleHBlbnNlcyUyRnJvdXRlJnBhZ2U9JTJGYXBpJTJGZXhwZW5zZXMlMkZyb3V0ZSZhcHBQYXRocz0mcGFnZVBhdGg9cHJpdmF0ZS1uZXh0LWFwcC1kaXIlMkZhcGklMkZleHBlbnNlcyUyRnJvdXRlLmpzJmFwcERpcj1DJTNBJTVDVXNlcnMlNUNVc2VyJTVDRGVza3RvcCU1Q25leHRqc0ZpbmFsUHJvamVjdCU1Q215LWFwcCU1Q2FwcCZwYWdlRXh0ZW5zaW9ucz10c3gmcGFnZUV4dGVuc2lvbnM9dHMmcGFnZUV4dGVuc2lvbnM9anN4JnBhZ2VFeHRlbnNpb25zPWpzJnJvb3REaXI9QyUzQSU1Q1VzZXJzJTVDVXNlciU1Q0Rlc2t0b3AlNUNuZXh0anNGaW5hbFByb2plY3QlNUNteS1hcHAmaXNEZXY9dHJ1ZSZ0c2NvbmZpZ1BhdGg9dHNjb25maWcuanNvbiZiYXNlUGF0aD0mYXNzZXRQcmVmaXg9Jm5leHRDb25maWdPdXRwdXQ9JnByZWZlcnJlZFJlZ2lvbj0mbWlkZGxld2FyZUNvbmZpZz1lMzAlM0QhIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQStGO0FBQ3ZDO0FBQ3FCO0FBQ2tDO0FBQy9HO0FBQ0E7QUFDQTtBQUNBLHdCQUF3Qix5R0FBbUI7QUFDM0M7QUFDQSxjQUFjLGtFQUFTO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxZQUFZO0FBQ1osQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLFFBQVEsc0RBQXNEO0FBQzlEO0FBQ0EsV0FBVyw0RUFBVztBQUN0QjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQzBGOztBQUUxRiIsInNvdXJjZXMiOlsiIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEFwcFJvdXRlUm91dGVNb2R1bGUgfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9yb3V0ZS1tb2R1bGVzL2FwcC1yb3V0ZS9tb2R1bGUuY29tcGlsZWRcIjtcbmltcG9ydCB7IFJvdXRlS2luZCB9IGZyb20gXCJuZXh0L2Rpc3Qvc2VydmVyL3JvdXRlLWtpbmRcIjtcbmltcG9ydCB7IHBhdGNoRmV0Y2ggYXMgX3BhdGNoRmV0Y2ggfSBmcm9tIFwibmV4dC9kaXN0L3NlcnZlci9saWIvcGF0Y2gtZmV0Y2hcIjtcbmltcG9ydCAqIGFzIHVzZXJsYW5kIGZyb20gXCJDOlxcXFxVc2Vyc1xcXFxVc2VyXFxcXERlc2t0b3BcXFxcbmV4dGpzRmluYWxQcm9qZWN0XFxcXG15LWFwcFxcXFxhcHBcXFxcYXBpXFxcXGV4cGVuc2VzXFxcXHJvdXRlLmpzXCI7XG4vLyBXZSBpbmplY3QgdGhlIG5leHRDb25maWdPdXRwdXQgaGVyZSBzbyB0aGF0IHdlIGNhbiB1c2UgdGhlbSBpbiB0aGUgcm91dGVcbi8vIG1vZHVsZS5cbmNvbnN0IG5leHRDb25maWdPdXRwdXQgPSBcIlwiXG5jb25zdCByb3V0ZU1vZHVsZSA9IG5ldyBBcHBSb3V0ZVJvdXRlTW9kdWxlKHtcbiAgICBkZWZpbml0aW9uOiB7XG4gICAgICAgIGtpbmQ6IFJvdXRlS2luZC5BUFBfUk9VVEUsXG4gICAgICAgIHBhZ2U6IFwiL2FwaS9leHBlbnNlcy9yb3V0ZVwiLFxuICAgICAgICBwYXRobmFtZTogXCIvYXBpL2V4cGVuc2VzXCIsXG4gICAgICAgIGZpbGVuYW1lOiBcInJvdXRlXCIsXG4gICAgICAgIGJ1bmRsZVBhdGg6IFwiYXBwL2FwaS9leHBlbnNlcy9yb3V0ZVwiXG4gICAgfSxcbiAgICByZXNvbHZlZFBhZ2VQYXRoOiBcIkM6XFxcXFVzZXJzXFxcXFVzZXJcXFxcRGVza3RvcFxcXFxuZXh0anNGaW5hbFByb2plY3RcXFxcbXktYXBwXFxcXGFwcFxcXFxhcGlcXFxcZXhwZW5zZXNcXFxccm91dGUuanNcIixcbiAgICBuZXh0Q29uZmlnT3V0cHV0LFxuICAgIHVzZXJsYW5kXG59KTtcbi8vIFB1bGwgb3V0IHRoZSBleHBvcnRzIHRoYXQgd2UgbmVlZCB0byBleHBvc2UgZnJvbSB0aGUgbW9kdWxlLiBUaGlzIHNob3VsZFxuLy8gYmUgZWxpbWluYXRlZCB3aGVuIHdlJ3ZlIG1vdmVkIHRoZSBvdGhlciByb3V0ZXMgdG8gdGhlIG5ldyBmb3JtYXQuIFRoZXNlXG4vLyBhcmUgdXNlZCB0byBob29rIGludG8gdGhlIHJvdXRlLlxuY29uc3QgeyB3b3JrQXN5bmNTdG9yYWdlLCB3b3JrVW5pdEFzeW5jU3RvcmFnZSwgc2VydmVySG9va3MgfSA9IHJvdXRlTW9kdWxlO1xuZnVuY3Rpb24gcGF0Y2hGZXRjaCgpIHtcbiAgICByZXR1cm4gX3BhdGNoRmV0Y2goe1xuICAgICAgICB3b3JrQXN5bmNTdG9yYWdlLFxuICAgICAgICB3b3JrVW5pdEFzeW5jU3RvcmFnZVxuICAgIH0pO1xufVxuZXhwb3J0IHsgcm91dGVNb2R1bGUsIHdvcmtBc3luY1N0b3JhZ2UsIHdvcmtVbml0QXN5bmNTdG9yYWdlLCBzZXJ2ZXJIb29rcywgcGF0Y2hGZXRjaCwgIH07XG5cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWFwcC1yb3V0ZS5qcy5tYXAiXSwibmFtZXMiOltdLCJpZ25vcmVMaXN0IjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fexpenses%2Froute&page=%2Fapi%2Fexpenses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fexpenses%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!\n");

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
var __webpack_exports__ = __webpack_require__.X(0, ["vendor-chunks/next"], () => (__webpack_exec__("(rsc)/./node_modules/next/dist/build/webpack/loaders/next-app-loader/index.js?name=app%2Fapi%2Fexpenses%2Froute&page=%2Fapi%2Fexpenses%2Froute&appPaths=&pagePath=private-next-app-dir%2Fapi%2Fexpenses%2Froute.js&appDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app%5Capp&pageExtensions=tsx&pageExtensions=ts&pageExtensions=jsx&pageExtensions=js&rootDir=C%3A%5CUsers%5CUser%5CDesktop%5CnextjsFinalProject%5Cmy-app&isDev=true&tsconfigPath=tsconfig.json&basePath=&assetPrefix=&nextConfigOutput=&preferredRegion=&middlewareConfig=e30%3D!")));
module.exports = __webpack_exports__;

})();