"use strict";
(() => {
var exports = {};
exports.id = 453;
exports.ids = [453];
exports.modules = {

/***/ 8505:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/**
 * handling CORS issue example
 * https://github.com/vercel/next.js/blob/canary/examples/api-routes-cors/pages/api/cors.ts
 */ function handler(req, res) {
    if (req.method == "GET") {
        res.status(200).json({
            text: "Hello"
        });
    } else if (req.method == "POST") {
    // bla bla bla
    }
}


/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__(8505));
module.exports = __webpack_exports__;

})();