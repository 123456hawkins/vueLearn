var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// 抽象类也叫基类
// abstract定义的方法不能实现
var Js = /** @class */ (function () {
    function Js(name) {
        this.name = name;
    }
    Js.prototype.getName = function () {
        return this.name;
    };
    return Js;
}());
// 但是继承抽象类要实现抽象方法
var React = /** @class */ (function (_super) {
    __extends(React, _super);
    function React() {
        return _super.call(this) || this;
    }
    React.prototype.init = function (name) {
        this.name = name;
    };
    return React;
}(Js));
var react = new React();
react.init('hawkins');
