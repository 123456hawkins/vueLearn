"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.x = void 0;
exports.x = 2;
var A;
(function (A) {
    A.a = 1;
    let C;
    (function (C) {
        C.c = 2;
    })(C = A.C || (A.C = {}));
})(A || (A = {}));
console.log(A.a);
console.log(A.C.c);
