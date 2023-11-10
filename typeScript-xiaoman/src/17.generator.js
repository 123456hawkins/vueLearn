function* gen() {
    yield Promise.resolve('hawkins');
    yield console.log('caonima');
    yield;
}
const man = gen();
console.log(man.next());
console.log(man.next());
console.log(man.next());
console.log(man.next());
let set = new Set([1.2, 2, 3, 3, 4, 5]);
console.log(set);
let map = new Map();
let Arr = [1, 2, 3];
map.set(Arr, 'hawkisn');
console.log(map.get(Arr));
function args() {
    console.log(arguments);
}
const each = (value) => {
    let It = value[Symbol.iterator]();
    let next = { done: false };
    while (!next.done) {
        next = It.next();
        if (!next.done) {
            console.log(next.value);
        }
    }
};
each(map);
each(set);
for (let value of map) {
    console.log(value);
}
let obj2 = {
    max: 5,
    current: 0,
    [Symbol.iterator]() {
        return {
            max: this.max,
            current: this.current,
            next() {
                if (this.current == this.max) {
                    return {
                        value: undefined,
                        done: true
                    };
                }
                else {
                    return {
                        value: this.current++,
                        done: false
                    };
                }
            }
        };
    }
};
for (let val of obj2) {
    console.log(val);
}
