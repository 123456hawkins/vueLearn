function add(a = 10, b = 20, c) {
    return a + b;
}
console.log(add(1));
function add2(user) {
    return user;
}
console.log(add2({ name: 'hawkins', age: 123 }));
let obj = {
    user: [1, 2, 3],
    add(num) {
        this.user.push(num);
    },
};
obj.add(2);
console.log(obj);
let user = [1, 2, 3];
function findNum(ids) {
    if (typeof ids == 'number') {
        return user.filter(v => v == ids);
    }
    else if (Array.isArray(ids)) {
        user.push(...ids);
        return user;
    }
    else {
        return user;
    }
}
console.log(findNum());
console.log(findNum([4, 5, 6]));
