class Dom {
    createElement(el) {
        return document.createElement(el);
    }
    setText(el, text) {
        el.textContent = text;
    }
    render(data) {
        let root = this.createElement(data.tag);
        if (data.children && Array.isArray(data.children)) {
            data.children.forEach(item => {
                let child = this.render(item);
                root.appendChild(child);
            });
        }
        else {
            this.setText(root, data.text);
        }
        return root;
    }
}
class Vue extends Dom {
    options;
    constructor(options) {
        super();
        this.options = options;
    }
    static version() {
        return '1.9.0';
    }
    init() {
        let data = {
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
        let app = typeof this.options.el == 'string' ? document.querySelector(this.options.el) : this.options.el;
        if (app) {
            app.appendChild(this.render(data));
        }
    }
}
new Vue({
    el: '#app'
});
console.log(Vue.version());
class Ref {
    _value;
    constructor(value) {
        this._value = value;
    }
    get value() {
        return this._value + 'avwef';
    }
    set value(newVal) {
        this._value = newVal + '1';
    }
}
const r1 = new Ref('waefa');
console.log(r1.value);
