let a1 = Symbol(1);
let a2 = Symbol(2);
console.log(a1 === a2);
console.log(Symbol.for('hawkins') === Symbol.for('hawkins'));
let obj = {
    name: 1,
    [a1]: 111,
    [a2]: 222
};
console.log(obj);
for (let key in obj) {
    console.log(key);
}
console.log(Object.getOwnPropertySymbols(obj));
console.log(Reflect.ownKeys(obj));
