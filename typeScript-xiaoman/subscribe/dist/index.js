class Dispatch {
    constructor() {
        this.list = {};
    }
    on(name, fn) {
        const callback = this.list[name] || [];
        callback.push(fn);
        this.list[name] = callback;
    }
    emit(name, ...args) {
    }
    off() {
    }
    once() {
    }
}
const o = new Dispatch();
o.on('post', () => {
    console.log(1);
});
