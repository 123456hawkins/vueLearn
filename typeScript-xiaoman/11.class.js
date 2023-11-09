// private只能给内部使用,protected可以给内部和子类使用
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
// 虚拟DOM简单版
var Dom = /** @class */ (function () {
    function Dom() {
    }
    // 创建节点方法
    Dom.prototype.createElement = function (el) {
        return document.createElement(el);
    };
    // 填充文本方法
    Dom.prototype.setText = function (el, text) {
        el.textContent = text;
    };
    // 渲染函数
    Dom.prototype.render = function (data) {
        var _this = this;
        var root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(function (item) {
                var child = _this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text);
        }
        return root; // 返回创建的根元素
    };
    return Dom;
}());
// 对类进行约束
var Vue = /** @class */ (function (_super) {
    __extends(Vue, _super);
    function Vue(options) {
        var _this = _super.call(this) || this;
        _this.options = options;
        return _this;
    }
    // 静态方法表示可以从类上直接调用的方法,静态方法只能调用静态方法和静态属性,不能调用其他方法和属性
    Vue.version = function () {
        return '1.9.0';
    };
    Vue.prototype.init = function () {
        var data = {
            tag: 'div',
            text: 'father',
            children: [
                {
                    tag: 'section',
                    text: 'child1',
                },
                {
                    tag: 'section',
                    text: 'child2',
                },
            ],
        };
        var app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        if (app) {
            app.appendChild(this.render(data));
        }
    };
    return Vue;
}(Dom));
new Vue({
    el: '#app'
});
console.log(Vue.version());
var Ref = /** @class */ (function () {
    function Ref(value) {
        this._value = value;
    }
    Object.defineProperty(Ref.prototype, "value", {
        get: function () {
            return this._value;
        },
        set: function (newVal) {
            this._value = newVal + '1';
        },
        enumerable: false,
        configurable: true
    });
    return Ref;
}());
var r1 = new Ref('waefa');
console.log(r1.value);
