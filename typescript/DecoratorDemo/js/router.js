"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Post = exports.Get = exports.initRouter = void 0;
var router = {};
function setRouter(url, option) {
    router[url] = router[url] || [];
    router[url].push(option);
}
function initRouter() {
    Object.keys(router).forEach(function (e) {
        console.log(e);
        console.log(router[e]);
    });
}
exports.initRouter = initRouter;
exports.Get = function (url) {
    var beforeMiddlewares = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        beforeMiddlewares[_i - 1] = arguments[_i];
    }
    return function (target, funcName, descriptor) {
        var option = {
            httpMethod: funcName,
            beforeMiddlewares: beforeMiddlewares,
            constructorFn: target.constructor,
            className: target.constructor.name,
            url: url
        };
        setRouter(url, option);
    };
};
exports.Post = function (url) {
    var beforeMiddlewares = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        beforeMiddlewares[_i - 1] = arguments[_i];
    }
    return function (target, funcName, descriptor) {
        var option = {
            httpMethod: funcName,
            beforeMiddlewares: beforeMiddlewares,
            constructorFn: target.constructor,
            className: target.constructor.name,
            url: url
        };
        setRouter(url, option);
    };
};
