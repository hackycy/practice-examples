"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
function LogClass(obj) {
    return function (target) {
        console.log('>>>>>>>> 类装饰器 start >>>>>>>>>>');
        if (typeof obj === 'string') {
            console.log(obj);
        }
        else if (typeof obj === 'object') {
            var _a = obj.name, name_1 = _a === void 0 ? '' : _a;
            console.log(name_1);
        }
        console.log(target);
        console.log('>>>>>>>> 类装饰器 end >>>>>>>>>>');
    };
}
function LogFunction(obj) {
    return function (target, propertyKey, descriptor) {
        console.log('>>>>>>>> 方法装饰器 start >>>>>>>>>>');
        if (typeof obj === 'string') {
            console.log(obj);
        }
        else if (typeof obj === 'object') {
            var _a = obj.name, name_2 = _a === void 0 ? '' : _a;
            console.log(name_2);
        }
        console.log(propertyKey);
        console.log(descriptor);
        console.log('>>>>>>>> 方法装饰器 end >>>>>>>>>>');
    };
}
function LogProperty(dv) {
    return function (target, propertyName) {
        console.log('>>>>>>>> 属性装饰器 start >>>>>>>>>>');
        target[propertyName] = dv;
        console.log(target);
        console.log(propertyName);
        console.log(typeof target);
        console.log('>>>>>>>> 属性装饰器 end >>>>>>>>>>');
    };
}
var Poster = /** @class */ (function () {
    function Poster() {
    }
    Poster.prototype.write = function () {
        console.log('Post is Write');
    };
    __decorate([
        LogProperty(1000),
        __metadata("design:type", Number)
    ], Poster.prototype, "date", void 0);
    __decorate([
        LogFunction('record something'),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], Poster.prototype, "write", null);
    __decorate([
        LogProperty(2000),
        __metadata("design:type", Number)
    ], Poster, "sdate", void 0);
    Poster = __decorate([
        LogClass('cow')
    ], Poster);
    return Poster;
}());
var Article = /** @class */ (function () {
    function Article() {
    }
    Article = __decorate([
        LogClass({ name: 'cow2' })
    ], Article);
    return Article;
}());
var p = new Poster();
console.log(Poster.sdate);
console.log(p.date);
