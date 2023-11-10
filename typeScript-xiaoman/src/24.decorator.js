// 装饰器decorator
// 1.类装饰器 ClassDecorator
// 2.属性装饰器 PropertyDecorator
// 3.参数装饰器 ParameterDecorator
// 4.方法装饰器 MethodDecorator
// 5.装饰器工厂
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
// 类装饰器
// const Base:ClassDecorator=(target)=>{
//   // target是传入类的构造函数
//   console.log(target);
//   // 拿到构造函数就可以不用管这个类给这个类添加属性和方法
//   target.prototype.__name='hawkins'
//   target.prototype.fn=()=>{
//     console.log('caonima');
//   }
// }
// 装饰器工厂，也叫函数闭包
var Base = function (name) {
    var fn = function (target) {
        // target是传入类的构造函数
        console.log(target);
        // 拿到构造函数就可以不用管这个类给这个类添加属性和方法
        target.prototype.__name = name;
        target.prototype.fn = function () {
            console.log('caonima');
        };
    };
    return fn;
};
// 方法装饰器
var Get = function (url) {
    var fn = function (target, key, descriptor) {
        console.log(target, key, descriptor);
    };
    return fn;
};
var Http = function () {
    var _classDecorators = [Base('hawkins')];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _instanceExtraInitializers = [];
    var _getList_decorators;
    var Http = _classThis = /** @class */ (function () {
        function Http_1() {
            __runInitializers(this, _instanceExtraInitializers);
        }
        Http_1.prototype.getList = function (data) {
            console.log(data);
        };
        return Http_1;
    }());
    __setFunctionName(_classThis, "Http");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _getList_decorators = [Get('https://www.baidu.com')];
        __esDecorate(_classThis, null, _getList_decorators, { kind: "method", name: "getList", static: false, private: false, access: { has: function (obj) { return "getList" in obj; }, get: function (obj) { return obj.getList; } }, metadata: _metadata }, null, _instanceExtraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Http = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Http = _classThis;
}();
var http = new Http();
console.log(http.__name);
http.fn();
